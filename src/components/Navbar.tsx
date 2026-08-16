import React, { useState } from 'react';
import { 
  Zap, 
  Search, 
  Heart, 
  ShoppingBag, 
  Sun, 
  Moon, 
  Package, 
  Globe, 
  X,
  ChevronDown,
  User,
  CreditCard
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { CURRENCIES } from '../data/products';
import { CurrencyCode } from '../types';

export const Navbar: React.FC = () => {
  const { 
    cartCount, 
    cartTotal,
    formatPrice,
    wishlist, 
    setIsCartOpen, 
    setIsWishlistOpen, 
    setIsMyOrdersOpen,
    theme, 
    toggleTheme, 
    activeCurrency, 
    setIsCurrencyModalOpen,
    searchQuery,
    setSearchQuery,
    setSelectedCategory,
    user,
    setIsAuthModalOpen,
    setIsProfileModalOpen,
    appMode,
    setAppMode
  } = useStore();

  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const quickSearchTags = ['140W GaN', '240W Cable', 'Titan Ultra', 'MagSafe', 'Thunderbolt'];

  return (
    <header className="glass-panel" style={{
      position: 'sticky',
      top: 0,
      zIndex: 900,
      transition: 'all var(--transition-smooth)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 'var(--header-height)',
        gap: '1.5rem'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => {
            setSelectedCategory('all');
            setSearchQuery('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            cursor: 'pointer',
            flexShrink: 0
          }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--gradient-tech)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--glow-cyan)'
          }}>
            <Zap size={22} color="#090d16" fill="#090d16" />
          </div>
          <div>
            <div style={{
              fontSize: '1.45rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              display: 'flex',
              alignItems: 'center',
              gap: '0.2rem'
            }}>
              <span>VOLT</span>
              <span style={{ color: 'var(--accent-cyan)' }}>X</span>
            </div>
            <div style={{
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase'
            }}>
              Tech & Gadgets
            </div>
          </div>
        </div>

        {/* Global Search Bar */}
        <div style={{
          flex: '1',
          maxWidth: '480px',
          position: 'relative'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'var(--bg-elevated)',
            border: isSearchFocused ? '1px solid var(--accent-cyan)' : '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-full)',
            padding: '0.45rem 1rem',
            boxShadow: isSearchFocused ? 'var(--glow-cyan)' : 'none',
            transition: 'all var(--transition-fast)'
          }}>
            <Search size={17} color={isSearchFocused ? 'var(--accent-cyan)' : 'var(--text-muted)'} style={{ marginRight: '0.6rem', flexShrink: 0 }} />
            <input 
              type="text" 
              placeholder="Search smartphones, 240W cables, GaN chargers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
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
                style={{
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '2px'
                }}
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Quick Search Suggestions Dropdown */}
          {isSearchFocused && !searchQuery && (
            <div className="glass-panel" style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              left: 0,
              right: 0,
              borderRadius: 'var(--radius-lg)',
              padding: '1rem',
              boxShadow: 'var(--shadow-lg)',
              zIndex: 1000
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Trending Searches:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {quickSearchTags.map(tag => (
                  <button 
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    style={{
                      fontSize: '0.78rem',
                      padding: '0.3rem 0.75rem',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-full)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Actions & Utilities */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem'
        }}>
          {/* Global Currency Switcher Trigger */}
          <button 
            onClick={() => setIsCurrencyModalOpen(true)}
            className="btn-secondary"
            style={{
              padding: '0.45rem 0.75rem',
              fontSize: '0.82rem',
              gap: '0.4rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}
            title="Browse All 35+ Global Currencies"
          >
            <span style={{ fontSize: '1rem', lineHeight: 1 }}>{activeCurrency.flag || '🌐'}</span>
            <span style={{ fontWeight: 700 }}>{activeCurrency.code}</span>
            <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
              ({activeCurrency.symbol})
            </span>
            <ChevronDown size={13} color="var(--text-muted)" />
          </button>

          {/* Theme Switcher */}
          <button 
            onClick={toggleTheme}
            className="btn-icon"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={17} color="var(--accent-amber)" /> : <Moon size={17} color="var(--accent-violet)" />}
          </button>

          {/* USER AUTH / PROFILE BUTTON WITH SAVED CARDS BADGE */}
          {user ? (
            <button
              onClick={() => setIsProfileModalOpen(true)}
              className="btn-secondary"
              style={{
                padding: '0.4rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: '1px solid var(--border-highlight)'
              }}
              title="Manage Account & Saved Cards"
            >
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'var(--gradient-tech)',
                color: '#090d16',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '0.75rem'
              }}>
                {user.fullName[0]}
              </div>
              <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>{user.fullName.split(' ')[0]}</span>
              {user.savedCards.length > 0 && (
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px',
                  fontSize: '0.68rem',
                  color: 'var(--accent-cyan)',
                  background: 'rgba(0, 242, 254, 0.15)',
                  padding: '0.1rem 0.4rem',
                  borderRadius: 'var(--radius-full)'
                }}>
                  <CreditCard size={11} /> {user.savedCards.length}
                </span>
              )}
            </button>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="btn btn-secondary"
              style={{
                padding: '0.45rem 0.85rem',
                fontSize: '0.82rem',
                gap: '0.4rem',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <User size={15} />
              <span>Sign In</span>
            </button>
          )}

          {/* Track Orders & History Button */}
          <button 
            onClick={() => setIsMyOrdersOpen(true)}
            className="btn-icon"
            title="My Orders & History"
            style={{ position: 'relative' }}
          >
            <Package size={17} />
          </button>

          {/* Wishlist Button */}
          <button 
            onClick={() => setIsWishlistOpen(true)}
            className="btn-icon"
            title="View Wishlist"
            style={{ position: 'relative' }}
          >
            <Heart size={17} color={wishlist.length > 0 ? 'var(--accent-rose)' : 'inherit'} fill={wishlist.length > 0 ? 'var(--accent-rose)' : 'none'} />
            {wishlist.length > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                background: 'var(--accent-rose)',
                color: '#fff',
                fontSize: '0.68rem',
                fontWeight: 700,
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 5px rgba(244, 63, 94, 0.5)'
              }}>
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart Drawer Trigger Button */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="btn-primary"
            style={{
              padding: '0.5rem 1.1rem',
              borderRadius: 'var(--radius-full)',
              gap: '0.5rem',
              position: 'relative'
            }}
          >
            <ShoppingBag size={17} />
            <span style={{ fontWeight: 700 }}>Cart</span>
            {cartCount > 0 && (
              <span style={{
                background: '#090d16',
                color: 'var(--accent-cyan)',
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '0.1rem 0.5rem',
                borderRadius: 'var(--radius-full)',
                marginLeft: '0.2rem'
              }}>
                {cartCount}
              </span>
            )}
            {cartTotal > 0 && (
              <span style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                borderLeft: '1px solid rgba(0,0,0,0.2)',
                paddingLeft: '0.5rem',
                marginLeft: '0.2rem'
              }}>
                {formatPrice(cartTotal)}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
