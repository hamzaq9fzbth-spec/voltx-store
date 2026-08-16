import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  CreditCard, 
  User, 
  Mail, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  CheckCircle2,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { SavedCard } from '../types';

export const AuthModal: React.FC = () => {
  const { 
    isAuthModalOpen, 
    setIsAuthModalOpen, 
    login, 
    register,
    authPromptReason,
    setIsAdminAuthModalOpen
  } = useStore();

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

  // OPTIONAL card details toggle & state
  const [includeCardDetails, setIncludeCardDetails] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardNickname, setCardNickname] = useState('Primary Card');
  const [cardError, setCardError] = useState('');

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    let cardDetails: Partial<SavedCard> | undefined = undefined;

    // Only validate and include card details if the user opted to provide them
    if (includeCardDetails) {
      if (!cardNumber.trim() || cardNumber.replace(/\s+/g, '').length < 12) {
        setCardError('Please enter a valid 16-digit card number or uncheck card saving.');
        return;
      }
      if (!expiry.trim() || !expiry.includes('/')) {
        setCardError('Please enter a valid expiry date (MM/YY).');
        return;
      }
      if (!cvc.trim() || cvc.length < 3) {
        setCardError('Please enter a valid 3 or 4 digit CVC security code.');
        return;
      }

      setCardError('');

      cardDetails = {
        cardNumber: cardNumber.trim(),
        cardName: cardName.trim() || fullName.trim() || email.split('@')[0].toUpperCase(),
        expiry: expiry.trim(),
        cvc: cvc.trim(),
        cardBrand: cardNumber.startsWith('4') ? 'Visa' : 'Mastercard',
        cardNickname: cardNickname.trim() || 'Primary Card',
        isDefault: true
      };
    }

    if (mode === 'login') {
      login(email, password, cardDetails);
    } else {
      register({
        fullName: fullName.trim() || email.split('@')[0],
        email: email.trim(),
        phone: phone.trim(),
        city: city.trim()
      }, cardDetails);
    }
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsAuthModalOpen(false)}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '640px', padding: '2rem' }}
      >
        {/* Close Button */}
        <button 
          onClick={() => setIsAuthModalOpen(false)}
          className="btn-icon"
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem' }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--gradient-tech)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 0.75rem',
            color: '#090d16',
            boxShadow: 'var(--glow-cyan)'
          }}>
            <Lock size={24} />
          </div>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
            {mode === 'login' ? 'Sign In to VOLTX Tech ID' : 'Create Your Hardware Account'}
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Sign in to track orders, save shipping addresses, and unlock VIP hardware benefits.
          </p>
        </div>

        {/* Highlight Banner if triggered from Checkout / Buy Now */}
        {authPromptReason === 'checkout' && (
          <div style={{
            background: 'rgba(0, 242, 254, 0.1)',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '0.75rem 1rem',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontSize: '0.82rem',
            color: 'var(--accent-cyan)'
          }}>
            <Sparkles size={18} style={{ flexShrink: 0 }} />
            <span><strong>Almost there!</strong> Sign in or create an account to proceed to checkout and choose your payment method.</span>
          </div>
        )}



        {/* Tab Switcher */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          background: 'var(--bg-elevated)',
          padding: '4px',
          borderRadius: 'var(--radius-md)',
          marginBottom: '1.5rem',
          border: '1px solid var(--border-subtle)'
        }}>
          <button
            type="button"
            onClick={() => setMode('login')}
            style={{
              padding: '0.6rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.85rem',
              fontWeight: mode === 'login' ? 700 : 500,
              background: mode === 'login' ? 'var(--bg-surface)' : 'transparent',
              color: mode === 'login' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              boxShadow: mode === 'login' ? 'var(--shadow-sm)' : 'none'
            }}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setMode('register')}
            style={{
              padding: '0.6rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.85rem',
              fontWeight: mode === 'register' ? 700 : 500,
              background: mode === 'register' ? 'var(--bg-surface)' : 'transparent',
              color: mode === 'register' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              boxShadow: mode === 'register' ? 'var(--shadow-sm)' : 'none'
            }}
          >
            Create Account
          </button>
        </div>

        {/* Custom Auth Form */}
        <form onSubmit={handleSubmit}>
          {mode === 'register' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  Full Name *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Elena Rostova"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>
            </div>
          )}

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
              Email Address *
            </label>
            <input 
              type="email" 
              required
              placeholder="name@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
              Password *
            </label>
            <input 
              type="password" 
              required
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)'
              }}
            />
          </div>

          {/* OPTIONAL PAYMENT CARD SECTION (NOT MANDATORY) */}
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '1rem 1.25rem',
            marginBottom: '1.5rem'
          }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input 
                  type="checkbox" 
                  checked={includeCardDetails}
                  onChange={(e) => setIncludeCardDetails(e.target.checked)}
                  style={{ accentColor: 'var(--accent-cyan)', width: '16px', height: '16px', cursor: 'pointer' }}
                />
                <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CreditCard size={16} color="var(--accent-cyan)" />
                  Link & Save a Payment Card (Optional)
                </span>
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                {includeCardDetails ? 'Enabled' : 'Optional'}
              </span>
            </label>

            {includeCardDetails && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                    Card Number
                  </label>
                  <input 
                    type="text" 
                    placeholder="4532 8921 4489 7721"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.88rem'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '0.6rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                      Cardholder Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="ALEX VANCE"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value.toUpperCase())}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                      Expiry
                    </label>
                    <input 
                      type="text" 
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                      CVC
                    </label>
                    <input 
                      type="password" 
                      maxLength={4}
                      placeholder="•••"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem'
                      }}
                    />
                  </div>
                </div>

                {cardError && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--accent-rose)' }}>
                    <AlertCircle size={14} />
                    <span>{cardError}</span>
                  </div>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', color: 'var(--accent-emerald)' }}>
                  <ShieldCheck size={14} />
                  <span>Card will be saved to your profile for fast checkouts</span>
                </div>
              </div>
            )}
          </div>

          <button 
            type="submit" 
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem' }}
          >
            <span>{mode === 'login' ? 'Sign In' : 'Create Account'}</span>
            <ArrowRight size={18} />
          </button>

          {/* Discreet Admin Terminal Access (Only Admin knows) */}
          <div style={{ textAlign: 'center', marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
            <button
              type="button"
              onClick={() => {
                setIsAuthModalOpen(false);
                setIsAdminAuthModalOpen(true);
              }}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                fontSize: '0.74rem',
                cursor: 'pointer',
                opacity: 0.6,
                textDecoration: 'underline'
              }}
            >
              🔒 Authorized Staff / Master Admin Portal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
