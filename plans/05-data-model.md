# Data Model - Toreso B2B Marketplace

## Database Schema & Entity Relationships

This document outlines the comprehensive data model for the Toreso platform using PostgreSQL as the primary database.

---

## Database Overview

### Technology Stack
- **Primary Database**: PostgreSQL 15+
- **ORM**: Prisma
- **Cache Layer**: Redis
- **Search Engine**: Elasticsearch
- **File Storage**: AWS S3 / GCP Cloud Storage
- **Blockchain**: Ethereum/Polygon for supply chain data

### Design Principles
- Normalized database design (3NF)
- Optimized for read-heavy operations
- Audit trails for critical data
- Soft deletes for data retention
- UUID for primary keys
- Timestamps on all tables
- JSONB for flexible attributes

---

## Core Entities

### 1. Users & Authentication

#### users
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20) UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL, -- 'buyer', 'supplier', 'admin', 'auditor', 'finance_manager'
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'active', 'suspended', 'deleted'
  email_verified_at TIMESTAMP,
  phone_verified_at TIMESTAMP,
  last_login_at TIMESTAMP,
  login_count INTEGER DEFAULT 0,
  failed_login_attempts INTEGER DEFAULT 0,
  password_reset_token VARCHAR(255),
  password_reset_expires_at TIMESTAMP,
  two_factor_enabled BOOLEAN DEFAULT FALSE,
  two_factor_secret VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_status ON users(status);
```

#### user_sessions
```sql
CREATE TABLE user_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  token VARCHAR(500) UNIQUE NOT NULL,
  refresh_token VARCHAR(500),
  ip_address VARCHAR(45),
  user_agent TEXT,
  device_type VARCHAR(50),
  browser VARCHAR(100),
  os VARCHAR(100),
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_activity_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_user_sessions_user_id ON user_sessions(user_id);
CREATE INDEX idx_user_sessions_token ON user_sessions(token);
```

#### user_profiles
```sql
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  avatar_url TEXT,
  timezone VARCHAR(50) DEFAULT 'Asia/Kolkata',
  language VARCHAR(10) DEFAULT 'en',
  currency VARCHAR(3) DEFAULT 'INR',
  notification_preferences JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### 2. Organizations (Buyers & Suppliers)

#### organizations
```sql
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  type VARCHAR(20) NOT NULL, -- 'buyer', 'supplier'
  legal_name VARCHAR(255) NOT NULL,
  display_name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  logo_url TEXT,
  cover_image_url TEXT,
  website_url TEXT,
  
  -- Registration Details
  registration_number VARCHAR(100),
  gst_number VARCHAR(15) UNIQUE,
  pan_number VARCHAR(10),
  year_established INTEGER,
  employee_count_range VARCHAR(50),
  annual_turnover_range VARCHAR(50),
  
  -- Contact Information
  primary_email VARCHAR(255),
  primary_phone VARCHAR(20),
  support_email VARCHAR(255),
  support_phone VARCHAR(20),
  
  -- Address
  address_line1 VARCHAR(255),
  address_line2 VARCHAR(255),
  city VARCHAR(100),
  state VARCHAR(100),
  country VARCHAR(100) DEFAULT 'India',
  postal_code VARCHAR(20),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  
  -- Status & Verification
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'verified', 'active', 'suspended', 'rejected'
  verified_at TIMESTAMP,
  verified_by UUID REFERENCES users(id),
  rejection_reason TEXT,
  
  -- Metadata
  settings JSONB,
  metadata JSONB,
  search_vector TSVECTOR,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE INDEX idx_organizations_type ON organizations(type);
CREATE INDEX idx_organizations_status ON organizations(status);
CREATE INDEX idx_organizations_gst ON organizations(gst_number);
CREATE INDEX idx_organizations_search ON organizations USING GIN(search_vector);
```

#### buyer_profiles
```sql
CREATE TABLE buyer_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID UNIQUE REFERENCES organizations(id) ON DELETE CASCADE,
  industry VARCHAR(100),
  sub_industry VARCHAR(100),
  monthly_purchase_volume_range VARCHAR(50),
  preferred_payment_terms VARCHAR(100),
  credit_limit DECIMAL(15, 2),
  credit_used DECIMAL(15, 2) DEFAULT 0,
  preferred_suppliers UUID[],
  blocked_suppliers UUID[],
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### supplier_profiles
```sql
CREATE TABLE supplier_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID UNIQUE REFERENCES organizations(id) ON DELETE CASCADE,
  
  -- Business Type
  business_type VARCHAR(50), -- 'manufacturer', 'distributor', 'both'
  
  -- Manufacturing Capabilities
  product_categories TEXT[],
  manufacturing_capacity_per_month INTEGER,
  manufacturing_capacity_unit VARCHAR(50),
  min_order_quantity INTEGER,
  avg_lead_time_days INTEGER,
  
  -- Facilities
  plant_area_sqft INTEGER,
  warehouse_area_sqft INTEGER,
  machinery_count INTEGER,
  workforce_size INTEGER,
  shifts_per_day INTEGER,
  
  -- Certifications
  certifications UUID[],
  
  -- Financial
  bank_name VARCHAR(255),
  bank_account_number VARCHAR(100),
  bank_ifsc_code VARCHAR(20),
  bank_account_holder_name VARCHAR(255),
  bank_branch VARCHAR(255),
  
  -- Performance Metrics
  overall_rating DECIMAL(3, 2) DEFAULT 0.00,
  total_orders INTEGER DEFAULT 0,
  completed_orders INTEGER DEFAULT 0,
  cancelled_orders INTEGER DEFAULT 0,
  on_time_delivery_rate DECIMAL(5, 2) DEFAULT 0.00,
  quality_rating DECIMAL(3, 2) DEFAULT 0.00,
  response_time_hours DECIMAL(6, 2) DEFAULT 0.00,
  
  -- Subscription
  subscription_tier VARCHAR(50) DEFAULT 'free', -- 'free', 'professional', 'enterprise'
  subscription_starts_at TIMESTAMP,
  subscription_ends_at TIMESTAMP,
  
  -- Flags
  is_featured BOOLEAN DEFAULT FALSE,
  is_verified_seller BOOLEAN DEFAULT FALSE,
  is_top_rated BOOLEAN DEFAULT FALSE,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_supplier_profiles_rating ON supplier_profiles(overall_rating DESC);
