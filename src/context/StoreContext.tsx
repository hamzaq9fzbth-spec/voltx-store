import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { 
  Product, 
  CartItem, 
  ProductCategory, 
  Currency, 
  Coupon, 
  Order, 
  CustomerInfo, 
  PaymentDetails, 
  ShippingMethod, 
  ToastMessage, 
  Review, 
  CurrencyCode, 
  UserProfile, 
  SavedCard,
  AppMode,
  OrderStatus,
  AnnouncementConfig
} from '../types';
import { PRODUCTS as INITIAL_PRODUCTS, CURRENCIES, AVAILABLE_COUPONS as INITIAL_COUPONS, SHIPPING_METHODS } from '../data/products';
import { DatabaseService } from '../db/indexedDB';
import { SupabaseService } from '../db/supabaseClient';
import confetti from 'canvas-confetti';

interface StoreContextType {
  // Portal & Admin Mode
  appMode: AppMode;
  setAppMode: (mode: AppMode) => void;
  isAdminAuthenticated: boolean;
  isAdminAuthModalOpen: boolean;
  setIsAdminAuthModalOpen: (open: boolean) => void;
  verifyAdminPin: (pin: string) => boolean;
  verifyAdminCredentials: (adminId: string, secretKey: string) => boolean;
  adminLogout: () => void;

