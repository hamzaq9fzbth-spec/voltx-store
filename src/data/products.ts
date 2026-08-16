import { Product, Coupon, ShippingMethod, Currency } from '../types';

export const CURRENCIES: Record<string, Currency> = {
  // Americas
  USD: { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸', rate: 1.0, region: 'Americas' },
  CAD: { code: 'CAD', name: 'Canadian Dollar', symbol: 'CA$', flag: '🇨🇦', rate: 1.38, region: 'Americas' },
  BRL: { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', flag: '🇧🇷', rate: 5.65, region: 'Americas' },
  MXN: { code: 'MXN', name: 'Mexican Peso', symbol: 'Mex$', flag: '🇲🇽', rate: 19.40, region: 'Americas' },
  CLP: { code: 'CLP', name: 'Chilean Peso', symbol: 'CLP$', flag: '🇨🇱', rate: 940.0, region: 'Americas' },
  COP: { code: 'COP', name: 'Colombian Peso', symbol: 'COL$', flag: '🇨🇴', rate: 4120.0, region: 'Americas' },

  // Europe & UK
  EUR: { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺', rate: 0.92, region: 'Europe' },
  GBP: { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧', rate: 0.79, region: 'Europe' },
  CHF: { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', flag: '🇨🇭', rate: 0.88, region: 'Europe' },
  SEK: { code: 'SEK', name: 'Swedish Krona', symbol: 'kr', flag: '🇸🇪', rate: 10.55, region: 'Europe' },
  NOK: { code: 'NOK', name: 'Norwegian Krone', symbol: 'kr', flag: '🇳🇴', rate: 10.75, region: 'Europe' },
  DKK: { code: 'DKK', name: 'Danish Krone', symbol: 'kr', flag: '🇩🇰', rate: 6.88, region: 'Europe' },
  PLN: { code: 'PLN', name: 'Polish Zloty', symbol: 'zł', flag: '🇵🇱', rate: 3.98, region: 'Europe' },
  TRY: { code: 'TRY', name: 'Turkish Lira', symbol: '₺', flag: '🇹🇷', rate: 34.20, region: 'Europe' },

  // Asia & Pacific
  JPY: { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵', rate: 154.50, region: 'Asia Pacific' },
  INR: { code: 'INR', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳', rate: 86.80, region: 'Asia Pacific' },
  CNY: { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', flag: '🇨🇳', rate: 7.24, region: 'Asia Pacific' },
  KRW: { code: 'KRW', name: 'South Korean Won', symbol: '₩', flag: '🇰🇷', rate: 1380.0, region: 'Asia Pacific' },
  AUD: { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺', rate: 1.52, region: 'Asia Pacific' },
  NZD: { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$', flag: '🇳🇿', rate: 1.68, region: 'Asia Pacific' },
  SGD: { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', flag: '🇸🇬', rate: 1.35, region: 'Asia Pacific' },
  HKD: { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$', flag: '🇭🇰', rate: 7.80, region: 'Asia Pacific' },
  TWD: { code: 'TWD', name: 'Taiwan Dollar', symbol: 'NT$', flag: '🇹🇼', rate: 32.10, region: 'Asia Pacific' },
  THB: { code: 'THB', name: 'Thai Baht', symbol: '฿', flag: '🇹🇭', rate: 36.50, region: 'Asia Pacific' },
  IDR: { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp', flag: '🇮🇩', rate: 15800.0, region: 'Asia Pacific' },
  MYR: { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM', flag: '🇲🇾', rate: 4.45, region: 'Asia Pacific' },
  PHP: { code: 'PHP', name: 'Philippine Peso', symbol: '₱', flag: '🇵🇭', rate: 58.50, region: 'Asia Pacific' },
  VND: { code: 'VND', name: 'Vietnamese Dong', symbol: '₫', flag: '🇻🇳', rate: 25200.0, region: 'Asia Pacific' },
  PKR: { code: 'PKR', name: 'Pakistani Rupee', symbol: '₨', flag: '🇵🇰', rate: 278.50, region: 'Asia Pacific' },
  BDT: { code: 'BDT', name: 'Bangladeshi Taka', symbol: '৳', flag: '🇧🇩', rate: 119.50, region: 'Asia Pacific' },

  // Middle East & Africa
  OMR: { code: 'OMR', name: 'Omani Rial', symbol: 'OMR', flag: '🇴🇲', rate: 0.385, region: 'Middle East' },
  AED: { code: 'AED', name: 'UAE Dirham', symbol: 'AED', flag: '🇦🇪', rate: 3.67, region: 'Middle East' },
  SAR: { code: 'SAR', name: 'Saudi Riyal', symbol: 'SAR', flag: '🇸🇦', rate: 3.75, region: 'Middle East' },
  QAR: { code: 'QAR', name: 'Qatari Riyal', symbol: 'QR', flag: '🇶🇦', rate: 3.64, region: 'Middle East' },
  KWD: { code: 'KWD', name: 'Kuwaiti Dinar', symbol: 'KD', flag: '🇰🇼', rate: 0.31, region: 'Middle East' },
  BHD: { code: 'BHD', name: 'Bahraini Dinar', symbol: 'BD', flag: '🇧🇭', rate: 0.376, region: 'Middle East' },
  ILS: { code: 'ILS', name: 'Israeli Shekel', symbol: '₪', flag: '🇮🇱', rate: 3.72, region: 'Middle East' },
  ZAR: { code: 'ZAR', name: 'South African Rand', symbol: 'R', flag: '🇿🇦', rate: 18.10, region: 'Africa' },
  EGP: { code: 'EGP', name: 'Egyptian Pound', symbol: 'E£', flag: '🇪🇬', rate: 48.80, region: 'Africa' },
  NGN: { code: 'NGN', name: 'Nigerian Naira', symbol: '₦', flag: '🇳🇬', rate: 1650.0, region: 'Africa' },
  KES: { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh', flag: '🇰🇪', rate: 129.50, region: 'Africa' }
};

export const AVAILABLE_COUPONS: Coupon[] = [
  {
    code: 'VOLT15',
    discountPercent: 15,
    description: '15% OFF entire tech gadget order'
  },
  {
    code: 'SUPERGAN',
    discountPercent: 20,
    minOrder: 80,
    description: '20% OFF orders over $80 (Power & Chargers special)'
  },
  {
    code: 'FREESHIP',
    freeShipping: true,
    description: 'Free Worldwide Express Shipping on any order'
  },
  {
    code: 'GADGET10',
    discountAmount: 10,
    minOrder: 40,
    description: '$10 instant discount on orders over $40'
  }
];

export const DEFAULT_SHIPPING: ShippingMethod = {
  id: 'standard',
  name: 'Standard Insured Delivery',
  description: 'Order will be delivered within 15 to 25 working days',
  estimatedDays: '15 to 25 Working Days',
  price: 0
};

export const SHIPPING_METHODS: ShippingMethod[] = [DEFAULT_SHIPPING];

export const PRODUCTS: Product[] = [
  // --- MOBILES ---
  {
    id: 'titan-ultra-5g',
    title: 'VOLTX Titan Ultra 5G',
    subtitle: 'Flagship Smartphone with Snapdragon 8 Gen 3 & 200MP Quad Optics',
    brand: 'VOLTX Mobile',
    category: 'mobiles',
    price: 999.00,
    originalPrice: 1199.00,
    rating: 4.9,
    reviewCount: 342,
    badge: 'BEST SELLER',
    stock: 14,
    featured: true,
    flashDeal: true,
    flashDealDiscount: 17,
    images: [
      'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      'Processor': 'Qualcomm Snapdragon 8 Gen 3 (4nm)',
      'Display': '6.8" 120Hz LTPO AMOLED 2600 nits peak',
      'Main Camera': '200MP f/1.7 OIS + 50MP Periscope 5x + 50MP Ultrawide',
      'Battery & Charging': '5,400mAh with 100W Wired & 50W Wireless Charging',
      'Build': 'Grade 5 Aerospace Titanium frame with Gorilla Armor Glass',
      'Water Resistance': 'IP68 certified (up to 2m for 30 min)'
    },
    keyFeatures: [
      'Pro-grade 200MP AI-enhanced computational photography suite',
      '100W HyperCharge powers 0 to 100% in just 23 minutes',
      'Ultra-narrow symmetrical titanium bezels with 120Hz fluid refresh',
      'Integrated Neural Processing Unit for real-time generative voice & camera editing'
    ],
    compatibility: ['5G Sub-6 & mmWave', 'Wi-Fi 7 (802.11be)', 'Bluetooth 5.4', 'eSIM & Dual Nano-SIM'],
    variants: [
      { id: 'v1', name: 'Color', type: 'color', value: 'Obsidian Black', colorCode: '#171717', inStock: true },
      { id: 'v2', name: 'Color', type: 'color', value: 'Titanium Gray', colorCode: '#78716c', inStock: true },
      { id: 'v3', name: 'Color', type: 'color', value: 'Cyber Silver', colorCode: '#cbd5e1', inStock: true },
      { id: 'v4', name: 'Storage', type: 'storage', value: '256GB / 12GB RAM', priceDelta: 0, inStock: true },
      { id: 'v5', name: 'Storage', type: 'storage', value: '512GB / 16GB RAM', priceDelta: 150, inStock: true },
      { id: 'v6', name: 'Storage', type: 'storage', value: '1TB / 16GB RAM', priceDelta: 300, inStock: true }
    ],
    reviews: [
      {
        id: 'r1',
        userName: 'Alex Mercer',
        userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: '2 days ago',
        title: 'Unbelievable camera and insane 100W charging speed!',
        comment: 'I upgraded from last year flagship and the titanium build feels unbelievably premium in hand. The battery lasts almost 2 full days of heavy usage and fills up in 20 mins.',
        verified: true,
        helpfulCount: 48
      },
      {
        id: 'r2',
        userName: 'Samantha Lin',
        userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: '1 week ago',
        title: 'The screen is unmatched in sunlight',
        comment: '2600 nits brightness makes watching videos and reading outside so crisp. Pair this with the 140W GaN charger and you have the dream setup.',
        verified: true,
        helpfulCount: 29
      }
    ]
  },
  {
    id: 'nexus-fold-pro',
    title: 'Nexus Fold Pro X',
    subtitle: 'Zero-Gap Folding Flagship with 7.82" 2K OLED & Stylus Support',
    brand: 'NexusTech',
    category: 'mobiles',
    price: 1599.00,
    originalPrice: 1799.00,
    rating: 4.8,
    reviewCount: 189,
    badge: 'HOT',
    stock: 7,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      'Inner Screen': '7.82" Foldable LTPO OLED 1-120Hz (2440 x 2268)',
      'Outer Screen': '6.31" FHD+ OLED 120Hz Gorilla Glass Victus 2',
      'Hinge': 'FlexiSpine Carbon-Fiber Zero-Gap Hinge (400,000 fold certified)',
      'Chipset': 'Snapdragon 8 Gen 3 for Galaxy (Overclocked)',
      'Weight': '239g ultra-slim profile (5.8mm unfolded)'
    },
    keyFeatures: [
      'Dual multi-tasking workspace with 3 simultaneous split-screen apps',
      'Seamless hinge with virtually invisible crease technology',
      'Triple 50MP Hasselblad-tuned camera system',
      'Wireless reverse charging to juice your earbuds and smartwatch'
    ],
    compatibility: ['All global 5G bands', 'Universal USB-C DisplayPort Out', 'Active Stylus Pen'],
    variants: [
      { id: 'vf1', name: 'Color', type: 'color', value: 'Carbon Matte', colorCode: '#18181b', inStock: true },
      { id: 'vf2', name: 'Color', type: 'color', value: 'Emerald Green', colorCode: '#064e3b', inStock: true },
      { id: 'vf3', name: 'Storage', type: 'storage', value: '512GB / 16GB RAM', priceDelta: 0, inStock: true },
      { id: 'vf4', name: 'Storage', type: 'storage', value: '1TB / 16GB RAM', priceDelta: 200, inStock: true }
    ],
    reviews: [
      {
        id: 'rf1',
        userName: 'David Vance',
        rating: 5,
        date: '3 weeks ago',
        title: 'Productivity monster!',
        comment: 'Having a tablet in my pocket that opens with zero crease has changed the way I work on the go. Multitasking spreadsheets and meetings is super smooth.',
        verified: true,
        helpfulCount: 31
      }
    ]
  },

  // --- CHARGERS & POWER ---
  {
    id: 'volt-gan-140w',
    title: 'VOLTX 140W 4-Port GaN III SuperCharger',
    subtitle: 'Ultra-Compact PD 3.1 Fast Charger for MacBook Pro, Laptops, Phones & Tablets',
    brand: 'VOLTX Power',
    category: 'chargers',
    price: 79.99,
    originalPrice: 99.99,
    rating: 5.0,
    reviewCount: 512,
    badge: '240W GaN',
    stock: 45,
    featured: true,
    flashDeal: true,
    flashDealDiscount: 20,
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      'Total Output': '140W Max Fast Output',
      'Ports': '3x USB-C (PD 3.1 / QC 5) + 1x USB-A (QC 4.0 / SCP 22.5W)',
      'Semiconductor': 'Navitas GaNFast III Gallium Nitride',
      'Protection': 'Dynamic Thermal Guard 3.0 (Monitors temp 3M times/day)',
      'Dimensions': '65 x 65 x 30 mm (40% smaller than OEM chargers)'
    },
    keyFeatures: [
      'Single-port 140W PD 3.1 output charges a 16" MacBook Pro to 55% in 30 mins',
      'Intelligent Power Allocation dynamically balances juice across 4 devices',
      'Foldable prongs + interchangeable EU/UK travel adapter pins included',
      'Universal compatibility across Apple, Samsung, Dell, Lenovo, ASUS & Nintendo Switch'
    ],
    compatibility: ['MacBook Pro / Air', 'iPhone 16 / 15 / 14 Series', 'Samsung Galaxy S24 / S23', 'iPad Pro', 'Steam Deck / ROG Ally'],
    variants: [
      { id: 'cg1', name: 'Color', type: 'color', value: 'Matte Space Gray', colorCode: '#475569', inStock: true },
      { id: 'cg2', name: 'Color', type: 'color', value: 'Glacier White', colorCode: '#f8fafc', inStock: true },
      { id: 'cg3', name: 'Wattage Option', type: 'spec', value: '140W (3C1A)', priceDelta: 0, inStock: true },
      { id: 'cg4', name: 'Wattage Option', type: 'spec', value: '100W (2C1A Slim)', priceDelta: -20, inStock: true },
      { id: 'cg5', name: 'Wattage Option', type: 'spec', value: '65W (2C Ultra Mini)', priceDelta: -40, inStock: true }
    ],
    reviews: [
      {
        id: 'rc1',
        userName: 'Michael Zhang',
        rating: 5,
        date: 'Yesterday',
        title: 'Replaced 4 different bulky bricks in my backpack!',
        comment: 'This is the single best tech accessory I bought this year. It charges my M3 Max MacBook Pro at full speed while also charging my phone and watch without getting burning hot.',
        verified: true,
        helpfulCount: 64
      },
      {
        id: 'rc2',
        userName: 'Elena Rostova',
        rating: 5,
        date: '5 days ago',
        title: 'Compact, robust and super fast',
        comment: 'Premium matte finish and zero coil whine. The intelligent power distribution works seamlessly when plugging in second and third cables.',
        verified: true,
        helpfulCount: 19
      }
    ]
  },
  {
    id: 'titan-power-25k',
    title: 'TitanPower 25,000mAh 100W Laptop Power Bank',
    subtitle: 'High-Capacity Airline-Approved Battery Pack with Smart TFT Display',
    brand: 'VOLTX Power',
    category: 'chargers',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.9,
    reviewCount: 278,
    badge: 'HOT',
    stock: 28,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      'Capacity': '25,000mAh / 92.5Wh (TSA Airline Safe compliant)',
      'Outputs': '2x USB-C (100W + 45W) + 1x USB-A (18W)',
      'Display': 'Full Color TFT Display showing real-time Watts, Volts, Amps & Battery Health',
      'Recharge Time': 'Recharges from 0 to 100% in 1.2 hours with 65W+ input',
      'Cell Type': 'Automotive-grade 21700 Lithium-Ion cells (1000+ cycle life)'
    },
    keyFeatures: [
      'Charges a smartphone 5-6 times or provides a full charge for a 14" laptop',
      'Pass-through charging enables charging the power bank and connected devices simultaneously',
      'Low-current trickle mode for safe charging of wireless earbuds and fitness bands',
      'Flame-retardant aluminum alloy enclosure with active overheat shutdown'
    ],
    compatibility: ['All USB-C PD Laptops', 'iPhones & Androids', 'Drones & Action Cameras', 'Steam Deck'],
    variants: [
      { id: 'tp1', name: 'Color', type: 'color', value: 'Cyber Black & Yellow Accent', colorCode: '#1c1917', inStock: true },
      { id: 'tp2', name: 'Color', type: 'color', value: 'Anodized Silver', colorCode: '#94a3b8', inStock: true }
    ],
    reviews: [
      {
        id: 'rtp1',
        userName: 'Jason Miller',
        rating: 5,
        date: '4 days ago',
        title: 'The screen showing real-time wattage is amazing',
        comment: 'I can see exactly how fast my phone and laptop are drawing power. Kept my laptop going throughout a 10-hour transcontinental flight.',
        verified: true,
        helpfulCount: 37
      }
    ]
  },
  {
    id: 'aura-qi2-3in1',
    title: 'Aura 3-in-1 Foldable MagSafe & Qi2 Charging Station',
    subtitle: '15W Fast Magnetic Wireless Dock for iPhone, Apple Watch & AirPods',
    brand: 'Aura Tech',
    category: 'chargers',
    price: 64.99,
    originalPrice: 79.99,
    rating: 4.8,
    reviewCount: 310,
    badge: 'NEW',
    stock: 35,
    images: [
      'https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      'Wireless Standard': 'Official Qi2 & MagSafe certified 15W peak',
      'Phone Pad': '15W Magnetic Float (Supports StandBy Mode in landscape)',
      'Watch Charger': '5W Fast Wireless Charger for Apple Watch Series & Ultra',
      'Base Pad': '5W Wireless Qi pad for AirPods / Galaxy Buds',
      'Fold Mechanism': '180° Origami folding design for ultra-flat travel'
    },
    keyFeatures: [
      'Strong N52 neodymium magnets hold heavy phones securely in portrait or landscape',
      'StandBy mode compatible — turns your phone into a bedside alarm clock while charging',
      'Weighs only 160g and folds down to the size of a wallet',
      'Includes 30W USB-C PD brick and braided 1.5m cable in the box'
    ],
    compatibility: ['iPhone 12 through 16 series', 'MagSafe Cases', 'Apple Watch Ultra/Series 9/8', 'AirPods Pro/3'],
    variants: [
      { id: 'aq1', name: 'Color', type: 'color', value: 'Midnight Slate', colorCode: '#1e293b', inStock: true },
      { id: 'aq2', name: 'Color', type: 'color', value: 'Pearl White', colorCode: '#f1f5f9', inStock: true }
    ],
    reviews: [
      {
        id: 'raq1',
        userName: 'Chloe Bennett',
        rating: 5,
        date: '1 week ago',
        title: 'Perfect bedside stand!',
        comment: 'No more tangled cords on my nightstand. The magnetic snap is super strong and fast charging works like a charm.',
        verified: true,
        helpfulCount: 22
      }
    ]
  },

  // --- CABLES & HUBS ---
  {
    id: 'hyperarmor-240w-cable',
    title: 'HyperArmor 240W Kevlar-Braided USB-C to USB-C Cable',
    subtitle: 'Heavy-Duty 48V/5A PD 3.1 Fast Charging Cable with E-Marker Chip',
    brand: 'VOLTX Cables',
    category: 'cables',
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.9,
    reviewCount: 684,
    badge: 'BEST SELLER',
    stock: 120,
    featured: true,
    flashDeal: true,
    flashDealDiscount: 33,
    images: [
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      'Max Power': '240W Extended Power Range (48V / 5A) USB PD 3.1',
      'Data Transfer': '480 Mbps high-speed data sync',
      'Core Wire': 'Tinned oxygen-free copper core + ballistic DuPont Kevlar reinforcement',
      'Connector': 'Zinc alloy unibody shell with 24K gold-plated pins',
      'Durability': '35,000+ 90-degree bend lifespan test certified'
    },
    keyFeatures: [
      'Future-proof 240W power handles high-spec gaming laptops, phones and power banks',
      'Built-in smart E-Marker chip regulates voltage and prevents overcharging or heat spikes',
      'Tangle-free high-density ballistic nylon braided jacket resists pet bites and fraying',
      'Includes silicone cable organizer strap with every unit'
    ],
    compatibility: ['All USB-C laptops, tablets, smartphones & gaming consoles'],
    variants: [
      { id: 'ha1', name: 'Length', type: 'length', value: '1 Meter (3.3ft)', priceDelta: 0, inStock: true },
      { id: 'ha2', name: 'Length', type: 'length', value: '2 Meters (6.6ft)', priceDelta: 4, inStock: true },
      { id: 'ha3', name: 'Length', type: 'length', value: '3 Meters (10ft)', priceDelta: 8, inStock: true },
      { id: 'ha4', name: 'Color', type: 'color', value: 'Stealth Black', colorCode: '#18181b', inStock: true },
      { id: 'ha5', name: 'Color', type: 'color', value: 'Electric Cyan & Gray', colorCode: '#06b6d4', inStock: true }
    ],
    reviews: [
      {
        id: 'rha1',
        userName: 'Marcus Cole',
        rating: 5,
        date: '3 days ago',
        title: 'Built like an absolute tank',
        comment: 'I usually ruin cables within 3 months, but this Kevlar braid is indestructible. Easily pushes full 140W to my laptop with no warming.',
        verified: true,
        helpfulCount: 52
      }
    ]
  },
  {
    id: 'thunderbolt-4-pro-cable',
    title: 'Thunderbolt 4 Pro 40Gbps 8K Ultra Cable',
    subtitle: 'Intel Certified 40Gbps Data, 100W PD & Dual 4K/Single 8K Display Output',
    brand: 'VOLTX Cables',
    category: 'cables',
    price: 39.99,
    originalPrice: 49.99,
    rating: 5.0,
    reviewCount: 198,
    badge: 'NEW',
    stock: 42,
    images: [
      'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      'Protocol': 'Thunderbolt 4 / USB4 / Thunderbolt 3 backward compatible',
      'Bandwidth': 'Up to 40Gbps ultra-high throughput (Transfer 4K movie in 5 seconds)',
      'Video Support': 'Single 8K@60Hz or Dual 4K@120Hz monitor streaming',
      'Power Delivery': '100W (20V/5A) Power Delivery charging',
      'Length': '1.2 Meters / 4 Feet braided'
    },
    keyFeatures: [
      'Intel Thunderbolt 4 official certification badge for zero latency video',
      'Daisy-chain up to 6 Thunderbolt accessories seamlessly',
      'Aluminum casing with laser-etched 40Gbps speed indicator',
      'Zero frame drops when connecting high-speed NVMe SSD enclosures and eGPUs'
    ],
    compatibility: ['Thunderbolt 4 & 3 Macs, Windows PCs, iPad Pro, Studio Displays, External GPUs'],
    variants: [
      { id: 'tb1', name: 'Length', type: 'length', value: '1.2m (4ft)', priceDelta: 0, inStock: true },
      { id: 'tb2', name: 'Length', type: 'length', value: '2.0m (6.6ft Active)', priceDelta: 20, inStock: true }
    ],
    reviews: [
      {
        id: 'rtb1',
        userName: 'Daniel K.',
        rating: 5,
        date: '2 weeks ago',
        title: 'Powers my dual 4K Studio Display setup flawlessly',
        comment: 'Crisp display with zero flicker and super fast NVMe read/write speeds over 2800 MB/s. Worth every dollar.',
        verified: true,
        helpfulCount: 18
      }
    ]
  },
  {
    id: 'nexus-dock-10in1',
    title: 'NexusDock 10-in-1 Dual 4K Aluminum Hub',
    subtitle: 'Dual HDMI 4K@60Hz, 100W PD Pass-Through, Gigabit LAN, 3x USB 3.2 & SD/TF Slot',
    brand: 'NexusTech',
    category: 'cables',
    price: 69.99,
    originalPrice: 89.99,
    rating: 4.8,
    reviewCount: 340,
    badge: 'HOT',
    stock: 24,
    images: [
      'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      'Video Ports': '2x HDMI 2.0 (Dual 4K@60Hz Extended Display)',
      'Charging': 'USB-C PD 100W input (85W clean laptop delivery)',
      'Data Ports': '3x USB-A 3.2 Gen 2 (10Gbps) + 1x USB-C 3.2 Gen 2 (10Gbps)',
      'Card Reader': 'UHS-I SD & MicroSD (104 MB/s simultaneous read)',
      'Network': '1000Mbps RJ45 Gigabit Ethernet port'
    },
    keyFeatures: [
      'Unibody CNC machined heat-dissipating space aluminum frame',
      'Plug-and-play driverless connectivity on macOS, Windows, Linux, iPadOS, ChromeOS',
      'Smart thermal layout prevents interference between 2.4GHz Wi-Fi and Bluetooth',
      'Braided reinforced integrated 20cm host cable with aluminum strain relief'
    ],
    compatibility: ['MacBook Pro / Air, Dell XPS, ThinkPad, Surface Pro, iPad Pro, Steam Deck'],
    variants: [
      { id: 'nd1', name: 'Color', type: 'color', value: 'Space Gray', colorCode: '#475569', inStock: true },
      { id: 'nd2', name: 'Color', type: 'color', value: 'Silver Anodized', colorCode: '#cbd5e1', inStock: true }
    ],
    reviews: [
      {
        id: 'rnd1',
        userName: 'Rachel Foster',
        rating: 5,
        date: '5 days ago',
        title: 'Clean desk setup in one single cable',
        comment: 'Plug my laptop in and immediately have dual screens, wired gigabit ethernet, mouse, keyboard and audio ready. Runs cool to the touch.',
        verified: true,
        helpfulCount: 27
      }
    ]
  },

  // --- AUDIO GEAR ---
  {
    id: 'sonic-spatial-anc',
    title: 'VOLTX Sonic Spatial Over-Ear ANC Headphones',
    subtitle: 'Custom 45mm Graphene Drivers with 50dB Hybrid Active Noise Cancelling & 65H Battery',
    brand: 'VOLTX Audio',
    category: 'audio',
    price: 189.99,
    originalPrice: 249.99,
    rating: 4.9,
    reviewCount: 420,
    badge: 'BEST SELLER',
    stock: 19,
    featured: true,
    flashDeal: true,
    flashDealDiscount: 24,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      'Acoustic Driver': '45mm Diamond-Like Carbon Graphene diaphragm',
      'ANC Rating': 'Adaptive Hybrid ANC up to -50dB with 4 external beamforming mics',
      'Codec Support': 'LDAC (Hi-Res Audio 990kbps), AAC, aptX Adaptive, SBC',
      'Battery Life': '65 Hours (ANC Off) / 45 Hours (ANC On) + 10 min charge gives 5 hours',
      'Earcups': 'Memory foam with ultra-soft breathable protein leather'
    },
    keyFeatures: [
      'Spatial 360° dynamic head tracking for immersive concert-like acoustic soundstage',
      'Transparency Mode automatically dials in ambient voices when you begin speaking',
      'Seamless multi-point Bluetooth 5.4 connection to switch between phone and laptop',
      'Custom EQ equalizer companion profiles (Bass Boost, Vocal Clarity, Studio Flat)'
    ],
    compatibility: ['iOS, Android, Windows, macOS, smart TVs and gaming rigs'],
    variants: [
      { id: 'ss1', name: 'Color', type: 'color', value: 'Obsidian Matte', colorCode: '#18181b', inStock: true },
      { id: 'ss2', name: 'Color', type: 'color', value: 'Cream Gold', colorCode: '#fef08a', inStock: true },
      { id: 'ss3', name: 'Color', type: 'color', value: 'Navy Slate', colorCode: '#1e3a8a', inStock: true }
    ],
    reviews: [
      {
        id: 'rss1',
        userName: 'Liam Thorne',
        rating: 5,
        date: '3 days ago',
        title: 'Outperforms my $350 headphones in both ANC and comfort',
        comment: 'The noise cancellation completely blocks out train and office noise. The bass is punchy without overpowering the vocals. 10/10.',
        verified: true,
        helpfulCount: 45
      }
    ]
  },
  {
    id: 'apex-buds-pro',
    title: 'Apex Pro Low-Latency Wireless Gaming Earbuds',
    subtitle: '35ms Ultra Low Latency with Dual-Mode Bluetooth 5.4 & 2.4Ghz USB-C Dongle',
    brand: 'Apex Audio',
    category: 'audio',
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviewCount: 165,
    badge: 'HOT',
    stock: 31,
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      'Latency': '35ms with dedicated USB-C wireless RF transceiver',
      'Drivers': '12mm Composite Titanium Diaphragms',
      'Microphone': '4-mic ENC AI Environmental Noise Cancellation',
      'Battery': '8 Hours playback + 28 hours charging case (Fast USB-C & Qi Wireless)',
      'Water Rating': 'IPX5 sweat and splash resistance'
    },
    keyFeatures: [
      'Includes snap-in low-profile USB-C 2.4GHz dongle stored directly inside charging case',
      'Dual-stream mode allows listening to game audio while answering Bluetooth calls',
      'Cyberpunk LED battery indicator on the case with breathing lighting effects'
    ],
    compatibility: ['PS5, Nintendo Switch, Steam Deck, PC, iOS, Android'],
    variants: [
      { id: 'ab1', name: 'Color', type: 'color', value: 'Stealth Cyber Black', colorCode: '#111827', inStock: true },
      { id: 'ab2', name: 'Color', type: 'color', value: 'Neon Arctic White', colorCode: '#f8fafc', inStock: true }
    ],
    reviews: [
      {
        id: 'rab1',
        userName: 'Zack Evans',
        rating: 5,
        date: '1 week ago',
        title: 'Zero audio lag on Steam Deck and PS5',
        comment: 'The 2.4GHz dongle plugged right into my handheld and the gunshot sync is instantaneous. Highly recommended for mobile gamers.',
        verified: true,
        helpfulCount: 20
      }
    ]
  },

  // --- WEARABLES & GADGETS ---
  {
    id: 'chrono-titanium-ultra',
    title: 'Chrono Ultra Titanium Smartwatch',
    subtitle: 'Aerospace Titanium Case with Sapphire Crystal, Dual GPS & 14-Day Battery',
    brand: 'VOLTX Wear',
    category: 'wearables',
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.9,
    reviewCount: 288,
    badge: 'BEST SELLER',
    stock: 16,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      'Case': '49mm Grade 5 Titanium with tactile knurled rotary crown',
      'Display': '1.43" AMOLED 466x466 with 1500 nits Always-On brightness',
      'Sensors': 'Biometric 8-channel ECG, Optical Heart Rate, SpO2, Skin Temp & Compass',
      'Battery': '14-day standard battery life / 60-hour precision multi-band GPS mode',
      'Waterproof': '10ATM (100 meters dive & open water swim rated)'
    },
    keyFeatures: [
      'Dual-frequency L1 + L5 GPS ensures pinpoint route tracking through dense forests & cities',
      'Full offline topography maps with route backtrack safety guidance',
      'Bluetooth phone calls and quick text replies directly on wrist',
      'Comes with interchangeable Rugged Ocean Trail & Magnetic Milanese bands'
    ],
    compatibility: ['Apple iOS 14+ & Android 9.0+ via VOLTX Health Companion app'],
    variants: [
      { id: 'cw1', name: 'Case Finish', type: 'color', value: 'Raw Titanium', colorCode: '#78716c', inStock: true },
      { id: 'cw2', name: 'Case Finish', type: 'color', value: 'DLC Stealth Black', colorCode: '#18181b', inStock: true },
      { id: 'cw3', name: 'Strap Type', type: 'spec', value: 'Orange Ocean Band', priceDelta: 0, inStock: true },
      { id: 'cw4', name: 'Strap Type', type: 'spec', value: 'Titanium Link Bracelet', priceDelta: 40, inStock: true }
    ],
    reviews: [
      {
        id: 'rcw1',
        userName: 'Tom Bradley',
        rating: 5,
        date: '4 days ago',
        title: 'Insane 14-day battery and scratch-proof sapphire',
        comment: 'I can finally go on weekend camping trips without carrying yet another charger. The GPS maps and heart rate tracking are extremely accurate.',
        verified: true,
        helpfulCount: 39
      }
    ]
  },
  {
    id: 'aura-health-ring',
    title: 'Aura Smart Sleep & Recovery Ring',
    subtitle: 'Ultralight Titanium Health Tracker with 24/7 HRV, Skin Temp & Sleep Stages',
    brand: 'Aura Tech',
    category: 'wearables',
    price: 179.99,
    originalPrice: 219.99,
    rating: 4.8,
    reviewCount: 145,
    badge: 'NEW',
    stock: 22,
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      'Weight': 'Just 2.9 grams (Comfortable 24/7 continuous wear)',
      'Sensors': 'Research-grade Photoplethysmography (PPG), NTC temp sensor & 3D accelerometer',
      'Battery Life': '7 days on single 45-minute charge via magnetic charging cradle',
      'Water Rating': 'IP68 & 100m water resistance (wear in shower, sauna or swimming)'
    },
    keyFeatures: [
      'Zero monthly subscriptions — full access to all sleep and recovery analytics',
      'Detects REM, Deep, Light sleep, naps, and night-time breathing irregularities',
      'Daily Readiness Score provides smart actionable advice on exertion vs recovery'
    ],
    compatibility: ['iOS HealthKit & Google Fit integration'],
    variants: [
      { id: 'ar1', name: 'Color', type: 'color', value: 'Brushed Gold', colorCode: '#eab308', inStock: true },
      { id: 'ar2', name: 'Color', type: 'color', value: 'Stealth Black', colorCode: '#18181b', inStock: true },
      { id: 'ar3', name: 'Color', type: 'color', value: 'Sterling Silver', colorCode: '#e2e8f0', inStock: true },
      { id: 'ar4', name: 'Ring Size', type: 'spec', value: 'Size US 8', priceDelta: 0, inStock: true },
      { id: 'ar5', name: 'Ring Size', type: 'spec', value: 'Size US 9', priceDelta: 0, inStock: true },
      { id: 'ar6', name: 'Ring Size', type: 'spec', value: 'Size US 10', priceDelta: 0, inStock: true },
      { id: 'ar7', name: 'Ring Size', type: 'spec', value: 'Size US 11', priceDelta: 0, inStock: true }
    ],
    reviews: [
      {
        id: 'rar1',
        userName: 'Victoria S.',
        rating: 5,
        date: '1 week ago',
        title: 'I forget I am even wearing it!',
        comment: 'So much more comfortable to sleep with than a bulky watch. The recovery scores pinpointed why I was feeling sluggish after late meals.',
        verified: true,
        helpfulCount: 23
      }
    ]
  },

  // --- ACCESSORIES & DESK GEAR ---
  {
    id: 'lumidesk-lightbar',
    title: 'LumiDesk RGB ScreenBar & Ambient Monitor Lamp',
    subtitle: 'Asymmetric Optical Glare-Free Task Light with Wireless Rotary Control Puck',
    brand: 'VOLTX Desk',
    category: 'accessories',
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.9,
    reviewCount: 390,
    badge: 'HOT',
    stock: 50,
    images: [
      'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      'Lighting Tech': 'Asymmetric 45° forward light beam (0% screen reflection/glare)',
      'Color Temp': 'Stepless 2700K Warm to 6500K Cool White (Ra > 97 CRI)',
      'Backlight': '16 Million RGB dynamic ambient light modes with music rhythm sync',
      'Controls': '2.4GHz Wireless Smart Desktop Dial Controller',
      'Power': 'USB-C 5V/2A powered directly from monitor or PC hub'
    },
    keyFeatures: [
      'Eliminates eye strain during late night coding, gaming or creative sessions',
      'Counterweighted gravity clip fits flat, curved, and ultra-wide gaming monitors without tape',
      'Wireless desktop puck lets you rotate to dim and double-tap to switch RGB modes'
    ],
    compatibility: ['Fits monitors 0.5cm to 4.5cm thick, flat & 1000R-1800R curved screens'],
    variants: [
      { id: 'ld1', name: 'Housing Color', type: 'color', value: 'Anodized Black', colorCode: '#1c1917', inStock: true },
      { id: 'ld2', name: 'Housing Color', type: 'color', value: 'Silver Frost', colorCode: '#e2e8f0', inStock: true }
    ],
    reviews: [
      {
        id: 'rld1',
        userName: 'Chris Morgan',
        rating: 5,
        date: '5 days ago',
        title: 'Eye strain vanished completely',
        comment: 'The lighting focuses perfectly on my keyboard and desk without any glare on my 34 inch ultrawide. The wireless knob controller is super satisfying.',
        verified: true,
        helpfulCount: 34
      }
    ]
  },
  {
    id: 'magsafe-origami-wallet',
    title: 'MagStand Origami Magnetic Wallet & Phone Stand',
    subtitle: 'Precision Snap-On 3-Card Holder with Floating Multi-Angle Stand Capability',
    brand: 'Aura Tech',
    category: 'accessories',
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.7,
    reviewCount: 215,
    badge: 'NEW',
    stock: 65,
    images: [
      'https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      'Capacity': 'Holds 1 to 3 RFID shielded credit/ID cards securely',
      'Stand Angles': 'Floating Mode, 60° Portrait, and 45° Landscape',
      'Material': 'Scratch-resistant vegan MOVAS leather with steel hinges',
      'Magnets': 'Dual-layer N52 magnets with 3x standard magnetic grip strength'
    },
    keyFeatures: [
      'Instantly snaps onto the back of any MagSafe iPhone or magnetic case',
      'Folds flat to only 4.5mm thickness when slipped into pockets',
      'Built-in RFID blocking sheet protects against unauthorized card skims'
    ],
    compatibility: ['iPhone 12 to 16, MagSafe cases, and Android magnetic rings'],
    variants: [
      { id: 'mw1', name: 'Color', type: 'color', value: 'Carbon Black', colorCode: '#18181b', inStock: true },
      { id: 'mw2', name: 'Color', type: 'color', value: 'Caramel Brown', colorCode: '#78350f', inStock: true },
      { id: 'mw3', name: 'Color', type: 'color', value: 'Deep Navy', colorCode: '#1e3a8a', inStock: true }
    ],
    reviews: [
      {
        id: 'rmw1',
        userName: 'Sarah Jenkins',
        rating: 5,
        date: '2 weeks ago',
        title: 'Strongest magnetic wallet I have tried',
        comment: 'Does not slide off when putting phone in tight jeans. The origami stand is so useful for FaceTime calls and YouTube.',
        verified: true,
        helpfulCount: 16
      }
    ]
  }
];

// Tech Bundle preset for "Frequently Bought Together"
export const TECH_BUNDLE_DEAL = {
  id: 'fast-charging-ecosystem-bundle',
  title: 'Ultimate Fast-Charging Ecosystem Bundle',
  description: 'Combine the 140W GaN SuperCharger + 240W Kevlar Braided Cable + MagSafe 3-in-1 Foldable Dock and save 25% instantly!',
  productIds: ['volt-gan-140w', 'hyperarmor-240w-cable', 'aura-qi2-3in1'],
  bundleDiscountPercent: 25
};
