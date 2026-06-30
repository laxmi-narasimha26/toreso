# Sitemap and Navigation - Toreso B2B Marketplace

## Site Architecture Overview

The Toreso platform consists of multiple user portals with role-specific navigation and features. The architecture follows a modular, scalable design optimized for SEO and user experience.

## URL Structure

### Base URLs
- **Production**: `https://www.Toreso.com`
- **API**: `https://api.Toreso.com`
- **Admin**: `https://admin.Toreso.com`
- **Docs**: `https://docs.Toreso.com`
- **Blog**: `https://blog.Toreso.com`

### URL Patterns
- Clean, SEO-friendly URLs
- Hierarchical structure
- Language prefix support: `/en/`, `/hi/` (for future)
- RESTful API endpoints

## Main Navigation Structure

### Public Pages (Unauthenticated)

#### 1. Home Page
**URL**: `/`
**Components**:
- Hero section with video background
- Value propositions (3 columns)
- How it works (4 steps)
- Key features showcase (6-8 features)
- Testimonials carousel
- Statistics counter (users, transactions, savings)
- Industry categories
- CTA sections (Register as Buyer / Register as Supplier)
- Footer with links

**Navigation Menu**:
- Home
- How It Works
- For Buyers
- For Suppliers
- Industries
- About Us
- Contact
- Login / Register

#### 2. How It Works
**URL**: `/how-it-works`
**Sections**:
- Overview
- For Buyers (step-by-step)
- For Suppliers (step-by-step)
- Video walkthrough
- FAQ section
- Get Started CTA

#### 3. For Buyers Landing Page
**URL**: `/for-buyers`
**Content**:
- Buyer benefits (26+ listed)
- Cost savings calculator
- Feature highlights
- Case studies
- Buyer testimonials
- Pricing overview
- Register CTA

#### 4. For Suppliers Landing Page
**URL**: `/for-suppliers`
**Content**:
- Supplier benefits (30+ listed)
- Growth opportunities
- Success stories
- Feature highlights
- Onboarding process
- Requirements checklist
- Register CTA

#### 5. Industries Page
**URL**: `/industries`
**Sub-pages**:
- `/industries/food-beverage`
- `/industries/pharmaceuticals`
- `/industries/ecommerce`
- `/industries/consumer-goods`
- `/industries/automotive`
- `/industries/electronics`
- `/industries/agriculture`
- `/industries/chemicals`
- `/industries/textiles`

Each industry page includes:
- Industry-specific packaging needs
- Featured suppliers
- Case studies
- Common products
- Compliance requirements

#### 6. About Us
**URL**: `/about`
**Content**:
- Company vision and mission
- Team profiles
- Company timeline
- Values and culture
- Press kit
- Careers

#### 7. Pricing
**URL**: `/pricing`
**Sections**:
- Buyer pricing (free to use)
- Supplier plans (Free, Professional, Enterprise)
- Transaction fees
- Value-added services pricing
- ROI calculator
- FAQ

#### 8. Contact Us
**URL**: `/contact`
**Form Fields**:
- Name, Email, Phone
- User Type (Buyer/Supplier/Other)
- Subject
- Message
- Contact information
- Office locations
- Support hours

#### 9. Authentication Pages

**Login**: `/login`
- Email/phone + password
- Social login options
- Remember me
- Forgot password link
- Register links (Buyer/Supplier)

**Register - Buyer**: `/register/buyer`
- Company information
- Contact details
- Industry selection
- Plant locations
- Tax information (GSTIN)
- Email verification

**Register - Supplier**: `/register/supplier`
- Company information
- Manufacturing capabilities
- Certifications upload
- Plant capacity
- Product categories
- Bank details
- Verification process info

**Forgot Password**: `/forgot-password`
**Reset Password**: `/reset-password/:token`
**Email Verification**: `/verify-email/:token`

#### 10. Legal Pages

- **Terms of Service**: `/terms`
- **Privacy Policy**: `/privacy`
- **Cookie Policy**: `/cookies`
- **Refund Policy**: `/refund-policy`
- **Shipping Policy**: `/shipping-policy`
- **Compliance**: `/compliance`
- **Acceptable Use**: `/acceptable-use`

#### 11. Resources

**Blog**: `/blog` (External or subdomain)
- Articles
- Industry news
- Best practices
- Product updates

