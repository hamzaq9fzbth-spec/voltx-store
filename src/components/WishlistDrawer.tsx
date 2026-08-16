import React from 'react';
import { 
  X, 
  Heart, 
  Trash2, 
  ShoppingBag, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const WishlistDrawer: React.FC = () => {
  const { 
    isWishlistOpen, 
    setIsWishlistOpen, 
    wishlist, 
    formatPrice, 
    moveWishlistToCart, 
    toggleWishlist,
    addToCart,
    showToast
  } = useStore();

  if (!isWishlistOpen) return null;

  const handleMoveAllToCart = () => {
    if (wishlist.length === 0) return;
    wishlist.forEach(item => addToCart(item, 1));
    wishlist.forEach(item => toggleWishlist(item));
    showToast(`Moved all ${wishlist.length} wishlist items to cart!`, 'success');
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsWishlistOpen(false)}>
      <div 
        className="drawer-right" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
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
              background: 'rgba(244, 63, 94, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-rose)'
            }}>
              <Heart size={18} fill="currentColor" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Saved Wishlist
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
              </span>
            </div>
          </div>

          <button 
            onClick={() => setIsWishlistOpen(false)}
            className="btn-icon"
            style={{ width: '36px', height: '36px' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {wishlist.length === 0 ? (
            <div style={{ margin: 'auto 0', textAlign: 'center', padding: '2rem 1rem' }}>
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
                <Heart size={28} />
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                Your wishlist is empty
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '280px', margin: '0 auto 1.5rem' }}>
                Click the heart icon on any device to save it for later.
              </p>
              <button 
                onClick={() => setIsWishlistOpen(false)}
                className="btn btn-primary"
                style={{ padding: '0.7rem 1.5rem', fontSize: '0.88rem' }}
              >
                Browse Gadgets
              </button>
            </div>
          ) : (
            wishlist.map(product => (
              <div
                key={product.id}
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
                <img 
                  src={product.images[0]} 
                  alt={product.title} 
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: 'var(--radius-md)',
                    objectFit: 'cover',
                    background: '#0b1120',
                    flexShrink: 0
                  }}
                />

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontWeight: 700, textTransform: 'uppercase' }}>
                    {product.brand}
                  </div>
                  <h4 style={{
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.35rem',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {product.title}
                  </h4>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textDecoration: 'line-through', fontFamily: 'var(--font-mono)' }}>
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => moveWishlistToCart(product)}
                    className="btn btn-primary"
                    style={{ padding: '0.4rem 0.8rem', fontSize: '0.78rem', width: '100%' }}
                  >
                    <ShoppingBag size={14} />
                    <span>Move to Cart</span>
                  </button>
                </div>

                <button
                  onClick={() => toggleWishlist(product)}
                  style={{
                    position: 'absolute',
                    top: '0.6rem',
                    right: '0.6rem',
                    color: 'var(--text-muted)',
                    padding: '4px'
                  }}
                  title="Remove from wishlist"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlist.length > 0 && (
          <div style={{
            padding: '1.25rem 1.5rem',
            background: 'var(--bg-surface)',
            borderTop: '1px solid var(--border-subtle)'
          }}>
            <button
              onClick={handleMoveAllToCart}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.85rem' }}
            >
              <ShoppingBag size={18} />
              <span>Move All to Cart ({wishlist.length} items)</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
