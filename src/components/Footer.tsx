import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  CreditCard, 
  Lock, 
  Mail, 
  MapPin, 
  Phone,
  Heart
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCategory } from '../types';

export const Footer: React.FC = () => {
  const { 
    setSelectedCategory, 
    setIsOrderTrackingOpen, 
    activeCurrency, 
    setIsCurrencyModalOpen,
    setIsAdminAuthModalOpen
  } = useStore();

  const handleCategoryClick = (cat: ProductCategory) => {
    setSelectedCategory(cat);
    const target = document.getElementById('product-catalog');
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: '4rem',
      paddingBottom: '2.5rem',
      color: 'var(--text-secondary)'
    }}>
      <div className="container">
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Col */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--gradient-tech)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--glow-cyan)'
              }}>
                <Zap size={20} color="#090d16" fill="#090d16" />
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                <span>CLEOPATRA</span>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem', color: 'var(--text-secondary)' }}>
              Your trusted destination for genuine Apple iPhones, smartphones, certified GaN fast chargers, and premium consumer electronics.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.82rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={14} color="var(--accent-cyan)" />
                <span>Muscat / Ruwi, Sultanate of Oman</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={14} color="var(--accent-cyan)" />
                <span>+968 2470 0000</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={14} color="var(--accent-cyan)" />
                <span>support@cleopatraweb.com</span>
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
              Hardware Catalog
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem' }}>
              <li>
                <button onClick={() => handleCategoryClick('mobiles')} style={{ color: 'var(--text-secondary)', textAlign: 'left' }}>
                  Smartphones & Flagships
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('chargers')} style={{ color: 'var(--text-secondary)', textAlign: 'left' }}>
                  140W & 100W GaN Chargers
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('cables')} style={{ color: 'var(--text-secondary)', textAlign: 'left' }}>
                  240W Kevlar & Thunderbolt 4 Cables
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('audio')} style={{ color: 'var(--text-secondary)', textAlign: 'left' }}>
                  Spatial Audio & Low-Latency Buds
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('wearables')} style={{ color: 'var(--text-secondary)', textAlign: 'left' }}>
                  Titanium Smartwatches & Rings
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care & Help */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
              Customer Support
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem' }}>
              <li>
                <button onClick={() => setIsOrderTrackingOpen(true)} style={{ color: 'var(--text-secondary)', textAlign: 'left' }}>
                  Track Order & Shipment
                </button>
              </li>
              <li>
                <span style={{ color: 'var(--text-secondary)' }}>2-Year Hardware Warranty</span>
              </li>
              <li>
                <span style={{ color: 'var(--text-secondary)' }}>Order Dispatch Verification</span>
              </li>
              <li>
                <span style={{ color: 'var(--text-secondary)' }}>Device Compatibility Guide</span>
              </li>
              <li>
                <span style={{ color: 'var(--text-secondary)' }}>Corporate & Bulk Orders</span>
              </li>
            </ul>
          </div>

          {/* Security & Guarantees */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
              Guaranteed Protection
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Lock size={18} color="var(--accent-emerald)" />
                <span>256-Bit SSL Encrypted Checkout</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <ShieldCheck size={18} color="var(--accent-cyan)" />
                <span>Certified GaNFast III Safety</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Truck size={18} color="var(--accent-amber)" />
                <span>Carbon-Neutral Global Shipping</span>
              </div>
            </div>

            {/* Accepted Payments Icons Box */}
            <div style={{ marginTop: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                Payment Methods Supported:
              </div>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {[
                  '💳 Visa', '💳 Mastercard', '💳 Amex', '🍎 Apple Pay', '🌐 Google Pay', 
                  '🅿️ PayPal', '🇴🇲 OmanNet', '🇸🇦 Mada', '🇮🇳 UPI', '🇧🇷 Pix', 
                  '🛍️ Klarna', '✨ Tabby', '₿ Bitcoin / USDT'
                ].map(badge => (
                  <span key={badge} style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.55rem',
                    background: 'var(--bg-elevated)',
                    borderRadius: '4px',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)'
                  }}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem'
        }}>
          <div>
            © {new Date().getFullYear()} CLEOPATRA Oman. All Rights Reserved. Built with React & Vite.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <button 
              onClick={() => setIsCurrencyModalOpen(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--accent-cyan)',
                fontWeight: 600,
                fontSize: '0.8rem'
              }}
            >
              <span>{activeCurrency.flag}</span>
              <span>Currency: {activeCurrency.code} ({activeCurrency.symbol})</span>
            </button>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Safety Certificates</span>

            {/* Subtle Stealth Admin Trigger (Only Admin knows) */}
            <button
              onClick={() => setIsAdminAuthModalOpen(true)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: '0.2rem',
                opacity: 0.35,
                display: 'flex',
                alignItems: 'center'
              }}
              title="System Terminal"
              aria-label="Terminal"
            >
              <Lock size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