**Knowledge Base**: `/help`
- Getting started
- User guides
- Video tutorials
- FAQ
- API documentation (for partners)

**Case Studies**: `/case-studies`
- Success stories
- ROI examples
- Testimonials

#### 12. Product Catalog (Public Browse)
**URL**: `/catalog` or `/products`
**Features**:
- Search bar
- Category filters
- Public product listings (limited info)
- Login prompt for prices
- Supplier preview

---

### Buyer Portal (Authenticated - Buyer Role)

#### Dashboard
**URL**: `/buyer/dashboard`
**Components**:
- Welcome message
- Key metrics (orders, spend, savings)
- Pending actions (quotes, approvals)
- Recent orders
- Favorite suppliers
- Quick actions (Create RFQ, Browse Catalog, Track Order)
- Recommended products
- Price alerts
- Upcoming deliveries

**Left Sidebar Navigation**:
- Dashboard
- Catalog
- Orders
- RFQs/RFIs
- Quotes & Negotiations
- Suppliers
- Plants & Warehouses
- Invoices & Payments
- Reports & Analytics
- Documents
- Messages
- Settings

#### 1. Catalog & Search
**URL**: `/buyer/catalog`
**Features**:
- Advanced search
- Filters (category, material, certification, supplier rating, price range, location)
- Sort options (relevance, price, rating, delivery time)
- Grid/List view toggle
- Product cards with:
  - Product image
  - Name and specifications
  - Supplier name and rating
  - Price (base/volume tiers)
  - Certifications badges
  - Add to cart / Request quote buttons
  - Compare checkbox
- Saved searches
- Recently viewed

**Product Detail**: `/buyer/product/:id`
- Image gallery with zoom
- Detailed specifications
- Price tiers (volume discounts)
- Supplier information card
- Certifications display
- Sustainability metrics
- Similar products
- Reviews and ratings
- Technical documents download
- AR view button (if available)
- Add to cart / Request quote
- Contact supplier button
- Share product

#### 2. Search Results
**URL**: `/buyer/search?q=:query`
- Search results with filters
- Saved search option
- Email alerts for new matches

#### 3. Shopping Cart
**URL**: `/buyer/cart`
**Features**:
- Line items grouped by supplier
- Quantity adjustment
- Remove items
- Save for later
- Apply coupon codes
- Volume discount indicators
- Estimated delivery dates
- Total calculation
- Plant/warehouse selection
- Bulk actions
- Export cart to CSV
- Share cart
- Proceed to checkout button

#### 4. Checkout
**URL**: `/buyer/checkout`
**Multi-step Process**:

**Step 1: Delivery Details**
- Select plant/warehouse location
- Add new address
- Delivery instructions
- Requested delivery date
- Split shipment options

**Step 2: Review Orders** (grouped by supplier)
- Order summary per supplier
- Edit quantities
- Special instructions per order
- Packaging requirements

**Step 3: Payment Method**
- Credit terms (if available)
- Online payment (Razorpay/Stripe/PayPal)
- Bank transfer
- Payment on delivery (if eligible)
- Split payment options

**Step 4: Review & Confirm**
- Final review
- Terms acceptance
- Purchase order generation
- Place order button

**Success**: `/buyer/checkout/success/:orderId`
**Failure**: `/buyer/checkout/failed`

#### 5. Orders Management
**URL**: `/buyer/orders`
**Features**:
- Order list with filters (status, date range, supplier, plant)
- Search orders
- Export to CSV/Excel
- Bulk actions
- Order status badges
- Quick actions (Track, Cancel, Reorder, Download Invoice)

**Order Detail**: `/buyer/orders/:id`
- Order information
- Status timeline
- Line items
- Supplier details
- Delivery details
- Tracking information
- Invoice download
- Payment status
- Actions (Cancel, Request Return, Contact Supplier, Report Issue)
- Order notes
- Related documents
- Chat with supplier

#### 6. RFQ Management
**URL**: `/buyer/rfq`
**List View**:
- Active RFQs
- Draft RFQs
- Closed RFQs
- Templates
- Create new RFQ button

**Create RFQ**: `/buyer/rfq/create`
**Form**:
- RFQ title
- Product category
- Detailed specifications
- Quantity required
- Delivery location
- Expected delivery date
- Budget range (optional)
- Attach technical drawings/documents
- Quality requirements
- Certifications required
- Select suppliers (or broadcast to all)
- Response deadline
- Save as template option

