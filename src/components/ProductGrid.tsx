import React, { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from './ProductCard';
import { 
  SearchX, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight 
} from 'lucide-react';

const ITEMS_PER_PAGE_DEFAULT = 10;

export const ProductGrid: React.FC = () => {
  const { 
    filteredProducts, 
    viewMode,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
    setPriceRange,
    setMinRating,
    setInStockOnly,
    setOnSaleOnly,
    sortBy
  } = useStore();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE_DEFAULT);

  // Reset to page 1 whenever any filter, brand, category, or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedBrand, searchQuery, sortBy]);

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  // Ensure valid current page
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const resetAll = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedBrand('all');
    setPriceRange([0, 2000]);
    setMinRating(0);
    setInStockOnly(false);
    setOnSaleOnly(false);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    const catalogElement = document.getElementById('product-catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
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

  // Page Numbers Array Builder
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  const gridColumns = viewMode === 'grid3' 
    ? 'repeat(auto-fill, minmax(320px, 1fr))' 
    : 'repeat(auto-fill, minmax(260px, 1fr))';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Top Page Status Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem',
        padding: '0.5rem 0.25rem',
        fontSize: '0.85rem',
        color: 'var(--text-muted)'
      }}>
        <div>
          Showing <strong style={{ color: 'var(--accent-cyan)' }}>{startIndex + 1}–{endIndex}</strong> of <strong style={{ color: 'var(--text-primary)' }}>{totalItems}</strong> items 
          <span style={{ marginLeft: '0.4rem', color: 'var(--text-muted)' }}>(Page {currentPage} of {totalPages})</span>
        </div>

        {/* Per page selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.8rem' }}>Items per page:</span>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              padding: '0.25rem 0.5rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <option value={10}>10 items (Top 10)</option>
            <option value={20}>20 items</option>
            <option value={50}>50 items</option>
            <option value={250}>All items</option>
          </select>
        </div>
      </div>

      {/* Grid or List of Current Page Items (Top 20) */}
      {viewMode === 'list' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {currentProducts.map(product => (
            <ProductCard key={product.id} product={product} layout="list" />
          ))}
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: gridColumns,
          gap: '1.5rem'
        }}>
          {currentProducts.map(product => (
            <ProductCard key={product.id} product={product} layout="grid" />
          ))}
        </div>
      )}

      {/* Bottom Pagination Controls */}
      {totalPages > 1 && (
        <div className="glass-panel" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          padding: '1.25rem',
          borderRadius: 'var(--radius-xl)',
          marginTop: '1rem',
          border: '1px solid var(--border-highlight)'
        }}>
          {/* First Page */}
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)',
              color: currentPage === 1 ? 'var(--text-muted)' : 'var(--text-primary)',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              opacity: currentPage === 1 ? 0.4 : 1,
              transition: 'all var(--transition-fast)'
            }}
            title="First Page"
          >
            <ChevronsLeft size={16} />
          </button>

          {/* Previous Page */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              padding: '0 0.85rem',
              height: '38px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)',
              color: currentPage === 1 ? 'var(--text-muted)' : 'var(--text-primary)',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              opacity: currentPage === 1 ? 0.4 : 1,
              fontSize: '0.85rem',
              fontWeight: 600,
              transition: 'all var(--transition-fast)'
            }}
          >
            <ChevronLeft size={16} />
            <span>Prev</span>
          </button>

          {/* Page Number Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            {getPageNumbers().map((page, idx) => {
              if (page === '...') {
                return (
                  <span key={`ellipsis_${idx}`} style={{ padding: '0 0.4rem', color: 'var(--text-muted)' }}>
                    ...
                  </span>
                );
              }

              const isCurrent = currentPage === page;
              return (
                <button
                  key={`page_${page}`}
                  onClick={() => handlePageChange(Number(page))}
                  style={{
                    minWidth: '38px',
                    height: '38px',
                    padding: '0 0.5rem',
                    borderRadius: 'var(--radius-md)',
                    background: isCurrent ? 'var(--accent-cyan)' : 'var(--bg-elevated)',
                    color: isCurrent ? '#090d16' : 'var(--text-primary)',
                    border: isCurrent ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                    fontSize: '0.85rem',
                    fontWeight: isCurrent ? 800 : 600,
                    cursor: 'pointer',
                    boxShadow: isCurrent ? 'var(--glow-cyan)' : 'none',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {page}
                </button>
              );
            })}
          </div>

          {/* Next Page */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              padding: '0 0.85rem',
              height: '38px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)',
              color: currentPage === totalPages ? 'var(--text-muted)' : 'var(--text-primary)',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              opacity: currentPage === totalPages ? 0.4 : 1,
              fontSize: '0.85rem',
              fontWeight: 600,
              transition: 'all var(--transition-fast)'
            }}
          >
            <span>Next</span>
            <ChevronRight size={16} />
          </button>

          {/* Last Page */}
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)',
              color: currentPage === totalPages ? 'var(--text-muted)' : 'var(--text-primary)',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              opacity: currentPage === totalPages ? 0.4 : 1,
              transition: 'all var(--transition-fast)'
            }}
            title="Last Page"
          >
            <ChevronsRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

