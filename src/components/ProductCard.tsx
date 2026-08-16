import React from 'react';
import { 
  Heart, 
  ShoppingBag, 
  Star, 
  Eye, 
  Zap, 
  CheckCircle2, 
  AlertCircle,
  Truck
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  layout?: 'grid' | 'list';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, layout = 'grid' }) => {
  const { 
    formatPrice, 
    addToCart, 
    express1ClickBuy,
    toggleWishlist, 
    isInWishlist, 
    setSelectedProductForDetail 
  } = useStore();

  const isFavorited = isInWishlist(product.id);
  const isLowStock = product.stock > 0 && product.stock <= 10;
  const isOutOfStock = product.stock <= 0;

  // Render badge class
  const getBadgeStyle = (badge?: string) => {
    switch (badge) {
      case 'BEST SELLER': return 'badge-amber';
      case 'HOT': return 'badge-rose';
      case '240W GaN': return 'badge-cyan';
      case 'NEW': return 'badge-emerald';
      default: return 'badge-cyan';
    }
  };

  if (layout === 'list') {
    return (
      <div className="glass-panel" style={{
        borderRadius: 'var(--radius-lg)',
        padding: '1.25rem',
        display: 'grid',
        gridTemplateColumns: '220px 1fr 200px',
        gap: '1.5rem',
        alignItems: 'center',
        position: 'relative',
        transition: 'all var(--transition-smooth)'
      }}>
        {/* Product Image */}
        <div 
          onClick={() => setSelectedProductForDetail(product)}
          style={{
            height: '160px',
            borderRadius: 'var(--radius-md)',
            background: '#0b1120',
            overflow: 'hidden',
            cursor: 'pointer',
            position: 'relative'
          }}
        >
          <img 
            src={product.images[0]} 
            alt={product.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.4s ease'
            }}
          />
          {product.badge && (
            <span className={`badge ${getBadgeStyle(product.badge)}`} style={{ position: 'absolute', top: '8px', left: '8px' }}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Center Details */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase' }}>
              {product.brand}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.78rem', color: 'var(--accent-amber)' }}>
              <Star size={13} fill="currentColor" />
              <strong style={{ color: 'var(--text-primary)' }}>{product.rating}</strong>
              <span style={{ color: 'var(--text-muted)' }}>({product.reviewCount})</span>
            </div>
          </div>

          <h3 
            onClick={() => setSelectedProductForDetail(product)}
            style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem', cursor: 'pointer' }}
          >
            {product.title}
          </h3>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.8rem', lineHeight: 1.4 }}>
            {product.subtitle}
          </p>

          {/* Key specs row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {Object.entries(product.specs).slice(0, 3).map(([key, val]) => (
              <span key={key} style={{
                fontSize: '0.72rem',
                padding: '0.2rem 0.5rem',
                background: 'var(--bg-elevated)',
                borderRadius: 'var(--radius-xs)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-muted)'
              }}>
                <strong style={{ color: 'var(--text-secondary)' }}>{key}:</strong> {val}
              </span>
            ))}
          </div>
        </div>

        {/* Right Pricing & Actions */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'center',
          borderLeft: '1px solid var(--border-subtle)',
          paddingLeft: '1.5rem',
          height: '100%'
        }}>
          <div style={{ textAlign: 'right', marginBottom: '0.75rem' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
              {formatPrice(product.price)}
            </div>
            {product.originalPrice && (
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'line-through', fontFamily: 'var(--font-mono)' }}>
                {formatPrice(product.originalPrice)}
              </div>
            )}
          </div>

          <div style={{ marginBottom: '1rem' }}>
            {isOutOfStock ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--accent-rose)', fontWeight: 600 }}>
                <AlertCircle size={13} /> Out of Stock
              </span>
            ) : isLowStock ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--accent-amber)', fontWeight: 600 }}>
                <Zap size={13} /> Only {product.stock} Left!
              </span>
            ) : (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                <CheckCircle2 size={13} /> In Stock
              </span>
            )}
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.35rem' }}>
              <Truck size={12} color="var(--accent-cyan)" />
              <span>Delivered in 15-25 working days</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', width: '100%' }}>
            <button
              onClick={() => express1ClickBuy(product)}
              disabled={isOutOfStock}
              className="btn"
              style={{
                width: '100%',
                padding: '0.45rem 0.75rem',
                fontSize: '0.8rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
                color: '#090d16',
                boxShadow: 'var(--glow-cyan)',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.35rem'
              }}
            >
              <Zap size={14} fill="#090d16" />
              <span>1-Click Buy</span>
            </button>

            <div style={{ display: 'flex', gap: '0.5rem', width: '100%' }}>
              <button
                onClick={() => toggleWishlist(product)}
                className="btn-icon"
                title="Save to Wishlist"
              >
                <Heart size={16} color={isFavorited ? 'var(--accent-rose)' : 'inherit'} fill={isFavorited ? 'var(--accent-rose)' : 'none'} />
              </button>
              <button
                onClick={() => addToCart(product, 1)}
                disabled={isOutOfStock}
                className="btn btn-secondary"
                style={{ flex: 1, padding: '0.45rem 0.6rem', fontSize: '0.8rem' }}
              >
                <ShoppingBag size={14} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard Grid layout
  return (
    <div 
      className="glass-panel"
      style={{
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all var(--transition-smooth)',
        height: '100%'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = 'var(--border-highlight)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Top Floating Badges */}
      <div style={{
        position: 'absolute',
        top: '0.75rem',
        left: '0.75rem',
        right: '0.75rem',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        pointerEvents: 'none'
      }}>
        {product.badge ? (
          <span className={`badge ${getBadgeStyle(product.badge)}`} style={{ pointerEvents: 'auto' }}>
            {product.badge}
          </span>
        ) : <span />}

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className="btn-icon"
          style={{
            pointerEvents: 'auto',
            width: '32px',
            height: '32px',
            background: 'var(--bg-glass)',
            backdropFilter: 'blur(8px)',
            borderRadius: '50%'
          }}
          title="Save to Wishlist"
        >
          <Heart size={15} color={isFavorited ? 'var(--accent-rose)' : 'var(--text-primary)'} fill={isFavorited ? 'var(--accent-rose)' : 'none'} />
        </button>
      </div>

      {/* Product Image Showcase */}
      <div 
        onClick={() => setSelectedProductForDetail(product)}
        style={{
          position: 'relative',
          height: '210px',
          background: '#0b1120',
          cursor: 'pointer',
          overflow: 'hidden'
        }}
      >
        <img 
          src={product.images[0]} 
          alt={product.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </div>

      {/* Body Content */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Brand & Rating */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {product.brand}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.75rem', color: 'var(--accent-amber)' }}>
            <Star size={12} fill="currentColor" />
            <strong style={{ color: 'var(--text-primary)' }}>{product.rating}</strong>
            <span style={{ color: 'var(--text-muted)' }}>({product.reviewCount})</span>
          </div>
        </div>

        {/* Title */}
        <h3 
          onClick={() => setSelectedProductForDetail(product)}
          style={{
            fontSize: '1.02rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '0.4rem',
            cursor: 'pointer',
            lineHeight: 1.35,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            height: '2.7rem'
          }}
        >
          {product.title}
        </h3>

        {/* Subtitle / Key Spec */}
        <p style={{
          fontSize: '0.78rem',
          color: 'var(--text-secondary)',
          marginBottom: '0.85rem',
          lineHeight: 1.35,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {product.subtitle}
        </p>

        {/* Price Row */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textDecoration: 'line-through', fontFamily: 'var(--font-mono)' }}>
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

          {/* Stock status tag */}
          <div style={{ marginTop: 'auto', marginBottom: '0.85rem' }}>
            {isOutOfStock ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', color: 'var(--accent-rose)', fontWeight: 600 }}>
                <AlertCircle size={12} /> Out of Stock
              </span>
            ) : isLowStock ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', color: 'var(--accent-amber)', fontWeight: 600 }}>
                <Zap size={12} /> Only {product.stock} Left!
              </span>
            ) : (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                <CheckCircle2 size={12} /> In Stock
              </span>
            )}
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}>
              <Truck size={12} color="var(--accent-cyan)" />
              <span>Delivered in 15-25 working days</span>
            </div>
          </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
          {/* ⚡ 1-Click Fast Buy Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              express1ClickBuy(product);
            }}
            disabled={isOutOfStock}
            className="btn"
            style={{
              width: '100%',
              padding: '0.45rem 0.75rem',
              fontSize: '0.8rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
              color: '#090d16',
              boxShadow: 'var(--glow-cyan)',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.35rem'
            }}
            title="1-Click Express Fast Buy"
          >
            <Zap size={14} fill="#090d16" />
            <span>1-Click Buy</span>
          </button>

          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0.4rem' }}>
            <button 
              onClick={() => setSelectedProductForDetail(product)}
              className="btn-icon"
              style={{ width: '34px', height: '34px' }}
              title="View Technical Specs"
            >
              <Eye size={14} />
            </button>
            <button 
              onClick={() => addToCart(product, 1)}
              disabled={isOutOfStock}
              className="btn btn-secondary"
              style={{ padding: '0.4rem 0.6rem', fontSize: '0.78rem' }}
            >
              <ShoppingBag size={14} />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
