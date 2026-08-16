import React, { useState } from 'react';
import { Zap, Plus, Check, ShoppingBag, Sparkles } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { TECH_BUNDLE_DEAL } from '../data/products';

export const TechBundleBox: React.FC = () => {
  const { products, formatPrice, addToCart, showToast } = useStore();

  const bundleProducts = TECH_BUNDLE_DEAL.productIds
    .map(id => products.find(p => p.id === id))
    .filter(Boolean);

  const [selectedIds, setSelectedIds] = useState<string[]>(TECH_BUNDLE_DEAL.productIds);

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length === 1) return; // keep at least one
      setSelectedIds(prev => prev.filter(item => item !== id));
    } else {
      setSelectedIds(prev => [...prev, id]);
    }
  };

  const selectedProducts = bundleProducts.filter(p => p && selectedIds.includes(p.id));
  const subtotal = selectedProducts.reduce((sum, p) => sum + (p?.price || 0), 0);
  const isFullBundle = selectedIds.length === TECH_BUNDLE_DEAL.productIds.length;
  const discountRate = isFullBundle ? (TECH_BUNDLE_DEAL.bundleDiscountPercent / 100) : 0;
  const savings = subtotal * discountRate;
  const finalBundlePrice = subtotal - savings;

  const handleAddBundleToCart = () => {
    selectedProducts.forEach(p => {
      if (p) addToCart(p, 1);
    });
    showToast(`Added ${selectedProducts.length} bundle items to your cart!`, 'success', 'Bundle Added');
  };

  if (bundleProducts.length < 2) return null;

  return (
    <section style={{ padding: '2rem 0' }}>
      <div className="container">
        <div className="glass-panel" style={{
          borderRadius: 'var(--radius-xl)',
          padding: '2rem',
          border: '1px solid var(--border-highlight)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <span className="badge badge-cyan">
              <Sparkles size={12} /> Frequently Bought Together
            </span>
            <span className="badge badge-amber">
              <Zap size={12} /> Save 25% Bundle Special
            </span>
          </div>

          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            {TECH_BUNDLE_DEAL.title}
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', maxWidth: '750px' }}>
            {TECH_BUNDLE_DEAL.description}
          </p>

          {/* Bundle Items Visual Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center'
          }}>
            {/* Products selection list */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center'
            }}>
              {bundleProducts.map((prod, idx) => {
                if (!prod) return null;
                const isChecked = selectedIds.includes(prod.id);
                return (
                  <React.Fragment key={prod.id}>
                    {idx > 0 && (
                      <div style={{
                        color: 'var(--accent-cyan)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--bg-elevated)',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        fontWeight: 800
                      }}>
                        <Plus size={16} />
                      </div>
                    )}
                    <div 
                      onClick={() => toggleSelect(prod.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        background: isChecked ? 'var(--bg-elevated)' : 'rgba(0,0,0,0.2)',
                        border: isChecked ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '0.75rem',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)',
                        opacity: isChecked ? 1 : 0.6,
                        flex: '1',
                        minWidth: '220px'
                      }}
                    >
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '4px',
                        border: isChecked ? 'none' : '2px solid var(--text-muted)',
                        background: isChecked ? 'var(--accent-cyan)' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#090d16',
                        flexShrink: 0
                      }}>
                        {isChecked && <Check size={14} strokeWidth={3} />}
                      </div>

                      <img 
                        src={prod.images[0]} 
                        alt={prod.title} 
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: 'var(--radius-sm)',
                          objectFit: 'cover'
                        }}
                      />

                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}>
                          {prod.title}
                        </div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                          {formatPrice(prod.price)}
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>

            {/* Bundle Pricing Summary Box */}
            <div style={{
              background: 'var(--bg-surface)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              border: '1px solid var(--border-medium)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                Total Bundle Price ({selectedProducts.length} items):
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                  {formatPrice(finalBundlePrice)}
                </span>
                {isFullBundle && (
                  <span style={{ fontSize: '1rem', color: 'var(--text-muted)', textDecoration: 'line-through', fontFamily: 'var(--font-mono)' }}>
                    {formatPrice(subtotal)}
                  </span>
                )}
              </div>

              {isFullBundle && (
                <div style={{
                  display: 'inline-block',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: 'var(--accent-emerald)',
                  background: 'rgba(16, 185, 129, 0.15)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-full)',
                  marginBottom: '1rem'
                }}>
                  You Save: {formatPrice(savings)} (25% OFF)
                </div>
              )}

              <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '0.85rem' }}>
                🚚 Order will be delivered within 15 to 25 working days
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button 
                  onClick={handleAddBundleToCart}
                  className="btn"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    fontSize: '0.9rem',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
                    color: '#090d16',
                    border: 'none',
                    boxShadow: 'var(--glow-cyan)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Zap size={16} fill="#090d16" />
                  <span>⚡ 1-Click Buy Bundle</span>
                </button>

                <button 
                  onClick={handleAddBundleToCart}
                  className="btn btn-secondary"
                  style={{ width: '100%', padding: '0.6rem', fontSize: '0.82rem', justifyContent: 'center' }}
                >
                  <ShoppingBag size={15} />
                  <span>Add Selected to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