**RFQ Detail**: `/buyer/rfq/:id`
- RFQ information
- Supplier responses (quotes)
- Compare quotes table
- Award contract button
- Extend deadline
- Edit RFQ (if no responses)
- Communicate with suppliers
- Close RFQ

#### 7. RFI Management
**URL**: `/buyer/rfi`
**Similar structure to RFQ**
**Create RFI**: `/buyer/rfi/create`
**RFI Detail**: `/buyer/rfi/:id`

#### 8. Quotes & Negotiations
**URL**: `/buyer/quotes`
**Features**:
- Received quotes list
- Filter by status (pending, negotiating, accepted, rejected)
- Quote comparison tool
- Accept/Reject/Counter offer actions

**Quote Detail**: `/buyer/quotes/:id`
- Quote details
- Negotiation history
- Counter offer form
- Accept quote button
- Decline with reason
- Chat with supplier
- Convert to order

#### 9. Suppliers Directory
**URL**: `/buyer/suppliers`
**Features**:
- Supplier list with filters
- Search suppliers
- Filter by (category, location, rating, certifications, capacity)
- Favorite suppliers
- Recent suppliers
- Recommended suppliers

**Supplier Profile**: `/buyer/suppliers/:id`
- Company overview
- Product catalog
- Certifications
- Audit reports (if shared)
- Performance metrics
- Reviews and ratings
- Contact information
- Recent transactions
- Send inquiry button
- Add to favorites
- Start chat

#### 10. Plants & Warehouse Management
**URL**: `/buyer/plants`
**Features**:
- List of plants
- Add new plant button
- Edit/Delete plants
- Set primary plant

**Plant Detail**: `/buyer/plants/:id`
- Plant information
- Associated warehouses
- Delivery history to this plant
- Inventory at this location (if JIT enabled)
- Orders by plant
- Preferred suppliers for this plant
- Volume statistics

**Warehouses**: `/buyer/warehouses`
- Linked warehouses
- JIT inventory levels
- Reorder triggers
- Stock alerts
- Replenishment schedule

#### 11. Invoices & Payments
**URL**: `/buyer/invoices`
**Features**:
- Invoice list
- Filter by status (paid, pending, overdue)
- Payment history
- Download invoices
- Bulk download
- Payment reminders

**Invoice Detail**: `/buyer/invoices/:id`
- Invoice details
- Line items
- Payment status
- Make payment button
- Download PDF
- Dispute invoice
- Payment history
- Related order

**Payments**: `/buyer/payments`
- Payment methods on file
- Transaction history
- Add payment method
- Set default payment method
- Payment preferences

#### 12. Reports & Analytics
**URL**: `/buyer/analytics`
**Dashboards**:

**Overview Dashboard**
- Total spend analytics
- Cost savings tracking
- Order volume trends
- Supplier performance summary
- Category-wise spending
- Plant-wise analysis

**Procurement Dashboard**: `/buyer/analytics/procurement`
- Purchase patterns
- Seasonal trends
- Budget vs actual
- Category analysis
- Supplier concentration
- Lead time analysis

**Supplier Performance**: `/buyer/analytics/suppliers`
- Supplier scorecards
- On-time delivery rates
- Quality metrics
- Price competitiveness
- Response times
- Compliance scores

**Cost Analysis**: `/buyer/analytics/costs`
- Cost trends
- Savings achieved
- Volume discount impact
- Price benchmarking
- TCO analysis

**Custom Reports**: `/buyer/analytics/reports`
- Report builder
- Saved reports
- Scheduled reports
- Export options

#### 13. Documents
**URL**: `/buyer/documents`
**Categories**:
- Purchase orders
- Invoices
- Contracts
- Certificates
- Quality reports
- Compliance documents
- Technical specifications
- Upload documents
- Document search
- Folder organization

#### 14. Messages
**URL**: `/buyer/messages`
**Features**:
- Inbox / Sent / Archived
- Conversations by supplier
- Real-time chat
- File sharing
- Search messages
- Message notifications
- Start new conversation

**Chat Interface**: `/buyer/messages/:conversationId`
- Message thread
- File attachments
- Order references
- Quick replies
- Typing indicators
- Read receipts

