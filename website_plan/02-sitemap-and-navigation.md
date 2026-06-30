# Toreso - Sitemap and Navigation Structure

## Primary Navigation Structure

### Public Website (Non-authenticated)

#### 1. Home Page (`/`)
**Purpose**: Landing page showcasing platform value proposition
**Key Sections**:
- Hero section with CTA (Register as Buyer/Supplier)
- Platform benefits overview
- How it works (3-step process)
- Featured categories
- Success stories/testimonials
- Trust indicators (number of suppliers, buyers, transactions)
- Latest industry insights
- Newsletter signup

**CTAs**:
- Register as Buyer → `/register/buyer`
- Register as Supplier → `/register/supplier`
- Browse Products → `/products`
- Learn More → `/about`

#### 2. About Us (`/about`)
**Sections**:
- Company mission and vision
- Platform story
- Team information
- Why Toreso is different
- Industry impact
- Awards and recognition

#### 3. How It Works (`/how-it-works`)
**Separate flows for**:
- For Buyers (`/how-it-works/buyers`)
- For Suppliers (`/how-it-works/suppliers`)
- Platform Process Flow
- Video tutorials
- FAQ section

#### 4. Products/Categories (`/products`)
**Features**:
- Category browsing
- Search functionality
- Filter options (limited for non-authenticated)
- Featured products
- New arrivals
- Popular items
**CTAs**: Login/Register to see prices and place orders

#### 5. Solutions (`/solutions`)
**Sub-pages**:
- For Manufacturing Industries (`/solutions/manufacturing`)
- For FMCG Companies (`/solutions/fmcg`)
- For Pharmaceutical (`/solutions/pharmaceutical`)
- For Food & Beverage (`/solutions/food-beverage`)
- Custom Packaging Solutions (`/solutions/custom`)

#### 6. Pricing (`/pricing`)
**Sections**:
- Buyer pricing (free to join)
- Supplier subscription tiers
  - Basic (Free)
  - Professional
  - Enterprise
- Feature comparison table
- Transaction fee structure
- Additional services pricing

#### 7. Resources (`/resources`)
**Sub-sections**:
- Blog (`/resources/blog`)
- Industry Reports (`/resources/reports`)
- Case Studies (`/resources/case-studies`)
- Webinars (`/resources/webinars`)
- Whitepapers (`/resources/whitepapers`)
- Educational Content (`/resources/education`)
- Video Library (`/resources/videos`)

#### 8. Suppliers Directory (`/suppliers`)
**Features**:
- Browse verified suppliers
- Filter by category, location, certification
- Supplier profiles (public view)
- Ratings and reviews (limited view)
**CTA**: Register to connect with suppliers

#### 9. Certifications & Quality (`/quality`)
**Content**:
- Quality assurance process
- Audit procedures
- Certification requirements
- Compliance standards
- Quality metrics

#### 10. Contact Us (`/contact`)
**Features**:
- Contact form
- Office locations
- Phone numbers
- Email addresses
- Live chat widget
- Support hours

#### 11. Careers (`/careers`)
**Sections**:
- Open positions
- Company culture
- Benefits
- Application process

#### 12. Legal Pages
- Terms of Service (`/terms`)
- Privacy Policy (`/privacy`)
- Cookie Policy (`/cookies`)
- Refund Policy (`/refund-policy`)
- Shipping Policy (`/shipping-policy`)
- Compliance (`/compliance`)

---

## Buyer Dashboard (Authenticated - Buyer Role)

### Main Navigation

#### 1. Dashboard (`/buyer/dashboard`)
**Widgets**:
- Quick stats (pending orders, active RFQs, saved items)
- Recent orders
- Recommended products
- Price alerts
- Upcoming deliveries
- Spend analytics
- Supplier performance summary
- Notifications center

#### 2. Products & Catalog (`/buyer/products`)
**Sub-sections**:
- Browse All (`/buyer/products/browse`)
- Search Products (`/buyer/products/search`)
- Categories (`/buyer/products/categories`)
- My Favorites (`/buyer/products/favorites`)
- Recently Viewed (`/buyer/products/recent`)
- Customized Catalog (`/buyer/products/my-catalog`)
- New Products (`/buyer/products/new`)
- Recommended for You (`/buyer/products/recommended`)

**Features per product**:
- Product details
- Specifications
- Pricing (volume-based)
- Supplier information
- Ratings and reviews
- Sustainability metrics
- Compliance certificates
- Add to cart
- Add to favorites
- Request quote
- Compare products

