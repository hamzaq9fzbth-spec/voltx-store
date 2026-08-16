import React, { useState } from 'react';
import { Mail, Sparkles, Check, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const NewsletterSection: React.FC = () => {
  const { showToast, applyCoupon } = useStore();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;

    setIsSubscribed(true);
    showToast('Subscribed! Promo code VOLT15 is now ready to use at checkout.', 'success', 'Welcome to VOLTX VIP');
  };

  return (
    <section style={{
      padding: '4rem 0',
      background: 'radial-gradient(ellipse at 50% 50%, rgba(0, 242, 254, 0.08) 0%, rgba(9, 13, 22, 0) 80%)'
    }}>
      <div className="container">
        <div className="glass-panel" style={{
          borderRadius: 'var(--radius-xl)',
          padding: '3rem 2rem',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          border: '1px solid var(--border-highlight)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }} className="badge badge-cyan">
            <Sparkles size={13} /> VOLTX VIP Hardware Club
          </div>

          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Unlock 15% OFF Your First Hardware Drop
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '540px', margin: '0 auto 2rem' }}>
            Be the first to access limited GaN charger releases, smartphone launch alerts, and subscriber-only tech promotions.
          </p>

          {isSubscribed ? (
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              padding: '0.75rem 1.5rem',
              borderRadius: 'var(--radius-full)',
              color: 'var(--accent-emerald)',
              fontWeight: 700
            }}>
              <Check size={18} />
              <span>You are on the VIP List! Use promo code <strong>VOLT15</strong> at checkout.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              gap: '0.5rem',
              maxWidth: '480px',
              margin: '0 auto',
              flexWrap: 'wrap'
            }}>
              <div style={{ flex: '1', minWidth: '240px', position: 'relative' }}>
                <Mail size={17} color="var(--text-muted)" style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)' }} />
                <input 
                  type="email" 
                  required
                  placeholder="Enter your work or personal email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem 0.75rem 2.8rem',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-full)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
              <button 
                type="submit"
                className="btn btn-primary"
                style={{ padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-full)' }}
              >
                <span>Join VIP</span>
                <ArrowRight size={16} />
              </button>
            </form>
          )}

          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '1.25rem' }}>
            🔒 We respect your privacy. Zero spam, unsubscribe with one click anytime.
          </div>
        </div>
      </div>
    </section>
  );
};