#### 15. Notifications
**URL**: `/buyer/notifications`
**Types**:
- Order updates
- RFQ responses
- Quote received
- Payment reminders
- Price alerts
- Certification expiry alerts
- System announcements
- Mark as read
- Notification preferences

#### 16. Settings
**URL**: `/buyer/settings`

**Sub-sections**:

**Profile**: `/buyer/settings/profile`
- Company information
- Contact person
- Tax information
- Logo upload

**Account**: `/buyer/settings/account`
- Email/phone
- Password change
- Two-factor authentication
- Session management

**Team**: `/buyer/settings/team`
- Team members list
- Invite members
- Role assignment
- Permissions management
- Activity logs

**Plants**: `/buyer/settings/plants`
- Manage plant locations
- Add/edit/delete

**Preferences**: `/buyer/settings/preferences`
- Language
- Currency
- Time zone
- Email notifications
- SMS notifications
- Price alert settings

**Billing**: `/buyer/settings/billing`
- Payment methods
- Billing address
- Tax information
- Transaction history
- Subscription (if applicable)

**Integrations**: `/buyer/settings/integrations`
- ERP integration
- Accounting software
- API keys
- Webhooks
- Connected apps

**Security**: `/buyer/settings/security`
- Login history
- Active sessions
- Security settings
- Audit logs

---

### Supplier Portal (Authenticated - Supplier Role)

#### Dashboard
**URL**: `/supplier/dashboard`
**Components**:
- Welcome message
- Key metrics (orders, revenue, rating)
- Pending actions (quotes to respond, orders to fulfill)
- Recent orders
- Performance score
- Quick actions (Add Product, View RFQs, Manage Inventory)
- Revenue analytics
- Upcoming audits/certifications
- Buyer inquiries

**Left Sidebar Navigation**:
- Dashboard
- Products
- Orders
- RFQs/RFIs
- Quotes
- Buyers
- Inventory
- Warehouse
- Logistics
- Invoices & Payments
- Finance (Invoice Discounting)
- Performance
- Audits & Certifications
- Reports & Analytics
- Documents
- Messages
- Settings

#### 1. Product Management
**URL**: `/supplier/products`
**Features**:
- Product list (grid/table view)
- Add product button
- Bulk actions (activate, deactivate, delete)
- Search and filter products
- Product categories
- Stock status indicators

**Add Product**: `/supplier/products/create`
**Form Sections**:
- Basic Information (name, SKU, category, description)
- Specifications (dimensions, weight, material, color)
- Pricing (base price, volume tiers, minimum order quantity)
- Images (multiple uploads, 360-degree view)
- Certifications applicable
- Manufacturing details (lead time, capacity)
- Shipping information
- SEO fields (meta title, description, keywords)
- Tags
- Sustainability metrics
- Related products
- AR model upload (optional)

**Edit Product**: `/supplier/products/:id/edit`
**Product Detail**: `/supplier/products/:id`
- Product information
- Performance metrics (views, inquiries, orders)
- Pricing history
- Inventory levels
- Active promotions
- Reviews from buyers
- Edit button
- Duplicate button
- Deactivate/Delete

#### 2. Orders Management
**URL**: `/supplier/orders`
**Features**:
- Order list with filters (status, date, buyer, plant)
- New orders alerts
- Accept/Reject order actions
- Bulk actions
- Export orders

**Order Detail**: `/supplier/orders/:id`
- Order information
- Buyer details
- Line items
- Accept order button (if pending)
- Update order status
- Upload invoice
- Add tracking information
- Communication thread
- Delivery proof upload
- Generate shipping label
- Print packing slip

#### 3. RFQ/RFI Responses
**URL**: `/supplier/rfq`
**Features**:
- Available RFQs (matching supplier capabilities)
- Responded RFQs
- Awarded RFQs
- Filters (category, buyer, location, date)
- Watch/bookmark RFQs

**RFQ Detail**: `/supplier/rfq/:id`
- RFQ details and specifications
- Respond to RFQ form:
  - Price quote
  - Quantity confirmation
  - Delivery timeline
  - Terms and conditions
  - Attach documents
  - Validity period
- Submit quote button
- Decline with reason
- Ask questions to buyer

**RFI Listing**: `/supplier/rfi`
**RFI Detail**: `/supplier/rfi/:id`