#### 3. Orders (`/buyer/orders`)
**Sub-sections**:
- All Orders (`/buyer/orders/all`)
- Pending Orders (`/buyer/orders/pending`)
- In Progress (`/buyer/orders/in-progress`)
- Completed (`/buyer/orders/completed`)
- Cancelled (`/buyer/orders/cancelled`)
- Returns & Refunds (`/buyer/orders/returns`)
- Order History (`/buyer/orders/history`)

**Order Details Page** (`/buyer/orders/:orderId`):
- Order information
- Items ordered
- Pricing breakdown
- Delivery status
- Real-time tracking
- Invoice download
- Reorder option
- Raise issue
- Rate order

#### 4. RFQ/RFI Management (`/buyer/rfq`)
**Sub-sections**:
- Create New RFQ (`/buyer/rfq/create`)
- Active RFQs (`/buyer/rfq/active`)
- Received Quotes (`/buyer/rfq/quotes`)
- RFQ History (`/buyer/rfq/history`)
- Templates (`/buyer/rfq/templates`)

**RFQ Details** (`/buyer/rfq/:rfqId`):
- RFQ specifications
- Received quotes comparison
- Supplier details
- Accept/Reject quotes
- Negotiate
- Convert to order

#### 5. Suppliers (`/buyer/suppliers`)
**Sub-sections**:
- All Suppliers (`/buyer/suppliers/all`)
- Preferred Suppliers (`/buyer/suppliers/preferred`)
- Supplier Performance (`/buyer/suppliers/performance`)
- Audit Reports (`/buyer/suppliers/audits`)
- Certifications (`/buyer/suppliers/certifications`)
- Ratings & Reviews (`/buyer/suppliers/reviews`)

**Supplier Profile** (`/buyer/suppliers/:supplierId`):
- Company information
- Product catalog
- Certifications
- Audit history
- Performance metrics
- Ratings and reviews
- Contact information
- Chat with supplier
- Add to preferred

#### 6. Plants Management (`/buyer/plants`)
**Features**:
- Add/Edit Plants (`/buyer/plants/manage`)
- Plant List (`/buyer/plants/list`)
- Plant-wise Orders (`/buyer/plants/:plantId/orders`)
- Plant-wise Inventory (`/buyer/plants/:plantId/inventory`)
- Delivery Addresses
- Warehouse Assignments

#### 7. Inventory & Warehouse (`/buyer/inventory`)
**Sub-sections**:
- Current Stock (`/buyer/inventory/stock`)
- Stock Alerts (`/buyer/inventory/alerts`)
- Reorder Suggestions (`/buyer/inventory/reorder`)
- JIT Deliveries (`/buyer/inventory/jit`)
- Warehouse Locations (`/buyer/inventory/warehouses`)
- Stock Movement History (`/buyer/inventory/history`)

#### 8. Analytics & Reports (`/buyer/analytics`)
**Sub-sections**:
- Spend Analysis (`/buyer/analytics/spend`)
- Supplier Performance (`/buyer/analytics/suppliers`)
- Category Analysis (`/buyer/analytics/categories`)
- Plant-wise Reports (`/buyer/analytics/plants`)
- Cost Savings Report (`/buyer/analytics/savings`)
- Demand Forecasting (`/buyer/analytics/forecast`)
- Custom Reports (`/buyer/analytics/custom`)
- Export Reports

#### 9. Payments & Invoices (`/buyer/payments`)
**Sub-sections**:
- Payment Methods (`/buyer/payments/methods`)
- Transaction History (`/buyer/payments/transactions`)
- Invoices (`/buyer/payments/invoices`)
- Credit Terms (`/buyer/payments/credit`)
- Payment Schedules (`/buyer/payments/schedules`)
- Financial Reports (`/buyer/payments/reports`)

#### 10. Negotiations (`/buyer/negotiations`)
**Features**:
- Active Negotiations (`/buyer/negotiations/active`)
- Negotiation History (`/buyer/negotiations/history`)
- Bulk Order Negotiations (`/buyer/negotiations/bulk`)
- Contract Negotiations (`/buyer/negotiations/contracts`)

#### 11. Compliance & Audits (`/buyer/compliance`)
**Sub-sections**:
- Compliance Dashboard (`/buyer/compliance/dashboard`)
- Supplier Audits (`/buyer/compliance/audits`)
- Certification Tracking (`/buyer/compliance/certifications`)
- Quality Reports (`/buyer/compliance/quality`)
- Regulatory Documents (`/buyer/compliance/documents`)

