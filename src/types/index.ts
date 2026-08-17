export type ProductCategory = 
  | 'all' 
  | 'mobiles' 
  | 'chargers' 
  | 'cables' 
  | 'audio' 
  | 'wearables' 
  | 'accessories';

export interface ProductVariant {
  id: string;
  name: string;
  type: 'color' | 'spec' | 'length' | 'storage';
  value: string;
  colorCode?: string;
  priceDelta?: number;
  image?: string;
  inStock: boolean;
}

export interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  helpfulCount: number;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  brand: string;
  category: 'mobiles' | 'chargers' | 'cables' | 'audio' | 'wearables' | 'accessories';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  badge?: string;
  stock: number;
  featured?: boolean;
  flashDeal?: boolean;
  flashDealDiscount?: number;
  specs: Record<string, string>;
  keyFeatures: string[];
  compatibility: string[];
  variants?: ProductVariant[];
  reviews: Review[];
}

export interface CartItem {
  id: string; // unique item id based on product id + variant selections
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSpec?: string;
  selectedLength?: string;
  selectedStorage?: string;
  unitPrice: number;
}

export type CurrencyCode = string;

export interface Currency {
  code: string;
  name: string;
  symbol: string;
  flag: string;
  rate: number; // relative to USD
  region: 'Americas' | 'Europe' | 'Asia Pacific' | 'Middle East' | 'Africa';
}

export interface Coupon {
  code: string;
  discountPercent?: number;
  discountAmount?: number;
  freeShipping?: boolean;
  description: string;
  minOrder?: number;
}

export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  estimatedDays: string;
  price: number;
}

export interface CustomerInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export type PaymentCategory = 
  | 'all'
  | 'cards'
  | 'wallets'
  | 'instant_bank'
  | 'bnpl'
  | 'mena_gulf'
  | 'crypto';

export interface GlobalPaymentMethod {
  id: string;
  name: string;
  category: 'cards' | 'wallets' | 'instant_bank' | 'bnpl' | 'mena_gulf' | 'crypto';
  region: string;
  icon: string;
  description: string;
  badge?: string;
  popular?: boolean;
}

export interface PaymentDetails {
  method: string;
  methodName?: string;
  category?: string;
  cardNumber?: string;
  cardName?: string;
  expiry?: string;
  cvc?: string;
  cardBrand?: string;
  cardLast4?: string;
  upiId?: string;
  bankName?: string;
  cryptoCurrency?: string;
  cryptoNetwork?: string;
  bnplInstallments?: number;
  mobileNumber?: string;
  accountNumber?: string;
  transactionId?: string;
  authCode?: string;
  gatewayResponse?: string;
  ipAddress?: string;
  riskScore?: string;
  processedAt?: string;
}

export interface SavedCard {
  id: string;
  cardNumber: string;
  cardLast4: string;
  cardName: string;
  expiry: string;
  cvc: string;
  cardBrand: string;
  isDefault: boolean;
  cardNickname?: string;
}

export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  avatar?: string;
  phone?: string;
  address?: string;
  apartment?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  savedCards: SavedCard[];
  tier: 'VIP Member' | 'Titanium Pro' | 'Founder Club';
  memberSince: string;
  rewardPoints: number;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  couponCode?: string;
  shipping: ShippingMethod;
  tax: number;
  total: number;
  currencyCode: CurrencyCode;
  currencySymbol: string;
  customer: CustomerInfo;
  payment: PaymentDetails;
  status: 'placed' | 'confirmed' | 'packing' | 'shipping' | 'delivered';
  estimatedDelivery: string;
  trackingNumber: string;
}

export type AppMode = 'storefront' | 'admin';

export type OrderStatus = 'placed' | 'confirmed' | 'packing' | 'shipping' | 'delivered';

export interface AnnouncementConfig {
  message: string;
  badge: string;
  linkText?: string;
  enabled: boolean;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title?: string;
  message: string;
}