#### 4. Quotes Management
**URL**: `/supplier/quotes`
**Features**:
- Submitted quotes list
- Status tracking (pending, negotiating, accepted, rejected)
- Quote revisions
- Negotiation history

**Quote Detail**: `/supplier/quotes/:id`
- Quote information
- Buyer responses
- Negotiation thread
- Revise quote option
- Convert to order (if accepted)
- Withdraw quote

#### 5. Buyers Directory
**URL**: `/supplier/buyers`
**Features**:
- Active buyers list
- Potential buyers (viewed profile)
- Filter by industry, location, volume
- Buyer insights (order frequency, average order value)

**Buyer Profile**: `/supplier/buyers/:id`
- Company information
- Purchase history with supplier
- Payment behavior
- Communication history
- Send message

#### 6. Inventory Management
**URL**: `/supplier/inventory`
**Features**:
- Stock levels by product
- Low stock alerts
- Reorder triggers
- Inventory by location (if multiple warehouses)
- Stock movement history
- Adjust stock levels
- Bulk upload stock data
- Stock valuation

**Stock Adjustment**: `/supplier/inventory/adjust`
- Product selection
- Quantity adjustment
- Reason (received, damaged, sold, returned)
- Notes

#### 7. Warehouse Management
**URL**: `/supplier/warehouses`
**Features**:
- Warehouse locations
- Stock by warehouse
- Transfer stock between warehouses
- Warehouse capacity
- JIT inventory tracking (for buyers with JIT agreements)

**Warehouse Detail**: `/supplier/warehouses/:id`
- Warehouse information
- Products stored
- Capacity utilization
- Linked buyer plants
- Replenishment schedule
- Stock movements

#### 8. Logistics & Tracking
**URL**: `/supplier/logistics`
**Features**:
- Active shipments
- Create shipment
- Tracking information management
- Logistics partner integration
- Delivery proof uploads
- Failed delivery management
- Return shipments

**Shipment Detail**: `/supplier/logistics/:id`
- Shipment details
- Order reference
- Tracking number
- Current status and location
- Update tracking
- Delivery confirmation
- Upload proof of delivery
- Report issues

#### 9. Invoices & Payments
**URL**: `/supplier/invoices`
**Features**:
- Invoice list
- Create invoice
- Invoice status (draft, sent, paid, overdue)
- Payment received tracking
- Download invoices
- Send reminder

**Create Invoice**: `/supplier/invoices/create`
- Link to order
- Invoice details
- Line items
- Tax calculations (GST)
- Payment terms
- Bank details
- Generate PDF
- Send to buyer

**Invoice Detail**: `/supplier/invoices/:id`
- Invoice information
- Payment status
- Download PDF
- Send/resend to buyer
- Mark as paid
- Apply for invoice discounting
- Payment reminders

**Payments Received**: `/supplier/payments`
- Payment history
- Transaction details
- Bank account management
- Payout schedule

#### 10. Finance - Invoice Discounting
**URL**: `/supplier/finance`
**Features**:
- Invoice discounting dashboard
- Eligible invoices
- Applied for discounting
- Approved/disbursed
- Repayment schedule
- Finance partners

**Apply for Discounting**: `/supplier/finance/apply`
- Select eligible invoices
- Discounting amount
- Terms acceptance
- Submit application
- Track application status

#### 11. Performance Analytics
**URL**: `/supplier/performance`
**Dashboards**:

**Overview**
- Overall rating
- Total orders
- Revenue trends
- Key performance indicators

**Order Performance**
- On-time delivery rate
- Order fulfillment rate
- Average processing time
- Rejection rate

**Quality Metrics**
- Quality score
- Defect rate
- Returns and complaints
- Buyer satisfaction

**Response Metrics**
- RFQ response rate
- Quote win rate
- Average response time
- Communication rating

**Comparative Analysis**
- Benchmark vs category average
- Rating trends
- Areas for improvement

#### 12. Audits & Certifications
**URL**: `/supplier/audits`
**Features**:
- Upcoming audits calendar
- Audit history
- Audit reports download
- Schedule audit request
- Audit checklist
- Audit types (initial, renewal, surprise, buyer-specific)

**Audit Detail**: `/supplier/audits/:id`
- Audit information
- Auditor details
- Checklist
- Findings
- Corrective actions
- Upload documents
- Audit report PDF