CREATE INDEX idx_supplier_profiles_tier ON supplier_profiles(subscription_tier);
```

---

### 3. Team Members & Permissions

#### team_members
```sql
CREATE TABLE team_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  role VARCHAR(50) NOT NULL, -- 'admin', 'manager', 'member', 'viewer', 'finance'
  department VARCHAR(100),
  job_title VARCHAR(100),
  permissions JSONB,
  invited_by UUID REFERENCES users(id),
  invitation_token VARCHAR(255),
  invitation_expires_at TIMESTAMP,
  accepted_at TIMESTAMP,
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'active', 'suspended'
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  UNIQUE(organization_id, user_id)
);

CREATE INDEX idx_team_members_org ON team_members(organization_id);
CREATE INDEX idx_team_members_user ON team_members(user_id);
```

---

### 4. Products & Catalog

#### categories
```sql
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  parent_id UUID REFERENCES categories(id),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  image_url TEXT,
  icon_url TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  metadata JSONB,
  seo_title VARCHAR(255),
  seo_description TEXT,
  seo_keywords TEXT,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_categories_parent ON categories(parent_id);
CREATE INDEX idx_categories_slug ON categories(slug);
```

#### products
```sql
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  supplier_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id),
  
  -- Basic Information
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL,
  sku VARCHAR(100) UNIQUE,
  short_description TEXT,
  description TEXT,
  
  -- Specifications
  specifications JSONB,
  material_type VARCHAR(100),
  dimensions_json JSONB, -- {length, width, height, unit}
  weight DECIMAL(10, 3),
  weight_unit VARCHAR(20),
  color VARCHAR(100),
  finish VARCHAR(100),
  grade VARCHAR(100),
  
  -- Pricing
  base_price DECIMAL(15, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'INR',
  price_unit VARCHAR(50), -- 'piece', 'kg', 'meter', etc.
  min_order_quantity INTEGER DEFAULT 1,
  max_order_quantity INTEGER,
  
  -- Volume Pricing (JSONB array of {min_qty, max_qty, price})
  volume_pricing JSONB,
  
  -- Inventory
  stock_quantity INTEGER DEFAULT 0,
  low_stock_threshold INTEGER DEFAULT 10,
  track_inventory BOOLEAN DEFAULT TRUE,
  stock_status VARCHAR(50) DEFAULT 'in_stock', -- 'in_stock', 'low_stock', 'out_of_stock', 'discontinued'
  
  -- Lead Time & Delivery
  lead_time_days INTEGER,
  shipping_dimensions_json JSONB,
  shipping_weight DECIMAL(10, 3),
  
  -- Media
  primary_image_url TEXT,
  images JSONB, -- Array of image URLs
  video_url TEXT,
  ar_model_url TEXT,
  technical_docs JSONB, -- Array of document URLs
  
  -- Certifications
  certifications UUID[],
  certification_numbers JSONB,
  
  -- Sustainability
  is_recyclable BOOLEAN DEFAULT FALSE,
  recycled_content_percentage INTEGER,
  is_biodegradable BOOLEAN DEFAULT FALSE,
  carbon_footprint_kg DECIMAL(10, 3),
  sustainability_certifications TEXT[],
  
  -- SEO
  seo_title VARCHAR(255),
  seo_description TEXT,
  seo_keywords TEXT,
  
  -- Status & Visibility
  status VARCHAR(50) DEFAULT 'draft', -- 'draft', 'pending_approval', 'active', 'inactive', 'rejected'
  visibility VARCHAR(50) DEFAULT 'public', -- 'public', 'private', 'catalog_only'
  is_featured BOOLEAN DEFAULT FALSE,
  featured_until TIMESTAMP,
  
  -- Analytics
  view_count INTEGER DEFAULT 0,
  inquiry_count INTEGER DEFAULT 0,
  order_count INTEGER DEFAULT 0,
  
  -- Metadata
  tags TEXT[],
  metadata JSONB,
  search_vector TSVECTOR,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP,
  
  UNIQUE(supplier_id, slug)
);

CREATE INDEX idx_products_supplier ON products(supplier_id);
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_status ON products(status);
CREATE INDEX idx_products_sku ON products(sku);
CREATE INDEX idx_products_search ON products USING GIN(search_vector);
CREATE INDEX idx_products_price ON products(base_price);
```

#### product_reviews
```sql
CREATE TABLE product_reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  order_id UUID REFERENCES orders(id),
  buyer_id UUID REFERENCES organizations(id),
  user_id UUID REFERENCES users(id),
  
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title VARCHAR(255),
  review_text TEXT,
  images JSONB,
  
  -- Category Ratings
  quality_rating INTEGER CHECK (quality_rating >= 1 AND quality_rating <= 5),
  delivery_rating INTEGER CHECK (delivery_rating >= 1 AND delivery_rating <= 5),
  packaging_rating INTEGER CHECK (packaging_rating >= 1 AND packaging_rating <= 5),
  value_rating INTEGER CHECK (value_rating >= 1 AND value_rating <= 5),
  
  is_verified_purchase BOOLEAN DEFAULT FALSE,
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'approved', 'rejected'
  
  helpful_count INTEGER DEFAULT 0,
  not_helpful_count INTEGER DEFAULT 0,
  
  supplier_response TEXT,
  supplier_responded_at TIMESTAMP,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_product_reviews_product ON product_reviews(product_id);
