import React from 'react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from './ProductCard';
import { SearchX, RotateCcw } from 'lucide-react';

export const ProductGrid: React.FC = () => {
  const { 
    filteredProducts, 
    viewMode,
    searchQuery,
    setSearchQuery,
    setSelectedCategory,
    setPriceRange,
    setMinRating,
    setInStockOnly,
    setOnSaleOnly
  } = useStore();

  const resetAll = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setPriceRange([0, 2000]);
    setMinRating(0);
    setInStockOnly(false);
    setOnSaleOnly(false);
  };

  if (filteredProducts.length === 0) {
    return (
      <div className="glass-panel" style={{
        borderRadius: 'var(--radius-xl)',
        padding: '4rem 2rem',
        textAlign: 'center',
        margin: '2rem 0'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'var(--bg-elevated)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          color: 'var(--text-muted)'
        }}>
          <SearchX size={32} />
        </div>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          No Matching Gadgets Found
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '440px', margin: '0 auto 1.5rem' }}>
          {searchQuery 
            ? `We couldn't find any products matching "${searchQuery}". Try checking for typos or resetting active filters.`
            : 'No tech products match your active filter criteria. Try adjusting the price slider or rating.'}
        </p>
        <button 
          onClick={resetAll}
          className="btn btn-secondary"
          style={{ gap: '0.5rem' }}
        >
          <RotateCcw size={16} />
          <span>Clear All Filters</span>
        </button>
      </div>
    );
  }

  if (viewMode === 'list') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} layout="list" />
        ))}
      </div>
    );
  }

  const gridColumns = viewMode === 'grid3' 
    ? 'repeat(auto-fill, minmax(320px, 1fr))' 
    : 'repeat(auto-fill, minmax(260px, 1fr))';

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: gridColumns,
      gap: '1.5rem'
    }}>
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} layout="grid" />
      ))}
    </div>
  );
};