**Certifications**: `/supplier/certifications`
**Features**:
- Active certifications list
- Expired certifications
- Expiring soon alerts
- Upload certificate
- Renewal reminders
- Certification types (ISO, FDA, etc.)

**Add Certification**: `/supplier/certifications/add`
- Certification type
- Issuing authority
- Issue date
- Expiry date
- Upload document
- Scope/description

#### 13. Reports & Analytics
**URL**: `/supplier/analytics`
**Dashboards**:

**Sales Dashboard**
- Revenue trends
- Order volume
- Average order value
- Top products
- Top buyers
- Seasonal patterns

**Product Performance**
- Product views
- Conversion rates
- Best sellers
- Slow-moving inventory
- Pricing optimization

**Buyer Analytics**
- Buyer segments
- Repeat purchase rate
- Customer lifetime value
- Churn analysis

**Financial Reports**
- Revenue reports
- Outstanding payments
- Profit margins
- Cost analysis

**Custom Reports**
- Report builder
- Saved reports
- Export options

#### 14. Documents
**URL**: `/supplier/documents`
**Categories**:
- Company documents
- Product catalogs
- Certificates
- Audit reports
- Contracts
- Tax documents
- Compliance documents
- Upload/organize documents

#### 15. Messages
**URL**: `/supplier/messages`
**Features**: (Similar to buyer messages)
- Conversations with buyers
- Real-time chat
- File sharing
- RFQ/order context

#### 16. Notifications
**URL**: `/supplier/notifications`
**Types**:
- New orders
- New RFQs
- Quote responses
- Payment received
- Audit reminders
- Certification expiry
- Performance alerts
- System announcements

#### 17. Settings
**URL**: `/supplier/settings`

**Profile**: `/supplier/settings/profile`
- Company information
- Manufacturing capabilities
- Product categories
- Plant capacity
- Certifications
- Logo and images

**Account**: `/supplier/settings/account`
- Login credentials
- Password change
- Two-factor authentication

**Team**: `/supplier/settings/team`
- Team members
- Roles and permissions
- Activity logs

**Business Information**: `/supplier/settings/business`
- Tax information (GSTIN)
- Bank details
- Legal documents
- Business licenses

**Preferences**: `/supplier/settings/preferences`
- Notifications
- Language/currency
- Email preferences
- RFQ matching criteria

**Subscription**: `/supplier/settings/subscription`
- Current plan
- Upgrade/downgrade
- Billing history
- Payment method

**Integrations**: `/supplier/settings/integrations`
- ERP integration
- Accounting software
- Logistics partners
- API access

---

### Admin Portal (Authenticated - Admin Role)

**Base URL**: `/admin` or subdomain `admin.Toreso.com`

#### Dashboard
**URL**: `/admin/dashboard`
**Metrics**:
- Total users (buyers, suppliers)
- Active users
- Total orders and GMV
- Revenue (transaction fees, subscriptions)
- System health
- Pending verifications
- Active support tickets
- Recent activities

**Left Sidebar Navigation**:
- Dashboard
- Users
- Suppliers
- Buyers
- Products
- Orders
- RFQs
- Quotes
- Audits
- Certifications
- Payments
- Finance Management
- Content Management
- Reports
- Settings
- System Logs

#### 1. User Management
**URL**: `/admin/users`
**Features**:
- All users list
- Filter by role, status, registration date
- Search users
- User actions (activate, deactivate, delete, impersonate)
- Bulk actions
- Export user data

**User Detail**: `/admin/users/:id`
- User profile
- Activity history
- Login history
- Orders/transactions
- Support tickets
- Edit user
- Reset password
- Suspend/activate account

#### 2. Supplier Management
**URL**: `/admin/suppliers`
**Features**:
- Supplier list
- Verification status filters (pending, verified, suspended)
- Approve/reject suppliers
- Verification workflow
- Supplier metrics

**Supplier Detail**: `/admin/suppliers/:id`
- Complete supplier profile
- Verification documents
- Approve/reject verification
- Request additional documents
- Performance metrics
- Orders and revenue
- Buyer feedback
- Audit history
- Suspend/activate
- Edit information

**Supplier Verification Queue**: `/admin/suppliers/verification`
- Pending verifications
- Review documents
- Approve/reject workflow
- Request more information