CREATE INDEX idx_product_reviews_buyer ON product_reviews(buyer_id);
```

---

### 5. Plants & Warehouses

#### plants
```sql
CREATE TABLE plants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  buyer_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  
  name VARCHAR(255) NOT NULL,
  code VARCHAR(50),
  type VARCHAR(50), -- 'manufacturing', 'warehouse', 'office'
  
  -- Contact
  contact_person VARCHAR(255),
  contact_email VARCHAR(255),
  contact_phone VARCHAR(20),
  
  -- Address
  address_line1 VARCHAR(255),
  address_line2 VARCHAR(255),
  city VARCHAR(100),
  state VARCHAR(100),
  country VARCHAR(100) DEFAULT 'India',
  postal_code VARCHAR(20),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  
  -- Operational Details
  operating_hours JSONB,
  is_primary BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  
  -- JIT Settings
  jit_enabled BOOLEAN DEFAULT FALSE,
  preferred_warehouse_id UUID,
  
  metadata JSONB,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_plants_buyer ON plants(buyer_id);
```

#### warehouses
```sql
CREATE TABLE warehouses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  supplier_id UUID REFERENCES organizations(id),
  
  name VARCHAR(255) NOT NULL,
  code VARCHAR(50),
  type VARCHAR(50), -- 'own', 'third_party', 'jit'
  
  -- Address
  address_line1 VARCHAR(255),
  address_line2 VARCHAR(255),
  city VARCHAR(100),
  state VARCHAR(100),
  country VARCHAR(100) DEFAULT 'India',
  postal_code VARCHAR(20),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  
  -- Capacity
  total_capacity_sqft INTEGER,
  used_capacity_sqft INTEGER DEFAULT 0,
  
  -- Operational
  contact_person VARCHAR(255),
  contact_phone VARCHAR(20),
  operating_hours JSONB,
  is_active BOOLEAN DEFAULT TRUE,
  
  -- JIT Configuration
  serves_plants UUID[], -- Array of plant IDs
  
  metadata JSONB,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_warehouses_supplier ON warehouses(supplier_id);
```

#### inventory
```sql
CREATE TABLE inventory (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  warehouse_id UUID REFERENCES warehouses(id),
  
  quantity INTEGER DEFAULT 0,
  reserved_quantity INTEGER DEFAULT 0,
  available_quantity INTEGER GENERATED ALWAYS AS (quantity - reserved_quantity) STORED,
  
  reorder_point INTEGER,
  reorder_quantity INTEGER,
  
  last_restocked_at TIMESTAMP,
  last_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  UNIQUE(product_id, warehouse_id)
);

CREATE INDEX idx_inventory_product ON inventory(product_id);
CREATE INDEX idx_inventory_warehouse ON inventory(warehouse_id);
```

---

### 6. RFQs & RFIs

#### rfqs
```sql
CREATE TABLE rfqs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  buyer_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  created_by UUID REFERENCES users(id),
  
  rfq_number VARCHAR(50) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  type VARCHAR(20) DEFAULT 'rfq', -- 'rfq', 'rfi'
  
  -- Product Details
  category_id UUID REFERENCES categories(id),
  product_description TEXT NOT NULL,
  specifications JSONB,
  technical_documents JSONB,
  
  -- Quantity & Delivery
  quantity INTEGER NOT NULL,
  unit_of_measurement VARCHAR(50),
  delivery_plant_id UUID REFERENCES plants(id),
  expected_delivery_date DATE,
  urgency VARCHAR(50), -- 'low', 'medium', 'high', 'urgent'
  
  -- Budget & Terms
  budget_min DECIMAL(15, 2),
  budget_max DECIMAL(15, 2),
  payment_terms TEXT,
  contract_duration_months INTEGER,
  
  -- Requirements
  quality_requirements TEXT,
  certifications_required TEXT[],
  packaging_requirements TEXT,
  special_requirements TEXT,
  
  -- Supplier Selection
  supplier_selection_type VARCHAR(50), -- 'broadcast', 'selected'
  selected_suppliers UUID[],
  
  -- Timeline
  response_deadline TIMESTAMP NOT NULL,
  published_at TIMESTAMP,
  closed_at TIMESTAMP,
  awarded_at TIMESTAMP,
  
  -- Status
  status VARCHAR(50) DEFAULT 'draft', -- 'draft', 'published', 'closed', 'awarded', 'cancelled'
  
  -- Winner
  winning_quote_id UUID,
  
  -- Template
  is_template BOOLEAN DEFAULT FALSE,
  template_name VARCHAR(255),
  
  metadata JSONB,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_rfqs_buyer ON rfqs(buyer_id);