#### 12. Messages & Communication (`/buyer/messages`)
**Features**:
- Inbox
- Sent messages
- Chat with suppliers
- Notifications
- Support tickets

#### 13. Settings (`/buyer/settings`)
**Sub-sections**:
- Profile Settings (`/buyer/settings/profile`)
- Company Information (`/buyer/settings/company`)
- User Management (`/buyer/settings/users`)
- Notification Preferences (`/buyer/settings/notifications`)
- Security Settings (`/buyer/settings/security`)
- API Keys (`/buyer/settings/api`)
- Integration Settings (`/buyer/settings/integrations`)
- Billing Information (`/buyer/settings/billing`)

#### 14. Support & Help (`/buyer/support`)
**Features**:
- Help Center
- FAQs
- Submit Ticket
- Live Chat
- Training Resources
- Video Tutorials
- Contact Support

---

## Supplier Dashboard (Authenticated - Supplier Role)

### Main Navigation

#### 1. Dashboard (`/supplier/dashboard`)
**Widgets**:
- Quick stats (pending orders, revenue, products)
- Recent orders
- Performance metrics
- Upcoming audits
- Certification expiry alerts
- Revenue analytics
- Buyer inquiries
- Notifications center

#### 2. Products Management (`/supplier/products`)
**Sub-sections**:
- All Products (`/supplier/products/all`)
- Add New Product (`/supplier/products/add`)
- Product Categories (`/supplier/products/categories`)
- Bulk Upload (`/supplier/products/bulk-upload`)
- Draft Products (`/supplier/products/drafts`)
- Out of Stock (`/supplier/products/out-of-stock`)
- Featured Products (`/supplier/products/featured`)

**Product Edit Page** (`/supplier/products/:productId/edit`):
- Basic information
- Specifications
- Pricing (volume-based tiers)
- Images and videos
- Certifications
- Sustainability info
- Inventory management
- SEO settings

#### 3. Orders Management (`/supplier/orders`)
**Sub-sections**:
- New Orders (`/supplier/orders/new`)
- In Progress (`/supplier/orders/in-progress`)
- Ready to Ship (`/supplier/orders/ready`)
- Shipped (`/supplier/orders/shipped`)
- Delivered (`/supplier/orders/delivered`)
- Cancelled (`/supplier/orders/cancelled`)
- Returns (`/supplier/orders/returns`)
- Order History (`/supplier/orders/history`)

**Order Details** (`/supplier/orders/:orderId`):
- Order information
- Buyer details
- Items and pricing
- Update order status
- Upload shipping documents
- Tracking information
- Communication with buyer
- Invoice generation

#### 4. RFQ/Quotes (`/supplier/rfq`)
**Sub-sections**:
- New RFQs (`/supplier/rfq/new`)
- My Quotes (`/supplier/rfq/quotes`)
- Accepted Quotes (`/supplier/rfq/accepted`)
- Rejected Quotes (`/supplier/rfq/rejected`)
- Quote History (`/supplier/rfq/history`)

**Quote Creation** (`/supplier/rfq/:rfqId/quote`):
- RFQ details
- Quote form
- Pricing calculator
- Terms and conditions
- Validity period
- Submit quote

#### 5. Buyers Management (`/supplier/buyers`)
**Sub-sections**:
- All Buyers (`/supplier/buyers/all`)
- Active Buyers (`/supplier/buyers/active`)
- Buyer Inquiries (`/supplier/buyers/inquiries`)
- Buyer Analytics (`/supplier/buyers/analytics`)

**Buyer Profile** (`/supplier/buyers/:buyerId`):
- Company information
- Order history
- Payment history
- Communication history
- Notes

#### 6. Inventory Management (`/supplier/inventory`)
**Sub-sections**:
- Current Stock (`/supplier/inventory/stock`)
- Stock Alerts (`/supplier/inventory/alerts`)
- Warehouse Management (`/supplier/inventory/warehouses`)
- Stock Movement (`/supplier/inventory/movement`)
- Restock Planning (`/supplier/inventory/restock`)

#### 7. Certifications & Audits (`/supplier/certifications`)
**Sub-sections**:
- My Certifications (`/supplier/certifications/list`)
- Upload Certificates (`/supplier/certifications/upload`)
- Audit Schedule (`/supplier/certifications/audits`)
- Audit Reports (`/supplier/certifications/reports`)
- Renewal Reminders (`/supplier/certifications/reminders`)
- Compliance Documents (`/supplier/certifications/documents`)

