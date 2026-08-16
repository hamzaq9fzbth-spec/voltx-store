import React, { useState, useMemo } from 'react';
import { X, Search, Globe, Check, Sparkles } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { CURRENCIES } from '../data/products';
import { Currency } from '../types';

export const CurrencyModal: React.FC = () => {
  const { 
    isCurrencyModalOpen, 
    setIsCurrencyModalOpen, 
    activeCurrency, 
    setCurrencyCode 
  } = useStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const regions = ['All', 'Americas', 'Europe', 'Asia Pacific', 'Middle East', 'Africa'];

  const allCurrencies = useMemo(() => Object.values(CURRENCIES), []);

  const filteredCurrencies = useMemo(() => {
    return allCurrencies.filter((c: Currency) => {
      const matchesSearch = 
        c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.region.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRegion = selectedRegion === 'All' || c.region === selectedRegion;

      return matchesSearch && matchesRegion;
    });
  }, [allCurrencies, searchQuery, selectedRegion]);

  if (!isCurrencyModalOpen) return null;

  return (
    <div className="modal-backdrop" onClick={() => setIsCurrencyModalOpen(false)}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ 
          maxWidth: '780px', 
          width: '95%',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.75rem',
          borderRadius: 'var(--radius-xl)'
        }}
      >
        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(0, 242, 254, 0.12)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-cyan)'
            }}>
              <Globe size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                Select Global Currency
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                Real-time automatic price conversion across 35+ global currencies
              </p>
            </div>
          </div>

          <button 
            onClick={() => setIsCurrencyModalOpen(false)}
            className="btn-icon"
            aria-label="Close currency selector"
          >
            <X size={18} />
          </button>
        </div>

        {/* Live Search Input */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-md)',
          padding: '0.6rem 0.9rem',
          marginBottom: '1rem',
          gap: '0.6rem'
        }}>
          <Search size={17} color="var(--accent-cyan)" />
          <input 
            type="text" 
            placeholder="Search by currency code, country, or symbol (e.g. EUR, Yen, AED, ₹, Real, CA$)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
            style={{
              background: 'transparent',
              border: 'none',
              width: '100%',
              color: 'var(--text-primary)',
              fontSize: '0.88rem'
            }}
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600 }}
            >
              Clear
            </button>
          )}
        </div>

        {/* Region Filter Chips */}
        <div style={{
          display: 'flex',
          gap: '0.4rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem',
          marginBottom: '1rem'
        }}>
          {regions.map((region) => {
            const isSelected = selectedRegion === region;
            return (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                style={{
                  padding: '0.35rem 0.8rem',
                  fontSize: '0.78rem',
                  fontWeight: isSelected ? 700 : 500,
                  borderRadius: 'var(--radius-full)',
                  background: isSelected ? 'var(--accent-cyan)' : 'var(--bg-elevated)',
                  color: isSelected ? '#090d16' : 'var(--text-secondary)',
                  border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {region} {region === 'All' ? `(${allCurrencies.length})` : ''}
              </button>
            );
          })}
        </div>

        {/* Currencies Grid Container (Scrollable) */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          paddingRight: '4px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
          gap: '0.65rem',
          maxHeight: '440px'
        }}>
          {filteredCurrencies.map((c: Currency) => {
            const isSelected = c.code === activeCurrency.code;
            return (
              <div
                key={c.code}
                onClick={() => {
                  setCurrencyCode(c.code);
                  setIsCurrencyModalOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 0.9rem',
                  borderRadius: 'var(--radius-md)',
                  background: isSelected ? 'rgba(0, 242, 254, 0.12)' : 'var(--bg-elevated)',
                  border: isSelected ? '1.5px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  boxShadow: isSelected ? 'var(--glow-cyan)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{c.flag}</span>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <span style={{ 
                        fontWeight: 800, 
                        fontSize: '0.92rem', 
                        fontFamily: 'var(--font-mono)',
                        color: isSelected ? 'var(--accent-cyan)' : 'var(--text-primary)' 
                      }}>
                        {c.code}
                      </span>
                      <span style={{ 
                        fontSize: '0.78rem', 
                        fontWeight: 700, 
                        color: 'var(--accent-cyan)',
                        fontFamily: 'var(--font-mono)' 
                      }}>
                        ({c.symbol})
                      </span>
                    </div>
                    <div style={{ 
                      fontSize: '0.74rem', 
                      color: 'var(--text-muted)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: '120px'
                    }}>
                      {c.name}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px' }}>
                  {isSelected ? (
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'var(--accent-cyan)',
                      color: '#090d16',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Check size={13} strokeWidth={3} />
                    </div>
                  ) : (
                    <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      1$ = {c.rate >= 100 ? Math.round(c.rate) : c.rate.toFixed(2)}
                    </span>
                  )}
                  <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>
                    {c.region}
                  </span>
                </div>
              </div>
            );
          })}

          {filteredCurrencies.length === 0 && (
            <div style={{ 
              gridColumn: '1 / -1', 
              textAlign: 'center', 
              padding: '3rem 1rem', 
              color: 'var(--text-secondary)' 
            }}>
              <Globe size={32} color="var(--text-muted)" style={{ margin: '0 auto 0.75rem' }} />
              <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>No currencies matching "{searchQuery}"</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                Try searching for another country or region code.
              </p>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div style={{
          marginTop: '1.25rem',
          paddingTop: '0.75rem',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.75rem',
          color: 'var(--text-muted)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Sparkles size={14} color="var(--accent-cyan)" />
            <span>Currently Active: <strong>{activeCurrency.flag} {activeCurrency.code} ({activeCurrency.name})</strong></span>
          </div>
          <div>
            1 USD = {activeCurrency.rate} {activeCurrency.code}
          </div>
        </div>
      </div>
    </div>
  );
};
