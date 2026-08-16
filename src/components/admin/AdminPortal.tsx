import React, { useState } from 'react';
import { 
  Package, 
  Plus, 
  Trash2, 
  Edit3, 
  Truck, 
  Tag, 
  Megaphone, 
  DollarSign, 
  ShoppingBag, 
  Layers, 
  ShieldCheck, 
  LogOut, 
  ArrowLeft, 
  Search, 
  Check, 
  X, 
  AlertTriangle, 
  RotateCcw,
  Sparkles,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Users,
  CreditCard,
  Lock,
  Eye,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Award,
  Hash,
  Activity,
  FileText,
  Database
} from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import { Product, ProductCategory, Coupon, OrderStatus, UserProfile, Order } from '../../types';
import { DatabaseStudio } from './DatabaseStudio';

export const AdminPortal: React.FC = () => {
  const { 
    setAppMode, 
    adminLogout, 
    products, 
    addProduct, 
    updateProduct, 
    deleteProduct, 
    resetProductsToDefault,
    orders, 
    updateOrderStatus,
    registeredUsers,
    deleteUser,
    availableCoupons, 
    addCoupon, 
    deleteCoupon,
    announcement, 
    updateAnnouncement,
    formatPrice,
    activeCurrency
  } = useStore();

  const [activeTab, setActiveTab] = useState<'products' | 'orders' | 'users' | 'coupons' | 'announcements' | 'database'>('products');
  const [productSearch, setProductSearch] = useState('');
  const [userSearch, setUserSearch] = useState('');
  const [orderSearch, setOrderSearch] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');

  // Add Product Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  const [newTitle, setNewTitle] = useState('');
  const [newSubtitle, setNewSubtitle] = useState('');
  const [newBrand, setNewBrand] = useState('VOLTX');
  const [newCategory, setNewCategory] = useState<ProductCategory>('chargers');
  const [newPrice, setNewPrice] = useState<number>(49.99);
  const [newOriginalPrice, setNewOriginalPrice] = useState<number>(69.99);
  const [newStock, setNewStock] = useState<number>(50);
  const [newBadge, setNewBadge] = useState<string>('NEW');
  const [newImage, setNewImage] = useState<string>('https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80');
  const [newKeyFeatures, setNewKeyFeatures] = useState<string>('140W HyperSpeed Charging, Smart LED Power Display, Aerospace Thermal Guard');

  // Selected Order for Deep Payment & Transaction Audit Modal
  const [selectedOrderForAudit, setSelectedOrderForAudit] = useState<Order | null>(null);

  // Selected User for Deep Profile Inspection Modal
  const [selectedUserForDetail, setSelectedUserForDetail] = useState<UserProfile | null>(null);

  // Coupon form state
  const [newCouponCode, setNewCouponCode] = useState('');
  const [newCouponDiscount, setNewCouponDiscount] = useState<number>(20);
  const [newCouponMinOrder, setNewCouponMinOrder] = useState<number>(50);
  const [newCouponDesc, setNewCouponDesc] = useState('');

  // Announcement form state
  const [announcementMsg, setAnnouncementMsg] = useState(announcement.message);
  const [announcementBadge, setAnnouncementBadge] = useState(announcement.badge);
  const [announcementEnabled, setAnnouncementEnabled] = useState(announcement.enabled);

  // Metrics Calculations
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const totalItemsSold = orders.reduce((sum, o) => sum + o.items.reduce((s, i) => s + i.quantity, 0), 0);
  const lowStockCount = products.filter(p => p.stock <= 10).length;

  const filteredAdminProducts = products.filter(p => {
    const matchesCat = selectedCategoryFilter === 'all' || p.category === selectedCategoryFilter;
    const matchesSearch = 
      p.title.toLowerCase().includes(productSearch.toLowerCase()) ||
      p.brand.toLowerCase().includes(productSearch.toLowerCase()) ||
      p.category.toLowerCase().includes(productSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const filteredAdminUsers = registeredUsers.filter(u => {
    const q = userSearch.toLowerCase().trim();
    if (!q) return true;
    const matchName = u.fullName.toLowerCase().includes(q);
    const matchEmail = u.email.toLowerCase().includes(q);
    const matchPhone = u.phone?.toLowerCase().includes(q);
    const matchCity = u.city?.toLowerCase().includes(q);
    const matchCountry = u.country?.toLowerCase().includes(q);
    const matchCard = u.savedCards.some(c => c.cardLast4.includes(q) || c.cardBrand.toLowerCase().includes(q));
    return matchName || matchEmail || matchPhone || matchCity || matchCountry || matchCard;
  });

  const filteredAdminOrders = orders.filter(o => {
    const q = orderSearch.toLowerCase().trim();
    if (!q) return true;
    const matchId = o.id.toLowerCase().includes(q);
    const matchCust = o.customer.fullName.toLowerCase().includes(q) || o.customer.email.toLowerCase().includes(q);
    const matchMethod = o.payment.methodName?.toLowerCase().includes(q) || o.payment.method.toLowerCase().includes(q);
    const matchTx = o.payment.transactionId?.toLowerCase().includes(q);
    return matchId || matchCust || matchMethod || matchTx;
  });

  const handleOpenAddModal = () => {
    setEditingProductId(null);
    setNewTitle('');
    setNewSubtitle('');
    setNewBrand('VOLTX');
    setNewCategory('chargers');
    setNewPrice(49.99);
    setNewOriginalPrice(69.99);
    setNewStock(50);
    setNewBadge('NEW');
    setNewImage('https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80');
    setNewKeyFeatures('140W HyperSpeed Charging, Smart LED Display, Aerospace Thermal Guard');
    setIsAddModalOpen(true);
  };

  const handleOpenEditModal = (p: Product) => {
    setEditingProductId(p.id);
    setNewTitle(p.title);
    setNewSubtitle(p.subtitle);
    setNewBrand(p.brand);
    setNewCategory(p.category);
    setNewPrice(p.price);
    setNewOriginalPrice(p.originalPrice || p.price);
    setNewStock(p.stock);
    setNewBadge(p.badge || 'HOT');
    setNewImage(p.images[0] || '');
    setNewKeyFeatures(p.keyFeatures.join(', '));
    setIsAddModalOpen(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const featuresArray = newKeyFeatures.split(',').map(f => f.trim()).filter(Boolean);

    if (editingProductId) {
      updateProduct(editingProductId, {
        title: newTitle.trim(),
        subtitle: newSubtitle.trim() || 'Engineered for extreme performance',
        brand: newBrand.trim(),
        category: newCategory as any,
        price: Number(newPrice),
        originalPrice: newOriginalPrice > newPrice ? Number(newOriginalPrice) : undefined,
        stock: Number(newStock),
        badge: newBadge as any,
        images: [newImage.trim()],
        keyFeatures: featuresArray.length > 0 ? featuresArray : ['High speed efficiency', 'Durable chassis']
      });
    } else {
      addProduct({
        title: newTitle.trim(),
        subtitle: newSubtitle.trim() || 'Engineered for extreme performance',
        brand: newBrand.trim(),
        category: newCategory as any,
        price: Number(newPrice),
        originalPrice: newOriginalPrice > newPrice ? Number(newOriginalPrice) : undefined,
        stock: Number(newStock),
        badge: newBadge as any,
        images: [newImage.trim()],
        keyFeatures: featuresArray.length > 0 ? featuresArray : ['High speed efficiency', 'Durable chassis'],
        compatibility: ['Universal USB-C', 'iOS & Android', 'MacBook & Windows'],
        specs: {
          'Power': '140W Turbo',
          'Chassis': 'Aerospace Alloy',
          'Warranty': '24-Month Full Guard'
        }
      });
    }

    setIsAddModalOpen(false);
  };

  const handleCreateCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCouponCode.trim()) return;

    addCoupon({
      code: newCouponCode.trim().toUpperCase(),
      discountPercent: Number(newCouponDiscount),
      minOrder: Number(newCouponMinOrder),
      description: newCouponDesc.trim() || `${newCouponDiscount}% OFF on orders over $${newCouponMinOrder}`
    });

    setNewCouponCode('');
    setNewCouponDesc('');
  };

  const handleSaveAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    updateAnnouncement({
      message: announcementMsg,
      badge: announcementBadge,
      linkText: 'Shop Now',
      enabled: announcementEnabled
    });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)', paddingBottom: '5rem' }}>
      {/* Top Admin Control Header */}
      <header className="glass-panel" style={{
        position: 'sticky',
        top: 0,
        zIndex: 950,
        borderBottom: '1px solid rgba(244, 63, 94, 0.3)',
        background: 'rgba(9, 13, 22, 0.95)'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px'
        }}>
          {/* Admin Identity */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-md)',
              background: 'linear-gradient(135deg, #f43f5e, #fb7185)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 0 15px rgba(244, 63, 94, 0.4)'
            }}>
              <ShieldCheck size={22} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.15rem', fontWeight: 800 }}>VOLTX Master Command Center</span>
                <span style={{
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  padding: '0.15rem 0.5rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(244, 63, 94, 0.15)',
                  color: 'var(--accent-rose)',
                  border: '1px solid rgba(244, 63, 94, 0.3)'
                }}>
                  ROOT ADMIN
                </span>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                Authorized Control: Products, Orders, Users & Card Vault, Coupons, Banners
              </div>
            </div>
          </div>

          {/* Action Switchers */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => setAppMode('storefront')}
              className="btn btn-primary"
              style={{
                fontSize: '0.85rem',
                gap: '0.45rem',
                borderRadius: 'var(--radius-full)',
                padding: '0.5rem 1.1rem'
              }}
              title="Return to Customer Storefront"
            >
              <ShoppingBag size={16} />
              <span>View Customer Storefront</span>
              <ExternalLink size={14} />
            </button>

            <button
              onClick={adminLogout}
              className="btn btn-secondary"
              style={{
                fontSize: '0.82rem',
                gap: '0.4rem',
                borderRadius: 'var(--radius-md)',
                color: 'var(--accent-rose)',
                borderColor: 'rgba(244, 63, 94, 0.3)'
              }}
              title="Sign Out of Admin"
            >
              <LogOut size={15} />
              <span>Exit Admin</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Body */}
      <div className="container" style={{ paddingTop: '2rem' }}>
        {/* Analytics Top Stats Banner */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(0, 242, 254, 0.12)',
              color: 'var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <DollarSign size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Total Store Revenue
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                {formatPrice(totalRevenue)}
              </div>
            </div>
          </div>

          <div style={{
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(16, 185, 129, 0.12)',
              color: 'var(--accent-emerald)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Truck size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Customer Orders
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                {orders.length} Orders ({totalItemsSold} Items)
              </div>
            </div>
          </div>

          <div style={{
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(59, 130, 246, 0.12)',
              color: '#60a5fa',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Users size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Registered Users & Card Vault
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                {registeredUsers.length} Customers
              </div>
            </div>
          </div>

          <div style={{
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(139, 92, 246, 0.12)',
              color: 'var(--accent-violet)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Package size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Active Hardware SKUs
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                {products.length} Products
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation Menu */}
        <div style={{
          display: 'flex',
          gap: '0.6rem',
          borderBottom: '1px solid var(--border-medium)',
          paddingBottom: '0.75rem',
          marginBottom: '2rem',
          overflowX: 'auto'
        }}>
          {[
            { id: 'products', label: '📦 Products & Inventory', count: products.length },
            { id: 'orders', label: '🚚 Orders & Payment Audit', count: orders.length },
            { id: 'users', label: '👥 User Directory & Card Vault', count: registeredUsers.length },
            { id: 'coupons', label: '🏷️ Coupons & Promo Codes', count: availableCoupons.length },
            { id: 'announcements', label: '📢 Banners & Promotional Ads' },
            { id: 'database', label: '💾 Relational Database Studio' }
          ].map(tab => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.1rem',
                  borderRadius: 'var(--radius-md)',
                  background: isSelected ? 'var(--accent-cyan)' : 'var(--bg-elevated)',
                  color: isSelected ? '#090d16' : 'var(--text-secondary)',
                  fontWeight: isSelected ? 800 : 600,
                  fontSize: '0.88rem',
                  border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  whiteSpace: 'nowrap'
                }}
              >
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    padding: '0.1rem 0.45rem',
                    borderRadius: 'var(--radius-full)',
                    background: isSelected ? '#090d16' : 'var(--bg-surface)',
                    color: isSelected ? 'var(--accent-cyan)' : 'var(--text-muted)'
                  }}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* TAB 1: PRODUCTS & INVENTORY CRUD */}
        {activeTab === 'products' && (
          <div>
            {/* Top Toolbar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              {/* Search & Filter */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1, maxWidth: '600px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.5rem 0.85rem',
                  flex: 1,
                  gap: '0.5rem'
                }}>
                  <Search size={16} color="var(--accent-cyan)" />
                  <input 
                    type="text" 
                    placeholder="Search product title, brand, or SKU..."
                    value={productSearch}
                    onChange={(e) => setProductSearch(e.target.value)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      width: '100%',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>

                <select
                  value={selectedCategoryFilter}
                  onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                  style={{
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-primary)',
                    padding: '0.5rem 0.85rem',
                    fontSize: '0.85rem'
                  }}
                >
                  <option value="all">All Categories</option>
                  <option value="mobiles">Smartphones</option>
                  <option value="chargers">Chargers</option>
                  <option value="cables">Cables</option>
                  <option value="audio">Audio</option>
                  <option value="wearables">Wearables</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <button
                  onClick={handleOpenAddModal}
                  className="btn btn-primary"
                  style={{ gap: '0.4rem', fontSize: '0.85rem' }}
                >
                  <Plus size={17} />
                  <span>Add New Product</span>
                </button>

                <button
                  onClick={resetProductsToDefault}
                  className="btn btn-secondary"
                  style={{ gap: '0.4rem', fontSize: '0.85rem' }}
                  title="Restore default product demonstration list"
                >
                  <RotateCcw size={15} />
                  <span>Reset Demo SKUs</span>
                </button>
              </div>
            </div>

            {/* Products Table */}
            <div style={{
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
              overflowX: 'auto'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-medium)', background: 'var(--bg-surface)', color: 'var(--text-muted)' }}>
                    <th style={{ padding: '0.85rem 1rem' }}>Product</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Category</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Price (USD)</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Price ({activeCurrency.code})</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Stock</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Badge</th>
                    <th style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAdminProducts.map(p => (
                    <tr key={p.id} style={{ borderBottom: '1px solid var(--border-subtle)', transition: 'background var(--transition-fast)' }}>
                      <td style={{ padding: '0.85rem 1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <img 
                            src={p.images[0]} 
                            alt={p.title} 
                            style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-sm)', objectFit: 'cover', border: '1px solid var(--border-subtle)' }} 
                          />
                          <div>
                            <div style={{ fontWeight: 800, color: 'var(--text-primary)' }}>{p.title}</div>
                            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{p.brand} • SKU: {p.id.slice(0, 12)}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '0.85rem 1rem', textTransform: 'capitalize', color: 'var(--text-secondary)' }}>
                        {p.category}
                      </td>
                      <td style={{ padding: '0.85rem 1rem', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                        ${p.price.toFixed(2)}
                      </td>
                      <td style={{ padding: '0.85rem 1rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent-cyan)' }}>
                        {formatPrice(p.price)}
                      </td>
                      <td style={{ padding: '0.85rem 1rem' }}>
                        <span style={{
                          padding: '0.2rem 0.55rem',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          background: p.stock > 10 ? 'rgba(16, 185, 129, 0.12)' : 'rgba(245, 158, 11, 0.15)',
                          color: p.stock > 10 ? 'var(--accent-emerald)' : 'var(--accent-amber)'
                        }}>
                          {p.stock} in stock
                        </span>
                      </td>
                      <td style={{ padding: '0.85rem 1rem' }}>
                        {p.badge && (
                          <span style={{
                            padding: '0.15rem 0.5rem',
                            borderRadius: '4px',
                            fontSize: '0.68rem',
                            fontWeight: 800,
                            background: 'rgba(0, 242, 254, 0.15)',
                            color: 'var(--accent-cyan)'
                          }}>
                            {p.badge}
                          </span>
                        )}
                      </td>
                      <td style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.4rem' }}>
                          <button
                            onClick={() => handleOpenEditModal(p)}
                            className="btn-icon"
                            title="Edit Product"
                            style={{ color: 'var(--accent-cyan)' }}
                          >
                            <Edit3 size={16} />
                          </button>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="btn-icon"
                            title="Delete Product"
                            style={{ color: 'var(--accent-rose)' }}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredAdminProducts.length === 0 && (
                    <tr>
                      <td colSpan={7} style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                        No products found matching your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: ORDERS & COMPLETE PAYMENT/CARD AUDIT */}
        {activeTab === 'orders' && (
          <div>
            {/* Order search toolbar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '0.5rem 0.85rem',
                flex: 1,
                maxWidth: '500px',
                gap: '0.5rem'
              }}>
                <Search size={16} color="var(--accent-cyan)" />
                <input 
                  type="text" 
                  placeholder="Search by Order #, Customer Name, Email, or TxID..."
                  value={orderSearch}
                  onChange={(e) => setOrderSearch(e.target.value)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    width: '100%',
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem'
                  }}
                />
              </div>
            </div>

            <div style={{
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
              overflowX: 'auto'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-medium)', background: 'var(--bg-surface)', color: 'var(--text-muted)' }}>
                    <th style={{ padding: '0.85rem 1rem' }}>Order ID & Date</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Customer & Destination</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Payment Gateway & Card Details</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Total Amount</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Status</th>
                    <th style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>Payment Audit</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAdminOrders.map(order => (
                    <tr key={order.id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '0.85rem 1rem' }}>
                        <div style={{ fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                          #{order.id}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          {new Date(order.date).toLocaleDateString()} {new Date(order.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </td>
                      <td style={{ padding: '0.85rem 1rem' }}>
                        <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{order.customer.fullName}</div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>{order.customer.city}, {order.customer.country}</div>
                      </td>
                      <td style={{ padding: '0.85rem 1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                          <CreditCard size={14} color="var(--accent-cyan)" />
                          <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                            {order.payment.methodName || order.payment.method}
                          </span>
                        </div>
                        {order.payment.cardNumber && (
                          <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
                            💳 {order.payment.cardBrand || 'Card'} •••• {order.payment.cardLast4 || order.payment.cardNumber.slice(-4)} 
                            {order.payment.expiry ? ` (Exp: ${order.payment.expiry})` : ''}
                          </div>
                        )}
                        {order.payment.bankName && (
                          <div style={{ fontSize: '0.72rem', color: 'var(--accent-emerald)' }}>
                            🏦 {order.payment.bankName}
                          </div>
                        )}
                        {order.payment.upiId && (
                          <div style={{ fontSize: '0.72rem', color: 'var(--accent-amber)', fontFamily: 'var(--font-mono)' }}>
                            ⚡ UPI: {order.payment.upiId}
                          </div>
                        )}
                      </td>
                      <td style={{ padding: '0.85rem 1rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--accent-cyan)' }}>
                        {order.currencySymbol || '$'}{order.total.toFixed(2)}
                      </td>
                      <td style={{ padding: '0.85rem 1rem' }}>
                        <select
                          value={order.status}
                          onChange={(e) => updateOrderStatus(order.id, e.target.value as OrderStatus)}
                          style={{
                            background: 'var(--bg-surface)',
                            border: '1px solid var(--border-highlight)',
                            borderRadius: 'var(--radius-sm)',
                            color: 'var(--accent-cyan)',
                            padding: '0.35rem 0.6rem',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          <option value="placed">🟡 Placed</option>
                          <option value="confirmed">🔵 Confirmed</option>
                          <option value="packing">📦 Packing</option>
                          <option value="shipping">🚚 Shipping</option>
                          <option value="delivered">🟢 Delivered</option>
                        </select>
                      </td>
                      <td style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>
                        <button
                          onClick={() => setSelectedOrderForAudit(order)}
                          className="btn btn-secondary"
                          style={{
                            padding: '0.35rem 0.75rem',
                            fontSize: '0.75rem',
                            gap: '0.35rem',
                            borderRadius: 'var(--radius-sm)'
                          }}
                        >
                          <FileText size={14} color="var(--accent-cyan)" />
                          <span>Audit Payment</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredAdminOrders.length === 0 && (
                    <tr>
                      <td colSpan={6} style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                        No orders matching your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: USER DIRECTORY & SAVED CARD VAULT */}
        {activeTab === 'users' && (
          <div>
            {/* User Search & Top Stats */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '0.5rem 0.85rem',
                flex: 1,
                maxWidth: '550px',
                gap: '0.5rem'
              }}>
                <Search size={16} color="var(--accent-cyan)" />
                <input 
                  type="text" 
                  placeholder="Search customers by name, email, phone, city, country, or card last 4..."
                  value={userSearch}
                  onChange={(e) => setUserSearch(e.target.value)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    width: '100%',
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem'
                  }}
                />
              </div>

              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Showing <strong>{filteredAdminUsers.length}</strong> Registered Customers with Linked Payment Vaults
              </div>
            </div>

            {/* Users Directory Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
              gap: '1.25rem'
            }}>
              {filteredAdminUsers.map(u => {
                const userOrders = orders.filter(o => o.customer.email.toLowerCase() === u.email.toLowerCase());
                const userLifetimeSpend = userOrders.reduce((sum, o) => sum + o.total, 0);

                return (
                  <div
                    key={u.id}
                    className="glass-panel"
                    style={{
                      borderRadius: 'var(--radius-lg)',
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      position: 'relative'
                    }}
                  >
                    {/* Top Identity Row */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '50%',
                          background: 'var(--gradient-tech)',
                          color: '#090d16',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          fontSize: '1.1rem'
                        }}>
                          {u.fullName[0]}
                        </div>
                        <div>
                          <div style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '1.05rem' }}>
                            {u.fullName}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            ID: {u.id}
                          </div>
                        </div>
                      </div>

                      {/* Tier Badge */}
                      <span style={{
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        background: u.tier === 'Titanium Pro' ? 'rgba(0, 242, 254, 0.15)' : u.tier === 'Founder Club' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(139, 92, 246, 0.15)',
                        color: u.tier === 'Titanium Pro' ? 'var(--accent-cyan)' : u.tier === 'Founder Club' ? 'var(--accent-amber)' : 'var(--accent-violet)',
                        border: '1px solid currentColor'
                      }}>
                        {u.tier}
                      </span>
                    </div>

                    {/* Contact & Address Block */}
                    <div style={{
                      background: 'var(--bg-elevated)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.85rem',
                      fontSize: '0.8rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.4rem',
                      border: '1px solid var(--border-subtle)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                        <Mail size={14} color="var(--accent-cyan)" />
                        <span>{u.email}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                        <Phone size={14} color="var(--accent-cyan)" />
                        <span>{u.phone || 'N/A'}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                        <MapPin size={14} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{u.address ? `${u.address}, ${u.city || ''} ${u.country || ''}` : 'Address not configured'}</span>
                      </div>
                    </div>

                    {/* Saved Cards Vault (ADMIN INSPECTION) */}
                    <div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <CreditCard size={14} color="var(--accent-cyan)" />
                          <span>Linked Cards Vault ({u.savedCards.length})</span>
                        </div>
                        <span style={{ color: 'var(--accent-emerald)', fontSize: '0.7rem' }}>🔒 Vault Encrypted</span>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {u.savedCards.map(card => (
                          <div
                            key={card.id}
                            style={{
                              background: 'var(--bg-surface)',
                              border: card.isDefault ? '1px solid rgba(0, 242, 254, 0.4)' : '1px solid var(--border-subtle)',
                              borderRadius: 'var(--radius-md)',
                              padding: '0.75rem',
                              fontSize: '0.78rem'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                              <div style={{ fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <span>💳 {card.cardBrand}</span>
                                {card.cardNickname && (
                                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 400 }}>
                                    ({card.cardNickname})
                                  </span>
                                )}
                              </div>
                              {card.isDefault && (
                                <span style={{
                                  fontSize: '0.65rem',
                                  fontWeight: 800,
                                  padding: '0.1rem 0.4rem',
                                  borderRadius: 'var(--radius-full)',
                                  background: 'rgba(0, 242, 254, 0.15)',
                                  color: 'var(--accent-cyan)'
                                }}>
                                  DEFAULT
                                </span>
                              )}
                            </div>

                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-cyan)', letterSpacing: '0.05em' }}>
                              {card.cardNumber || `•••• •••• •••• ${card.cardLast4}`}
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.35rem', color: 'var(--text-muted)', fontSize: '0.72rem' }}>
                              <span>Cardholder: <strong style={{ color: 'var(--text-secondary)' }}>{card.cardName}</strong></span>
                              <span>Exp: <strong style={{ color: 'var(--text-secondary)' }}>{card.expiry}</strong> | CVC: <strong style={{ color: 'var(--text-secondary)' }}>{card.cvc || '•••'}</strong></span>
                            </div>
                          </div>
                        ))}

                        {u.savedCards.length === 0 && (
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic', padding: '0.5rem', textAlign: 'center', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)' }}>
                            No card linked yet (Will link upon checkout or profile save)
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Spend & Order Stats */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid var(--border-subtle)',
                      fontSize: '0.78rem'
                    }}>
                      <div>
                        <span style={{ color: 'var(--text-muted)' }}>Orders Placed: </span>
                        <strong style={{ color: 'var(--text-primary)' }}>{userOrders.length}</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-muted)' }}>Lifetime Spend: </span>
                        <strong style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>{formatPrice(userLifetimeSpend)}</strong>
                      </div>

                      <button
                        onClick={() => deleteUser(u.id)}
                        className="btn-icon"
                        title="Delete User from System"
                        style={{ color: 'var(--accent-rose)', width: '28px', height: '28px' }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}

              {filteredAdminUsers.length === 0 && (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                  No customer profiles matching "{userSearch}".
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 4: COUPONS & DISCOUNTS CRUD */}
        {activeTab === 'coupons' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2rem' }}>
            {/* Create Coupon Card */}
            <div style={{
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
              padding: '1.5rem'
            }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Tag size={18} color="var(--accent-cyan)" />
                <span>Create New Promo Coupon</span>
              </h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                Add discount promo codes for hardware promotions and marketing campaigns.
              </p>

              <form onSubmit={handleCreateCoupon} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                    Promo Code (e.g. CYBER25) *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="CYBER25"
                    value={newCouponCode}
                    onChange={(e) => setNewCouponCode(e.target.value.toUpperCase())}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 800
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                      Discount % *
                    </label>
                    <input 
                      type="number" 
                      required
                      min={1}
                      max={90}
                      value={newCouponDiscount}
                      onChange={(e) => setNewCouponDiscount(Number(e.target.value))}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                      Min. Order ($)
                    </label>
                    <input 
                      type="number" 
                      min={0}
                      value={newCouponMinOrder}
                      onChange={(e) => setNewCouponMinOrder(Number(e.target.value))}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                    Description
                  </label>
                  <input 
                    type="text" 
                    placeholder="25% OFF on flagship smartphones"
                    value={newCouponDesc}
                    onChange={(e) => setNewCouponDesc(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem', justifyContent: 'center' }}>
                  <span>Publish Promo Code</span>
                  <Plus size={16} />
                </button>
              </form>
            </div>

            {/* Coupons List */}
            <div style={{
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
              padding: '1.5rem'
            }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem' }}>
                Active Store Promo Codes ({availableCoupons.length})
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {availableCoupons.map(c => (
                  <div 
                    key={c.code}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--accent-cyan)', fontSize: '0.95rem' }}>
                          {c.code}
                        </span>
                        <span style={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          padding: '0.1rem 0.4rem',
                          borderRadius: 'var(--radius-full)',
                          background: 'rgba(16, 185, 129, 0.15)',
                          color: 'var(--accent-emerald)'
                        }}>
                          {c.discountPercent}% OFF
                        </span>
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        {c.description} {c.minOrder ? `• Min $${c.minOrder}` : ''}
                      </div>
                    </div>

                    <button
                      onClick={() => deleteCoupon(c.code)}
                      className="btn-icon"
                      style={{ color: 'var(--accent-rose)' }}
                      title="Delete Coupon"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: ANNOUNCEMENTS & PROMOTIONAL ADS */}
        {activeTab === 'announcements' && (
          <div style={{ maxWidth: '680px' }}>
            <div style={{
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
              padding: '1.75rem'
            }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Megaphone size={20} color="var(--accent-cyan)" />
                <span>Top Ticker & Global Announcement Banner</span>
              </h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Update the promotional ticker that appears on top of every page in the store.
              </p>

              <form onSubmit={handleSaveAnnouncement} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    Banner Badge Text
                  </label>
                  <input 
                    type="text" 
                    value={announcementBadge}
                    onChange={(e) => setAnnouncementBadge(e.target.value)}
                    placeholder="🔥 FLASH HARDWARE SALE"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    Announcement Message Content *
                  </label>
                  <textarea 
                    rows={3}
                    required
                    value={announcementMsg}
                    onChange={(e) => setAnnouncementMsg(e.target.value)}
                    placeholder="15% OFF WITH CODE VOLT15 | FREE EXPRESS GLOBAL SHIPPING"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-primary)',
                      fontSize: '0.88rem'
                    }}
                  />
                </div>

                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '0.85rem' }}>
                  <input 
                    type="checkbox" 
                    checked={announcementEnabled}
                    onChange={(e) => setAnnouncementEnabled(e.target.checked)}
                    style={{ accentColor: 'var(--accent-cyan)', width: '16px', height: '16px' }}
                  />
                  <span>Display announcement banner on customer storefront</span>
                </label>

                {/* Preview Box */}
                <div style={{ marginTop: '0.5rem', background: 'var(--bg-surface)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px dashed var(--border-medium)' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    Live Banner Preview:
                  </div>
                  <div style={{
                    background: 'var(--gradient-tech)',
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    color: '#090d16',
                    fontWeight: 700,
                    fontSize: '0.78rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{ background: '#090d16', color: '#fff', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.68rem' }}>
                      {announcementBadge}
                    </span>
                    <span>{announcementMsg}</span>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem', justifyContent: 'center' }}>
                  <span>Save & Publish Banner</span>
                  <Check size={16} />
                </button>
              </form>
            </div>
          </div>
        )}

        {/* TAB 6: RELATIONAL DATABASE STUDIO & QUERY RUNNER */}
        {activeTab === 'database' && (
          <DatabaseStudio />
        )}
      </div>

      {/* MODAL 1: ADD / EDIT PRODUCT MODAL */}
      {isAddModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsAddModalOpen(false)}>
          <div 
            className="modal-container" 
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '680px', padding: '2rem', maxHeight: '90vh', overflowY: 'auto' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Plus size={20} color="var(--accent-cyan)" />
                <span>{editingProductId ? 'Edit Product Attributes' : 'Add New Tech Product'}</span>
              </h3>

              <button onClick={() => setIsAddModalOpen(false)} className="btn-icon">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                    Product Title *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. VOLTX 140W GaN SuperCharger"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                    Category *
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <option value="mobiles">Smartphones & Flagships</option>
                    <option value="chargers">GaN Fast Chargers</option>
                    <option value="cables">Braided & 240W Cables</option>
                    <option value="audio">Spatial Audio & Earbuds</option>
                    <option value="wearables">Smart Watches & Rings</option>
                    <option value="accessories">Desk Accessories</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                  Subtitle / Brief Tagline
                </label>
                <input 
                  type="text" 
                  placeholder="3-Port Ultra-Compact PD 3.1 Power Supply"
                  value={newSubtitle}
                  onChange={(e) => setNewSubtitle(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                    Price ($ USD) *
                  </label>
                  <input 
                    type="number" 
                    step="0.01"
                    required
                    value={newPrice}
                    onChange={(e) => setNewPrice(Number(e.target.value))}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                    Original Price ($)
                  </label>
                  <input 
                    type="number" 
                    step="0.01"
                    value={newOriginalPrice}
                    onChange={(e) => setNewOriginalPrice(Number(e.target.value))}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                    Stock Units *
                  </label>
                  <input 
                    type="number" 
                    required
                    value={newStock}
                    onChange={(e) => setNewStock(Number(e.target.value))}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                    Promo Badge
                  </label>
                  <input 
                    type="text" 
                    placeholder="HOT / NEW / SALE"
                    value={newBadge}
                    onChange={(e) => setNewBadge(e.target.value.toUpperCase())}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                  Image URL (Unsplash or direct asset) *
                </label>
                <input 
                  type="url" 
                  required
                  value={newImage}
                  onChange={(e) => setNewImage(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-primary)',
                    fontSize: '0.82rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                  Key Features (comma separated)
                </label>
                <input 
                  type="text" 
                  value={newKeyFeatures}
                  onChange={(e) => setNewKeyFeatures(e.target.value)}
                  placeholder="140W GaN III Fast Charge, OLED Display, Kevlar Armor"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.6rem', marginTop: '1rem' }}>
                <button type="button" onClick={() => setIsAddModalOpen(false)} className="btn btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  <span>{editingProductId ? 'Save Product Changes' : 'Publish Product to Store'}</span>
                  <Check size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: DEEP PAYMENT & CARD TRANSACTION AUDIT MODAL (ADMIN ONLY) */}
      {selectedOrderForAudit && (
        <div className="modal-backdrop" onClick={() => setSelectedOrderForAudit(null)}>
          <div 
            className="modal-container" 
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '720px', padding: '2rem', maxHeight: '90vh', overflowY: 'auto' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(0, 242, 254, 0.15)',
                  color: 'var(--accent-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CreditCard size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                    Payment & Card Transaction Audit
                  </h3>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Order <strong style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>#{selectedOrderForAudit.id}</strong> • Tracking: {selectedOrderForAudit.trackingNumber}
                  </div>
                </div>
              </div>

              <button onClick={() => setSelectedOrderForAudit(null)} className="btn-icon">
                <X size={18} />
              </button>
            </div>

            {/* Financial Summary Highlight */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
              border: '1px solid var(--border-highlight)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem'
            }}>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Total Settlement Amount
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                  {selectedOrderForAudit.currencySymbol || '$'}{selectedOrderForAudit.total.toFixed(2)} {selectedOrderForAudit.currencyCode}
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span style={{
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  background: 'rgba(16, 185, 129, 0.2)',
                  color: 'var(--accent-emerald)',
                  border: '1px solid rgba(16, 185, 129, 0.4)'
                }}>
                  ● {selectedOrderForAudit.payment.gatewayResponse || 'CAPTURED & SETTLED'}
                </span>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                  {new Date(selectedOrderForAudit.date).toLocaleString()}
                </div>
              </div>
            </div>

            {/* Payment & Card Details Vault */}
            <div style={{
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              padding: '1.25rem',
              marginBottom: '1.25rem'
            }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Lock size={16} color="var(--accent-cyan)" />
                <span>Card & Gateway Transmission Details</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', fontSize: '0.82rem' }}>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>Payment Gateway:</span>
                  <strong style={{ color: 'var(--text-primary)' }}>{selectedOrderForAudit.payment.methodName || selectedOrderForAudit.payment.method}</strong>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>Card Number / Account:</span>
                  <strong style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                    {selectedOrderForAudit.payment.cardNumber || `•••• •••• •••• ${selectedOrderForAudit.payment.cardLast4 || '7721'}`}
                  </strong>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>Cardholder Name:</span>
                  <strong style={{ color: 'var(--text-primary)' }}>
                    {selectedOrderForAudit.payment.cardName || selectedOrderForAudit.customer.fullName}
                  </strong>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>Card Brand / Network:</span>
                  <strong style={{ color: 'var(--text-primary)' }}>
                    {selectedOrderForAudit.payment.cardBrand || 'Visa / Mastercard'}
                  </strong>
                </div>

                {selectedOrderForAudit.payment.expiry && (
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>Expiration & CVC:</span>
                    <strong style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                      {selectedOrderForAudit.payment.expiry} • CVC: {selectedOrderForAudit.payment.cvc || '•••'}
                    </strong>
                  </div>
                )}

                {selectedOrderForAudit.payment.bankName && (
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>Originating Bank:</span>
                    <strong style={{ color: 'var(--accent-emerald)' }}>
                      {selectedOrderForAudit.payment.bankName}
                    </strong>
                  </div>
                )}

                {selectedOrderForAudit.payment.upiId && (
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>Verified VPA / UPI ID:</span>
                    <strong style={{ color: 'var(--accent-amber)', fontFamily: 'var(--font-mono)' }}>
                      {selectedOrderForAudit.payment.upiId}
                    </strong>
                  </div>
                )}

                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>Gateway TxID:</span>
                  <strong style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                    {selectedOrderForAudit.payment.transactionId || 'TXN_GATEWAY_89234892'}
                  </strong>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>Bank Auth Code:</span>
                  <strong style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                    {selectedOrderForAudit.payment.authCode || 'AUTH_928341'}
                  </strong>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem' }}>IP / Risk Assessment:</span>
                  <strong style={{ color: 'var(--accent-emerald)' }}>
                    {selectedOrderForAudit.payment.riskScore || '0.01 (Low Risk / Fraud Checked)'}
                  </strong>
                </div>
              </div>
            </div>

            {/* Customer & Shipping Details */}
            <div style={{
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              padding: '1.25rem',
              marginBottom: '1.25rem'
            }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={16} color="var(--accent-cyan)" />
                <span>Customer Delivery Address</span>
              </div>

              <div style={{ fontSize: '0.82rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{selectedOrderForAudit.customer.fullName}</strong> ({selectedOrderForAudit.customer.email})<br />
                Phone: {selectedOrderForAudit.customer.phone || 'N/A'}<br />
                Address: {selectedOrderForAudit.customer.address}, {selectedOrderForAudit.customer.apartment ? `${selectedOrderForAudit.customer.apartment}, ` : ''}{selectedOrderForAudit.customer.city}, {selectedOrderForAudit.customer.state} {selectedOrderForAudit.customer.zip}, {selectedOrderForAudit.customer.country}
              </div>
            </div>

            {/* Itemized Line Items */}
            <div style={{
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              padding: '1.25rem'
            }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShoppingBag size={16} color="var(--accent-cyan)" />
                <span>Items Purchased ({selectedOrderForAudit.items.length})</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {selectedOrderForAudit.items.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                    <div>
                      <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{item.quantity}x {item.product.title}</span>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {[item.selectedColor, item.selectedSpec, item.selectedLength, item.selectedStorage].filter(Boolean).join(' • ')}
                      </div>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--accent-cyan)' }}>
                      ${(item.unitPrice * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
              <button 
                onClick={() => setSelectedOrderForAudit(null)} 
                className="btn btn-primary"
                style={{ padding: '0.6rem 1.5rem' }}
              >
                Done Auditing
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
