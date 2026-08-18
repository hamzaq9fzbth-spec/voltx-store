import React, { useState } from 'react';
import { 
  X, 
  Zap, 
  ShieldCheck,
  Truck, 
  Smartphone, 
  User, 
  MapPin, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const DirectBuyModal: React.FC = () => {
  const { 
    directBuyItem, 
    setDirectBuyItem, 
    executeDirectTransferOrder, 
    formatPrice,
    user 
  } = useStore();

  const [userAccount, setUserAccount] = useState('');
  const [fullName, setFullName] = useState(user?.fullName || '');
  const [city, setCity] = useState(user?.city || 'Muscat');
  const [address, setAddress] = useState(user?.address || '');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!directBuyItem) return null;

  const { product, selections } = directBuyItem;
  const priceDelta = selections?.priceDelta || 0;
  const unitPrice = product.price + priceDelta;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAccount.trim()) {
      setErrorMsg('Please enter your Easypaisa / Mobile Wallet account number');
      return;
    }
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      executeDirectTransferOrder({
        userAccount: userAccount.trim(),
        fullName: fullName.trim(),
        city: city.trim() || 'Muscat',
        address: address.trim() || `${city.trim() || 'Muscat'}, Delivery Address`
      });
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <div className="modal-backdrop" onClick={() => setDirectBuyItem(null)}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '540px',
          width: '95%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem',
          borderRadius: 'var(--radius-xl)',
          position: 'relative'
        }}
      >
        {/* Close button */}
        <button 
          onClick={() => setDirectBuyItem(null)}
          className="btn-icon"
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem' }}
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(0, 242, 254, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-cyan)'
          }}>
            <Zap size={22} fill="currentColor" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              1-Click Direct Buy
            </h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Instant Transfer • No OTP Verification Required
            </span>
          </div>
        </div>

        {/* Selected Product Summary Card */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '0.85rem 1rem',
          background: 'var(--bg-elevated)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          marginBottom: '1.25rem'
        }}>
          <img 
            src={product.images[0]} 
            alt={product.title} 
            style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-md)', objectFit: 'contain', background: '#0b1120' }} 
          />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {product.title}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.2rem' }}>
              <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                {formatPrice(unitPrice)}
              </span>
              <span className="badge badge-emerald" style={{ fontSize: '0.68rem', padding: '0.1rem 0.4rem' }}>
                <Truck size={10} /> 100% Free Shipping
              </span>
            </div>
          </div>
        </div>

        {/* Secure Direct Checkout Badge */}
        <div style={{
          padding: '0.75rem 1rem',
          background: 'rgba(0, 242, 254, 0.08)',
          border: '1px solid rgba(0, 242, 254, 0.25)',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem'
        }}>
          <ShieldCheck size={20} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
          <div>
            <strong style={{ fontSize: '0.88rem', color: 'var(--text-primary)', display: 'block' }}>
              Instant Direct Checkout
            </strong>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              256-Bit Encrypted Transfer • 0 OTP Verification Required
            </span>
          </div>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {errorMsg && (
            <div style={{
              padding: '0.65rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(244, 63, 94, 0.12)',
              border: '1px solid rgba(244, 63, 94, 0.3)',
              color: 'var(--accent-rose)',
              fontSize: '0.82rem',
              fontWeight: 600
            }}>
              {errorMsg}
            </div>
          )}

          {/* User Account / Mobile Wallet Input */}
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
              Your Account / Mobile Wallet Number <span style={{ color: 'var(--accent-rose)' }}>*</span>
            </label>
            <div style={{ position: 'relative' }}>
              <Smartphone size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="text"
                value={userAccount}
                onChange={(e) => setUserAccount(e.target.value)}
                placeholder="Enter your Account / Mobile number (e.g. 03001234567)"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 0.85rem 0.75rem 2.4rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-medium)',
                  color: 'var(--text-primary)',
                  fontSize: '0.88rem',
                  fontFamily: 'var(--font-mono)'
                }}
              />
            </div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.25rem', display: 'block' }}>
              Instant direct transfer with zero OTP verification delay.
            </span>
          </div>

          {/* Full Name Input */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                Full Name <span style={{ color: 'var(--accent-rose)' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <User size={15} color="var(--text-muted)" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                <input 
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Customer Name"
                  required
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.75rem 0.7rem 2.2rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem'
                  }}
                />
              </div>
            </div>

            {/* City Input */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                Delivery City <span style={{ color: 'var(--accent-rose)' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <MapPin size={15} color="var(--text-muted)" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                <input 
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City (e.g. Muscat)"
                  required
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.75rem 0.7rem 2.2rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Optional Delivery Address */}
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
              Street / Building Address (Optional)
            </label>
            <input 
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Street / Apartment / Landmark"
              style={{
                width: '100%',
                padding: '0.7rem 0.75rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-medium)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem'
              }}
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary"
            style={{
              width: '100%',
              padding: '0.85rem',
              fontSize: '0.95rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '0.5rem'
            }}
          >
            {isSubmitting ? (
              <span>Processing Transfer...</span>
            ) : (
              <>
                <Zap size={18} fill="#090d16" />
                <span>Transfer & Complete Order ({formatPrice(unitPrice)})</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
