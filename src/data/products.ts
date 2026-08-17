import { Product, Currency, Coupon, ShippingMethod } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    "id": "phone_iphone-17-pro-max",
    "title": "Apple iPhone 17 Pro Max",
    "subtitle": "A19 Pro Silicon • 6.9\" ProMotion OLED • 48MP Quad-Prism • Titanium",
    "brand": "Apple",
    "category": "mobiles",
    "price": 1166.23,
    "originalPrice": 1423,
    "rating": 4.8,
    "reviewCount": 24,
    "images": [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "HOT",
    "stock": 12,
    "featured": true,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "449.000 OMR",
      "Model Series": "iPhone 17 Pro Max",
      "Brand": "Apple",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Apple iPhone 17 Pro Max",
      "A19 Pro Silicon • 6.9\" ProMotion OLED • 48MP Quad-Prism • Titanium",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_iphone-17-pro-max_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 449 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_iphone-17",
    "title": "Apple iPhone 17",
    "subtitle": "A19 Bionic Silicon • Camera Control • Dynamic Island • 48MP Dual Fusion",
    "brand": "Apple",
    "category": "mobiles",
    "price": 958.44,
    "originalPrice": 1169,
    "rating": 4.8999999999999995,
    "reviewCount": 31,
    "images": [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "NEW",
    "stock": 16,
    "featured": true,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "369.000 OMR",
      "Model Series": "iPhone 17",
      "Brand": "Apple",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Apple iPhone 17",
      "A19 Bionic Silicon • Camera Control • Dynamic Island • 48MP Dual Fusion",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_iphone-17_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 369 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_iphone-16-pro-max",
    "title": "Apple iPhone 16 Pro Max",
    "subtitle": "A18 Pro 3nm Silicon • 6.9\" Super Retina XDR • 4K 120fps Dolby Vision",
    "brand": "Apple",
    "category": "mobiles",
    "price": 1090.91,
    "originalPrice": 1331,
    "rating": 5,
    "reviewCount": 38,
    "images": [
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "BEST SELLER",
    "stock": 20,
    "featured": true,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "420.000 OMR",
      "Model Series": "iPhone 16 Pro Max",
      "Brand": "Apple",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Apple iPhone 16 Pro Max",
      "A18 Pro 3nm Silicon • 6.9\" Super Retina XDR • 4K 120fps Dolby Vision",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_iphone-16-pro-max_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 420 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_iphone-16-pro",
    "title": "Apple iPhone 16 Pro",
    "subtitle": "A18 Pro Silicon • 6.3\" ProMotion OLED • Grade 5 Titanium Frame",
    "brand": "Apple",
    "category": "mobiles",
    "price": 987.01,
    "originalPrice": 1204,
    "rating": 4.8,
    "reviewCount": 45,
    "images": [
      "https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "FLAGSHIP",
    "stock": 24,
    "featured": true,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "380.000 OMR",
      "Model Series": "iPhone 16 Pro",
      "Brand": "Apple",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Apple iPhone 16 Pro",
      "A18 Pro Silicon • 6.3\" ProMotion OLED • Grade 5 Titanium Frame",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_iphone-16-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 380 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_iphone-16-plus",
    "title": "Apple iPhone 16 Plus",
    "subtitle": "A18 Chip • 6.7\" OLED • Action Button • Super Retina XDR",
    "brand": "Apple",
    "category": "mobiles",
    "price": 896.1,
    "originalPrice": 1093,
    "rating": 4.8999999999999995,
    "reviewCount": 52,
    "images": [
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 28,
    "featured": true,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "345.000 OMR",
      "Model Series": "iPhone 16 Plus",
      "Brand": "Apple",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Apple iPhone 16 Plus",
      "A18 Chip • 6.7\" OLED • Action Button • Super Retina XDR",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_iphone-16-plus_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 345 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_iphone-16",
    "title": "Apple iPhone 16",
    "subtitle": "A18 Chip • Dynamic Island • Camera Control Button • 48MP Fusion",
    "brand": "Apple",
    "category": "mobiles",
    "price": 805.19,
    "originalPrice": 982,
    "rating": 5,
    "reviewCount": 59,
    "images": [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 32,
    "featured": true,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "310.000 OMR",
      "Model Series": "iPhone 16",
      "Brand": "Apple",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Apple iPhone 16",
      "A18 Chip • Dynamic Island • Camera Control Button • 48MP Fusion",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_iphone-16_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 310 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_iphone-15-pro-max",
    "title": "Apple iPhone 15 Pro Max",
    "subtitle": "A17 Pro Titanium • 5x Optical Zoom • USB-C 3.0 High-Speed",
    "brand": "Apple",
    "category": "mobiles",
    "price": 1012.99,
    "originalPrice": 1236,
    "rating": 4.8,
    "reviewCount": 66,
    "images": [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 36,
    "featured": true,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "390.000 OMR",
      "Model Series": "iPhone 15 Pro Max",
      "Brand": "Apple",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Apple iPhone 15 Pro Max",
      "A17 Pro Titanium • 5x Optical Zoom • USB-C 3.0 High-Speed",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_iphone-15-pro-max_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 390 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_iphone-15-pro",
    "title": "Apple iPhone 15 Pro",
    "subtitle": "A17 Pro Silicon • Titanium Enclosure • Action Button",
    "brand": "Apple",
    "category": "mobiles",
    "price": 909.09,
    "originalPrice": 1109,
    "rating": 4.8999999999999995,
    "reviewCount": 73,
    "images": [
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 40,
    "featured": true,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "350.000 OMR",
      "Model Series": "iPhone 15 Pro",
      "Brand": "Apple",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Apple iPhone 15 Pro",
      "A17 Pro Silicon • Titanium Enclosure • Action Button",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_iphone-15-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 350 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_iphone-15-plus",
    "title": "Apple iPhone 15 Plus",
    "subtitle": "A16 Bionic • 6.7\" Dynamic Island • 48MP Main Camera",
    "brand": "Apple",
    "category": "mobiles",
    "price": 792.21,
    "originalPrice": 966,
    "rating": 5,
    "reviewCount": 80,
    "images": [
      "https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 44,
    "featured": true,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "305.000 OMR",
      "Model Series": "iPhone 15 Plus",
      "Brand": "Apple",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Apple iPhone 15 Plus",
      "A16 Bionic • 6.7\" Dynamic Island • 48MP Main Camera",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_iphone-15-plus_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 305 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_iphone-15",
    "title": "Apple iPhone 15",
    "subtitle": "A16 Bionic • Dynamic Island • USB-C • Color-Infused Glass Back",
    "brand": "Apple",
    "category": "mobiles",
    "price": 714.29,
    "originalPrice": 871,
    "rating": 4.8,
    "reviewCount": 87,
    "images": [
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 13,
    "featured": true,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "275.000 OMR",
      "Model Series": "iPhone 15",
      "Brand": "Apple",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Apple iPhone 15",
      "A16 Bionic • Dynamic Island • USB-C • Color-Infused Glass Back",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_iphone-15_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 275 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_iphone-14-plus",
    "title": "Apple iPhone 14 Plus",
    "subtitle": "A15 Bionic • 6.7\" Super Retina XDR • All-Day Battery",
    "brand": "Apple",
    "category": "mobiles",
    "price": 675.32,
    "originalPrice": 824,
    "rating": 4.8999999999999995,
    "reviewCount": 94,
    "images": [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 17,
    "featured": true,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "260.000 OMR",
      "Model Series": "iPhone 14 Plus",
      "Brand": "Apple",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Apple iPhone 14 Plus",
      "A15 Bionic • 6.7\" Super Retina XDR • All-Day Battery",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_iphone-14-plus_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 260 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_iphone-14",
    "title": "Apple iPhone 14",
    "subtitle": "A15 Bionic 5-Core GPU • Ceramic Shield • Dual 12MP System",
    "brand": "Apple",
    "category": "mobiles",
    "price": 597.4,
    "originalPrice": 729,
    "rating": 5,
    "reviewCount": 101,
    "images": [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 21,
    "featured": true,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "230.000 OMR",
      "Model Series": "iPhone 14",
      "Brand": "Apple",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Apple iPhone 14",
      "A15 Bionic 5-Core GPU • Ceramic Shield • Dual 12MP System",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_iphone-14_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 230 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_iphone-13",
    "title": "Apple iPhone 13",
    "subtitle": "A15 Bionic • Super Retina XDR OLED • Cinematic Mode 1080p",
    "brand": "Apple",
    "category": "mobiles",
    "price": 519.48,
    "originalPrice": 634,
    "rating": 4.8,
    "reviewCount": 108,
    "images": [
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 25,
    "featured": true,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "200.000 OMR",
      "Model Series": "iPhone 13",
      "Brand": "Apple",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Apple iPhone 13",
      "A15 Bionic • Super Retina XDR OLED • Cinematic Mode 1080p",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_iphone-13_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 200 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "apple-watch-ultra-2",
    "title": "Apple Watch Ultra 2 (49mm Titanium - Ocean Band)",
    "subtitle": "S9 SiP • 3000-Nit Ultra Display • Dual-Frequency GPS • 100m Water Resistance",
    "brand": "Apple",
    "category": "wearables",
    "price": 800,
    "originalPrice": 909.09,
    "rating": 5,
    "reviewCount": 52,
    "images": [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "HOT",
    "stock": 18,
    "featured": true,
    "specs": {
      "Official Oman Price": "308.000 OMR",
      "Case": "49mm Aerospace Titanium Case",
      "Water Resistance": "100m Certified WR100"
    },
    "keyFeatures": [
      "Precision Dual-Frequency GPS & Action Button Customization",
      "100% Genuine Apple Certified Import"
    ],
    "compatibility": [
      "Requires iPhone XS or later with iOS 17+"
    ],
    "reviews": []
  },
  {
    "id": "apple-airpods-pro-2-usbc",
    "title": "Apple AirPods Pro (2nd Gen with USB-C MagSafe Case)",
    "subtitle": "H2 Silicon Chip • 2x Active Noise Cancellation • Adaptive Audio • Spatial Sound",
    "brand": "Apple",
    "category": "audio",
    "price": 249.35,
    "originalPrice": 298.7,
    "rating": 4.9,
    "reviewCount": 140,
    "images": [
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "BEST SELLER",
    "stock": 50,
    "featured": true,
    "specs": {
      "Official Oman Price": "96.000 OMR",
      "Audio Chip": "Apple H2 Silicon",
      "Noise Cancellation": "2x Active Noise Cancellation"
    },
    "keyFeatures": [
      "Personalized Spatial Audio with Dynamic Head Tracking",
      "IP54 Dust and Water Resistance"
    ],
    "compatibility": [
      "iOS, iPadOS, macOS, watchOS, Android, Windows Bluetooth"
    ],
    "reviews": []
  },
  {
    "id": "phone_galaxy-s26-ultra",
    "title": "Samsung Galaxy S26 Ultra",
    "subtitle": "Snapdragon 8 Elite Gen 2 • 200MP Quad Zoom • Built-in S-Pen • Armor Aluminum",
    "brand": "Samsung",
    "category": "mobiles",
    "price": 1207.79,
    "originalPrice": 1474,
    "rating": 4.8999999999999995,
    "reviewCount": 115,
    "images": [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "FLAGSHIP",
    "stock": 29,
    "featured": true,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "465.000 OMR",
      "Model Series": "Galaxy S26 Ultra",
      "Brand": "Samsung",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Samsung Galaxy S26 Ultra",
      "Snapdragon 8 Elite Gen 2 • 200MP Quad Zoom • Built-in S-Pen • Armor Aluminum",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_galaxy-s26-ultra_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 465 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_galaxy-s26-",
    "title": "Samsung Galaxy S26+",
    "subtitle": "Snapdragon 8 Elite • 6.7\" QHD+ Dynamic AMOLED 2X 120Hz",
    "brand": "Samsung",
    "category": "mobiles",
    "price": 935.06,
    "originalPrice": 1141,
    "rating": 5,
    "reviewCount": 122,
    "images": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 33,
    "featured": true,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "360.000 OMR",
      "Model Series": "Galaxy S26+",
      "Brand": "Samsung",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Samsung Galaxy S26+",
      "Snapdragon 8 Elite • 6.7\" QHD+ Dynamic AMOLED 2X 120Hz",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_galaxy-s26-_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 360 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_galaxy-s26",
    "title": "Samsung Galaxy S26",
    "subtitle": "Galaxy AI Enhanced • 50MP Pro-Grade Camera • Compact Premium",
    "brand": "Samsung",
    "category": "mobiles",
    "price": 766.23,
    "originalPrice": 935,
    "rating": 4.8,
    "reviewCount": 129,
    "images": [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 37,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "295.000 OMR",
      "Model Series": "Galaxy S26",
      "Brand": "Samsung",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Samsung Galaxy S26",
      "Galaxy AI Enhanced • 50MP Pro-Grade Camera • Compact Premium",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_galaxy-s26_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 295 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_galaxy-z-fold7",
    "title": "Samsung Galaxy Z Fold7",
    "subtitle": "Ultra-Thin Foldable OLED • Flex Hinge • Galaxy AI Multi-Tasking",
    "brand": "Samsung",
    "category": "mobiles",
    "price": 1519.48,
    "originalPrice": 1854,
    "rating": 4.8999999999999995,
    "reviewCount": 136,
    "images": [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "HOT",
    "stock": 41,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "585.000 OMR",
      "Model Series": "Galaxy Z Fold7",
      "Brand": "Samsung",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Samsung Galaxy Z Fold7",
      "Ultra-Thin Foldable OLED • Flex Hinge • Galaxy AI Multi-Tasking",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_galaxy-z-fold7_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 585 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_galaxy-z-flip7",
    "title": "Samsung Galaxy Z Flip7",
    "subtitle": "Full-Screen Flex Window • 50MP Dual Camera • Pocket Foldable",
    "brand": "Samsung",
    "category": "mobiles",
    "price": 1012.99,
    "originalPrice": 1236,
    "rating": 5,
    "reviewCount": 143,
    "images": [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "TRENDING",
    "stock": 45,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "390.000 OMR",
      "Model Series": "Galaxy Z Flip7",
      "Brand": "Samsung",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Samsung Galaxy Z Flip7",
      "Full-Screen Flex Window • 50MP Dual Camera • Pocket Foldable",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_galaxy-z-flip7_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 390 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_galaxy-s25-ultra",
    "title": "Samsung Galaxy S25 Ultra",
    "subtitle": "Titanium Frame • Snapdragon 8 Elite • 200MP AI Camera • 5000mAh",
    "brand": "Samsung",
    "category": "mobiles",
    "price": 1051.95,
    "originalPrice": 1283,
    "rating": 4.8,
    "reviewCount": 150,
    "images": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "BEST SELLER",
    "stock": 14,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "405.000 OMR",
      "Model Series": "Galaxy S25 Ultra",
      "Brand": "Samsung",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Samsung Galaxy S25 Ultra",
      "Titanium Frame • Snapdragon 8 Elite • 200MP AI Camera • 5000mAh",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_galaxy-s25-ultra_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 405 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_galaxy-s25-",
    "title": "Samsung Galaxy S25+",
    "subtitle": "6.7\" Dynamic AMOLED 2X • 12GB RAM • 45W Fast Charging",
    "brand": "Samsung",
    "category": "mobiles",
    "price": 844.16,
    "originalPrice": 1030,
    "rating": 4.8999999999999995,
    "reviewCount": 157,
    "images": [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 18,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "325.000 OMR",
      "Model Series": "Galaxy S25+",
      "Brand": "Samsung",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Samsung Galaxy S25+",
      "6.7\" Dynamic AMOLED 2X • 12GB RAM • 45W Fast Charging",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_galaxy-s25-_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 325 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_galaxy-s25",
    "title": "Samsung Galaxy S25",
    "subtitle": "Galaxy AI System • 50MP Dual Pixel • 120Hz Adaptive Display",
    "brand": "Samsung",
    "category": "mobiles",
    "price": 662.34,
    "originalPrice": 808,
    "rating": 5,
    "reviewCount": 164,
    "images": [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 22,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "255.000 OMR",
      "Model Series": "Galaxy S25",
      "Brand": "Samsung",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Samsung Galaxy S25",
      "Galaxy AI System • 50MP Dual Pixel • 120Hz Adaptive Display",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_galaxy-s25_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 255 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_galaxy-s24-fe",
    "title": "Samsung Galaxy S24 FE",
    "subtitle": "Exynos 2400e / Snapdragon 8 Gen 3 • Galaxy AI • 6.7\" AMOLED",
    "brand": "Samsung",
    "category": "mobiles",
    "price": 519.48,
    "originalPrice": 634,
    "rating": 4.8,
    "reviewCount": 171,
    "images": [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 26,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "200.000 OMR",
      "Model Series": "Galaxy S24 FE",
      "Brand": "Samsung",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Samsung Galaxy S24 FE",
      "Exynos 2400e / Snapdragon 8 Gen 3 • Galaxy AI • 6.7\" AMOLED",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_galaxy-s24-fe_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 200 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_galaxy-a56-5g",
    "title": "Samsung Galaxy A56 5G",
    "subtitle": "Exynos 1580 5G • 50MP OIS Camera • IP67 Water Resistant",
    "brand": "Samsung",
    "category": "mobiles",
    "price": 363.64,
    "originalPrice": 444,
    "rating": 4.8999999999999995,
    "reviewCount": 178,
    "images": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 30,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "140.000 OMR",
      "Model Series": "Galaxy A56 5G",
      "Brand": "Samsung",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Samsung Galaxy A56 5G",
      "Exynos 1580 5G • 50MP OIS Camera • IP67 Water Resistant",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_galaxy-a56-5g_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 140 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_galaxy-a36-5g",
    "title": "Samsung Galaxy A36 5G",
    "subtitle": "120Hz Super AMOLED • 5000mAh Battery • 25W Fast Charge",
    "brand": "Samsung",
    "category": "mobiles",
    "price": 277.92,
    "originalPrice": 339,
    "rating": 5,
    "reviewCount": 185,
    "images": [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 34,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "107.000 OMR",
      "Model Series": "Galaxy A36 5G",
      "Brand": "Samsung",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Samsung Galaxy A36 5G",
      "120Hz Super AMOLED • 5000mAh Battery • 25W Fast Charge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_galaxy-a36-5g_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 107 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_galaxy-a26-5g",
    "title": "Samsung Galaxy A26 5G",
    "subtitle": "5G Connectivity • Triple 50MP Camera • 6.6\" 120Hz Display",
    "brand": "Samsung",
    "category": "mobiles",
    "price": 220.78,
    "originalPrice": 269,
    "rating": 4.8,
    "reviewCount": 192,
    "images": [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 38,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "85.000 OMR",
      "Model Series": "Galaxy A26 5G",
      "Brand": "Samsung",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Samsung Galaxy A26 5G",
      "5G Connectivity • Triple 50MP Camera • 6.6\" 120Hz Display",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_galaxy-a26-5g_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 85 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_galaxy-a17",
    "title": "Samsung Galaxy A17",
    "subtitle": "FHD+ 90Hz Display • 50MP Main Camera • 5000mAh Large Battery",
    "brand": "Samsung",
    "category": "mobiles",
    "price": 161.04,
    "originalPrice": 196,
    "rating": 4.8999999999999995,
    "reviewCount": 199,
    "images": [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 42,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "62.000 OMR",
      "Model Series": "Galaxy A17",
      "Brand": "Samsung",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Samsung Galaxy A17",
      "FHD+ 90Hz Display • 50MP Main Camera • 5000mAh Large Battery",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_galaxy-a17_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 62 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_galaxy-a16",
    "title": "Samsung Galaxy A16",
    "subtitle": "6.7\" Super AMOLED • 6 Generations OS Upgrades • 50MP Triple",
    "brand": "Samsung",
    "category": "mobiles",
    "price": 135.06,
    "originalPrice": 165,
    "rating": 5,
    "reviewCount": 26,
    "images": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 46,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "52.000 OMR",
      "Model Series": "Galaxy A16",
      "Brand": "Samsung",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Samsung Galaxy A16",
      "6.7\" Super AMOLED • 6 Generations OS Upgrades • 50MP Triple",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_galaxy-a16_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 52 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_galaxy-a06",
    "title": "Samsung Galaxy A06",
    "subtitle": "6.7\" HD+ Big Screen • 50MP Main Lens • Side Fingerprint",
    "brand": "Samsung",
    "category": "mobiles",
    "price": 103.9,
    "originalPrice": 127,
    "rating": 4.8,
    "reviewCount": 33,
    "images": [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 15,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "40.000 OMR",
      "Model Series": "Galaxy A06",
      "Brand": "Samsung",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Samsung Galaxy A06",
      "6.7\" HD+ Big Screen • 50MP Main Lens • Side Fingerprint",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_galaxy-a06_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 40 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_xiaomi-15-ultra",
    "title": "Xiaomi Xiaomi 15 Ultra",
    "subtitle": "Leica Quad Camera • 1-inch Sony Sensor • Snapdragon 8 Elite • 90W HyperCharge",
    "brand": "Xiaomi",
    "category": "mobiles",
    "price": 1103.9,
    "originalPrice": 1347,
    "rating": 4.8999999999999995,
    "reviewCount": 40,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "FLAGSHIP",
    "stock": 19,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "425.000 OMR",
      "Model Series": "Xiaomi 15 Ultra",
      "Brand": "Xiaomi",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Xiaomi Xiaomi 15 Ultra",
      "Leica Quad Camera • 1-inch Sony Sensor • Snapdragon 8 Elite • 90W HyperCharge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_xiaomi-15-ultra_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 425 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_xiaomi-15",
    "title": "Xiaomi Xiaomi 15",
    "subtitle": "Snapdragon 8 Elite • 6.36\" 120Hz OLED • Leica 50MP Triple",
    "brand": "Xiaomi",
    "category": "mobiles",
    "price": 753.25,
    "originalPrice": 919,
    "rating": 5,
    "reviewCount": 47,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 23,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "290.000 OMR",
      "Model Series": "Xiaomi 15",
      "Brand": "Xiaomi",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Xiaomi Xiaomi 15",
      "Snapdragon 8 Elite • 6.36\" 120Hz OLED • Leica 50MP Triple",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_xiaomi-15_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 290 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_xiaomi-14t-pro",
    "title": "Xiaomi Xiaomi 14T Pro",
    "subtitle": "MediaTek Dimensity 9300+ • Leica Summilux 50MP • 120W Charge",
    "brand": "Xiaomi",
    "category": "mobiles",
    "price": 688.31,
    "originalPrice": 840,
    "rating": 4.8,
    "reviewCount": 54,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 27,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "265.000 OMR",
      "Model Series": "Xiaomi 14T Pro",
      "Brand": "Xiaomi",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Xiaomi Xiaomi 14T Pro",
      "MediaTek Dimensity 9300+ • Leica Summilux 50MP • 120W Charge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_xiaomi-14t-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 265 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_xiaomi-14t",
    "title": "Xiaomi Xiaomi 14T",
    "subtitle": "Dimensity 8300-Ultra • 144Hz AI Display • Leica Optics",
    "brand": "Xiaomi",
    "category": "mobiles",
    "price": 519.48,
    "originalPrice": 634,
    "rating": 4.8999999999999995,
    "reviewCount": 61,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 31,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "200.000 OMR",
      "Model Series": "Xiaomi 14T",
      "Brand": "Xiaomi",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Xiaomi Xiaomi 14T",
      "Dimensity 8300-Ultra • 144Hz AI Display • Leica Optics",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_xiaomi-14t_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 200 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_xiaomi-14",
    "title": "Xiaomi Xiaomi 14",
    "subtitle": "Snapdragon 8 Gen 3 • Leica Professional Optics • Compact Flagship",
    "brand": "Xiaomi",
    "category": "mobiles",
    "price": 636.36,
    "originalPrice": 776,
    "rating": 5,
    "reviewCount": 68,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 35,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "245.000 OMR",
      "Model Series": "Xiaomi 14",
      "Brand": "Xiaomi",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Xiaomi Xiaomi 14",
      "Snapdragon 8 Gen 3 • Leica Professional Optics • Compact Flagship",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_xiaomi-14_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 245 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_redmi-note-15-pro-",
    "title": "Xiaomi Redmi Note 15 Pro+",
    "subtitle": "200MP OIS Camera • 120W HyperCharge • Curved AMOLED 1.5K",
    "brand": "Xiaomi",
    "category": "mobiles",
    "price": 394.81,
    "originalPrice": 482,
    "rating": 4.8,
    "reviewCount": 75,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 39,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "152.000 OMR",
      "Model Series": "Redmi Note 15 Pro+",
      "Brand": "Xiaomi",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Xiaomi Redmi Note 15 Pro+",
      "200MP OIS Camera • 120W HyperCharge • Curved AMOLED 1.5K",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_redmi-note-15-pro-_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 152 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_redmi-note-15-pro",
    "title": "Xiaomi Redmi Note 15 Pro",
    "subtitle": "108MP Pro Camera • 67W Turbo Charge • 120Hz Dolby Vision",
    "brand": "Xiaomi",
    "category": "mobiles",
    "price": 298.7,
    "originalPrice": 364,
    "rating": 4.8999999999999995,
    "reviewCount": 82,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 43,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "115.000 OMR",
      "Model Series": "Redmi Note 15 Pro",
      "Brand": "Xiaomi",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Xiaomi Redmi Note 15 Pro",
      "108MP Pro Camera • 67W Turbo Charge • 120Hz Dolby Vision",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_redmi-note-15-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 115 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_redmi-note-15",
    "title": "Xiaomi Redmi Note 15",
    "subtitle": "108MP Camera • 5000mAh • 33W Fast Charging • 120Hz AMOLED",
    "brand": "Xiaomi",
    "category": "mobiles",
    "price": 220.78,
    "originalPrice": 269,
    "rating": 5,
    "reviewCount": 89,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 12,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "85.000 OMR",
      "Model Series": "Redmi Note 15",
      "Brand": "Xiaomi",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Xiaomi Redmi Note 15",
      "108MP Camera • 5000mAh • 33W Fast Charging • 120Hz AMOLED",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_redmi-note-15_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 85 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_redmi-note-14-pro-",
    "title": "Xiaomi Redmi Note 14 Pro+",
    "subtitle": "Snapdragon 7s Gen 3 • 6200mAh Silicon Battery • IP68 Waterproof",
    "brand": "Xiaomi",
    "category": "mobiles",
    "price": 363.64,
    "originalPrice": 444,
    "rating": 4.8,
    "reviewCount": 96,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 16,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "140.000 OMR",
      "Model Series": "Redmi Note 14 Pro+",
      "Brand": "Xiaomi",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Xiaomi Redmi Note 14 Pro+",
      "Snapdragon 7s Gen 3 • 6200mAh Silicon Battery • IP68 Waterproof",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_redmi-note-14-pro-_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 140 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_redmi-note-14-pro",
    "title": "Xiaomi Redmi Note 14 Pro",
    "subtitle": "Curved 1.5K AMOLED • 50MP Sony LYT-600 OIS • IP68",
    "brand": "Xiaomi",
    "category": "mobiles",
    "price": 264.94,
    "originalPrice": 323,
    "rating": 4.8999999999999995,
    "reviewCount": 103,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 20,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "102.000 OMR",
      "Model Series": "Redmi Note 14 Pro",
      "Brand": "Xiaomi",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Xiaomi Redmi Note 14 Pro",
      "Curved 1.5K AMOLED • 50MP Sony LYT-600 OIS • IP68",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_redmi-note-14-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 102 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_redmi-note-14",
    "title": "Xiaomi Redmi Note 14",
    "subtitle": "120Hz FHD+ OLED • 50MP AI Dual • 45W Fast Charging",
    "brand": "Xiaomi",
    "category": "mobiles",
    "price": 187.01,
    "originalPrice": 228,
    "rating": 5,
    "reviewCount": 110,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 24,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "72.000 OMR",
      "Model Series": "Redmi Note 14",
      "Brand": "Xiaomi",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Xiaomi Redmi Note 14",
      "120Hz FHD+ OLED • 50MP AI Dual • 45W Fast Charging",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_redmi-note-14_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 72 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_redmi-14c",
    "title": "Xiaomi Redmi 14C",
    "subtitle": "6.88\" 120Hz Ultra-Large Screen • 50MP AI • 5160mAh Battery",
    "brand": "Xiaomi",
    "category": "mobiles",
    "price": 129.87,
    "originalPrice": 158,
    "rating": 4.8,
    "reviewCount": 117,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 28,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "50.000 OMR",
      "Model Series": "Redmi 14C",
      "Brand": "Xiaomi",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Xiaomi Redmi 14C",
      "6.88\" 120Hz Ultra-Large Screen • 50MP AI • 5160mAh Battery",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_redmi-14c_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 50 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_honor-magic-v5",
    "title": "HONOR Honor Magic V5",
    "subtitle": "Ultra-Slim Foldable Flagship • Silicon-Carbon Battery • Dual 120Hz LTPO",
    "brand": "HONOR",
    "category": "mobiles",
    "price": 1402.6,
    "originalPrice": 1711,
    "rating": 4.8999999999999995,
    "reviewCount": 124,
    "images": [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "HOT",
    "stock": 32,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "540.000 OMR",
      "Model Series": "Honor Magic V5",
      "Brand": "HONOR",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - HONOR Honor Magic V5",
      "Ultra-Slim Foldable Flagship • Silicon-Carbon Battery • Dual 120Hz LTPO",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_honor-magic-v5_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 540 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_honor-magic7-pro",
    "title": "HONOR Honor Magic7 Pro",
    "subtitle": "Snapdragon 8 Elite • 200MP Telephoto AI • 3D Biometric Face Unlock",
    "brand": "HONOR",
    "category": "mobiles",
    "price": 922.08,
    "originalPrice": 1125,
    "rating": 5,
    "reviewCount": 131,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "FLAGSHIP",
    "stock": 36,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "355.000 OMR",
      "Model Series": "Honor Magic7 Pro",
      "Brand": "HONOR",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - HONOR Honor Magic7 Pro",
      "Snapdragon 8 Elite • 200MP Telephoto AI • 3D Biometric Face Unlock",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_honor-magic7-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 355 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_honor-400-pro",
    "title": "HONOR Honor 400 Pro",
    "subtitle": "Studio Portrait AI • 100W Wired + 66W Wireless SuperCharge",
    "brand": "HONOR",
    "category": "mobiles",
    "price": 610.39,
    "originalPrice": 745,
    "rating": 4.8,
    "reviewCount": 138,
    "images": [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 40,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "235.000 OMR",
      "Model Series": "Honor 400 Pro",
      "Brand": "HONOR",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - HONOR Honor 400 Pro",
      "Studio Portrait AI • 100W Wired + 66W Wireless SuperCharge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_honor-400-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 235 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_honor-400",
    "title": "HONOR Honor 400",
    "subtitle": "Studio Portrait Engine • 50MP Harcourt Optics • 5200mAh",
    "brand": "HONOR",
    "category": "mobiles",
    "price": 441.56,
    "originalPrice": 539,
    "rating": 4.8999999999999995,
    "reviewCount": 145,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 44,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "170.000 OMR",
      "Model Series": "Honor 400",
      "Brand": "HONOR",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - HONOR Honor 400",
      "Studio Portrait Engine • 50MP Harcourt Optics • 5200mAh",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_honor-400_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 170 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_honor-200-pro",
    "title": "HONOR Honor 200 Pro",
    "subtitle": "Snapdragon 8s Gen 3 • Harcourt Portrait AI • 100W SuperCharge",
    "brand": "HONOR",
    "category": "mobiles",
    "price": 519.48,
    "originalPrice": 634,
    "rating": 5,
    "reviewCount": 152,
    "images": [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 13,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "200.000 OMR",
      "Model Series": "Honor 200 Pro",
      "Brand": "HONOR",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - HONOR Honor 200 Pro",
      "Snapdragon 8s Gen 3 • Harcourt Portrait AI • 100W SuperCharge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_honor-200-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 200 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_honor-200",
    "title": "HONOR Honor 200",
    "subtitle": "50MP Studio Portrait • 120Hz Quad-Curved AMOLED • 5200mAh",
    "brand": "HONOR",
    "category": "mobiles",
    "price": 381.82,
    "originalPrice": 466,
    "rating": 4.8,
    "reviewCount": 159,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 17,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "147.000 OMR",
      "Model Series": "Honor 200",
      "Brand": "HONOR",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - HONOR Honor 200",
      "50MP Studio Portrait • 120Hz Quad-Curved AMOLED • 5200mAh",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_honor-200_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 147 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_honor-x9d",
    "title": "HONOR Honor X9d",
    "subtitle": "Ultra-Bounce Anti-Drop Display 2.0 • 108MP AI • 5800mAh",
    "brand": "HONOR",
    "category": "mobiles",
    "price": 324.68,
    "originalPrice": 396,
    "rating": 4.8999999999999995,
    "reviewCount": 166,
    "images": [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 21,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "125.000 OMR",
      "Model Series": "Honor X9d",
      "Brand": "HONOR",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - HONOR Honor X9d",
      "Ultra-Bounce Anti-Drop Display 2.0 • 108MP AI • 5800mAh",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_honor-x9d_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 125 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_honor-x9c",
    "title": "HONOR Honor X9c",
    "subtitle": "360° Anti-Drop Protection • 6600mAh Long Life • 108MP OIS",
    "brand": "HONOR",
    "category": "mobiles",
    "price": 285.71,
    "originalPrice": 349,
    "rating": 5,
    "reviewCount": 173,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 25,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "110.000 OMR",
      "Model Series": "Honor X9c",
      "Brand": "HONOR",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - HONOR Honor X9c",
      "360° Anti-Drop Protection • 6600mAh Long Life • 108MP OIS",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_honor-x9c_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 110 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_honor-x8c",
    "title": "HONOR Honor X8c",
    "subtitle": "Slim 6.78mm Body • 108MP Clear Camera • Magic Capsule",
    "brand": "HONOR",
    "category": "mobiles",
    "price": 207.79,
    "originalPrice": 254,
    "rating": 4.8,
    "reviewCount": 180,
    "images": [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 29,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "80.000 OMR",
      "Model Series": "Honor X8c",
      "Brand": "HONOR",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - HONOR Honor X8c",
      "Slim 6.78mm Body • 108MP Clear Camera • Magic Capsule",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_honor-x8c_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 80 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_honor-x7c",
    "title": "HONOR Honor X7c",
    "subtitle": "6000mAh Battery • IP64 Water Resistant • Dual Stereo Speakers",
    "brand": "HONOR",
    "category": "mobiles",
    "price": 161.04,
    "originalPrice": 196,
    "rating": 4.8999999999999995,
    "reviewCount": 187,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 33,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "62.000 OMR",
      "Model Series": "Honor X7c",
      "Brand": "HONOR",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - HONOR Honor X7c",
      "6000mAh Battery • IP64 Water Resistant • Dual Stereo Speakers",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_honor-x7c_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 62 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_honor-x6b",
    "title": "HONOR Honor X6b",
    "subtitle": "5200mAh Battery • 35W SuperCharge • 50MP AI Camera",
    "brand": "HONOR",
    "category": "mobiles",
    "price": 122.08,
    "originalPrice": 149,
    "rating": 5,
    "reviewCount": 194,
    "images": [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 37,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "47.000 OMR",
      "Model Series": "Honor X6b",
      "Brand": "HONOR",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - HONOR Honor X6b",
      "5200mAh Battery • 35W SuperCharge • 50MP AI Camera",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_honor-x6b_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 47 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_honor-x5b",
    "title": "HONOR Honor X5b",
    "subtitle": "5200mAh Battery • 50MP Dual Camera • 6.56\" 90Hz Display",
    "brand": "HONOR",
    "category": "mobiles",
    "price": 103.9,
    "originalPrice": 127,
    "rating": 4.8,
    "reviewCount": 201,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 41,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "40.000 OMR",
      "Model Series": "Honor X5b",
      "Brand": "HONOR",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - HONOR Honor X5b",
      "5200mAh Battery • 50MP Dual Camera • 6.56\" 90Hz Display",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_honor-x5b_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 40 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_oppo-find-x8-pro",
    "title": "OPPO OPPO Find X8 Pro",
    "subtitle": "Hasselblad Dual Periscope • Dimensity 9400 • 5910mAh Glacier Battery",
    "brand": "OPPO",
    "category": "mobiles",
    "price": 870.13,
    "originalPrice": 1062,
    "rating": 4.8999999999999995,
    "reviewCount": 28,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "FLAGSHIP",
    "stock": 45,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "335.000 OMR",
      "Model Series": "OPPO Find X8 Pro",
      "Brand": "OPPO",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - OPPO OPPO Find X8 Pro",
      "Hasselblad Dual Periscope • Dimensity 9400 • 5910mAh Glacier Battery",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_oppo-find-x8-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 335 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_oppo-reno14",
    "title": "OPPO OPPO Reno14",
    "subtitle": "AI Portrait Glow • 1.5K Ultra-Clear OLED • 80W SUPERVOOC",
    "brand": "OPPO",
    "category": "mobiles",
    "price": 441.56,
    "originalPrice": 539,
    "rating": 5,
    "reviewCount": 35,
    "images": [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 14,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "170.000 OMR",
      "Model Series": "OPPO Reno14",
      "Brand": "OPPO",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - OPPO OPPO Reno14",
      "AI Portrait Glow • 1.5K Ultra-Clear OLED • 80W SUPERVOOC",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_oppo-reno14_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 170 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_oppo-reno13-pro",
    "title": "OPPO OPPO Reno13 Pro",
    "subtitle": "Dimensity 8350 • 50MP Periscope Telephoto • IP69 Waterproof",
    "brand": "OPPO",
    "category": "mobiles",
    "price": 493.51,
    "originalPrice": 602,
    "rating": 4.8,
    "reviewCount": 42,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 18,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "190.000 OMR",
      "Model Series": "OPPO Reno13 Pro",
      "Brand": "OPPO",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - OPPO OPPO Reno13 Pro",
      "Dimensity 8350 • 50MP Periscope Telephoto • IP69 Waterproof",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_oppo-reno13-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 190 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_oppo-reno13-f",
    "title": "OPPO OPPO Reno13 F",
    "subtitle": "AI Livephoto • 120Hz Smart Eye-Care Screen • 5000mAh",
    "brand": "OPPO",
    "category": "mobiles",
    "price": 298.7,
    "originalPrice": 364,
    "rating": 4.8999999999999995,
    "reviewCount": 49,
    "images": [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 22,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "115.000 OMR",
      "Model Series": "OPPO Reno13 F",
      "Brand": "OPPO",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - OPPO OPPO Reno13 F",
      "AI Livephoto • 120Hz Smart Eye-Care Screen • 5000mAh",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_oppo-reno13-f_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 115 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_oppo-reno12-f",
    "title": "OPPO OPPO Reno12 F",
    "subtitle": "Halo Light Notifications • AI Eraser 2.0 • 45W SUPERVOOC",
    "brand": "OPPO",
    "category": "mobiles",
    "price": 238.96,
    "originalPrice": 292,
    "rating": 5,
    "reviewCount": 56,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 26,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "92.000 OMR",
      "Model Series": "OPPO Reno12 F",
      "Brand": "OPPO",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - OPPO OPPO Reno12 F",
      "Halo Light Notifications • AI Eraser 2.0 • 45W SUPERVOOC",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_oppo-reno12-f_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 92 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_oppo-a78",
    "title": "OPPO OPPO A78",
    "subtitle": "67W SUPERVOOC • FHD+ AMOLED • Dual Stereo Speakers",
    "brand": "OPPO",
    "category": "mobiles",
    "price": 194.81,
    "originalPrice": 238,
    "rating": 4.8,
    "reviewCount": 63,
    "images": [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 30,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "75.000 OMR",
      "Model Series": "OPPO A78",
      "Brand": "OPPO",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - OPPO OPPO A78",
      "67W SUPERVOOC • FHD+ AMOLED • Dual Stereo Speakers",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_oppo-a78_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 75 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_oppo-a60",
    "title": "OPPO OPPO A60",
    "subtitle": "Military-Grade Shock Resistance • 950-nit Ultra-Bright Screen",
    "brand": "OPPO",
    "category": "mobiles",
    "price": 161.04,
    "originalPrice": 196,
    "rating": 4.8999999999999995,
    "reviewCount": 70,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 34,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "62.000 OMR",
      "Model Series": "OPPO A60",
      "Brand": "OPPO",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - OPPO OPPO A60",
      "Military-Grade Shock Resistance • 950-nit Ultra-Bright Screen",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_oppo-a60_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 62 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_oppo-a5-pro",
    "title": "OPPO OPPO A5 Pro",
    "subtitle": "5G High Speed • 5800mAh Battery • Splash & Drop Resistant",
    "brand": "OPPO",
    "category": "mobiles",
    "price": 194.81,
    "originalPrice": 238,
    "rating": 5,
    "reviewCount": 77,
    "images": [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 38,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "75.000 OMR",
      "Model Series": "OPPO A5 Pro",
      "Brand": "OPPO",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - OPPO OPPO A5 Pro",
      "5G High Speed • 5800mAh Battery • Splash & Drop Resistant",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_oppo-a5-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 75 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_oppo-a5",
    "title": "OPPO OPPO A5",
    "subtitle": "6.67\" HD+ 90Hz • 50MP AI Lens • 5100mAh Battery",
    "brand": "OPPO",
    "category": "mobiles",
    "price": 148.05,
    "originalPrice": 181,
    "rating": 4.8,
    "reviewCount": 84,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 42,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "57.000 OMR",
      "Model Series": "OPPO A5",
      "Brand": "OPPO",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - OPPO OPPO A5",
      "6.67\" HD+ 90Hz • 50MP AI Lens • 5100mAh Battery",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_oppo-a5_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 57 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_oppo-a3x",
    "title": "OPPO OPPO A3x",
    "subtitle": "Anti-Drop 360° Armor • 45W SUPERVOOC • 1000-nit Display",
    "brand": "OPPO",
    "category": "mobiles",
    "price": 122.08,
    "originalPrice": 149,
    "rating": 4.8999999999999995,
    "reviewCount": 91,
    "images": [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 46,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "47.000 OMR",
      "Model Series": "OPPO A3x",
      "Brand": "OPPO",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - OPPO OPPO A3x",
      "Anti-Drop 360° Armor • 45W SUPERVOOC • 1000-nit Display",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_oppo-a3x_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 47 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_vivo-x200-pro",
    "title": "Vivo Vivo X200 Pro",
    "subtitle": "ZEISS 200MP APO Telephoto • Dimensity 9400 • 6000mAh BlueVolt",
    "brand": "Vivo",
    "category": "mobiles",
    "price": 922.08,
    "originalPrice": 1125,
    "rating": 5,
    "reviewCount": 98,
    "images": [
      "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "FLAGSHIP",
    "stock": 15,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "355.000 OMR",
      "Model Series": "Vivo X200 Pro",
      "Brand": "Vivo",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Vivo Vivo X200 Pro",
      "ZEISS 200MP APO Telephoto • Dimensity 9400 • 6000mAh BlueVolt",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_vivo-x200-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 355 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_vivo-v70",
    "title": "Vivo Vivo V70",
    "subtitle": "Aura Light Portrait 5.0 • 50MP Sony Sensor • 80W FlashCharge",
    "brand": "Vivo",
    "category": "mobiles",
    "price": 493.51,
    "originalPrice": 602,
    "rating": 4.8,
    "reviewCount": 105,
    "images": [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 19,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "190.000 OMR",
      "Model Series": "Vivo V70",
      "Brand": "Vivo",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Vivo Vivo V70",
      "Aura Light Portrait 5.0 • 50MP Sony Sensor • 80W FlashCharge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_vivo-v70_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 190 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_vivo-v60",
    "title": "Vivo Vivo V60",
    "subtitle": "ZEISS All Main Camera • 1.5K 120Hz 3D Curved AMOLED",
    "brand": "Vivo",
    "category": "mobiles",
    "price": 433.77,
    "originalPrice": 529,
    "rating": 4.8999999999999995,
    "reviewCount": 112,
    "images": [
      "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 23,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "167.000 OMR",
      "Model Series": "Vivo V60",
      "Brand": "Vivo",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Vivo Vivo V60",
      "ZEISS All Main Camera • 1.5K 120Hz 3D Curved AMOLED",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_vivo-v60_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 167 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_vivo-v50",
    "title": "Vivo Vivo V50",
    "subtitle": "50MP Eye-AF Group Selfie • Studio Aura Light • 5500mAh",
    "brand": "Vivo",
    "category": "mobiles",
    "price": 381.82,
    "originalPrice": 466,
    "rating": 5,
    "reviewCount": 119,
    "images": [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 27,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "147.000 OMR",
      "Model Series": "Vivo V50",
      "Brand": "Vivo",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Vivo Vivo V50",
      "50MP Eye-AF Group Selfie • Studio Aura Light • 5500mAh",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_vivo-v50_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 147 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_vivo-v40",
    "title": "Vivo Vivo V40",
    "subtitle": "ZEISS Optics 50MP Dual • IP68 Water & Dust Proof • 5500mAh",
    "brand": "Vivo",
    "category": "mobiles",
    "price": 350.65,
    "originalPrice": 428,
    "rating": 4.8,
    "reviewCount": 126,
    "images": [
      "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 31,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "135.000 OMR",
      "Model Series": "Vivo V40",
      "Brand": "Vivo",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Vivo Vivo V40",
      "ZEISS Optics 50MP Dual • IP68 Water & Dust Proof • 5500mAh",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_vivo-v40_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 135 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_vivo-y100",
    "title": "Vivo Vivo Y100",
    "subtitle": "Color Changing Fluorite AG Glass • 80W FlashCharge • 120Hz AMOLED",
    "brand": "Vivo",
    "category": "mobiles",
    "price": 233.77,
    "originalPrice": 285,
    "rating": 4.8999999999999995,
    "reviewCount": 133,
    "images": [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 35,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "90.000 OMR",
      "Model Series": "Vivo Y100",
      "Brand": "Vivo",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Vivo Vivo Y100",
      "Color Changing Fluorite AG Glass • 80W FlashCharge • 120Hz AMOLED",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_vivo-y100_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 90 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_vivo-y39",
    "title": "Vivo Vivo Y39",
    "subtitle": "5G Fast Connection • 50MP Ultra Clear • 5000mAh Large Battery",
    "brand": "Vivo",
    "category": "mobiles",
    "price": 187.01,
    "originalPrice": 228,
    "rating": 5,
    "reviewCount": 140,
    "images": [
      "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 39,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "72.000 OMR",
      "Model Series": "Vivo Y39",
      "Brand": "Vivo",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Vivo Vivo Y39",
      "5G Fast Connection • 50MP Ultra Clear • 5000mAh Large Battery",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_vivo-y39_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 72 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_vivo-y29",
    "title": "Vivo Vivo Y29",
    "subtitle": "6.68\" Sunlight Display • Dual Stereo 300% Audio • 44W Charge",
    "brand": "Vivo",
    "category": "mobiles",
    "price": 161.04,
    "originalPrice": 196,
    "rating": 4.8,
    "reviewCount": 147,
    "images": [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 43,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "62.000 OMR",
      "Model Series": "Vivo Y29",
      "Brand": "Vivo",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Vivo Vivo Y29",
      "6.68\" Sunlight Display • Dual Stereo 300% Audio • 44W Charge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_vivo-y29_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 62 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_vivo-y19e",
    "title": "Vivo Vivo Y19e",
    "subtitle": "5500mAh Power House • 50MP HD Camera • Eye Care 90Hz",
    "brand": "Vivo",
    "category": "mobiles",
    "price": 116.88,
    "originalPrice": 143,
    "rating": 4.8999999999999995,
    "reviewCount": 154,
    "images": [
      "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 12,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "45.000 OMR",
      "Model Series": "Vivo Y19e",
      "Brand": "Vivo",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Vivo Vivo Y19e",
      "5500mAh Power House • 50MP HD Camera • Eye Care 90Hz",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_vivo-y19e_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 45 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_vivo-y04",
    "title": "Vivo Vivo Y04",
    "subtitle": "6.74\" 90Hz Display • 5000mAh Battery • IP54 Splash Proof",
    "brand": "Vivo",
    "category": "mobiles",
    "price": 90.91,
    "originalPrice": 111,
    "rating": 5,
    "reviewCount": 161,
    "images": [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 16,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "35.000 OMR",
      "Model Series": "Vivo Y04",
      "Brand": "Vivo",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Vivo Vivo Y04",
      "6.74\" 90Hz Display • 5000mAh Battery • IP54 Splash Proof",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_vivo-y04_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 35 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_oneplus-13-pro",
    "title": "OnePlus OnePlus 13 Pro",
    "subtitle": "Hasselblad 50MP Triple • Snapdragon 8 Elite • 6000mAh • 100W SUPERVOOC",
    "brand": "OnePlus",
    "category": "mobiles",
    "price": 948.05,
    "originalPrice": 1157,
    "rating": 4.8,
    "reviewCount": 168,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "FLAGSHIP",
    "stock": 20,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "365.000 OMR",
      "Model Series": "OnePlus 13 Pro",
      "Brand": "OnePlus",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - OnePlus OnePlus 13 Pro",
      "Hasselblad 50MP Triple • Snapdragon 8 Elite • 6000mAh • 100W SUPERVOOC",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_oneplus-13-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 365 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_oneplus-13",
    "title": "OnePlus OnePlus 13",
    "subtitle": "Snapdragon 8 Elite • 2K 120Hz Oriental Screen • IP68/IP69",
    "brand": "OnePlus",
    "category": "mobiles",
    "price": 753.25,
    "originalPrice": 919,
    "rating": 4.8999999999999995,
    "reviewCount": 175,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 24,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "290.000 OMR",
      "Model Series": "OnePlus 13",
      "Brand": "OnePlus",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - OnePlus OnePlus 13",
      "Snapdragon 8 Elite • 2K 120Hz Oriental Screen • IP68/IP69",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_oneplus-13_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 290 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_oneplus-13r",
    "title": "OnePlus OnePlus 13R",
    "subtitle": "Snapdragon 8 Gen 3 • 6000mAh Glacier Battery • 100W Charge",
    "brand": "OnePlus",
    "category": "mobiles",
    "price": 524.68,
    "originalPrice": 640,
    "rating": 5,
    "reviewCount": 182,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 28,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "202.000 OMR",
      "Model Series": "OnePlus 13R",
      "Brand": "OnePlus",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - OnePlus OnePlus 13R",
      "Snapdragon 8 Gen 3 • 6000mAh Glacier Battery • 100W Charge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_oneplus-13r_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 202 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_oneplus-12r",
    "title": "OnePlus OnePlus 12R",
    "subtitle": "Snapdragon 8 Gen 2 • 4th Gen LTPO 120Hz • 5500mAh Battery",
    "brand": "OnePlus",
    "category": "mobiles",
    "price": 441.56,
    "originalPrice": 539,
    "rating": 4.8,
    "reviewCount": 189,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 32,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "170.000 OMR",
      "Model Series": "OnePlus 12R",
      "Brand": "OnePlus",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - OnePlus OnePlus 12R",
      "Snapdragon 8 Gen 2 • 4th Gen LTPO 120Hz • 5500mAh Battery",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_oneplus-12r_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 170 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_oneplus-nord-5",
    "title": "OnePlus OnePlus Nord 5",
    "subtitle": "All-Metal Unibody • Snapdragon 7+ Gen 3 • 5500mAh 100W",
    "brand": "OnePlus",
    "category": "mobiles",
    "price": 407.79,
    "originalPrice": 498,
    "rating": 4.8999999999999995,
    "reviewCount": 196,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 36,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "157.000 OMR",
      "Model Series": "OnePlus Nord 5",
      "Brand": "OnePlus",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - OnePlus OnePlus Nord 5",
      "All-Metal Unibody • Snapdragon 7+ Gen 3 • 5500mAh 100W",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_oneplus-nord-5_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 157 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_oneplus-nord-ce5",
    "title": "OnePlus OnePlus Nord CE5",
    "subtitle": "Sony LYT-600 50MP • 120Hz AMOLED • 80W SUPERVOOC",
    "brand": "OnePlus",
    "category": "mobiles",
    "price": 272.73,
    "originalPrice": 333,
    "rating": 5,
    "reviewCount": 203,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 40,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "105.000 OMR",
      "Model Series": "OnePlus Nord CE5",
      "Brand": "OnePlus",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - OnePlus OnePlus Nord CE5",
      "Sony LYT-600 50MP • 120Hz AMOLED • 80W SUPERVOOC",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_oneplus-nord-ce5_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 105 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_oneplus-nord-4",
    "title": "OnePlus OnePlus Nord 4",
    "subtitle": "Metal Unibody 5G • 5500mAh Long Life • 100W SuperVOOC",
    "brand": "OnePlus",
    "category": "mobiles",
    "price": 303.9,
    "originalPrice": 371,
    "rating": 4.8,
    "reviewCount": 30,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 44,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "117.000 OMR",
      "Model Series": "OnePlus Nord 4",
      "Brand": "OnePlus",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - OnePlus OnePlus Nord 4",
      "Metal Unibody 5G • 5500mAh Long Life • 100W SuperVOOC",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_oneplus-nord-4_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 117 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_oneplus-nord-ce4",
    "title": "OnePlus OnePlus Nord CE4",
    "subtitle": "Snapdragon 7 Gen 3 • 100W SUPERVOOC • 50MP Sony Sensor",
    "brand": "OnePlus",
    "category": "mobiles",
    "price": 238.96,
    "originalPrice": 292,
    "rating": 4.8999999999999995,
    "reviewCount": 37,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 13,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "92.000 OMR",
      "Model Series": "OnePlus Nord CE4",
      "Brand": "OnePlus",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - OnePlus OnePlus Nord CE4",
      "Snapdragon 7 Gen 3 • 100W SUPERVOOC • 50MP Sony Sensor",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_oneplus-nord-ce4_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 92 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_oneplus-nord-ce4-lite",
    "title": "OnePlus OnePlus Nord CE4 Lite",
    "subtitle": "5500mAh Battery • 80W SUPERVOOC • 120Hz AMOLED 2100 Nits",
    "brand": "OnePlus",
    "category": "mobiles",
    "price": 181.82,
    "originalPrice": 222,
    "rating": 5,
    "reviewCount": 44,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 17,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "70.000 OMR",
      "Model Series": "OnePlus Nord CE4 Lite",
      "Brand": "OnePlus",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - OnePlus OnePlus Nord CE4 Lite",
      "5500mAh Battery • 80W SUPERVOOC • 120Hz AMOLED 2100 Nits",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_oneplus-nord-ce4-lite_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 70 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_oneplus-nord-ce-3-lite",
    "title": "OnePlus OnePlus Nord CE 3 Lite",
    "subtitle": "108MP Camera System • 67W SUPERVOOC • 6.72\" 120Hz Display",
    "brand": "OnePlus",
    "category": "mobiles",
    "price": 161.04,
    "originalPrice": 196,
    "rating": 4.8,
    "reviewCount": 51,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 21,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "62.000 OMR",
      "Model Series": "OnePlus Nord CE 3 Lite",
      "Brand": "OnePlus",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - OnePlus OnePlus Nord CE 3 Lite",
      "108MP Camera System • 67W SUPERVOOC • 6.72\" 120Hz Display",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_oneplus-nord-ce-3-lite_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 62 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_realme-gt-7",
    "title": "Realme Realme GT 7",
    "subtitle": "Snapdragon 8 Elite • 6500mAh Titan Battery • 120W Ultra Charge",
    "brand": "Realme",
    "category": "mobiles",
    "price": 584.42,
    "originalPrice": 713,
    "rating": 4.8999999999999995,
    "reviewCount": 58,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "HOT",
    "stock": 25,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "225.000 OMR",
      "Model Series": "Realme GT 7",
      "Brand": "Realme",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Realme Realme GT 7",
      "Snapdragon 8 Elite • 6500mAh Titan Battery • 120W Ultra Charge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_realme-gt-7_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 225 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_realme-15",
    "title": "Realme Realme 15",
    "subtitle": "Sony 50MP OIS Camera • 120Hz Curved Vision OLED • 5200mAh",
    "brand": "Realme",
    "category": "mobiles",
    "price": 290.91,
    "originalPrice": 355,
    "rating": 5,
    "reviewCount": 65,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 29,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "112.000 OMR",
      "Model Series": "Realme 15",
      "Brand": "Realme",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Realme Realme 15",
      "Sony 50MP OIS Camera • 120Hz Curved Vision OLED • 5200mAh",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_realme-15_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 112 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_realme-14",
    "title": "Realme Realme 14",
    "subtitle": "50MP AI Camera • Dimensity 5G • 45W Fast Charging",
    "brand": "Realme",
    "category": "mobiles",
    "price": 251.95,
    "originalPrice": 307,
    "rating": 4.8,
    "reviewCount": 72,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 33,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "97.000 OMR",
      "Model Series": "Realme 14",
      "Brand": "Realme",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Realme Realme 14",
      "50MP AI Camera • Dimensity 5G • 45W Fast Charging",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_realme-14_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 97 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_realme-13",
    "title": "Realme Realme 13",
    "subtitle": "Dimensity 6300 5G • GT Mode Gaming • 50MP Sony LYT-600",
    "brand": "Realme",
    "category": "mobiles",
    "price": 233.77,
    "originalPrice": 285,
    "rating": 4.8999999999999995,
    "reviewCount": 79,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 37,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "90.000 OMR",
      "Model Series": "Realme 13",
      "Brand": "Realme",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Realme Realme 13",
      "Dimensity 6300 5G • GT Mode Gaming • 50MP Sony LYT-600",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_realme-13_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 90 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_realme-12",
    "title": "Realme Realme 12",
    "subtitle": "108MP Clear Portrait • 45W SUPERVOOC • Sunlight Display",
    "brand": "Realme",
    "category": "mobiles",
    "price": 207.79,
    "originalPrice": 254,
    "rating": 5,
    "reviewCount": 86,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 41,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "80.000 OMR",
      "Model Series": "Realme 12",
      "Brand": "Realme",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Realme Realme 12",
      "108MP Clear Portrait • 45W SUPERVOOC • Sunlight Display",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_realme-12_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 80 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_realme-c85",
    "title": "Realme Realme C85",
    "subtitle": "ArmorShield Drop Proof • 50MP AI Lens • 5000mAh Battery",
    "brand": "Realme",
    "category": "mobiles",
    "price": 161.04,
    "originalPrice": 196,
    "rating": 4.8,
    "reviewCount": 93,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 45,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "62.000 OMR",
      "Model Series": "Realme C85",
      "Brand": "Realme",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Realme Realme C85",
      "ArmorShield Drop Proof • 50MP AI Lens • 5000mAh Battery",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_realme-c85_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 62 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_realme-c75",
    "title": "Realme Realme C75",
    "subtitle": "IP69 Military Shockproof • 6000mAh Battery • 45W Charge",
    "brand": "Realme",
    "category": "mobiles",
    "price": 148.05,
    "originalPrice": 181,
    "rating": 4.8999999999999995,
    "reviewCount": 100,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 14,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "57.000 OMR",
      "Model Series": "Realme C75",
      "Brand": "Realme",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Realme Realme C75",
      "IP69 Military Shockproof • 6000mAh Battery • 45W Charge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_realme-c75_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 57 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_realme-c65",
    "title": "Realme Realme C65",
    "subtitle": "45W Fast Charge • TÜV SÜD 48-Month Fluency • 50MP AI",
    "brand": "Realme",
    "category": "mobiles",
    "price": 135.06,
    "originalPrice": 165,
    "rating": 5,
    "reviewCount": 107,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 18,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "52.000 OMR",
      "Model Series": "Realme C65",
      "Brand": "Realme",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Realme Realme C65",
      "45W Fast Charge • TÜV SÜD 48-Month Fluency • 50MP AI",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_realme-c65_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 52 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_realme-c63",
    "title": "Realme Realme C63",
    "subtitle": "Premium Vegan Leather Back • 45W Quick Charge • Air Gestures",
    "brand": "Realme",
    "category": "mobiles",
    "price": 122.08,
    "originalPrice": 149,
    "rating": 4.8,
    "reviewCount": 114,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 22,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "47.000 OMR",
      "Model Series": "Realme C63",
      "Brand": "Realme",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Realme Realme C63",
      "Premium Vegan Leather Back • 45W Quick Charge • Air Gestures",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_realme-c63_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 47 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_realme-c61",
    "title": "Realme Realme C61",
    "subtitle": "Metallic Frame • Sparkle Design • 5000mAh Long-Lasting",
    "brand": "Realme",
    "category": "mobiles",
    "price": 103.9,
    "originalPrice": 127,
    "rating": 4.8999999999999995,
    "reviewCount": 121,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 26,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "40.000 OMR",
      "Model Series": "Realme C61",
      "Brand": "Realme",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Realme Realme C61",
      "Metallic Frame • Sparkle Design • 5000mAh Long-Lasting",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_realme-c61_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 40 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_razr-60-ultra",
    "title": "Motorola Razr 60 Ultra",
    "subtitle": "4.0\" External pOLED • Snapdragon 8 Elite • AI Action Camera Foldable",
    "brand": "Motorola",
    "category": "mobiles",
    "price": 1168.83,
    "originalPrice": 1426,
    "rating": 5,
    "reviewCount": 128,
    "images": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "HOT",
    "stock": 30,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "450.000 OMR",
      "Model Series": "Razr 60 Ultra",
      "Brand": "Motorola",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Motorola Razr 60 Ultra",
      "4.0\" External pOLED • Snapdragon 8 Elite • AI Action Camera Foldable",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_razr-60-ultra_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 450 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_moto-edge-60-pro",
    "title": "Motorola Moto Edge 60 Pro",
    "subtitle": "Pantone Curated Colors • 50MP Sony LYT-800 • 125W TurboPower",
    "brand": "Motorola",
    "category": "mobiles",
    "price": 532.47,
    "originalPrice": 650,
    "rating": 4.8,
    "reviewCount": 135,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 34,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "205.000 OMR",
      "Model Series": "Moto Edge 60 Pro",
      "Brand": "Motorola",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Motorola Moto Edge 60 Pro",
      "Pantone Curated Colors • 50MP Sony LYT-800 • 125W TurboPower",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_moto-edge-60-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 205 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_moto-edge-50-pro",
    "title": "Motorola Moto Edge 50 Pro",
    "subtitle": "Snapdragon 7 Gen 3 • 125W Wired + 50W Wireless • IP68",
    "brand": "Motorola",
    "category": "mobiles",
    "price": 467.53,
    "originalPrice": 570,
    "rating": 4.8999999999999995,
    "reviewCount": 142,
    "images": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 38,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "180.000 OMR",
      "Model Series": "Moto Edge 50 Pro",
      "Brand": "Motorola",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Motorola Moto Edge 50 Pro",
      "Snapdragon 7 Gen 3 • 125W Wired + 50W Wireless • IP68",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_moto-edge-50-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 180 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_moto-edge-50-fusion",
    "title": "Motorola Moto Edge 50 Fusion",
    "subtitle": "144Hz Endless Edge OLED • 50MP OIS LYTIA • 68W Charge",
    "brand": "Motorola",
    "category": "mobiles",
    "price": 324.68,
    "originalPrice": 396,
    "rating": 5,
    "reviewCount": 149,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 42,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "125.000 OMR",
      "Model Series": "Moto Edge 50 Fusion",
      "Brand": "Motorola",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Motorola Moto Edge 50 Fusion",
      "144Hz Endless Edge OLED • 50MP OIS LYTIA • 68W Charge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_moto-edge-50-fusion_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 125 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_moto-g75-5g",
    "title": "Motorola Moto G75 5G",
    "subtitle": "Military Grade MIL-STD-810H • Snapdragon 6 Gen 3 • IP68",
    "brand": "Motorola",
    "category": "mobiles",
    "price": 264.94,
    "originalPrice": 323,
    "rating": 4.8,
    "reviewCount": 156,
    "images": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 46,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "102.000 OMR",
      "Model Series": "Moto G75 5G",
      "Brand": "Motorola",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Motorola Moto G75 5G",
      "Military Grade MIL-STD-810H • Snapdragon 6 Gen 3 • IP68",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_moto-g75-5g_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 102 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_moto-g55-5g",
    "title": "Motorola Moto G55 5G",
    "subtitle": "50MP OIS Quad Pixel • 120Hz FHD+ Screen • Dolby Atmos Audio",
    "brand": "Motorola",
    "category": "mobiles",
    "price": 207.79,
    "originalPrice": 254,
    "rating": 4.8999999999999995,
    "reviewCount": 163,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 15,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "80.000 OMR",
      "Model Series": "Moto G55 5G",
      "Brand": "Motorola",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Motorola Moto G55 5G",
      "50MP OIS Quad Pixel • 120Hz FHD+ Screen • Dolby Atmos Audio",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_moto-g55-5g_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 80 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_moto-g35-5g",
    "title": "Motorola Moto G35 5G",
    "subtitle": "120Hz 1000-nit Screen • 50MP Camera • 5000mAh Power",
    "brand": "Motorola",
    "category": "mobiles",
    "price": 161.04,
    "originalPrice": 196,
    "rating": 5,
    "reviewCount": 170,
    "images": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 19,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "62.000 OMR",
      "Model Series": "Moto G35 5G",
      "Brand": "Motorola",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Motorola Moto G35 5G",
      "120Hz 1000-nit Screen • 50MP Camera • 5000mAh Power",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_moto-g35-5g_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 62 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_moto-g24",
    "title": "Motorola Moto G24",
    "subtitle": "50MP Quad Pixel • 90Hz Display • 5000mAh TurboPower",
    "brand": "Motorola",
    "category": "mobiles",
    "price": 135.06,
    "originalPrice": 165,
    "rating": 4.8,
    "reviewCount": 177,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 23,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "52.000 OMR",
      "Model Series": "Moto G24",
      "Brand": "Motorola",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Motorola Moto G24",
      "50MP Quad Pixel • 90Hz Display • 5000mAh TurboPower",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_moto-g24_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 52 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_moto-g15",
    "title": "Motorola Moto G15",
    "subtitle": "FHD+ Bright Display • 5000mAh Battery • Dolby Atmos Sound",
    "brand": "Motorola",
    "category": "mobiles",
    "price": 122.08,
    "originalPrice": 149,
    "rating": 4.8999999999999995,
    "reviewCount": 184,
    "images": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 27,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "47.000 OMR",
      "Model Series": "Moto G15",
      "Brand": "Motorola",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Motorola Moto G15",
      "FHD+ Bright Display • 5000mAh Battery • Dolby Atmos Sound",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_moto-g15_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 47 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_moto-g05",
    "title": "Motorola Moto G05",
    "subtitle": "6.6\" 90Hz Screen • 50MP AI Lens • 5000mAh Battery",
    "brand": "Motorola",
    "category": "mobiles",
    "price": 103.9,
    "originalPrice": 127,
    "rating": 5,
    "reviewCount": 191,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 31,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "40.000 OMR",
      "Model Series": "Moto G05",
      "Brand": "Motorola",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Motorola Moto G05",
      "6.6\" 90Hz Screen • 50MP AI Lens • 5000mAh Battery",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_moto-g05_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 40 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_pixel-10-pro-xl",
    "title": "Google Pixel Pixel 10 Pro XL",
    "subtitle": "Google Tensor G5 • Gemini Nano Multimodal • Super Res Zoom 30x • 120Hz OLED",
    "brand": "Google Pixel",
    "category": "mobiles",
    "price": 935.06,
    "originalPrice": 1141,
    "rating": 4.8,
    "reviewCount": 198,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "FLAGSHIP",
    "stock": 35,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "360.000 OMR",
      "Model Series": "Pixel 10 Pro XL",
      "Brand": "Google Pixel",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Google Pixel Pixel 10 Pro XL",
      "Google Tensor G5 • Gemini Nano Multimodal • Super Res Zoom 30x • 120Hz OLED",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_pixel-10-pro-xl_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 360 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_pixel-10",
    "title": "Google Pixel Pixel 10",
    "subtitle": "Tensor G5 Chip • Advanced Pixel Camera • 7 Years OS Updates",
    "brand": "Google Pixel",
    "category": "mobiles",
    "price": 701.3,
    "originalPrice": 856,
    "rating": 4.8999999999999995,
    "reviewCount": 25,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 39,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "270.000 OMR",
      "Model Series": "Pixel 10",
      "Brand": "Google Pixel",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Google Pixel Pixel 10",
      "Tensor G5 Chip • Advanced Pixel Camera • 7 Years OS Updates",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_pixel-10_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 270 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_pixel-9-pro-xl",
    "title": "Google Pixel Pixel 9 Pro XL",
    "subtitle": "Tensor G4 • 6.8\" Super Actua OLED • 50MP Triple + 5x Telephoto",
    "brand": "Google Pixel",
    "category": "mobiles",
    "price": 831.17,
    "originalPrice": 1014,
    "rating": 5,
    "reviewCount": 32,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "BEST SELLER",
    "stock": 43,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "320.000 OMR",
      "Model Series": "Pixel 9 Pro XL",
      "Brand": "Google Pixel",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Google Pixel Pixel 9 Pro XL",
      "Tensor G4 • 6.8\" Super Actua OLED • 50MP Triple + 5x Telephoto",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_pixel-9-pro-xl_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 320 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_pixel-9-pro",
    "title": "Google Pixel Pixel 9 Pro",
    "subtitle": "Tensor G4 • 16GB RAM • Pro Controls • Satellite SOS",
    "brand": "Google Pixel",
    "category": "mobiles",
    "price": 753.25,
    "originalPrice": 919,
    "rating": 4.8,
    "reviewCount": 39,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 12,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "290.000 OMR",
      "Model Series": "Pixel 9 Pro",
      "Brand": "Google Pixel",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Google Pixel Pixel 9 Pro",
      "Tensor G4 • 16GB RAM • Pro Controls • Satellite SOS",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_pixel-9-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 290 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_pixel-9",
    "title": "Google Pixel Pixel 9",
    "subtitle": "Tensor G4 • 50MP Main + 48MP Ultrawide • Actua Display",
    "brand": "Google Pixel",
    "category": "mobiles",
    "price": 584.42,
    "originalPrice": 713,
    "rating": 4.8999999999999995,
    "reviewCount": 46,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 16,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "225.000 OMR",
      "Model Series": "Pixel 9",
      "Brand": "Google Pixel",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Google Pixel Pixel 9",
      "Tensor G4 • 50MP Main + 48MP Ultrawide • Actua Display",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_pixel-9_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 225 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_pixel-8-pro",
    "title": "Google Pixel Pixel 8 Pro",
    "subtitle": "Tensor G3 • Temperature Sensor • Best Take & Magic Editor",
    "brand": "Google Pixel",
    "category": "mobiles",
    "price": 675.32,
    "originalPrice": 824,
    "rating": 5,
    "reviewCount": 53,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 20,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "260.000 OMR",
      "Model Series": "Pixel 8 Pro",
      "Brand": "Google Pixel",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Google Pixel Pixel 8 Pro",
      "Tensor G3 • Temperature Sensor • Best Take & Magic Editor",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_pixel-8-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 260 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_pixel-8",
    "title": "Google Pixel Pixel 8",
    "subtitle": "Tensor G3 • 6.2\" Actua Display 120Hz • 50MP Camera",
    "brand": "Google Pixel",
    "category": "mobiles",
    "price": 493.51,
    "originalPrice": 602,
    "rating": 4.8,
    "reviewCount": 60,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 24,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "190.000 OMR",
      "Model Series": "Pixel 8",
      "Brand": "Google Pixel",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Google Pixel Pixel 8",
      "Tensor G3 • 6.2\" Actua Display 120Hz • 50MP Camera",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_pixel-8_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 190 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_pixel-9a",
    "title": "Google Pixel Pixel 9a",
    "subtitle": "Tensor G4 • Flush Camera Design • 5000mAh Battery",
    "brand": "Google Pixel",
    "category": "mobiles",
    "price": 433.77,
    "originalPrice": 529,
    "rating": 4.8999999999999995,
    "reviewCount": 67,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 28,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "167.000 OMR",
      "Model Series": "Pixel 9a",
      "Brand": "Google Pixel",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Google Pixel Pixel 9a",
      "Tensor G4 • Flush Camera Design • 5000mAh Battery",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_pixel-9a_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 167 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_pixel-8a",
    "title": "Google Pixel Pixel 8a",
    "subtitle": "Tensor G3 • 64MP Dual Camera • 120Hz Actua OLED",
    "brand": "Google Pixel",
    "category": "mobiles",
    "price": 350.65,
    "originalPrice": 428,
    "rating": 5,
    "reviewCount": 74,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 32,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "135.000 OMR",
      "Model Series": "Pixel 8a",
      "Brand": "Google Pixel",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Google Pixel Pixel 8a",
      "Tensor G3 • 64MP Dual Camera • 120Hz Actua OLED",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_pixel-8a_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 135 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_pixel-7a",
    "title": "Google Pixel Pixel 7a",
    "subtitle": "Tensor G2 • 64MP Camera • Wireless Charging • 90Hz OLED",
    "brand": "Google Pixel",
    "category": "mobiles",
    "price": 298.7,
    "originalPrice": 364,
    "rating": 4.8,
    "reviewCount": 81,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 36,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "115.000 OMR",
      "Model Series": "Pixel 7a",
      "Brand": "Google Pixel",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Google Pixel Pixel 7a",
      "Tensor G2 • 64MP Camera • Wireless Charging • 90Hz OLED",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_pixel-7a_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 115 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_huawei-pura-80-pro",
    "title": "Huawei Huawei Pura 80 Pro",
    "subtitle": "Ultra Lighting XMAGE Macro • Satellite Calling • Kunlun Glass 2",
    "brand": "Huawei",
    "category": "mobiles",
    "price": 948.05,
    "originalPrice": 1157,
    "rating": 4.8999999999999995,
    "reviewCount": 88,
    "images": [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "FLAGSHIP",
    "stock": 40,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "365.000 OMR",
      "Model Series": "Huawei Pura 80 Pro",
      "Brand": "Huawei",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Huawei Huawei Pura 80 Pro",
      "Ultra Lighting XMAGE Macro • Satellite Calling • Kunlun Glass 2",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_huawei-pura-80-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 365 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_huawei-pura-80",
    "title": "Huawei Huawei Pura 80",
    "subtitle": "XMAGE Precision Imaging • 120Hz LTPO OLED • 66W SuperCharge",
    "brand": "Huawei",
    "category": "mobiles",
    "price": 727.27,
    "originalPrice": 887,
    "rating": 5,
    "reviewCount": 95,
    "images": [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 44,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "280.000 OMR",
      "Model Series": "Huawei Pura 80",
      "Brand": "Huawei",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Huawei Huawei Pura 80",
      "XMAGE Precision Imaging • 120Hz LTPO OLED • 66W SuperCharge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_huawei-pura-80_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 280 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_huawei-pura-70-pro",
    "title": "Huawei Huawei Pura 70 Pro",
    "subtitle": "Ultra Speed Snapshot • 5050mAh Battery • 100W SuperCharge",
    "brand": "Huawei",
    "category": "mobiles",
    "price": 805.19,
    "originalPrice": 982,
    "rating": 4.8,
    "reviewCount": 102,
    "images": [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 13,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "310.000 OMR",
      "Model Series": "Huawei Pura 70 Pro",
      "Brand": "Huawei",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Huawei Huawei Pura 70 Pro",
      "Ultra Speed Snapshot • 5050mAh Battery • 100W SuperCharge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_huawei-pura-70-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 310 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_huawei-pura-70",
    "title": "Huawei Huawei Pura 70",
    "subtitle": "Vibrant Forward Design • 50MP Ultra Lighting • IP68",
    "brand": "Huawei",
    "category": "mobiles",
    "price": 636.36,
    "originalPrice": 776,
    "rating": 4.8999999999999995,
    "reviewCount": 109,
    "images": [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 17,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "245.000 OMR",
      "Model Series": "Huawei Pura 70",
      "Brand": "Huawei",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Huawei Huawei Pura 70",
      "Vibrant Forward Design • 50MP Ultra Lighting • IP68",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_huawei-pura-70_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 245 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_huawei-nova-13-pro",
    "title": "Huawei Huawei Nova 13 Pro",
    "subtitle": "Dual Front Portrait • 60MP Ultra-Wide Selfie • 100W Turbo",
    "brand": "Huawei",
    "category": "mobiles",
    "price": 519.48,
    "originalPrice": 634,
    "rating": 5,
    "reviewCount": 116,
    "images": [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 21,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "200.000 OMR",
      "Model Series": "Huawei Nova 13 Pro",
      "Brand": "Huawei",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Huawei Huawei Nova 13 Pro",
      "Dual Front Portrait • 60MP Ultra-Wide Selfie • 100W Turbo",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_huawei-nova-13-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 200 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_huawei-nova-13",
    "title": "Huawei Huawei Nova 13",
    "subtitle": "Ultra-Slim Dynamic Design • 5000mAh Battery • 100W Charge",
    "brand": "Huawei",
    "category": "mobiles",
    "price": 350.65,
    "originalPrice": 428,
    "rating": 4.8,
    "reviewCount": 123,
    "images": [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 25,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "135.000 OMR",
      "Model Series": "Huawei Nova 13",
      "Brand": "Huawei",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Huawei Huawei Nova 13",
      "Ultra-Slim Dynamic Design • 5000mAh Battery • 100W Charge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_huawei-nova-13_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 135 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_huawei-nova-13i",
    "title": "Huawei Huawei Nova 13i",
    "subtitle": "108MP High-Res Portrait • 5000mAh • 40W SuperCharge",
    "brand": "Huawei",
    "category": "mobiles",
    "price": 251.95,
    "originalPrice": 307,
    "rating": 4.8999999999999995,
    "reviewCount": 130,
    "images": [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 29,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "97.000 OMR",
      "Model Series": "Huawei Nova 13i",
      "Brand": "Huawei",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Huawei Huawei Nova 13i",
      "108MP High-Res Portrait • 5000mAh • 40W SuperCharge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_huawei-nova-13i_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 97 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_huawei-nova-12i",
    "title": "Huawei Huawei Nova 12i",
    "subtitle": "108MP Camera • 5000mAh Super Battery • 40W Charge",
    "brand": "Huawei",
    "category": "mobiles",
    "price": 233.77,
    "originalPrice": 285,
    "rating": 5,
    "reviewCount": 137,
    "images": [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 33,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "90.000 OMR",
      "Model Series": "Huawei Nova 12i",
      "Brand": "Huawei",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Huawei Huawei Nova 12i",
      "108MP Camera • 5000mAh Super Battery • 40W Charge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_huawei-nova-12i_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 90 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_huawei-nova-y91",
    "title": "Huawei Huawei Nova Y91",
    "subtitle": "7000mAh Monster Battery • 6.95\" FullView Screen • Dual Stereo",
    "brand": "Huawei",
    "category": "mobiles",
    "price": 207.79,
    "originalPrice": 254,
    "rating": 4.8,
    "reviewCount": 144,
    "images": [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 37,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "80.000 OMR",
      "Model Series": "Huawei Nova Y91",
      "Brand": "Huawei",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Huawei Huawei Nova Y91",
      "7000mAh Monster Battery • 6.95\" FullView Screen • Dual Stereo",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_huawei-nova-y91_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 80 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_huawei-nova-y72",
    "title": "Huawei Huawei Nova Y72",
    "subtitle": "6000mAh Battery • 50MP AI Lens • X-Button Shortcut",
    "brand": "Huawei",
    "category": "mobiles",
    "price": 161.04,
    "originalPrice": 196,
    "rating": 4.8999999999999995,
    "reviewCount": 151,
    "images": [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 41,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "62.000 OMR",
      "Model Series": "Huawei Nova Y72",
      "Brand": "Huawei",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Huawei Huawei Nova Y72",
      "6000mAh Battery • 50MP AI Lens • X-Button Shortcut",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_huawei-nova-y72_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 62 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_tecno-phantom-v-fold2",
    "title": "Tecno Tecno Phantom V Fold2",
    "subtitle": "Foldable 7.85\" 120Hz AMOLED • 5750mAh Aircell Battery • 70W Ultra",
    "brand": "Tecno",
    "category": "mobiles",
    "price": 1012.99,
    "originalPrice": 1236,
    "rating": 5,
    "reviewCount": 158,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "HOT",
    "stock": 45,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "390.000 OMR",
      "Model Series": "Tecno Phantom V Fold2",
      "Brand": "Tecno",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Tecno Tecno Phantom V Fold2",
      "Foldable 7.85\" 120Hz AMOLED • 5750mAh Aircell Battery • 70W Ultra",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_tecno-phantom-v-fold2_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 390 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_tecno-camon-40-pro",
    "title": "Tecno Tecno Camon 40 Pro",
    "subtitle": "50MP Sony LYT-700 OIS • 120Hz 1.5K AMOLED • 70W FlashCharge",
    "brand": "Tecno",
    "category": "mobiles",
    "price": 264.94,
    "originalPrice": 323,
    "rating": 4.8,
    "reviewCount": 165,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 14,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "102.000 OMR",
      "Model Series": "Tecno Camon 40 Pro",
      "Brand": "Tecno",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Tecno Tecno Camon 40 Pro",
      "50MP Sony LYT-700 OIS • 120Hz 1.5K AMOLED • 70W FlashCharge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_tecno-camon-40-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 102 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_tecno-camon-40",
    "title": "Tecno Tecno Camon 40",
    "subtitle": "50MP Portrait Master • 5000mAh Battery • 45W Flash Charge",
    "brand": "Tecno",
    "category": "mobiles",
    "price": 212.99,
    "originalPrice": 260,
    "rating": 4.8999999999999995,
    "reviewCount": 172,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 18,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "82.000 OMR",
      "Model Series": "Tecno Camon 40",
      "Brand": "Tecno",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Tecno Tecno Camon 40",
      "50MP Portrait Master • 5000mAh Battery • 45W Flash Charge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_tecno-camon-40_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 82 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_tecno-camon-30",
    "title": "Tecno Tecno Camon 30",
    "subtitle": "50MP Eye-AF Selfie • 70W Ultra Charge • Dual Dolby Speakers",
    "brand": "Tecno",
    "category": "mobiles",
    "price": 194.81,
    "originalPrice": 238,
    "rating": 5,
    "reviewCount": 179,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 22,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "75.000 OMR",
      "Model Series": "Tecno Camon 30",
      "Brand": "Tecno",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Tecno Tecno Camon 30",
      "50MP Eye-AF Selfie • 70W Ultra Charge • Dual Dolby Speakers",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_tecno-camon-30_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 75 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_tecno-spark-40-pro",
    "title": "Tecno Tecno Spark 40 Pro",
    "subtitle": "108MP Ultra Camera • 120Hz Curved Screen • 33W Fast Charge",
    "brand": "Tecno",
    "category": "mobiles",
    "price": 174.03,
    "originalPrice": 212,
    "rating": 4.8,
    "reviewCount": 186,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 26,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "67.000 OMR",
      "Model Series": "Tecno Spark 40 Pro",
      "Brand": "Tecno",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Tecno Tecno Spark 40 Pro",
      "108MP Ultra Camera • 120Hz Curved Screen • 33W Fast Charge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_tecno-spark-40-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 67 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_tecno-spark-40",
    "title": "Tecno Tecno Spark 40",
    "subtitle": "50MP HD Lens • 5000mAh Battery • Dynamic Port Display",
    "brand": "Tecno",
    "category": "mobiles",
    "price": 135.06,
    "originalPrice": 165,
    "rating": 4.8999999999999995,
    "reviewCount": 193,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 30,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "52.000 OMR",
      "Model Series": "Tecno Spark 40",
      "Brand": "Tecno",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Tecno Tecno Spark 40",
      "50MP HD Lens • 5000mAh Battery • Dynamic Port Display",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_tecno-spark-40_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 52 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_tecno-spark-30-pro",
    "title": "Tecno Tecno Spark 30 Pro",
    "subtitle": "108MP Camera • 120Hz AMOLED • 33W Fast Charge",
    "brand": "Tecno",
    "category": "mobiles",
    "price": 148.05,
    "originalPrice": 181,
    "rating": 5,
    "reviewCount": 200,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 34,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "57.000 OMR",
      "Model Series": "Tecno Spark 30 Pro",
      "Brand": "Tecno",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Tecno Tecno Spark 30 Pro",
      "108MP Camera • 120Hz AMOLED • 33W Fast Charge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_tecno-spark-30-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 57 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_tecno-spark-30",
    "title": "Tecno Tecno Spark 30",
    "subtitle": "64MP SONY IMX682 • IP64 Rating • 5000mAh Battery",
    "brand": "Tecno",
    "category": "mobiles",
    "price": 122.08,
    "originalPrice": 149,
    "rating": 4.8,
    "reviewCount": 27,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 38,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "47.000 OMR",
      "Model Series": "Tecno Spark 30",
      "Brand": "Tecno",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Tecno Tecno Spark 30",
      "64MP SONY IMX682 • IP64 Rating • 5000mAh Battery",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_tecno-spark-30_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 47 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_tecno-spark-go-1",
    "title": "Tecno Tecno Spark Go 1",
    "subtitle": "120Hz Smooth Display • DTS Dual Speakers • 5000mAh",
    "brand": "Tecno",
    "category": "mobiles",
    "price": 90.91,
    "originalPrice": 111,
    "rating": 4.8999999999999995,
    "reviewCount": 34,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 42,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "35.000 OMR",
      "Model Series": "Tecno Spark Go 1",
      "Brand": "Tecno",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Tecno Tecno Spark Go 1",
      "120Hz Smooth Display • DTS Dual Speakers • 5000mAh",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_tecno-spark-go-1_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 35 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_tecno-pop-9",
    "title": "Tecno Tecno Pop 9",
    "subtitle": "4.5G Lightning Network • 120Hz Hole-Screen • 5000mAh",
    "brand": "Tecno",
    "category": "mobiles",
    "price": 77.92,
    "originalPrice": 95,
    "rating": 5,
    "reviewCount": 41,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 46,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "30.000 OMR",
      "Model Series": "Tecno Pop 9",
      "Brand": "Tecno",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Tecno Tecno Pop 9",
      "4.5G Lightning Network • 120Hz Hole-Screen • 5000mAh",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_tecno-pop-9_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 30 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_infinix-gt-30-pro",
    "title": "Infinix Infinix GT 30 Pro",
    "subtitle": "Cyber Mecha LED Design • 144Hz AMOLED • Dimensity 5G Gaming",
    "brand": "Infinix",
    "category": "mobiles",
    "price": 298.7,
    "originalPrice": 364,
    "rating": 4.8,
    "reviewCount": 48,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "GAMING",
    "stock": 15,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "115.000 OMR",
      "Model Series": "Infinix GT 30 Pro",
      "Brand": "Infinix",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Infinix Infinix GT 30 Pro",
      "Cyber Mecha LED Design • 144Hz AMOLED • Dimensity 5G Gaming",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_infinix-gt-30-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 115 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_infinix-gt-20-pro",
    "title": "Infinix Infinix GT 20 Pro",
    "subtitle": "Dimensity 8200 Ultimate • Pixelworks Gaming Chip • 144Hz",
    "brand": "Infinix",
    "category": "mobiles",
    "price": 264.94,
    "originalPrice": 323,
    "rating": 4.8999999999999995,
    "reviewCount": 55,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 19,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "102.000 OMR",
      "Model Series": "Infinix GT 20 Pro",
      "Brand": "Infinix",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Infinix Infinix GT 20 Pro",
      "Dimensity 8200 Ultimate • Pixelworks Gaming Chip • 144Hz",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_infinix-gt-20-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 102 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_infinix-note-50",
    "title": "Infinix Infinix Note 50",
    "subtitle": "108MP OIS Camera • 45W All-Round FastCharge • 120Hz AMOLED",
    "brand": "Infinix",
    "category": "mobiles",
    "price": 207.79,
    "originalPrice": 254,
    "rating": 5,
    "reviewCount": 62,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 23,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "80.000 OMR",
      "Model Series": "Infinix Note 50",
      "Brand": "Infinix",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Infinix Infinix Note 50",
      "108MP OIS Camera • 45W All-Round FastCharge • 120Hz AMOLED",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_infinix-note-50_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 80 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_infinix-note-40",
    "title": "Infinix Infinix Note 40",
    "subtitle": "45W Wired + 20W Wireless MagCharge • 108MP 3x Superzoom",
    "brand": "Infinix",
    "category": "mobiles",
    "price": 181.82,
    "originalPrice": 222,
    "rating": 4.8,
    "reviewCount": 69,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 27,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "70.000 OMR",
      "Model Series": "Infinix Note 40",
      "Brand": "Infinix",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Infinix Infinix Note 40",
      "45W Wired + 20W Wireless MagCharge • 108MP 3x Superzoom",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_infinix-note-40_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 70 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_infinix-hot-60",
    "title": "Infinix Infinix Hot 60",
    "subtitle": "120Hz Punch-Hole Screen • 5000mAh Battery • 33W FastCharge",
    "brand": "Infinix",
    "category": "mobiles",
    "price": 122.08,
    "originalPrice": 149,
    "rating": 4.8999999999999995,
    "reviewCount": 76,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 31,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "47.000 OMR",
      "Model Series": "Infinix Hot 60",
      "Brand": "Infinix",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Infinix Infinix Hot 60",
      "120Hz Punch-Hole Screen • 5000mAh Battery • 33W FastCharge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_infinix-hot-60_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 47 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_infinix-hot-50-pro",
    "title": "Infinix Infinix Hot 50 Pro",
    "subtitle": "Helio G100 • 120Hz AMOLED Display • 33W Fast Charge",
    "brand": "Infinix",
    "category": "mobiles",
    "price": 148.05,
    "originalPrice": 181,
    "rating": 5,
    "reviewCount": 83,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 35,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "57.000 OMR",
      "Model Series": "Infinix Hot 50 Pro",
      "Brand": "Infinix",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Infinix Infinix Hot 50 Pro",
      "Helio G100 • 120Hz AMOLED Display • 33W Fast Charge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_infinix-hot-50-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 57 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_infinix-hot-50",
    "title": "Infinix Infinix Hot 50",
    "subtitle": "Helio G100 Processor • 120Hz Smooth Screen • 50MP Sony",
    "brand": "Infinix",
    "category": "mobiles",
    "price": 122.08,
    "originalPrice": 149,
    "rating": 4.8,
    "reviewCount": 90,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 39,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "47.000 OMR",
      "Model Series": "Infinix Hot 50",
      "Brand": "Infinix",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Infinix Infinix Hot 50",
      "Helio G100 Processor • 120Hz Smooth Screen • 50MP Sony",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_infinix-hot-50_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 47 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_infinix-hot-50i",
    "title": "Infinix Infinix Hot 50i",
    "subtitle": "120Hz Punch-Hole Screen • 5000mAh Battery • 18W Fast Charge",
    "brand": "Infinix",
    "category": "mobiles",
    "price": 90.91,
    "originalPrice": 111,
    "rating": 4.8999999999999995,
    "reviewCount": 97,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 43,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "35.000 OMR",
      "Model Series": "Infinix Hot 50i",
      "Brand": "Infinix",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Infinix Infinix Hot 50i",
      "120Hz Punch-Hole Screen • 5000mAh Battery • 18W Fast Charge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_infinix-hot-50i_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 35 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_infinix-smart-10",
    "title": "Infinix Infinix Smart 10",
    "subtitle": "6.7\" 120Hz Display • Dynamic Bar Notifications • 5000mAh",
    "brand": "Infinix",
    "category": "mobiles",
    "price": 88.31,
    "originalPrice": 108,
    "rating": 5,
    "reviewCount": 104,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 12,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "34.000 OMR",
      "Model Series": "Infinix Smart 10",
      "Brand": "Infinix",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Infinix Infinix Smart 10",
      "6.7\" 120Hz Display • Dynamic Bar Notifications • 5000mAh",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_infinix-smart-10_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 34 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_infinix-smart-9",
    "title": "Infinix Infinix Smart 9",
    "subtitle": "120Hz Smooth Display • Dual Speakers • 5000mAh Long Life",
    "brand": "Infinix",
    "category": "mobiles",
    "price": 77.92,
    "originalPrice": 95,
    "rating": 4.8,
    "reviewCount": 111,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 16,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "30.000 OMR",
      "Model Series": "Infinix Smart 9",
      "Brand": "Infinix",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Infinix Infinix Smart 9",
      "120Hz Smooth Display • Dual Speakers • 5000mAh Long Life",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_infinix-smart-9_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 30 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_itel-rs4",
    "title": "itel itel RS4",
    "subtitle": "Helio G99 Ultimate Gaming • 120Hz Display • 45W PowerCharge",
    "brand": "itel",
    "category": "mobiles",
    "price": 135.06,
    "originalPrice": 165,
    "rating": 4.8999999999999995,
    "reviewCount": 118,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 20,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "52.000 OMR",
      "Model Series": "itel RS4",
      "Brand": "itel",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - itel itel RS4",
      "Helio G99 Ultimate Gaming • 120Hz Display • 45W PowerCharge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_itel-rs4_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 52 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_itel-s24",
    "title": "itel itel S24",
    "subtitle": "108MP Ultra-Clear Camera • Color Changing Back • Helio G91",
    "brand": "itel",
    "category": "mobiles",
    "price": 109.09,
    "originalPrice": 133,
    "rating": 5,
    "reviewCount": 125,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 24,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "42.000 OMR",
      "Model Series": "itel S24",
      "Brand": "itel",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - itel itel S24",
      "108MP Ultra-Clear Camera • Color Changing Back • Helio G91",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_itel-s24_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 42 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_itel-p65",
    "title": "itel itel P65",
    "subtitle": "Cyberpunk Ring Light • 5000mAh + 2400mAh Case • 120Hz",
    "brand": "itel",
    "category": "mobiles",
    "price": 103.9,
    "originalPrice": 127,
    "rating": 4.8,
    "reviewCount": 132,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 28,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "40.000 OMR",
      "Model Series": "itel P65",
      "Brand": "itel",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - itel itel P65",
      "Cyberpunk Ring Light • 5000mAh + 2400mAh Case • 120Hz",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_itel-p65_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 40 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_itel-p55",
    "title": "itel itel P55",
    "subtitle": "5G High Speed • 50MP AI Lens • 5000mAh • 18W Fast Charge",
    "brand": "itel",
    "category": "mobiles",
    "price": 90.91,
    "originalPrice": 111,
    "rating": 4.8999999999999995,
    "reviewCount": 139,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 32,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "35.000 OMR",
      "Model Series": "itel P55",
      "Brand": "itel",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - itel itel P55",
      "5G High Speed • 50MP AI Lens • 5000mAh • 18W Fast Charge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_itel-p55_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 35 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_itel-p40",
    "title": "itel itel P40",
    "subtitle": "6000mAh Mega Battery • 6.6\" HD+ Screen • 18W Fast Charging",
    "brand": "itel",
    "category": "mobiles",
    "price": 77.92,
    "originalPrice": 95,
    "rating": 5,
    "reviewCount": 146,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 36,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "30.000 OMR",
      "Model Series": "itel P40",
      "Brand": "itel",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - itel itel P40",
      "6000mAh Mega Battery • 6.6\" HD+ Screen • 18W Fast Charging",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_itel-p40_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 30 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_itel-a80",
    "title": "itel itel A80",
    "subtitle": "120Hz Punch-Hole • 50MP HDR Camera • 5000mAh Battery",
    "brand": "itel",
    "category": "mobiles",
    "price": 85.71,
    "originalPrice": 105,
    "rating": 4.8,
    "reviewCount": 153,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 40,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "33.000 OMR",
      "Model Series": "itel A80",
      "Brand": "itel",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - itel itel A80",
      "120Hz Punch-Hole • 50MP HDR Camera • 5000mAh Battery",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_itel-a80_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 33 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_itel-a70",
    "title": "itel itel A70",
    "subtitle": "Dynamic Bar • Up to 256GB Big Storage • 5000mAh",
    "brand": "itel",
    "category": "mobiles",
    "price": 77.92,
    "originalPrice": 95,
    "rating": 4.8999999999999995,
    "reviewCount": 160,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 44,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "30.000 OMR",
      "Model Series": "itel A70",
      "Brand": "itel",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - itel itel A70",
      "Dynamic Bar • Up to 256GB Big Storage • 5000mAh",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_itel-a70_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 30 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_itel-a50",
    "title": "itel itel A50",
    "subtitle": "6.6\" HD+ Big Screen • 5000mAh Type-C • 8MP AI Camera",
    "brand": "itel",
    "category": "mobiles",
    "price": 77.92,
    "originalPrice": 95,
    "rating": 5,
    "reviewCount": 167,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 13,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "30.000 OMR",
      "Model Series": "itel A50",
      "Brand": "itel",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - itel itel A50",
      "6.6\" HD+ Big Screen • 5000mAh Type-C • 8MP AI Camera",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_itel-a50_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 30 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_itel-a06",
    "title": "itel itel A06",
    "subtitle": "4000mAh Battery • Android Go Edition • Compact Design",
    "brand": "itel",
    "category": "mobiles",
    "price": 67.53,
    "originalPrice": 82,
    "rating": 4.8,
    "reviewCount": 174,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 17,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "26.000 OMR",
      "Model Series": "itel A06",
      "Brand": "itel",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - itel itel A06",
      "4000mAh Battery • Android Go Edition • Compact Design",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_itel-a06_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 26 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_itel-a05s",
    "title": "itel itel A05s",
    "subtitle": "4000mAh Battery • Type-C Port • 6.6\" HD+ Waterdrop",
    "brand": "itel",
    "category": "mobiles",
    "price": 62.34,
    "originalPrice": 76,
    "rating": 4.8999999999999995,
    "reviewCount": 181,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 21,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "24.000 OMR",
      "Model Series": "itel A05s",
      "Brand": "itel",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - itel itel A05s",
      "4000mAh Battery • Type-C Port • 6.6\" HD+ Waterdrop",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_itel-a05s_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 24 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_hmd-skyline",
    "title": "Nokia / HMD HMD Skyline",
    "subtitle": "108MP OIS Hybrid Zoom • Gen 2 Easy Repairability • 144Hz pOLED",
    "brand": "Nokia / HMD",
    "category": "mobiles",
    "price": 272.73,
    "originalPrice": 333,
    "rating": 5,
    "reviewCount": 188,
    "images": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "HOT",
    "stock": 25,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "105.000 OMR",
      "Model Series": "HMD Skyline",
      "Brand": "Nokia / HMD",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Nokia / HMD HMD Skyline",
      "108MP OIS Hybrid Zoom • Gen 2 Easy Repairability • 144Hz pOLED",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_hmd-skyline_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 105 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_hmd-pulse",
    "title": "Nokia / HMD HMD Pulse",
    "subtitle": "Self-Repairable Design • 5000mAh 3-Day Battery • 90Hz Screen",
    "brand": "Nokia / HMD",
    "category": "mobiles",
    "price": 109.09,
    "originalPrice": 133,
    "rating": 4.8,
    "reviewCount": 195,
    "images": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 29,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "42.000 OMR",
      "Model Series": "HMD Pulse",
      "Brand": "Nokia / HMD",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Nokia / HMD HMD Pulse",
      "Self-Repairable Design • 5000mAh 3-Day Battery • 90Hz Screen",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_hmd-pulse_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 42 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_nokia-x30-5g",
    "title": "Nokia / HMD Nokia X30 5G",
    "subtitle": "100% Recycled Aluminum • 50MP PureView OIS • 90Hz AMOLED",
    "brand": "Nokia / HMD",
    "category": "mobiles",
    "price": 298.7,
    "originalPrice": 364,
    "rating": 4.8999999999999995,
    "reviewCount": 202,
    "images": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 33,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "115.000 OMR",
      "Model Series": "Nokia X30 5G",
      "Brand": "Nokia / HMD",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Nokia / HMD Nokia X30 5G",
      "100% Recycled Aluminum • 50MP PureView OIS • 90Hz AMOLED",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_nokia-x30-5g_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 115 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_nokia-g60-5g",
    "title": "Nokia / HMD Nokia G60 5G",
    "subtitle": "5G Connectivity • 50MP Triple AI • 120Hz FHD+ Screen",
    "brand": "Nokia / HMD",
    "category": "mobiles",
    "price": 207.79,
    "originalPrice": 254,
    "rating": 5,
    "reviewCount": 29,
    "images": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 37,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "80.000 OMR",
      "Model Series": "Nokia G60 5G",
      "Brand": "Nokia / HMD",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Nokia / HMD Nokia G60 5G",
      "5G Connectivity • 50MP Triple AI • 120Hz FHD+ Screen",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_nokia-g60-5g_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 80 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_nokia-g42-5g",
    "title": "Nokia / HMD Nokia G42 5G",
    "subtitle": "QuickFix Repairability • 50MP Camera • 3-Day Battery Life",
    "brand": "Nokia / HMD",
    "category": "mobiles",
    "price": 148.05,
    "originalPrice": 181,
    "rating": 4.8,
    "reviewCount": 36,
    "images": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 41,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "57.000 OMR",
      "Model Series": "Nokia G42 5G",
      "Brand": "Nokia / HMD",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Nokia / HMD Nokia G42 5G",
      "QuickFix Repairability • 50MP Camera • 3-Day Battery Life",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_nokia-g42-5g_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 57 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_nokia-g22",
    "title": "Nokia / HMD Nokia G22",
    "subtitle": "iFixit At-Home Repair • 50MP AI Lens • 5050mAh Battery",
    "brand": "Nokia / HMD",
    "category": "mobiles",
    "price": 122.08,
    "originalPrice": 149,
    "rating": 4.8999999999999995,
    "reviewCount": 43,
    "images": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 45,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "47.000 OMR",
      "Model Series": "Nokia G22",
      "Brand": "Nokia / HMD",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Nokia / HMD Nokia G22",
      "iFixit At-Home Repair • 50MP AI Lens • 5050mAh Battery",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_nokia-g22_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 47 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_nokia-c52",
    "title": "Nokia / HMD Nokia C52",
    "subtitle": "Tough Polycarbonate Shell • 5000mAh • Android 14",
    "brand": "Nokia / HMD",
    "category": "mobiles",
    "price": 103.9,
    "originalPrice": 127,
    "rating": 5,
    "reviewCount": 50,
    "images": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 14,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "40.000 OMR",
      "Model Series": "Nokia C52",
      "Brand": "Nokia / HMD",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Nokia / HMD Nokia C52",
      "Tough Polycarbonate Shell • 5000mAh • Android 14",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_nokia-c52_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 40 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_nokia-c42",
    "title": "Nokia / HMD Nokia C42",
    "subtitle": "Durable Drop Tested • 5000mAh Battery • 6.5\" HD+",
    "brand": "Nokia / HMD",
    "category": "mobiles",
    "price": 90.91,
    "originalPrice": 111,
    "rating": 4.8,
    "reviewCount": 57,
    "images": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 18,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "35.000 OMR",
      "Model Series": "Nokia C42",
      "Brand": "Nokia / HMD",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Nokia / HMD Nokia C42",
      "Durable Drop Tested • 5000mAh Battery • 6.5\" HD+",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_nokia-c42_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 35 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_nokia-c32",
    "title": "Nokia / HMD Nokia C32",
    "subtitle": "Toughened Glass Back • 50MP Night Camera • 3-Day Battery",
    "brand": "Nokia / HMD",
    "category": "mobiles",
    "price": 90.91,
    "originalPrice": 111,
    "rating": 4.8999999999999995,
    "reviewCount": 64,
    "images": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 22,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "35.000 OMR",
      "Model Series": "Nokia C32",
      "Brand": "Nokia / HMD",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Nokia / HMD Nokia C32",
      "Toughened Glass Back • 50MP Night Camera • 3-Day Battery",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_nokia-c32_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 35 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_nokia-c22",
    "title": "Nokia / HMD Nokia C22",
    "subtitle": "IP52 Splash Protection • Metal Internal Chassis • 5000mAh",
    "brand": "Nokia / HMD",
    "category": "mobiles",
    "price": 77.92,
    "originalPrice": 95,
    "rating": 5,
    "reviewCount": 71,
    "images": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 26,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "30.000 OMR",
      "Model Series": "Nokia C22",
      "Brand": "Nokia / HMD",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Nokia / HMD Nokia C22",
      "IP52 Splash Protection • Metal Internal Chassis • 5000mAh",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_nokia-c22_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 30 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_xperia-1-vii",
    "title": "Sony Xperia 1 VII",
    "subtitle": "Exmor T Optical Telephoto 85-170mm • 4K HDR OLED 120Hz • Hi-Res Audio",
    "brand": "Sony",
    "category": "mobiles",
    "price": 1012.99,
    "originalPrice": 1236,
    "rating": 4.8,
    "reviewCount": 78,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "FLAGSHIP",
    "stock": 30,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "390.000 OMR",
      "Model Series": "Xperia 1 VII",
      "Brand": "Sony",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Sony Xperia 1 VII",
      "Exmor T Optical Telephoto 85-170mm • 4K HDR OLED 120Hz • Hi-Res Audio",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_xperia-1-vii_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 390 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_xperia-1-vi",
    "title": "Sony Xperia 1 VI",
    "subtitle": "True Optical Zoom 85-170mm • Bravia Display Tech • Snapdragon 8 Gen 3",
    "brand": "Sony",
    "category": "mobiles",
    "price": 935.06,
    "originalPrice": 1141,
    "rating": 4.8999999999999995,
    "reviewCount": 85,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 34,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "360.000 OMR",
      "Model Series": "Xperia 1 VI",
      "Brand": "Sony",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Sony Xperia 1 VI",
      "True Optical Zoom 85-170mm • Bravia Display Tech • Snapdragon 8 Gen 3",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_xperia-1-vi_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 360 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_xperia-1-v",
    "title": "Sony Xperia 1 V",
    "subtitle": "Next-Gen Exmor T Sensor • 4K 120fps HDR • Creative Look Color Modes",
    "brand": "Sony",
    "category": "mobiles",
    "price": 870.13,
    "originalPrice": 1062,
    "rating": 5,
    "reviewCount": 92,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 38,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "335.000 OMR",
      "Model Series": "Xperia 1 V",
      "Brand": "Sony",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Sony Xperia 1 V",
      "Next-Gen Exmor T Sensor • 4K 120fps HDR • Creative Look Color Modes",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_xperia-1-v_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 335 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_xperia-1-iv",
    "title": "Sony Xperia 1 IV",
    "subtitle": "Continuous Optical Zoom 85-125mm • 4K 120Hz OLED • Cinematography Pro",
    "brand": "Sony",
    "category": "mobiles",
    "price": 740.26,
    "originalPrice": 903,
    "rating": 4.8,
    "reviewCount": 99,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 42,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "285.000 OMR",
      "Model Series": "Xperia 1 IV",
      "Brand": "Sony",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Sony Xperia 1 IV",
      "Continuous Optical Zoom 85-125mm • 4K 120Hz OLED • Cinematography Pro",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_xperia-1-iv_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 285 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_xperia-5-v",
    "title": "Sony Xperia 5 V",
    "subtitle": "Compact Flagship • Exmor T Dual Camera • Studio Stereo Speakers",
    "brand": "Sony",
    "category": "mobiles",
    "price": 662.34,
    "originalPrice": 808,
    "rating": 4.8999999999999995,
    "reviewCount": 106,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 46,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "255.000 OMR",
      "Model Series": "Xperia 5 V",
      "Brand": "Sony",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Sony Xperia 5 V",
      "Compact Flagship • Exmor T Dual Camera • Studio Stereo Speakers",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_xperia-5-v_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 255 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_xperia-5-iv",
    "title": "Sony Xperia 5 IV",
    "subtitle": "Eye AF All Lenses • 5000mAh Long Battery • 6.1\" 120Hz OLED",
    "brand": "Sony",
    "category": "mobiles",
    "price": 532.47,
    "originalPrice": 650,
    "rating": 5,
    "reviewCount": 113,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 15,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "205.000 OMR",
      "Model Series": "Xperia 5 IV",
      "Brand": "Sony",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Sony Xperia 5 IV",
      "Eye AF All Lenses • 5000mAh Long Battery • 6.1\" 120Hz OLED",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_xperia-5-iv_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 205 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_xperia-10-vii",
    "title": "Sony Xperia 10 VII",
    "subtitle": "Ultra-Lightweight 159g • 5000mAh 2-Day Battery • IP65/68",
    "brand": "Sony",
    "category": "mobiles",
    "price": 441.56,
    "originalPrice": 539,
    "rating": 4.8,
    "reviewCount": 120,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 19,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "170.000 OMR",
      "Model Series": "Xperia 10 VII",
      "Brand": "Sony",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Sony Xperia 10 VII",
      "Ultra-Lightweight 159g • 5000mAh 2-Day Battery • IP65/68",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_xperia-10-vii_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 170 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_xperia-10-vi",
    "title": "Sony Xperia 10 VI",
    "subtitle": "2-Day Battery Life • Front Stereo Speakers • Optical Image Stabilization",
    "brand": "Sony",
    "category": "mobiles",
    "price": 389.61,
    "originalPrice": 475,
    "rating": 4.8999999999999995,
    "reviewCount": 127,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 23,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "150.000 OMR",
      "Model Series": "Xperia 10 VI",
      "Brand": "Sony",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Sony Xperia 10 VI",
      "2-Day Battery Life • Front Stereo Speakers • Optical Image Stabilization",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_xperia-10-vi_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 150 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_xperia-10-v",
    "title": "Sony Xperia 10 V",
    "subtitle": "High-Capacity 5000mAh • 6.1\" 21:9 OLED • Triple Camera",
    "brand": "Sony",
    "category": "mobiles",
    "price": 350.65,
    "originalPrice": 428,
    "rating": 5,
    "reviewCount": 134,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 27,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "135.000 OMR",
      "Model Series": "Xperia 10 V",
      "Brand": "Sony",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Sony Xperia 10 V",
      "High-Capacity 5000mAh • 6.1\" 21:9 OLED • Triple Camera",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_xperia-10-v_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 135 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_xperia-10-iv",
    "title": "Sony Xperia 10 IV",
    "subtitle": "Compact 5G • 5000mAh Battery • OLED Triluminos Display",
    "brand": "Sony",
    "category": "mobiles",
    "price": 298.7,
    "originalPrice": 364,
    "rating": 4.8,
    "reviewCount": 141,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 31,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "115.000 OMR",
      "Model Series": "Xperia 10 IV",
      "Brand": "Sony",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Sony Xperia 10 IV",
      "Compact 5G • 5000mAh Battery • OLED Triluminos Display",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_xperia-10-iv_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 115 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_rog-phone-9-pro",
    "title": "ASUS / ROG ROG Phone 9 Pro",
    "subtitle": "Snapdragon 8 Elite • AniMe Vision Matrix • 185Hz AMOLED • AirTrigger AI",
    "brand": "ASUS / ROG",
    "category": "mobiles",
    "price": 1142.86,
    "originalPrice": 1394,
    "rating": 4.8999999999999995,
    "reviewCount": 148,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "GAMING",
    "stock": 35,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "440.000 OMR",
      "Model Series": "ROG Phone 9 Pro",
      "Brand": "ASUS / ROG",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - ASUS / ROG ROG Phone 9 Pro",
      "Snapdragon 8 Elite • AniMe Vision Matrix • 185Hz AMOLED • AirTrigger AI",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_rog-phone-9-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 440 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_rog-phone-9",
    "title": "ASUS / ROG ROG Phone 9",
    "subtitle": "Snapdragon 8 Elite • 185Hz AMOLED • GameCool 9 Thermal",
    "brand": "ASUS / ROG",
    "category": "mobiles",
    "price": 948.05,
    "originalPrice": 1157,
    "rating": 5,
    "reviewCount": 155,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 39,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "365.000 OMR",
      "Model Series": "ROG Phone 9",
      "Brand": "ASUS / ROG",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - ASUS / ROG ROG Phone 9",
      "Snapdragon 8 Elite • 185Hz AMOLED • GameCool 9 Thermal",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_rog-phone-9_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 365 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_rog-phone-8-pro",
    "title": "ASUS / ROG ROG Phone 8 Pro",
    "subtitle": "AniMe Matrix Display • Gimbal Stabilizer • IP68 Waterproof",
    "brand": "ASUS / ROG",
    "category": "mobiles",
    "price": 1000,
    "originalPrice": 1220,
    "rating": 4.8,
    "reviewCount": 162,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 43,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "385.000 OMR",
      "Model Series": "ROG Phone 8 Pro",
      "Brand": "ASUS / ROG",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - ASUS / ROG ROG Phone 8 Pro",
      "AniMe Matrix Display • Gimbal Stabilizer • IP68 Waterproof",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_rog-phone-8-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 385 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_rog-phone-8",
    "title": "ASUS / ROG ROG Phone 8",
    "subtitle": "Snapdragon 8 Gen 3 • 165Hz LTPO OLED • 5500mAh 65W HyperCharge",
    "brand": "ASUS / ROG",
    "category": "mobiles",
    "price": 870.13,
    "originalPrice": 1062,
    "rating": 4.8999999999999995,
    "reviewCount": 169,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 12,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "335.000 OMR",
      "Model Series": "ROG Phone 8",
      "Brand": "ASUS / ROG",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - ASUS / ROG ROG Phone 8",
      "Snapdragon 8 Gen 3 • 165Hz LTPO OLED • 5500mAh 65W HyperCharge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_rog-phone-8_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 335 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_rog-phone-7",
    "title": "ASUS / ROG ROG Phone 7",
    "subtitle": "Snapdragon 8 Gen 2 • AeroActive Portal • 6000mAh Monster",
    "brand": "ASUS / ROG",
    "category": "mobiles",
    "price": 740.26,
    "originalPrice": 903,
    "rating": 5,
    "reviewCount": 176,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 16,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "285.000 OMR",
      "Model Series": "ROG Phone 7",
      "Brand": "ASUS / ROG",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - ASUS / ROG ROG Phone 7",
      "Snapdragon 8 Gen 2 • AeroActive Portal • 6000mAh Monster",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_rog-phone-7_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 285 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_rog-phone-6",
    "title": "ASUS / ROG ROG Phone 6",
    "subtitle": "Snapdragon 8+ Gen 1 • 165Hz AMOLED • Monster 6000mAh",
    "brand": "ASUS / ROG",
    "category": "mobiles",
    "price": 649.35,
    "originalPrice": 792,
    "rating": 4.8,
    "reviewCount": 183,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 20,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "250.000 OMR",
      "Model Series": "ROG Phone 6",
      "Brand": "ASUS / ROG",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - ASUS / ROG ROG Phone 6",
      "Snapdragon 8+ Gen 1 • 165Hz AMOLED • Monster 6000mAh",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_rog-phone-6_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 250 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_zenfone-12-ultra",
    "title": "ASUS / ROG Zenfone 12 Ultra",
    "subtitle": "Snapdragon 8 Elite • 6-Axis Hybrid Gimbal • 144Hz AMOLED",
    "brand": "ASUS / ROG",
    "category": "mobiles",
    "price": 870.13,
    "originalPrice": 1062,
    "rating": 4.8999999999999995,
    "reviewCount": 190,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 24,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "335.000 OMR",
      "Model Series": "Zenfone 12 Ultra",
      "Brand": "ASUS / ROG",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - ASUS / ROG Zenfone 12 Ultra",
      "Snapdragon 8 Elite • 6-Axis Hybrid Gimbal • 144Hz AMOLED",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_zenfone-12-ultra_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 335 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_zenfone-11",
    "title": "ASUS / ROG Zenfone 11",
    "subtitle": "Snapdragon 8 Gen 3 • AI Transcript & Summary • 5500mAh",
    "brand": "ASUS / ROG",
    "category": "mobiles",
    "price": 662.34,
    "originalPrice": 808,
    "rating": 5,
    "reviewCount": 197,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 28,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "255.000 OMR",
      "Model Series": "Zenfone 11",
      "Brand": "ASUS / ROG",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - ASUS / ROG Zenfone 11",
      "Snapdragon 8 Gen 3 • AI Transcript & Summary • 5500mAh",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_zenfone-11_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 255 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_zenfone-10",
    "title": "ASUS / ROG Zenfone 10",
    "subtitle": "5.9\" Compact Flagship • 6-Axis Gimbal 2.0 • Wireless Charging",
    "brand": "ASUS / ROG",
    "category": "mobiles",
    "price": 584.42,
    "originalPrice": 713,
    "rating": 4.8,
    "reviewCount": 24,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 32,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "225.000 OMR",
      "Model Series": "Zenfone 10",
      "Brand": "ASUS / ROG",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - ASUS / ROG Zenfone 10",
      "5.9\" Compact Flagship • 6-Axis Gimbal 2.0 • Wireless Charging",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_zenfone-10_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 225 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_zenfone-9",
    "title": "ASUS / ROG Zenfone 9",
    "subtitle": "Compact 5.9\" 120Hz AMOLED • Snapdragon 8+ Gen 1 • IP68",
    "brand": "ASUS / ROG",
    "category": "mobiles",
    "price": 532.47,
    "originalPrice": 650,
    "rating": 4.8999999999999995,
    "reviewCount": 31,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 36,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "205.000 OMR",
      "Model Series": "Zenfone 9",
      "Brand": "ASUS / ROG",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - ASUS / ROG Zenfone 9",
      "Compact 5.9\" 120Hz AMOLED • Snapdragon 8+ Gen 1 • IP68",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_zenfone-9_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 205 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_nothing-phone-3-",
    "title": "Nothing Nothing Phone (3)",
    "subtitle": "Next-Gen Glyph Matrix • Snapdragon Flagship • Nothing OS 3.0 Clean UI",
    "brand": "Nothing",
    "category": "mobiles",
    "price": 675.32,
    "originalPrice": 824,
    "rating": 5,
    "reviewCount": 38,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "HOT",
    "stock": 40,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "260.000 OMR",
      "Model Series": "Nothing Phone (3)",
      "Brand": "Nothing",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Nothing Nothing Phone (3)",
      "Next-Gen Glyph Matrix • Snapdragon Flagship • Nothing OS 3.0 Clean UI",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_nothing-phone-3-_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 260 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_nothing-phone-3a-pro",
    "title": "Nothing Nothing Phone (3a) Pro",
    "subtitle": "Periscope Telephoto Lens • Glyph Interface 2.0 • 120Hz AMOLED",
    "brand": "Nothing",
    "category": "mobiles",
    "price": 441.56,
    "originalPrice": 539,
    "rating": 4.8,
    "reviewCount": 45,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 44,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "170.000 OMR",
      "Model Series": "Nothing Phone (3a) Pro",
      "Brand": "Nothing",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Nothing Nothing Phone (3a) Pro",
      "Periscope Telephoto Lens • Glyph Interface 2.0 • 120Hz AMOLED",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_nothing-phone-3a-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 170 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_nothing-phone-3a-",
    "title": "Nothing Nothing Phone (3a)",
    "subtitle": "Dimensity 7300-Pro • Transparent Aesthetic • 50MP Sony Dual",
    "brand": "Nothing",
    "category": "mobiles",
    "price": 350.65,
    "originalPrice": 428,
    "rating": 4.8999999999999995,
    "reviewCount": 52,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 13,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "135.000 OMR",
      "Model Series": "Nothing Phone (3a)",
      "Brand": "Nothing",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Nothing Nothing Phone (3a)",
      "Dimensity 7300-Pro • Transparent Aesthetic • 50MP Sony Dual",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_nothing-phone-3a-_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 135 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_nothing-phone-2a-plus",
    "title": "Nothing Nothing Phone (2a) Plus",
    "subtitle": "Dimensity 7350 Pro 5G • 50MP Selfie • 50W Fast Charge",
    "brand": "Nothing",
    "category": "mobiles",
    "price": 324.68,
    "originalPrice": 396,
    "rating": 5,
    "reviewCount": 59,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 17,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "125.000 OMR",
      "Model Series": "Nothing Phone (2a) Plus",
      "Brand": "Nothing",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Nothing Nothing Phone (2a) Plus",
      "Dimensity 7350 Pro 5G • 50MP Selfie • 50W Fast Charge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_nothing-phone-2a-plus_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 125 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_nothing-phone-2a-",
    "title": "Nothing Nothing Phone (2a)",
    "subtitle": "Dimensity 7200 Pro • 50MP Dual Camera • 45W Charge",
    "brand": "Nothing",
    "category": "mobiles",
    "price": 264.94,
    "originalPrice": 323,
    "rating": 4.8,
    "reviewCount": 66,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 21,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "102.000 OMR",
      "Model Series": "Nothing Phone (2a)",
      "Brand": "Nothing",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Nothing Nothing Phone (2a)",
      "Dimensity 7200 Pro • 50MP Dual Camera • 45W Charge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_nothing-phone-2a-_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 102 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_nothing-phone-2-",
    "title": "Nothing Nothing Phone (2)",
    "subtitle": "Snapdragon 8+ Gen 1 • Glyph Interface 2.0 • 50MP Sony IMX890",
    "brand": "Nothing",
    "category": "mobiles",
    "price": 441.56,
    "originalPrice": 539,
    "rating": 4.8999999999999995,
    "reviewCount": 73,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 25,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "170.000 OMR",
      "Model Series": "Nothing Phone (2)",
      "Brand": "Nothing",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Nothing Nothing Phone (2)",
      "Snapdragon 8+ Gen 1 • Glyph Interface 2.0 • 50MP Sony IMX890",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_nothing-phone-2-_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 170 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_nothing-phone-1-",
    "title": "Nothing Nothing Phone (1)",
    "subtitle": "Iconic Glyph Interface • 120Hz OLED • 50MP Dual Camera",
    "brand": "Nothing",
    "category": "mobiles",
    "price": 298.7,
    "originalPrice": 364,
    "rating": 5,
    "reviewCount": 80,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 29,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "115.000 OMR",
      "Model Series": "Nothing Phone (1)",
      "Brand": "Nothing",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Nothing Nothing Phone (1)",
      "Iconic Glyph Interface • 120Hz OLED • 50MP Dual Camera",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_nothing-phone-1-_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 115 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_cmf-phone-2-pro",
    "title": "Nothing CMF Phone 2 Pro",
    "subtitle": "Modular Accessory Dial • 50MP Sony Sensor • 120Hz Super AMOLED",
    "brand": "Nothing",
    "category": "mobiles",
    "price": 264.94,
    "originalPrice": 323,
    "rating": 4.8,
    "reviewCount": 87,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 33,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "102.000 OMR",
      "Model Series": "CMF Phone 2 Pro",
      "Brand": "Nothing",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Nothing CMF Phone 2 Pro",
      "Modular Accessory Dial • 50MP Sony Sensor • 120Hz Super AMOLED",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_cmf-phone-2-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 102 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_cmf-phone-2",
    "title": "Nothing CMF Phone 2",
    "subtitle": "Customizable Back Cover • Dimensity 5G • 5000mAh Battery",
    "brand": "Nothing",
    "category": "mobiles",
    "price": 238.96,
    "originalPrice": 292,
    "rating": 4.8999999999999995,
    "reviewCount": 94,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 37,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "92.000 OMR",
      "Model Series": "CMF Phone 2",
      "Brand": "Nothing",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Nothing CMF Phone 2",
      "Customizable Back Cover • Dimensity 5G • 5000mAh Battery",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_cmf-phone-2_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 92 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_cmf-phone-1",
    "title": "Nothing CMF Phone 1",
    "subtitle": "Interchangeable Back Case • Dimensity 7300 5G • 50MP Sony",
    "brand": "Nothing",
    "category": "mobiles",
    "price": 207.79,
    "originalPrice": 254,
    "rating": 5,
    "reviewCount": 101,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 41,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "80.000 OMR",
      "Model Series": "CMF Phone 1",
      "Brand": "Nothing",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - Nothing CMF Phone 1",
      "Interchangeable Back Case • Dimensity 7300 5G • 50MP Sony",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_cmf-phone-1_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 80 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_redmagic-10s-pro",
    "title": "ZTE / Nubia / RedMagic RedMagic 10S Pro",
    "subtitle": "Snapdragon 8 Elite Leading Edition • 7050mAh Battery • Internal Cooling Fan",
    "brand": "ZTE / Nubia / RedMagic",
    "category": "mobiles",
    "price": 948.05,
    "originalPrice": 1157,
    "rating": 4.8,
    "reviewCount": 108,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "GAMING",
    "stock": 45,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "365.000 OMR",
      "Model Series": "RedMagic 10S Pro",
      "Brand": "ZTE / Nubia / RedMagic",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - ZTE / Nubia / RedMagic RedMagic 10S Pro",
      "Snapdragon 8 Elite Leading Edition • 7050mAh Battery • Internal Cooling Fan",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_redmagic-10s-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 365 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_redmagic-10-pro",
    "title": "ZTE / Nubia / RedMagic RedMagic 10 Pro",
    "subtitle": "True Full Screen (Under-Display Camera) • ICE X Cooling • 144Hz",
    "brand": "ZTE / Nubia / RedMagic",
    "category": "mobiles",
    "price": 870.13,
    "originalPrice": 1062,
    "rating": 4.8999999999999995,
    "reviewCount": 115,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 14,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "335.000 OMR",
      "Model Series": "RedMagic 10 Pro",
      "Brand": "ZTE / Nubia / RedMagic",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - ZTE / Nubia / RedMagic RedMagic 10 Pro",
      "True Full Screen (Under-Display Camera) • ICE X Cooling • 144Hz",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_redmagic-10-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 335 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_nubia-z60-ultra",
    "title": "ZTE / Nubia / RedMagic Nubia Z60 Ultra",
    "subtitle": "Under-Display Camera • 35mm + 18mm + 85mm Optical OIS Trio",
    "brand": "ZTE / Nubia / RedMagic",
    "category": "mobiles",
    "price": 740.26,
    "originalPrice": 903,
    "rating": 5,
    "reviewCount": 122,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 18,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "285.000 OMR",
      "Model Series": "Nubia Z60 Ultra",
      "Brand": "ZTE / Nubia / RedMagic",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - ZTE / Nubia / RedMagic Nubia Z60 Ultra",
      "Under-Display Camera • 35mm + 18mm + 85mm Optical OIS Trio",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_nubia-z60-ultra_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 285 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_nubia-focus-pro",
    "title": "ZTE / Nubia / RedMagic Nubia Focus Pro",
    "subtitle": "108MP 5-Focal Photography • Capture Button • 5000mAh 33W",
    "brand": "ZTE / Nubia / RedMagic",
    "category": "mobiles",
    "price": 238.96,
    "originalPrice": 292,
    "rating": 4.8,
    "reviewCount": 129,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 22,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "92.000 OMR",
      "Model Series": "Nubia Focus Pro",
      "Brand": "ZTE / Nubia / RedMagic",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - ZTE / Nubia / RedMagic Nubia Focus Pro",
      "108MP 5-Focal Photography • Capture Button • 5000mAh 33W",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_nubia-focus-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 92 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_nubia-focus",
    "title": "ZTE / Nubia / RedMagic Nubia Focus",
    "subtitle": "108MP AI Camera • 4K Video Capture • 5000mAh Battery",
    "brand": "ZTE / Nubia / RedMagic",
    "category": "mobiles",
    "price": 168.83,
    "originalPrice": 206,
    "rating": 4.8999999999999995,
    "reviewCount": 136,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 26,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "65.000 OMR",
      "Model Series": "Nubia Focus",
      "Brand": "ZTE / Nubia / RedMagic",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - ZTE / Nubia / RedMagic Nubia Focus",
      "108MP AI Camera • 4K Video Capture • 5000mAh Battery",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_nubia-focus_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 65 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_nubia-neo-2-5g",
    "title": "ZTE / Nubia / RedMagic Nubia Neo 2 5G",
    "subtitle": "Dual Gaming Shoulder Triggers • 6000mAh Battery • 120Hz FHD+",
    "brand": "ZTE / Nubia / RedMagic",
    "category": "mobiles",
    "price": 207.79,
    "originalPrice": 254,
    "rating": 5,
    "reviewCount": 143,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 30,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "80.000 OMR",
      "Model Series": "Nubia Neo 2 5G",
      "Brand": "ZTE / Nubia / RedMagic",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - ZTE / Nubia / RedMagic Nubia Neo 2 5G",
      "Dual Gaming Shoulder Triggers • 6000mAh Battery • 120Hz FHD+",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_nubia-neo-2-5g_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 80 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_zte-blade-v70",
    "title": "ZTE / Nubia / RedMagic ZTE Blade V70",
    "subtitle": "108MP Main Lens • Live Island Notifications • 66W SuperCharge",
    "brand": "ZTE / Nubia / RedMagic",
    "category": "mobiles",
    "price": 148.05,
    "originalPrice": 181,
    "rating": 4.8,
    "reviewCount": 150,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 34,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "57.000 OMR",
      "Model Series": "ZTE Blade V70",
      "Brand": "ZTE / Nubia / RedMagic",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - ZTE / Nubia / RedMagic ZTE Blade V70",
      "108MP Main Lens • Live Island Notifications • 66W SuperCharge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_zte-blade-v70_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 57 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_zte-blade-v50",
    "title": "ZTE / Nubia / RedMagic ZTE Blade V50",
    "subtitle": "50MP Triple Camera • 22.5W Fast Charge • 6.6\" FHD+ Screen",
    "brand": "ZTE / Nubia / RedMagic",
    "category": "mobiles",
    "price": 122.08,
    "originalPrice": 149,
    "rating": 4.8999999999999995,
    "reviewCount": 157,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 38,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "47.000 OMR",
      "Model Series": "ZTE Blade V50",
      "Brand": "ZTE / Nubia / RedMagic",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - ZTE / Nubia / RedMagic ZTE Blade V50",
      "50MP Triple Camera • 22.5W Fast Charge • 6.6\" FHD+ Screen",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_zte-blade-v50_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 47 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_zte-blade-a75",
    "title": "ZTE / Nubia / RedMagic ZTE Blade A75",
    "subtitle": "90Hz Display • 50MP AI Dual • 5000mAh Type-C Battery",
    "brand": "ZTE / Nubia / RedMagic",
    "category": "mobiles",
    "price": 90.91,
    "originalPrice": 111,
    "rating": 5,
    "reviewCount": 164,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 42,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "35.000 OMR",
      "Model Series": "ZTE Blade A75",
      "Brand": "ZTE / Nubia / RedMagic",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - ZTE / Nubia / RedMagic ZTE Blade A75",
      "90Hz Display • 50MP AI Dual • 5000mAh Type-C Battery",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_zte-blade-a75_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 35 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_zte-blade-a55",
    "title": "ZTE / Nubia / RedMagic ZTE Blade A55",
    "subtitle": "6.75\" 90Hz Screen • 5000mAh Battery • Live Island UI",
    "brand": "ZTE / Nubia / RedMagic",
    "category": "mobiles",
    "price": 77.92,
    "originalPrice": 95,
    "rating": 4.8,
    "reviewCount": 171,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 46,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "30.000 OMR",
      "Model Series": "ZTE Blade A55",
      "Brand": "ZTE / Nubia / RedMagic",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - ZTE / Nubia / RedMagic ZTE Blade A55",
      "6.75\" 90Hz Screen • 5000mAh Battery • Live Island UI",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_zte-blade-a55_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 30 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_poco-f7-pro",
    "title": "POCO POCO F7 Pro",
    "subtitle": "Snapdragon 8 Gen 3 • 120W HyperCharge • 2K 120Hz Flow AMOLED",
    "brand": "POCO",
    "category": "mobiles",
    "price": 532.47,
    "originalPrice": 650,
    "rating": 4.8999999999999995,
    "reviewCount": 178,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "badge": "FLAGSHIP",
    "stock": 15,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "205.000 OMR",
      "Model Series": "POCO F7 Pro",
      "Brand": "POCO",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - POCO POCO F7 Pro",
      "Snapdragon 8 Gen 3 • 120W HyperCharge • 2K 120Hz Flow AMOLED",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_poco-f7-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 205 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_poco-x7-pro",
    "title": "POCO POCO X7 Pro",
    "subtitle": "Dimensity 8400-Ultra • 1.5K 120Hz AMOLED • 90W HyperCharge",
    "brand": "POCO",
    "category": "mobiles",
    "price": 355.84,
    "originalPrice": 434,
    "rating": 5,
    "reviewCount": 185,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 19,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "137.000 OMR",
      "Model Series": "POCO X7 Pro",
      "Brand": "POCO",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - POCO POCO X7 Pro",
      "Dimensity 8400-Ultra • 1.5K 120Hz AMOLED • 90W HyperCharge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_poco-x7-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 137 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_poco-x7",
    "title": "POCO POCO X7",
    "subtitle": "Dimensity 7300 • 50MP Sony OIS • 5110mAh Battery • 45W",
    "brand": "POCO",
    "category": "mobiles",
    "price": 272.73,
    "originalPrice": 333,
    "rating": 4.8,
    "reviewCount": 192,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 23,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "105.000 OMR",
      "Model Series": "POCO X7",
      "Brand": "POCO",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - POCO POCO X7",
      "Dimensity 7300 • 50MP Sony OIS • 5110mAh Battery • 45W",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_poco-x7_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 105 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_poco-x6-pro",
    "title": "POCO POCO X6 Pro",
    "subtitle": "Dimensity 8300-Ultra • 64MP OIS Triple • 67W Turbo Charge",
    "brand": "POCO",
    "category": "mobiles",
    "price": 298.7,
    "originalPrice": 364,
    "rating": 4.8999999999999995,
    "reviewCount": 199,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 27,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "115.000 OMR",
      "Model Series": "POCO X6 Pro",
      "Brand": "POCO",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - POCO POCO X6 Pro",
      "Dimensity 8300-Ultra • 64MP OIS Triple • 67W Turbo Charge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_poco-x6-pro_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 115 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_poco-x6",
    "title": "POCO POCO X6",
    "subtitle": "Snapdragon 7s Gen 2 • 64MP Triple OIS • 120Hz Flow AMOLED",
    "brand": "POCO",
    "category": "mobiles",
    "price": 238.96,
    "originalPrice": 292,
    "rating": 5,
    "reviewCount": 26,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 31,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "92.000 OMR",
      "Model Series": "POCO X6",
      "Brand": "POCO",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - POCO POCO X6",
      "Snapdragon 7s Gen 2 • 64MP Triple OIS • 120Hz Flow AMOLED",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_poco-x6_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 92 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_poco-m7-pro-5g",
    "title": "POCO POCO M7 Pro 5G",
    "subtitle": "Dimensity 6300 5G • 50MP Sony AI • 5110mAh 45W Charge",
    "brand": "POCO",
    "category": "mobiles",
    "price": 194.81,
    "originalPrice": 238,
    "rating": 4.8,
    "reviewCount": 33,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 35,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "75.000 OMR",
      "Model Series": "POCO M7 Pro 5G",
      "Brand": "POCO",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - POCO POCO M7 Pro 5G",
      "Dimensity 6300 5G • 50MP Sony AI • 5110mAh 45W Charge",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_poco-m7-pro-5g_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 75 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_poco-m7",
    "title": "POCO POCO M7",
    "subtitle": "6.88\" 120Hz Large Display • 50MP AI Lens • 5160mAh",
    "brand": "POCO",
    "category": "mobiles",
    "price": 148.05,
    "originalPrice": 181,
    "rating": 4.8999999999999995,
    "reviewCount": 40,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 39,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "57.000 OMR",
      "Model Series": "POCO M7",
      "Brand": "POCO",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - POCO POCO M7",
      "6.88\" 120Hz Large Display • 50MP AI Lens • 5160mAh",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_poco-m7_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 57 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_poco-m6",
    "title": "POCO POCO M6",
    "subtitle": "108MP Pro-Grade Camera • 33W Fast Charge • Glass Back",
    "brand": "POCO",
    "category": "mobiles",
    "price": 135.06,
    "originalPrice": 165,
    "rating": 5,
    "reviewCount": 47,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 43,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "52.000 OMR",
      "Model Series": "POCO M6",
      "Brand": "POCO",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - POCO POCO M6",
      "108MP Pro-Grade Camera • 33W Fast Charge • Glass Back",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_poco-m6_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 52 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_poco-c75",
    "title": "POCO POCO C75",
    "subtitle": "6.88\" 120Hz Immersive Screen • 50MP AI • 5160mAh",
    "brand": "POCO",
    "category": "mobiles",
    "price": 109.09,
    "originalPrice": 133,
    "rating": 4.8,
    "reviewCount": 54,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 12,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Official Oman Price": "42.000 OMR",
      "Model Series": "POCO C75",
      "Brand": "POCO",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - POCO POCO C75",
      "6.88\" 120Hz Immersive Screen • 50MP AI • 5160mAh",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_poco-c75_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 42 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "phone_poco-c61",
    "title": "POCO POCO C61",
    "subtitle": "Radiant Star-Ring Design • 90Hz Display • 5000mAh Battery",
    "brand": "POCO",
    "category": "mobiles",
    "price": 90.91,
    "originalPrice": 111,
    "rating": 4.8999999999999995,
    "reviewCount": 61,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    ],
    "stock": 16,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Official Oman Price": "35.000 OMR",
      "Model Series": "POCO C61",
      "Brand": "POCO",
      "Regional Version": "Middle East / Oman Official Specs",
      "Authenticity": "100% Genuine Certified",
      "Warranty": "Official Hardware Guarantee",
      "Delivery": "Insured Courier Delivery (15-25 Working Days)"
    },
    "keyFeatures": [
      "Official Middle East / Oman Regional Specification - POCO POCO C61",
      "Radiant Star-Ring Design • 90Hz Display • 5000mAh Battery",
      "100% Genuine Certified Hardware & Factory Sealed Package",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal 5G / 4G LTE Oman Networks (Omantel, Ooredoo, Vodafone)",
      "Universal USB-C / Fast Wireless Charging"
    ],
    "reviews": [
      {
        "id": "rev_phone_poco-c61_1",
        "userName": "Verified Oman Buyer",
        "rating": 5,
        "date": "3 days ago",
        "title": "Authentic Sealed Unit",
        "comment": "Excellent product! Exactly as listed for 35 OMR. Arrived pristine.",
        "verified": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "cleo_belkin_boost_charge",
    "title": "Belkin Boost Charge Power Bundle Charger + 10k Power bank",
    "subtitle": "Belkin Official Hardware • Fast GaN Charging",
    "brand": "Belkin",
    "category": "chargers",
    "price": 50,
    "originalPrice": 62.34,
    "rating": 4.8,
    "reviewCount": 32,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Belkin-Boost-Charge-Power-Bundle-Charger-10k-Power-bank.jpg"
    ],
    "badge": "POPULAR",
    "stock": 45,
    "featured": true,
    "specs": {
      "Official Oman Price": "19.250 OMR",
      "Power Bank Capacity": "10,000 mAh",
      "Fast Charging": "USB-C PD 20W"
    },
    "keyFeatures": [
      "Ultra-Compact GaN Power Bundle",
      "Dual Device Simultaneous Charging"
    ],
    "compatibility": [
      "Universal USB-C & Lightning"
    ],
    "reviews": []
  },
  {
    "id": "cleo_jbl_eon_speaker",
    "title": "JBL Powered Speaker EON 715 15\" 1300W",
    "subtitle": "JBL Professional Sound • Bluetooth 5.0 DSP Control",
    "brand": "JBL",
    "category": "audio",
    "price": 636.36,
    "originalPrice": 766.23,
    "rating": 4.9,
    "reviewCount": 28,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/JBL-Powered-Speaker-EON-715-15-Inch-1300-Watts-2.jpg"
    ],
    "badge": "PRO AUDIO",
    "stock": 10,
    "featured": false,
    "specs": {
      "Official Oman Price": "245.000 OMR",
      "Peak Power": "1,300 Watts",
      "Woofer Size": "15-inch Custom Ferrite"
    },
    "keyFeatures": [
      "Pro-Grade Bluetooth 5.0 Audio Streaming",
      "Advanced dbx DriveRack Inside DSP"
    ],
    "compatibility": [
      "Bluetooth 5.0 / XLR / TRS Jack inputs"
    ],
    "reviews": []
  },
  {
    "id": "cleo_ps5_slim_console",
    "title": "Sony PS 5 Slim Digital Edition 825GB Console",
    "subtitle": "Sony PlayStation 5 Slim Digital • High-Speed SSD",
    "brand": "Sony",
    "category": "accessories",
    "price": 428.57,
    "originalPrice": 493.51,
    "rating": 5,
    "reviewCount": 95,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Sony-PS-5-Slim-Digital-Edition-1-Tera-.jpg"
    ],
    "badge": "BEST SELLER",
    "stock": 20,
    "featured": true,
    "specs": {
      "Official Oman Price": "165.000 OMR",
      "Storage": "825GB Ultra-High Speed NVMe SSD",
      "Video Output": "4K 120Hz & 8K HDR Support"
    },
    "keyFeatures": [
      "Ray Tracing & Ultra-Fast Loading Times",
      "Tempest 3D AudioTech & DualSense Haptic Feedback"
    ],
    "compatibility": [
      "PS5 Games & Digital PlayStation Network"
    ],
    "reviews": []
  }
];

export const PRODUCTS: Product[] = INITIAL_PRODUCTS;

export const CURRENCIES: Record<string, Currency> = {
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', rate: 1.0, flag: '🇺🇸', region: 'Americas' },
  OMR: { code: 'OMR', symbol: 'OMR', name: 'Omani Rial', rate: 0.385, flag: '🇴🇲', region: 'Middle East' },
  AED: { code: 'AED', symbol: 'AED', name: 'UAE Dirham', rate: 3.67, flag: '🇦🇪', region: 'Middle East' },
  SAR: { code: 'SAR', symbol: 'SAR', name: 'Saudi Riyal', rate: 3.75, flag: '🇸🇦', region: 'Middle East' },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.92, flag: '🇪🇺', region: 'Europe' },
  GBP: { code: 'GBP', symbol: '£', name: 'British Pound', rate: 0.79, flag: '🇬🇧', region: 'Europe' },
  INR: { code: 'INR', symbol: '₹', name: 'Indian Rupee', rate: 83.5, flag: '🇮🇳', region: 'Asia Pacific' },
  KWD: { code: 'KWD', symbol: 'KWD', name: 'Kuwaiti Dinar', rate: 0.31, flag: '🇰🇼', region: 'Middle East' },
  BHD: { code: 'BHD', symbol: 'BHD', name: 'Bahraini Dinar', rate: 0.38, flag: '🇧🇭', region: 'Middle East' },
  QAR: { code: 'QAR', symbol: 'QAR', name: 'Qatari Riyal', rate: 3.64, flag: '🇶🇦', region: 'Middle East' }
};

export const AVAILABLE_COUPONS: Coupon[] = [
  { code: 'CLEOPATRA10', discountPercent: 10, description: '10% Off Cleopatra Official Hardware Store', minOrder: 50 },
  { code: 'CLEO20', discountPercent: 20, description: '20% Off Launch Special', minOrder: 100 },
  { code: 'FREESHIP', freeShipping: true, description: 'Free Worldwide Express Shipping', minOrder: 40 }
];

export const SHIPPING_METHODS: ShippingMethod[] = [
  {
    id: 'standard_insured',
    name: 'Worldwide Insured Standard Delivery',
    description: 'Order will be delivered within 15 to 25 working days',
    estimatedDays: '15-25 Working Days',
    price: 0
  }
];

export const TECH_BUNDLE_DEAL = {
  title: 'Apple Ecosystem Power Bundle',
  subtitle: 'iPhone 17 Pro Max + Apple Watch Ultra 2 + AirPods Pro (USB-C)',
  description: 'Combine Apple flagship hardware and save 25% instantly on your complete ultimate setup.',
  bundleDiscountPercent: 25,
  productIds: [
    'phone_iphone-17-pro-max',
    'apple-airpods-pro-2-usbc',
    'apple-watch-ultra-2'
  ]
};