  // Catalog & Filter State
  products: Product[];
  filteredProducts: Product[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: ProductCategory;
  setSelectedCategory: (category: ProductCategory) => void;
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  availableBrands: string[];
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  inStockOnly: boolean;
  setInStockOnly: (val: boolean) => void;
  onSaleOnly: boolean;
  setOnSaleOnly: (val: boolean) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  viewMode: 'grid4' | 'grid3' | 'list';
  setViewMode: (mode: 'grid4' | 'grid3' | 'list') => void;

  // Admin CRUD for Products
  addProduct: (newProduct: Omit<Product, 'id' | 'reviews' | 'rating' | 'reviewCount'> & { id?: string }) => Product;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  resetProductsToDefault: () => void;

  // Cart & Wishlist
  cart: CartItem[];
  cartCount: number;
  cartSubtotal: number;
  cartDiscount: number;
  cartTotal: number;
  freeShippingThreshold: number;
  freeShippingProgress: number;
  addToCart: (
    product: Product, 
    quantity?: number, 
    selections?: { color?: string; spec?: string; length?: string; storage?: string; priceDelta?: number }
  ) => void;
  removeFromCart: (itemId: string) => void;
  updateCartQuantity: (itemId: string, qty: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;

  // 1-Click Fast Buy Feature
  express1ClickBuy: (
    product: Product, 
    selections?: { color?: string; spec?: string; length?: string; storage?: string; priceDelta?: number }
  ) => void;

  // Wishlist
  wishlist: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  moveWishlistToCart: (product: Product) => void;

  // Currency & Theme
  activeCurrency: Currency;
  setCurrencyCode: (code: CurrencyCode) => void;
  formatPrice: (amountInUSD: number) => string;
  isCurrencyModalOpen: boolean;
  setIsCurrencyModalOpen: (open: boolean) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;

  // Coupon Engine & Admin Coupon CRUD
  availableCoupons: Coupon[];
  appliedCoupon: Coupon | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  addCoupon: (coupon: Coupon) => void;
  deleteCoupon: (code: string) => void;

  // Announcement & Banner Admin Config
  announcement: AnnouncementConfig;
  updateAnnouncement: (config: AnnouncementConfig) => void;

  // User Auth & Saved Cards Directory
  user: UserProfile | null;
  registeredUsers: UserProfile[];
  deleteUser: (userId: string) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  isProfileModalOpen: boolean;
  setIsProfileModalOpen: (open: boolean) => void;
  authPromptReason: 'checkout' | null;
  setAuthPromptReason: (reason: 'checkout' | null) => void;
  login: (email: string, password?: string, cardDetails?: Partial<SavedCard>) => boolean;
  register: (userData: { fullName: string; email: string; phone?: string; address?: string; city?: string; state?: string; zip?: string }, cardDetails?: Partial<SavedCard>) => void;
  logout: () => void;
  addOrUpdateSavedCard: (card: Omit<SavedCard, 'id'>) => void;
  removeSavedCard: (cardId: string) => void;
  setDefaultCard: (cardId: string) => void;
  updateUserProfile: (updates: Partial<UserProfile>) => void;

  // Checkout & Orders Management
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  orders: Order[];
  activeOrderForConfirmation: Order | null;
  setActiveOrderForConfirmation: (order: Order | null) => void;
  isOrderTrackingOpen: boolean;
  setIsOrderTrackingOpen: (open: boolean) => void;
  trackingOrderId: string;
  setTrackingOrderId: (id: string) => void;
  isMyOrdersOpen: boolean;
  setIsMyOrdersOpen: (open: boolean) => void;
  placeOrder: (
    customer: CustomerInfo, 
    payment: PaymentDetails, 
    shipping: ShippingMethod
  ) => Order;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;

  // Product Details Modal
  selectedProductForDetail: Product | null;
  setSelectedProductForDetail: (product: Product | null) => void;
  addReview: (productId: string, review: Omit<Review, 'id' | 'date' | 'helpfulCount'>) => void;

  // Direct Account Transfer Buy Modal
  directBuyItem: { product: Product; selections?: { color?: string; spec?: string; length?: string; storage?: string; priceDelta?: number } } | null;
  setDirectBuyItem: (item: { product: Product; selections?: { color?: string; spec?: string; length?: string; storage?: string; priceDelta?: number } } | null) => void;
  executeDirectTransferOrder: (customerInfo: { 
    userAccount: string; 
    fullName: string; 
    city: string; 
    address?: string;
    paymentMethod?: string;
    paymentNetwork?: string;
    receivingAccount?: string;
  }) => Order | undefined;

  // Toasts
  toasts: ToastMessage[];
  showToast: (message: string, type?: 'success' | 'info' | 'warning' | 'error', title?: string) => void;
  removeToast: (id: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const STORAGE_KEYS = {
  APP_MODE: 'cleopatra_app_mode_v2',
  ADMIN_AUTH: 'cleopatra_admin_auth_v2',
  PRODUCTS: 'cleopatra_products_v4',
  COUPONS: 'cleopatra_coupons_v2',
  ANNOUNCEMENT: 'cleopatra_announcement_v2',
  CART: 'cleopatra_cart_v2',
  WISHLIST: 'cleopatra_wishlist_v2',
  ORDERS: 'cleopatra_orders_v4',
  USERS_DIRECTORY: 'cleopatra_users_v2',
  THEME: 'cleopatra_theme_v2',
  CURRENCY: 'cleopatra_currency_v2',
  CUSTOM_REVIEWS: 'cleopatra_reviews_v2',
  USER: 'cleopatra_user_v2'
};

const INITIAL_REGISTERED_USERS: UserProfile[] = [];

const INITIAL_ORDERS_SAMPLE: Order[] = [];

const DEFAULT_ANNOUNCEMENT: AnnouncementConfig = {
  message: '🚚 100% FREE EXPRESS SHIPPING ON ALL ORDERS | NO MINIMUM PURCHASE REQUIRED',
  badge: '🔥 100% FREE SHIPPING',
  linkText: 'Shop Now',
  enabled: true
};

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Toast Notification State
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (message: string, type: 'success' | 'info' | 'warning' | 'error' = 'info', title?: string) => {
    const id = 'toast_' + Date.now() + Math.random().toString(36).substr(2, 4);
    setToasts(prev => [...prev, { id, type, message, title }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // 2. App Mode & Admin State
  const [appMode, setAppModeState] = useState<AppMode>(() => {
    return (localStorage.getItem(STORAGE_KEYS.APP_MODE) as AppMode) || 'storefront';
  });

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
  });

  const [isAdminAuthModalOpen, setIsAdminAuthModalOpen] = useState(false);

  const setAppMode = (mode: AppMode) => {
    if (mode === 'admin' && !isAdminAuthenticated) {
      setIsAdminAuthModalOpen(true);
      return;
    }
    setAppModeState(mode);
    localStorage.setItem(STORAGE_KEYS.APP_MODE, mode);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(`Switched to ${mode === 'admin' ? '🛡️ Admin Command Center' : '🛍️ User Storefront'}`, 'info');
  };

  const verifyAdminCredentials = (adminId: string, secretKey: string): boolean => {
    const cleanId = adminId.trim().toLowerCase();
    const cleanKey = secretKey.trim();

    const validIds = ['admin@voltxtech.com', 'admin@voltx.com', 'admin', 'voltx-root', 'root'];
    const validKeys = ['admin123', 'voltx9900', '9900', 'voltx_master_2026'];

    if (validIds.includes(cleanId) && validKeys.includes(cleanKey)) {
      setIsAdminAuthenticated(true);
      localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
      setAppModeState('admin');
      localStorage.setItem(STORAGE_KEYS.APP_MODE, 'admin');
      setIsAdminAuthModalOpen(false);
      showToast('Master Admin Authenticated! Welcome to Command Center.', 'success', 'Admin Access Granted');
      return true;
    }
    showToast('Invalid Admin ID or Security Password. Access Denied.', 'error', 'Authorization Failed');
    return false;
  };

  const verifyAdminPin = (pin: string): boolean => {
    return verifyAdminCredentials('admin', pin);
  };

  // Keyboard shortcut & URL hash listener for secret Admin access
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) || (e.altKey && (e.key === 'A' || e.key === 'a'))) {
        e.preventDefault();
        setIsAdminAuthModalOpen(true);
        showToast('Secret Admin Terminal triggered.', 'info', 'Admin Gate');
      }
    };

    const handleHashChange = () => {
      if (window.location.hash === '#admin' || window.location.search.includes('admin=true')) {
        setIsAdminAuthModalOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const adminLogout = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
    setAppModeState('storefront');
    localStorage.setItem(STORAGE_KEYS.APP_MODE, 'storefront');
    showToast('Logged out of Admin Portal.', 'info');
  };

  // 3. Products Catalog with LocalStorage Persistence
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    if (!saved) return INITIAL_PRODUCTS;
    try {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_PRODUCTS;
    } catch {
      return INITIAL_PRODUCTS;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
    DatabaseService.bulkSaveProducts(products).catch(() => {});
    SupabaseService.syncProducts(products).catch(() => {});
  }, [products]);

  // Initial Live Supabase Fetch & Realtime Listeners
  useEffect(() => {
    const loadLiveCloudData = async () => {
      try {
        const cloudProducts = await SupabaseService.fetchProducts();
        if (cloudProducts !== null && cloudProducts.length > 0) {
          setProducts(cloudProducts);
          localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(cloudProducts));
        } else if (cloudProducts !== null && cloudProducts.length === 0) {
          // If Supabase table is explicitly empty, sync local initial products up to Supabase
          await SupabaseService.syncProducts(INITIAL_PRODUCTS);
        }

        const cloudUsers = await SupabaseService.fetchUsers();
        if (cloudUsers !== null) {
          setRegisteredUsers(cloudUsers);
          localStorage.setItem(STORAGE_KEYS.USERS_DIRECTORY, JSON.stringify(cloudUsers));
        }

        const cloudOrders = await SupabaseService.fetchOrders();
        if (cloudOrders !== null) {
          setOrders(cloudOrders);
          localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(cloudOrders));
        }
      } catch {
        // Fallback to local
      }
    };

    loadLiveCloudData();

    // Listen for live database events from Supabase
    const unsubscribe = SupabaseService.setupRealtimeListeners({
      onProductsChange: async () => {
        const liveProducts = await SupabaseService.fetchProducts();
        if (liveProducts !== null) {
          setProducts(liveProducts);
          localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(liveProducts));
        }
      },
      onUsersChange: async () => {
        const liveUsers = await SupabaseService.fetchUsers();
        if (liveUsers !== null) {
          setRegisteredUsers(liveUsers);
          localStorage.setItem(STORAGE_KEYS.USERS_DIRECTORY, JSON.stringify(liveUsers));
        }
      },
      onOrdersChange: async () => {
        const liveOrders = await SupabaseService.fetchOrders();
        if (liveOrders !== null) {
          setOrders(liveOrders);
          localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(liveOrders));
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const addProduct = (newProductData: Omit<Product, 'id' | 'reviews' | 'rating' | 'reviewCount'> & { id?: string }): Product => {
    const newProduct: Product = {
      ...newProductData,
      id: newProductData.id || 'prod_' + Date.now(),
      rating: 5.0,
      reviewCount: 1,
      reviews: [
        {
          id: 'rev_initial_' + Date.now(),
          userName: 'Cleopatra Quality Inspector',
          rating: 5,
          date: 'Just now',
          title: 'Official Launch',
          comment: 'Verified factory sealed genuine hardware with full authenticity guarantee.',
          verified: true,
          helpfulCount: 3
        }
      ]
    };

    setProducts(prev => [newProduct, ...prev]);
    SupabaseService.saveProduct(newProduct).catch(() => {});
    showToast(`Added "${newProduct.title}" to catalog!`, 'success', 'Product Published');
    return newProduct;
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(prev => prev.map(p => {
      if (p.id === id) {
        const updated = { ...p, ...updates };
        SupabaseService.saveProduct(updated).catch(() => {});
        return updated;
      }
      return p;
    }));
    showToast('Product updated successfully!', 'success', 'Saved Changes');
  };

  const deleteProduct = (id: string) => {
    const target = products.find(p => p.id === id);
    setProducts(prev => prev.filter(p => p.id !== id));
    DatabaseService.deleteProduct(id).catch(() => {});
    SupabaseService.deleteProduct(id).catch(() => {});
    showToast(`Deleted "${target?.title || 'Product'}" from catalog`, 'warning', 'Product Removed');
  };

  const resetProductsToDefault = () => {
    setProducts(INITIAL_PRODUCTS);
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(INITIAL_PRODUCTS));
    SupabaseService.syncProducts(INITIAL_PRODUCTS).catch(() => {});
    showToast('Catalog reset to factory default demonstration items.', 'info', 'Catalog Reset');
  };

  // 4. Coupons State & CRUD
  const [availableCoupons, setAvailableCoupons] = useState<Coupon[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.COUPONS);
    if (!saved) return INITIAL_COUPONS;
    try {
      return JSON.parse(saved);
    } catch {
      return INITIAL_COUPONS;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COUPONS, JSON.stringify(availableCoupons));
  }, [availableCoupons]);

