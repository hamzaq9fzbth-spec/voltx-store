import { GlobalPaymentMethod } from '../types';

export const GLOBAL_PAYMENT_METHODS: GlobalPaymentMethod[] = [
  // 1. CARDS (Global)
  {
    id: 'card',
    name: 'Credit / Debit Card',
    category: 'cards',
    region: 'Global',
    icon: '💳',
    description: 'Visa, Mastercard, Amex, JCB, UnionPay, RuPay, Elo',
    badge: 'Zero Fee',
    popular: true
  },

  // 2. DIGITAL WALLETS
  {
    id: 'apple_pay',
    name: 'Apple Pay',
    category: 'wallets',
    region: 'Global',
    icon: '🍎',
    description: 'Touch ID / Face ID 1-Tap Checkout',
    badge: 'Instant',
    popular: true
  },
  {
    id: 'google_pay',
    name: 'Google Pay',
    category: 'wallets',
    region: 'Global',
    icon: '🌐',
    description: 'Fast Google Account Express Authorization',
    badge: 'Instant',
    popular: true
  },
  {
    id: 'paypal',
    name: 'PayPal',
    category: 'wallets',
    region: 'Global',
    icon: '🅿️',
    description: 'Buyer Protection & PayPal Wallet balance',
    popular: true
  },
  {
    id: 'alipay',
    name: 'Alipay',
    category: 'wallets',
    region: 'Asia & China',
    icon: '🔵',
    description: 'Direct Alipay barcode & balance transfer'
  },
  {
    id: 'wechat_pay',
    name: 'WeChat Pay',
    category: 'wallets',
    region: 'Asia & China',
    icon: '🟢',
    description: 'Scan QR with WeChat wallet'
  },
  {
    id: 'grabpay',
    name: 'GrabPay',
    category: 'wallets',
    region: 'Southeast Asia',
    icon: '🚗',
    description: 'Singapore, Malaysia, Philippines, Thailand'
  },

  // 3. MIDDLE EAST & GULF NETWORKS (Oman, UAE, KSA, Kuwait, Bahrain, Qatar, Egypt)
  {
    id: 'omannet',
    name: 'OmanNet / Thawani',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲',
    icon: '🇴🇲',
    description: 'Direct Omani Rial debit card & mobile wallet',
    badge: 'Oman Special',
    popular: true
  },
  {
    id: 'mada',
    name: 'Mada Debit',
    category: 'mena_gulf',
    region: 'Saudi Arabia 🇸🇦',
    icon: '🇸🇦',
    description: 'National Saudi payment network debit cards',
    badge: 'KSA Instant'
  },
  {
    id: 'benefit',
    name: 'BENEFIT Pay',
    category: 'mena_gulf',
    region: 'Bahrain 🇧🇭',
    icon: '🇧🇭',
    description: 'Bahrain Electronic Network for Financial Transactions'
  },
  {
    id: 'knet',
    name: 'KNET',
    category: 'mena_gulf',
    region: 'Kuwait 🇰🇼',
    icon: '🇰🇼',
    description: 'Kuwait Shared Electronic Banking Services Company'
  },
  {
    id: 'naps',
    name: 'NAPS (Qatar Pay)',
    category: 'mena_gulf',
    region: 'Qatar 🇶🇦',
    icon: '🇶🇦',
    description: 'National ATM & POS Switch Qatar'
  },
  {
    id: 'fawry',
    name: 'Fawry Pay',
    category: 'mena_gulf',
    region: 'Egypt 🇪🇬',
    icon: '🇪🇬',
    description: 'Electronic wallet & reference code payment'
  },

  // 4. INSTANT BANK & REAL-TIME TRANSFER
  {
    id: 'upi',
    name: 'UPI Instant Pay',
    category: 'instant_bank',
    region: 'India 🇮🇳',
    icon: '🇮🇳',
    description: 'Google Pay UPI, PhonePe, Paytm, BHIM VPA',
    badge: 'Zero Fee',
    popular: true
  },
  {
    id: 'pix',
    name: 'Pix Instantáneo',
    category: 'instant_bank',
    region: 'Brazil 🇧🇷',
    icon: '🇧🇷',
    description: 'Instant Banco Central do Brasil QR & Copy-Paste',
    badge: 'Instant'
  },
  {
    id: 'ideal',
    name: 'iDEAL',
    category: 'instant_bank',
    region: 'Netherlands 🇳🇱',
    icon: '🇳🇱',
    description: 'Direct bank transfer from ABN AMRO, ING, Rabobank'
  },
  {
    id: 'sepa',
    name: 'SEPA Instant Credit',
    category: 'instant_bank',
    region: 'Eurozone 🇪🇺',
    icon: '🇪🇺',
    description: 'Single Euro Payments Area direct account transfer'
  },
  {
    id: 'blik',
    name: 'BLIK',
    category: 'instant_bank',
    region: 'Poland 🇵🇱',
    icon: '🇵🇱',
    description: 'Instant 6-digit mobile banking authorization'
  },
  {
    id: 'sofort',
    name: 'Sofort / Giropay',
    category: 'instant_bank',
    region: 'Germany & Austria 🇩🇪',
    icon: '🇩🇪',
    description: 'Direct online banking authentication'
  },
  {
    id: 'pse',
    name: 'PSE Pagos Seguros',
    category: 'instant_bank',
    region: 'Colombia 🇨🇴',
    icon: '🇨🇴',
    description: 'Proveedor de Servicios Electrónicos direct debit'
  },

  // 5. BUY NOW PAY LATER (BNPL)
  {
    id: 'klarna',
    name: 'Klarna Pay in 4',
    category: 'bnpl',
    region: 'Global & Europe',
    icon: '🛍️',
    description: 'Split into 4 interest-free installments or Pay in 30 days',
    badge: '0% APR',
    popular: true
  },
  {
    id: 'tabby',
    name: 'Tabby (MENA BNPL)',
    category: 'bnpl',
    region: 'Oman, UAE, KSA 🇴🇲🇦🇪🇸🇦',
    icon: '✨',
    description: 'Split your order into 4 monthly payments with 0 interest',
    badge: 'Gulf 0% APR',
    popular: true
  },
  {
    id: 'tamara',
    name: 'Tamara Split Pay',
    category: 'bnpl',
    region: 'Middle East 🇸🇦🇦🇪🇰🇼',
    icon: '💎',
    description: 'Sharia-compliant split in 3 or 4 monthly installments'
  },
  {
    id: 'affirm',
    name: 'Affirm Financing',
    category: 'bnpl',
    region: 'United States 🇺🇸',
    icon: '📊',
    description: 'Flexible monthly installment plans with clear terms'
  },

  // 6. CRYPTOCURRENCY & WEB3
  {
    id: 'crypto_btc',
    name: 'Bitcoin (BTC)',
    category: 'crypto',
    region: 'Global Web3',
    icon: '₿',
    description: 'Native Bitcoin On-Chain / Lightning Network',
    badge: 'Decentralized'
  },
  {
    id: 'crypto_eth',
    name: 'Ethereum (ETH)',
    category: 'crypto',
    region: 'Global Web3',
    icon: 'Ξ',
    description: 'Ethereum ERC-20 / Arbitrum / Base',
    badge: 'Smart Contract'
  },
  {
    id: 'crypto_sol',
    name: 'Solana (SOL)',
    category: 'crypto',
    region: 'Global Web3',
    icon: '☀️',
    description: 'High-speed sub-second transaction settlement'
  },
  {
    id: 'crypto_usdt',
    name: 'USDT / USDC Stablecoin',
    category: 'crypto',
    region: 'Global Web3',
    icon: '💵',
    description: 'Tether & Circle USD 1:1 Pegged on Polygon / TRON / ERC-20',
    popular: true
  }
];
