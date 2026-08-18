import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Truck, 
  Tag, 
  ArrowRight, 
  Check, 
  AlertCircle,
  Zap
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { AVAILABLE_COUPONS } from '../data/products';

export const CartDrawer: React.FC = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    cartCount,
    cartSubtotal, 
    cartDiscount, 
    cartTotal,
    formatPrice,
    updateCartQuantity,
    removeFromCart,
    freeShippingThreshold,
    freeShippingProgress,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    setIsCheckoutOpen,
    user,
    setIsAuthModalOpen,
    setAuthPromptReason,
    showToast,
    placeOrder
  } = useStore();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (codeToApply?: string) => {
    const code = codeToApply || couponInput;
    if (!code.trim()) return;

    const result = applyCoupon(code);
    if (!result.success) {
      setCouponError(result.message);
    } else {
      setCouponError('');
      setCouponInput('');
    }
  };

  const handle1ClickBuyCart = () => {
    if (!user) {
      setIsCartOpen(false);
      setAuthPromptReason('checkout');
      setIsAuthModalOpen(true);
      showToast('Please sign in or create an account to use 1-Click Fast Buy.', 'warning', 'Login Required');
      return;
    }
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleProceedToCheckout = () => {
    if (!user) {
      setIsCartOpen(false);
      setAuthPromptReason('checkout');
      setIsAuthModalOpen(true);
      showToast('Please sign in or create an account to complete checkout and place orders.', 'warning', 'Login Required');
      return;
    }
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const isFreeShippingUnlocked = cartSubtotal >= freeShippingThreshold || appliedCoupon?.freeShipping;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);

  return (
    <div className="modal-backdrop" onClick={() => setIsCartOpen(false)}>
      <div 
        className="drawer-right" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'var(--bg-surface)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(0, 242, 254, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-cyan)'
            }}>
              <ShoppingBag size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Your Tech Cart
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {cartCount} {cartCount === 1 ? 'item' : 'items'} selected
              </span>
            </div>
          </div>

          <button 
            onClick={() => setIsCartOpen(false)}
            className="btn-icon"
            style={{ width: '36px', height: '36px' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div style={{
          padding: '1rem 1.5rem',
          background: 'rgba(16, 185, 129, 0.08)',
          borderBottom: '1px solid rgba(16, 185, 129, 0.2)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.82rem',
            marginBottom: '0.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>
              <Truck size={16} />
              <span>⚡ 100% FREE Express Shipping Applied to All Orders!</span>
            </div>
            <span style={{ fontWeight: 800, color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
              100% FREE
            </span>
          </div>

          <div style={{
            height: '6px',
            background: 'rgba(16, 185, 129, 0.2)',
            borderRadius: 'var(--radius-full)',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              width: '100%',
              background: 'linear-gradient(90deg, #10b981 0%, #00f2fe 100%)',
              transition: 'width 0.4s ease'
            }} />
          </div>
        </div>

        {/* Cart Items List or Empty State */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {cart.length === 0 ? (
            <div style={{
              margin: 'auto 0',
              textAlign: 'center',
              padding: '2rem 1rem'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--bg-elevated)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
                color: 'var(--text-muted)'
              }}>
                <ShoppingBag size={28} />
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                Your cart is empty
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '280px', margin: '0 auto 1.5rem' }}>
                Explore our next-gen chargers, smartphones and cables to gear up your setup.
              </p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="btn btn-primary"
                style={{ padding: '0.7rem 1.5rem', fontSize: '0.88rem' }}
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div 
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'var(--bg-elevated)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-subtle)',
                  position: 'relative'
                }}
              >
                {/* Thumbnail */}
                <img 
                  src={item.product.images[0]} 
                  alt={item.product.title}
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: 'var(--radius-md)',
                    objectFit: 'cover',
                    background: '#0b1120',
                    flexShrink: 0
                  }}
                />

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontWeight: 700, textTransform: 'uppercase' }}>
                    {item.product.brand}
                  </div>
                  <h4 style={{
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.2rem',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {item.product.title}
                  </h4>

                  {/* Selected Variants Pill */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '0.6rem' }}>
                    {item.selectedColor && (
                      <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.4rem', background: 'var(--bg-surface)', borderRadius: '4px', color: 'var(--text-muted)' }}>
                        {item.selectedColor}
                      </span>
                    )}
                    {item.selectedSpec && (
                      <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.4rem', background: 'var(--bg-surface)', borderRadius: '4px', color: 'var(--text-muted)' }}>
                        {item.selectedSpec}
                      </span>
                    )}
                    {item.selectedLength && (
                      <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.4rem', background: 'var(--bg-surface)', borderRadius: '4px', color: 'var(--text-muted)' }}>
                        {item.selectedLength}
                      </span>
                    )}
                    {item.selectedStorage && (
                      <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.4rem', background: 'var(--bg-surface)', borderRadius: '4px', color: 'var(--text-muted)' }}>
                        {item.selectedStorage}
                      </span>
                    )}
                  </div>

                  {/* Stepper and Price Row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: 'var(--bg-surface)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)'
                    }}>
                      <button 
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        style={{ padding: '0.25rem 0.5rem', color: 'var(--text-muted)' }}
                      >
                        <Minus size={13} />
                      </button>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, fontFamily: 'var(--font-mono)', minWidth: '24px', textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        style={{ padding: '0.25rem 0.5rem', color: 'var(--text-muted)' }}
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                      {formatPrice(item.unitPrice * item.quantity)}
                    </div>
                  </div>
                </div>

                {/* Delete Button */}
                <button 
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    position: 'absolute',
                    top: '0.6rem',
                    right: '0.6rem',
                    color: 'var(--text-muted)',
                    padding: '4px'
                  }}
                  title="Remove item"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer & Promo Section */}
        {cart.length > 0 && (
          <div style={{
            padding: '1.25rem 1.5rem',
            background: 'var(--bg-surface)',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {/* Promo Code Engine */}
            <div>
              {appliedCoupon ? (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  padding: '0.5rem 0.85rem',
                  borderRadius: 'var(--radius-md)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Tag size={15} color="var(--accent-emerald)" />
                    <div>
                      <span style={{ fontWeight: 800, color: 'var(--accent-emerald)', fontSize: '0.85rem' }}>
                        {appliedCoupon.code}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginLeft: '0.4rem' }}>
                        ({appliedCoupon.description})
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={removeCoupon}
                    style={{ fontSize: '0.75rem', color: 'var(--accent-rose)', fontWeight: 600 }}
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input 
                      type="text" 
                      placeholder="Enter promo code (e.g. VOLT15)"
                      value={couponInput}
                      onChange={(e) => {
                        setCouponInput(e.target.value.toUpperCase());
                        setCouponError('');
                      }}
                      style={{
                        flex: 1,
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        padding: '0.5rem 0.85rem',
                        fontSize: '0.82rem',
                        color: 'var(--text-primary)',
                        textTransform: 'uppercase'
                      }}
                    />
                    <button 
                      onClick={() => handleApplyCoupon()}
                      className="btn btn-secondary"
                      style={{ padding: '0.5rem 1rem', fontSize: '0.82rem' }}
                    >
                      Apply
                    </button>
                  </div>

                  {couponError && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--accent-rose)', marginTop: '0.35rem' }}>
                      <AlertCircle size={13} />
                      <span>{couponError}</span>
                    </div>
                  )}

                  {/* Quick Coupon Chips */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.5rem' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Quick Promos:</span>
                    {AVAILABLE_COUPONS.map(c => (
                      <button 
                        key={c.code}
                        onClick={() => handleApplyCoupon(c.code)}
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          padding: '0.1rem 0.45rem',
                          background: 'var(--bg-elevated)',
                          borderRadius: '4px',
                          color: 'var(--accent-cyan)',
                          border: '1px solid var(--border-subtle)'
                        }}
                      >
                        {c.code}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Delivery Timeframe Notice (Order will be delivered within 15 to 25 working days) */}
            <div style={{
              background: 'rgba(0, 242, 254, 0.08)',
              border: '1px solid rgba(0, 242, 254, 0.25)',
              borderRadius: 'var(--radius-md)',
              padding: '0.65rem 0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '0.78rem'
            }}>
              <Truck size={16} color="var(--accent-cyan)" />
              <div>
                <span style={{ fontWeight: 800, color: 'var(--accent-cyan)' }}>Order will be delivered within 15 to 25 working days</span>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Standard Insured Express Transit Included
                </div>
              </div>
            </div>

            {/* Price Calculations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                <span>Subtotal</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {formatPrice(cartSubtotal)}
                </span>
              </div>

              {cartDiscount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent-emerald)' }}>
                  <span>Discount ({appliedCoupon?.code})</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    -{formatPrice(cartDiscount)}
                  </span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                <span>Delivery (15-25 Working Days)</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--accent-emerald)' }}>
                  FREE
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '1.15rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '0.6rem',
                marginTop: '0.2rem'
              }}>
                <span>Total</span>
                <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                  {formatPrice(cartTotal + (isFreeShippingUnlocked ? 0 : 4.99))}
                </span>
              </div>
            </div>

            {/* CTAs: 1-Click Fast Buy & Standard Checkout */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {/* ⚡ 1-Click Fast Buy Entire Cart */}
              <button 
                onClick={handle1ClickBuyCart}
                className="btn"
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
                  color: '#090d16',
                  border: 'none',
                  boxShadow: 'var(--glow-cyan)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                <Zap size={18} fill="#090d16" />
                <span>⚡ 1-Click Fast Buy Cart</span>
              </button>

              <button 
                onClick={handleProceedToCheckout}
                className="btn btn-secondary"
                style={{
                  width: '100%',
                  padding: '0.65rem',
                  fontSize: '0.85rem',
                  justifyContent: 'center'
                }}
              >
                <span>Standard Multi-Step Checkout</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
