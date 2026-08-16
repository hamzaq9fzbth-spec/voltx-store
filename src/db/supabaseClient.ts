import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Product, UserProfile, Order, Coupon, AnnouncementConfig } from '../types';

const env = (import.meta as any).env || {};
const SUPABASE_URL = env.VITE_SUPABASE_URL || 'https://fnkgqlssrgaephnarqwy.supabase.co';
const SUPABASE_ANON_KEY = env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_AROVtl1dMVUNU90VmKavaQ_VfzAJ48c';

export const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface CloudHealthStatus {
  connected: boolean;
  url: string;
  latencyMs: number;
  message: string;
}

function mapSupabaseRowToProduct(row: any): Product {
  return {
    id: row.id,
    title: row.title,
    subtitle: row.subtitle || '',
    brand: row.brand || 'VOLTX',
    category: row.category || 'accessories',
    price: Number(row.price),
    originalPrice: row.original_price ? Number(row.original_price) : undefined,
    rating: Number(row.rating) || 5.0,
    reviewCount: Number(row.review_count) || 1,
    images: row.image_url ? [row.image_url] : ['https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800'],
    badge: row.badge || undefined,
    stock: Number(row.stock) || 0,
    featured: Boolean(row.featured),
    specs: {},
    keyFeatures: row.description ? row.description.split(' • ') : ['High-Efficiency GaN Architecture', 'Aerospace Alloy Frame'],
    compatibility: ['Universal USB-C PD 3.1', 'iOS / Android / Mac / Windows'],
    variants: [],
    reviews: []
  };
}

