import fs from 'fs';
import path from 'path';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.argv[2];
const REPO_OWNER = process.env.REPO_OWNER || process.argv[3] || 'hamzaq9fzbth-spec';
const REPO_NAME = process.env.REPO_NAME || process.argv[4] || 'voltx-store';
const PROJECT_DIR = 'C:\\Users\\Dell\\.gemini\\antigravity\\scratch\\aura-ecommerce';

if (!GITHUB_TOKEN) {
  console.error('ERROR: Missing GitHub Personal Access Token.');
  process.exit(1);
}

const headers = {
  'Authorization': `Bearer ${GITHUB_TOKEN}`,
  'User-Agent': 'VOLTX-GitHub-Uploader/1.0',
  'Accept': 'application/vnd.github+json',
  'Content-Type': 'application/json'
};

async function api(endpoint, options = {}, retries = 3) {
  const url = `https://api.github.com${endpoint}`;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { ...options, headers: { ...headers, ...options.headers } });
      const text = await res.text();
      let json;
      try {
        json = JSON.parse(text);
      } catch {
        json = text;
      }
      if (!res.ok) {
        if ((res.status >= 500 || res.status === 429) && attempt < retries) {
          await new Promise(r => setTimeout(r, attempt * 1500));
          continue;
        }
        throw new Error(`API Error ${res.status} on ${endpoint}: ${typeof json === 'object' ? JSON.stringify(json) : json}`);
      }
      return json;
    } catch (err) {
      if (attempt < retries) {
        await new Promise(r => setTimeout(r, attempt * 1500));
        continue;
      }
      throw err;
    }
  }
}

// Recursively gather project files
function getFiles(dir, base = '') {
  const ignore = ['node_modules', '.git', 'dist', '.vscode', '.DS_Store', 'scratch'];
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (ignore.includes(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    const relPath = path.join(base, entry.name).replace(/\\/g, '/');

    if (entry.isDirectory()) {
      results = results.concat(getFiles(fullPath, relPath));
    } else {
      results.push({ fullPath, relPath });
    }
  }
  return results;
}

async function run() {
  console.log(`🚀 Starting GitHub Push for ${REPO_OWNER}/${REPO_NAME}...`);

  // 1. Ensure repo exists or create it
  try {
    await api(`/repos/${REPO_OWNER}/${REPO_NAME}`);
    console.log(`✅ Repository ${REPO_OWNER}/${REPO_NAME} exists.`);
  } catch (err) {
    console.log(`📦 Creating new repository ${REPO_NAME} under ${REPO_OWNER}...`);
    await api('/user/repos', {
      method: 'POST',
      body: JSON.stringify({
        name: REPO_NAME,
        description: 'VOLTX Electronics & Tech E-Commerce Store with Live Supabase Cloud Database',
        private: false,
        auto_init: true
      })
    });
    console.log(`✅ Created repository ${REPO_NAME}! Waiting for initialization...`);
    await new Promise(r => setTimeout(r, 3000));
  }

  // 2. Scan files
  const files = getFiles(PROJECT_DIR);
  console.log(`📂 Found ${files.length} project source files to upload.`);

  // 3. Prepare Tree Items (single batch tree creation)
  const treeItems = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const isBinary = file.relPath.match(/\.(png|jpg|jpeg|gif|ico|webp|woff|woff2|ttf|eot)$/i);

    if (isBinary) {
      const content = fs.readFileSync(file.fullPath);
      const blobData = await api(`/repos/${REPO_OWNER}/${REPO_NAME}/git/blobs`, {
        method: 'POST',
        body: JSON.stringify({
          content: content.toString('base64'),
          encoding: 'base64'
        })
      });
      treeItems.push({
        path: file.relPath,
        mode: '100644',
        type: 'blob',
        sha: blobData.sha
      });
    } else {
      const content = fs.readFileSync(file.fullPath, 'utf8');
      treeItems.push({
        path: file.relPath,
        mode: '100644',
        type: 'blob',
        content
      });
    }
  }

  // 4. Create Git Tree in one single call
  console.log('🌲 Generating Git Tree structure in single batch...');
  const tree = await api(`/repos/${REPO_OWNER}/${REPO_NAME}/git/trees`, {
    method: 'POST',
    body: JSON.stringify({
      tree: treeItems
    })
  });

  // 5. Get Parent Commit SHA (if any)
  let parentCommitSha = null;
  try {
    const ref = await api(`/repos/${REPO_OWNER}/${REPO_NAME}/git/refs/heads/main`);
    parentCommitSha = ref.object.sha;
  } catch {
    try {
      const ref = await api(`/repos/${REPO_OWNER}/${REPO_NAME}/git/refs/heads/master`);
      parentCommitSha = ref.object.sha;
    } catch {}
  }

  // 6. Create Commit
  console.log('💾 Creating Git Commit...');
  const commitPayload = {
    message: 'VOLTX Electronics Store - Production Launch with Supabase Cloud DB',
    tree: tree.sha
  };
  if (parentCommitSha) {
    commitPayload.parents = [parentCommitSha];
  }

  const commit = await api(`/repos/${REPO_OWNER}/${REPO_NAME}/git/commits`, {
    method: 'POST',
    body: JSON.stringify(commitPayload)
  });

  // 7. Update branch ref
  console.log('📌 Updating main branch ref...');
  try {
    await api(`/repos/${REPO_OWNER}/${REPO_NAME}/git/refs/heads/main`, {
      method: 'PATCH',
      body: JSON.stringify({
        sha: commit.sha,
        force: true
      })
    });
  } catch {
    await api(`/repos/${REPO_OWNER}/${REPO_NAME}/git/refs`, {
      method: 'POST',
      body: JSON.stringify({
        ref: 'refs/heads/main',
        sha: commit.sha
      })
    });
  }

  console.log(`\n🎉 SUCCESS! All files pushed to: https://github.com/${REPO_OWNER}/${REPO_NAME}`);
}

run().catch(err => {
  console.error('❌ Push Failed:', err.message);
  process.exit(1);
});
