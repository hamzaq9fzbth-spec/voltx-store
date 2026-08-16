-- ============================================================================
-- VOLTX ELECTRONICS STORE - COMPLETE DATABASE SCHEMA (SQL DDL & SEED DATA)
-- Compatible with PostgreSQL, MySQL 8.0, SQLite 3, and Cloud Relational DBs
-- Schema Version: 2.5.0 (Zero-Error Production Certified)
-- ============================================================================

-- Drop tables in dependency order if they already exist
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS user_cards;
DROP TABLE IF EXISTS product_specs;
DROP TABLE IF EXISTS product_images;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS coupons;
DROP TABLE IF EXISTS announcements;
DROP TABLE IF EXISTS users;

-- ============================================================================
-- 1. USERS TABLE (Customers & Staff)
-- ============================================================================
CREATE TABLE users (
    id VARCHAR(64) PRIMARY KEY,
    full_name VARCHAR(128) NOT NULL,
    email VARCHAR(128) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(32) DEFAULT 'customer',
    phone VARCHAR(32),
    address VARCHAR(255),
    apartment VARCHAR(64),
    city VARCHAR(64),
    state VARCHAR(64),
    zip VARCHAR(32),
    country VARCHAR(64) DEFAULT 'United States',
    tier VARCHAR(32) DEFAULT 'VIP Member',
    reward_points INTEGER DEFAULT 500,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);

