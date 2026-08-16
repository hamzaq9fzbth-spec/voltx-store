import React, { useState } from 'react';
import { ShieldAlert, Lock, X, ArrowRight, UserCheck, KeyRound, Sparkles, Terminal } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const AdminAuthModal: React.FC = () => {
  const { isAdminAuthModalOpen, setIsAdminAuthModalOpen, verifyAdminCredentials } = useStore();
  const [adminId, setAdminId] = useState('admin@voltxtech.com');
  const [adminPassword, setAdminPassword] = useState('');
  const [error, setError] = useState('');

  if (!isAdminAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminId.trim() || !adminPassword.trim()) return;

    const success = verifyAdminCredentials(adminId, adminPassword);
    if (!success) {
      setError('Invalid Admin ID or Security Password. Access Denied.');
    } else {
      setError('');
      setAdminPassword('');
    }
  };

  const handleQuickDemoUnlock = () => {
    setAdminId('admin@voltxtech.com');
    setAdminPassword('voltx9900');
    verifyAdminCredentials('admin@voltxtech.com', 'voltx9900');
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsAdminAuthModalOpen(false)}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '460px', padding: '2.25rem', textAlign: 'center', position: 'relative' }}
      >
        <button 
          onClick={() => setIsAdminAuthModalOpen(false)}
          className="btn-icon"
          style={{ position: 'absolute', top: '1rem', right: '1rem' }}
        >
          <X size={18} />
        </button>

        <div style={{
          width: '58px',
          height: '58px',
          borderRadius: 'var(--radius-lg)',
          background: 'rgba(244, 63, 94, 0.15)',
          border: '1px solid rgba(244, 63, 94, 0.4)',
          color: 'var(--accent-rose)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem',
          boxShadow: '0 0 20px rgba(244, 63, 94, 0.2)'
        }}>
          <ShieldAlert size={30} />
        </div>

        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
          Restricted Master Admin
        </h3>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.4 }}>
          This interface is strictly restricted to store administrators. Enter your authorized Admin ID and Master Security Key.
        </p>

        {/* 1-Click Quick Demo Unlock */}
        <div style={{
          background: 'var(--bg-elevated)',
          border: '1px solid rgba(0, 242, 254, 0.25)',
          borderRadius: 'var(--radius-md)',
          padding: '0.75rem',
          marginBottom: '1.25rem'
        }}>
          <button
            type="button"
            onClick={handleQuickDemoUnlock}
            className="btn btn-secondary"
            style={{
              width: '100%',
              fontSize: '0.82rem',
              justifyContent: 'center',
              gap: '0.45rem',
              border: '1px solid var(--accent-cyan)',
              color: 'var(--accent-cyan)'
            }}
          >
            <Sparkles size={15} />
            <span>1-Click Fill Demo Admin (admin@voltxtech.com)</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
          {/* Admin ID Input */}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              Special Admin ID / Email *
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-md)',
              padding: '0.65rem 0.85rem',
              gap: '0.5rem'
            }}>
              <UserCheck size={17} color="var(--text-muted)" />
              <input 
                type="text"
                required
                placeholder="admin@voltxtech.com"
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  width: '100%',
                  color: 'var(--text-primary)',
                  fontSize: '0.88rem'
                }}
              />
            </div>
          </div>

          {/* Admin Password Input */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              Master Security Key / Password *
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-md)',
              padding: '0.65rem 0.85rem',
              gap: '0.5rem'
            }}>
              <KeyRound size={17} color="var(--text-muted)" />
              <input 
                type="password"
                required
                placeholder="••••••••"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  width: '100%',
                  color: 'var(--text-primary)',
                  fontSize: '0.95rem'
                }}
              />
            </div>
            {error && (
              <div style={{ fontSize: '0.78rem', color: 'var(--accent-rose)', marginTop: '0.45rem', fontWeight: 600 }}>
                {error}
              </div>
            )}
          </div>

          <button 
            type="submit" 
            className="btn btn-primary"
            style={{
              width: '100%',
              padding: '0.85rem',
              justifyContent: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)',
              border: 'none',
              boxShadow: '0 0 15px rgba(244, 63, 94, 0.3)'
            }}
          >
            <span>Authenticate Admin Terminal</span>
            <ArrowRight size={16} />
          </button>
        </form>

        <div style={{
          marginTop: '1.25rem',
          paddingTop: '1rem',
          borderTop: '1px solid var(--border-subtle)',
          fontSize: '0.74rem',
          color: 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.4rem'
        }}>
          <Terminal size={13} />
          <span>Shortcut: Press <strong>Ctrl + Shift + A</strong> anywhere to open</span>
        </div>
      </div>
    </div>
  );
};
