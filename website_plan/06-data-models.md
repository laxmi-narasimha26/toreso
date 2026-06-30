# Toreso - Data Models & Database Schema

## 1. User Management

### User Model
```typescript
interface User {
  id: string; // UUID
  email: string; // unique
  passwordHash: string;
  role: 'buyer' | 'supplier' | 'admin' | 'auditor';
  status: 'active' | 'inactive' | 'suspended' | 'pending_verification';
  companyId: string; // FK to Company
  firstName: string;
  lastName: string;
  phone: string;
  avatar: string; // URL
  twoFactorEnabled: boolean;
  twoFactorSecret: string;
  lastLoginAt: Date;
  emailVerified: boolean;
  emailVerifiedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date; // soft delete
}
```

### Company Model
```typescript
interface Company {
  id: string; // UUID
  name: string;
  type: 'buyer' | 'supplier';
  registrationNumber: string;
  taxId: string;
  industry: string;
  companySize: 'small' | 'medium' | 'large' | 'enterprise';
  country: string;
  state: string;
  city: string;
  address: string;
  postalCode: string;
  website: string;
  description: string;
  logo: string; // URL
  verified: boolean;
  verifiedAt: Date;
  verificationStatus: 'pending' | 'in_review' | 'approved' | 'rejected';
  subscriptionPlan: string; // FK to SubscriptionPlan
  subscriptionStatus: 'active' | 'inactive' | 'trial' | 'expired';
  subscriptionExpiresAt: Date;
  rating: number; // 0-5
  totalOrders: number;
  totalRevenue: number;
  createdAt: Date;
  updatedAt: Date;
}
```

### UserRole Model
```typescript
interface UserRole {
  id: string;
  userId: string; // FK to User
  role: 'buyer_admin' | 'procurement_manager' | 'plant_manager' | 'buyer_user' |
        'supplier_admin' | 'sales_manager' | 'supplier_user' |
        'customer_auditor' | 'panel_auditor' | 'platform_admin' | 'super_admin';
  permissions: string[]; // Array of permission strings
  scope: string; // e.g., 'company', 'plant:123', 'global'
  createdAt: Date;
  updatedAt: Date;
}
```

## 2. Product Management

### Category Model
```typescript
interface Category {
  id: string;
  name: string;
  slug: string; // URL-friendly
  description: string;
  parentId: string; // FK to Category (for hierarchy)
  level: number; // 0 for root, 1 for sub-category, etc.
  image: string; // URL
  icon: string; // URL
  order: number; // Display order
  isActive: boolean;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  createdAt: Date;
  updatedAt: Date;
}
```

### Product Model
```typescript
interface Product {
  id: string;
  supplierId: string; // FK to Company
  sku: string; // unique
  name: string;
  slug: string;
  categoryId: string; // FK to Category
  shortDescription: string;
  detailedDescription: string;
  specifications: Record<string, any>; // JSON
  basePrice: number;
  currency: string;
  priceValidUntil: Date;
  moq: number; // Minimum Order Quantity
  maxOrderQuantity: number;
  unit: string; // 'pieces', 'kg', 'meters', etc.
  stockQuantity: number;
  stockLocation: string; // Warehouse ID
  leadTime: number; // days
  status: 'draft' | 'active' | 'inactive' | 'out_of_stock' | 'discontinued';
  images: string[]; // Array of URLs
  videos: string[]; // Array of URLs
  documents: string[]; // Technical sheets, certificates
  tags: string[];
  customizable: boolean;
  customizationOptions: Record<string, any>; // JSON
  sustainabilityScore: number; // 0-100
  carbonFootprint: number;
  recyclable: boolean;
  ecoFriendly: boolean;
  certifications: string[]; // Array of certification IDs
  rating: number; // 0-5
  reviewCount: number;
  viewCount: number;
  orderCount: number;
  featured: boolean;
  featuredUntil: Date;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}
```

