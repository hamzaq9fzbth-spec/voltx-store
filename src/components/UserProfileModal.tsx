import React, { useState } from 'react';
import { 
  X, 
  User, 
  CreditCard, 
  Plus, 
  Trash2, 
  Check, 
  ShieldCheck, 
  LogOut, 
  Sparkles, 
  MapPin, 
  Save 
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const UserProfileModal: React.FC = () => {
  const { 
    user, 
    isProfileModalOpen, 
    setIsProfileModalOpen, 
    logout, 
    addOrUpdateSavedCard, 
    removeSavedCard, 
    setDefaultCard,
    updateUserProfile
  } = useStore();

  const [isAddingCard, setIsAddingCard] = useState(false);
  const [newCardNumber, setNewCardNumber] = useState('');
  const [newCardName, setNewCardName] = useState('');
  const [newExpiry, setNewExpiry] = useState('');
  const [newCvc, setNewCvc] = useState('');
  const [newCardNickname, setNewCardNickname] = useState('');
  const [isDefaultNew, setIsDefaultNew] = useState(false);

  // Profile fields edit state
  const [phone, setPhone] = useState(user?.phone || '');
  const [address, setAddress] = useState(user?.address || '');
  const [city, setCity] = useState(user?.city || '');
  const [state, setState] = useState(user?.state || '');
  const [zip, setZip] = useState(user?.zip || '');

  if (!isProfileModalOpen || !user) return null;

  const handleAddNewCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCardNumber.trim()) return;

    addOrUpdateSavedCard({
      cardNumber: newCardNumber.trim(),
      cardLast4: newCardNumber.slice(-4),
      cardName: newCardName.trim() || user.fullName,
      expiry: newExpiry.trim() || '12/28',
      cvc: newCvc.trim() || '123',
      cardBrand: newCardNumber.startsWith('4') ? 'Visa' : 'Mastercard',
      cardNickname: newCardNickname.trim() || 'Saved Card',
      isDefault: isDefaultNew || user.savedCards.length === 0
    });

    // Reset form
    setNewCardNumber('');
    setNewCardName('');
    setNewExpiry('');
    setNewCvc('');
    setNewCardNickname('');
    setIsAddingCard(false);
  };

  const handleSaveAddress = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({
      phone,
      address,
      city,
      state,
      zip
    });
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsProfileModalOpen(false)}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '780px', padding: '2rem' }}
      >
        <button 
          onClick={() => setIsProfileModalOpen(false)}
          className="btn-icon"
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem' }}
        >
          <X size={18} />
        </button>

        {/* User Profile Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'var(--gradient-tech)',
              color: '#090d16',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.4rem',
              boxShadow: 'var(--glow-cyan)'
            }}>
              {user.fullName[0]}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {user.fullName}
                </h3>
                <span className="badge badge-amber">
                  <Sparkles size={11} /> {user.tier}
                </span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {user.email} • Member since {user.memberSince}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              background: 'var(--bg-elevated)',
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.82rem',
              fontWeight: 700,
              color: 'var(--accent-cyan)'
            }}>
              ⚡ {user.rewardPoints.toLocaleString()} VIP Points
            </div>

            <button
              onClick={logout}
              className="btn btn-secondary"
              style={{ fontSize: '0.82rem', padding: '0.45rem 0.85rem', color: 'var(--accent-rose)', borderColor: 'rgba(244, 63, 94, 0.3)' }}
            >
              <LogOut size={14} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* SAVED CARDS MANAGEMENT SECTION */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem'
          }}>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CreditCard size={18} color="var(--accent-cyan)" />
                <span>Saved Payment Cards ({user.savedCards.length})</span>
              </h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                Saved cards are automatically pre-loaded at checkout for 1-click purchases.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsAddingCard(!isAddingCard)}
              className="btn btn-secondary"
              style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem', gap: '0.35rem' }}
            >
              <Plus size={14} />
              <span>{isAddingCard ? 'Cancel' : 'Add New Card'}</span>
            </button>
          </div>

          {/* Add New Card Form */}
          {isAddingCard && (
            <form onSubmit={handleAddNewCard} style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--accent-cyan)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              marginBottom: '1.25rem'
            }}>
              <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
                Link New Payment Card
              </h5>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                    Card Nickname
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Travel Platinum"
                    value={newCardNickname}
                    onChange={(e) => setNewCardNickname(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.55rem 0.75rem',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                    Card Number *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="4532 0000 0000 0000"
                    value={newCardNumber}
                    onChange={(e) => setNewCardNumber(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.55rem 0.75rem',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                    Name on Card
                  </label>
                  <input 
                    type="text" 
                    placeholder={user.fullName}
                    value={newCardName}
                    onChange={(e) => setNewCardName(e.target.value.toUpperCase())}
                    style={{
                      width: '100%',
                      padding: '0.55rem 0.75rem',
                      background: 'var(--bg-surface)',
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
                    value={newExpiry}
                    onChange={(e) => setNewExpiry(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.55rem 0.75rem',
                      background: 'var(--bg-surface)',
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
                    value={newCvc}
                    onChange={(e) => setNewCvc(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.55rem 0.75rem',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={isDefaultNew} 
                    onChange={(e) => setIsDefaultNew(e.target.checked)}
                    style={{ accentColor: 'var(--accent-cyan)' }}
                  />
                  <span>Set as default card for future orders</span>
                </label>

                <button type="submit" className="btn btn-primary" style={{ fontSize: '0.85rem', padding: '0.5rem 1.25rem' }}>
                  Save Card to Account
                </button>
              </div>
            </form>
          )}

          {/* Cards List */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {user.savedCards.map(card => (
              <div 
                key={card.id}
                style={{
                  background: card.isDefault ? 'rgba(0, 242, 254, 0.08)' : 'var(--bg-elevated)',
                  border: card.isDefault ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                      width: '32px',
                      height: '24px',
                      borderRadius: '4px',
                      background: 'var(--bg-surface)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.72rem',
                      color: 'var(--accent-cyan)'
                    }}>
                      {card.cardBrand.slice(0, 4).toUpperCase()}
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                      {card.cardNickname || card.cardBrand}
                    </span>
                  </div>

                  {card.isDefault && (
                    <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>
                      Default
                    </span>
                  )}
                </div>

                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.1rem',
                  letterSpacing: '0.1em',
                  color: 'var(--text-primary)'
                }}>
                  •••• •••• •••• {card.cardLast4}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <span>Exp: {card.expiry}</span>
                  <span>{card.cardName}</span>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '0.6rem',
                  marginTop: '0.2rem'
                }}>
                  {!card.isDefault ? (
                    <button
                      onClick={() => setDefaultCard(card.id)}
                      style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600 }}
                    >
                      Set as Default
                    </button>
                  ) : <span />}

                  <button
                    onClick={() => removeSavedCard(card.id)}
                    style={{ color: 'var(--text-muted)', padding: '2px' }}
                    title="Remove Card"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DEFAULT SHIPPING ADDRESS SECTION */}
        <div>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
            <MapPin size={18} color="var(--accent-cyan)" />
            <span>Default Shipping Details</span>
          </h4>

          <form onSubmit={handleSaveAddress}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                  Street Address
                </label>
                <input 
                  type="text" 
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.55rem 0.75rem',
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
                  City
                </label>
                <input 
                  type="text" 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.55rem 0.75rem',
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
                  State
                </label>
                <input 
                  type="text" 
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.55rem 0.75rem',
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
                  ZIP Code
                </label>
                <input 
                  type="text" 
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.55rem 0.75rem',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem'
                  }}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-secondary" style={{ fontSize: '0.85rem', padding: '0.5rem 1.25rem' }}>
              <Save size={15} />
              <span>Update Default Shipping Address</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
