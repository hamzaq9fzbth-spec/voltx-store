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

  // 1. PRODUCTS SYNC
  async syncProducts(products: Product[]): Promise<boolean> {
    try {
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

  // 2. USERS & CARDS SYNC
  async syncUser(user: UserProfile): Promise<boolean> {
    try {
      // Upsert User
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

      // Upsert Cards Vault
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

  // 3. ORDERS SYNC
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

      // Line items
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
  }
};
