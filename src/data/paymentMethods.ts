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

  // 2. OMAN DIGITAL WALLETS & MOBILE PAYMENT SERVICES
  {
    id: 'ompay',
    name: 'OMPAY Wallet',
    category: 'wallets',
    region: 'Oman 🇴🇲',
    icon: '📱',
    description: 'OMPAY CBO-Licensed mobile wallet & QR payment service',
    badge: 'Oman Certified',
    popular: true
  },
  {
    id: 'thawani',
    name: 'Thawani Pay',
    category: 'wallets',
    region: 'Oman 🇴🇲',
    icon: '⚡',
    description: 'Thawani digital wallet ecosystem & merchant payment platform',
    badge: 'Oman Special',
    popular: true
  },
  {
    id: 'omannet',
    name: 'OmanNet / QR Switch',
    category: 'wallets',
    region: 'Oman 🇴🇲',
    icon: '🇴🇲',
    description: 'National Central Bank of Oman (CBO) switch & QR Pay',
    badge: 'National Switch',
    popular: true
  },
  {
    id: 'bm_wallet',
    name: 'Bank Muscat BM Wallet',
    category: 'wallets',
    region: 'Oman 🇴🇲',
    icon: '🏛️',
    description: 'Bank Muscat mobile banking & merchant QR transfer',
    badge: 'Instant OMR',
    popular: true
  },
  {
    id: 'nbo_pay',
    name: 'NBO Pay (National Bank of Oman)',
    category: 'wallets',
    region: 'Oman 🇴🇲',
    icon: '📲',
    description: 'NBO digital wallet & instant account debit service',
    badge: 'CBO Licensed'
  },
  {
    id: 'sohar_pay',
    name: 'Sohar Pay (Sohar International)',
    category: 'wallets',
    region: 'Oman 🇴🇲',
    icon: '💳',
    description: 'Sohar International direct mobile payment switch',
    badge: 'CBO Licensed'
  },
  {
    id: 'apple_pay',
    name: 'Apple Pay',
    category: 'wallets',
    region: 'Global & GCC',
    icon: '🍎',
    description: 'Touch ID / Face ID 1-Tap Checkout',
    badge: 'Instant',
    popular: true
  },
  {
    id: 'google_pay',
    name: 'Google Pay',
    category: 'wallets',
    region: 'Global & GCC',
    icon: '🌐',
    description: 'Fast Google Account Express Authorization',
    badge: 'Instant',
    popular: true
  },
  {
    id: 'easypaisa',
    name: 'Easypaisa Mobile Wallet',
    category: 'wallets',
    region: 'Regional & Pakistan',
    icon: '🟢',
    description: 'Direct mobile wallet account transfer',
    popular: true
  },
  {
    id: 'jazzcash',
    name: 'JazzCash Wallet',
    category: 'wallets',
    region: 'Regional & Pakistan',
    icon: '🔴',
    description: 'Direct mobile wallet number transfer',
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

  // 3. LICENSED BANKS IN OMAN (CBO OFFICIAL INSTITUTIONS)
  // Major Omani Local Banks
  {
    id: 'bank_muscat',
    name: 'Bank Muscat (بنك مسقط)',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲',
    icon: '🏦',
    description: 'Largest Bank in Oman • Direct Account & Card Debit (CBO)',
    badge: 'Top Oman Bank',
    popular: true
  },
  {
    id: 'bank_dhofar',
    name: 'Bank Dhofar (بنك ظفار)',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲',
    icon: '🏦',
    description: 'Major Omani commercial bank • Direct account checkout',
    badge: 'CBO Licensed',
    popular: true
  },
  {
    id: 'bank_nbo',
    name: 'National Bank of Oman - NBO (البنك الوطني العماني)',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲',
    icon: '🏦',
    description: 'First local commercial bank in Oman • Instant settlement',
    badge: 'CBO Licensed',
    popular: true
  },
  {
    id: 'bank_oab',
    name: 'Oman Arab Bank - OAB (بنك عمان العربي)',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲',
    icon: '🏦',
    description: 'OAB digital banking direct transfer and card debit',
    badge: 'CBO Licensed',
    popular: true
  },
  {
    id: 'bank_sohar',
    name: 'Sohar International (صحار الدولي)',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲',
    icon: '🏦',
    description: 'Sohar International premier direct banking checkout',
    badge: 'CBO Licensed',
    popular: true
  },
  {
    id: 'bank_ahli',
    name: 'Ahli Bank (البنك الأهلي)',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲',
    icon: '🏦',
    description: 'Ahli Bank Oman direct debit and net banking',
    badge: 'CBO Licensed'
  },
  {
    id: 'bank_nizwa',
    name: 'Bank Nizwa (بنك نزوى)',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲',
    icon: '🕌',
    description: 'First dedicated Islamic Bank in Oman • Sharia compliant',
    badge: 'Islamic Bank',
    popular: true
  },
  {
    id: 'bank_alizz',
    name: 'Alizz Islamic Bank (بنك العز الإسلامي)',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲',
    icon: '🕌',
    description: 'Full-fledged Islamic Banking services in Oman',
    badge: 'Islamic Bank'
  },
  {
    id: 'bank_ohb',
    name: 'Oman Housing Bank (بنك الإسكان العماني)',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲',
    icon: '🏠',
    description: 'Specialized Omani financial institution',
    badge: 'CBO Licensed'
  },
  {
    id: 'bank_odb',
    name: 'Oman Development Bank (بنك التنمية العماني)',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲',
    icon: '📈',
    description: 'Specialized development banking in Sultanate of Oman',
    badge: 'CBO Licensed'
  },

  // Foreign & International Banks in Oman
  {
    id: 'bank_hsbc_oman',
    name: 'HSBC Oman',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲 / Global',
    icon: '🌍',
    description: 'HSBC international banking network in Oman',
    badge: 'International'
  },
  {
    id: 'bank_scb_oman',
    name: 'Standard Chartered Bank Oman',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲 / UK',
    icon: '🌍',
    description: 'Standard Chartered Bank licensed branch in Oman',
    badge: 'International'
  },
  {
    id: 'bank_fab_oman',
    name: 'First Abu Dhabi Bank - FAB (بنك أبوظبي الأول)',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲 / UAE',
    icon: '🇦🇪',
    description: 'FAB Oman licensed international banking service',
    badge: 'GCC Bank'
  },
  {
    id: 'bank_qnb_oman',
    name: 'Qatar National Bank - QNB (بنك قطر الوطني)',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲 / Qatar',
    icon: '🇶🇦',
    description: 'QNB Oman direct debit and net banking',
    badge: 'GCC Bank'
  },
  {
    id: 'bank_sbi_oman',
    name: 'State Bank of India - SBI Oman',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲 / India',
    icon: '🇮🇳',
    description: 'SBI licensed banking branch in Sultanate of Oman',
    badge: 'International'
  },
  {
    id: 'bank_baroda_oman',
    name: 'Bank of Baroda Oman',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲 / India',
    icon: '🇮🇳',
    description: 'Bank of Baroda licensed operations in Oman',
    badge: 'International'
  },
  {
    id: 'bank_beirut_oman',
    name: 'Bank of Beirut Oman',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲 / Lebanon',
    icon: '🇱🇧',
    description: 'Bank of Beirut licensed banking services in Oman',
    badge: 'International'
  },
  {
    id: 'bank_melli_oman',
    name: 'Bank Melli Iran Oman',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲',
    icon: '🏦',
    description: 'Bank Melli licensed branch in Sultanate of Oman',
    badge: 'Licensed Branch'
  },
  {
    id: 'bank_saderat_oman',
    name: 'Bank Saderat Iran Oman',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲',
    icon: '🏦',
    description: 'Bank Saderat licensed branch in Sultanate of Oman',
    badge: 'Licensed Branch'
  },
  {
    id: 'bank_hbl_oman',
    name: 'Habib Bank Limited - HBL Oman',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲 / Pakistan',
    icon: '🇵🇰',
    description: 'HBL international licensed banking branches in Oman',
    badge: 'International',
    popular: true
  },
  {
    id: 'bank_mashreq_oman',
    name: 'Mashreq Bank Oman (بنك المشرق)',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲 / UAE',
    icon: '🇦🇪',
    description: 'Mashreq Bank digital banking and card checkout in Oman',
    badge: 'GCC Bank'
  },
  {
    id: 'bank_gib_oman',
    name: 'Gulf International Bank - GIB',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲 / GCC',
    icon: '🌐',
    description: 'GIB wholesale & commercial banking services in Oman',
    badge: 'GCC Bank'
  },
  {
    id: 'bank_oib_oman',
    name: 'Oman Investment Bank (بنك عمان للاستثمار)',
    category: 'mena_gulf',
    region: 'Oman 🇴🇲',
    icon: '💎',
    description: 'First specialized corporate & investment bank in Oman',
    badge: 'Specialized'
  },

  // Other GCC Networks
  {
    id: 'mada',
    name: 'Mada Debit (Saudi Arabia)',
    category: 'mena_gulf',
    region: 'Saudi Arabia 🇸🇦',
    icon: '🇸🇦',
    description: 'National Saudi payment network debit cards',
    badge: 'KSA Instant'
  },
  {
    id: 'benefit',
    name: 'BENEFIT Pay (Bahrain)',
    category: 'mena_gulf',
    region: 'Bahrain 🇧🇭',
    icon: '🇧🇭',
    description: 'Bahrain Electronic Network for Financial Transactions'
  },
  {
    id: 'knet',
    name: 'KNET (Kuwait)',
    category: 'mena_gulf',
    region: 'Kuwait 🇰🇼',
    icon: '🇰🇼',
    description: 'Kuwait Shared Electronic Banking Services Company'
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
