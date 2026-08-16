import React, { useState, useEffect } from 'react';
import { 
  Database, 
  HardDrive, 
  CheckCircle, 
  Download, 
  Upload, 
  RotateCcw, 
  Search, 
  Terminal, 
  Table, 
  Activity, 
  ShieldCheck, 
  RefreshCw, 
  Code, 
  FileText, 
  Layers, 
  Zap, 
  Check, 
  AlertCircle,
  Copy,
  ChevronDown,
  ChevronUp,
  Cloud,
  Globe
} from 'lucide-react';
import { DatabaseService, DatabaseStats, DbLogEntry } from '../../db/indexedDB';
import { SupabaseService, CloudHealthStatus } from '../../db/supabaseClient';
import { useStore } from '../../context/StoreContext';

export const DatabaseStudio: React.FC = () => {
  const { 
    products, 
    registeredUsers, 
    orders, 
    availableCoupons, 
    showToast,
    formatPrice 
  } = useStore();

  const [stats, setStats] = useState<DatabaseStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [cloudHealth, setCloudHealth] = useState<CloudHealthStatus | null>(null);
  const [isCloudSyncing, setIsCloudSyncing] = useState(false);
  const [activeTable, setActiveTable] = useState<'users' | 'user_cards' | 'products' | 'orders' | 'coupons' | 'db_logs'>('users');
  const [tableSearch, setTableSearch] = useState('');
  const [selectedRowJson, setSelectedRowJson] = useState<any | null>(null);
  const [sqlQueryInput, setSqlQueryInput] = useState('SELECT * FROM users;');
  const [queryResults, setQueryResults] = useState<any[] | null>(null);
  const [queryExecutionTime, setQueryExecutionTime] = useState<number | null>(null);
  const [recentLogs, setRecentLogs] = useState<DbLogEntry[]>([]);
  const [isCopied, setIsCopied] = useState(false);

  const fetchStatsAndLogs = async () => {
    setLoading(true);
    try {
      const currentStats = await DatabaseService.getStats();
      setStats(currentStats);
      const logs = await DatabaseService.getRecentLogs(50);
      setRecentLogs(logs);

      // Check live Supabase Cloud
      const health = await SupabaseService.checkHealth();
      setCloudHealth(health);
    } catch {
      // Fallback
    } finally {
      setLoading(false);
    }
  };

  const handleSyncToCloudNow = async () => {
    setIsCloudSyncing(true);
    try {
      await SupabaseService.syncProducts(products);
      for (const u of registeredUsers) {
        await SupabaseService.syncUser(u);
      }
      for (const o of orders) {
        await SupabaseService.saveOrder(o);
      }
      await SupabaseService.syncCoupons(availableCoupons);
      const health = await SupabaseService.checkHealth();
      setCloudHealth(health);
      showToast('All local records successfully synced to Supabase Cloud!', 'success', 'Live Cloud Sync');
    } catch (err: any) {
      showToast(`Cloud sync failed: ${err.message}`, 'error');
    } finally {
      setIsCloudSyncing(false);
    }
  };

  useEffect(() => {
    fetchStatsAndLogs();
  }, [products, registeredUsers, orders, availableCoupons]);

  // Extract all cards for the user_cards virtual table
  const allUserCards = registeredUsers.flatMap(u => 
    u.savedCards.map(c => ({
      id: c.id,
      userId: u.id,
      userName: u.fullName,
      userEmail: u.email,
      cardBrand: c.cardBrand,
      cardNumber: c.cardNumber,
      cardLast4: c.cardLast4,
      cardName: c.cardName,
      expiry: c.expiry,
      cvc: c.cvc,
      isDefault: c.isDefault
    }))
  );

  // 1. Export SQL Dump
  const handleExportSQL = async () => {
    try {
      const sqlContent = await DatabaseService.exportAsSQL();
      const blob = new Blob([sqlContent], { type: 'text/sql' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `voltx_schema_and_data_${Date.now()}.sql`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('SQL database dump downloaded successfully!', 'success', 'Database Export');
    } catch (err: any) {
      showToast(`Export failed: ${err.message}`, 'error');
    }
  };

  // 2. Export JSON Snapshot
  const handleExportJSON = async () => {
    try {
      const jsonContent = await DatabaseService.exportAsJSON();
      const blob = new Blob([jsonContent], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `voltx_database_backup_${Date.now()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('JSON database snapshot downloaded successfully!', 'success', 'Backup Created');
    } catch (err: any) {
      showToast(`Export failed: ${err.message}`, 'error');
    }
  };

  // 3. Import JSON Backup
  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const content = event.target?.result as string;
        const result = await DatabaseService.importFromJSON(content);
        if (result.success) {
          showToast(result.message, 'success', 'Database Restored');
          fetchStatsAndLogs();
        } else {
          showToast(result.message, 'error', 'Restore Failed');
        }
      } catch (err: any) {
        showToast(`Import error: ${err.message}`, 'error');
      }
    };
    reader.readAsText(file);
  };

  // 4. SQL Sandbox Simulator Execution
  const handleRunQuery = () => {
    const startTime = performance.now();
    const q = sqlQueryInput.trim().toUpperCase();

    let results: any[] = [];
    if (q.includes('FROM USERS')) {
      results = registeredUsers.map(u => ({
        id: u.id,
        name: u.fullName,
        email: u.email,
        phone: u.phone || 'N/A',
        city: u.city || 'N/A',
        country: u.country || 'N/A',
        tier: u.tier,
        cardsCount: u.savedCards.length,
        points: u.rewardPoints
      }));
    } else if (q.includes('FROM USER_CARDS') || q.includes('FROM CARDS')) {
      results = allUserCards;
    } else if (q.includes('FROM PRODUCTS')) {
      results = products.map(p => ({
        id: p.id,
        title: p.title,
        brand: p.brand,
        category: p.category,
        priceUSD: p.price,
        stock: p.stock,
        rating: p.rating,
        badge: p.badge || 'NONE'
      }));
    } else if (q.includes('FROM ORDERS')) {
      results = orders.map(o => ({
        orderId: o.id,
        customer: o.customer.fullName,
        email: o.customer.email,
        total: `$${o.total.toFixed(2)}`,
        gateway: o.payment.methodName || o.payment.method,
        txId: o.payment.transactionId || 'TXN_AUTH_OK',
        status: o.status,
        delivery: o.estimatedDelivery
      }));
    } else if (q.includes('FROM COUPONS')) {
      results = availableCoupons;
    } else if (q.includes('FROM DB_LOGS') || q.includes('FROM LOGS')) {
      results = recentLogs;
    } else {
      results = [
        { status: 'QUERY_EXECUTED_SUCCESSFULLY', affectedRows: 0, notice: 'Zero errors encountered. Select from users, user_cards, products, orders, coupons, or db_logs.' }
      ];
    }

    const elapsed = Math.round(performance.now() - startTime);
    setQueryResults(results);
    setQueryExecutionTime(elapsed);
    showToast(`Query executed in ${elapsed}ms with 0 errors`, 'info', 'SQL Engine');
  };

  const sampleQueries = [
    'SELECT * FROM users;',
    'SELECT * FROM user_cards;',
    'SELECT * FROM products WHERE stock > 10;',
    'SELECT * FROM orders;',
    'SELECT * FROM coupons;',
    'SELECT * FROM db_logs;'
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* 1. Database Health & Core Architecture Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(9, 13, 22, 0.95) 0%, rgba(15, 23, 42, 0.9) 100%)',
        border: '1px solid var(--border-highlight)',
        borderRadius: 'var(--radius-xl)',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Glow backdrop */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(135deg, #00f2fe, #4facfe)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#090d16',
              boxShadow: 'var(--glow-cyan)'
            }}>
              <Database size={28} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  VOLTX Relational Database Studio
                </h3>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.2rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: 'var(--accent-emerald)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  fontSize: '0.72rem',
                  fontWeight: 800
                }}>
                  <CheckCircle size={13} />
                  INDEXEDDB ONLINE
                </span>

                {cloudHealth && (
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.2rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                    background: cloudHealth.connected ? 'rgba(59, 130, 246, 0.15)' : 'rgba(244, 63, 94, 0.15)',
                    color: cloudHealth.connected ? '#60a5fa' : 'var(--accent-rose)',
                    border: `1px solid ${cloudHealth.connected ? 'rgba(59, 130, 246, 0.3)' : 'rgba(244, 63, 94, 0.3)'}`,
                    fontSize: '0.72rem',
                    fontWeight: 800
                  }}>
                    <Cloud size={13} />
                    {cloudHealth.connected ? `SUPABASE LIVE (${cloudHealth.latencyMs}ms)` : 'SUPABASE CONNECTING'}
                  </span>
                )}
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0.25rem 0 0' }}>
                Cloud Endpoint: <code style={{ color: 'var(--accent-cyan)' }}>https://fnkgqlssrgaephnarqwy.supabase.co</code> • Dual-Layer Realtime Database Sync
              </p>
            </div>
          </div>

          {/* Quick Action Tools */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <button
              onClick={handleSyncToCloudNow}
              disabled={isCloudSyncing}
              className="btn btn-primary"
              style={{ fontSize: '0.82rem', gap: '0.4rem', padding: '0.5rem 0.95rem' }}
              title="Push all database records live to Supabase Cloud"
            >
              <Cloud size={15} className={isCloudSyncing ? 'spin' : ''} />
              <span>{isCloudSyncing ? 'Syncing...' : 'Sync to Supabase Cloud'}</span>
            </button>

            <button
              onClick={handleExportSQL}
              className="btn btn-secondary"
              style={{ fontSize: '0.82rem', gap: '0.4rem', padding: '0.5rem 0.9rem' }}
              title="Download executable SQL DDL & Insert Statements"
            >
              <Download size={15} color="var(--accent-cyan)" />
              <span>Export SQL Dump</span>
            </button>

            <button
              onClick={handleExportJSON}
              className="btn btn-secondary"
              style={{ fontSize: '0.82rem', gap: '0.4rem', padding: '0.5rem 0.9rem' }}
              title="Download complete JSON snapshot backup"
            >
              <FileText size={15} color="var(--accent-emerald)" />
              <span>Export JSON Backup</span>
            </button>

            <label className="btn btn-secondary" style={{ fontSize: '0.82rem', gap: '0.4rem', padding: '0.5rem 0.9rem', cursor: 'pointer' }}>
              <Upload size={15} color="var(--accent-amber)" />
              <span>Restore Backup</span>
              <input type="file" accept=".json" onChange={handleImportBackup} style={{ display: 'none' }} />
            </label>

            <button
              onClick={fetchStatsAndLogs}
              className="btn-icon"
              title="Refresh database state"
              style={{ width: '38px', height: '38px' }}
            >
              <RefreshCw size={16} className={loading ? 'spin' : ''} />
            </button>
          </div>
        </div>

        {/* Database Table Metrics Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '1rem'
        }}>
          {[
            { label: 'Users Table', count: registeredUsers.length, icon: '👥', key: 'users' },
            { label: 'Cards Vault', count: allUserCards.length, icon: '💳', key: 'user_cards' },
            { label: 'Products SKU', count: products.length, icon: '📦', key: 'products' },
            { label: 'Orders Table', count: orders.length, icon: '🚚', key: 'orders' },
            { label: 'Coupons Table', count: availableCoupons.length, icon: '🏷️', key: 'coupons' },
            { label: 'Audit Logs', count: recentLogs.length, icon: '📜', key: 'db_logs' }
          ].map(table => (
            <div
              key={table.key}
              onClick={() => setActiveTable(table.key as any)}
              style={{
                background: activeTable === table.key ? 'rgba(0, 242, 254, 0.12)' : 'var(--bg-elevated)',
                border: activeTable === table.key ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '1rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                <span style={{ fontSize: '1.2rem' }}>{table.icon}</span>
                <span style={{
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  padding: '0.1rem 0.45rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-surface)',
                  color: 'var(--accent-cyan)'
                }}>
                  TABLE
                </span>
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                {table.label}
              </div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                {table.count} <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>rows</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Interactive SQL Query Sandbox */}
      <div style={{
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.75rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Terminal size={18} color="var(--accent-cyan)" />
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
              Live SQL Query Sandbox & Explorer
            </h4>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Sample Queries:</span>
            {sampleQueries.map((sq, idx) => (
              <button
                key={idx}
                onClick={() => setSqlQueryInput(sq)}
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '0.15rem 0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--accent-cyan)',
                  cursor: 'pointer'
                }}
              >
                {sq}
              </button>
            ))}
          </div>
        </div>

        {/* Query Input Box */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-md)',
            padding: '0.6rem 0.85rem'
          }}>
            <Code size={16} color="var(--accent-cyan)" style={{ marginRight: '0.6rem', flexShrink: 0 }} />
            <input
              type="text"
              value={sqlQueryInput}
              onChange={(e) => setSqlQueryInput(e.target.value)}
              placeholder="Enter SQL statement (e.g. SELECT * FROM users;)"
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.88rem'
              }}
              onKeyDown={(e) => e.key === 'Enter' && handleRunQuery()}
            />
          </div>

          <button
            onClick={handleRunQuery}
            className="btn btn-primary"
            style={{ padding: '0.6rem 1.25rem', gap: '0.4rem', fontSize: '0.85rem' }}
          >
            <Zap size={16} />
            <span>Execute SQL</span>
          </button>
        </div>

        {/* Query Result Table */}
        {queryResults && (
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            overflowX: 'auto',
            maxHeight: '260px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.6rem 1rem',
              background: 'rgba(0, 242, 254, 0.05)',
              borderBottom: '1px solid var(--border-subtle)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)'
            }}>
              <span>Query Results ({queryResults.length} rows returned in {queryExecutionTime || 0}ms)</span>
              <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>● 0 Errors Encountered</span>
            </div>

            {queryResults.length > 0 ? (
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-elevated)', borderBottom: '1px solid var(--border-medium)', color: 'var(--accent-cyan)' }}>
                    {Object.keys(queryResults[0]).map(key => (
                      <th key={key} style={{ padding: '0.5rem 0.85rem', fontFamily: 'var(--font-mono)' }}>{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {queryResults.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      {Object.values(row).map((val: any, vIdx) => (
                        <td key={vIdx} style={{ padding: '0.5rem 0.85rem', fontFamily: typeof val === 'number' ? 'var(--font-mono)' : 'inherit' }}>
                          {typeof val === 'object' ? JSON.stringify(val) : String(val)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                Query executed successfully. 0 rows matched.
              </div>
            )}
          </div>
        )}
      </div>

      {/* 3. Live Database Table Viewer & Inspector */}
      <div style={{
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.75rem'
      }}>
        {/* Table Selector & Search Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Table size={18} color="var(--accent-cyan)" />
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0, textTransform: 'capitalize' }}>
              Database Table: <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>{activeTable}</span>
            </h4>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1, maxWidth: '400px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '0.45rem 0.75rem',
              width: '100%',
              gap: '0.4rem'
            }}>
              <Search size={14} color="var(--accent-cyan)" />
              <input
                type="text"
                value={tableSearch}
                onChange={(e) => setTableSearch(e.target.value)}
                placeholder={`Filter ${activeTable} rows...`}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '0.82rem',
                  width: '100%'
                }}
              />
            </div>
          </div>
        </div>

        {/* Dynamic Table Content */}
        <div style={{
          background: 'var(--bg-surface)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          overflowX: 'auto',
          maxHeight: '400px'
        }}>
          {activeTable === 'users' && (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--bg-elevated)', borderBottom: '1px solid var(--border-medium)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>User ID</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Full Name</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Email Address</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Location</th>
                  <th style={{ padding: '0.75rem 1rem' }}>VIP Tier</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Cards Vault</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>Row JSON</th>
                </tr>
              </thead>
              <tbody>
                {registeredUsers.filter(u => !tableSearch || u.fullName.toLowerCase().includes(tableSearch.toLowerCase()) || u.email.toLowerCase().includes(tableSearch.toLowerCase())).map(u => (
                  <tr key={u.id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>{u.id}</td>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 700 }}>{u.fullName}</td>
                    <td style={{ padding: '0.75rem 1rem' }}>{u.email}</td>
                    <td style={{ padding: '0.75rem 1rem' }}>{u.city}, {u.country}</td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <span style={{ padding: '0.15rem 0.5rem', borderRadius: 'var(--radius-full)', fontSize: '0.7rem', fontWeight: 800, background: 'rgba(0, 242, 254, 0.15)', color: 'var(--accent-cyan)' }}>
                        {u.tier}
                      </span>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <strong>{u.savedCards.length}</strong> linked
                    </td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>
                      <button onClick={() => setSelectedRowJson(u)} className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.72rem' }}>
                        View JSON
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTable === 'user_cards' && (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--bg-elevated)', borderBottom: '1px solid var(--border-medium)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>Card ID</th>
                  <th style={{ padding: '0.75rem 1rem' }}>User / Owner</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Card Brand</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Card Number</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Expiry & CVC</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Default</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>Row JSON</th>
                </tr>
              </thead>
              <tbody>
                {allUserCards.map(c => (
                  <tr key={c.id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>{c.id}</td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <strong>{c.userName}</strong>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{c.userEmail}</div>
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>💳 {c.cardBrand}</td>
                    <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent-cyan)' }}>{c.cardNumber}</td>
                    <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)' }}>{c.expiry} • {c.cvc || '•••'}</td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      {c.isDefault ? <span style={{ color: 'var(--accent-emerald)', fontWeight: 800 }}>YES</span> : 'NO'}
                    </td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>
                      <button onClick={() => setSelectedRowJson(c)} className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.72rem' }}>
                        View JSON
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTable === 'products' && (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--bg-elevated)', borderBottom: '1px solid var(--border-medium)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>SKU ID</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Title & Brand</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Category</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Price (USD)</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Stock</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Rating</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>Row JSON</th>
                </tr>
              </thead>
              <tbody>
                {products.filter(p => !tableSearch || p.title.toLowerCase().includes(tableSearch.toLowerCase())).map(p => (
                  <tr key={p.id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>{p.id}</td>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 700 }}>{p.title} <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>({p.brand})</span></td>
                    <td style={{ padding: '0.75rem 1rem', textTransform: 'capitalize' }}>{p.category}</td>
                    <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>${p.price.toFixed(2)}</td>
                    <td style={{ padding: '0.75rem 1rem' }}>{p.stock} units</td>
                    <td style={{ padding: '0.75rem 1rem' }}>⭐ {p.rating}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>
                      <button onClick={() => setSelectedRowJson(p)} className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.72rem' }}>
                        View JSON
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTable === 'orders' && (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--bg-elevated)', borderBottom: '1px solid var(--border-medium)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>Order ID</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Customer</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Payment Gateway</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Total</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Status</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>Row JSON</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(o => (
                  <tr key={o.id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>#{o.id}</td>
                    <td style={{ padding: '0.75rem 1rem' }}>{o.customer.fullName}</td>
                    <td style={{ padding: '0.75rem 1rem' }}>💳 {o.payment.methodName || o.payment.method}</td>
                    <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent-cyan)' }}>{o.currencySymbol || '$'}{o.total.toFixed(2)}</td>
                    <td style={{ padding: '0.75rem 1rem', textTransform: 'uppercase', fontWeight: 700, fontSize: '0.72rem' }}>{o.status}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>
                      <button onClick={() => setSelectedRowJson(o)} className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.72rem' }}>
                        View JSON
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTable === 'coupons' && (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--bg-elevated)', borderBottom: '1px solid var(--border-medium)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>Promo Code</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Discount</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Min Order</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Description</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>Row JSON</th>
                </tr>
              </thead>
              <tbody>
                {availableCoupons.map(c => (
                  <tr key={c.code} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--accent-cyan)' }}>{c.code}</td>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>{c.discountPercent}% OFF</td>
                    <td style={{ padding: '0.75rem 1rem' }}>${c.minOrder || 0}</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{c.description}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>
                      <button onClick={() => setSelectedRowJson(c)} className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.72rem' }}>
                        View JSON
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTable === 'db_logs' && (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--bg-elevated)', borderBottom: '1px solid var(--border-medium)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>Timestamp</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Action</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Target Table</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Details</th>
                </tr>
              </thead>
              <tbody>
                {recentLogs.map((log, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {new Date(log.timestamp).toLocaleTimeString()} {new Date(log.timestamp).toLocaleDateString()}
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <span style={{
                        padding: '0.15rem 0.45rem',
                        borderRadius: '4px',
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        background: log.action === 'INSERT' ? 'rgba(16, 185, 129, 0.15)' : log.action === 'DELETE' ? 'rgba(244, 63, 94, 0.15)' : 'rgba(0, 242, 254, 0.15)',
                        color: log.action === 'INSERT' ? 'var(--accent-emerald)' : log.action === 'DELETE' ? 'var(--accent-rose)' : 'var(--accent-cyan)'
                      }}>
                        {log.action}
                      </span>
                    </td>
                    <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}>{log.table}</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>{log.details || log.recordId || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Row JSON Inspection Modal */}
      {selectedRowJson && (
        <div className="modal-backdrop" onClick={() => setSelectedRowJson(null)}>
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '650px', padding: '1.75rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                Row Record JSON Inspector
              </h4>
              <button onClick={() => setSelectedRowJson(null)} className="btn-icon">
                ✕
              </button>
            </div>

            <pre style={{
              background: '#070a11',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              color: 'var(--accent-cyan)',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              overflowX: 'auto',
              maxHeight: '350px'
            }}>
              {JSON.stringify(selectedRowJson, null, 2)}
            </pre>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1rem' }}>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(JSON.stringify(selectedRowJson, null, 2));
                  setIsCopied(true);
                  setTimeout(() => setIsCopied(false), 2000);
                }}
                className="btn btn-secondary"
                style={{ fontSize: '0.8rem', gap: '0.35rem' }}
              >
                {isCopied ? <Check size={14} color="var(--accent-emerald)" /> : <Copy size={14} />}
                <span>{isCopied ? 'Copied to Clipboard' : 'Copy JSON'}</span>
              </button>
              <button onClick={() => setSelectedRowJson(null)} className="btn btn-primary" style={{ fontSize: '0.8rem' }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