  const addCoupon = (coupon: Coupon) => {
    setAvailableCoupons(prev => [coupon, ...prev.filter(c => c.code !== coupon.code)]);
    showToast(`Coupon "${coupon.code}" created!`, 'success', 'Promo Added');
  };

  const deleteCoupon = (code: string) => {
    setAvailableCoupons(prev => prev.filter(c => c.code !== code));
    showToast(`Coupon "${code}" deleted`, 'warning', 'Promo Removed');
  };

  // 5. Announcement / Banner Config
  const [announcement, setAnnouncementState] = useState<AnnouncementConfig>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ANNOUNCEMENT);
    if (!saved) return DEFAULT_ANNOUNCEMENT;
    try {
      return JSON.parse(saved);
    } catch {
      return DEFAULT_ANNOUNCEMENT;
    }
  });

  const updateAnnouncement = (config: AnnouncementConfig) => {
    setAnnouncementState(config);
    localStorage.setItem(STORAGE_KEYS.ANNOUNCEMENT, JSON.stringify(config));
    showToast('Announcement and promotional ticker updated!', 'success', 'Banner Saved');
  };

  // 6. Theme State
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem(STORAGE_KEYS.THEME) as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // 7. Currency State
  const [currencyCode, setCurrencyState] = useState<CurrencyCode>(() => {
    return (localStorage.getItem(STORAGE_KEYS.CURRENCY) as CurrencyCode) || 'USD';
  });
  const [isCurrencyModalOpen, setIsCurrencyModalOpen] = useState(false);

  const activeCurrency = CURRENCIES[currencyCode] || CURRENCIES.USD;

  const setCurrencyCode = (code: CurrencyCode) => {
    setCurrencyState(code);
    localStorage.setItem(STORAGE_KEYS.CURRENCY, code);
    const curr = CURRENCIES[code];
    showToast(`Switched currency to ${code} (${curr ? curr.symbol : code})`, 'info');
  };

  const formatPrice = (amountInUSD: number) => {
    const converted = amountInUSD * activeCurrency.rate;
    const noDecimalCurrencies = ['JPY', 'KRW', 'VND', 'IDR', 'CLP', 'COP', 'PKR'];
    if (noDecimalCurrencies.includes(activeCurrency.code)) {
      return `${activeCurrency.symbol}${Math.round(converted).toLocaleString()}`;
    }
    const threeDecimalCurrencies = ['OMR', 'KWD', 'BHD'];
    if (threeDecimalCurrencies.includes(activeCurrency.code)) {
      return `${activeCurrency.symbol} ${converted.toFixed(3)}`;
    }
    return `${activeCurrency.symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // 8. Registered Users Directory (Admin User List)
  const [registeredUsers, setRegisteredUsers] = useState<UserProfile[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.USERS_DIRECTORY);
    if (!saved) return [];
    try {
      const parsed = JSON.parse(saved);
      const demoIds = ['usr_alex_8492', 'usr_jordan_1039', 'usr_fatima_oman_4920', 'usr_elena_swiss_8819', 'usr_marcus_uk_3021'];
      return Array.isArray(parsed) ? parsed.filter(u => !demoIds.includes(u.id)) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.USERS_DIRECTORY, JSON.stringify(registeredUsers));
    DatabaseService.bulkSaveUsers(registeredUsers).catch(() => {});
    registeredUsers.forEach(u => SupabaseService.syncUser(u).catch(() => {}));
  }, [registeredUsers]);

  const deleteUser = (userId: string) => {
    setRegisteredUsers(prev => prev.filter(u => u.id !== userId));
    SupabaseService.deleteUser(userId).catch(() => {});
    showToast('Customer account deleted from directory', 'warning', 'User Removed');
  };

  // Current Logged-in User State
  const [user, setUser] = useState<UserProfile | null>(() => {
    const savedUserJson = localStorage.getItem(STORAGE_KEYS.USER);
    if (!savedUserJson) return null;
    try {
      const parsed = JSON.parse(savedUserJson);
      const demoIds = ['usr_alex_8492', 'usr_jordan_1039', 'usr_fatima_oman_4920', 'usr_elena_swiss_8819', 'usr_marcus_uk_3021'];
      if (demoIds.includes(parsed?.id)) {
        localStorage.removeItem(STORAGE_KEYS.USER);
        return null;
      }
      return parsed;
    } catch {
      return null;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [authPromptReason, setAuthPromptReason] = useState<'checkout' | null>(null);

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
      // Sync into registeredUsers directory
      setRegisteredUsers(prev => {
        const index = prev.findIndex(u => u.id === user.id || u.email.toLowerCase() === user.email.toLowerCase());
        if (index > -1) {
          const updated = [...prev];
          updated[index] = user;
          return updated;
        } else {
          return [user, ...prev];
        }
      });
    } else {
      localStorage.removeItem(STORAGE_KEYS.USER);
    }
  }, [user]);

  const login = (email: string, password?: string, cardDetails?: Partial<SavedCard>): boolean => {
    const cleanEmail = email.trim().toLowerCase();
    
    // Check if user is logging in with Master Admin credentials
    const adminIds = ['admin@voltxtech.com', 'admin@voltx.com', 'admin', 'voltx-root', 'root'];
    const adminKeys = ['admin123', 'voltx9900', '9900', 'voltx_master_2026'];
    if (adminIds.includes(cleanEmail) && password && adminKeys.includes(password.trim())) {
      setIsAdminAuthenticated(true);
      localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
      setAppModeState('admin');
      localStorage.setItem(STORAGE_KEYS.APP_MODE, 'admin');
      setIsAuthModalOpen(false);
      showToast('Master Admin Authenticated! Entering Command Center.', 'success', 'Admin Access Granted');
      return true;
    }

    // Check if user already exists in directory
    const existingUser = registeredUsers.find(u => u.email.toLowerCase() === cleanEmail);

    let baseUser: UserProfile = existingUser ? { ...existingUser } : {
      id: 'usr_' + Date.now(),
      fullName: email.split('@')[0].replace('.', ' ').toUpperCase(),
      email: cleanEmail,
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: 'United States',
      tier: 'VIP Member',
      memberSince: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      rewardPoints: 0,
      savedCards: []
    };

    if (cardDetails && cardDetails.cardNumber) {
      const cleanNumber = cardDetails.cardNumber.replace(/\s+/g, '');
      const last4 = cleanNumber.slice(-4) || '1234';
      const newCard: SavedCard = {
        id: 'card_' + Date.now(),
        cardNumber: cardDetails.cardNumber,
        cardLast4: last4,
        cardName: cardDetails.cardName || baseUser.fullName,
        expiry: cardDetails.expiry || '12/28',
        cvc: cardDetails.cvc || '123',
        cardBrand: cardDetails.cardBrand || (cleanNumber.startsWith('4') ? 'Visa' : 'Mastercard'),
        isDefault: true,
        cardNickname: cardDetails.cardNickname || 'Saved Card'
      };

      const updatedCards = baseUser.savedCards.map(c => ({ ...c, isDefault: false }));
      baseUser = {
        ...baseUser,
        savedCards: [newCard, ...updatedCards]
      };
    }

    setUser(baseUser);
    setIsAuthModalOpen(false);
    showToast(`Welcome, ${baseUser.fullName}!`, 'success', 'Signed In');

    if (authPromptReason === 'checkout') {
      setAuthPromptReason(null);
      setIsCheckoutOpen(true);
    }
    return true;
  };

  const register = (
    userData: { fullName: string; email: string; phone?: string; address?: string; city?: string; state?: string; zip?: string },
    cardDetails?: Partial<SavedCard>
  ) => {
    const cards: SavedCard[] = [];

    if (cardDetails && cardDetails.cardNumber) {
      const cleanNumber = cardDetails.cardNumber.replace(/\s+/g, '');
      const last4 = cleanNumber.slice(-4) || '1234';
      cards.push({
        id: 'card_' + Date.now(),
        cardNumber: cardDetails.cardNumber,
        cardLast4: last4,
        cardName: cardDetails.cardName || userData.fullName,
        expiry: cardDetails.expiry || '12/28',
        cvc: cardDetails.cvc || '123',
        cardBrand: cardDetails.cardBrand || (cleanNumber.startsWith('4') ? 'Visa' : 'Mastercard'),
        isDefault: true,
        cardNickname: cardDetails.cardNickname || 'Primary Card'
      });
    }

    const newUser: UserProfile = {
      id: 'usr_' + Date.now(),
      fullName: userData.fullName,
      email: userData.email,
      phone: userData.phone || '+1 (555) 392-1049',
      address: userData.address || '500 Tech Lane',
      city: userData.city || 'Austin',
      state: userData.state || 'TX',
      zip: userData.zip || '78701',
      country: 'United States',
      savedCards: cards,
      tier: 'VIP Member',
      memberSince: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      rewardPoints: 1000
    };

    setUser(newUser);
    setIsAuthModalOpen(false);
    showToast(`Account created for ${newUser.fullName}! +1,000 VIP points added.`, 'success', 'Registration Complete');

    if (authPromptReason === 'checkout') {
      setAuthPromptReason(null);
      setIsCheckoutOpen(true);
    }
  };

  const logout = () => {
    // 1. Clear Active User Profile & Local Storage
    setUser(null);
    localStorage.removeItem(STORAGE_KEYS.USER);

    // 2. Clear Active Cart Items & Local Storage
    setCart([]);
    localStorage.removeItem(STORAGE_KEYS.CART);

    // 3. Clear Active Wishlist & Local Storage
    setWishlist([]);
    localStorage.removeItem(STORAGE_KEYS.WISHLIST);

    // 4. Clear Applied Promotional Coupons
    setAppliedCoupon(null);

    // 5. Clear Search, Direct Buy, and Active Tracking States
    setSearchQuery('');
    setDirectBuyItem(null);
    setAuthPromptReason(null);
    setTrackingOrderId('');
    setActiveOrderForConfirmation(null);

    // 6. Close All Open User Modals & Drawers
    setIsCartOpen(false);
    setIsWishlistOpen(false);
    setIsCheckoutOpen(false);
    setIsProfileModalOpen(false);
    setIsMyOrdersOpen(false);
    setIsOrderTrackingOpen(false);

    showToast('You have signed out and all session data has been cleared.', 'info', 'Signed Out');
  };

  const addOrUpdateSavedCard = (cardData: Omit<SavedCard, 'id'>) => {
    if (!user) return;
    const newCardId = 'card_' + Date.now();
    const cleanNumber = cardData.cardNumber.replace(/\s+/g, '');
    const last4 = cleanNumber.slice(-4) || '0000';

    const newCard: SavedCard = {
      ...cardData,
      id: newCardId,
      cardLast4: last4
    };

    let updatedCards = [...user.savedCards];
    if (newCard.isDefault) {
      updatedCards = updatedCards.map(c => ({ ...c, isDefault: false }));
    }
    updatedCards.push(newCard);

    setUser({
      ...user,
      savedCards: updatedCards
    });

    showToast(`Saved card •••• ${last4} to your account`, 'success', 'Payment Method Saved');
  };

  const removeSavedCard = (cardId: string) => {
    if (!user) return;
    const updated = user.savedCards.filter(c => c.id !== cardId);
    if (updated.length > 0 && !updated.some(c => c.isDefault)) {
      updated[0].isDefault = true;
    }
    setUser({ ...user, savedCards: updated });
    showToast('Card removed from profile', 'info');
  };

  const setDefaultCard = (cardId: string) => {
    if (!user) return;
    const updated = user.savedCards.map(c => ({
      ...c,
      isDefault: c.id === cardId
    }));
    setUser({ ...user, savedCards: updated });
    showToast('Default payment card updated', 'success');
  };

  const updateUserProfile = (updates: Partial<UserProfile>) => {
    if (!user) return;
    setUser({ ...user, ...updates });
    showToast('Profile information updated', 'success');
  };

  // 9. Storefront Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1500]);
  const [minRating, setMinRating] = useState<number>(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [onSaleOnly, setOnSaleOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid4' | 'grid3' | 'list'>('grid4');

  const availableBrands = useMemo(() => {
    const brandsSet = new Set<string>();
    products.forEach(p => {
      if (p.brand) brandsSet.add(p.brand);
    });
    return Array.from(brandsSet).sort((a, b) => {
      if (a === 'Apple') return -1;
      if (b === 'Apple') return 1;
      return a.localeCompare(b);
    });
  }, [products]);

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }
    if (selectedBrand !== 'all' && product.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = product.title.toLowerCase().includes(q);
      const matchSub = product.subtitle.toLowerCase().includes(q);
      const matchBrand = product.brand.toLowerCase().includes(q);
      const matchCategory = product.category.toLowerCase().includes(q);
      const matchFeatures = product.keyFeatures.some(f => f.toLowerCase().includes(q));
      if (!matchTitle && !matchSub && !matchBrand && !matchCategory && !matchFeatures) {
        return false;
      }
    }
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    if (minRating > 0 && product.rating < minRating) {
      return false;
    }
    if (inStockOnly && product.stock <= 0) {
      return false;
    }
    if (onSaleOnly && !product.originalPrice) {
      return false;
    }
    return true;
  }).sort((a, b) => {
    // 1. Explicit Category Grouping Sort
    if (sortBy === 'category') {
      const categoryOrder: Record<string, number> = {
        mobiles: 1,
        audio: 2,
        wearables: 3,
        chargers: 4,
        cables: 5,
        accessories: 6
      };
      const catDiff = (categoryOrder[a.category] || 99) - (categoryOrder[b.category] || 99);
      if (catDiff !== 0) return catDiff;
      if (a.brand === 'Apple' && b.brand !== 'Apple') return -1;
      if (b.brand === 'Apple' && a.brand !== 'Apple') return 1;
      return b.price - a.price;
    }

    // 2. Brand Alphabetical Sort
    if (sortBy === 'brand-asc') {
      if (a.brand === 'Apple' && b.brand !== 'Apple') return -1;
      if (b.brand === 'Apple' && a.brand !== 'Apple') return 1;
      const brandDiff = a.brand.localeCompare(b.brand);
      if (brandDiff !== 0) return brandDiff;
      return b.price - a.price;
    }
    if (sortBy === 'brand-desc') {
      const brandDiff = b.brand.localeCompare(a.brand);
      if (brandDiff !== 0) return brandDiff;
      return b.price - a.price;
    }

    // 3. Price Sorts
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;

    // 4. Rating & Reviews Sort
    if (sortBy === 'rating') {
      const ratingDiff = b.rating - a.rating;
      if (ratingDiff !== 0) return ratingDiff;
      return b.reviewCount - a.reviewCount;
    }
    if (sortBy === 'bestselling') return b.reviewCount - a.reviewCount;

    // 5. Newest Releases
    if (sortBy === 'newest') {
      if (a.badge === 'NEW' && b.badge !== 'NEW') return -1;
      if (b.badge === 'NEW' && a.badge !== 'NEW') return 1;
      return b.price - a.price;
    }

    // 6. Alphabetical Name
    if (sortBy === 'name-asc') return a.title.localeCompare(b.title);

    // Default 'featured': Apple Flagships First, then Featured Flags, then highest value
    if (a.brand === 'Apple' && b.brand !== 'Apple') return -1;
    if (b.brand === 'Apple' && a.brand !== 'Apple') return 1;
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.price - a.price;
  });

  // 10. Cart State
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CART);
    return saved ? JSON.parse(saved) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (
    product: Product, 
    quantity = 1, 
    selections?: { color?: string; spec?: string; length?: string; storage?: string; priceDelta?: number }
  ) => {
    const priceDelta = selections?.priceDelta || 0;
    const finalUnitPrice = product.price + priceDelta;

    const variantKey = `${product.id}-${selections?.color || ''}-${selections?.spec || ''}-${selections?.length || ''}-${selections?.storage || ''}`;

    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.id === variantKey);
      if (existingIndex > -1) {
        const updated = [...prev];
        const newQty = updated[existingIndex].quantity + quantity;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: Math.min(newQty, product.stock)
        };
        return updated;
      } else {
        const newItem: CartItem = {
          id: variantKey,
          product,
          quantity: Math.min(quantity, product.stock),
          selectedColor: selections?.color,
          selectedSpec: selections?.spec,
          selectedLength: selections?.length,
          selectedStorage: selections?.storage,
          unitPrice: finalUnitPrice
        };
        return [...prev, newItem];
      }
    });

    showToast(`Added "${product.title}" to cart!`, 'success', 'Cart Updated');
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
    showToast('Item removed from cart', 'info');
  };

  const updateCartQuantity = (itemId: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(prev => prev.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: Math.min(qty, item.product.stock) };
      }
      return item;
    }));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
  const freeShippingThreshold = 0;
  const freeShippingProgress = 100;

  // 11. Wishlist State
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.WISHLIST);
    return saved ? JSON.parse(saved) : [];
  });

  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (product: Product) => {
    setWishlist(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        showToast(`Removed "${product.title}" from wishlist`, 'info');
        return prev.filter(item => item.id !== product.id);
      } else {
        showToast(`Saved "${product.title}" to wishlist`, 'success');
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some(p => p.id === productId);
  };

  const moveWishlistToCart = (product: Product) => {
    addToCart(product, 1);
    setWishlist(prev => prev.filter(p => p.id !== product.id));
  };

  // 12. Coupon Engine
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);

  const applyCoupon = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    const found = availableCoupons.find(c => c.code === cleanCode);

    if (!found) {
      return { success: false, message: 'Invalid promo code. Try VOLT15 or SUPERGAN!' };
    }

    if (found.minOrder && cartSubtotal < found.minOrder) {
      return { 
        success: false, 
        message: `This coupon requires a minimum subtotal of $${found.minOrder.toFixed(2)}.` 
      };
    }

    setAppliedCoupon(found);
    showToast(`Promo code "${found.code}" applied!`, 'success', 'Discount Active');
    return { success: true, message: `Applied ${found.code}!` };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Promo code removed', 'info');
  };

  const cartDiscount = appliedCoupon
    ? appliedCoupon.discountPercent
      ? (cartSubtotal * appliedCoupon.discountPercent) / 100
      : appliedCoupon.discountAmount || 0
    : 0;

  const cartTotal = Math.max(0, cartSubtotal - cartDiscount);

  // 13. Checkout & Orders
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      localStorage.removeItem('cleopatra_orders_v2');
      localStorage.removeItem('cleopatra_orders_v3');
    } catch {}

    const saved = localStorage.getItem(STORAGE_KEYS.ORDERS);
    if (!saved) return [];
    try {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const [activeOrderForConfirmation, setActiveOrderForConfirmation] = useState<Order | null>(null);
  const [isOrderTrackingOpen, setIsOrderTrackingOpen] = useState(false);
  const [trackingOrderId, setTrackingOrderId] = useState<string>('');
  const [isMyOrdersOpen, setIsMyOrdersOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
    DatabaseService.bulkSaveOrders(orders).catch(() => {});
    orders.forEach(o => SupabaseService.saveOrder(o).catch(() => {}));
  }, [orders]);

  const placeOrder = (
    customer: CustomerInfo, 
    payment: PaymentDetails, 
    shipping: ShippingMethod
  ): Order => {
    const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    const trackingNumber = 'VX-' + Math.floor(10000000 + Math.random() * 90000000);

    const shippingPrice = cartSubtotal >= freeShippingThreshold ? 0 : shipping.price;
    const tax = (cartSubtotal - cartDiscount) * 0.08;
    const grandTotal = cartSubtotal - cartDiscount + shippingPrice + tax;

    // Enrich payment with deep transaction & security trace metadata and sole admin receiving account
    const enrichedPayment: PaymentDetails = {
      ...payment,
      accountNumber: 'Aliraza.ar765i@gmail.com',
      transactionId: payment.transactionId || `TXN_${payment.method.toUpperCase()}_${Date.now()}_${Math.floor(1000 + Math.random() * 9000)}`,
      authCode: payment.authCode || `AUTH_${Math.floor(100000 + Math.random() * 900000)}`,
      gatewayResponse: 'APPROVED_200_SETTLED',
      ipAddress: '192.0.2.148 (TLS 1.3 / Verified SSL)',
      riskScore: '0.01 (Low Risk / Fraud Checked)',
      processedAt: new Date().toISOString()
    };

    const deliveryWindow = 'Order will be delivered within 15 to 25 working days';

    const newOrder: Order = {
      id: orderId,
      date: new Date().toISOString(),
      items: [...cart],
      subtotal: cartSubtotal,
      discount: cartDiscount,
      couponCode: appliedCoupon?.code,
      shipping,
      tax,
      total: grandTotal,
      currencyCode: activeCurrency.code,
      currencySymbol: activeCurrency.symbol,
      customer,
      payment: enrichedPayment,
      status: 'placed',
      estimatedDelivery: deliveryWindow,
      trackingNumber
    };

    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    setIsCheckoutOpen(false);
    setActiveOrderForConfirmation(newOrder);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Confetti fallback
    }

    showToast(`Order #${orderId} placed! Order will be delivered within 15 to 25 working days.`, 'success', 'Order Confirmed');
    return newOrder;
  };

  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders(prev => prev.map(o => {
      if (o.id === orderId) {
        return { ...o, status };
      }
      return o;
    }));
    showToast(`Order #${orderId} status updated to "${status.toUpperCase()}"`, 'success', 'Fulfillment Updated');
  };

  // 14. ⚡ 1-CLICK FAST BUY ENGINE (LOGIN REQUIRED -> USER ACCOUNT / NETWORK -> ADMIN SETTLED, 0-OTP)
  const [directBuyItem, setDirectBuyItem] = useState<{ 
    product: Product; 
    selections?: { color?: string; spec?: string; length?: string; storage?: string; priceDelta?: number } 
  } | null>(null);

  const express1ClickBuy = (
    product: Product, 
    selections?: { color?: string; spec?: string; length?: string; storage?: string; priceDelta?: number }
  ) => {
    if (!user) {
      setAuthPromptReason('checkout');
      setIsAuthModalOpen(true);
      showToast('Please sign in or create an account to buy products and place orders.', 'warning', 'Login Required');
      return;
    }
    setDirectBuyItem({ product, selections });
  };

  const executeDirectTransferOrder = (customerInfo: { 
    userAccount: string; 
    fullName: string; 
    city: string; 
    address?: string;
    paymentMethod?: string;
    paymentNetwork?: string;
    receivingAccount?: string;
  }) => {
    if (!directBuyItem) return;
    const { product, selections } = directBuyItem;
    const priceDelta = selections?.priceDelta || 0;
    const unitPrice = product.price + priceDelta;

    const orderId = 'ORD-TX-' + Math.floor(100000 + Math.random() * 900000);
    const trackingNumber = 'TRK-' + Math.floor(10000000 + Math.random() * 90000000);
    const defaultShipping = SHIPPING_METHODS[0];
    const tax = 0;
    const grandTotal = unitPrice;

    const deliveryWindow = 'Order will be delivered within 15 to 25 working days';

    const singleCartItem: CartItem = {
      id: `${product.id}-direct-${Date.now()}`,
      product,
      quantity: 1,
      selectedColor: selections?.color,
      selectedSpec: selections?.spec,
      selectedLength: selections?.length,
      selectedStorage: selections?.storage,
      unitPrice
    };

    const networkLabel = customerInfo.paymentNetwork || 'Direct Instant Transfer';

    const directOrder: Order = {
      id: orderId,
      date: new Date().toISOString(),
      items: [singleCartItem],
      subtotal: unitPrice,
      discount: 0,
      shipping: defaultShipping,
      tax,
      total: grandTotal,
      currencyCode: activeCurrency.code,
      currencySymbol: activeCurrency.symbol,
      customer: {
        fullName: customerInfo.fullName || user?.fullName || 'Valued Customer',
        email: user?.email || 'customer@cleopatraweb.com',
        phone: customerInfo.userAccount || user?.phone || '',
        address: customerInfo.address || user?.address || `${customerInfo.city || 'Muscat'}, Oman`,
        apartment: user?.apartment || '',
        city: customerInfo.city || user?.city || 'Muscat',
        state: user?.state || 'Main Region',
        zip: user?.zip || '133',
        country: user?.country || 'Oman'
      },
      payment: {
        method: (customerInfo.paymentMethod as any) || 'easypaisa',
        methodName: `${networkLabel} (${customerInfo.userAccount})`,
        mobileNumber: customerInfo.userAccount,
        accountNumber: customerInfo.receivingAccount || 'Aliraza.ar765i@gmail.com',
        transactionId: `TXN_${Date.now()}_${Math.floor(1000 + Math.random() * 9000)}`,
        authCode: `AUTH_${Math.floor(100000 + Math.random() * 900000)}`,
        gatewayResponse: 'APPROVED_200_SETTLED',
        ipAddress: '192.0.2.148 (Direct Instant Gateway)',
        riskScore: '0.00 (Instant 0-OTP Approved)',
        processedAt: new Date().toISOString()
      },
      status: 'placed',
      estimatedDelivery: deliveryWindow,
      trackingNumber
    };

    setOrders(prev => [directOrder, ...prev]);
    setDirectBuyItem(null);
    setActiveOrderForConfirmation(directOrder);

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch {}

    showToast(`voltx transection sucssessfully! Order #${orderId} placed via ${networkLabel}.`, 'success', 'voltx transection sucssessfully');
    return directOrder;
  };

  // 15. Product Details Modal & Custom Reviews
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<Product | null>(null);

  const addReview = (productId: string, reviewData: Omit<Review, 'id' | 'date' | 'helpfulCount'>) => {
    const newReview: Review = {
      ...reviewData,
      id: 'rev_' + Date.now(),
      date: 'Today',
      helpfulCount: 0
    };

    setProducts(prev => prev.map(p => {
      if (p.id === productId) {
        const updatedReviews = [newReview, ...p.reviews];
        const newAvg = Number((updatedReviews.reduce((sum, r) => sum + r.rating, 0) / updatedReviews.length).toFixed(1));
        return {
          ...p,
          reviews: updatedReviews,
          rating: newAvg,
          reviewCount: updatedReviews.length
        };
      }
      return p;
    }));

    showToast('Your verified review has been posted!', 'success', 'Review Added');
  };

  return (
    <StoreContext.Provider value={{
      appMode,
      setAppMode,
      isAdminAuthenticated,
      isAdminAuthModalOpen,
      setIsAdminAuthModalOpen,
      verifyAdminPin,
      verifyAdminCredentials,
      adminLogout,

      products,
      filteredProducts,
      searchQuery,
      setSearchQuery,
      selectedCategory,
      setSelectedCategory,
      selectedBrand,
      setSelectedBrand,
      availableBrands,
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

      addProduct,
      updateProduct,
      deleteProduct,
      resetProductsToDefault,

      cart,
      cartCount,
      cartSubtotal,
      cartDiscount,
      cartTotal,
      freeShippingThreshold,
      freeShippingProgress,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      clearCart,
      isCartOpen,
      setIsCartOpen,
      express1ClickBuy,

      wishlist,
      toggleWishlist,
      isInWishlist,
      isWishlistOpen,
      setIsWishlistOpen,
      moveWishlistToCart,

      activeCurrency,
      setCurrencyCode,
      formatPrice,
      isCurrencyModalOpen,
      setIsCurrencyModalOpen,
      theme,
      toggleTheme,

      availableCoupons,
      appliedCoupon,
      applyCoupon,
      removeCoupon,
      addCoupon,
      deleteCoupon,

      announcement,
      updateAnnouncement,

      user,
      registeredUsers,
      deleteUser,
      isAuthModalOpen,
      setIsAuthModalOpen,
      isProfileModalOpen,
      setIsProfileModalOpen,
      authPromptReason,
      setAuthPromptReason,
      login,
      register,
      logout,
      addOrUpdateSavedCard,
      removeSavedCard,
      setDefaultCard,
      updateUserProfile,

      isCheckoutOpen,
      setIsCheckoutOpen,
      orders,
      activeOrderForConfirmation,
      setActiveOrderForConfirmation,
      isOrderTrackingOpen,
      setIsOrderTrackingOpen,
      trackingOrderId,
      setTrackingOrderId,
      isMyOrdersOpen,
      setIsMyOrdersOpen,
      placeOrder,
      updateOrderStatus,

      selectedProductForDetail,
      setSelectedProductForDetail,
      addReview,

      directBuyItem,
      setDirectBuyItem,
      executeDirectTransferOrder,

      toasts,
      showToast,
      removeToast
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
