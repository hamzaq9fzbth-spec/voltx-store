import React from 'react';
import { 
  Smartphone, 
  BatteryCharging, 
  Cable, 
  Headphones, 
  Watch, 
  Layers, 
  Grid3X3, 
  Grid2X2, 
  List, 
  SlidersHorizontal,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCategory } from '../types';

export const CategoryFilterBar: React.FC = () => {
  const { 
    selectedCategory, 
    setSelectedCategory,
    priceRange,
    setPriceRange,
    minRating,
    setMinRating,
    inStockOnly,
    setInStockOnly,
    onSaleOnly,
    setOnSaleOnly,
    sortBy,
    setSortBy,
    viewMode,
    setViewMode,
    products,
    filteredProducts,
    formatPrice
  } = useStore();

  const categories: { id: ProductCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Gear', icon: <Sparkles size={16} /> },
    { id: 'mobiles', label: 'Smartphones', icon: <Smartphone size={16} /> },
    { id: 'chargers', label: 'GaN Chargers', icon: <BatteryCharging size={16} /> },
    { id: 'cables', label: 'Cables & Hubs', icon: <Cable size={16} /> },
    { id: 'audio', label: 'Audio & ANC', icon: <Headphones size={16} /> },
    { id: 'wearables', label: 'Wearables', icon: <Watch size={16} /> },
    { id: 'accessories', label: 'Accessories', icon: <Layers size={16} /> }
  ];

  const hasActiveFilters = selectedCategory !== 'all' || minRating > 0 || inStockOnly || onSaleOnly || priceRange[1] < 2000;

  const resetFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 2000]);
    setMinRating(0);
    setInStockOnly(false);
    setOnSaleOnly(false);
    setSortBy('featured');
  };

  return (
    <div id="product-catalog" style={{
      marginBottom: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem'
    }}>
      {/* Category Pills Slider */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        overflowX: 'auto',
        paddingBottom: '0.5rem',
        scrollbarWidth: 'none'
      }}>
        {categories.map(cat => {
          const isSelected = selectedCategory === cat.id;
          const count = cat.id === 'all' 
            ? products.length 
            : products.filter(p => p.category === cat.id).length;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: isSelected ? 700 : 500,
                background: isSelected ? 'var(--accent-cyan)' : 'var(--bg-elevated)',
                color: isSelected ? '#090d16' : 'var(--text-secondary)',
                border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                whiteSpace: 'nowrap',
                boxShadow: isSelected ? 'var(--glow-cyan)' : 'none',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat.icon}
              <span>{cat.label}</span>
              <span style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '0.1rem 0.45rem',
                borderRadius: 'var(--radius-full)',
                background: isSelected ? 'rgba(0,0,0,0.2)' : 'var(--bg-surface)',
                color: isSelected ? '#090d16' : 'var(--text-muted)'
              }}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Secondary Filter & Sort Control Bar */}
      <div className="glass-panel" style={{
        borderRadius: 'var(--radius-lg)',
        padding: '1rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {/* Left: Quick Filters & Sliders */}
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          {/* Price Range */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Max Price: <strong style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>{formatPrice(priceRange[1])}</strong>
            </span>
            <input 
              type="range"
              min={20}
              max={2000}
              step={20}
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              style={{
                accentColor: 'var(--accent-cyan)',
                cursor: 'pointer',
                width: '110px'
              }}
            />
          </div>

          {/* Rating Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <select
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                padding: '0.35rem 0.65rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.8rem',
                fontWeight: 600
              }}
            >
              <option value={0}>All Ratings</option>
              <option value={4.8}>★ 4.8 & Above</option>
              <option value={4.5}>★ 4.5 & Above</option>
              <option value={4.0}>★ 4.0 & Above</option>
            </select>
          </div>

          {/* Toggles */}
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)', cursor: 'pointer', userSelect: 'none' }}>
            <input 
              type="checkbox" 
              checked={inStockOnly} 
              onChange={(e) => setInStockOnly(e.target.checked)}
              style={{ accentColor: 'var(--accent-emerald)', cursor: 'pointer' }}
            />
            <span>In Stock Only</span>
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)', cursor: 'pointer', userSelect: 'none' }}>
            <input 
              type="checkbox" 
              checked={onSaleOnly} 
              onChange={(e) => setOnSaleOnly(e.target.checked)}
              style={{ accentColor: 'var(--accent-rose)', cursor: 'pointer' }}
            />
            <span>On Sale Deals</span>
          </label>

          {/* Reset Filters */}
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: 'var(--accent-rose)',
                padding: '0.25rem 0.6rem',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(244, 63, 94, 0.1)',
                border: '1px solid rgba(244, 63, 94, 0.2)'
              }}
            >
              <RotateCcw size={12} />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Right: Sort & Layout Mode Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Results count */}
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            Showing <strong style={{ color: 'var(--text-primary)' }}>{filteredProducts.length}</strong> items
          </span>

          {/* Sort Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <SlidersHorizontal size={14} color="var(--text-muted)" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                padding: '0.4rem 0.8rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.82rem',
                fontWeight: 600
              }}
            >
              <option value="featured">Featured Picks</option>
              <option value="bestselling">Best Selling</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Customer Rated</option>
              <option value="newest">Newest Releases</option>
            </select>
          </div>

          {/* Layout Mode Switcher */}
          <div style={{
            display: 'flex',
            background: 'var(--bg-elevated)',
            padding: '2px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)'
          }}>
            <button
              onClick={() => setViewMode('grid4')}
              style={{
                padding: '0.35rem 0.5rem',
                borderRadius: 'var(--radius-sm)',
                background: viewMode === 'grid4' ? 'var(--bg-surface)' : 'transparent',
                color: viewMode === 'grid4' ? 'var(--accent-cyan)' : 'var(--text-muted)'
              }}
              title="4-Column Grid"
            >
              <Grid3X3 size={16} />
            </button>
            <button
              onClick={() => setViewMode('grid3')}
              style={{
                padding: '0.35rem 0.5rem',
                borderRadius: 'var(--radius-sm)',
                background: viewMode === 'grid3' ? 'var(--bg-surface)' : 'transparent',
                color: viewMode === 'grid3' ? 'var(--accent-cyan)' : 'var(--text-muted)'
              }}
              title="3-Column Expanded Grid"
            >
              <Grid2X2 size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              style={{
                padding: '0.35rem 0.5rem',
                borderRadius: 'var(--radius-sm)',
                background: viewMode === 'list' ? 'var(--bg-surface)' : 'transparent',
                color: viewMode === 'list' ? 'var(--accent-cyan)' : 'var(--text-muted)'
              }}
              title="List View"
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