**Audit Details** (`/supplier/certifications/audits/:auditId`):
- Audit information
- Checklist
- Documents required
- Audit results
- Action items
- Download report

#### 8. Performance Analytics (`/supplier/analytics`)
**Sub-sections**:
- Sales Analytics (`/supplier/analytics/sales`)
- Performance Metrics (`/supplier/analytics/performance`)
- Buyer Analytics (`/supplier/analytics/buyers`)
- Product Analytics (`/supplier/analytics/products`)
- Rating & Reviews (`/supplier/analytics/reviews`)
- Competitive Analysis (`/supplier/analytics/competition`)
- Custom Reports (`/supplier/analytics/custom`)

#### 9. Financial Management (`/supplier/financial`)
**Sub-sections**:
- Revenue Dashboard (`/supplier/financial/revenue`)
- Invoices (`/supplier/financial/invoices`)
- Payments Received (`/supplier/financial/payments`)
- Bill Discounting (`/supplier/financial/discounting`)
- Payment Schedules (`/supplier/financial/schedules`)
- Transaction History (`/supplier/financial/transactions`)
- Tax Documents (`/supplier/financial/tax`)
- Financial Reports (`/supplier/financial/reports`)

#### 10. Marketing & Promotions (`/supplier/marketing`)
**Sub-sections**:
- Promotional Campaigns (`/supplier/marketing/campaigns`)
- Featured Listings (`/supplier/marketing/featured`)
- Advertisement Space (`/supplier/marketing/ads`)
- Discount Management (`/supplier/marketing/discounts`)
- Product Launch (`/supplier/marketing/launches`)
- Marketing Analytics (`/supplier/marketing/analytics`)

#### 11. Logistics & Shipping (`/supplier/logistics`)
**Sub-sections**:
- Shipping Management (`/supplier/logistics/shipping`)
- Logistics Partners (`/supplier/logistics/partners`)
- Tracking Management (`/supplier/logistics/tracking`)
- Delivery Performance (`/supplier/logistics/performance`)
- Shipping Rates (`/supplier/logistics/rates`)

#### 12. Messages & Communication (`/supplier/messages`)
**Features**:
- Inbox
- Sent messages
- Chat with buyers
- Notifications
- Support tickets

#### 13. Educational Resources (`/supplier/education`)
**Sub-sections**:
- Training Programs (`/supplier/education/training`)
- Webinars (`/supplier/education/webinars`)
- Best Practices (`/supplier/education/best-practices`)
- Industry Insights (`/supplier/education/insights`)
- Certifications (`/supplier/education/certifications`)

#### 14. Settings (`/supplier/settings`)
**Sub-sections**:
- Profile Settings (`/supplier/settings/profile`)
- Company Information (`/supplier/settings/company`)
- User Management (`/supplier/settings/users`)
- Notification Preferences (`/supplier/settings/notifications`)
- Security Settings (`/supplier/settings/security`)
- API Keys (`/supplier/settings/api`)
- Integration Settings (`/supplier/settings/integrations`)
- Subscription Plan (`/supplier/settings/subscription`)
- Billing Information (`/supplier/settings/billing`)

#### 15. Support & Help (`/supplier/support`)
**Features**:
- Help Center
- FAQs
- Submit Ticket
- Live Chat
- Training Resources
- Video Tutorials
- Contact Support

---

## Admin Dashboard (Platform Management)

### Main Navigation

#### 1. Dashboard (`/admin/dashboard`)
**Widgets**:
- Platform statistics
- Revenue metrics
- User growth
- Transaction volume
- System health
- Recent activities
- Alerts and notifications

#### 2. User Management (`/admin/users`)
**Sub-sections**:
- All Users (`/admin/users/all`)
- Buyers (`/admin/users/buyers`)
- Suppliers (`/admin/users/suppliers`)
- Pending Approvals (`/admin/users/pending`)
- Suspended Users (`/admin/users/suspended`)
- User Activity Logs (`/admin/users/activity`)

#### 3. Supplier Verification (`/admin/verification`)
**Sub-sections**:
- Pending Verifications (`/admin/verification/pending`)
- Verification History (`/admin/verification/history`)
- Audit Management (`/admin/verification/audits`)
- Certification Validation (`/admin/verification/certifications`)
- Quality Checks (`/admin/verification/quality`)

#### 4. Order Management (`/admin/orders`)
**Sub-sections**:
- All Orders (`/admin/orders/all`)
- Disputed Orders (`/admin/orders/disputes`)
- Cancelled Orders (`/admin/orders/cancelled`)
- Returns Management (`/admin/orders/returns`)

