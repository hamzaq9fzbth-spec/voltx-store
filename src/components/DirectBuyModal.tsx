import React, { useState } from 'react';
import { 
  X, 
  Zap, 
  Truck, 
  Smartphone, 
  CreditCard,
  Building2,
  User, 
  MapPin, 
  ArrowRight,
  Check,
  Search,
  Globe
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

  const [paymentType, setPaymentType] = useState<'bank' | 'wallet' | 'paypal' | 'card'>('bank');
  const [selectedNetwork, setSelectedNetwork] = useState('Bank Muscat (بنك مسقط)');
  const [bankSearch, setBankSearch] = useState('');
  const [userAccount, setUserAccount] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [fullName, setFullName] = useState(user?.fullName || '');
  const [city, setCity] = useState(user?.city || 'Muscat');
  const [address, setAddress] = useState(user?.address || '');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!directBuyItem) return null;

  const { product, selections } = directBuyItem;
  const priceDelta = selections?.priceDelta || 0;
  const unitPrice = product.price + priceDelta;

  const omanBanks = [
    // Major Omani Local Banks
    'Bank Muscat (بنك مسقط)',
    'Bank Dhofar (بنك ظفار)',
    'National Bank of Oman (NBO)',
    'Oman Arab Bank (OAB)',
    'Sohar International',
    'Ahli Bank Oman',
    'Bank Nizwa (Islamic)',
    'Alizz Islamic Bank (Islamic)',
    'Oman Housing Bank',
    'Oman Development Bank',
    // Foreign & International Banks in Oman
    'HSBC Oman',
    'Standard Chartered Bank',
    'First Abu Dhabi Bank (FAB)',
    'Qatar National Bank (QNB)',
    'State Bank of India (SBI Oman)',
    'Bank of Baroda Oman',
    'Bank of Beirut Oman',
    'Bank Melli Iran Oman',
    'Bank Saderat Iran Oman',
    'Habib Bank Limited (HBL Oman)',
    'Mashreq Bank Oman',
    'Gulf International Bank (GIB)',
    'Oman Investment Bank'
  ];

  const omanWallets = [
    'OMPAY Wallet',
    'Thawani Pay',
    'OmanNet QR',
    'Bank Muscat BM Wallet',
    'NBO Pay',
    'Sohar Pay',
    'PayPal Direct',
    'Apple Pay (Oman)',
    'Google Pay',
    'Easypaisa',
    'JazzCash'
  ];

  const cardNetworks = [
    'OmanNet Debit Card',
    'Visa (Oman & International)',
    'Mastercard (Oman & International)',
    'Mada Debit Card',
    'UnionPay'
  ];

  const filteredBanks = omanBanks.filter(b => b.toLowerCase().includes(bankSearch.toLowerCase()));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAccount.trim()) {
      setErrorMsg(
        paymentType === 'card' 
          ? 'Please enter your 16-digit Card Number' 
          : paymentType === 'paypal'
          ? 'Please enter your PayPal Email Address'
          : paymentType === 'bank'
          ? `Please enter your ${selectedNetwork} Account / IBAN Number`
          : `Please enter your ${selectedNetwork} Mobile / Account Number`
      );
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
        address: address.trim() || `${city.trim() || 'Muscat'}, Delivery Address`,
        paymentMethod: paymentType,
        paymentNetwork: paymentType === 'paypal' ? 'PayPal Direct' : selectedNetwork,
        receivingAccount: 'Aliraza.ar765i@gmail.com'
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
          maxWidth: '600px',
          width: '95%',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.75rem',
          borderRadius: 'var(--radius-xl)',
          position: 'relative',
          overflowY: 'auto'
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
              Direct Order Checkout
            </h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Logged in as: <strong style={{ color: 'var(--accent-cyan)' }}>{user?.fullName || user?.email}</strong>
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

        {/* Payment Category Selector Tabs */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Select Payment Method:
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.4rem' }}>
            <button
              type="button"
              onClick={() => {
                setPaymentType('bank');
                setSelectedNetwork('Bank Muscat (بنك مسقط)');
              }}
              style={{
                padding: '0.6rem 0.4rem',
                borderRadius: 'var(--radius-md)',
                background: paymentType === 'bank' ? 'rgba(0, 242, 254, 0.12)' : 'var(--bg-elevated)',
                border: paymentType === 'bank' ? '1.5px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                color: paymentType === 'bank' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                fontSize: '0.75rem',
                fontWeight: 700,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.3rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <Building2 size={16} />
              <span>🏦 Oman Banks</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setPaymentType('wallet');
                setSelectedNetwork('OMPAY Wallet');
              }}
              style={{
                padding: '0.6rem 0.4rem',
                borderRadius: 'var(--radius-md)',
                background: paymentType === 'wallet' ? 'rgba(0, 242, 254, 0.12)' : 'var(--bg-elevated)',
                border: paymentType === 'wallet' ? '1.5px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                color: paymentType === 'wallet' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                fontSize: '0.75rem',
                fontWeight: 700,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.3rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <Smartphone size={16} />
              <span>📱 Wallets</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setPaymentType('paypal');
                setSelectedNetwork('PayPal Direct');
              }}
              style={{
                padding: '0.6rem 0.4rem',
                borderRadius: 'var(--radius-md)',
                background: paymentType === 'paypal' ? 'rgba(0, 242, 254, 0.12)' : 'var(--bg-elevated)',
                border: paymentType === 'paypal' ? '1.5px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                color: paymentType === 'paypal' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                fontSize: '0.75rem',
                fontWeight: 700,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.3rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <Globe size={16} />
              <span>🅿️ PayPal</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setPaymentType('card');
                setSelectedNetwork('OmanNet Debit Card');
              }}
              style={{
                padding: '0.6rem 0.4rem',
                borderRadius: 'var(--radius-md)',
                background: paymentType === 'card' ? 'rgba(0, 242, 254, 0.12)' : 'var(--bg-elevated)',
                border: paymentType === 'card' ? '1.5px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                color: paymentType === 'card' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                fontSize: '0.75rem',
                fontWeight: 700,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.3rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <CreditCard size={16} />
              <span>💳 Cards</span>
            </button>
          </div>
        </div>

        {/* If PayPal Selected: Display Merchant Receiving Account */}
        {paymentType === 'paypal' && (
          <div style={{
            padding: '0.75rem 1rem',
            background: 'rgba(0, 242, 254, 0.06)',
            border: '1px solid rgba(0, 242, 254, 0.25)',
            borderRadius: 'var(--radius-lg)',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#003087',
              color: '#0079C1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '1rem'
            }}>
              P
            </div>
            <div>
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, display: 'block' }}>
                Merchant Receiving PayPal Account
              </span>
              <strong style={{ fontSize: '0.92rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                Aliraza.ar765i@gmail.com
              </strong>
            </div>
          </div>
        )}

        {/* If Bank Selected: Oman Banks Selector with Search */}
        {paymentType === 'bank' && (
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                Choose Licensed Bank in Oman (CBO):
              </label>
              <span style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)' }}>
                23 Licensed Banks
              </span>
            </div>

            <div style={{ position: 'relative', marginBottom: '0.5rem' }}>
              <Search size={14} color="var(--text-muted)" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="text"
                value={bankSearch}
                onChange={(e) => setBankSearch(e.target.value)}
                placeholder="Search Oman Bank (e.g. Bank Muscat, Dhofar, NBO, HSBC, HBL)..."
                style={{
                  width: '100%',
                  padding: '0.45rem 0.65rem 0.45rem 2rem',
                  fontSize: '0.78rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>

            <div style={{
              maxHeight: '130px',
              overflowY: 'auto',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.35rem',
              padding: '0.5rem',
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}>
              {filteredBanks.map(bank => (
                <button
                  key={bank}
                  type="button"
                  onClick={() => setSelectedNetwork(bank)}
                  style={{
                    padding: '0.35rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                    background: selectedNetwork === bank ? 'var(--accent-cyan)' : 'var(--bg-surface)',
                    color: selectedNetwork === bank ? '#090d16' : 'var(--text-primary)',
                    border: selectedNetwork === bank ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                    fontSize: '0.74rem',
                    fontWeight: selectedNetwork === bank ? 800 : 500,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  {selectedNetwork === bank && <Check size={11} strokeWidth={3} />}
                  <span>{bank}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* If Wallet Selected: Oman Digital Wallets List */}
        {paymentType === 'wallet' && (
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
              Choose Digital Wallet / Mobile Service:
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {omanWallets.map(w => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setSelectedNetwork(w)}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    background: selectedNetwork === w ? 'var(--accent-cyan)' : 'var(--bg-elevated)',
                    color: selectedNetwork === w ? '#090d16' : 'var(--text-primary)',
                    border: selectedNetwork === w ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                    fontSize: '0.78rem',
                    fontWeight: selectedNetwork === w ? 800 : 500,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  {selectedNetwork === w && <Check size={12} strokeWidth={3} />}
                  <span>{w}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* If Card Selected: Card Networks */}
        {paymentType === 'card' && (
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
              Choose Card Network:
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {cardNetworks.map(c => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setSelectedNetwork(c)}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    background: selectedNetwork === c ? 'var(--accent-cyan)' : 'var(--bg-elevated)',
                    color: selectedNetwork === c ? '#090d16' : 'var(--text-primary)',
                    border: selectedNetwork === c ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                    fontSize: '0.78rem',
                    fontWeight: selectedNetwork === c ? 800 : 500,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  {selectedNetwork === c && <Check size={12} strokeWidth={3} />}
                  <span>{c}</span>
                </button>
              ))}
            </div>
          </div>
        )}

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

          {/* Selected Institution / Account Input */}
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
              {paymentType === 'card' 
                ? 'Card Number (16 Digits)' 
                : paymentType === 'paypal'
                ? 'Your PayPal Account Email Address'
                : paymentType === 'bank' 
                ? `${selectedNetwork} Account / IBAN Number` 
                : `${selectedNetwork} Mobile / Wallet Number`} <span style={{ color: 'var(--accent-rose)' }}>*</span>
            </label>
            <div style={{ position: 'relative' }}>
              {paymentType === 'card' ? (
                <CreditCard size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              ) : paymentType === 'paypal' ? (
                <Globe size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              ) : paymentType === 'bank' ? (
                <Building2 size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              ) : (
                <Smartphone size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              )}
              <input 
                type={paymentType === 'paypal' ? 'email' : 'text'}
                value={userAccount}
                onChange={(e) => setUserAccount(e.target.value)}
                placeholder={
                  paymentType === 'card' 
                    ? '4000 1234 5678 9010' 
                    : paymentType === 'paypal'
                    ? 'your-paypal-account@email.com'
                    : paymentType === 'bank'
                    ? 'OM98 NBO 0123 4567 8901 / Bank Account No'
                    : 'OMPAY / Mobile Number (e.g. 9123 4567 / 0300 1234567)'
                }
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
            {paymentType === 'paypal' && (
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.25rem', display: 'block' }}>
                Payment will be debited from your PayPal balance and sent to recipient: Aliraza.ar765i@gmail.com
              </span>
            )}
          </div>

          {/* If Card: Expiry & CVC row */}
          {paymentType === 'card' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                  Expiry (MM/YY)
                </label>
                <input 
                  type="text" 
                  value={cardExpiry}
                  onChange={(e) => setCardExpiry(e.target.value)}
                  placeholder="12/28"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.75rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                  CVC / Security Code
                </label>
                <input 
                  type="password" 
                  value={cardCvc}
                  onChange={(e) => setCardCvc(e.target.value)}
                  placeholder="•••"
                  maxLength={4}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.75rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                />
              </div>
            </div>
          )}

          {/* Full Name & City */}
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
                  placeholder="City (e.g. Muscat, Salalah, Sohar)"
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
              <span>Authorizing & Transferring Payment...</span>
            ) : (
              <>
                <Zap size={18} fill="#090d16" />
                <span>Authorize & Pay {formatPrice(unitPrice)}</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
