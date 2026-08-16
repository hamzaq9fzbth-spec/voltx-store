import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, 
  ShieldCheck, 
  CreditCard, 
  Truck, 
  ArrowLeft, 
  ArrowRight, 
  Zap, 
  Lock,
  Sparkles,
  ShoppingBag,
  Check,
  Plus,
  Search,
  Globe,
  QrCode,
  Copy,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Smartphone
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { CustomerInfo, PaymentDetails, ShippingMethod, SavedCard, GlobalPaymentMethod } from '../types';
import { SHIPPING_METHODS } from '../data/products';
import { GLOBAL_PAYMENT_METHODS } from '../data/paymentMethods';

export const CheckoutModal: React.FC = () => {
  const { 
    isCheckoutOpen, 
    setIsCheckoutOpen,
    cart,
    cartSubtotal,
    cartDiscount,
    formatPrice,
    placeOrder,
    appliedCoupon,
    freeShippingThreshold,
    user,
    addOrUpdateSavedCard,
    showToast,
    activeCurrency
  } = useStore();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [isProcessing, setIsProcessing] = useState(false);

  // Initialize customer address from logged-in user profile if available
  const [customer, setCustomer] = useState<CustomerInfo>(() => ({
    fullName: user?.fullName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    apartment: user?.apartment || '',
    city: user?.city || '',
    state: user?.state || '',
    zip: user?.zip || '',
    country: user?.country || 'United States'
  }));

  const [selectedShipping, setSelectedShipping] = useState<ShippingMethod>(SHIPPING_METHODS[0]);

  // Selected saved card from user profile
  const defaultUserCard = user?.savedCards.find(c => c.isDefault) || user?.savedCards[0];
  const [selectedSavedCardId, setSelectedSavedCardId] = useState<string | 'new'>(
    defaultUserCard ? defaultUserCard.id : 'new'
  );

  // Payment Details state
  const [payment, setPayment] = useState<PaymentDetails>(() => ({
    method: 'card',
    methodName: 'Credit / Debit Card',
    category: 'cards',
    cardNumber: defaultUserCard?.cardNumber || '',
    cardName: defaultUserCard?.cardName || user?.fullName || '',
    expiry: defaultUserCard?.expiry || '',
    cvc: defaultUserCard?.cvc || '',
    cardBrand: defaultUserCard?.cardBrand || 'Visa',
    cardLast4: defaultUserCard?.cardLast4 || '',
    upiId: 'alex.vance@okaxis',
    bankName: 'ING Bank',
    cryptoCurrency: 'USDT',
    cryptoNetwork: 'Polygon (Fast & Zero Gas)',
    bnplInstallments: 4,
    mobileNumber: user?.phone || '+968 9123 4567'
  }));

  const [saveNewCardToAccount, setSaveNewCardToAccount] = useState(true);
  const [copiedCode, setCopiedCode] = useState(false);

  // Payment method search & category filter state
  const [paymentSearch, setPaymentSearch] = useState('');
  const [selectedPaymentCategory, setSelectedPaymentCategory] = useState<string>('all');

  const paymentCategories = [
    { id: 'all', label: 'All Popular' },
    { id: 'cards', label: '💳 Cards (Global)' },
    { id: 'wallets', label: '📱 Wallets (Apple/Google/PayPal)' },
    { id: 'mena_gulf', label: '🇴🇲 MENA / Gulf (OmanNet/Mada)' },
    { id: 'instant_bank', label: '⚡ UPI / Pix / Direct Bank' },
    { id: 'bnpl', label: '🛍️ Buy Now Pay Later' },
    { id: 'crypto', label: '₿ Crypto Web3' }
  ];

  const filteredPaymentMethods = useMemo(() => {
    return GLOBAL_PAYMENT_METHODS.filter((m: GlobalPaymentMethod) => {
      const matchesCat = selectedPaymentCategory === 'all' || m.category === selectedPaymentCategory;
      const matchesSearch = 
        m.name.toLowerCase().includes(paymentSearch.toLowerCase()) ||
        m.description.toLowerCase().includes(paymentSearch.toLowerCase()) ||
        m.region.toLowerCase().includes(paymentSearch.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [paymentSearch, selectedPaymentCategory]);

  // Sync with logged in user when modal opens
  useEffect(() => {
    if (user) {
      setCustomer(prev => ({
        fullName: prev.fullName || user.fullName,
        email: prev.email || user.email,
        phone: prev.phone || user.phone || '',
        address: prev.address || user.address || '',
        apartment: prev.apartment || user.apartment || '',
        city: prev.city || user.city || '',
        state: prev.state || user.state || '',
        zip: prev.zip || user.zip || '',
        country: prev.country || user.country || 'United States'
      }));

      const defCard = user.savedCards.find(c => c.isDefault) || user.savedCards[0];
      if (defCard) {
        setSelectedSavedCardId(defCard.id);
        setPayment(prev => ({
          ...prev,
          cardNumber: defCard.cardNumber,
          cardName: defCard.cardName,
          expiry: defCard.expiry,
          cvc: defCard.cvc,
          cardBrand: defCard.cardBrand,
          cardLast4: defCard.cardLast4
        }));
      }
    }
  }, [user, isCheckoutOpen]);

  if (!isCheckoutOpen) return null;

  const handleSelectSavedCard = (card: SavedCard) => {
    setSelectedSavedCardId(card.id);
    setPayment({
      ...payment,
      method: 'card',
      methodName: 'Credit / Debit Card',
      cardNumber: card.cardNumber,
      cardName: card.cardName,
      expiry: card.expiry,
      cvc: card.cvc,
      cardBrand: card.cardBrand,
      cardLast4: card.cardLast4
    });
  };

  const handleSelectNewCard = () => {
    setSelectedSavedCardId('new');
    setPayment({
      ...payment,
      method: 'card',
      methodName: 'Credit / Debit Card',
      cardNumber: '',
      cardName: user?.fullName || '',
      expiry: '',
      cvc: '',
      cardBrand: 'Visa',
      cardLast4: ''
    });
  };

  const handleSelectPaymentMethod = (pm: GlobalPaymentMethod) => {
    setPayment(prev => ({
      ...prev,
      method: pm.id,
      methodName: pm.name,
      category: pm.category
    }));
  };

  // Calculations
  const shippingCost = cartSubtotal >= freeShippingThreshold ? 0 : selectedShipping.price;
  const estimatedTax = (cartSubtotal - cartDiscount) * 0.08;
  const finalOrderTotal = Math.max(0, cartSubtotal - cartDiscount + shippingCost + estimatedTax);

  const handleCopy = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedCode(true);
    showToast('Copied to clipboard!', 'info');
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);

    // If user paid with a new card and opted to save it to account
    if (payment.method === 'card' && selectedSavedCardId === 'new' && saveNewCardToAccount && payment.cardNumber) {
      addOrUpdateSavedCard({
        cardNumber: payment.cardNumber,
        cardLast4: payment.cardNumber.replace(/\s+/g, '').slice(-4) || '1234',
        cardName: payment.cardName || customer.fullName,
        expiry: payment.expiry || '12/28',
        cvc: payment.cvc || '123',
        cardBrand: payment.cardBrand || 'Visa',
        isDefault: false,
        cardNickname: 'Added at Checkout'
      });
    }

    setTimeout(() => {
      placeOrder(customer, payment, selectedShipping);
      setIsProcessing(false);
      setStep(1);
    }, 1800);
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsCheckoutOpen(false)}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '840px', padding: '2rem', maxHeight: '90vh', overflowY: 'auto' }}
      >
        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Lock size={20} color="var(--accent-cyan)" />
              <span>Secure Global Hardware Checkout</span>
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              256-Bit SSL Encrypted • Supporting 25+ Global Payment Methods in {activeCurrency.code}
            </p>
          </div>

          <button 
            onClick={() => setIsCheckoutOpen(false)}
            className="btn-icon"
            aria-label="Close Checkout"
          >
            <X size={18} />
          </button>
        </div>

        {/* Step Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', position: 'relative' }}>
          {[
            { num: 1, label: 'Shipping' },
            { num: 2, label: 'Delivery' },
            { num: 3, label: 'Payment' },
            { num: 4, label: 'Review' }
          ].map((s) => {
            const isCompleted = step > s.num;
            const isCurrent = step === s.num;
            return (
              <div 
                key={s.num}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  zIndex: 2
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  background: isCompleted ? 'var(--accent-emerald)' : isCurrent ? 'var(--accent-cyan)' : 'var(--bg-elevated)',
                  color: isCompleted || isCurrent ? '#090d16' : 'var(--text-muted)',
                  border: isCurrent ? '2px solid var(--accent-cyan)' : '1px solid var(--border-medium)',
                  boxShadow: isCurrent ? 'var(--glow-cyan)' : 'none'
                }}>
                  {isCompleted ? <Check size={16} strokeWidth={3} /> : s.num}
                </div>
                <span style={{
                  fontSize: '0.82rem',
                  fontWeight: isCurrent ? 700 : 500,
                  color: isCurrent ? 'var(--text-primary)' : 'var(--text-muted)'
                }}>
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* STEP 1: Shipping Address */}
        {step === 1 && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  Full Name *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Alex Vance"
                  value={customer.fullName}
                  onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
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
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  Email Address *
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="alex.vance@voltxtech.com"
                  value={customer.email}
                  onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
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

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  Street Address *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="742 Cyber Parkway, Suite 400"
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
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
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  City *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="San Francisco"
                  value={customer.city}
                  onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    State / Region *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="CA / Muscat"
                    value={customer.state}
                    onChange={(e) => setCustomer({ ...customer, state: e.target.value })}
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
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    ZIP / Postal Code *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="94107 / 100"
                    value={customer.zip}
                    onChange={(e) => setCustomer({ ...customer, zip: e.target.value })}
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

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  Country *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="United States / Oman / UK"
                  value={customer.country}
                  onChange={(e) => setCustomer({ ...customer, country: e.target.value })}
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
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  Phone Number *
                </label>
                <input 
                  type="tel" 
                  required
                  placeholder="+1 (555) 019-2834"
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
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

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button 
                type="button" 
                onClick={() => setStep(2)} 
                className="btn btn-primary"
              >
                <span>Continue to Shipping Method</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Delivery Timeline Confirmation (No complex shopping for shipping services) */}
        {step === 2 && (
          <div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.08) 0%, rgba(16, 185, 129, 0.06) 100%)',
              border: '1px solid rgba(0, 242, 254, 0.25)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem 1.75rem',
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(0, 242, 254, 0.15)',
                color: 'var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
                border: '1px solid rgba(0, 242, 254, 0.3)'
              }}>
                <Truck size={30} />
              </div>

              <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                Order Will Be Delivered Within 15 to 25 Working Days
              </h4>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.5 }}>
                Your order is automatically scheduled with express global courier transit, customs clearance, and full insurance coverage.
              </p>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(16, 185, 129, 0.15)',
                color: 'var(--accent-emerald)',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 700,
                fontSize: '0.85rem',
                border: '1px solid rgba(16, 185, 129, 0.3)'
              }}>
                <Check size={16} />
                <span>Standard Insured Delivery Included (FREE)</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button 
                type="button" 
                onClick={() => setStep(1)} 
                className="btn btn-secondary"
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>
              <button 
                type="button" 
                onClick={() => setStep(3)} 
                className="btn btn-primary"
              >
                <span>Continue to Payment</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Global Payment Methods Selector & Form */}
        {step === 3 && (
          <div>
            {/* Payment Search & Filter Controls */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '0.5rem 0.85rem',
                gap: '0.5rem',
                marginBottom: '0.75rem'
              }}>
                <Search size={16} color="var(--accent-cyan)" />
                <input 
                  type="text" 
                  placeholder="Search payment method e.g. OmanNet, UPI, Pix, Klarna, Apple Pay, Mada, Bitcoin..."
                  value={paymentSearch}
                  onChange={(e) => setPaymentSearch(e.target.value)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    width: '100%',
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem'
                  }}
                />
                {paymentSearch && (
                  <button onClick={() => setPaymentSearch('')} style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Clear
                  </button>
                )}
              </div>

              {/* Category Pills */}
              <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto', paddingBottom: '0.4rem' }}>
                {paymentCategories.map(cat => {
                  const isCatSelected = selectedPaymentCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedPaymentCategory(cat.id)}
                      style={{
                        padding: '0.35rem 0.75rem',
                        fontSize: '0.75rem',
                        fontWeight: isCatSelected ? 700 : 500,
                        borderRadius: 'var(--radius-full)',
                        background: isCatSelected ? 'var(--accent-cyan)' : 'var(--bg-elevated)',
                        color: isCatSelected ? '#090d16' : 'var(--text-secondary)',
                        border: isCatSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                        whiteSpace: 'nowrap',
                        cursor: 'pointer'
                      }}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Payment Methods Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: '0.6rem',
              maxHeight: '220px',
              overflowY: 'auto',
              padding: '4px',
              marginBottom: '1.5rem',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-surface)'
            }}>
              {filteredPaymentMethods.map((pm) => {
                const isSelected = payment.method === pm.id;
                return (
                  <button
                    key={pm.id}
                    type="button"
                    onClick={() => handleSelectPaymentMethod(pm)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      padding: '0.75rem 0.85rem',
                      borderRadius: 'var(--radius-md)',
                      background: isSelected ? 'rgba(0, 242, 254, 0.12)' : 'var(--bg-elevated)',
                      border: isSelected ? '1.5px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                      color: isSelected ? 'var(--accent-cyan)' : 'var(--text-primary)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      position: 'relative',
                      minHeight: '76px',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '0.2rem' }}>
                      <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>{pm.icon}</span>
                      {pm.badge && (
                        <span style={{
                          fontSize: '0.6rem',
                          fontWeight: 800,
                          padding: '0.1rem 0.35rem',
                          borderRadius: 'var(--radius-full)',
                          background: isSelected ? 'var(--accent-cyan)' : 'rgba(0, 242, 254, 0.15)',
                          color: isSelected ? '#090d16' : 'var(--accent-cyan)'
                        }}>
                          {pm.badge}
                        </span>
                      )}
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.82rem', color: isSelected ? 'var(--accent-cyan)' : 'var(--text-primary)', lineHeight: 1.2 }}>
                        {pm.name}
                      </div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {pm.region}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* DYNAMIC PAYMENT METHOD DETAILS & FORMS */}

            {/* 1. CREDIT / DEBIT CARD UI */}
            {payment.method === 'card' && (
              <div>
                {/* Saved Cards Picker */}
                {user && user.savedCards.length > 0 && (
                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Choose From Linked Profile Cards:
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.6rem', marginBottom: '0.85rem' }}>
                      {user.savedCards.map(card => {
                        const isSelected = selectedSavedCardId === card.id;
                        return (
                          <div
                            key={card.id}
                            onClick={() => handleSelectSavedCard(card)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '0.65rem 0.85rem',
                              borderRadius: 'var(--radius-md)',
                              background: isSelected ? 'rgba(0, 242, 254, 0.12)' : 'var(--bg-elevated)',
                              border: isSelected ? '2px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                              cursor: 'pointer'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                              <CreditCard size={17} color={isSelected ? 'var(--accent-cyan)' : 'var(--text-muted)'} />
                              <div>
                                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                                  {card.cardNickname || card.cardBrand}
                                </div>
                                <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                                  •••• {card.cardLast4} (Exp: {card.expiry})
                                </div>
                              </div>
                            </div>

                            {isSelected && (
                              <div style={{
                                width: '18px',
                                height: '18px',
                                borderRadius: '50%',
                                background: 'var(--accent-cyan)',
                                color: '#090d16',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>
                                <Check size={12} strokeWidth={3} />
                              </div>
                            )}
                          </div>
                        );
                      })}

                      <div
                        onClick={handleSelectNewCard}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.65rem 0.85rem',
                          borderRadius: 'var(--radius-md)',
                          background: selectedSavedCardId === 'new' ? 'rgba(0, 242, 254, 0.12)' : 'var(--bg-elevated)',
                          border: selectedSavedCardId === 'new' ? '2px solid var(--accent-cyan)' : '1px dashed var(--border-medium)',
                          cursor: 'pointer'
                        }}
                      >
                        <Plus size={16} color="var(--accent-cyan)" />
                        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                          Use Another Card
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3D Holographic Card Preview */}
                <div style={{
                  background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #0f172a 100%)',
                  border: '1px solid rgba(0, 242, 254, 0.4)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem',
                  color: '#fff',
                  boxShadow: 'var(--glow-cyan)',
                  marginBottom: '1.25rem',
                  maxWidth: '380px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-cyan)' }}>
                      VOLTX TECH PASSPORT
                    </span>
                    <span style={{ fontWeight: 800, fontSize: '1rem', fontFamily: 'var(--font-mono)' }}>
                      {payment.cardBrand || 'VISA'}
                    </span>
                  </div>
                  <div style={{ fontSize: '1.15rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', marginBottom: '1.25rem' }}>
                    {payment.cardNumber || '•••• •••• •••• 7721'}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: '0.75rem' }}>
                    <div>
                      <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem' }}>CARDHOLDER</div>
                      <div style={{ fontWeight: 700, textTransform: 'uppercase' }}>{payment.cardName || customer.fullName || 'ALEX VANCE'}</div>
                    </div>
                    <div>
                      <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem' }}>EXPIRES</div>
                      <div style={{ fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{payment.expiry || '08/28'}</div>
                    </div>
                  </div>
                </div>

                {/* Card input fields if new card */}
                {selectedSavedCardId === 'new' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                        Card Number *
                      </label>
                      <input 
                        type="text" 
                        placeholder="4532 8921 4489 7721"
                        value={payment.cardNumber}
                        onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          background: 'var(--bg-elevated)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 'var(--radius-md)',
                          color: 'var(--text-primary)',
                          fontFamily: 'var(--font-mono)'
                        }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '0.6rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                          Cardholder Name *
                        </label>
                        <input 
                          type="text" 
                          placeholder="ALEX VANCE"
                          value={payment.cardName}
                          onChange={(e) => setPayment({ ...payment, cardName: e.target.value.toUpperCase() })}
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
                        <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                          Expiry *
                        </label>
                        <input 
                          type="text" 
                          placeholder="MM/YY"
                          value={payment.expiry}
                          onChange={(e) => setPayment({ ...payment, expiry: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.65rem 0.85rem',
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-primary)',
                            fontFamily: 'var(--font-mono)'
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                          CVC *
                        </label>
                        <input 
                          type="password" 
                          maxLength={4}
                          placeholder="•••"
                          value={payment.cvc}
                          onChange={(e) => setPayment({ ...payment, cvc: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.65rem 0.85rem',
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-primary)',
                            fontFamily: 'var(--font-mono)'
                          }}
                        />
                      </div>
                    </div>

                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--accent-cyan)', cursor: 'pointer' }}>
                      <input 
                        type="checkbox" 
                        checked={saveNewCardToAccount}
                        onChange={(e) => setSaveNewCardToAccount(e.target.checked)}
                        style={{ accentColor: 'var(--accent-cyan)' }}
                      />
                      <span>Save this card to my account for future 1-click orders</span>
                    </label>
                  </div>
                )}
              </div>
            )}

            {/* 2. OMANNET / GULF NETWORKS (OMAN, KSA, KUWAIT, BAHRAIN, QATAR, EGYPT) */}
            {['omannet', 'mada', 'benefit', 'knet', 'naps', 'fawry'].includes(payment.method) && (
              <div style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-highlight)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.8rem' }}>
                    {payment.method === 'omannet' && '🇴🇲'}
                    {payment.method === 'mada' && '🇸🇦'}
                    {payment.method === 'benefit' && '🇧🇭'}
                    {payment.method === 'knet' && '🇰🇼'}
                    {payment.method === 'naps' && '🇶🇦'}
                    {payment.method === 'fawry' && '🇪🇬'}
                  </span>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {payment.methodName} National Network
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      {payment.method === 'omannet' && 'Pay directly with Bank Muscat, NBO, Bank Dhofar, or Thawani wallet'}
                      {payment.method === 'mada' && 'Direct Saudi Arabia mada debit card authentication'}
                      {payment.method === 'benefit' && 'Bahrain BENEFIT Pay instant mobile clearing'}
                      {payment.method === 'knet' && 'Kuwait National Electronic switch direct banking'}
                      {payment.method === 'naps' && 'Qatar NAPS POS/ATM gateway'}
                      {payment.method === 'fawry' && 'Egypt Fawry reference code generation'}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                      Debit Card Number / Account ID *
                    </label>
                    <input 
                      type="text" 
                      placeholder="5084 •••• •••• 9821" 
                      defaultValue="5084 9120 4481 9821"
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-mono)'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                      Mobile OTP Confirmation Number *
                    </label>
                    <input 
                      type="tel" 
                      value={payment.mobileNumber}
                      onChange={(e) => setPayment({ ...payment, mobileNumber: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-mono)'
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 3. UPI INSTANT PAY (INDIA) */}
            {payment.method === 'upi' && (
              <div style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-highlight)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.8rem' }}>🇮🇳</span>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      Unified Payments Interface (UPI 2.0)
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      Google Pay, PhonePe, Paytm, BHIM, CRED, Amazon Pay UPI
                    </p>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1rem', alignItems: 'center' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                      Enter Virtual Payment Address (VPA / UPI ID) *
                    </label>
                    <input 
                      type="text" 
                      value={payment.upiId}
                      onChange={(e) => setPayment({ ...payment, upiId: e.target.value })}
                      placeholder="username@okaxis / mobile@ybl"
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-mono)',
                        marginBottom: '0.5rem'
                      }}
                    />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--accent-emerald)' }}>
                      <CheckCircle2 size={14} />
                      <span>Verified UPI Handle • Instant PIN Prompt on Phone</span>
                    </div>
                  </div>

                  <div style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.75rem',
                    textAlign: 'center'
                  }}>
                    <QrCode size={48} color="var(--accent-cyan)" style={{ margin: '0 auto 0.25rem' }} />
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-primary)' }}>Scan with Any UPI App</div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. PIX INSTANT PAY (BRAZIL) */}
            {payment.method === 'pix' && (
              <div style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-highlight)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.8rem' }}>🇧🇷</span>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      Pix Instantáneo (Banco Central do Brasil)
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      QR Code dinâmico com liquidação instantânea em segundos
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    background: '#fff',
                    padding: '0.5rem',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <QrCode size={64} color="#000" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                      Chave Pix Copia e Cola:
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.5rem 0.75rem',
                      gap: '0.5rem'
                    }}>
                      <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        00020126580014br.gov.bcb.pix0136voltx-pay-749215204000053039865802BR
                      </span>
                      <button 
                        onClick={() => handleCopy('00020126580014br.gov.bcb.pix0136voltx-pay-749215204000053039865802BR')}
                        style={{ color: copiedCode ? 'var(--accent-emerald)' : 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '2px', fontSize: '0.75rem', fontWeight: 700 }}
                      >
                        <Copy size={13} />
                        {copiedCode ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. BUY NOW PAY LATER (KLARNA, TABBY, TAMARA, AFFIRM) */}
            {['klarna', 'tabby', 'tamara', 'affirm'].includes(payment.method) && (
              <div style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-highlight)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.8rem' }}>
                    {payment.method === 'tabby' && '✨'}
                    {payment.method === 'tamara' && '💎'}
                    {payment.method === 'klarna' && '🛍️'}
                    {payment.method === 'affirm' && '📊'}
                  </span>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {payment.methodName} — Split in 4 Interest-Free Payments
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      0% Interest • No Hidden Fees • Instant Approval
                    </p>
                  </div>
                </div>

                {/* 4 Installments timeline visualizer */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '1rem' }}>
                  {[
                    { title: 'Due Today', amt: finalOrderTotal / 4, tag: '1st Payment' },
                    { title: 'In 30 Days', amt: finalOrderTotal / 4, tag: '2nd Payment' },
                    { title: 'In 60 Days', amt: finalOrderTotal / 4, tag: '3rd Payment' },
                    { title: 'In 90 Days', amt: finalOrderTotal / 4, tag: '4th Payment' }
                  ].map((inst, idx) => (
                    <div key={idx} style={{
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.75rem',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '0.2rem' }}>
                        {inst.tag}
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                        {formatPrice(inst.amt)}
                      </div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {inst.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. CRYPTO WEB3 (BTC, ETH, SOL, USDT) */}
            {payment.method.startsWith('crypto') && (
              <div style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-highlight)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.8rem' }}>
                    {payment.method === 'crypto_btc' && '₿'}
                    {payment.method === 'crypto_eth' && 'Ξ'}
                    {payment.method === 'crypto_sol' && '☀️'}
                    {payment.method === 'crypto_usdt' && '💵'}
                  </span>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      Web3 Decentralized Payment — {payment.methodName}
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      Sub-second blockchain settlement with zero chargebacks
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    background: '#fff',
                    padding: '0.5rem',
                    borderRadius: 'var(--radius-md)'
                  }}>
                    <QrCode size={64} color="#000" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                      Deposit Address:
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.5rem 0.75rem',
                      gap: '0.5rem'
                    }}>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {payment.method === 'crypto_sol' ? 'Sol49xVK8LmnPt901XyQ21aZbRt4' : '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'}
                      </span>
                      <button 
                        onClick={() => handleCopy('0x742d35Cc6634C0532925a3b844Bc454e4438f44e')}
                        style={{ color: copiedCode ? 'var(--accent-emerald)' : 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '2px', fontSize: '0.75rem', fontWeight: 700 }}
                      >
                        <Copy size={13} />
                        {copiedCode ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 7. DIGITAL WALLETS EXPRESS (APPLE PAY, GOOGLE PAY, PAYPAL, ALIPAY, WECHAT) */}
            {['apple_pay', 'google_pay', 'paypal', 'alipay', 'wechat_pay', 'grabpay'].includes(payment.method) && (
              <div style={{
                background: 'var(--bg-elevated)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
                marginBottom: '1.5rem',
                border: '1px solid var(--border-subtle)'
              }}>
                <Sparkles size={32} color="var(--accent-cyan)" style={{ margin: '0 auto 0.75rem' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                  {payment.methodName} 1-Touch Express
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  You will be able to authorize the transaction instantly on the final confirmation step.
                </p>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button 
                type="button" 
                onClick={() => setStep(2)} 
                className="btn btn-secondary"
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>
              <button 
                type="button" 
                onClick={() => setStep(4)} 
                className="btn btn-primary"
              >
                <span>Review Order</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Review & Place Order */}
        {step === 4 && (
          <div>
            {/* Order Items Preview */}
            <div style={{
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              marginBottom: '1.5rem',
              maxHeight: '180px',
              overflowY: 'auto'
            }}>
              {cart.map(item => (
                <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src={item.product.images[0]} alt={item.product.title} style={{ width: '40px', height: '40px', borderRadius: '4px', objectFit: 'cover' }} />
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>{item.product.title}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Qty: {item.quantity} {item.selectedSpec ? `• ${item.selectedSpec}` : ''}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                    {formatPrice(item.unitPrice * item.quantity)}
                  </div>
                </div>
              ))}
            </div>

            {/* Shipping & Payment Summary Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'var(--bg-elevated)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                  Shipping Destination
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{customer.fullName || 'Alex Vance'}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{customer.address || '742 Cyber Parkway'}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{customer.city}, {customer.state} {customer.zip}, {customer.country}</div>
              </div>

              <div style={{ background: 'var(--bg-elevated)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                  Payment Method
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span>{payment.methodName || 'Credit / Debit Card'}</span>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  {payment.method === 'card' ? `Ending in •••• ${payment.cardLast4 || '7721'}` : `Authorized in ${activeCurrency.code}`}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--accent-emerald)', fontWeight: 600, marginTop: '2px' }}>
                  Delivery: Order will be delivered within 15 to 25 working days
                </div>
              </div>
            </div>

            {/* Price Calculations */}
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem',
              marginBottom: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
              fontSize: '0.88rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                <span>Subtotal</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}>{formatPrice(cartSubtotal)}</span>
              </div>
              {cartDiscount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent-emerald)' }}>
                  <span>Discount ({appliedCoupon?.code})</span>
                  <span style={{ fontFamily: 'var(--font-mono)' }}>-{formatPrice(cartDiscount)}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                <span>Shipping ({selectedShipping.name})</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: shippingCost === 0 ? 'var(--accent-emerald)' : 'var(--text-primary)' }}>
                  {shippingCost === 0 ? 'FREE' : formatPrice(shippingCost)}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                <span>Estimated Taxes (8%)</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}>{formatPrice(estimatedTax)}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '1.3rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '0.75rem',
                marginTop: '0.4rem'
              }}>
                <span>Total Amount ({activeCurrency.code})</span>
                <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                  {formatPrice(finalOrderTotal)}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button 
                type="button" 
                onClick={() => setStep(3)} 
                className="btn btn-secondary"
                disabled={isProcessing}
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>
              <button 
                type="button" 
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="btn btn-primary"
                style={{ minWidth: '220px', padding: '0.85rem 1.5rem', fontSize: '1rem' }}
              >
                {isProcessing ? (
                  <span>Authorizing Payment...</span>
                ) : (
                  <>
                    <ShieldCheck size={18} />
                    <span>Authorize & Place Order</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