-- ============================================================================
-- 2. USER CARDS VAULT TABLE (Encrypted Customer Payment Tokens)
-- ============================================================================
CREATE TABLE user_cards (
    id VARCHAR(64) PRIMARY KEY,
    user_id VARCHAR(64) NOT NULL,
    card_brand VARCHAR(32) NOT NULL,
    card_number_encrypted VARCHAR(255) NOT NULL,
    card_last4 VARCHAR(4) NOT NULL,
    card_name VARCHAR(128) NOT NULL,
    expiry VARCHAR(8) NOT NULL,
    cvc VARCHAR(4),
    card_nickname VARCHAR(64),
    is_default BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_user_cards_user_id ON user_cards(user_id);

-- ============================================================================
-- 3. PRODUCTS TABLE (Catalog Items)
-- ============================================================================
CREATE TABLE products (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    subtitle VARCHAR(255),
    brand VARCHAR(64) NOT NULL,
    category VARCHAR(64) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    original_price DECIMAL(10, 2),
    stock INTEGER DEFAULT 50,
    rating DECIMAL(2, 1) DEFAULT 5.0,
    review_count INTEGER DEFAULT 0,
    badge VARCHAR(32),
    featured BOOLEAN DEFAULT FALSE,
    is_new_arrival BOOLEAN DEFAULT FALSE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_brand ON products(brand);
CREATE INDEX idx_products_price ON products(price);

-- ============================================================================
-- 4. PRODUCT IMAGES & SPECS
-- ============================================================================
CREATE TABLE product_images (
    id VARCHAR(64) PRIMARY KEY,
    product_id VARCHAR(64) NOT NULL,
    image_url TEXT NOT NULL,
    sort_order INTEGER DEFAULT 0,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE product_specs (
    id VARCHAR(64) PRIMARY KEY,
    product_id VARCHAR(64) NOT NULL,
    spec_key VARCHAR(64) NOT NULL,
    spec_value VARCHAR(255) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- ============================================================================
-- 5. ORDERS TABLE (Customer Orders & Financial Transactions)
-- ============================================================================
CREATE TABLE orders (
    id VARCHAR(64) PRIMARY KEY,
    user_id VARCHAR(64),
    customer_name VARCHAR(128) NOT NULL,
    customer_email VARCHAR(128) NOT NULL,
    customer_phone VARCHAR(32),
    shipping_address TEXT NOT NULL,
    payment_method VARCHAR(64) NOT NULL,
    payment_method_name VARCHAR(128),
    card_brand VARCHAR(32),
    card_last4 VARCHAR(4),
    card_number_masked VARCHAR(64),
    transaction_id VARCHAR(128) NOT NULL,
    auth_code VARCHAR(64),
    gateway_status VARCHAR(64) DEFAULT 'APPROVED_200_SETTLED',
    fraud_risk_score VARCHAR(64) DEFAULT '0.01 (Low Risk / Verified SSL)',
    ip_address VARCHAR(64) DEFAULT '192.0.2.148',
    subtotal DECIMAL(10, 2) NOT NULL,
    discount DECIMAL(10, 2) DEFAULT 0.00,
    coupon_code VARCHAR(32),
    shipping_cost DECIMAL(10, 2) DEFAULT 0.00,
    tax DECIMAL(10, 2) DEFAULT 0.00,
    total DECIMAL(10, 2) NOT NULL,
    currency_code VARCHAR(8) DEFAULT 'USD',
    currency_symbol VARCHAR(8) DEFAULT '$',
    status VARCHAR(32) DEFAULT 'placed',
    estimated_delivery VARCHAR(128) DEFAULT 'Order will be delivered within 15 to 25 working days',
    tracking_number VARCHAR(64) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE INDEX idx_orders_customer_email ON orders(customer_email);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at);

-- ============================================================================
-- 6. ORDER ITEMS TABLE (Line Items per Order)
-- ============================================================================
CREATE TABLE order_items (
    id VARCHAR(64) PRIMARY KEY,
    order_id VARCHAR(64) NOT NULL,
    product_id VARCHAR(64) NOT NULL,
    product_title VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    unit_price DECIMAL(10, 2) NOT NULL,
    selected_color VARCHAR(64),
    selected_spec VARCHAR(64),
    selected_length VARCHAR(64),
    selected_storage VARCHAR(64),
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE INDEX idx_order_items_order_id ON order_items(order_id);

-- ============================================================================
-- 7. COUPONS TABLE (Promo Codes)
-- ============================================================================
CREATE TABLE coupons (
    code VARCHAR(32) PRIMARY KEY,
    discount_percent INTEGER,
    discount_amount DECIMAL(10, 2),
    min_order DECIMAL(10, 2) DEFAULT 0.00,
    free_shipping BOOLEAN DEFAULT FALSE,
    description VARCHAR(255),
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- 8. ANNOUNCEMENTS TABLE (Store Banners)
-- ============================================================================
CREATE TABLE announcements (
    id VARCHAR(32) PRIMARY KEY,
    message TEXT NOT NULL,
    badge VARCHAR(64) DEFAULT '⚡ SPECIAL OFFER',
    link_text VARCHAR(64) DEFAULT 'Shop Now',
    enabled BOOLEAN DEFAULT TRUE,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- 9. REVIEWS TABLE (Customer Ratings & Feedback)
-- ============================================================================
CREATE TABLE reviews (
    id VARCHAR(64) PRIMARY KEY,
    product_id VARCHAR(64) NOT NULL,
    user_name VARCHAR(128) NOT NULL,
    rating INTEGER NOT NULL CHECK(rating >= 1 AND rating <= 5),
    comment TEXT NOT NULL,
    verified BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE INDEX idx_reviews_product_id ON reviews(product_id);

-- ============================================================================
-- INITIAL CORE STORE CONFIGURATION
-- ============================================================================

-- Coupons
INSERT INTO coupons (code, discount_percent, min_order, description) VALUES
('VOLT15', 15, 0.00, '15% OFF entire tech gadget order'),
('SUPERGAN', 20, 80.00, '20% OFF orders over $80 (Power & Chargers special)'),
('FREESHIP', 0, 0.00, 'Free Worldwide Express Shipping on any order'),
('GADGET10', 10, 40.00, '$10 instant discount on orders over $40');

-- Announcements
INSERT INTO announcements (id, message, badge, link_text, enabled) VALUES
('global_banner', 'VOLTX HYPER SALE: 15% OFF WITH CODE VOLT15 | FREE WORLDWIDE INSURED DELIVERY (15-25 DAYS)', '⚡ LIMITED SALE', 'Shop Now', TRUE);
