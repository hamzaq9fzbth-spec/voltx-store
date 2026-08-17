import React, { useState, useEffect } from 'react';
import { Zap, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const AnnouncementBar: React.FC = () => {
  const { freeShippingThreshold, formatPrice, announcement } = useStore();

  // Flash sale countdown timer state (hours, minutes, seconds)
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 42,
    seconds: 19
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, '0');

  if (!announcement.enabled) return null;

  return (
    <div style={{
      background: 'linear-gradient(90deg, #090d16 0%, #0f172a 35%, #0284c7 50%, #0f172a 65%, #090d16 100%)',
      color: '#f8fafc',
      fontSize: '0.8rem',
      fontWeight: 500,
      borderBottom: '1px solid var(--border-subtle)',
      padding: '0.45rem 1rem',
      position: 'relative',
      zIndex: 100,
      overflow: 'hidden'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem'
      }}>
        {/* Left item */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Truck size={14} color="var(--accent-emerald)" />
          <span>🚚 <strong style={{ color: 'var(--accent-emerald)' }}>100% FREE EXPRESS SHIPPING</strong> on all orders!</span>
        </div>

        {/* Center item - Dynamic Admin Announcement Message */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(0, 0, 0, 0.35)',
          padding: '0.15rem 0.65rem',
          borderRadius: 'var(--radius-full)',
          border: '1px solid rgba(255, 255, 255, 0.12)'
        }}>
          <Zap size={13} color="var(--accent-amber)" fill="var(--accent-amber)" />
          <span style={{
            fontSize: '0.68rem',
            fontWeight: 800,
            background: 'var(--accent-amber)',
            color: '#090d16',
            padding: '0.1rem 0.35rem',
            borderRadius: '4px'
          }}>
            {announcement.badge || 'PROMO'}
          </span>
          <span style={{ fontWeight: 600 }}>{announcement.message}</span>
        </div>

        {/* Right item */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)' }}>
            <ShieldCheck size={14} color="var(--accent-emerald)" />
            <span>2-Year Warranty</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)' }}>
            <Sparkles size={13} color="var(--accent-cyan)" />
            <span>DROP ENDS: <strong style={{ color: 'var(--accent-amber)', fontFamily: 'var(--font-mono)' }}>{pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
};
