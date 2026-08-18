import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryFilterBar } from './components/CategoryFilterBar';
import { ProductGrid } from './components/ProductGrid';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { MobileNav } from './components/MobileNav';

import { ProductDetailModal } from './components/ProductDetailModal';
import { DirectBuyModal } from './components/DirectBuyModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { OrderTrackingModal } from './components/OrderTrackingModal';
import { MyOrdersModal } from './components/MyOrdersModal';
import { AuthModal } from './components/AuthModal';
import { UserProfileModal } from './components/UserProfileModal';
import { CurrencyModal } from './components/CurrencyModal';
import { ToastContainer } from './components/ToastContainer';
import { AdminPortal } from './components/admin/AdminPortal';
import { AdminAuthModal } from './components/admin/AdminAuthModal';

const AppContent: React.FC = () => {
  const { appMode } = useStore();

  if (appMode === 'admin') {
    return (
      <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AdminPortal />
        <AdminAuthModal />
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Ticker & Countdown */}
      <AnnouncementBar />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Areas */}
      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <Hero />

        {/* Main Catalog & Filter Grid (Strictly 10 Products on First Screen) */}
        <section id="product-catalog" style={{ padding: '2rem 0 4rem' }}>
          <div className="container">
            <CategoryFilterBar />
            <ProductGrid />
          </div>
        </section>

        {/* Newsletter VIP Club */}
        <NewsletterSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Mobile Navigation Dock */}
      <MobileNav />

      {/* Global Modals & Drawers */}
      <ProductDetailModal />
      <DirectBuyModal />
      <CartDrawer />
      <WishlistDrawer />
      <CheckoutModal />
      <OrderConfirmationModal />
      <OrderTrackingModal />
      <MyOrdersModal />
      <AuthModal />
      <UserProfileModal />
      <CurrencyModal />
      <AdminAuthModal />
      <ToastContainer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
};

export default App;