CREATE INDEX idx_rfqs_status ON rfqs(status);
CREATE INDEX idx_rfqs_deadline ON rfqs(response_deadline);
```

#### rfq_quotes
```sql
CREATE TABLE rfq_quotes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  rfq_id UUID REFERENCES rfqs(id) ON DELETE CASCADE,
  supplier_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  submitted_by UUID REFERENCES users(id),
  
  quote_number VARCHAR(50) UNIQUE NOT NULL,
  
  -- Pricing
  unit_price DECIMAL(15, 2) NOT NULL,
  total_price DECIMAL(15, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'INR',
  
  -- Terms
  lead_time_days INTEGER NOT NULL,
  delivery_terms TEXT,
  payment_terms TEXT,
  validity_days INTEGER DEFAULT 30,
  valid_until TIMESTAMP,
  
  -- Specifications
  specifications_compliance TEXT,
  proposed_specifications JSONB,
  deviations TEXT,
  
  -- Documents
  documents JSONB,
  certifications_included TEXT[],
  
  -- Additional
  notes TEXT,
  terms_and_conditions TEXT,
  
  -- Status
  status VARCHAR(50) DEFAULT 'submitted', -- 'submitted', 'shortlisted', 'accepted', 'rejected', 'withdrawn'
  viewed_by_buyer_at TIMESTAMP,
  
  -- Negotiation
  negotiation_rounds INTEGER DEFAULT 0,
  is_negotiable BOOLEAN DEFAULT TRUE,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_rfq_quotes_rfq ON rfq_quotes(rfq_id);
CREATE INDEX idx_rfq_quotes_supplier ON rfq_quotes(supplier_id);
```

---

### 7. Orders & Transactions

#### orders
```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_number VARCHAR(50) UNIQUE NOT NULL,
  
  -- Parties
  buyer_id UUID REFERENCES organizations(id),
  supplier_id UUID REFERENCES organizations(id),
  buyer_user_id UUID REFERENCES users(id),
  
  -- Order Source
  source VARCHAR(50), -- 'direct', 'rfq', 'cart', 'reorder'
  source_reference_id UUID, -- RFQ ID, Previous Order ID, etc.
  
  -- Delivery
  plant_id UUID REFERENCES plants(id),
  delivery_address JSONB,
  delivery_contact JSONB,
  requested_delivery_date DATE,
  actual_delivery_date DATE,
  
  -- Financial
  subtotal DECIMAL(15, 2) NOT NULL,
  tax_amount DECIMAL(15, 2) DEFAULT 0,
  discount_amount DECIMAL(15, 2) DEFAULT 0,
  shipping_amount DECIMAL(15, 2) DEFAULT 0,
  total_amount DECIMAL(15, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'INR',
  
  -- Payment
  payment_method VARCHAR(50), -- 'credit_terms', 'online', 'bank_transfer', 'cod'
  payment_terms VARCHAR(100),
  payment_status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'partial', 'paid', 'failed', 'refunded'
  paid_amount DECIMAL(15, 2) DEFAULT 0,
  
  -- Order Status
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'returned'
  
  -- Timestamps
  confirmed_at TIMESTAMP,
  processing_at TIMESTAMP,
  shipped_at TIMESTAMP,
  delivered_at TIMESTAMP,
  cancelled_at TIMESTAMP,
  
  -- Additional
  special_instructions TEXT,
  internal_notes TEXT,
  cancellation_reason TEXT,
  
  -- Blockchain
  blockchain_tx_hash VARCHAR(255),
  blockchain_verified BOOLEAN DEFAULT FALSE,
  
  metadata JSONB,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_orders_buyer ON orders(buyer_id);
CREATE INDEX idx_orders_supplier ON orders(supplier_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_order_number ON orders(order_number);
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);
```

#### order_items
```sql
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  
  -- Product Snapshot (at time of order)
  product_name VARCHAR(255) NOT NULL,
  product_sku VARCHAR(100),
  product_specifications JSONB,
  product_image_url TEXT,
  
  -- Quantity & Pricing
  quantity INTEGER NOT NULL,
  unit_price DECIMAL(15, 2) NOT NULL,
  subtotal DECIMAL(15, 2) NOT NULL,
  tax_amount DECIMAL(15, 2) DEFAULT 0,
  discount_amount DECIMAL(15, 2) DEFAULT 0,
  total_amount DECIMAL(15, 2) NOT NULL,
  
  -- Delivery
  delivered_quantity INTEGER DEFAULT 0,
  
  -- Status
  status VARCHAR(50) DEFAULT 'pending',
  
  notes TEXT,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_order_items_order ON order_items(order_id);
CREATE INDEX idx_order_items_product ON order_items(product_id);
```

#### order_status_history
```sql
CREATE TABLE order_status_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  status VARCHAR(50) NOT NULL,
  notes TEXT,
  changed_by UUID REFERENCES users(id),
  metadata JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_order_status_history_order ON order_status_history(order_id);
```

---

### 8. Shopping Cart

#### cart_items
```sql
CREATE TABLE cart_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  buyer_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  
  quantity INTEGER NOT NULL DEFAULT 1,
  unit_price DECIMAL(15, 2) NOT NULL,
  subtotal DECIMAL(15, 2) NOT NULL,
  
  plant_id UUID REFERENCES plants(id),
  special_requirements TEXT,
  
  added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  UNIQUE(user_id, product_id)
);

CREATE INDEX idx_cart_items_user ON cart_items(user_id);
CREATE INDEX idx_cart_items_buyer ON cart_items(buyer_id);
```

---

### 9. Invoices & Payments

#### invoices
```sql
CREATE TABLE invoices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  invoice_number VARCHAR(50) UNIQUE NOT NULL,
  
  -- Parties
  supplier_id UUID REFERENCES organizations(id),
  buyer_id UUID REFERENCES organizations(id),
  order_id UUID REFERENCES orders(id),
  
  -- Financial
  subtotal DECIMAL(15, 2) NOT NULL,
  tax_amount DECIMAL(15, 2) DEFAULT 0,
  discount_amount DECIMAL(15, 2) DEFAULT 0,
  additional_charges DECIMAL(15, 2) DEFAULT 0,
  total_amount DECIMAL(15, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'INR',
  
  -- Tax Breakdown (GST for India)
  tax_breakdown JSONB, -- {cgst, sgst, igst, etc.}
  
  -- Dates
  invoice_date DATE NOT NULL,
  due_date DATE NOT NULL,
  
  -- Payment
  payment_status VARCHAR(50) DEFAULT 'unpaid', -- 'unpaid', 'partial', 'paid', 'overdue', 'cancelled'
  paid_amount DECIMAL(15, 2) DEFAULT 0,
  payment_date DATE,
  
  -- Invoice Discounting
  is_discounted BOOLEAN DEFAULT FALSE,
  discounting_application_id UUID,
  discounted_amount DECIMAL(15, 2),
  discounted_at TIMESTAMP,
  
  -- Documents
  invoice_pdf_url TEXT,
  
  -- Status
  status VARCHAR(50) DEFAULT 'draft', -- 'draft', 'sent', 'viewed', 'paid', 'cancelled', 'disputed'
  sent_at TIMESTAMP,
  viewed_at TIMESTAMP,
  
  -- Dispute
  is_disputed BOOLEAN DEFAULT FALSE,
  dispute_reason TEXT,
  
  notes TEXT,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_invoices_supplier ON invoices(supplier_id);
CREATE INDEX idx_invoices_buyer ON invoices(buyer_id);
CREATE INDEX idx_invoices_order ON invoices(order_id);
CREATE INDEX idx_invoices_status ON invoices(payment_status);
CREATE INDEX idx_invoices_due_date ON invoices(due_date);
```

#### payments
```sql
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  payment_reference VARCHAR(100) UNIQUE NOT NULL,
  
  -- Parties
  payer_id UUID REFERENCES organizations(id),
  payee_id UUID REFERENCES organizations(id),
  invoice_id UUID REFERENCES invoices(id),
  order_id UUID REFERENCES orders(id),
  
  -- Amount
  amount DECIMAL(15, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'INR',
  
  -- Payment Details
  payment_method VARCHAR(50), -- 'card', 'upi', 'netbanking', 'wallet', 'bank_transfer'
  payment_gateway VARCHAR(50), -- 'razorpay', 'stripe', 'paypal'
  gateway_transaction_id VARCHAR(255),
  gateway_payment_id VARCHAR(255),
  gateway_order_id VARCHAR(255),
  
  -- Status
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'processing', 'success', 'failed', 'refunded'
  
  -- Additional
  payment_date TIMESTAMP,
  failure_reason TEXT,
  refund_amount DECIMAL(15, 2),
  refund_date TIMESTAMP,
  refund_reference VARCHAR(100),
  
  -- Gateway Response
  gateway_response JSONB,
  
  metadata JSONB,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_payments_payer ON payments(payer_id);
CREATE INDEX idx_payments_payee ON payments(payee_id);
CREATE INDEX idx_payments_invoice ON payments(invoice_id);
CREATE INDEX idx_payments_status ON payments(status);
```

---

### 10. Invoice Discounting

#### invoice_discounting_applications
```sql
CREATE TABLE invoice_discounting_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  application_number VARCHAR(50) UNIQUE NOT NULL,
  
  supplier_id UUID REFERENCES organizations(id),
  invoice_id UUID REFERENCES invoices(id),
  
  -- Application Details
  invoice_amount DECIMAL(15, 2) NOT NULL,
  requested_amount DECIMAL(15, 2) NOT NULL,
  discount_rate DECIMAL(5, 2), -- Percentage
  processing_fee DECIMAL(15, 2),
  net_amount DECIMAL(15, 2), -- Amount supplier will receive
  
  -- Terms
  tenure_days INTEGER,
  due_date DATE,
  repayment_amount DECIMAL(15, 2), -- Amount to be repaid
  
  -- Status
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'approved', 'rejected', 'disbursed', 'repaid'
  
  -- Finance Partner
  finance_partner_id UUID,
  finance_partner_name VARCHAR(255),
  
  -- Verification
  buyer_verified BOOLEAN DEFAULT FALSE,
  invoice_verified BOOLEAN DEFAULT FALSE,
  credit_check_passed BOOLEAN DEFAULT FALSE,
  
  -- Approval
  reviewed_by UUID REFERENCES users(id),
  reviewed_at TIMESTAMP,
  approval_notes TEXT,
  rejection_reason TEXT,
  
  -- Disbursement
  disbursed_at TIMESTAMP,
  disbursed_amount DECIMAL(15, 2),
  
  -- Repayment
  repaid_at TIMESTAMP,
  repaid_amount DECIMAL(15, 2),
  
  metadata JSONB,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_discounting_supplier ON invoice_discounting_applications(supplier_id);
CREATE INDEX idx_discounting_invoice ON invoice_discounting_applications(invoice_id);
CREATE INDEX idx_discounting_status ON invoice_discounting_applications(status);
```

---

### 11. Logistics & Shipping

#### shipments
```sql
CREATE TABLE shipments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  shipment_number VARCHAR(50) UNIQUE NOT NULL,
  
  order_id UUID REFERENCES orders(id),
  supplier_id UUID REFERENCES organizations(id),
  buyer_id UUID REFERENCES organizations(id),
  
  -- Logistics Partner
  logistics_partner VARCHAR(255),
  tracking_number VARCHAR(255),
  awb_number VARCHAR(255),
  
  -- Package Details
  package_count INTEGER DEFAULT 1,
  total_weight DECIMAL(10, 3),
  dimensions JSONB,
  
  -- Addresses
  origin_address JSONB,
  destination_address JSONB,
  
  -- Status
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'picked_up', 'in_transit', 'out_for_delivery', 'delivered', 'failed', 'returned'
  
  -- Dates
  shipped_date TIMESTAMP,
  estimated_delivery_date TIMESTAMP,
  actual_delivery_date TIMESTAMP,
  
  -- Tracking
  current_location VARCHAR(255),
  last_update_at TIMESTAMP,
  
  -- Delivery
  delivered_to VARCHAR(255),
  signature_url TEXT,
  proof_of_delivery_url TEXT,
  
  -- Issues
  delivery_attempts INTEGER DEFAULT 0,
  failure_reason TEXT,
  
  -- Blockchain
  blockchain_tx_hash VARCHAR(255),
  blockchain_verified BOOLEAN DEFAULT FALSE,
  
  metadata JSONB,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_shipments_order ON shipments(order_id);
CREATE INDEX idx_shipments_tracking ON shipments(tracking_number);
CREATE INDEX idx_shipments_status ON shipments(status);
```

#### shipment_tracking_history
```sql
CREATE TABLE shipment_tracking_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  shipment_id UUID REFERENCES shipments(id) ON DELETE CASCADE,
  
  status VARCHAR(50) NOT NULL,
  location VARCHAR(255),
  description TEXT,
  timestamp TIMESTAMP NOT NULL,
  
  metadata JSONB,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_tracking_history_shipment ON shipment_tracking_history(shipment_id);
CREATE INDEX idx_tracking_history_timestamp ON shipment_tracking_history(timestamp DESC);
```

---

### 12. Audits & Certifications

#### audits
```sql
CREATE TABLE audits (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  audit_number VARCHAR(50) UNIQUE NOT NULL,
  
  supplier_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  auditor_id UUID REFERENCES users(id),
  
  -- Audit Details
  audit_type VARCHAR(50), -- 'initial', 'renewal', 'surprise', 'buyer_specific', 'follow_up'
  audit_scope TEXT,
  standards TEXT[], -- ['ISO 9001', 'ISO 14001', 'FDA', etc.]
  
  -- Scheduling
  scheduled_date DATE,
  scheduled_time TIME,
  duration_hours INTEGER,
  
  -- Status
  status VARCHAR(50) DEFAULT 'scheduled', -- 'scheduled', 'in_progress', 'completed', 'cancelled'
  
  -- Results
  overall_score DECIMAL(5, 2),
  passed BOOLEAN,
  findings JSONB, -- Array of findings
  non_conformances JSONB, -- Major and minor
  observations TEXT,
  recommendations TEXT,
  
  -- Documents
  checklist_url TEXT,
  report_url TEXT,
  photos JSONB,
  evidence_documents JSONB,
  
  -- Dates
  conducted_date DATE,
  report_submitted_date DATE,
  report_approved_date DATE,
  
  -- Follow-up
  requires_follow_up BOOLEAN DEFAULT FALSE,
  follow_up_date DATE,
  follow_up_audit_id UUID REFERENCES audits(id),
  
  -- Corrective Actions
  corrective_actions JSONB,
  corrective_actions_due_date DATE,
  corrective_actions_completed BOOLEAN DEFAULT FALSE,
  
  notes TEXT,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_audits_supplier ON audits(supplier_id);
CREATE INDEX idx_audits_auditor ON audits(auditor_id);
CREATE INDEX idx_audits_status ON audits(status);
CREATE INDEX idx_audits_scheduled_date ON audits(scheduled_date);
```

#### certifications
```sql
CREATE TABLE certifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  
  -- Certification Details
  certification_type VARCHAR(100) NOT NULL, -- 'ISO 9001', 'ISO 14001', 'FDA', 'BRC', 'HACCP', etc.
  certification_number VARCHAR(100),
  certification_name VARCHAR(255),
  
  -- Issuing Authority
  issuing_authority VARCHAR(255) NOT NULL,
  accreditation_body VARCHAR(255),
  
  -- Dates
  issue_date DATE NOT NULL,
  expiry_date DATE NOT NULL,
  last_renewal_date DATE,
  next_renewal_date DATE,
  
  -- Scope
  scope TEXT,
  covered_products UUID[],
  covered_facilities UUID[],
  
  -- Document
  certificate_url TEXT,
  document_hash VARCHAR(255), -- For verification
  
  -- Verification
  verification_status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'verified', 'rejected', 'expired'
  verified_by UUID REFERENCES users(id),
  verified_at TIMESTAMP,
  verification_notes TEXT,
  
  -- Status
  status VARCHAR(50) DEFAULT 'active', -- 'active', 'expired', 'suspended', 'revoked'
  
  -- Notifications
  expiry_notification_sent BOOLEAN DEFAULT FALSE,
  
  metadata JSONB,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_certifications_org ON certifications(organization_id);
CREATE INDEX idx_certifications_type ON certifications(certification_type);
CREATE INDEX idx_certifications_expiry ON certifications(expiry_date);
CREATE INDEX idx_certifications_status ON certifications(status);
```

---

### 13. Communication & Messaging

#### conversations
```sql
CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Participants
  participant_1_id UUID REFERENCES organizations(id),
  participant_2_id UUID REFERENCES organizations(id),
  
  -- Context
  context_type VARCHAR(50), -- 'general', 'order', 'rfq', 'product', 'support'
  context_id UUID, -- Order ID, RFQ ID, Product ID, etc.
  
  -- Status
  status VARCHAR(50) DEFAULT 'active', -- 'active', 'archived', 'blocked'
  
  -- Last Message
  last_message_at TIMESTAMP,
  last_message_preview TEXT,
  
  -- Unread Counts
  unread_count_p1 INTEGER DEFAULT 0,
  unread_count_p2 INTEGER DEFAULT 0,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  UNIQUE(participant_1_id, participant_2_id, context_type, context_id)
);

CREATE INDEX idx_conversations_p1 ON conversations(participant_1_id);
CREATE INDEX idx_conversations_p2 ON conversations(participant_2_id);
CREATE INDEX idx_conversations_last_message ON conversations(last_message_at DESC);
```

#### messages
```sql
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
  
  sender_id UUID REFERENCES users(id),
  sender_org_id UUID REFERENCES organizations(id),
  
  message_type VARCHAR(50) DEFAULT 'text', -- 'text', 'file', 'image', 'system'
  message_text TEXT,
  
  -- Attachments
  attachments JSONB, -- [{url, name, size, type}]
  
  -- Status
  is_read BOOLEAN DEFAULT FALSE,
  read_at TIMESTAMP,
  
  -- Reply Reference
  reply_to_message_id UUID REFERENCES messages(id),
  
  -- System Message
  is_system_message BOOLEAN DEFAULT FALSE,
  
  metadata JSONB,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_messages_conversation ON messages(conversation_id);
CREATE INDEX idx_messages_sender ON messages(sender_id);
CREATE INDEX idx_messages_created_at ON messages(created_at DESC);
```

---

### 14. Notifications

#### notifications
```sql
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  organization_id UUID REFERENCES organizations(id),
  
  -- Notification Details
  type VARCHAR(50) NOT NULL, -- 'order', 'rfq', 'payment', 'message', 'system', etc.
  category VARCHAR(50), -- 'info', 'success', 'warning', 'error'
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  
  -- Action
  action_url TEXT,
  action_text VARCHAR(100),
  
  -- Context
  context_type VARCHAR(50),
  context_id UUID,
  
  -- Status
  is_read BOOLEAN DEFAULT FALSE,
  read_at TIMESTAMP,
  
  -- Channels
  sent_via_email BOOLEAN DEFAULT FALSE,
  sent_via_sms BOOLEAN DEFAULT FALSE,
  sent_via_push BOOLEAN DEFAULT FALSE,
  
  -- Priority
  priority VARCHAR(20) DEFAULT 'normal', -- 'low', 'normal', 'high', 'urgent'
  
  metadata JSONB,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP
);

CREATE INDEX idx_notifications_user ON notifications(user_id);
CREATE INDEX idx_notifications_org ON notifications(organization_id);
CREATE INDEX idx_notifications_is_read ON notifications(is_read);
CREATE INDEX idx_notifications_created_at ON notifications(created_at DESC);
```

---

### 15. Reviews & Ratings

#### supplier_reviews
```sql
CREATE TABLE supplier_reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  supplier_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  buyer_id UUID REFERENCES organizations(id),
  user_id UUID REFERENCES users(id),
  order_id UUID REFERENCES orders(id),
  
  -- Overall Rating
  overall_rating INTEGER NOT NULL CHECK (overall_rating >= 1 AND overall_rating <= 5),
  
  -- Category Ratings
  product_quality_rating INTEGER CHECK (product_quality_rating >= 1 AND product_quality_rating <= 5),
  delivery_time_rating INTEGER CHECK (delivery_time_rating >= 1 AND delivery_time_rating <= 5),
  communication_rating INTEGER CHECK (communication_rating >= 1 AND communication_rating <= 5),
  packaging_quality_rating INTEGER CHECK (packaging_quality_rating >= 1 AND packaging_quality_rating <= 5),
  value_for_money_rating INTEGER CHECK (value_for_money_rating >= 1 AND value_for_money_rating <= 5),
  
  -- Review
  title VARCHAR(255),
  review_text TEXT,
  
  -- Verification
  is_verified BOOLEAN DEFAULT TRUE,
  
  -- Interaction
  helpful_count INTEGER DEFAULT 0,
  not_helpful_count INTEGER DEFAULT 0,
  
  -- Supplier Response
  supplier_response TEXT,
  supplier_responded_at TIMESTAMP,
  supplier_responded_by UUID REFERENCES users(id),
  
  -- Moderation
  status VARCHAR(50) DEFAULT 'approved', -- 'pending', 'approved', 'rejected'
  moderation_notes TEXT,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_supplier_reviews_supplier ON supplier_reviews(supplier_id);
CREATE INDEX idx_supplier_reviews_buyer ON supplier_reviews(buyer_id);
CREATE INDEX idx_supplier_reviews_order ON supplier_reviews(order_id);
```

---

### 16. Analytics & Reports

#### analytics_events
```sql
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Event Details
  event_name VARCHAR(100) NOT NULL,
  event_category VARCHAR(50),
  event_action VARCHAR(100),
  event_label VARCHAR(255),
  event_value DECIMAL(15, 2),
  
  -- User Context
  user_id UUID REFERENCES users(id),
  organization_id UUID REFERENCES organizations(id),
  session_id UUID,
  
  -- Device & Browser
  ip_address VARCHAR(45),
  user_agent TEXT,
  device_type VARCHAR(50),
  browser VARCHAR(100),
  os VARCHAR(100),
  
  -- Location
  country VARCHAR(100),
  state VARCHAR(100),
  city VARCHAR(100),
  
  -- Page Context
  page_url TEXT,
  page_title VARCHAR(255),
  referrer_url TEXT,
  
  -- UTM Parameters
  utm_source VARCHAR(255),
  utm_medium VARCHAR(255),
  utm_campaign VARCHAR(255),
  utm_term VARCHAR(255),
  utm_content VARCHAR(255),
  
  -- Additional Data
  properties JSONB,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_analytics_events_event_name ON analytics_events(event_name);
CREATE INDEX idx_analytics_events_user ON analytics_events(user_id);
CREATE INDEX idx_analytics_events_org ON analytics_events(organization_id);
CREATE INDEX idx_analytics_events_created_at ON analytics_events(created_at DESC);
```

---

### 17. Documents

#### documents
```sql
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Owner
  owner_type VARCHAR(50), -- 'organization', 'user', 'order', 'rfq', 'audit', etc.
  owner_id UUID,
  
  -- Document Details
  document_type VARCHAR(50), -- 'invoice', 'po', 'certificate', 'audit_report', 'contract', etc.
  document_name VARCHAR(255) NOT NULL,
  file_name VARCHAR(255) NOT NULL,
  file_url TEXT NOT NULL,
  file_size BIGINT,
  mime_type VARCHAR(100),
  
  -- Metadata
  description TEXT,
  tags TEXT[],
  
  -- Version Control
  version INTEGER DEFAULT 1,
  parent_document_id UUID REFERENCES documents(id),
  
  -- Security
  is_public BOOLEAN DEFAULT FALSE,
  access_permissions JSONB,
  
  -- Verification
  document_hash VARCHAR(255),
  is_verified BOOLEAN DEFAULT FALSE,
  verified_by UUID REFERENCES users(id),
  verified_at TIMESTAMP,
  
  -- Expiry
  expires_at TIMESTAMP,
  
  uploaded_by UUID REFERENCES users(id),
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE INDEX idx_documents_owner ON documents(owner_type, owner_id);
CREATE INDEX idx_documents_type ON documents(document_type);
```

---

### 18. Disputes & Support

#### disputes
```sql
CREATE TABLE disputes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  dispute_number VARCHAR(50) UNIQUE NOT NULL,
  
  -- Parties
  raised_by_type VARCHAR(50), -- 'buyer', 'supplier'
  raised_by_id UUID REFERENCES organizations(id),
  against_id UUID REFERENCES organizations(id),
  
  -- Context
  dispute_type VARCHAR(50), -- 'payment', 'quality', 'delivery', 'pricing', 'other'
  order_id UUID REFERENCES orders(id),
  invoice_id UUID REFERENCES invoices(id),
  
  -- Dispute Details
  subject VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  evidence_documents JSONB,
  expected_resolution TEXT,
  
  -- Response
  response_text TEXT,
  responded_by UUID REFERENCES users(id),
  responded_at TIMESTAMP,
  
  -- Status
  status VARCHAR(50) DEFAULT 'open', -- 'open', 'investigating', 'resolved', 'closed', 'escalated'
  priority VARCHAR(20) DEFAULT 'medium', -- 'low', 'medium', 'high', 'critical'
  
  -- Resolution
  resolution_type VARCHAR(50), -- 'refund', 'replacement', 'credit', 'rejected', 'other'
  resolution_notes TEXT,
  resolved_by UUID REFERENCES users(id),
  resolved_at TIMESTAMP,
  
  -- Escalation
  escalated_to UUID REFERENCES users(id),
  escalated_at TIMESTAMP,
  escalation_reason TEXT,
  
  metadata JSONB,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_disputes_raised_by ON disputes(raised_by_id);
CREATE INDEX idx_disputes_against ON disputes(against_id);
CREATE INDEX idx_disputes_order ON disputes(order_id);
CREATE INDEX idx_disputes_status ON disputes(status);
```

#### support_tickets
```sql
CREATE TABLE support_tickets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  ticket_number VARCHAR(50) UNIQUE NOT NULL,
  
  user_id UUID REFERENCES users(id),
  organization_id UUID REFERENCES organizations(id),
  
  -- Ticket Details
  category VARCHAR(50), -- 'technical', 'billing', 'account', 'order', 'general'
  subject VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  priority VARCHAR(20) DEFAULT 'normal', -- 'low', 'normal', 'high', 'urgent'
  
  -- Assignment
  assigned_to UUID REFERENCES users(id),
  assigned_at TIMESTAMP,
  
  -- Status
  status VARCHAR(50) DEFAULT 'open', -- 'open', 'in_progress', 'waiting_customer', 'resolved', 'closed'
  
  -- Resolution
  resolution TEXT,
  resolved_by UUID REFERENCES users(id),
  resolved_at TIMESTAMP,
  
  -- Satisfaction
  satisfaction_rating INTEGER CHECK (satisfaction_rating >= 1 AND satisfaction_rating <= 5),
  satisfaction_feedback TEXT,
  
  -- Attachments
  attachments JSONB,
  
  metadata JSONB,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_support_tickets_user ON support_tickets(user_id);
CREATE INDEX idx_support_tickets_org ON support_tickets(organization_id);
CREATE INDEX idx_support_tickets_status ON support_tickets(status);
```

---

### 19. System & Configuration

#### system_settings
```sql
CREATE TABLE system_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  setting_key VARCHAR(255) UNIQUE NOT NULL,
  setting_value JSONB NOT NULL,
  setting_type VARCHAR(50), -- 'string', 'number', 'boolean', 'json'
  description TEXT,
  is_public BOOLEAN DEFAULT FALSE,
  updated_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### audit_logs
```sql
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Who
  user_id UUID REFERENCES users(id),
  organization_id UUID REFERENCES organizations(id),
  
  -- What
  entity_type VARCHAR(100), -- 'user', 'organization', 'order', 'product', etc.
  entity_id UUID,
  action VARCHAR(50), -- 'create', 'update', 'delete', 'view', etc.
  
  -- When
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  -- Where
  ip_address VARCHAR(45),
  user_agent TEXT,
  
  -- Changes
  changes JSONB, -- {before: {}, after: {}}
  
  -- Context
  metadata JSONB
);

CREATE INDEX idx_audit_logs_user ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_entity ON audit_logs(entity_type, entity_id);
CREATE INDEX idx_audit_logs_timestamp ON audit_logs(timestamp DESC);
```

---

## Relationships Summary

### Key Foreign Key Relationships

1. **Users → Organizations** (via team_members)
2. **Organizations → Products** (suppliers own products)
3. **Organizations → Orders** (buyers and suppliers in orders)
4. **Products → Categories** (product categorization)
5. **Orders → Order Items** (order details)
6. **Orders → Invoices** (billing)
7. **Invoices → Payments** (payment tracking)
8. **RFQs → RFQ Quotes** (supplier responses)
9. **Organizations → Certifications** (quality assurance)
10. **Organizations → Audits** (compliance tracking)
11. **Orders → Shipments** (logistics)
12. **Organizations → Conversations → Messages** (communication)

---

## Indexes Strategy

### Primary Indexes
- All primary keys (UUID) automatically indexed
- Foreign keys indexed for JOIN performance
- Unique constraints on business identifiers

### Search Indexes
- Full-text search on products (tsvector)
- Full-text search on organizations
- JSONB GIN indexes for flexible data

### Performance Indexes
- Composite indexes on frequently queried combinations
- Partial indexes on status fields
- Time-based indexes for analytics

---

## Data Archival Strategy

### Soft Deletes
- Critical tables use `deleted_at` timestamp
- Queries filter WHERE deleted_at IS NULL
- Archive jobs move old soft-deleted records

### Data Retention
- Orders: 7 years (tax compliance)
- Analytics events: 2 years
- Audit logs: 10 years
- Support tickets: 5 years
- Messages: 3 years

---

## Backup Strategy

### Automated Backups
- Full backup: Daily at 2 AM UTC
- Incremental backup: Every 6 hours
- Transaction logs: Continuous
- Retention: 30 days online, 1 year archive

### Disaster Recovery
- RTO: 4 hours
- RPO: 15 minutes
- Multi-region replication
- Automated failover

---

**Document Version**: 1.0  
**Last Updated**: 2024  
**Status**: Planning Phase  
**Database Version**: PostgreSQL 15+

