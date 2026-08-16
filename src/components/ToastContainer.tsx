import React from 'react';
import { CheckCircle2, Info, AlertTriangle, AlertCircle, X } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useStore();

  if (toasts.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '1.5rem',
      right: '1.5rem',
      zIndex: 2000,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.6rem',
      maxWidth: '380px',
      width: '100%',
      pointerEvents: 'none'
    }}>
      {toasts.map(toast => {
        let icon = <Info size={18} color="var(--accent-cyan)" />;
        let borderColor = 'var(--border-subtle)';

        if (toast.type === 'success') {
          icon = <CheckCircle2 size={18} color="var(--accent-emerald)" />;
          borderColor = 'rgba(16, 185, 129, 0.4)';
        } else if (toast.type === 'warning') {
          icon = <AlertTriangle size={18} color="var(--accent-amber)" />;
          borderColor = 'rgba(245, 158, 11, 0.4)';
        } else if (toast.type === 'error') {
          icon = <AlertCircle size={18} color="var(--accent-rose)" />;
          borderColor = 'rgba(244, 63, 94, 0.4)';
        }

        return (
          <div
            key={toast.id}
            className="glass-panel"
            style={{
              borderRadius: 'var(--radius-md)',
              padding: '0.85rem 1rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              border: `1px solid ${borderColor}`,
              boxShadow: 'var(--shadow-lg)',
              pointerEvents: 'auto',
              animation: 'slideInRight 0.25s ease-out'
            }}
          >
            <div style={{ flexShrink: 0, marginTop: '2px' }}>
              {icon}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              {toast.title && (
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.15rem' }}>
                  {toast.title}
                </div>
              )}
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                {toast.message}
              </div>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              style={{ color: 'var(--text-muted)', padding: '2px', flexShrink: 0 }}
            >
              <X size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
