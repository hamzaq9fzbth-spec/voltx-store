import { Product, Currency, Coupon, ShippingMethod } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    "id": "apple-iphone-17-pro-max",
    "title": "Apple iPhone 17 Pro Max (512GB - Natural Titanium)",
    "subtitle": "A19 Pro Silicon • ProMotion 120Hz Super Retina XDR OLED • 48MP Quad-Prism Fusion Camera",
    "brand": "Apple",
    "category": "mobiles",
    "price": 1199.99,
    "originalPrice": 1399.99,
    "rating": 5,
    "reviewCount": 48,
    "images": [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=1000"
    ],
    "badge": "HOT",
    "stock": 25,
    "featured": true,
    "flashDeal": true,
    "flashDealDiscount": 15,
    "specs": {
      "Processor": "Apple A19 Pro 3nm Silicon Architecture",
      "Display": "6.9\" Super Retina XDR OLED ProMotion 120Hz Always-On",
      "Storage": "512GB High-Speed NVMe Flash",
      "Camera System": "48MP Triple Fusion System + 5x Optical Periscope Zoom",
      "Chassis": "Grade 5 Aerospace-Forged Titanium Frame with Ceramic Shield Gen 2",
      "Battery": "4,850 mAh All-Day Battery Life",
      "Connectivity": "5G Ultra-Wideband + Wi-Fi 7 + Bluetooth 5.4",
      "Charging": "High-Speed USB-C PD 3.0 & MagSafe 25W Fast Wireless"
    },
    "keyFeatures": [
      "Next-Generation Apple A19 Pro Silicon with Neural Engine & Hardware Ray Tracing",
      "Grade 5 Aerospace-Grade Titanium Frame with Micro-Blasted Ergonomic Contours",
      "Advanced 48MP Quad-Prism Camera System with 4K ProRes 120fps Log Video",
      "Ceramic Shield Gen 2 Glass with Superior Drop and Scratch Resistance",
      "Worldwide Insured Express Delivery within 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal Apple Ecosystem (iOS, iPadOS, macOS, watchOS)",
      "Standard USB-C PD 3.0 Accessories & MagSafe Chargers"
    ],
    "reviews": [
      {
        "id": "rev_iph17_1",
        "userName": "Dr. Tariq Al-Balushi (Verified)",
        "rating": 5,
        "date": "2 days ago",
        "title": "Unbelievable Speed & Titanium Feel",
        "comment": "The natural titanium finish and A19 Pro speed are remarkable. Factory sealed unit arrived in pristine condition.",
        "verified": true,
        "helpfulCount": 22
      },
      {
        "id": "rev_iph17_2",
        "userName": "Sara K. (Verified Buyer)",
        "rating": 5,
        "date": "4 days ago",
        "title": "The Best iPhone to Date",
        "comment": "Battery life easily lasts two full days. Camera quality is on DSLR level. Very satisfied with the dispatch.",
        "verified": true,
        "helpfulCount": 16
      }
    ]
  },
  {
    "id": "apple-iphone-17-256gb",
    "title": "Apple iPhone 17 (256GB - Ultramarine)",
    "subtitle": "A19 Bionic Chip • Dynamic Island • Camera Control Button • 48MP Dual Fusion",
    "brand": "Apple",
    "category": "mobiles",
    "price": 899.99,
    "originalPrice": 999.99,
    "rating": 4.9,
    "reviewCount": 36,
    "images": [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=1000"
    ],
    "badge": "NEW",
    "stock": 30,
    "featured": true,
    "specs": {
      "Processor": "Apple A19 Bionic Silicon",
      "Display": "6.3\" Super Retina XDR OLED Display",
      "Storage": "256GB NVMe Storage",
      "Camera": "48MP Dual Fusion Camera with Spatial Video Capture",
      "Build": "Aerospace Aluminum Enclosure & Color-Infused Glass Back"
    },
    "keyFeatures": [
      "Apple A19 Bionic Silicon with Next-Gen Machine Learning Core",
      "Dynamic Island Interactive Alerts & Live Activities Integration",
      "Dedicated Camera Control Sensor for Instant Focus & 48MP Spatial Photo Capture",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal Apple Ecosystem & USB-C Standard Accessories"
    ],
    "reviews": [
      {
        "id": "rev_iph17_base_1",
        "userName": "Ahmed Mansoor",
        "rating": 5,
        "date": "3 days ago",
        "title": "Stunning Color and Fast Performance",
        "comment": "Ultramarine color looks breathtaking in real life. Smooth 120Hz display and very fast charging.",
        "verified": true,
        "helpfulCount": 12
      }
    ]
  },
  {
    "id": "apple-iphone-16-pro-max",
    "title": "Apple iPhone 16 Pro Max (256GB - Black Titanium)",
    "subtitle": "A18 Pro Silicon • 6.9\" ProMotion OLED • Studio-Quality Mics • Action Button",
    "brand": "Apple",
    "category": "mobiles",
    "price": 1049.99,
    "originalPrice": 1199.99,
    "rating": 4.9,
    "reviewCount": 84,
    "images": [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=1000"
    ],
    "badge": "BEST SELLER",
    "stock": 20,
    "featured": true,
    "specs": {
      "Processor": "Apple A18 Pro 3nm Silicon",
      "Display": "6.9\" Super Retina XDR ProMotion 120Hz",
      "Storage": "256GB NVMe Flash",
      "Camera": "48MP Main + 48MP Ultra Wide + 12MP 5x Telephoto"
    },
    "keyFeatures": [
      "A18 Pro Chip with 6-Core GPU and Advanced Ray Tracing",
      "Black Titanium Matte Texture with Zero Fingerprint Coating",
      "4K 120fps Dolby Vision Video Recording"
    ],
    "compatibility": [
      "Apple Ecosystem",
      "USB-C PD 3.0"
    ],
    "reviews": []
  },
  {
    "id": "apple-watch-ultra-2",
    "title": "Apple Watch Ultra 2 (49mm Titanium - Ocean Band)",
    "subtitle": "S9 SiP • 3000-Nit Ultra Display • Dual-Frequency GPS • 100m Water Resistance",
    "brand": "Apple",
    "category": "wearables",
    "price": 799.99,
    "originalPrice": 899.99,
    "rating": 5,
    "reviewCount": 52,
    "images": [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=1000"
    ],
    "badge": "HOT",
    "stock": 18,
    "featured": true,
    "specs": {
      "Case": "49mm Aerospace Titanium Case with Raised Edge Protection",
      "Brightness": "3,000 Nits Outdoor Ultra Bright OLED Display",
      "Battery": "Up to 72 Hours in Low Power Mode",
      "Water Resistance": "100m Water Resistance & WR100 Certified"
    },
    "keyFeatures": [
      "Precision Dual-Frequency GPS for Extreme Trail & Diving Accuracy",
      "Action Button Customization for One-Touch Workout Triggers",
      "Double Tap Gesture Recognition with S9 SiP Neural Processor"
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
    "price": 249.99,
    "originalPrice": 279.99,
    "rating": 4.9,
    "reviewCount": 140,
    "images": [
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&q=80&w=1000"
    ],
    "badge": "BEST SELLER",
    "stock": 50,
    "featured": true,
    "specs": {
      "Audio Chip": "Apple H2 Silicon Audio Processor",
      "Noise Cancellation": "2x Stronger Active Noise Cancellation",
      "Battery Life": "Up to 30 Hours Total with MagSafe Charging Case",
      "Charging": "USB-C, MagSafe, Apple Watch Charger & Qi-Certified"
    },
    "keyFeatures": [
      "Personalized Spatial Audio with Dynamic Head Tracking",
      "Transparency Mode and Conversation Awareness Auto-Ducking",
      "IP54 Dust, Sweat, and Water Resistance"
    ],
    "compatibility": [
      "iOS, iPadOS, macOS, watchOS, Android, Windows Bluetooth"
    ],
    "reviews": []
  },
  {
    "id": "cleo_167_apple-watch-s11-46mm-gps",
    "title": "Apple Watch S11 46mm Gps",
    "subtitle": "Apple Official Hardware • Cleopatra Web Store Oman",
    "brand": "Apple",
    "category": "wearables",
    "price": 499.99,
    "originalPrice": 625,
    "rating": 4.8999999999999995,
    "reviewCount": 92,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/05/watch-11-46-jet-black-1.webp"
    ],
    "stock": 33,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Apple Watch S11 46mm Gps",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_167_apple-watch-s11-46mm-gps_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_176_apple-watch-se-2nd-40mm-gps",
    "title": "APPLE WATCH SE 2ND 40MM GPS",
    "subtitle": "Apple Official Hardware • Cleopatra Web Store Oman",
    "brand": "Apple",
    "category": "wearables",
    "price": 249.99,
    "originalPrice": 312,
    "rating": 4.8999999999999995,
    "reviewCount": 137,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2023/03/products-apple-watch-se-2nd-40mm-gps.jpg"
    ],
    "stock": 20,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "APPLE WATCH SE 2ND 40MM GPS",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_176_apple-watch-se-2nd-40mm-gps_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_177_apple-watch-se-2nd-44mm-gps",
    "title": "APPLE WATCH SE 2ND 44MM GPS",
    "subtitle": "Apple Official Hardware • Cleopatra Web Store Oman",
    "brand": "Apple",
    "category": "wearables",
    "price": 249.99,
    "originalPrice": 312,
    "rating": 5,
    "reviewCount": 142,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2023/03/products-apple-watch-se-2nd-44mm-gps.jpg"
    ],
    "stock": 23,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "APPLE WATCH SE 2ND 44MM GPS",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_177_apple-watch-se-2nd-44mm-gps_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_1_belkin-boost-charge-power-bund",
    "title": "Belkin Boost Charge Power Bundle Charger + 10k Power bank",
    "subtitle": "Belkin Official Hardware • Cleopatra Web Store Oman",
    "brand": "Belkin",
    "category": "chargers",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 12,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Belkin-Boost-Charge-Power-Bundle-Charger-10k-Power-bank.jpg"
    ],
    "badge": "BEST SELLER",
    "stock": 15,
    "featured": true,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Belkin Boost Charge Power Bundle Ch",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_1_belkin-boost-charge-power-bund_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_2_jbl-powered-speaker-eon-715-15",
    "title": "Jbl Powered Speaker Eon 715 15″ 1300w",
    "subtitle": "JBL Official Hardware • Cleopatra Web Store Oman",
    "brand": "JBL",
    "category": "audio",
    "price": 399.99,
    "originalPrice": 500,
    "rating": 4.8999999999999995,
    "reviewCount": 17,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Jbl-Powered-Speaker-Eon-712-12-1300w.png"
    ],
    "badge": "NEW",
    "stock": 18,
    "featured": true,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Jbl Powered Speaker Eon 715 15″ 130",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_2_jbl-powered-speaker-eon-715-15_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_3_sony-ps-5-slim-digital-edition",
    "title": "Sony PS 5 Slim Digital Edition Console 825GB CFI-2116B",
    "subtitle": "Sony Official Hardware • Cleopatra Web Store Oman",
    "brand": "Sony",
    "category": "accessories",
    "price": 499.99,
    "originalPrice": 625,
    "rating": 5,
    "reviewCount": 22,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Sony-PS-5-Slim-Digital-Edition-Console-825GB-CFI-2116B-.png"
    ],
    "badge": "HOT",
    "stock": 21,
    "featured": true,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Sony PS 5 Slim Digital Edition Cons",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_3_sony-ps-5-slim-digital-edition_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_4_kodak-digital-camera-pixpro-c1",
    "title": "Kodak Digital Camera PIXPRO C1",
    "subtitle": "Kodak Official Hardware • Cleopatra Web Store Oman",
    "brand": "Kodak",
    "category": "accessories",
    "price": 149.99,
    "originalPrice": 187,
    "rating": 4.8,
    "reviewCount": 27,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/Kodak-Digital-Camera-PIXPRO-C1.png"
    ],
    "badge": "240W GaN",
    "stock": 24,
    "featured": true,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Kodak Digital Camera PIXPRO C1",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_4_kodak-digital-camera-pixpro-c1_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_5_anker-a1664-maggo-ultra-slim-1",
    "title": "Anker A1664 MagGo Ultra-Slim 10000mAh Qi2 Certified 15W Power Bank",
    "subtitle": "Anker Official Hardware • Cleopatra Web Store Oman",
    "brand": "Anker",
    "category": "chargers",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 32,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/Anker-A1664-MagGo-Ultra-Slim-10000mAh-Qi2-Certified-15W-Power-Bank-.png"
    ],
    "badge": "LIMITED",
    "stock": 27,
    "featured": true,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Anker A1664 MagGo Ultra-Slim 10000m",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_5_anker-a1664-maggo-ultra-slim-1_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_6_haino-teko-fg-3-5g-android-sma",
    "title": "Haino Teko FG-3 5G Android Smart Watch SIM Card Support",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "wearables",
    "price": 249.99,
    "originalPrice": 312,
    "rating": 5,
    "reviewCount": 37,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/Haino-Teko-FG-3-5G-Android-Smart-Watch-SIM-Card-Support-.png"
    ],
    "badge": "SALE",
    "stock": 30,
    "featured": true,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Haino Teko FG-3 5G Android Smart Wa",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_6_haino-teko-fg-3-5g-android-sma_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_7_google-fitbit-air-screen-less-",
    "title": "Google Fitbit Air Screen less Fitness & Health Tracking Band Black",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "wearables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 42,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/Google-Fitbit-Air-Screen-less-Fitness-Health-Tracking-Band-Black-.png"
    ],
    "badge": "BEST SELLER",
    "stock": 33,
    "featured": true,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Google Fitbit Air Screen less Fitne",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_7_google-fitbit-air-screen-less-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_8_cleo-hb-portable-fever-knee-ma",
    "title": "Cleo-HB Portable Fever Knee Massager GN-D102",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 47,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/05/Untitled-design-159.png"
    ],
    "badge": "NEW",
    "stock": 36,
    "featured": true,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Cleo-HB Portable Fever Knee Massage",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_8_cleo-hb-portable-fever-knee-ma_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_9_dji-gimbal-osmo-mobile-8-p-cre",
    "title": "Dji Gimbal Osmo Mobile 8 P Creator Combo",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 52,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/05/Dji-Gimbal-Osmo-Mobile-8-P-Creator-Combo.png"
    ],
    "stock": 39,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Dji Gimbal Osmo Mobile 8 P Creator ",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_9_dji-gimbal-osmo-mobile-8-p-cre_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_10_dji-gimbal-osmo-mobile-8-p-adv",
    "title": "Dji Gimbal Osmo Mobile 8 P Advance Tracking Combo",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 57,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/05/Dji-Gimbal-Osmo-Mobile-8-P-Advance-Tracking-Combo.png"
    ],
    "stock": 42,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Dji Gimbal Osmo Mobile 8 P Advance ",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_10_dji-gimbal-osmo-mobile-8-p-adv_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_11_dji-gimbal-osmo-mobile-8-p-sta",
    "title": "Dji Gimbal Osmo Mobile 8 P Standard Combo",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 62,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/05/Dji-Gimbal-Osmo-Mobile-8-P-Standard-Combo.png"
    ],
    "stock": 45,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Dji Gimbal Osmo Mobile 8 P Standard",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_11_dji-gimbal-osmo-mobile-8-p-sta_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_12_honor-choice-smart-watch-2-pro",
    "title": "Honor Choice Smart Watch 2 Pro Black",
    "subtitle": "Honor Official Hardware • Cleopatra Web Store Oman",
    "brand": "Honor",
    "category": "mobiles",
    "price": 249.99,
    "originalPrice": 312,
    "rating": 5,
    "reviewCount": 67,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/05/Honor-Choice-Smart-Watch-2-Pro-Black.png"
    ],
    "stock": 48,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Honor Choice Smart Watch 2 Pro Blac",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_12_honor-choice-smart-watch-2-pro_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_13_honor-choice-smart-watch-2i",
    "title": "Honor Choice Smart Watch 2i",
    "subtitle": "Honor Official Hardware • Cleopatra Web Store Oman",
    "brand": "Honor",
    "category": "mobiles",
    "price": 249.99,
    "originalPrice": 312,
    "rating": 4.8,
    "reviewCount": 72,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/05/a-gift-3-2.png"
    ],
    "stock": 51,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Honor Choice Smart Watch 2i",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_13_honor-choice-smart-watch-2i_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_14_tecno-camon-50-ultra-12gb-256g",
    "title": "Tecno Camon 50 Ultra 12gb 256gb 5g Gsm",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 499.99,
    "originalPrice": 625,
    "rating": 4.8999999999999995,
    "reviewCount": 77,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/05/camon-50-ultra-green-600.webp"
    ],
    "stock": 54,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Tecno Camon 50 Ultra 12gb 256gb 5g ",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_14_tecno-camon-50-ultra-12gb-256g_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_15_hp-used-laptop-elitebook-8470p",
    "title": "Hp Used Laptop EliteBook 8470P i7 3rd Gen, 8 Gb Ram, 256 Gb SSd, 14 inch Screen, Win 10",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 89.99,
    "originalPrice": 112,
    "rating": 5,
    "reviewCount": 82,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/05/Hp-Used-Laptop-EliteBook-8470P-i7-3rd-Gen-8-Gb-Ram-256-Gb-SSd-14-inch-Screen-Win-10.jpg"
    ],
    "stock": 17,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Hp Used Laptop EliteBook 8470P i7 3",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_15_hp-used-laptop-elitebook-8470p_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_16_denx-water-dispenser-dx-4506",
    "title": "Denx Water Dispenser DX-4506",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 87,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Denx-Water-Dispenser-DX-4506-.png"
    ],
    "stock": 20,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Denx Water Dispenser DX-4506",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_16_denx-water-dispenser-dx-4506_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_17_tp-link-wifi-range-extender-ax",
    "title": "TP-Link Wifi Range Extender AX1500 RE500X",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 92,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/TP-Link-Wifi-Range-Extender-AX1500-RE500X.png"
    ],
    "stock": 23,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "TP-Link Wifi Range Extender AX1500 ",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_17_tp-link-wifi-range-extender-ax_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_18_kemei-professional-hair-trimme",
    "title": "Kemei Professional Hair Trimmer KM-1848",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 97,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Kemei-Professional-Hair-Trimmer-KM-1848-.png"
    ],
    "stock": 26,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Kemei Professional Hair Trimmer KM-",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_18_kemei-professional-hair-trimme_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_19_haohan-rechargeable-hair-trimm",
    "title": "Haohan Rechargeable Hair Trimmer HL-11",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 102,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Haohan-Rechargeable-Hair-Trimmer-HL-11-.png"
    ],
    "stock": 29,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Haohan Rechargeable Hair Trimmer HL",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_19_haohan-rechargeable-hair-trimm_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_20_haohan-rechargeable-nose-trimm",
    "title": "Haohan Rechargeable Nose Trimmer HP-317",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 107,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Haohan-Rechargeable-Nose-Trimmer-HP-317-.png"
    ],
    "stock": 32,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Haohan Rechargeable Nose Trimmer HP",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_20_haohan-rechargeable-nose-trimm_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_21_haohan-electric-shaver-ht-2",
    "title": "Haohan Electric Shaver HT-2",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 112,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Haohan-Electric-Shaver-HT-2.png"
    ],
    "stock": 35,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Haohan Electric Shaver HT-2",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_21_haohan-electric-shaver-ht-2_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_22_hitachi-drum-vaccum-cleaner-cv",
    "title": "Hitachi Drum Vaccum Cleaner CV945F240C WR 2000W",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 117,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Hitachi-Drum-Vaccum-Cleaner-CV945F240C-WR-2000W-.png"
    ],
    "stock": 38,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Hitachi Drum Vaccum Cleaner CV945F2",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_22_hitachi-drum-vaccum-cleaner-cv_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_23_hitachi-drum-vaccum-cleaner-we",
    "title": "Hitachi Drum Vaccum Cleaner Wet & Dry CV 975PWBKGAE 1600W",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 122,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Hitachi-Drum-Vaccum-Cleaner-Wet-Dry-CV-975PWBKGAE-1600W-.png"
    ],
    "stock": 41,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Hitachi Drum Vaccum Cleaner Wet & D",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_23_hitachi-drum-vaccum-cleaner-we_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_24_cleo-hb-zlade-ballistic-nose-e",
    "title": "Cleo-HB Zlade Ballistic Nose & Ear Hair Trimmer",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 127,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Cleo-HB-Zlade-Ballistic-Nose-Ear-Hair-Trimmer.png"
    ],
    "stock": 44,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Cleo-HB Zlade Ballistic Nose & Ear ",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_24_cleo-hb-zlade-ballistic-nose-e_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_25_cleo-el-oud-bukhoor-bk18",
    "title": "Cleo-EL Oud Bukhoor BK18",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 19.99,
    "originalPrice": 25,
    "rating": 4.8,
    "reviewCount": 132,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2025/11/Cleo-EL-Oud-Bukhoor-BK18.jpg"
    ],
    "stock": 47,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Cleo-EL Oud Bukhoor BK18",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_25_cleo-el-oud-bukhoor-bk18_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_26_kodak-max-alkaline-4lr44-batte",
    "title": "Kodak Max Alkaline 4LR44 Battery",
    "subtitle": "Kodak Official Hardware • Cleopatra Web Store Oman",
    "brand": "Kodak",
    "category": "accessories",
    "price": 19.99,
    "originalPrice": 25,
    "rating": 4.8999999999999995,
    "reviewCount": 137,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2023/10/products-oip_8.jpeg"
    ],
    "stock": 50,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Kodak Max Alkaline 4LR44 Battery",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_26_kodak-max-alkaline-4lr44-batte_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_27_redmi-wireless-earbuds-buds-6-",
    "title": "Redmi Wireless Earbuds Buds 6 Play",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "mobiles",
    "price": 19.99,
    "originalPrice": 25,
    "rating": 5,
    "reviewCount": 142,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2025/11/Redmi-Wireless-Earbuds-Buds-6-Play-Black-01.webp"
    ],
    "stock": 53,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Redmi Wireless Earbuds Buds 6 Play",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_27_redmi-wireless-earbuds-buds-6-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_28_honor-x6c-6gb-128gb-4g",
    "title": "HONOR X6C 6GB 128GB 4G",
    "subtitle": "Honor Official Hardware • Cleopatra Web Store Oman",
    "brand": "Honor",
    "category": "mobiles",
    "price": 179.99,
    "originalPrice": 225,
    "rating": 4.8,
    "reviewCount": 147,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/03/HONOR-X6C-6GB-128GB-4G-1.webp"
    ],
    "stock": 16,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "HONOR X6C 6GB 128GB 4G",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_28_honor-x6c-6gb-128gb-4g_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_29_jbl-bluetooth-headset-tune-520",
    "title": "Jbl Bluetooth Headset Tune 520BT",
    "subtitle": "JBL Official Hardware • Cleopatra Web Store Oman",
    "brand": "JBL",
    "category": "audio",
    "price": 39.99,
    "originalPrice": 50,
    "rating": 4.8999999999999995,
    "reviewCount": 152,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2023/10/01.webp"
    ],
    "stock": 19,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Jbl Bluetooth Headset Tune 520BT",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_29_jbl-bluetooth-headset-tune-520_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_30_canon-cartridge-445-and-446-co",
    "title": "Canon Cartridge 445 And 446 Combo Pack",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 39.99,
    "originalPrice": 50,
    "rating": 5,
    "reviewCount": 157,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2024/05/products-untitled_design_-_2024-05-08t184913.986.jpg"
    ],
    "stock": 22,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Canon Cartridge 445 And 446 Combo P",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_30_canon-cartridge-445-and-446-co_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_31_anker-true-wirless-earbuds-a39",
    "title": "Anker True Wirless EarBuds A3949 R50i",
    "subtitle": "Anker Official Hardware • Cleopatra Web Store Oman",
    "brand": "Anker",
    "category": "audio",
    "price": 19.99,
    "originalPrice": 25,
    "rating": 4.8,
    "reviewCount": 12,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2023/10/products-r50i-2.png"
    ],
    "stock": 25,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Anker True Wirless EarBuds A3949 R5",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_31_anker-true-wirless-earbuds-a39_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_32_canon-pg445-black-cartridge",
    "title": "Canon PG445 Black cartridge",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 39.99,
    "originalPrice": 50,
    "rating": 4.8999999999999995,
    "reviewCount": 17,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2020/04/products-canon_445_cartridge.jpg"
    ],
    "stock": 28,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Canon PG445 Black cartridge",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_32_canon-pg445-black-cartridge_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_33_joy-professional-2-in-1-stylin",
    "title": "JOY PROFESSIONAL 2 in 1 Styling Brush",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 39.99,
    "originalPrice": 50,
    "rating": 5,
    "reviewCount": 22,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2023/10/products-71vxlxcjztl._ac_sl1500_.jpg"
    ],
    "stock": 31,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "JOY PROFESSIONAL 2 in 1 Styling Bru",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_33_joy-professional-2-in-1-stylin_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_34_iphone-16-pro-max-5g-8gb-256gb",
    "title": "Iphone 16 Pro Max 5G 8Gb 256Gb",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "mobiles",
    "price": 899.99,
    "originalPrice": 1125,
    "rating": 4.8,
    "reviewCount": 27,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2024/09/products-1_117.png"
    ],
    "stock": 34,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Iphone 16 Pro Max 5G 8Gb 256Gb",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_34_iphone-16-pro-max-5g-8gb-256gb_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_35_enzo-8-in-1-hair-straightener-",
    "title": "Enzo 8 IN 1 Hair Straightener 4133 Pro Max",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "mobiles",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 32,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Enzo-8-IN-1-Hair-Straightener-4133-Pro-Max-.png"
    ],
    "stock": 37,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Enzo 8 IN 1 Hair Straightener 4133 ",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_35_enzo-8-in-1-hair-straightener-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_36_enzo-7-in-1-hair-straightener-",
    "title": "Enzo 7 IN 1 Hair Straightener EN-760",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 37,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Enzo-7-IN-1-Hair-Straightener-EN-760-.png"
    ],
    "stock": 40,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Enzo 7 IN 1 Hair Straightener EN-76",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_36_enzo-7-in-1-hair-straightener-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_37_enzo-5-in-1-hair-straightener-",
    "title": "Enzo 5 IN 1 Hair Straightener Set EN-4142",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 42,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Enzo-5-IN-1-Hair-Straightener-Set-EN-4142-.png"
    ],
    "stock": 43,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Enzo 5 IN 1 Hair Straightener Set E",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_37_enzo-5-in-1-hair-straightener-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_38_cleo-sfo-folding-table-with-4-",
    "title": "Cleo-SFO Folding Table With 4 Chairs Set",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 47,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Cleo-SFO-Folding-Table-With-4-Chairs-Set-.png"
    ],
    "stock": 46,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Cleo-SFO Folding Table With 4 Chair",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_38_cleo-sfo-folding-table-with-4-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_39_playx-compact-racing-simulator",
    "title": "PlayX Compact Racing Simulator RS1",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 52,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/PlayX-Compact-Racing-Simulator-RS1.png"
    ],
    "stock": 49,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "PlayX Compact Racing Simulator RS1",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_39_playx-compact-racing-simulator_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_40_playx-wireless-gaming-headset-",
    "title": "PlayX Wireless Gaming Headset H01",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 57,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/PlayX-Wireless-Gaming-Headset-H01-.png"
    ],
    "stock": 52,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "PlayX Wireless Gaming Headset H01",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_40_playx-wireless-gaming-headset-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_41_enzo-6-in-1-hair-straightener-",
    "title": "Enzo 6 In 1 Hair Straightener EN 4133-5",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 62,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Enzo-6-In-1-Hair-Straightener-EN-4133-5-.png"
    ],
    "stock": 15,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Enzo 6 In 1 Hair Straightener EN 41",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_41_enzo-6-in-1-hair-straightener-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_42_keva-silicon-case-galaxy-a07-a",
    "title": "Keva Silicon Case Galaxy A07 / A17 / A27 / A37 / A57 Clear",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 899.99,
    "originalPrice": 1125,
    "rating": 5,
    "reviewCount": 67,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Keva-Silicon-Case-Galaxy-A07-A17-A27-A37-A57-Clear-.png"
    ],
    "stock": 18,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Keva Silicon Case Galaxy A07 / A17 ",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_42_keva-silicon-case-galaxy-a07-a_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_43_yesido-yh51-decode-direct-plug",
    "title": "Yesido YH51 Decode Direct Plug For Lightning Earphone",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "mobiles",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 72,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Yesido-YH51-Decode-Direct-Plug-For-Lightning-Earphone-.png"
    ],
    "stock": 21,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Yesido YH51 Decode Direct Plug For ",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_43_yesido-yh51-decode-direct-plug_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_44_go-des-gd-hd313-car-cup-tablet",
    "title": "Go-des GD HD313 Car Cup Tablet Holder",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 77,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Go-des-GD-HD313-Car-Cup-Tablet-Holder-.png"
    ],
    "stock": 24,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Go-des GD HD313 Car Cup Tablet Hold",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_44_go-des-gd-hd313-car-cup-tablet_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_45_cleo-ma-langsdom-bluetooth-nec",
    "title": "Cleo-MA Langsdom Bluetooth Neckband",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "wearables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 82,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Cleo-MA-Langsdom-Bluetooth-Neckband-.png"
    ],
    "stock": 27,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Cleo-MA Langsdom Bluetooth Neckband",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_45_cleo-ma-langsdom-bluetooth-nec_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_46_anker-data-cable-a8752h11-usb-",
    "title": "Anker Data Cable A8752H11 Usb-C to Usb-C Braided 60w 1mtr/3.3ft",
    "subtitle": "Anker Official Hardware • Cleopatra Web Store Oman",
    "brand": "Anker",
    "category": "cables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 87,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Anker-Data-Cable-A8752H11-Usb-C-to-Usb-C-Braided-60w-1mtr3.3ft-.png"
    ],
    "stock": 30,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Anker Data Cable A8752H11 Usb-C to ",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_46_anker-data-cable-a8752h11-usb-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_47_anker-data-cable-a8060-zolo-us",
    "title": "Anker Data Cable A8060 Zolo Usb C To Usb C Brieded 240w 3.3ft",
    "subtitle": "Anker Official Hardware • Cleopatra Web Store Oman",
    "brand": "Anker",
    "category": "cables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 92,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Anker-Data-Cable-A8060-Zolo-Usb-C-To-Usb-C-Brieded-240w-3.3ft-.png"
    ],
    "stock": 33,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Anker Data Cable A8060 Zolo Usb C T",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_47_anker-data-cable-a8060-zolo-us_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_48_jbl-live-780nc-wireless-over-e",
    "title": "Jbl Live 780NC Wireless Over Ear Headphope Black",
    "subtitle": "JBL Official Hardware • Cleopatra Web Store Oman",
    "brand": "JBL",
    "category": "audio",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 97,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Jbl-Live-780NC-Wireless-Over-Ear-Headphope-Black-.png"
    ],
    "stock": 36,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Jbl Live 780NC Wireless Over Ear He",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_48_jbl-live-780nc-wireless-over-e_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_49_jbl-quantum-650-wireless-gamin",
    "title": "Jbl Quantum 650 Wireless Gaming Headset Black",
    "subtitle": "JBL Official Hardware • Cleopatra Web Store Oman",
    "brand": "JBL",
    "category": "audio",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 102,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Jbl-Quantum-650-Wireless-Gaming-Headset-Black-.png"
    ],
    "stock": 39,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Jbl Quantum 650 Wireless Gaming Hea",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_49_jbl-quantum-650-wireless-gamin_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_50_jbl-quantum-650-wireless-gamin",
    "title": "Jbl Quantum 650 Wireless Gaming Headset White",
    "subtitle": "JBL Official Hardware • Cleopatra Web Store Oman",
    "brand": "JBL",
    "category": "audio",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 107,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Jbl-Quantum-650-Wireless-Gaming-Headset-White-.png"
    ],
    "stock": 42,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Jbl Quantum 650 Wireless Gaming Hea",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_50_jbl-quantum-650-wireless-gamin_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_51_digitplus-data-cable-dp-c151l-",
    "title": "DigitPlus Data Cable DP-C151L Usb-A to Lightning 1mtr",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "cables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 112,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/DigitPlus-Data-Cable-DP-C151L-Usb-A-to-Lightning-1mtr-.png"
    ],
    "stock": 45,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "DigitPlus Data Cable DP-C151L Usb-A",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_51_digitplus-data-cable-dp-c151l-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_52_digitplus-data-cable-dp-c145t-",
    "title": "DigitPlus Data Cable DP-C145T Usb-A to Usb C 1.2Mtr",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "cables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 117,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/DigitPlus-Data-Cable-DP-C145T-Usb-A-to-Usb-C-1.2Mtr-.png"
    ],
    "stock": 48,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "DigitPlus Data Cable DP-C145T Usb-A",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_52_digitplus-data-cable-dp-c145t-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_53_digitplus-data-cable-dp-c106t-",
    "title": "Digitplus Data Cable DP-C106T Usb C to Usb C 60w 3mtr",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "cables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 122,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Digitplus-Data-Cable-DP-C106T-Usb-C-to-Usb-C-60w-3mtr.png"
    ],
    "stock": 51,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Digitplus Data Cable DP-C106T Usb C",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_53_digitplus-data-cable-dp-c106t-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_54_digitplus-data-cable-dp-c106l-",
    "title": "Digitplus Data Cable DP-C106L Usb C to Lightning 30w 3mtr",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "cables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 127,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Digitplus-Data-Cable-DP-C106L-Usb-C-to-Lightning-30w-3mtr-.png"
    ],
    "stock": 54,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Digitplus Data Cable DP-C106L Usb C",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_54_digitplus-data-cable-dp-c106l-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_55_digitplus-data-cable-dp-c105l-",
    "title": "Digitplus Data Cable DP-C105L Usb C to Lightning 30w 2mtr",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "cables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 132,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Digitplus-Data-Cable-DP-C105L-Usb-C-to-Lightning-30w-2mtr.png"
    ],
    "stock": 17,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Digitplus Data Cable DP-C105L Usb C",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_55_digitplus-data-cable-dp-c105l-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_56_honor-choice-t10-4gb-64gb-4g-g",
    "title": "Honor Choice T10 4gb 64gb 4g Gsm",
    "subtitle": "Honor Official Hardware • Cleopatra Web Store Oman",
    "brand": "Honor",
    "category": "mobiles",
    "price": 89.99,
    "originalPrice": 112,
    "rating": 4.8999999999999995,
    "reviewCount": 137,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/HONOR-T10-SILVER-1.webp"
    ],
    "stock": 20,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Honor Choice T10 4gb 64gb 4g Gsm",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_56_honor-choice-t10-4gb-64gb-4g-g_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_57_honor-choice-t10-3gb-32gb-4g-g",
    "title": "Honor Choice T10 3gb 32gb 4g Gsm",
    "subtitle": "Honor Official Hardware • Cleopatra Web Store Oman",
    "brand": "Honor",
    "category": "mobiles",
    "price": 89.99,
    "originalPrice": 112,
    "rating": 5,
    "reviewCount": 142,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/honor-choice-t10-64gb-4g-black-468_grande.webp"
    ],
    "stock": 23,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Honor Choice T10 3gb 32gb 4g Gsm",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_57_honor-choice-t10-3gb-32gb-4g-g_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_58_samsung-galaxy-a16-4gb-128gb-4",
    "title": "Samsung Galaxy A16 4gb 128gb 4g Gsm",
    "subtitle": "Samsung Official Hardware • Cleopatra Web Store Oman",
    "brand": "Samsung",
    "category": "accessories",
    "price": 89.99,
    "originalPrice": 112,
    "rating": 4.8,
    "reviewCount": 147,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/sam-a16-black.jpg"
    ],
    "stock": 26,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Samsung Galaxy A16 4gb 128gb 4g Gsm",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_58_samsung-galaxy-a16-4gb-128gb-4_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_59_honor-x7e-plus-8gb-256gb-5g-gs",
    "title": "Honor X7e Plus 8gb 256gb 5g Gsm",
    "subtitle": "Honor Official Hardware • Cleopatra Web Store Oman",
    "brand": "Honor",
    "category": "mobiles",
    "price": 499.99,
    "originalPrice": 625,
    "rating": 4.8999999999999995,
    "reviewCount": 152,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/x7e-plus-silver-1.webp"
    ],
    "stock": 29,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Honor X7e Plus 8gb 256gb 5g Gsm",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_59_honor-x7e-plus-8gb-256gb-5g-gs_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_60_honor-x7e-plus-6gb-128gb-5g-gs",
    "title": "Honor X7e Plus 6gb 128gb 5g Gsm",
    "subtitle": "Honor Official Hardware • Cleopatra Web Store Oman",
    "brand": "Honor",
    "category": "mobiles",
    "price": 179.99,
    "originalPrice": 225,
    "rating": 5,
    "reviewCount": 157,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/x7e-plus.webp"
    ],
    "stock": 32,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Honor X7e Plus 6gb 128gb 5g Gsm",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_60_honor-x7e-plus-6gb-128gb-5g-gs_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_61_mi-redmi-pad-2-9-7-inch-wifi-f",
    "title": "Mi Redmi Pad 2 9.7 Inch Wifi + Flip Cover",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "mobiles",
    "price": 179.99,
    "originalPrice": 225,
    "rating": 4.8,
    "reviewCount": 12,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/REDMI-PAD-2-9.7.webp"
    ],
    "stock": 35,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Mi Redmi Pad 2 9.7 Inch Wifi + Flip",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_61_mi-redmi-pad-2-9-7-inch-wifi-f_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_62_honor-x7e-6gb-256gb-4g-gsm",
    "title": "Honor X7e 6gb 256gb 4g Gsm",
    "subtitle": "Honor Official Hardware • Cleopatra Web Store Oman",
    "brand": "Honor",
    "category": "mobiles",
    "price": 179.99,
    "originalPrice": 225,
    "rating": 4.8999999999999995,
    "reviewCount": 17,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/X7E-BLUE.webp"
    ],
    "stock": 38,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Honor X7e 6gb 256gb 4g Gsm",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_62_honor-x7e-6gb-256gb-4g-gsm_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_63_samsung-galaxy-a17-5g-gsm-8gb-",
    "title": "Samsung Galaxy A17 5g Gsm 8gb 256gb",
    "subtitle": "Samsung Official Hardware • Cleopatra Web Store Oman",
    "brand": "Samsung",
    "category": "accessories",
    "price": 179.99,
    "originalPrice": 225,
    "rating": 5,
    "reviewCount": 22,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/a17-5g-grey.webp"
    ],
    "stock": 41,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Samsung Galaxy A17 5g Gsm 8gb 256gb",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_63_samsung-galaxy-a17-5g-gsm-8gb-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_64_huawei-nova-15-max-4g-gsm",
    "title": "Huawei Nova 15 Max 4g Gsm",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 499.99,
    "originalPrice": 625,
    "rating": 4.8,
    "reviewCount": 27,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/HUAWEI-MAX-BLUSH-GOLD.webp"
    ],
    "stock": 44,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Huawei Nova 15 Max 4g Gsm",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_64_huawei-nova-15-max-4g-gsm_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_65_oneplus-15r-12gb-512gb-5g-gsm",
    "title": "Oneplus 15r 12gb 512gb 5g Gsm",
    "subtitle": "OnePlus Official Hardware • Cleopatra Web Store Oman",
    "brand": "OnePlus",
    "category": "accessories",
    "price": 499.99,
    "originalPrice": 625,
    "rating": 4.8999999999999995,
    "reviewCount": 32,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/05/oneplus-15r-mint.webp"
    ],
    "stock": 47,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Oneplus 15r 12gb 512gb 5g Gsm",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_65_oneplus-15r-12gb-512gb-5g-gsm_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_66_oneplus-15-16gb-512gb-5g-gsm",
    "title": "Oneplus 15 16gb 512gb 5g Gsm",
    "subtitle": "OnePlus Official Hardware • Cleopatra Web Store Oman",
    "brand": "OnePlus",
    "category": "accessories",
    "price": 899.99,
    "originalPrice": 1125,
    "rating": 5,
    "reviewCount": 37,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/05/ONEPLUS-15-SAND-STORM.webp"
    ],
    "stock": 50,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Oneplus 15 16gb 512gb 5g Gsm",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_66_oneplus-15-16gb-512gb-5g-gsm_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_67_vivo-x300-pro-16gb-512gb-5g-gs",
    "title": "Vivo X300 Pro 16gb 512gb 5g Gsm",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 899.99,
    "originalPrice": 1125,
    "rating": 4.8,
    "reviewCount": 42,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/05/X300-PRO-BROWN.webp"
    ],
    "stock": 53,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Vivo X300 Pro 16gb 512gb 5g Gsm",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_67_vivo-x300-pro-16gb-512gb-5g-gs_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_68_vivo-x200-fe-12gb-512gb-5g",
    "title": "Vivo X200 FE 12GB 512GB 5G",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 499.99,
    "originalPrice": 625,
    "rating": 4.8999999999999995,
    "reviewCount": 47,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/05/X200-FE-YELLOW.webp"
    ],
    "stock": 16,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Vivo X200 FE 12GB 512GB 5G",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_68_vivo-x200-fe-12gb-512gb-5g_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_69_tecno-pova-curve-2-12gb-256gb-",
    "title": "Tecno Pova Curve 2 12gb 256gb 5g Gsm",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 499.99,
    "originalPrice": 625,
    "rating": 5,
    "reviewCount": 52,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/05/curve-2-purple.webp"
    ],
    "stock": 19,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Tecno Pova Curve 2 12gb 256gb 5g Gs",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_69_tecno-pova-curve-2-12gb-256gb-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_70_tecno-spark-40-5g-8gb-256gb-gs",
    "title": "Tecno Spark 40 5g 8gb 256gb Gsm",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 179.99,
    "originalPrice": 225,
    "rating": 4.8,
    "reviewCount": 57,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/05/SPARK-40-BLUE.webp"
    ],
    "stock": 22,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Tecno Spark 40 5g 8gb 256gb Gsm",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_70_tecno-spark-40-5g-8gb-256gb-gs_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_71_tecno-spark-go-3-4gb-128gb-4g",
    "title": "Tecno Spark go 3 4gb 128gb 4g",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 89.99,
    "originalPrice": 112,
    "rating": 4.8999999999999995,
    "reviewCount": 62,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/05/go-3-black.webp"
    ],
    "stock": 25,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Tecno Spark go 3 4gb 128gb 4g",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_71_tecno-spark-go-3-4gb-128gb-4g_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_72_samsung-galaxy-s25-fe-8gb-256g",
    "title": "Samsung Galaxy S25 fe 8gb 256gb 5g Gsm",
    "subtitle": "Samsung Official Hardware • Cleopatra Web Store Oman",
    "brand": "Samsung",
    "category": "mobiles",
    "price": 499.99,
    "originalPrice": 625,
    "rating": 5,
    "reviewCount": 67,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/05/SAM-S25-FE-NAVY.jpg"
    ],
    "stock": 28,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Samsung Galaxy S25 fe 8gb 256gb 5g ",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_72_samsung-galaxy-s25-fe-8gb-256g_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_73_samsung-galaxy-a57-12gb-256gb-",
    "title": "Samsung Galaxy A57 12gb 256gb 5g Gsm",
    "subtitle": "Samsung Official Hardware • Cleopatra Web Store Oman",
    "brand": "Samsung",
    "category": "accessories",
    "price": 499.99,
    "originalPrice": 625,
    "rating": 4.8,
    "reviewCount": 72,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/05/sam-a57-iceblue-1.webp"
    ],
    "stock": 31,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Samsung Galaxy A57 12gb 256gb 5g Gs",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_73_samsung-galaxy-a57-12gb-256gb-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_74_honor-600-12gb-256gb-5g-gsm",
    "title": "Honor 600 12gb 256gb 5g Gsm",
    "subtitle": "Honor Official Hardware • Cleopatra Web Store Oman",
    "brand": "Honor",
    "category": "mobiles",
    "price": 499.99,
    "originalPrice": 625,
    "rating": 4.8999999999999995,
    "reviewCount": 77,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/05/honor-600-black-1-1.jpg"
    ],
    "stock": 34,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Honor 600 12gb 256gb 5g Gsm",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_74_honor-600-12gb-256gb-5g-gsm_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_75_digitplus-data-cable-dp-c105t-",
    "title": "Digitplus Data Cable DP-C105T Usb C to Usb C 60w 2mtr",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "cables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 82,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Digitplus-Data-Cable-DP-C105T-Usb-C-to-Usb-C-60w-2mtr-.png"
    ],
    "stock": 37,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Digitplus Data Cable DP-C105T Usb C",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_75_digitplus-data-cable-dp-c105t-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_76_digitplus-data-cable-dp-c103l-",
    "title": "Digitplus Data Cable DP-C103L Usb C to Lightning 60w 2mtr",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "cables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 87,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Digitplus-Data-Cable-DP-C103L-Usb-C-to-Lightning-60w-2mtr.png"
    ],
    "stock": 40,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Digitplus Data Cable DP-C103L Usb C",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_76_digitplus-data-cable-dp-c103l-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_77_digitplus-data-cable-dp-c103t-",
    "title": "Digitplus Data Cable DP-C103T Usb C to Usb C 60w 2mtr",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "cables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 92,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Digitplus-Data-Cable-DP-C103T-Usb-C-to-Usb-C-60w-2mtr-.png"
    ],
    "stock": 43,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Digitplus Data Cable DP-C103T Usb C",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_77_digitplus-data-cable-dp-c103t-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_78_digitplus-data-cable-dp-c164t-",
    "title": "Digitplus Data Cable DP-C164T Usb-C to Usb-C 60w 5mtr",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "cables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 97,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Digitplus-Data-Cable-DP-C164T-Usb-C-to-Usb-C-60w-5mtr.png"
    ],
    "stock": 46,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Digitplus Data Cable DP-C164T Usb-C",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_78_digitplus-data-cable-dp-c164t-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_79_philips-wall-charger-dlp2629cw",
    "title": "Philips Wall Charger DLP2629cw 20w Usb-C Adapter",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "chargers",
    "price": 39.99,
    "originalPrice": 50,
    "rating": 4.8,
    "reviewCount": 102,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Philips-Wall-Charger-DLP2629cw-20w-Usb-C-Adapte-.png"
    ],
    "stock": 49,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Philips Wall Charger DLP2629cw 20w ",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_79_philips-wall-charger-dlp2629cw_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_80_philips-data-cable-dlc4561cb-u",
    "title": "Philips Data Cable DLC4561CB Usb C to Usb C 6ft 65w",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "cables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 107,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Philips-Data-Cable-DLC4561CB-Usb-C-to-Usb-C-6ft-65w-.png"
    ],
    "stock": 52,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Philips Data Cable DLC4561CB Usb C ",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_80_philips-data-cable-dlc4561cb-u_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_81_anker-data-cable-a81f7-usb-c-t",
    "title": "Anker Data Cable A81F7 Usb C to Usb C 10ft/3mtr Power Line 60w",
    "subtitle": "Anker Official Hardware • Cleopatra Web Store Oman",
    "brand": "Anker",
    "category": "cables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 112,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Anker-Data-Cable-A81F7-Usb-C-to-Usb-C-10ft3mtr-Power-Line-60w-.png"
    ],
    "stock": 15,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Anker Data Cable A81F7 Usb C to Usb",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_81_anker-data-cable-a81f7-usb-c-t_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_82_anker-data-cable-a81h7-usb-a-t",
    "title": "Anker Data Cable A81H7 Usb A to Usb C 10ft/3mtr Power Line 322",
    "subtitle": "Anker Official Hardware • Cleopatra Web Store Oman",
    "brand": "Anker",
    "category": "cables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 117,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Anker-Data-Cable-A81H7-Usb-A-to-Usb-C-10ft3mtr-Power-Line-322-.png"
    ],
    "stock": 18,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Anker Data Cable A81H7 Usb A to Usb",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_82_anker-data-cable-a81h7-usb-a-t_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_83_belkin-wiz040my-ultra-charger-",
    "title": "Belkin wiz040my Ultra Charger Pro 3 in 1 Magnetic Charging Dock",
    "subtitle": "Belkin Official Hardware • Cleopatra Web Store Oman",
    "brand": "Belkin",
    "category": "chargers",
    "price": 39.99,
    "originalPrice": 50,
    "rating": 4.8999999999999995,
    "reviewCount": 122,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Belkin-wiz040my-Ultra-Charger-Pro-3-in-1-Magnetic-Charging-Dock-.png"
    ],
    "stock": 21,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Belkin wiz040my Ultra Charger Pro 3",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_83_belkin-wiz040my-ultra-charger-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_84_belkin-data-cable-cab001bt-usb",
    "title": "Belkin Data Cable CAB001bt Usb A to Usb C Boost Caharge 1mtr",
    "subtitle": "Belkin Official Hardware • Cleopatra Web Store Oman",
    "brand": "Belkin",
    "category": "cables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 127,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Belkin-Data-Cable-CAB001bt-Usb-A-to-Usb-C-Boost-Caharge-1mtr-.png"
    ],
    "stock": 24,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Belkin Data Cable CAB001bt Usb A to",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_84_belkin-data-cable-cab001bt-usb_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_85_beats-mdgd4zm-a-type-c-to-c-ca",
    "title": "Beats MDGD4ZM/A Type C to C Cable (1.5 m / 5 ft) Surge Stone",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "cables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 132,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Beats-MDGD4ZMA-Type-C-to-C-Cable-1.5-m-5-ft-Surge-Stone.png"
    ],
    "stock": 27,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Beats MDGD4ZM/A Type C to C Cable (",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_85_beats-mdgd4zm-a-type-c-to-c-ca_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_86_beats-mdga4ee-a-type-c-to-c-ca",
    "title": "Beats MDGA4EE/A Type C to C Cable (1.5 m / 5 ft) Bolt Black",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "cables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 137,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Beats-MDGA4EEA-Type-C-to-C-Cable-1.5-m-5-ft-Bolt-Black-.png"
    ],
    "stock": 30,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Beats MDGA4EE/A Type C to C Cable (",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_86_beats-mdga4ee-a-type-c-to-c-ca_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_87_digitplus-fast-charg-aadapter-",
    "title": "Digitplus Fast Charg Aadapter Dp-Pd038 30w",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "chargers",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 142,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Digitplus-Fast-Charg-Aadapter-Dp-Pd038-30w-.png"
    ],
    "stock": 33,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Digitplus Fast Charg Aadapter Dp-Pd",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_87_digitplus-fast-charg-aadapter-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_88_belkin-wall-charger-wca013my-a",
    "title": "Belkin Wall Charger WCA013My Adaptor Pd 45w",
    "subtitle": "Belkin Official Hardware • Cleopatra Web Store Oman",
    "brand": "Belkin",
    "category": "chargers",
    "price": 39.99,
    "originalPrice": 50,
    "rating": 4.8,
    "reviewCount": 147,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Belkin-Wall-Charger-WCA013My-Adaptor-Pd-45w-.png"
    ],
    "stock": 36,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Belkin Wall Charger WCA013My Adapto",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_88_belkin-wall-charger-wca013my-a_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_89_xiaomi-mi-home-charger-usb-a-t",
    "title": "Xiaomi Mi Home Charger Usb A to Usb C Combo 120w",
    "subtitle": "Xiaomi Official Hardware • Cleopatra Web Store Oman",
    "brand": "Xiaomi",
    "category": "mobiles",
    "price": 39.99,
    "originalPrice": 50,
    "rating": 4.8999999999999995,
    "reviewCount": 152,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/Xiaomi-Mi-Home-Charger-Usb-A-to-Usb-C-Combo-120w-.png"
    ],
    "stock": 39,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Xiaomi Mi Home Charger Usb A to Usb",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_89_xiaomi-mi-home-charger-usb-a-t_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_90_cleo-ma-ac-09cc-pd-25w-super-f",
    "title": "Cleo-MA AC 09CC Pd 25w Super Fast Charger With C To C Cable",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "chargers",
    "price": 39.99,
    "originalPrice": 50,
    "rating": 5,
    "reviewCount": 157,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/Cleo-Ma-Ac-09cc-Pd-25w-Super-Fast-Charger-With-C-To-C-Cable.jpg"
    ],
    "stock": 42,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Cleo-MA AC 09CC Pd 25w Super Fast C",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_90_cleo-ma-ac-09cc-pd-25w-super-f_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_91_cleo-ma-smart-tracking-selfie-",
    "title": "Cleo-MA Smart Tracking Selfie Stick Q13 NGB-847",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 12,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/Cleo-MA-Smart-Tracking-Selfie-Stick-Q13-NGB-847-.png"
    ],
    "stock": 45,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Cleo-MA Smart Tracking Selfie Stick",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_91_cleo-ma-smart-tracking-selfie-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_92_haino-teko-usb-to-micro-cable-",
    "title": "Haino Teko USB To Micro Cable 3M",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "cables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 17,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/Haino-Teko-USB-To-Micro-Cable-3M.png"
    ],
    "stock": 48,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Haino Teko USB To Micro Cable 3M",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_92_haino-teko-usb-to-micro-cable-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_93_haino-teko-usb-to-type-c-cable",
    "title": "Haino Teko USB To Type C Cable 3M",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "cables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 22,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/Haino-Teko-Usb-To-Type-C-Cable-3m-1.png"
    ],
    "stock": 51,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Haino Teko USB To Type C Cable 3M",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_93_haino-teko-usb-to-type-c-cable_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_94_haino-teko-cable-usb-to-micro-",
    "title": "Haino Teko Cable USB To Micro 1.5M",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "cables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 27,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/Haino-Teko-Cable-USB-To-Micro-1.5M-1.png"
    ],
    "stock": 54,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Haino Teko Cable USB To Micro 1.5M",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_94_haino-teko-cable-usb-to-micro-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_95_haino-teko-c-to-lightning-150-",
    "title": "Haino Teko C To Lightning-150 Charging Cable 1.5M",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "chargers",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 32,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/Haino-Teko-C-To-Lightning-150-Charging-Cable-1.5m.png"
    ],
    "stock": 17,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Haino Teko C To Lightning-150 Charg",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_95_haino-teko-c-to-lightning-150-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_96_xkin-charger-xk-hc146-45w-usb-",
    "title": "Xkin Charger Xk-hc146 45W USB-C Charger with Cable Fast PD Wall Adapter",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "chargers",
    "price": 39.99,
    "originalPrice": 50,
    "rating": 5,
    "reviewCount": 37,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/Xkin-Charger-Xk-hc45-20W-Charger-with-C-To-Lighting-Cable-1-3.png"
    ],
    "stock": 20,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Xkin Charger Xk-hc146 45W USB-C Cha",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_96_xkin-charger-xk-hc146-45w-usb-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_97_philips-powerbank-dlp6731cg-20",
    "title": "Philips PowerBank DLP6731CG 20000mah Dual port PD 100w",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 42,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Philips-PowerBank-DLP6731CG-20000mah-Dual-port-PD-100w-.png"
    ],
    "stock": 23,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Philips PowerBank DLP6731CG 20000ma",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_97_philips-powerbank-dlp6731cg-20_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_98_anker-powerbank-a110jh11-zolo-",
    "title": "Anker PowerBank A110Jh11 Zolo 10000Mah Built For Endurance 30w",
    "subtitle": "Anker Official Hardware • Cleopatra Web Store Oman",
    "brand": "Anker",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 47,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Anker-PowerBank-A110Kh11-Zolo-5000Mah-Built-For-Endurance-15w-.png"
    ],
    "stock": 26,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Anker PowerBank A110Jh11 Zolo 10000",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_98_anker-powerbank-a110jh11-zolo-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_99_anker-powerbank-a110lh12-zolo-",
    "title": "Anker PowerBank A110Lh12 Zolo 10000mah Dual in-Built Usb-C Cables 35w",
    "subtitle": "Anker Official Hardware • Cleopatra Web Store Oman",
    "brand": "Anker",
    "category": "cables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 52,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Anker-PowerBank-A110Lh12-Zolo-10000mah-Dual-in-Built-Usb-C-Cables-35w-.png"
    ],
    "stock": 29,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Anker PowerBank A110Lh12 Zolo 10000",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_99_anker-powerbank-a110lh12-zolo-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_100_anker-powerbank-a110kh11-zolo-",
    "title": "Anker PowerBank A110Kh11 Zolo 5000Mah Built For Endurance 15w",
    "subtitle": "Anker Official Hardware • Cleopatra Web Store Oman",
    "brand": "Anker",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 57,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Anker-PowerBank-A110Kh11-Zolo-5000Mah-Built-For-Endurance-15w-.png"
    ],
    "stock": 32,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Anker PowerBank A110Kh11 Zolo 5000M",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_100_anker-powerbank-a110kh11-zolo-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_101_anker-wireless-power-bank-a165",
    "title": "Anker Wireless Power Bank A1654 Stand with display10k 15w",
    "subtitle": "Anker Official Hardware • Cleopatra Web Store Oman",
    "brand": "Anker",
    "category": "chargers",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 62,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Anker-Wireless-Power-Bank-A1654-Stand-with-display10k-15w-1-1.png"
    ],
    "stock": 35,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Anker Wireless Power Bank A1654 Sta",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_101_anker-wireless-power-bank-a165_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_102_acefast-fast-charge-power-bank",
    "title": "Acefast Fast Charge Power Bank M34 PD45W 20000mAh",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "chargers",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 67,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Acefast-Fast-Charge-Power-Bank-M34-PD45W-20000mAh-.png"
    ],
    "stock": 38,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Acefast Fast Charge Power Bank M34 ",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_102_acefast-fast-charge-power-bank_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_103_acefast-fast-charge-power-bank",
    "title": "Acefast Fast Charge Power Bank M32 PD35W 10000mAh",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "chargers",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 72,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Acefast-Fast-Charge-Power-Bank-M32-PD35W-10000mAh.png"
    ],
    "stock": 41,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Acefast Fast Charge Power Bank M32 ",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_103_acefast-fast-charge-power-bank_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_104_cleo-ma-t171p-magnetic15w-wire",
    "title": "Cleo-MA T171P Magnetic15W Wireless Power Bank 5K Pd 20w ( CCC )",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "chargers",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 77,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Cleo-MA-T171P-Magnetic15W-Wireless-Power-Bank-5K-Pd-20w-CCC-.png"
    ],
    "stock": 44,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Cleo-MA T171P Magnetic15W Wireless ",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_104_cleo-ma-t171p-magnetic15w-wire_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_105_cleo-ma-t173lp-built-usb-c-cab",
    "title": "Cleo-MA T173LP Built Usb C Cable 20000Mah 65w CCC",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "cables",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 82,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Cleo-MA-T173LP-Built-Usb-C-Cable-20000Mah-65w-CCC.png"
    ],
    "stock": 47,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Cleo-MA T173LP Built Usb C Cable 20",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_105_cleo-ma-t173lp-built-usb-c-cab_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_106_anker-power-bank-165w-25000mah",
    "title": "Anker Power Bank 165w 25000Mah Ultra-Fast Charging With Type-C Cable A1695H11",
    "subtitle": "Anker Official Hardware • Cleopatra Web Store Oman",
    "brand": "Anker",
    "category": "chargers",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 87,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Anker-Power-Bank-165w-25000Mah-Ultra-Fast-Charging-With-Type-C-Cable-A1695H11.png"
    ],
    "stock": 50,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Anker Power Bank 165w 25000Mah Ultr",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_106_anker-power-bank-165w-25000mah_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_107_xkin-xk-pb423-super-mini-5000m",
    "title": "Xkin Xk-pb423 Super Mini 5000mAh Power Bank with Built-in Cable",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "chargers",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 92,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/Xkin-Xk-pb423-Super-Mini-5000mAh-Power-Bank-with-Built-in-Cable-1.png"
    ],
    "stock": 53,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Xkin Xk-pb423 Super Mini 5000mAh Po",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_107_xkin-xk-pb423-super-mini-5000m_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_108_u-green-45423b-two-way-fast-ch",
    "title": "U Green 45423B Two Way Fast Charging Power Bank 20w",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "chargers",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 97,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/Untitled-design-1-1.png"
    ],
    "stock": 16,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "U Green 45423B Two Way Fast Chargin",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_108_u-green-45423b-two-way-fast-ch_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_109_u-green-75701b-10000mah-55w-po",
    "title": "U Green 75701B 10000mah 55w Power Bank",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "chargers",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 102,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/a-gift-17.png"
    ],
    "stock": 19,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "U Green 75701B 10000mah 55w Power B",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_109_u-green-75701b-10000mah-55w-po_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_110_u-green-75982b-wireless-power-",
    "title": "U Green 75982B Wireless Power Bank Magnetic 10000mah 30w",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "chargers",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 107,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/a-gift-16.png"
    ],
    "stock": 22,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "U Green 75982B Wireless Power Bank ",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_110_u-green-75982b-wireless-power-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_111_u-green-uno-q2-45337-wireless-",
    "title": "U Green Uno Q2 45337 Wireless Power Bank Magnetic 10000mah 20w",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "chargers",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 112,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/a-gift-15.png"
    ],
    "stock": 25,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "U Green Uno Q2 45337 Wireless Power",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_111_u-green-uno-q2-45337-wireless-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_112_u-green-uno-35605b-wireless-po",
    "title": "U Green Uno 35605b Wireless Power Bank Magnetic 10000mah 20w",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "chargers",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 117,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/a-gift-15.png"
    ],
    "stock": 28,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "U Green Uno 35605b Wireless Power B",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_112_u-green-uno-35605b-wireless-po_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_113_u-green-25919-wireless-power-b",
    "title": "U Green 25919 Wireless Power Bank Magnetic 10000mah 20w",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "chargers",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 122,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/a-gift-1-9.png"
    ],
    "stock": 31,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "U Green 25919 Wireless Power Bank M",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_113_u-green-25919-wireless-power-b_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_114_u-green-25207-wireless-powerba",
    "title": "U Green 25207 Wireless PowerBank Magnetic 10000mah 15w",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 127,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/a-gift-14.png"
    ],
    "stock": 34,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "U Green 25207 Wireless PowerBank Ma",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_114_u-green-25207-wireless-powerba_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_115_belkin-bpd007-magnetic-15w-wir",
    "title": "Belkin BPD007 Magnetic 15W Wireless Power Bank 8K + Stand",
    "subtitle": "Belkin Official Hardware • Cleopatra Web Store Oman",
    "brand": "Belkin",
    "category": "chargers",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 132,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/a-gift-13.png"
    ],
    "stock": 37,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Belkin BPD007 Magnetic 15W Wireless",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_115_belkin-bpd007-magnetic-15w-wir_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_116_belkin-bpd008bt-qi2-magnetic-1",
    "title": "Belkin BPD008bt Qi2 Magnetic 15W Wireless Power Bank 10K + Stand",
    "subtitle": "Belkin Official Hardware • Cleopatra Web Store Oman",
    "brand": "Belkin",
    "category": "chargers",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 137,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/a-gift-3-2.png"
    ],
    "stock": 40,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Belkin BPD008bt Qi2 Magnetic 15W Wi",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_116_belkin-bpd008bt-qi2-magnetic-1_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_117_belkin-bpb011bt-3-port-10k-pow",
    "title": "Belkin BPB011bt 3-Port 10K Power Bank with USB-C 15W dual USB-A",
    "subtitle": "Belkin Official Hardware • Cleopatra Web Store Oman",
    "brand": "Belkin",
    "category": "chargers",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 142,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/a-gift-3-4.png"
    ],
    "stock": 43,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Belkin BPB011bt 3-Port 10K Power Ba",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_117_belkin-bpb011bt-3-port-10k-pow_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_118_belkin-bpb020-20k-65w-pd-3-por",
    "title": "Belkin BPB020 20K 65W PD 3-Port Power Bank",
    "subtitle": "Belkin Official Hardware • Cleopatra Web Store Oman",
    "brand": "Belkin",
    "category": "chargers",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 147,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/a-gift-3-3.png"
    ],
    "stock": 46,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Belkin BPB020 20K 65W PD 3-Port Pow",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_118_belkin-bpb020-20k-65w-pd-3-por_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_119_belkin-bpd004bt-magnetic-wirel",
    "title": "Belkin BPD004bt Magnetic Wireless Power Bank 5K",
    "subtitle": "Belkin Official Hardware • Cleopatra Web Store Oman",
    "brand": "Belkin",
    "category": "chargers",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 152,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/a-gift-3-2.png"
    ],
    "stock": 49,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Belkin BPD004bt Magnetic Wireless P",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_119_belkin-bpd004bt-magnetic-wirel_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_120_telux-powerbank-pbvx05-voltx05",
    "title": "Telux Powerbank PBVX05 Voltx05 20w Pd 5000mah",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 19.99,
    "originalPrice": 25,
    "rating": 5,
    "reviewCount": 157,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/03/Telux-Powerbank-PBVX05-Voltx05-20w-Pd-5000mah.jpg"
    ],
    "stock": 52,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Telux Powerbank PBVX05 Voltx05 20w ",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_120_telux-powerbank-pbvx05-voltx05_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_121_anker-powerbank-a1688-zolo-pow",
    "title": "Anker Powerbank A1688 Zolo Powercore With Cable 10000Mah",
    "subtitle": "Anker Official Hardware • Cleopatra Web Store Oman",
    "brand": "Anker",
    "category": "cables",
    "price": 39.99,
    "originalPrice": 50,
    "rating": 4.8,
    "reviewCount": 12,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/03/Untitled-design-32.png"
    ],
    "stock": 15,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Anker Powerbank A1688 Zolo Powercor",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_121_anker-powerbank-a1688-zolo-pow_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_122_anker-power-bank-a1237h11-2por",
    "title": "Anker Power Bank A1237H11 2port 10000Mah 12w",
    "subtitle": "Anker Official Hardware • Cleopatra Web Store Oman",
    "brand": "Anker",
    "category": "chargers",
    "price": 39.99,
    "originalPrice": 50,
    "rating": 4.8999999999999995,
    "reviewCount": 17,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/03/Untitled-design-31-2.png"
    ],
    "stock": 18,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Anker Power Bank A1237H11 2port 100",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_122_anker-power-bank-a1237h11-2por_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_123_telux-powerbank-pbvx20-voltx20",
    "title": "Telux Powerbank PBVX20 Voltx20 20w Pd 20000mah",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 19.99,
    "originalPrice": 25,
    "rating": 5,
    "reviewCount": 22,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/02/Telux-Powerbank-PBVX20-Voltx20-20w-Pd-20000mah.jpg"
    ],
    "stock": 21,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Telux Powerbank PBVX20 Voltx20 20w ",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_123_telux-powerbank-pbvx20-voltx20_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_124_jbl-cinema-soundbar-with-subwo",
    "title": "Jbl Cinema Soundbar With Subwoofer SB550",
    "subtitle": "JBL Official Hardware • Cleopatra Web Store Oman",
    "brand": "JBL",
    "category": "audio",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 27,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Jbl-Cinema-Soundbar-With-Subwoofer-SB550-.png"
    ],
    "stock": 24,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Jbl Cinema Soundbar With Subwoofer ",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_124_jbl-cinema-soundbar-with-subwo_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_125_jbl-portable-party-speaker-clu",
    "title": "Jbl Portable Party Speaker Club 130",
    "subtitle": "JBL Official Hardware • Cleopatra Web Store Oman",
    "brand": "JBL",
    "category": "audio",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 32,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Jbl-Portable-Party-Speaker-Club-130.png"
    ],
    "stock": 27,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Jbl Portable Party Speaker Club 130",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_125_jbl-portable-party-speaker-clu_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_126_jbl-powered-speaker-eon-712-12",
    "title": "Jbl Powered Speaker Eon 712 12″ 1300w",
    "subtitle": "JBL Official Hardware • Cleopatra Web Store Oman",
    "brand": "JBL",
    "category": "audio",
    "price": 399.99,
    "originalPrice": 500,
    "rating": 5,
    "reviewCount": 37,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Jbl-Powered-Speaker-Eon-712-12-1300w.png"
    ],
    "stock": 30,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Jbl Powered Speaker Eon 712 12″ 130",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_126_jbl-powered-speaker-eon-712-12_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_127_cleo-ma-tiko-boom-box-3-super-",
    "title": "Cleo-MA Tiko Boom Box 3 Super Bass Speaker",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "audio",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 42,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/Cleo-MA-Tiko-Boom-Box-3-Super-Bass-Speaker-.png"
    ],
    "stock": 33,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Cleo-MA Tiko Boom Box 3 Super Bass ",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_127_cleo-ma-tiko-boom-box-3-super-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_128_cleo-el-multimedia-speaker-ms-",
    "title": "Cleo-EL Multimedia Speaker MS-3629BT-M",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "audio",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 47,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/Microphone-1-1.png"
    ],
    "stock": 36,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Cleo-EL Multimedia Speaker MS-3629B",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_128_cleo-el-multimedia-speaker-ms-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_129_cleo-el-multimedia-speaker-ms-",
    "title": "Cleo-EL Multimedia Speaker MS-3628BT",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "audio",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 52,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/Microphone-8.png"
    ],
    "stock": 39,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Cleo-EL Multimedia Speaker MS-3628B",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_129_cleo-el-multimedia-speaker-ms-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_130_cleo-el-multimedia-speaker-ms-",
    "title": "Cleo-EL Multimedia Speaker MS-2039BT",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "audio",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 57,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/Microphone-5.png"
    ],
    "stock": 42,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Cleo-EL Multimedia Speaker MS-2039B",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_130_cleo-el-multimedia-speaker-ms-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_131_cleo-el-multimedia-speaker-ms-",
    "title": "Cleo-EL Multimedia Speaker MS-3630BT",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "audio",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 62,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/Microphone-4.png"
    ],
    "stock": 45,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Cleo-EL Multimedia Speaker MS-3630B",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_131_cleo-el-multimedia-speaker-ms-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_132_cleo-el-multimedia-speaker-ms-",
    "title": "Cleo-EL Multimedia Speaker MS-3632BT",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "audio",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 67,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/06/Microphone-3.png"
    ],
    "stock": 48,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Cleo-EL Multimedia Speaker MS-3632B",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_132_cleo-el-multimedia-speaker-ms-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_133_xtrike-me-wired-gaming-speaker",
    "title": "Xtrike Me Wired Gaming Speaker SK-201",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "audio",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8,
    "reviewCount": 72,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/05/Untitled-design-72.png"
    ],
    "stock": 51,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Xtrike Me Wired Gaming Speaker SK-2",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_133_xtrike-me-wired-gaming-speaker_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_134_telux-bluetooth-speaker-auhb5-",
    "title": "Telux Bluetooth Speaker AUHB5-SP Hibass 5w Waterproof",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "audio",
    "price": 39.99,
    "originalPrice": 50,
    "rating": 4.8999999999999995,
    "reviewCount": 77,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/03/Untitled-design-29-1.png"
    ],
    "stock": 54,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Telux Bluetooth Speaker AUHB5-SP Hi",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_134_telux-bluetooth-speaker-auhb5-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_135_telux-bluetooth-speaker-auhb15",
    "title": "Telux Bluetooth Speaker AUHB15-SP Hibass 15w Waterproof",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "audio",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 5,
    "reviewCount": 82,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/03/Untitled-design-35.png"
    ],
    "stock": 17,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Telux Bluetooth Speaker AUHB15-SP H",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_135_telux-bluetooth-speaker-auhb15_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_136_anker-bluetooth-speaker-a31a30",
    "title": "Anker Bluetooth Speaker A31A3012 Rave 3s Karaoke Party Dual Mic",
    "subtitle": "Anker Official Hardware • Cleopatra Web Store Oman",
    "brand": "Anker",
    "category": "audio",
    "price": 179.99,
    "originalPrice": 225,
    "rating": 4.8,
    "reviewCount": 87,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/03/Untitled-design-2-1.png"
    ],
    "stock": 20,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Anker Bluetooth Speaker A31A3012 Ra",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_136_anker-bluetooth-speaker-a31a30_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_137_jbl-portable-bluetooth-party-b",
    "title": "Jbl Portable Bluetooth Party Box Speakers 720",
    "subtitle": "JBL Official Hardware • Cleopatra Web Store Oman",
    "brand": "JBL",
    "category": "audio",
    "price": 499.99,
    "originalPrice": 625,
    "rating": 4.8999999999999995,
    "reviewCount": 92,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2025/12/LS_JBL_PARTYBOX_720_HERO_0041_x2.webp"
    ],
    "stock": 23,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Jbl Portable Bluetooth Party Box Sp",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_137_jbl-portable-bluetooth-party-b_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_138_jbl-partybox-on-the-go-2-porta",
    "title": "Jbl PartyBox On The Go 2 Portable Speaker With Mic",
    "subtitle": "JBL Official Hardware • Cleopatra Web Store Oman",
    "brand": "JBL",
    "category": "audio",
    "price": 499.99,
    "originalPrice": 625,
    "rating": 5,
    "reviewCount": 97,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2025/11/618nde5NJ2L._AC_SL1280_.jpg"
    ],
    "stock": 26,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Jbl PartyBox On The Go 2 Portable S",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_138_jbl-partybox-on-the-go-2-porta_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_139_behringer-active-monitor-speak",
    "title": "Behringer Active Monitor Speaker Pk110A 350w Built in Player",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "audio",
    "price": 179.99,
    "originalPrice": 225,
    "rating": 4.8,
    "reviewCount": 102,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2025/10/Image_BE_0313-AHH_PK110A_Front_XL-1.png"
    ],
    "stock": 29,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Behringer Active Monitor Speaker Pk",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_139_behringer-active-monitor-speak_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_140_behringer-studio-monitor-truth",
    "title": "Behringer Studio Monitor Truth 3.5″ Bt Pair",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "wearables",
    "price": 179.99,
    "originalPrice": 225,
    "rating": 4.8999999999999995,
    "reviewCount": 107,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2025/10/Image_BE_0316-ABV_TRUTH-3.5-BT_Front_XL-1.png"
    ],
    "stock": 32,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Behringer Studio Monitor Truth 3.5″",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_140_behringer-studio-monitor-truth_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_141_behringer-studio-monitor-truth",
    "title": "Behringer Studio Monitor Truth 4.5″ Bt Pairs",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "wearables",
    "price": 179.99,
    "originalPrice": 225,
    "rating": 5,
    "reviewCount": 112,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2025/10/Image_BE_0316-ABW_TRUTH-4.5-BT_Left_XL.png"
    ],
    "stock": 35,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Behringer Studio Monitor Truth 4.5″",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_141_behringer-studio-monitor-truth_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_142_hp-multimedia-speaker-dhs-2111",
    "title": "Hp Multimedia Speaker Dhs 2111",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "audio",
    "price": 19.99,
    "originalPrice": 25,
    "rating": 4.8,
    "reviewCount": 117,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2025/08/Hp-Multimedia-Speaker-Dhs-2111-1.jpg"
    ],
    "stock": 38,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Hp Multimedia Speaker Dhs 2111",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_142_hp-multimedia-speaker-dhs-2111_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_143_hp-multimedia-speaker-dhe6001",
    "title": "Hp Multimedia Speaker Dhe6001",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "audio",
    "price": 39.99,
    "originalPrice": 50,
    "rating": 4.8999999999999995,
    "reviewCount": 122,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2025/08/Hp-Multimedia-Speaker-Dhe6001-1.jpg"
    ],
    "stock": 41,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Hp Multimedia Speaker Dhe6001",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_143_hp-multimedia-speaker-dhe6001_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_144_jbl-portable-bluetooth-party-s",
    "title": "Jbl Portable Bluetooth Party Speakers 520",
    "subtitle": "JBL Official Hardware • Cleopatra Web Store Oman",
    "brand": "JBL",
    "category": "audio",
    "price": 499.99,
    "originalPrice": 625,
    "rating": 5,
    "reviewCount": 127,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2025/06/Untitled-design-9.png"
    ],
    "stock": 44,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Jbl Portable Bluetooth Party Speake",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_144_jbl-portable-bluetooth-party-s_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_145_jbl-partybox-speaker-stage-320",
    "title": "Jbl PartyBox Speaker Stage 320 Black",
    "subtitle": "JBL Official Hardware • Cleopatra Web Store Oman",
    "brand": "JBL",
    "category": "audio",
    "price": 499.99,
    "originalPrice": 625,
    "rating": 4.8,
    "reviewCount": 132,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2025/06/jbl-320-33.png"
    ],
    "stock": 47,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Jbl PartyBox Speaker Stage 320 Blac",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_145_jbl-partybox-speaker-stage-320_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_146_cpt-vintage-speaker-lk09",
    "title": "Cpt Vintage Speaker lk09",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "audio",
    "price": 49.99,
    "originalPrice": 62,
    "rating": 4.8999999999999995,
    "reviewCount": 137,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2025/05/vintage-02.jpg"
    ],
    "stock": 50,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Cpt Vintage Speaker lk09",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_146_cpt-vintage-speaker-lk09_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_147_alhaan-speaker-sws-30w-2-way10",
    "title": "Alhaan Speaker Sws 30w 2 way100v/8",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "audio",
    "price": 89.99,
    "originalPrice": 112,
    "rating": 5,
    "reviewCount": 142,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2025/05/Untitled-design-2025-05-07T190238.083.png"
    ],
    "stock": 53,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Alhaan Speaker Sws 30w 2 way100v/8",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_147_alhaan-speaker-sws-30w-2-way10_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_148_ahuja-csd6303t-speaker",
    "title": "Ahuja Csd6303t Speaker",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "audio",
    "price": 89.99,
    "originalPrice": 112,
    "rating": 4.8,
    "reviewCount": 147,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2025/05/Untitled-design-2025-05-03T180158.623.png"
    ],
    "stock": 16,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Ahuja Csd6303t Speaker",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_148_ahuja-csd6303t-speaker_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_149_yamaha-stagepas-400-bt",
    "title": "Yamaha Stagepas 400 Bt",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "accessories",
    "price": 899.99,
    "originalPrice": 1125,
    "rating": 4.8999999999999995,
    "reviewCount": 152,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2025/04/Untitled-design-2025-04-27T182829.605.png"
    ],
    "stock": 19,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Yamaha Stagepas 400 Bt",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_149_yamaha-stagepas-400-bt_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_150_alto-ts-408-speaker",
    "title": "Alto Ts 408 Speaker",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "audio",
    "price": 179.99,
    "originalPrice": 225,
    "rating": 5,
    "reviewCount": 157,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2025/04/Untitled-design-2025-04-27T181236.516.png"
    ],
    "stock": 22,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Alto Ts 408 Speaker",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_150_alto-ts-408-speaker_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_151_alto-ts-410-speaker",
    "title": "Alto Ts 410 Speaker",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "audio",
    "price": 499.99,
    "originalPrice": 625,
    "rating": 4.8,
    "reviewCount": 12,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2025/04/Untitled-design-2025-04-27T180714.975.png"
    ],
    "stock": 25,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Alto Ts 410 Speaker",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_151_alto-ts-410-speaker_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_152_borl-bo-0815usb-15-portable-sp",
    "title": "Borl Bo 0815usb 15″ Portable Speaker 500w/800w",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "audio",
    "price": 179.99,
    "originalPrice": 225,
    "rating": 4.8999999999999995,
    "reviewCount": 17,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2024/10/products-untitled_design_-_2024-10-13t193356.485.png"
    ],
    "stock": 28,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Borl Bo 0815usb 15″ Portable Speake",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_152_borl-bo-0815usb-15-portable-sp_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_153_redmi-m2523-smart-watch-6-silv",
    "title": "Redmi M2523 Smart Watch 6 Silver Gray",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "mobiles",
    "price": 249.99,
    "originalPrice": 312,
    "rating": 5,
    "reviewCount": 22,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/08/Redmi-M2523-Smart-Watch-6-Silver-Gray-.png"
    ],
    "stock": 31,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Redmi M2523 Smart Watch 6 Silver Gr",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_153_redmi-m2523-smart-watch-6-silv_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_154_cleo-ma-smart-watch-y99-series",
    "title": "Cleo-MA Smart Watch Y99 Series 9 45mm",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "wearables",
    "price": 249.99,
    "originalPrice": 312,
    "rating": 4.8,
    "reviewCount": 27,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Cleo-MA-Smart-Watch-Y99-Series-9-45mm-.png"
    ],
    "stock": 34,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Cleo-MA Smart Watch Y99 Series 9 45",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_154_cleo-ma-smart-watch-y99-series_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_155_cleo-ma-smart-watch-yh-1000-ul",
    "title": "Cleo-MA Smart Watch YH-1000 Ultra 2 in 1",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "wearables",
    "price": 249.99,
    "originalPrice": 312,
    "rating": 4.8999999999999995,
    "reviewCount": 32,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Cleo-MA-Smart-Watch-YH-1000-Ultra-2-in-1.png"
    ],
    "stock": 37,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Cleo-MA Smart Watch YH-1000 Ultra 2",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_155_cleo-ma-smart-watch-yh-1000-ul_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_156_cleo-ma-smart-watch-y90-ultra-",
    "title": "Cleo-MA Smart Watch Y90 Ultra 3 3 Straps",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "wearables",
    "price": 249.99,
    "originalPrice": 312,
    "rating": 5,
    "reviewCount": 37,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Cleo-MA-Smart-Watch-Y90-Ultra-3-3-Straps-.png"
    ],
    "stock": 40,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Cleo-MA Smart Watch Y90 Ultra 3 3 S",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_156_cleo-ma-smart-watch-y90-ultra-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_157_cleo-ma-smart-watch-yh88-ultra",
    "title": "Cleo-MA Smart Watch YH88 Ultra 3 3+1 Strap",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "wearables",
    "price": 249.99,
    "originalPrice": 312,
    "rating": 4.8,
    "reviewCount": 42,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Cleo-MA-Smart-Watch-YH88-Ultra-3-31-Strap.png"
    ],
    "stock": 43,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Cleo-MA Smart Watch YH88 Ultra 3 3+",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_157_cleo-ma-smart-watch-yh88-ultra_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_158_amazfit-t-rex-3-pro-44mm-smart",
    "title": "Amazfit T-Rex 3 Pro 44mm Smart Watch Tactical Black",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "wearables",
    "price": 249.99,
    "originalPrice": 312,
    "rating": 4.8999999999999995,
    "reviewCount": 47,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Amazfit-T-Rex-3-Pro-44mm-Smart-Watch-Tactical-Black-.png"
    ],
    "stock": 46,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Amazfit T-Rex 3 Pro 44mm Smart Watc",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_158_amazfit-t-rex-3-pro-44mm-smart_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_159_keqiwear-smart-watch-kw102-ult",
    "title": "Keqiwear Smart Watch KW102 Ultra 3",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "wearables",
    "price": 19.99,
    "originalPrice": 25,
    "rating": 5,
    "reviewCount": 52,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Keqiwear-Smart-Watch-KW102-Ultra-3-.png"
    ],
    "stock": 49,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Keqiwear Smart Watch KW102 Ultra 3",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_159_keqiwear-smart-watch-kw102-ult_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_160_keqiwear-smart-watch-kw81-max-",
    "title": "Keqiwear Smart Watch KW81 Max Series11",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "wearables",
    "price": 19.99,
    "originalPrice": 25,
    "rating": 4.8,
    "reviewCount": 57,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Keqiwear-Smart-Watch-KW81-Max-Series11-.png"
    ],
    "stock": 52,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Keqiwear Smart Watch KW81 Max Serie",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_160_keqiwear-smart-watch-kw81-max-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_161_keqiwear-smart-watch-kw23-ultr",
    "title": "Keqiwear Smart Watch KW23 Ultra 3 ( 3+ 1 )",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "wearables",
    "price": 19.99,
    "originalPrice": 25,
    "rating": 4.8999999999999995,
    "reviewCount": 62,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Keqiwear-Smart-Watch-KW23-Ultra-3-3-1-.png"
    ],
    "stock": 15,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Keqiwear Smart Watch KW23 Ultra 3 (",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_161_keqiwear-smart-watch-kw23-ultr_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_162_jsyes-smart-watch-ms9-mini-lad",
    "title": "Jsyes Smart Watch MS9 Mini Ladies Pink 3 Straps",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "wearables",
    "price": 19.99,
    "originalPrice": 25,
    "rating": 5,
    "reviewCount": 67,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Jsyes-Smart-Watch-MS9-Mini-Ladies-Pink-3-Straps-.png"
    ],
    "stock": 18,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Jsyes Smart Watch MS9 Mini Ladies P",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_162_jsyes-smart-watch-ms9-mini-lad_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_163_jsyes-smart-watch-m75-max-with",
    "title": "Jsyes Smart Watch M75 Max With 6 Straps",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "wearables",
    "price": 249.99,
    "originalPrice": 312,
    "rating": 4.8,
    "reviewCount": 72,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Jsyes-Smart-Watch-M75-Max-With-6-Straps.jpg"
    ],
    "stock": 21,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Jsyes Smart Watch M75 Max With 6 St",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_163_jsyes-smart-watch-m75-max-with_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_164_jsyes-smart-watch-ms8-mini-wit",
    "title": "Jsyes Smart Watch MS8 Mini With 3 Strap and 2 Wearables",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "wearables",
    "price": 249.99,
    "originalPrice": 312,
    "rating": 4.8999999999999995,
    "reviewCount": 77,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Jsyes-Smart-Watch-Ms8-Mini-With-3-Strap-And-2-Wearables-1.jpg"
    ],
    "stock": 24,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Jsyes Smart Watch MS8 Mini With 3 S",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_164_jsyes-smart-watch-ms8-mini-wit_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_165_jsyes-smart-watch-m59-pro-max-",
    "title": "Jsyes Smart Watch M59 Pro Max With 7 Straps",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "mobiles",
    "price": 249.99,
    "originalPrice": 312,
    "rating": 5,
    "reviewCount": 82,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/07/Jsyes-Smart-Watch-M59-Pro-Max-With-7-Straps.jpg"
    ],
    "stock": 27,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Jsyes Smart Watch M59 Pro Max With ",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_165_jsyes-smart-watch-m59-pro-max-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_166_huawei-watch-fit-5-pro-gps-46m",
    "title": "Huawei Watch Fit 5 Pro Gps 46mm",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "wearables",
    "price": 179.99,
    "originalPrice": 225,
    "rating": 4.8,
    "reviewCount": 87,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/05/huawei-watch-fit-5-pro-1.webp"
    ],
    "stock": 30,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Huawei Watch Fit 5 Pro Gps 46mm",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_166_huawei-watch-fit-5-pro-gps-46m_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_168_cleo-ma-smart-bracelet-band-li",
    "title": "Cleo-MA Smart Bracelet Band Life Sensor 838",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "wearables",
    "price": 39.99,
    "originalPrice": 50,
    "rating": 5,
    "reviewCount": 97,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/03/Cleo-MA-Smart-Bracelet-Band-Life-Sensor-838.jpg"
    ],
    "stock": 36,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Cleo-MA Smart Bracelet Band Life Se",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_168_cleo-ma-smart-bracelet-band-li_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_169_cleo-ma-smart-bracelet-band-li",
    "title": "Cleo-MA Smart Bracelet Band Life Sensor Silm B3",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "wearables",
    "price": 39.99,
    "originalPrice": 50,
    "rating": 4.8,
    "reviewCount": 102,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2026/03/Cleo-MA-Smart-Bracelet-Band-Life-Sensor-Silm-B3.jpg"
    ],
    "stock": 39,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Cleo-MA Smart Bracelet Band Life Se",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_169_cleo-ma-smart-bracelet-band-li_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_170_samsung-galaxy-watch-8-40mm-wi",
    "title": "Samsung Galaxy Watch 8 40mm Wifi GPS",
    "subtitle": "Samsung Official Hardware • Cleopatra Web Store Oman",
    "brand": "Samsung",
    "category": "wearables",
    "price": 179.99,
    "originalPrice": 225,
    "rating": 4.8999999999999995,
    "reviewCount": 107,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2025/11/Samsung-Galaxy-Watch-8-40mm-Gps-Graphite.png"
    ],
    "stock": 42,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Samsung Galaxy Watch 8 40mm Wifi GP",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_170_samsung-galaxy-watch-8-40mm-wi_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_171_huawei-smart-watch-band-10",
    "title": "Huawei Smart Watch Band 10",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "wearables",
    "price": 89.99,
    "originalPrice": 112,
    "rating": 5,
    "reviewCount": 112,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2025/08/S500920751_2.webp"
    ],
    "stock": 45,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Huawei Smart Watch Band 10",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_171_huawei-smart-watch-band-10_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_172_keqiwear-smart-watch-kw30-max-",
    "title": "Keqiwear Smart Watch KW30 Max Series-10 7strap",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "wearables",
    "price": 19.99,
    "originalPrice": 25,
    "rating": 4.8,
    "reviewCount": 117,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2025/07/Keqiwear-Smart-Watch-KW30-Max-Series-10-7strap.jpg"
    ],
    "stock": 48,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Keqiwear Smart Watch KW30 Max Serie",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_172_keqiwear-smart-watch-kw30-max-_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_173_redmi-mi-m2351-watch5-active-s",
    "title": "Redmi MI M2351 Watch5 Active Smart Watch",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "mobiles",
    "price": 39.99,
    "originalPrice": 50,
    "rating": 4.8999999999999995,
    "reviewCount": 122,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2024/10/000000.jpg"
    ],
    "stock": 51,
    "featured": false,
    "flashDeal": true,
    "flashDealDiscount": 20,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "Redmi MI M2351 Watch5 Active Smart ",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_173_redmi-mi-m2351-watch5-active-s_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_174_huawei-kim-b19-smart-band-9",
    "title": "HUAWEI KIM-B19 Smart Band 9",
    "subtitle": "Cleopatra Official Official Hardware • Cleopatra Web Store Oman",
    "brand": "Cleopatra Official",
    "category": "wearables",
    "price": 89.99,
    "originalPrice": 112,
    "rating": 5,
    "reviewCount": 127,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2024/08/products-2_82_3.png"
    ],
    "stock": 54,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "HUAWEI KIM-B19 Smart Band 9",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_174_huawei-kim-b19-smart-band-9_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "cleo_175_xiaomi-mi-m2116w1-s1-active-sm",
    "title": "XIAOMI MI (M2116W1) S1 ACTIVE SMART WATCH",
    "subtitle": "Xiaomi Official Hardware • Cleopatra Web Store Oman",
    "brand": "Xiaomi",
    "category": "mobiles",
    "price": 89.99,
    "originalPrice": 112,
    "rating": 4.8,
    "reviewCount": 132,
    "images": [
      "https://cleopatraweb.com/wp-content/uploads/2023/12/XIAOMI-MI-M2116W1-S1-ACTIVE-SMART-WATCH-.png"
    ],
    "stock": 17,
    "featured": false,
    "flashDeal": false,
    "specs": {
      "Origin": "Cleopatra Web Store Official Import",
      "Model / Series": "XIAOMI MI (M2116W1) S1 ACTIVE SMART",
      "Authenticity": "100% Genuine Certified",
      "Dispatch": "Global Insured Express (15-25 Days)"
    },
    "keyFeatures": [
      "100% Genuine Certified Hardware from Cleopatra Oman",
      "Factory Sealed Direct Packaging & Quality Inspected",
      "Universal Compatibility & High-Efficiency Performance",
      "Worldwide Insured Express Delivery in 15 to 25 Working Days"
    ],
    "compatibility": [
      "Universal USB-C / Lightning / Wireless",
      "iOS / Android / MacOS / Windows"
    ],
    "reviews": [
      {
        "id": "rev_cleo_175_xiaomi-mi-m2116w1-s1-active-sm_1",
        "userName": "Verified Cleopatra Buyer",
        "rating": 5,
        "date": "1 week ago",
        "title": "Authentic & Fast Dispatch",
        "comment": "Received factory sealed in perfect condition. Super high quality hardware.",
        "verified": true,
        "helpfulCount": 8
      }
    ]
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
    'apple-iphone-17-pro-max',
    'apple-airpods-pro-2-usbc',
    'apple-watch-ultra-2'
  ]
};