export const SupabaseService = {
  // Test live connection
  async checkHealth(): Promise<CloudHealthStatus> {
    const start = performance.now();
    try {
      const { data, error } = await supabase.from('products').select('id').limit(1);
      const latency = Math.round(performance.now() - start);
      if (error) {
        return {
          connected: false,
          url: SUPABASE_URL,
          latencyMs: latency,
          message: error.message
        };
      }
      return {
        connected: true,
        url: SUPABASE_URL,
        latencyMs: latency,
        message: 'Connected to Supabase PostgreSQL Cluster'
      };
    } catch (err: any) {
      return {
        connected: false,
        url: SUPABASE_URL,
        latencyMs: Math.round(performance.now() - start),
        message: err.message || 'Network unreachable'
      };
    }
  },

  // 1. PRODUCTS FETCH & SYNC
  async fetchProducts(): Promise<Product[] | null> {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error || !data) return null;
      return data.map(mapSupabaseRowToProduct);
    } catch {
      return null;
    }
  },

  async syncProducts(products: Product[]): Promise<boolean> {
    try {
      if (products.length === 0) return true;
      const rows = products.map(p => ({
        id: p.id,
        title: p.title,
        subtitle: p.subtitle || '',
        description: p.keyFeatures ? p.keyFeatures.join(' • ') : '',
        price: p.price,
        original_price: p.originalPrice || null,
        category: p.category,
        brand: p.brand || 'VOLTX',
        image_url: p.images && p.images.length > 0 ? p.images[0] : '',
        stock: p.stock,
        rating: p.rating || 5.0,
        review_count: p.reviewCount || 1,
        featured: p.featured || false,
        badge: p.badge || null,
        updated_at: new Date().toISOString()
      }));

      const { error } = await supabase.from('products').upsert(rows, { onConflict: 'id' });
      return !error;
    } catch {
      return false;
    }
  },

  async saveProduct(p: Product): Promise<boolean> {
    try {
      const row = {
        id: p.id,
        title: p.title,
        subtitle: p.subtitle || '',
        description: p.keyFeatures ? p.keyFeatures.join(' • ') : '',
        price: p.price,
        original_price: p.originalPrice || null,
        category: p.category,
        brand: p.brand || 'VOLTX',
        image_url: p.images && p.images.length > 0 ? p.images[0] : '',
        stock: p.stock,
        rating: p.rating || 5.0,
        review_count: p.reviewCount || 1,
        featured: p.featured || false,
        badge: p.badge || null,
        updated_at: new Date().toISOString()
      };

      const { error } = await supabase.from('products').upsert(row, { onConflict: 'id' });
      return !error;
    } catch {
      return false;
    }
  },

  async deleteProduct(id: string): Promise<boolean> {
    try {
      const { error } = await supabase.from('products').delete().eq('id', id);
      return !error;
    } catch {
      return false;
    }
  },

  // 2. USERS & CARDS FETCH & SYNC
  async fetchUsers(): Promise<UserProfile[] | null> {
    try {
      const { data: usersData, error } = await supabase.from('users').select('*');
      if (error || !usersData) return null;
      const { data: cardsData } = await supabase.from('user_cards').select('*');
      const cards = cardsData || [];

      return usersData.map(u => ({
        id: u.id,
        fullName: u.full_name,
        email: u.email,
        phone: u.phone || '',
        address: u.address || '',
        apartment: u.apartment || '',
        city: u.city || '',
        state: u.state || '',
        zip: u.zip || '',
        country: u.country || 'United States',
        tier: u.tier || 'VIP Member',
        rewardPoints: u.reward_points || 0,
        memberSince: new Date(u.created_at || Date.now()).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        savedCards: cards.filter((c: any) => c.user_id === u.id).map((c: any) => ({
          id: c.id,
          cardNumber: c.card_number_encrypted,
          cardLast4: c.card_last4,
          cardName: c.card_name,
          expiry: c.expiry,
          cvc: c.cvc || '•••',
          cardBrand: c.card_brand,
          isDefault: c.is_default,
          cardNickname: c.card_nickname || 'Primary Card'
        }))
      }));
    } catch {
      return null;
    }
  },

  async syncUser(user: UserProfile): Promise<boolean> {
    try {
      const userRow = {
        id: user.id,
        full_name: user.fullName,
        email: user.email,
        phone: user.phone || null,
        address: user.address || null,
        apartment: user.apartment || null,
        city: user.city || null,
        state: user.state || null,
        zip: user.zip || null,
        country: user.country || 'United States',
        tier: user.tier || 'VIP Member',
        reward_points: user.rewardPoints || 0,
        updated_at: new Date().toISOString()
      };

      const { error: userError } = await supabase.from('users').upsert(userRow, { onConflict: 'id' });
      if (userError) return false;

      if (user.savedCards && user.savedCards.length > 0) {
        const cardRows = user.savedCards.map(c => ({
          id: c.id,
          user_id: user.id,
          card_brand: c.cardBrand,
          card_number_encrypted: c.cardNumber,
          card_last4: c.cardLast4,
          card_name: c.cardName,
          expiry: c.expiry,
          cvc: c.cvc || null,
          card_nickname: c.cardNickname || 'Primary Card',
          is_default: c.isDefault || false
        }));

        await supabase.from('user_cards').upsert(cardRows, { onConflict: 'id' });
      }

      return true;
    } catch {
      return false;
    }
  },

  async deleteUser(userId: string): Promise<boolean> {
    try {
      const { error } = await supabase.from('users').delete().eq('id', userId);
      return !error;
    } catch {
      return false;
    }
  },

  // 3. ORDERS FETCH & SYNC
  async fetchOrders(): Promise<Order[] | null> {
    try {
      const { data: ordersData, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });

      if (error || !ordersData) return null;
      const { data: itemsData } = await supabase.from('order_items').select('*');
      const allItems = itemsData || [];

      return ordersData.map(o => ({
        id: o.id,
        date: o.created_at,
        subtotal: Number(o.subtotal),
        discount: Number(o.discount) || 0,
        couponCode: o.coupon_code || undefined,
        shipping: {
          id: 'def_ship',
          name: 'Worldwide Insured Standard Delivery',
          description: 'Order will be delivered within 15 to 25 working days',
          price: Number(o.shipping_fee) || 0,
          estimatedDays: '15 to 25 working days'
        },
        tax: Number(o.tax) || 0,
        total: Number(o.total),
        currencyCode: o.currency_code || 'USD',
        currencySymbol: o.currency_symbol || '$',
        customer: {
          fullName: o.customer_name,
          email: o.customer_email,
          phone: o.customer_phone || '',
          address: o.shipping_address,
          apartment: o.shipping_apartment || '',
          city: o.shipping_city,
          state: o.shipping_state || '',
          zip: o.shipping_zip,
          country: o.shipping_country
        },
        payment: {
          method: o.payment_method,
          methodName: o.payment_gateway_name || o.payment_method,
          cardNumber: o.card_number_masked || '',
          cardLast4: o.card_last4 || '',
          cardName: o.cardholder_name || o.customer_name,
          cardBrand: o.card_brand || '',
          transactionId: o.transaction_id || '',
          authCode: o.auth_code || '',
          gatewayResponse: o.gateway_status || 'APPROVED_200_SETTLED',
          ipAddress: o.ip_address || '',
          riskScore: o.risk_score || ''
        },
        status: o.status as any,
        estimatedDelivery: o.estimated_delivery || 'Order will be delivered within 15 to 25 working days',
        trackingNumber: o.tracking_number || undefined,
        items: allItems.filter((it: any) => it.order_id === o.id).map((it: any) => ({
          id: it.id,
          product: {
            id: it.product_id,
            title: it.product_title,
            subtitle: '',
            brand: 'VOLTX',
            category: 'accessories',
            price: Number(it.unit_price),
            rating: 5,
            reviewCount: 1,
            images: [],
            stock: 10,
            specs: {},
            keyFeatures: [],
            compatibility: ['Universal'],
            reviews: []
          },
          quantity: it.quantity,
          unitPrice: Number(it.unit_price),
          selectedColor: it.selected_color || undefined,
          selectedSpec: it.selected_spec || undefined,
          selectedLength: it.selected_length || undefined,
          selectedStorage: it.selected_storage || undefined
        }))
      }));
    } catch {
      return null;
    }
  },

  async saveOrder(order: Order): Promise<boolean> {
    try {
      const orderRow = {
        id: order.id,
        subtotal: order.subtotal,
        discount: order.discount || 0,
        coupon_code: order.couponCode || null,
        tax: order.tax || 0,
        shipping_fee: order.shipping.price || 0,
        total: order.total,
        currency_code: order.currencyCode || 'USD',
        currency_symbol: order.currencySymbol || '$',
        
        customer_name: order.customer.fullName,
        customer_email: order.customer.email,
        customer_phone: order.customer.phone || null,
        shipping_address: order.customer.address,
        shipping_apartment: order.customer.apartment || null,
        shipping_city: order.customer.city,
        shipping_state: order.customer.state || null,
        shipping_zip: order.customer.zip,
        shipping_country: order.customer.country,

        payment_method: order.payment.method,
        payment_gateway_name: order.payment.methodName || order.payment.method,
        card_number_masked: order.payment.cardNumber || null,
        card_last4: order.payment.cardLast4 || null,
        card_brand: order.payment.cardBrand || null,
        cardholder_name: order.payment.cardName || order.customer.fullName,
        transaction_id: order.payment.transactionId || null,
        auth_code: order.payment.authCode || null,
        gateway_status: order.payment.gatewayResponse || 'APPROVED_200_SETTLED',
        ip_address: order.payment.ipAddress || null,
        risk_score: order.payment.riskScore || null,

        status: order.status,
        estimated_delivery: order.estimatedDelivery || 'Order will be delivered within 15 to 25 working days',
        tracking_number: order.trackingNumber || null
      };

      const { error: orderErr } = await supabase.from('orders').upsert(orderRow, { onConflict: 'id' });
      if (orderErr) return false;

      if (order.items && order.items.length > 0) {
        const itemRows = order.items.map(it => ({
          id: it.id || `item_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          order_id: order.id,
          product_id: it.product.id,
          product_title: it.product.title,
          quantity: it.quantity,
          unit_price: it.unitPrice,
          selected_color: it.selectedColor || null,
          selected_spec: it.selectedSpec || null,
          selected_length: it.selectedLength || null,
          selected_storage: it.selectedStorage || null
        }));

        await supabase.from('order_items').upsert(itemRows, { onConflict: 'id' });
      }

      return true;
    } catch {
      return false;
    }
  },

  async updateOrderStatus(orderId: string, status: string): Promise<boolean> {
    try {
      const { error } = await supabase.from('orders').update({ status }).eq('id', orderId);
      return !error;
    } catch {
      return false;
    }
  },

  // 4. COUPONS SYNC
  async syncCoupons(coupons: Coupon[]): Promise<boolean> {
    try {
      const rows = coupons.map(c => ({
        code: c.code,
        discount_percent: c.discountPercent || null,
        discount_amount: c.discountAmount || null,
        min_order: c.minOrder || 0,
        description: c.description || '',
        active: true
      }));

      const { error } = await supabase.from('coupons').upsert(rows, { onConflict: 'code' });
      return !error;
    } catch {
      return false;
    }
  },

  // 5. REALTIME LISTENER
  setupRealtimeListeners(callbacks: {
    onProductsChange?: () => void;
    onUsersChange?: () => void;
    onOrdersChange?: () => void;
  }) {
    try {
      const channel = supabase
        .channel('schema-db-changes')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'products' }, () => {
          callbacks.onProductsChange?.();
        })
        .on('postgres_changes', { event: '*', schema: 'public', table: 'users' }, () => {
          callbacks.onUsersChange?.();
        })
        .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, () => {
          callbacks.onOrdersChange?.();
        })
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    } catch {
      return () => {};
    }
  }
};
