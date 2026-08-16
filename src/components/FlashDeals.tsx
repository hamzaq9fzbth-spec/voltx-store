import React, { useState, useEffect } from 'react';
import { Zap, Flame, Clock, Plus, Eye } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { Product } from '../types';

export const FlashDeals: React.FC = () => {
  const { products, formatPrice, addToCart, setSelectedProductForDetail } = useStore();

  const flashProducts = products.filter(p => p.flashDeal);

  // Countdown timer for flash sale
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 27,
    seconds: 44
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 6, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, '0');

  if (flashProducts.length === 0) return null;

  return (
    <section style={{
      padding: '3rem 0',
      background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)'
    }}>
      <div className="container">
        {/* Header with Countdown */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '2rem',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '1.25rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(245, 158, 11, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(245, 158, 11, 0.3)'
            }}>
              <Flame size={24} color="var(--accent-amber)" />
            </div>
            <div>
              <h2 style={{
                fontSize: '1.6rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span>Lightning Tech Drops</span>
                <span className="badge badge-amber">Limited Quantities</span>
              </h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Exclusive discounts on top-rated chargers, cables and accessories before stock runs out.
              </p>
            </div>
          </div>

          {/* Countdown Clock Box */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'var(--bg-elevated)',
            padding: '0.5rem 1rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)'
          }}>
            <Clock size={16} color="var(--accent-amber)" />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Deals Expire In:</span>
            <div style={{ display: 'flex', gap: '0.3rem', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>
              <span style={{ background: 'var(--bg-surface)', padding: '0.2rem 0.4rem', borderRadius: '4px', color: 'var(--accent-amber)' }}>
                {pad(timeLeft.hours)}h
              </span>
              <span>:</span>
              <span style={{ background: 'var(--bg-surface)', padding: '0.2rem 0.4rem', borderRadius: '4px', color: 'var(--accent-amber)' }}>
                {pad(timeLeft.minutes)}m
              </span>
              <span>:</span>
              <span style={{ background: 'var(--bg-surface)', padding: '0.2rem 0.4rem', borderRadius: '4px', color: 'var(--accent-amber)' }}>
                {pad(timeLeft.seconds)}s
              </span>
            </div>
          </div>
        </div>

        {/* Flash Deals Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {flashProducts.map((product: Product) => {
            const soldCount = Math.floor(product.stock * 1.8);
            const totalStock = product.stock + soldCount;
            const percentageSold = Math.round((soldCount / totalStock) * 100);

            return (
              <div 
                key={product.id}
                className="glass-panel"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all var(--transition-smooth)'
                }}
              >
                {/* Discount Badge */}
                {product.flashDealDiscount && (
                  <div style={{
                    position: 'absolute',
                    top: '0.75rem',
                    left: '0.75rem',
                    zIndex: 10,
                    background: 'var(--accent-rose)',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.6rem',
                    borderRadius: 'var(--radius-full)',
                    boxShadow: '0 2px 8px rgba(244, 63, 94, 0.4)'
                  }}>
                    -{product.flashDealDiscount}% OFF
                  </div>
                )}

                {/* Product Image */}
                <div 
                  onClick={() => setSelectedProductForDetail(product)}
                  style={{
                    position: 'relative',
                    height: '200px',
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
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    {product.brand}
                  </div>

                  <h3 
                    onClick={() => setSelectedProductForDetail(product)}
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                      cursor: 'pointer',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      height: '2.8rem'
                    }}
                  >
                    {product.title}
                  </h3>

                  {/* Pricing */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '0.85rem' }}>
                    <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'line-through', fontFamily: 'var(--font-mono)' }}>
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Stock Progress Bar */}
                  <div style={{ marginTop: 'auto', marginBottom: '1.2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                      <span>Claimed: <strong style={{ color: 'var(--accent-amber)' }}>{percentageSold}%</strong></span>
                      <span>Only <strong style={{ color: 'var(--accent-rose)' }}>{product.stock} left</strong></span>
                    </div>
                    <div style={{
                      height: '6px',
                      background: 'var(--bg-elevated)',
                      borderRadius: 'var(--radius-full)',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${percentageSold}%`,
                        background: 'linear-gradient(90deg, var(--accent-amber) 0%, var(--accent-rose) 100%)',
                        borderRadius: 'var(--radius-full)'
                      }} />
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0.5rem' }}>
                    <button 
                      onClick={() => setSelectedProductForDetail(product)}
                      className="btn-icon"
                      title="Quick Specs View"
                    >
                      <Eye size={16} />
                    </button>
                    <button 
                      onClick={() => addToCart(product, 1)}
                      className="btn btn-primary"
                      style={{ fontSize: '0.82rem', padding: '0.5rem' }}
                    >
                      <Plus size={15} />
                      <span>Grab Deal</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
