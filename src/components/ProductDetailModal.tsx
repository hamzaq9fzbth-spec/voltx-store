import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Heart, 
  ShoppingBag, 
  Zap, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  Check, 
  Plus, 
  Minus,
  MessageSquare,
  Sparkles,
  Layers,
  Cpu,
  Smartphone
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductVariant } from '../types';

export const ProductDetailModal: React.FC = () => {
  const { 
    selectedProductForDetail, 
    setSelectedProductForDetail,
    formatPrice,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setIsCheckoutOpen,
    addReview,
    user,
    setIsAuthModalOpen,
    setAuthPromptReason,
    showToast,
    express1ClickBuy
  } = useStore();

  if (!selectedProductForDetail) return null;

  const product = selectedProductForDetail;
  const isFavorited = isInWishlist(product.id);

  // Active gallery image
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Selected variants
  const colorVariants = product.variants?.filter(v => v.type === 'color') || [];
  const specVariants = product.variants?.filter(v => v.type === 'spec') || [];
  const lengthVariants = product.variants?.filter(v => v.type === 'length') || [];
  const storageVariants = product.variants?.filter(v => v.type === 'storage') || [];

  const [selectedColor, setSelectedColor] = useState<ProductVariant | undefined>(colorVariants[0]);
  const [selectedSpec, setSelectedSpec] = useState<ProductVariant | undefined>(specVariants[0]);
  const [selectedLength, setSelectedLength] = useState<ProductVariant | undefined>(lengthVariants[0]);
  const [selectedStorage, setSelectedStorage] = useState<ProductVariant | undefined>(storageVariants[0]);

  // Quantity
  const [quantity, setQuantity] = useState(1);

  // Tab state
  const [activeTab, setActiveTab] = useState<'features' | 'specs' | 'compatibility' | 'reviews'>('features');

  // Review Form state
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewName, setReviewName] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewComment, setReviewComment] = useState('');

  // Calculate unit price with variant deltas
  const priceDelta = (selectedColor?.priceDelta || 0) + 
                     (selectedSpec?.priceDelta || 0) + 
                     (selectedLength?.priceDelta || 0) + 
                     (selectedStorage?.priceDelta || 0);

  const finalUnitPrice = product.price + priceDelta;
  const originalFinalPrice = product.originalPrice ? product.originalPrice + priceDelta : undefined;

  const handleAddToCart = () => {
    addToCart(product, quantity, {
      color: selectedColor?.value,
      spec: selectedSpec?.value,
      length: selectedLength?.value,
      storage: selectedStorage?.value,
      priceDelta
    });
  };

  const handleBuyNow = () => {
    setSelectedProductForDetail(null);
    express1ClickBuy(product, {
      color: selectedColor?.value,
      spec: selectedSpec?.value,
      length: selectedLength?.value,
      storage: selectedStorage?.value,
      priceDelta
    });
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName.trim() || !reviewComment.trim()) return;

    addReview(product.id, {
      userName: reviewName.trim(),
      rating: reviewRating,
      title: reviewTitle.trim() || 'Verified Customer Review',
      comment: reviewComment.trim(),
      verified: true
    });

    // Reset form
    setReviewName('');
    setReviewTitle('');
    setReviewComment('');
    setShowReviewForm(false);
  };

  // Calculate rating breakdown distribution
  const ratingCounts = [5, 4, 3, 2, 1].map(stars => {
    const count = product.reviews.filter(r => r.rating === stars).length;
    const percentage = product.reviews.length > 0 ? (count / product.reviews.length) * 100 : 0;
    return { stars, count, percentage };
  });

  return (
    <div className="modal-backdrop" onClick={() => setSelectedProductForDetail(null)}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '2rem' }}
      >
        {/* Close Button */}
        <button 
          onClick={() => setSelectedProductForDetail(null)}
          className="btn-icon"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            zIndex: 20
          }}
          title="Close Modal"
        >
          <X size={20} />
        </button>

        {/* Modal Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem'
        }}>
          {/* Gallery Column */}
          <div>
            <div style={{
              height: '380px',
              background: '#0b1120',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              position: 'relative',
              marginBottom: '1rem',
              border: '1px solid var(--border-subtle)'
            }}>
              <img 
                src={product.images[activeImageIndex] || product.images[0]} 
                alt={product.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              {product.badge && (
                <span className="badge badge-cyan" style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail Selectors */}
            {product.images.length > 1 && (
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: activeImageIndex === idx ? '2px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                      boxShadow: activeImageIndex === idx ? 'var(--glow-cyan)' : 'none',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <img src={img} alt="thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details & Selectors Column */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {product.brand}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--accent-amber)' }}>
                <Star size={15} fill="currentColor" />
                <strong style={{ color: 'var(--text-primary)' }}>{product.rating}</strong>
                <span style={{ color: 'var(--text-muted)' }}>({product.reviewCount} customer reviews)</span>
              </div>
            </div>

            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: 1.2 }}>
              {product.title}
            </h2>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
              {product.subtitle}
            </p>

            {/* Price Row */}
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.75rem',
              padding: '1rem',
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '1.5rem'
            }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                {formatPrice(finalUnitPrice)}
              </span>
              {originalFinalPrice && (
                <span style={{ fontSize: '1rem', color: 'var(--text-muted)', textDecoration: 'line-through', fontFamily: 'var(--font-mono)' }}>
                  {formatPrice(originalFinalPrice)}
                </span>
              )}
              {originalFinalPrice && (
                <span style={{
                  marginLeft: 'auto',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: 'var(--accent-emerald)',
                  background: 'rgba(16, 185, 129, 0.15)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: 'var(--radius-full)'
                }}>
                  Save {formatPrice(originalFinalPrice - finalUnitPrice)}
                </span>
              )}
            </div>

            {/* Color Swatch Selector */}
            {colorVariants.length > 0 && (
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  Colorway: <strong style={{ color: 'var(--text-primary)' }}>{selectedColor?.value}</strong>
                </div>
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  {colorVariants.map(variant => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedColor(variant)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.35rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--bg-elevated)',
                        border: selectedColor?.id === variant.id ? '2px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                        color: selectedColor?.id === variant.id ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                        fontSize: '0.8rem',
                        fontWeight: 600
                      }}
                    >
                      {variant.colorCode && (
                        <span style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          background: variant.colorCode,
                          border: '1px solid rgba(255,255,255,0.2)'
                        }} />
                      )}
                      <span>{variant.value}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Spec / Wattage Selector */}
            {specVariants.length > 0 && (
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  Power / Option: <strong style={{ color: 'var(--text-primary)' }}>{selectedSpec?.value}</strong>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {specVariants.map(variant => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedSpec(variant)}
                      style={{
                        padding: '0.45rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        background: selectedSpec?.id === variant.id ? 'rgba(0, 242, 254, 0.12)' : 'var(--bg-elevated)',
                        border: selectedSpec?.id === variant.id ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                        color: selectedSpec?.id === variant.id ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                        fontSize: '0.82rem',
                        fontWeight: 600
                      }}
                    >
                      {variant.value} {variant.priceDelta ? `(${variant.priceDelta > 0 ? '+' : ''}${formatPrice(variant.priceDelta)})` : ''}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Cable Length Selector */}
            {lengthVariants.length > 0 && (
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  Length: <strong style={{ color: 'var(--text-primary)' }}>{selectedLength?.value}</strong>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {lengthVariants.map(variant => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedLength(variant)}
                      style={{
                        padding: '0.45rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        background: selectedLength?.id === variant.id ? 'rgba(0, 242, 254, 0.12)' : 'var(--bg-elevated)',
                        border: selectedLength?.id === variant.id ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                        color: selectedLength?.id === variant.id ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                        fontSize: '0.82rem',
                        fontWeight: 600
                      }}
                    >
                      {variant.value} {variant.priceDelta ? `(+${formatPrice(variant.priceDelta)})` : ''}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Storage Selector */}
            {storageVariants.length > 0 && (
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  Capacity & RAM: <strong style={{ color: 'var(--text-primary)' }}>{selectedStorage?.value}</strong>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {storageVariants.map(variant => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedStorage(variant)}
                      style={{
                        padding: '0.45rem 0.85rem',
                        borderRadius: 'var(--radius-md)',
                        background: selectedStorage?.id === variant.id ? 'rgba(0, 242, 254, 0.12)' : 'var(--bg-elevated)',
                        border: selectedStorage?.id === variant.id ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                        color: selectedStorage?.id === variant.id ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                        fontSize: '0.82rem',
                        fontWeight: 600
                      }}
                    >
                      {variant.value} {variant.priceDelta ? `(+${formatPrice(variant.priceDelta)})` : ''}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Delivery Guarantee Notice (Order will be delivered within 15 to 25 working days) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(0, 242, 254, 0.08)',
              border: '1px solid rgba(0, 242, 254, 0.25)',
              borderRadius: 'var(--radius-md)',
              padding: '0.65rem 0.85rem',
              marginBottom: '1.25rem',
              fontSize: '0.82rem'
            }}>
              <Truck size={17} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ color: 'var(--accent-cyan)', display: 'block' }}>Order will be delivered within 15 to 25 working days</strong>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Insured international express courier with real-time GPS tracking</span>
              </div>
            </div>

            {/* Quantity Stepper & Add to Cart Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto', marginBottom: '1rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                background: 'var(--bg-elevated)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                padding: '0.2rem'
              }}>
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Minus size={15} />
                </button>
                <span style={{ width: '40px', textAlign: 'center', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Plus size={15} />
                </button>
              </div>

              <button 
                onClick={handleAddToCart}
                className="btn btn-primary"
                style={{ flex: 1, padding: '0.85rem', fontSize: '0.95rem' }}
              >
                <ShoppingBag size={18} />
                <span>Add to Cart ({formatPrice(finalUnitPrice * quantity)})</span>
              </button>

              <button 
                onClick={() => toggleWishlist(product)}
                className="btn-icon"
                style={{ width: '48px', height: '48px' }}
                title="Save to Wishlist"
              >
                <Heart size={20} color={isFavorited ? 'var(--accent-rose)' : 'inherit'} fill={isFavorited ? 'var(--accent-rose)' : 'none'} />
              </button>
            </div>

            {/* Direct Buy Now Button */}
            <button 
              onClick={handleBuyNow}
              className="btn btn-secondary"
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '0.9rem',
                borderColor: 'var(--accent-cyan)',
                color: 'var(--accent-cyan)'
              }}
            >
              <Zap size={16} />
              <span>Instant Buy Now & Checkout</span>
            </button>
          </div>
        </div>

        {/* Tabbed Navigation */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '1.5rem'
        }}>
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '0.75rem',
            marginBottom: '1.5rem',
            overflowX: 'auto'
          }}>
            <button
              onClick={() => setActiveTab('features')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.88rem',
                fontWeight: activeTab === 'features' ? 700 : 500,
                background: activeTab === 'features' ? 'var(--bg-elevated)' : 'transparent',
                color: activeTab === 'features' ? 'var(--accent-cyan)' : 'var(--text-secondary)'
              }}
            >
              <Sparkles size={16} />
              <span>Features & Highlights</span>
            </button>

            <button
              onClick={() => setActiveTab('specs')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.88rem',
                fontWeight: activeTab === 'specs' ? 700 : 500,
                background: activeTab === 'specs' ? 'var(--bg-elevated)' : 'transparent',
                color: activeTab === 'specs' ? 'var(--accent-cyan)' : 'var(--text-secondary)'
              }}
            >
              <Cpu size={16} />
              <span>Technical Specs</span>
            </button>

            <button
              onClick={() => setActiveTab('compatibility')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.88rem',
                fontWeight: activeTab === 'compatibility' ? 700 : 500,
                background: activeTab === 'compatibility' ? 'var(--bg-elevated)' : 'transparent',
                color: activeTab === 'compatibility' ? 'var(--accent-cyan)' : 'var(--text-secondary)'
              }}
            >
              <Layers size={16} />
              <span>Compatibility</span>
            </button>

            <button
              onClick={() => setActiveTab('reviews')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.88rem',
                fontWeight: activeTab === 'reviews' ? 700 : 500,
                background: activeTab === 'reviews' ? 'var(--bg-elevated)' : 'transparent',
                color: activeTab === 'reviews' ? 'var(--accent-cyan)' : 'var(--text-secondary)'
              }}
            >
              <MessageSquare size={16} />
              <span>Customer Reviews ({product.reviewCount})</span>
            </button>
          </div>

          {/* Tab 1: Key Features */}
          {activeTab === 'features' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {product.keyFeatures.map((feat, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  background: 'var(--bg-elevated)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'rgba(0, 242, 254, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <Check size={14} />
                  </div>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.4 }}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Full Tech Specs */}
          {activeTab === 'specs' && (
            <div style={{
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--border-subtle)'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                <tbody>
                  {Object.entries(product.specs).map(([specKey, specVal], idx) => (
                    <tr key={specKey} style={{
                      borderBottom: '1px solid var(--border-subtle)',
                      background: idx % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.1)'
                    }}>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: 700, color: 'var(--text-muted)', width: '35%' }}>
                        {specKey}
                      </td>
                      <td style={{ padding: '0.85rem 1.25rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                        {specVal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Tab 3: Compatibility */}
          {activeTab === 'compatibility' && (
            <div style={{
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              border: '1px solid var(--border-subtle)'
            }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Officially tested and verified with the following device standards & protocols:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {product.compatibility.map((comp, idx) => (
                  <span key={idx} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.4rem 0.8rem',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.82rem',
                    color: 'var(--text-primary)',
                    fontWeight: 600
                  }}>
                    <Smartphone size={14} color="var(--accent-cyan)" />
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Customer Reviews Engine & Submission Form */}
          {activeTab === 'reviews' && (
            <div>
              {/* Score Breakdown & CTA */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.5rem',
                background: 'var(--bg-elevated)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                border: '1px solid var(--border-subtle)',
                marginBottom: '1.5rem'
              }}>
                {/* Left: Overall Score */}
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', lineHeight: 1 }}>
                    {product.rating}
                  </div>
                  <div style={{ display: 'flex', gap: '2px', color: 'var(--accent-amber)', margin: '0.4rem 0' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                    ))}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Based on {product.reviewCount} verified reviews
                  </div>
                </div>

                {/* Center: Rating Distribution Bars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', justifyContent: 'center' }}>
                  {ratingCounts.map(item => (
                    <div key={item.stars} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.78rem' }}>
                      <span style={{ width: '30px', color: 'var(--text-muted)' }}>{item.stars} ★</span>
                      <div style={{ flex: 1, height: '6px', background: 'var(--bg-surface)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                        <div style={{ width: `${item.percentage}%`, height: '100%', background: 'var(--accent-amber)' }} />
                      </div>
                      <span style={{ width: '25px', textAlign: 'right', color: 'var(--text-muted)' }}>{item.count}</span>
                    </div>
                  ))}
                </div>

                {/* Right: Write Review Trigger */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <button 
                    onClick={() => setShowReviewForm(!showReviewForm)}
                    className="btn btn-secondary"
                    style={{ gap: '0.5rem', width: '100%' }}
                  >
                    <MessageSquare size={16} />
                    <span>{showReviewForm ? 'Cancel Review' : 'Write a Review'}</span>
                  </button>
                </div>
              </div>

              {/* Interactive Write Review Form */}
              {showReviewForm && (
                <form 
                  onSubmit={handleSubmitReview}
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--accent-cyan)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                    Share Your Experience
                  </h4>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                        Your Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Jordan Miller"
                        value={reviewName}
                        onChange={(e) => setReviewName(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '0.6rem',
                          borderRadius: 'var(--radius-sm)',
                          background: 'var(--bg-elevated)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-primary)'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                        Star Rating
                      </label>
                      <div style={{ display: 'flex', gap: '0.4rem', paddingTop: '0.4rem' }}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setReviewRating(star)}
                            style={{ color: star <= reviewRating ? 'var(--accent-amber)' : 'var(--text-muted)' }}
                          >
                            <Star size={22} fill={star <= reviewRating ? 'currentColor' : 'none'} />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                      Review Headline
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. Blazing fast charging speeds!"
                      value={reviewTitle}
                      onChange={(e) => setReviewTitle(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.6rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                      Review Comments *
                    </label>
                    <textarea 
                      rows={3}
                      required
                      placeholder="Tell us about the build quality, speeds, or compatibility..."
                      value={reviewComment}
                      onChange={(e) => setReviewComment(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.6rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-primary)',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit Verified Review
                  </button>
                </form>
              )}

              {/* Reviews List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {product.reviews.map(rev => (
                  <div key={rev.id} style={{
                    background: 'var(--bg-elevated)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: 'var(--bg-surface)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          color: 'var(--accent-cyan)'
                        }}>
                          {rev.userName[0]}
                        </div>
                        <div>
                          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                            {rev.userName}
                          </div>
                          {rev.verified && (
                            <span style={{ fontSize: '0.72rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                              ✓ Verified Buyer
                            </span>
                          )}
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ display: 'flex', color: 'var(--accent-amber)' }}>
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill={i < rev.rating ? 'currentColor' : 'none'} />
                          ))}
                        </div>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{rev.date}</span>
                      </div>
                    </div>

                    <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      {rev.title}
                    </h5>

                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {rev.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