#### 3. Buyer Management
**URL**: `/admin/buyers`
**Features**:
- Buyer list
- Company details
- Verification status
- Purchase volume
- Approve/suspend buyers

**Buyer Detail**: `/admin/buyers/:id`
- Company profile
- Plants list
- Order history
- Spend analytics
- Supplier relationships
- Support tickets

#### 4. Product Management
**URL**: `/admin/products`
**Features**:
- All products list
- Approve/reject products
- Featured products management
- Category management
- Product flags/reports
- Bulk actions

**Product Detail**: `/admin/products/:id`
- Product information
- Supplier details
- Performance metrics
- Edit/approve/reject
- Feature product
- Deactivate product

**Categories**: `/admin/products/categories`
- Category tree
- Add/edit/delete categories
- Category attributes
- SEO settings per category

#### 5. Order Management
**URL**: `/admin/orders`
**Features**:
- All orders list
- Filter by status, date, value
- Search orders
- Order metrics
- Dispute management
- Export orders

**Order Detail**: `/admin/orders/:id`
- Complete order information
- Buyer and supplier details
- Payment status
- Tracking information
- Communication logs
- Resolve disputes
- Refund processing

#### 6. RFQ/RFI Management
**URL**: `/admin/rfqs`
**Features**:
- Active RFQs
- Monitor RFQ activities
- Flag inappropriate RFQs
- Analytics

#### 7. Audit Management
**URL**: `/admin/audits`
**Features**:
- Audit schedule
- Assign auditors
- Audit reports repository
- Audit types management
- Auditor management
- Compliance tracking

**Auditor Management**: `/admin/audits/auditors`
- Panel auditors list
- Add/approve auditors
- Auditor assignments
- Performance tracking

**Schedule Audit**: `/admin/audits/schedule`
- Select supplier
- Audit type
- Assign auditor
- Schedule date
- Checklist template

#### 8. Certification Management
**URL**: `/admin/certifications`
**Features**:
- All certifications
- Expiring certifications
- Verification status
- Certificate types management
- Renewal tracking

#### 9. Payment & Finance Management
**URL**: `/admin/payments`
**Features**:
- Transaction monitoring
- Payment gateway reconciliation
- Failed payments
- Refunds management
- Revenue reports

**Invoice Discounting**: `/admin/finance/discounting`
- Applications list
- Approve/reject applications
- Partner management
- Disbursement tracking

#### 10. Content Management
**URL**: `/admin/content`

**Blog**: `/admin/content/blog`
- Posts list
- Create/edit/delete posts
- Categories and tags
- SEO settings

**Pages**: `/admin/content/pages`
- Static pages management
- Edit content
- SEO meta tags

**Testimonials**: `/admin/content/testimonials`
- Manage testimonials
- Approve/feature

**Industries**: `/admin/content/industries`
- Industry pages content
- Featured suppliers per industry

**Banners & Promotions**: `/admin/content/banners`
- Homepage banners
- Promotional campaigns
- Featured listings

#### 11. Reports & Analytics
**URL**: `/admin/reports`
**Dashboards**:
- Platform overview
- User acquisition
- Transaction volumes
- Revenue analytics
- User engagement
- Supplier performance
- Buyer behavior
- Geographic distribution
- Category performance
- Custom reports

#### 12. Settings
**URL**: `/admin/settings`

**General**: `/admin/settings/general`
- Site settings
- Company information
- Contact details
- Maintenance mode

**Payment Gateways**: `/admin/settings/payments`
- Configure Razorpay
- Configure Stripe
- Configure PayPal
- Transaction fees

**Email/SMS**: `/admin/settings/notifications`
- Email templates
- SMS templates
- Notification settings
- Service providers

**Integrations**: `/admin/settings/integrations`
- Logistics partners
- Blockchain configuration
- AR service
- Analytics tracking codes

**Security**: `/admin/settings/security`
- Access controls
- API keys
- Webhook management
- Security policies

**Localization**: `/admin/settings/localization`
- Languages
- Currencies
- Tax rates
- Regions

#### 13. System Logs
**URL**: `/admin/logs`
- Activity logs
- Error logs
- API logs
- Login attempts
- Audit trail

---

### Auditor Portal (Authenticated - Auditor Role)

#### Dashboard
**URL**: `/auditor/dashboard`
**Components**:
- Assigned audits
- Upcoming audits calendar
- Completed audits
- Pending reports

