import React from 'react';
import { ShoppingBag, Heart, Package, User, Sparkles } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const MobileNav: React.FC = () => {
  const { 
    cartCount, 
    wishlist, 
    orders,
    user,
    setIsCartOpen, 
    setIsWishlistOpen, 
    setIsMyOrdersOpen,
    setIsAuthModalOpen,
    setIsProfileModalOpen,
    setSelectedCategory
  } = useStore();

  return (
    <div className="glass-panel" style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 890,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: '0.6rem 0.5rem',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--bg-glass)'
    }}>
      {/* Shop Tab */}
      <button 
        onClick={() => {
          setSelectedCategory('all');
          const target = document.getElementById('product-catalog');
          target?.scrollIntoView({ behavior: 'smooth' });
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          fontSize: '0.68rem',
          fontWeight: 700,
          color: 'var(--text-secondary)'
        }}
      >
        <Sparkles size={18} color="var(--accent-cyan)" />
        <span>Catalog</span>
      </button>

      {/* Wishlist Tab */}
      <button 
        onClick={() => setIsWishlistOpen(true)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          fontSize: '0.68rem',
          fontWeight: 700,
          color: 'var(--text-secondary)',
          position: 'relative'
        }}
      >
        <Heart size={18} color={wishlist.length > 0 ? 'var(--accent-rose)' : 'inherit'} fill={wishlist.length > 0 ? 'var(--accent-rose)' : 'none'} />
        <span>Wishlist</span>
        {wishlist.length > 0 && (
          <span style={{
            position: 'absolute',
            top: '-3px',
            right: '8px',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: 'var(--accent-rose)',
            color: '#fff',
            fontSize: '0.6rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {wishlist.length}
          </span>
        )}
      </button>

      {/* Cart Center Tab */}
      <button 
        onClick={() => setIsCartOpen(true)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          fontSize: '0.68rem',
          fontWeight: 700,
          color: 'var(--accent-cyan)',
          position: 'relative'
        }}
      >
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'var(--gradient-tech)',
          color: '#090d16',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '-18px',
          boxShadow: 'var(--glow-cyan)'
        }}>
          <ShoppingBag size={20} />
        </div>
        <span>Cart ({cartCount})</span>
      </button>

      {/* Orders Tab */}
      <button 
        onClick={() => setIsMyOrdersOpen(true)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          fontSize: '0.68rem',
          fontWeight: 700,
          color: 'var(--text-secondary)',
          position: 'relative'
        }}
      >
        <Package size={18} />
        <span>Orders</span>
        {orders.length > 0 && (
          <span style={{
            position: 'absolute',
            top: '-3px',
            right: '8px',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: 'var(--accent-cyan)',
            color: '#090d16',
            fontSize: '0.6rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {orders.length}
          </span>
        )}
      </button>

      {/* Account / Login Tab */}
      <button 
        onClick={() => user ? setIsProfileModalOpen(true) : setIsAuthModalOpen(true)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          fontSize: '0.68rem',
          fontWeight: 700,
          color: user ? 'var(--accent-cyan)' : 'var(--text-secondary)'
        }}
      >
        <User size={18} />
        <span>{user ? 'Profile' : 'Sign In'}</span>
      </button>
    </div>
  );
};