### ProductVariant Model
```typescript
interface ProductVariant {
  id: string;
  productId: string; // FK to Product
  sku: string; // unique
  name: string;
  attributes: Record<string, string>; // e.g., {color: 'red', size: 'large'}
  price: number;
  stockQuantity: number;
  images: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

### ProductPricing Model
```typescript
interface ProductPricing {
  id: string;
  productId: string; // FK to Product
  minQuantity: number;
  maxQuantity: number;
  price: number;
  discountPercentage: number;
  createdAt: Date;
  updatedAt: Date;
}
```

## 3. Order Management

### Order Model
```typescript
interface Order {
  id: string;
  orderNumber: string; // unique, auto-generated
  buyerId: string; // FK to Company
  supplierId: string; // FK to Company
  buyerUserId: string; // FK to User
  status: 'pending' | 'confirmed' | 'processing' | 'quality_check' | 
          'packed' | 'shipped' | 'in_transit' | 'out_for_delivery' | 
          'delivered' | 'completed' | 'cancelled' | 'returned';
  paymentStatus: 'pending' | 'paid' | 'partially_paid' | 'failed' | 'refunded';
  subtotal: number;
  taxAmount: number;
  shippingCost: number;
  discountAmount: number;
  totalAmount: number;
  currency: string;
  paymentMethod: string;
  paymentTerms: string;
  deliveryAddress: Address; // JSON
  billingAddress: Address; // JSON
  plantId: string; // FK to Plant
  estimatedDeliveryDate: Date;
  actualDeliveryDate: Date;
  trackingNumber: string;
  shippingMethod: string;
  notes: string;
  internalNotes: string; // Only visible to supplier
  cancellationReason: string;
  createdAt: Date;
  updatedAt: Date;
  confirmedAt: Date;
  shippedAt: Date;
  deliveredAt: Date;
  completedAt: Date;
  cancelledAt: Date;
}
```

### OrderItem Model
```typescript
interface OrderItem {
  id: string;
  orderId: string; // FK to Order
  productId: string; // FK to Product
  productVariantId: string; // FK to ProductVariant (optional)
  productName: string; // Snapshot at time of order
  productSku: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  discountPercentage: number;
  discountAmount: number;
  taxPercentage: number;
  taxAmount: number;
  totalPrice: number;
  specifications: Record<string, any>; // JSON snapshot
  customization: Record<string, any>; // JSON
  createdAt: Date;
  updatedAt: Date;
}
```

### OrderStatusHistory Model
```typescript
interface OrderStatusHistory {
  id: string;
  orderId: string; // FK to Order
  status: string;
  notes: string;
  updatedBy: string; // FK to User
  createdAt: Date;
}
```

## 4. RFQ Management

### RFQ Model
```typescript
interface RFQ {
  id: string;
  rfqNumber: string; // unique, auto-generated
  buyerId: string; // FK to Company
  buyerUserId: string; // FK to User
  title: string;
  description: string;
  categoryId: string; // FK to Category
  quantity: number;
  unit: string;
  targetPrice: number;
  budgetRange: {min: number, max: number};
  specifications: Record<string, any>; // JSON
  qualityStandards: string[];
  complianceRequirements: string[];
  customizationNeeds: string;
  attachments: string[]; // URLs
  deliveryLocation: Address; // JSON
  requiredDeliveryDate: Date;
  deliveryTerms: string; // Incoterms
  packagingRequirements: string;
  paymentTermsPreference: string;
  warrantyRequirements: string;
  contractDuration: string;
  volumeCommitments: string;
  supplierSelection: 'open' | 'invited' | 'preferred';
  invitedSuppliers: string[]; // Array of supplier IDs
  supplierCriteria: Record<string, any>; // JSON
  status: 'draft' | 'published' | 'closed' | 'expired' | 'awarded';
  quoteSubmissionDeadline: Date;
  evaluationPeriod: number; // days
  decisionDate: Date;
  validUntil: Date;
  quotesReceived: number;
  awardedQuoteId: string; // FK to Quote
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  closedAt: Date;
}
```

### Quote Model
```typescript
interface Quote {
  id: string;
  quoteNumber: string; // unique
  rfqId: string; // FK to RFQ
  supplierId: string; // FK to Company
  supplierUserId: string; // FK to User
  status: 'draft' | 'submitted' | 'under_review' | 'accepted' | 'rejected' | 'expired';
  unitPrice: number;
  totalPrice: number;
  currency: string;
  priceValidUntil: Date;
  volumeDiscounts: Array<{minQty: number, price: number}>;
  paymentTerms: string;
  productSpecifications: Record<string, any>; // JSON
  complianceConfirmation: boolean;
  customizationOptions: Record<string, any>; // JSON
  alternativeSuggestions: string;
  leadTime: number; // days
  deliverySchedule: string;
  shippingMethod: string;
  deliveryTerms: string;
  packagingDetails: string;
  warrantyPeriod: string;
  afterSalesSupport: string;
  returnPolicy: string;
  contractTerms: string;
  volumeCommitments: string;
  attachments: string[]; // Brochures, specs, certificates
  companyIntroduction: string;
  whyChooseUs: string;
  references: string[];
  specialOffers: string;
  negotiationWillingness: boolean;
  expiryDate: Date;
  createdAt: Date;
  updatedAt: Date;
  submittedAt: Date;
}
```

### QuoteNegotiation Model
```typescript
interface QuoteNegotiation {
  id: string;
  quoteId: string; // FK to Quote
  initiatedBy: string; // FK to User
  status: 'active' | 'accepted' | 'rejected' | 'expired';
  messages: Array<{
    userId: string;
    message: string;
    proposedChanges: Record<string, any>; // JSON
    timestamp: Date;
  }>;
  finalTerms: Record<string, any>; // JSON
  createdAt: Date;
  updatedAt: Date;
  closedAt: Date;
}
```

## 5. Supplier Management

### SupplierProfile Model
```typescript
interface SupplierProfile {
  id: string;
  companyId: string; // FK to Company
  manufacturingCapabilities: string[];
  productCategories: string[]; // FK to Category
  productionCapacity: Record<string, any>; // JSON
  companyHistory: string;
  manufacturingFacilities: Array<{
    name: string;
    address: Address;
    capacity: string;
    certifications: string[];
  }>;
  qualityCertifications: string[]; // FK to Certification
  insuranceDocuments: string[]; // URLs
  bankDetails: {
    bankName: string;
    accountNumber: string;
    ifscCode: string;
    swiftCode: string;
  };
  warehouseLocations: string[]; // FK to Warehouse
  minimumOrderValue: number;
  averageLeadTime: number; // days
  returnPolicy: string;
  warrantyPolicy: string;
  paymentTermsOffered: string[];
  shippingMethods: string[];
  servingRegions: string[];
  languages: string[];
  businessHours: string;
  responseTime: number; // hours
  rating: number; // 0-5
  totalOrders: number;
  totalRevenue: number;
  onTimeDeliveryRate: number; // percentage
  qualityRating: number; // 0-5
  communicationRating: number; // 0-5
  verificationStatus: 'pending' | 'verified' | 'rejected';
  lastAuditDate: Date;
  nextAuditDate: Date;
  complianceScore: number; // 0-100
  createdAt: Date;
  updatedAt: Date;
}
```

### SupplierRating Model
```typescript
interface SupplierRating {
  id: string;
  supplierId: string; // FK to Company
  buyerId: string; // FK to Company
  buyerUserId: string; // FK to User
  orderId: string; // FK to Order
  productQuality: number; // 1-5
  deliveryTime: number; // 1-5
  communication: number; // 1-5
  packaging: number; // 1-5
  valueForMoney: number; // 1-5
  overallRating: number; // 1-5 (average)
  review: string;
  pros: string;
  cons: string;
  images: string[]; // URLs
  recommended: boolean;
  verifiedPurchase: boolean;
  helpfulCount: number;
  status: 'pending' | 'approved' | 'rejected';
  supplierResponse: string;
  supplierRespondedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

## 6. Audit & Certification

### Audit Model
```typescript
interface Audit {
  id: string;
  auditNumber: string; // unique
  supplierId: string; // FK to Company
  auditorId: string; // FK to User
  auditorType: 'customer_auditor' | 'panel_auditor';
  auditType: 'initial' | 'annual' | 'quality' | 'facility' | 'process' | 'product' | 'surprise' | 'follow_up';
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  scheduledDate: Date;
  completedDate: Date;
  location: Address; // JSON
  checklist: Array<{
    item: string;
    status: 'pass' | 'fail' | 'na';
    notes: string;
    evidence: string[]; // URLs
  }>;
  findings: Array<{
    category: string;
    severity: 'critical' | 'major' | 'minor';
    description: string;
    evidence: string[]; // URLs
    correctiveAction: string;
    deadline: Date;
    status: 'open' | 'in_progress' | 'resolved';
  }>;
  overallScore: number; // 0-100
  result: 'pass' | 'conditional_pass' | 'fail';
  reportUrl: string;
  certificateIssued: boolean;
  certificateId: string; // FK to Certification
  nextAuditDate: Date;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### Certification Model
```typescript
interface Certification {
  id: string;
  supplierId: string; // FK to Company
  certificateNumber: string; // unique
  certificateType: string; // 'ISO 9001', 'ISO 14001', etc.
  issuingAuthority: string;
  issueDate: Date;
  expiryDate: Date;
  status: 'active' | 'expired' | 'suspended' | 'revoked';
  scope: string;
  certificateUrl: string; // PDF URL
  verificationStatus: 'pending' | 'verified' | 'rejected';
  verifiedBy: string; // FK to User
  verifiedAt: Date;
  renewalReminderSent: boolean;
  renewalReminderDates: Date[]; // 90, 60, 30 days before expiry
  createdAt: Date;
  updatedAt: Date;
}
```

## 7. Payment & Financial

### Payment Model
```typescript
interface Payment {
  id: string;
  paymentNumber: string; // unique
  orderId: string; // FK to Order
  buyerId: string; // FK to Company
  supplierId: string; // FK to Company
  amount: number;
  currency: string;
  paymentMethod: 'card' | 'bank_transfer' | 'upi' | 'wallet' | 'credit_terms' | 'bill_discounting';
  paymentGateway: string;
  transactionId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'refunded' | 'cancelled';
  paidAt: Date;
  failureReason: string;
  refundAmount: number;
  refundedAt: Date;
  refundReason: string;
  metadata: Record<string, any>; // JSON
  createdAt: Date;
  updatedAt: Date;
}
```

### Invoice Model
```typescript
interface Invoice {
  id: string;
  invoiceNumber: string; // unique
  orderId: string; // FK to Order
  buyerId: string; // FK to Company
  supplierId: string; // FK to Company
  invoiceDate: Date;
  dueDate: Date;
  subtotal: number;
  taxAmount: number;
  discountAmount: number;
  shippingCost: number;
  totalAmount: number;
  currency: string;
  paymentTerms: string;
  status: 'draft' | 'sent' | 'viewed' | 'paid' | 'overdue' | 'cancelled';
  pdfUrl: string;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
  sentAt: Date;
  paidAt: Date;
}
```

### BillDiscounting Model
```typescript
interface BillDiscounting {
  id: string;
  invoiceId: string; // FK to Invoice
  supplierId: string; // FK to Company
  invoiceAmount: number;
  discountRate: number; // percentage
  processingFee: number;
  netAmount: number; // Amount supplier receives
  status: 'pending' | 'approved' | 'rejected' | 'disbursed' | 'settled';
  requestedAt: Date;
  approvedAt: Date;
  disbursedAt: Date;
  settledAt: Date;
  settlementAmount: number;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}
```

## 8. Logistics & Tracking

### Shipment Model
```typescript
interface Shipment {
  id: string;
  shipmentNumber: string; // unique
  orderId: string; // FK to Order
  supplierId: string; // FK to Company
  buyerId: string; // FK to Company
  trackingNumber: string;
  carrier: string;
  shippingMethod: string;
  status: 'pending' | 'picked_up' | 'in_transit' | 'out_for_delivery' | 
          'delivered' | 'failed' | 'returned';
  origin: Address; // JSON
  destination: Address; // JSON
  estimatedDeliveryDate: Date;
  actualDeliveryDate: Date;
  weight: number;
  dimensions: {length: number, width: number, height: number};
  packageCount: number;
  shippingCost: number;
  trackingUrl: string;
  trackingEvents: Array<{
    status: string;
    location: string;
    timestamp: Date;
    description: string;
  }>;
  deliveryPerson: {
    name: string;
    phone: string;
    vehicleNumber: string;
  };
  proofOfDelivery: {
    signature: string; // URL
    photos: string[]; // URLs
    receivedBy: string;
    timestamp: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}
```

### Warehouse Model
```typescript
interface Warehouse {
  id: string;
  name: string;
  code: string; // unique
  type: 'platform' | 'supplier';
  ownerId: string; // FK to Company (if supplier warehouse)
  address: Address; // JSON
  coordinates: {latitude: number, longitude: number};
  capacity: number;
  currentUtilization: number;
  facilities: string[];
  operatingHours: string;
  contactPerson: string;
  contactPhone: string;
  contactEmail: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

### Inventory Model
```typescript
interface Inventory {
  id: string;
  productId: string; // FK to Product
  warehouseId: string; // FK to Warehouse
  quantity: number;
  reservedQuantity: number;
  availableQuantity: number; // quantity - reservedQuantity
  reorderPoint: number;
  reorderQuantity: number;
  lastRestockedAt: Date;
  lastStockCheckAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

## 9. Communication

### Message Model
```typescript
interface Message {
  id: string;
  conversationId: string; // FK to Conversation
  senderId: string; // FK to User
  recipientId: string; // FK to User
  messageType: 'text' | 'file' | 'image' | 'voice';
  content: string;
  attachments: string[]; // URLs
  status: 'sent' | 'delivered' | 'read';
  readAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

### Conversation Model
```typescript
interface Conversation {
  id: string;
  type: 'direct' | 'group' | 'support';
  participants: string[]; // Array of User IDs
  lastMessageId: string; // FK to Message
  lastMessageAt: Date;
  unreadCount: Record<string, number>; // userId: count
  metadata: Record<string, any>; // JSON (e.g., orderId, rfqId)
  createdAt: Date;
  updatedAt: Date;
}
```

### Notification Model
```typescript
interface Notification {
  id: string;
  userId: string; // FK to User
  type: 'order' | 'payment' | 'rfq' | 'message' | 'audit' | 'certificate' | 'system';
  title: string;
  message: string;
  data: Record<string, any>; // JSON (e.g., orderId, link)
  priority: 'low' | 'medium' | 'high' | 'urgent';
  channels: Array<'in_app' | 'email' | 'sms' | 'push' | 'whatsapp'>;
  status: 'pending' | 'sent' | 'delivered' | 'read' | 'failed';
  readAt: Date;
  sentAt: Date;
  createdAt: Date;
}
```

## 10. Analytics & Reporting

### AnalyticsEvent Model
```typescript
interface AnalyticsEvent {
  id: string;
  userId: string; // FK to User (optional)
  sessionId: string;
  eventType: string; // 'page_view', 'product_view', 'add_to_cart', etc.
  eventCategory: string;
  eventAction: string;
  eventLabel: string;
  eventValue: number;
  metadata: Record<string, any>; // JSON
  userAgent: string;
  ipAddress: string;
  referrer: string;
  timestamp: Date;
}
```

### Report Model
```typescript
interface Report {
  id: string;
  userId: string; // FK to User
  reportType: string;
  reportName: string;
  parameters: Record<string, any>; // JSON
  format: 'pdf' | 'excel' | 'csv';
  status: 'generating' | 'completed' | 'failed';
  fileUrl: string;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

## 11. Platform Management

### SubscriptionPlan Model
```typescript
interface SubscriptionPlan {
  id: string;
  name: string;
  type: 'buyer' | 'supplier';
  tier: 'free' | 'basic' | 'professional' | 'enterprise';
  price: number;
  currency: string;
  billingCycle: 'monthly' | 'quarterly' | 'annual';
  features: string[];
  limits: Record<string, number>; // JSON (e.g., maxProducts, maxUsers)
  transactionFeePercentage: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

### SystemConfiguration Model
```typescript
interface SystemConfiguration {
  id: string;
  key: string; // unique
  value: any; // JSON
  dataType: 'string' | 'number' | 'boolean' | 'json';
  category: string;
  description: string;
  isPublic: boolean;
  updatedBy: string; // FK to User
  createdAt: Date;
  updatedAt: Date;
}
```

### AuditLog Model
```typescript
interface AuditLog {
  id: string;
  userId: string; // FK to User
  action: string;
  entityType: string; // 'order', 'product', 'user', etc.
  entityId: string;
  changes: Record<string, any>; // JSON (before/after)
  ipAddress: string;
  userAgent: string;
  timestamp: Date;
}
```

## 12. Supporting Models

### Address Model (Embedded)
```typescript
interface Address {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  coordinates: {latitude: number, longitude: number};
  contactPerson: string;
  contactPhone: string;
}
```

### File Model
```typescript
interface File {
  id: string;
  fileName: string;
  originalName: string;
  mimeType: string;
  size: number; // bytes
  url: string;
  thumbnailUrl: string;
  uploadedBy: string; // FK to User
  entityType: string; // 'product', 'order', 'certification', etc.
  entityId: string;
  isPublic: boolean;
  createdAt: Date;
}
```

### Tag Model
```typescript
interface Tag {
  id: string;
  name: string;
  slug: string; // unique
  type: 'product' | 'blog' | 'resource';
  usageCount: number;
  createdAt: Date;
}
```

## Database Relationships Summary

### One-to-Many Relationships
- Company → Users
- Company → Products (for suppliers)
- Company → Orders (as buyer)
- Company → Orders (as supplier)
- Product → ProductVariants
- Product → ProductPricing
- Order → OrderItems
- RFQ → Quotes
- Supplier → Audits
- Supplier → Certifications

### Many-to-Many Relationships
- Products ↔ Tags
- Products ↔ Certifications
- Users ↔ Roles
- Categories ↔ Products

### One-to-One Relationships
- Company → SupplierProfile (for suppliers)
- Order → Shipment
- Invoice → BillDiscounting

## Indexing Strategy

### Primary Indexes
- All primary keys (id)
- Unique constraints (email, sku, orderNumber, etc.)

### Foreign Key Indexes
- All foreign key columns
- Composite indexes for frequently joined tables

### Search Indexes
- Full-text indexes on product names, descriptions
- Composite indexes for filtering (category + status + price)
- Geospatial indexes for location-based queries

### Performance Indexes
- Indexes on frequently queried columns (status, createdAt, etc.)
- Covering indexes for common query patterns
- Partial indexes for specific conditions

