import React from 'react';
import { 
  Zap, 
  Shield, 
  Truck, 
  RotateCcw, 
  CheckCircle,
  Headphones, 
  Smartphone, 
  BatteryCharging, 
  Cable, 
  Watch, 
  Layers,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { Product, ProductCategory } from '../types';

const DEFAULT_HERO_IPHONE: Product = {
  id: 'apple-iphone-17-pro-max',
  title: 'Apple iPhone 17 Pro Max',
  subtitle: 'Aerospace Grade 5 Titanium with Apple A19 Pro Bionic, 48MP Quad-Prism Fusion Camera & 6.9" ProMotion OLED',
  brand: 'Apple',
  category: 'mobiles',
  price: 449.000 / 0.385,
  originalPrice: 499.000 / 0.385,
  rating: 5.0,
  reviewCount: 412,
  images: [
    'https://www.pngmart.com/files/24/Apple-iPhone-17-Pro-Max-PNG-File.png',
    'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800'
  ],
  badge: 'FLAGSHIP',
  stock: 28,
  featured: true,
  specs: {
    'Processor': 'Apple A19 Pro (3nm Ultra)',
    'Display': '6.9" Super Retina XDR ProMotion OLED (1-120Hz)',
    'Camera': '48MP Quad-Prism 5x Optical Telephoto + 48MP Ultra-Wide',
    'Chassis': 'Grade 5 Aerospace Titanium Frame',
    'Battery': 'Up to 33 hours video playback, Qi2 MagSafe'
  },
  keyFeatures: [
    'Next-Gen A19 Pro Bionic with Apple Intelligence',
    '6.9-inch Titanium Edge-to-Edge ProMotion Display',
    '48MP Quad-Prism Telephoto with 5x Optical Zoom',
    'All-Day Extreme Battery Life with USB-C 3.0 Speeds'
  ],
  compatibility: ['iOS 19', 'MagSafe', 'AirPods Pro', 'Apple Watch Ultra 2'],
  reviews: []
};

export const Hero: React.FC = () => {
  const { setSelectedCategory, setSelectedProductForDetail, products, formatPrice, addToCart } = useStore();

  const featuredProduct = products.find(p => 
    p.id === 'apple-iphone-17-pro-max' || 
    p.title.toLowerCase().includes('iphone 17 pro max') ||
    p.title.toLowerCase().includes('iphone 17')
  ) || DEFAULT_HERO_IPHONE;

  const categoryChips: { label: string; cat: ProductCategory; icon: React.ReactNode }[] = [
    { label: 'Smartphones & iPhones', cat: 'mobiles', icon: <Smartphone size={16} /> },
    { label: 'GaN Fast Chargers', cat: 'chargers', icon: <BatteryCharging size={16} /> },
    { label: 'Heavy Duty Cables', cat: 'cables', icon: <Cable size={16} /> },
    { label: 'Audio & AirPods', cat: 'audio', icon: <Headphones size={16} /> },
    { label: 'Smart Watches', cat: 'wearables', icon: <Watch size={16} /> },
    { label: 'Tech Accessories', cat: 'accessories', icon: <Layers size={16} /> }
  ];

  const trustBadges = [
    { icon: <Truck size={20} color="var(--accent-emerald)" />, title: '100% Free Express Shipping', desc: 'On all orders with zero minimum' },
    { icon: <Shield size={20} color="var(--accent-emerald)" />, title: 'Official Hardware Warranty', desc: '100% Genuine Guaranteed Coverage' },
    { icon: <CheckCircle size={20} color="var(--accent-amber)" />, title: 'Official Authenticity', desc: '100% genuine tested components' },
    { icon: <Zap size={20} color="var(--accent-cyan)" />, title: 'Fast Insured Courier', desc: 'Direct dispatch to your doorstep' }
  ];

  return (
    <section style={{
      position: 'relative',
      padding: '2.5rem 0 1.5rem',
      background: 'radial-gradient(ellipse at 50% -20%, rgba(0, 242, 254, 0.12) 0%, rgba(9, 13, 22, 0) 70%)',
      overflow: 'hidden'
    }}>
      <div className="container">
        {/* Main Hero Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          marginBottom: '3rem'
        }}>
          {/* Left Column: Headline & Value Prop */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className="badge badge-cyan">
                <Sparkles size={12} /> Apple Flagship Collection 2026
              </span>
              <span className="badge badge-amber">
                <Zap size={12} /> A19 Pro Silicon Architecture
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.3rem, 5vw, 3.6rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.08,
              marginBottom: '1.25rem',
              color: 'var(--text-primary)'
            }}>
              The Next Era of <br />
              <span style={{
                background: 'var(--gradient-tech)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Apple iPhone 17.
              </span>
            </h1>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '2rem',
              maxWidth: '520px'
            }}>
              Discover aerospace-grade titanium smartphones, genuine Apple Silicon hardware, ultra-fast GaN chargers, and high-fidelity acoustics.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
              <button 
                onClick={() => {
                  setSelectedCategory('mobiles');
                  const target = document.getElementById('product-catalog');
                  target?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-primary"
                style={{ padding: '0.85rem 1.6rem', fontSize: '1rem' }}
              >
                <span>Explore Apple & Mobiles</span>
                <ArrowRight size={18} />
              </button>

              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  const target = document.getElementById('product-catalog');
                  target?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-secondary"
                style={{ padding: '0.85rem 1.6rem', fontSize: '1rem' }}
              >
                <span>Browse All Products</span>
              </button>
            </div>

            {/* Quick Category Chips */}
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                Browse by Category:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {categoryChips.map(chip => (
                  <button
                    key={chip.cat}
                    onClick={() => {
                      setSelectedCategory(chip.cat);
                      const target = document.getElementById('product-catalog');
                      target?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.45rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      transition: 'all var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {chip.icon}
                    <span>{chip.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Featured Flagship Showcase Hero Card */}
          <div style={{ position: 'relative' }}>
            <div className="glass-panel" style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--border-highlight)',
              position: 'relative'
            }}>
              {/* Top Banner Tag */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                zIndex: 10,
                display: 'flex',
                gap: '0.5rem'
              }}>
                <span className="badge badge-cyan">Featured Flagship</span>
                <span className="badge badge-emerald">In Stock</span>
              </div>

              {/* Hero Image */}
              <div style={{
                position: 'relative',
                height: '320px',
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 242, 254, 0.15) 0%, #080d1a 100%)',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.25rem'
              }}>
                <img 
                  src={featuredProduct.images[0]} 
                  alt={featuredProduct.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 15px 25px rgba(0, 242, 254, 0.25))',
                    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  background: 'linear-gradient(to top, var(--bg-surface) 0%, transparent 40%)'
                }} />
              </div>

              {/* Product Info Box */}
              <div style={{ padding: '1.5rem', background: 'var(--bg-surface)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {featuredProduct.brand}
                    </span>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {featuredProduct.title}
                    </h3>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                      {formatPrice(featuredProduct.price)}
                    </div>
                    {featuredProduct.originalPrice && (
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'line-through', fontFamily: 'var(--font-mono)' }}>
                        {formatPrice(featuredProduct.originalPrice)}
                      </div>
                    )}
                  </div>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                  {featuredProduct.subtitle}
                </p>

                {/* Specs Pill List */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                    ⚡ Apple A19 Pro Silicon
                  </span>
                  <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                    📸 48MP Quad-Prism Fusion
                  </span>
                  <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                    🛡️ Grade 5 Titanium Frame
                  </span>
                </div>

                {/* Actions */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <button 
                    onClick={() => setSelectedProductForDetail(featuredProduct)}
                    className="btn btn-secondary"
                    style={{ width: '100%' }}
                  >
                    View Specs
                  </button>
                  <button 
                    onClick={() => addToCart(featuredProduct, 1)}
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Trust Highlights Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem',
          padding: '1.5rem',
          background: 'var(--bg-elevated)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--border-subtle)'
        }}>
          {trustBadges.map((badge, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-surface)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: '1px solid var(--border-subtle)'
              }}>
                {badge.icon}
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {badge.title}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {badge.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