#### 5. Product Management (`/admin/products`)
**Sub-sections**:
- All Products (`/admin/products/all`)
- Pending Approval (`/admin/products/pending`)
- Reported Products (`/admin/products/reported`)
- Categories Management (`/admin/products/categories`)

#### 6. Financial Management (`/admin/financial`)
**Sub-sections**:
- Revenue Dashboard (`/admin/financial/revenue`)
- Transaction Fees (`/admin/financial/fees`)
- Subscriptions (`/admin/financial/subscriptions`)
- Payouts (`/admin/financial/payouts`)
- Bill Discounting (`/admin/financial/discounting`)
- Financial Reports (`/admin/financial/reports`)

#### 7. Analytics & Reports (`/admin/analytics`)
**Sub-sections**:
- Platform Analytics (`/admin/analytics/platform`)
- User Analytics (`/admin/analytics/users`)
- Transaction Analytics (`/admin/analytics/transactions`)
- Performance Metrics (`/admin/analytics/performance`)
- Custom Reports (`/admin/analytics/custom`)

#### 8. Content Management (`/admin/content`)
**Sub-sections**:
- Pages (`/admin/content/pages`)
- Blog Posts (`/admin/content/blog`)
- Resources (`/admin/content/resources`)
- Announcements (`/admin/content/announcements`)
- Email Templates (`/admin/content/emails`)

#### 9. Marketing Management (`/admin/marketing`)
**Sub-sections**:
- Campaigns (`/admin/marketing/campaigns`)
- Promotions (`/admin/marketing/promotions`)
- SEO Management (`/admin/marketing/seo`)
- Analytics (`/admin/marketing/analytics`)

#### 10. Support Management (`/admin/support`)
**Sub-sections**:
- Tickets (`/admin/support/tickets`)
- Live Chat (`/admin/support/chat`)
- FAQs Management (`/admin/support/faqs`)
- Support Analytics (`/admin/support/analytics`)

#### 11. System Settings (`/admin/settings`)
**Sub-sections**:
- General Settings (`/admin/settings/general`)
- Payment Gateway (`/admin/settings/payments`)
- Email Configuration (`/admin/settings/email`)
- SMS Configuration (`/admin/settings/sms`)
- API Management (`/admin/settings/api`)
- Security Settings (`/admin/settings/security`)
- Backup & Recovery (`/admin/settings/backup`)

---

## Mobile Navigation Structure

### Bottom Navigation (Primary)
1. Home
2. Products/Search
3. Orders
4. Messages
5. Profile/Menu

### Hamburger Menu (Secondary)
- All other sections accessible via expandable menu
- Quick actions
- Settings
- Support

---

## Search & Filter System

### Global Search
- Products
- Suppliers
- Categories
- Resources
- Help articles

### Advanced Filters
- Category
- Price range
- Location
- Certifications
- Ratings
- Delivery time
- Sustainability metrics
- Supplier type

---

## Notification System

### Notification Types
1. Order updates
2. RFQ responses
3. Payment confirmations
4. Audit reminders
5. Certificate expiry
6. Price alerts
7. New messages
8. System announcements

### Notification Channels
- In-app notifications
- Email notifications
- SMS notifications
- Push notifications (mobile)
- WhatsApp notifications (optional)

---

## Footer Navigation

### Company
- About Us
- How It Works
- Careers
- Press & Media
- Contact Us

### For Buyers
- Browse Products
- How to Buy
- Buyer Benefits
- Success Stories

### For Suppliers
- Become a Supplier
- Supplier Benefits
- Verification Process
- Supplier Resources

### Resources
- Blog
- Case Studies
- Industry Reports
- Webinars
- Help Center

### Legal
- Terms of Service
- Privacy Policy
- Cookie Policy
- Compliance
- Refund Policy

### Connect
- Social media links
- Newsletter signup
- Mobile app download
- Contact information

---

## Breadcrumb Navigation

Implemented across all pages for easy navigation:
```
Home > Products > Category > Sub-category > Product Name
Home > Buyer Dashboard > Orders > Order Details
Home > Supplier Dashboard > Products > Edit Product
```

---

## Quick Actions (Floating/Sticky)

### Buyer Dashboard
- Quick RFQ
- Search Products
- View Cart
- Messages

### Supplier Dashboard
- Add Product
- View New Orders
- Messages
- Performance

---

## Accessibility Navigation

- Keyboard navigation support
- Screen reader compatibility
- Skip to main content
- Focus indicators
- ARIA labels
- Alt text for images