**Navigation**:
- Dashboard
- Assigned Audits
- Audit History
- Suppliers
- Reports
- Calendar
- Settings

#### Audit Management
**URL**: `/auditor/audits`

**Audit Detail**: `/auditor/audits/:id`
- Audit information
- Supplier details
- Audit checklist
- Submit findings
- Upload report
- Schedule follow-up

---

### API Documentation Portal

**URL**: `/developers` or `docs.Toreso.com`
**Content**:
- API overview
- Authentication guide
- Endpoint documentation
- Code examples
- SDKs
- Webhooks documentation
- Rate limits
- API changelog
- Support

---

## Navigation Components

### Header (Public)
**Elements**:
- Logo (links to home)
- Main navigation menu
- Search bar (after login)
- Language selector
- Login button
- Register dropdown (Buyer/Supplier)

### Header (Authenticated)
**Elements**:
- Logo
- Global search
- Quick actions (Create RFQ, Add Product - role based)
- Notifications bell (with count badge)
- Messages icon (with unread count)
- User profile dropdown:
  - Dashboard
  - My Profile
  - Settings
  - Help Center
  - Logout

### Footer (All Pages)
**Sections**:

**Company**
- About Us
- How It Works
- Careers
- Press
- Contact Us

**For Buyers**
- Benefits
- Pricing
- Case Studies
- Register

**For Suppliers**
- Benefits
- Get Verified
- Success Stories
- Register

**Resources**
- Help Center
- Blog
- API Docs
- Guides & Tutorials

**Legal**
- Terms of Service
- Privacy Policy
- Cookie Policy
- Compliance

**Connect**
- Social media links
- Newsletter signup
- Mobile app links (future)

**Bottom Bar**:
- Copyright
- Language selector
- Currency selector
- Trust badges (secure payment, verified suppliers)

### Sidebar (Dashboard Pages)
**Features**:
- Collapsible
- Icon + text navigation
- Active state indicators
- Badge counts (notifications, pending actions)
- Quick actions button at bottom
- Help/support link
- Responsive (drawer on mobile)

### Breadcrumbs
**Used on**:
- All dashboard pages
- Product detail pages
- Multi-step processes
**Format**: `Home > Dashboard > Orders > Order #12345`

### Mobile Navigation
**Features**:
- Hamburger menu
- Bottom tab bar (mobile app-like)
- Swipe gestures
- Responsive tables
- Mobile-optimized forms

---

## SEO URL Structure

### Product URLs
- `/product/:category/:subcategory/:product-name-:id`
- Example: `/product/corrugated-boxes/shipping-boxes/heavy-duty-shipping-box-12345`

### Supplier URLs
- `/suppliers/:company-name-:id`
- Example: `/suppliers/abc-packaging-solutions-67890`

### Category URLs
- `/category/:category-name`
- Example: `/category/corrugated-boxes`

### Industry URLs
- `/industries/:industry-name`
- Example: `/industries/food-beverage`

### Blog URLs
- `/blog/:year/:month/:post-slug`
- Example: `/blog/2024/01/sustainable-packaging-trends`

---

## Redirect Rules

1. **Old URLs**: Redirect to new structure with 301
2. **Trailing slashes**: Consistent handling
3. **HTTP to HTTPS**: Force HTTPS
4. **www to non-www**: Canonical preference
5. **Login required**: Redirect to `/login?redirect=:originalUrl`
6. **404 pages**: Custom 404 with search and suggestions
7. **Maintenance mode**: Custom maintenance page

---

## Accessibility Navigation

1. **Skip to main content** link
2. **Keyboard navigation** support
3. **ARIA labels** on all interactive elements
4. **Focus indicators** clearly visible
5. **Screen reader** friendly structure
6. **Alt text** on all images
7. **Semantic HTML** structure

---

## Performance Optimization

1. **Lazy loading**: Images and components below fold
2. **Code splitting**: Route-based splitting
3. **Prefetching**: Next page predictions
4. **Service worker**: Offline support for key pages
5. **CDN**: Static assets served from CDN
6. **Image optimization**: WebP with fallbacks
7. **Critical CSS**: Inline critical styles

---

**Document Version**: 1.0  
**Last Updated**: 2024  
**Status**: Planning Phase

