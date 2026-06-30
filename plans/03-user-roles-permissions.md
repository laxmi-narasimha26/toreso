# User Roles and Permissions - Toreso B2B Marketplace

## Role-Based Access Control (RBAC) System

The Toreso platform implements a comprehensive role-based access control system to ensure secure and appropriate access to features and data based on user roles.

## User Roles Overview

### Primary Roles
1. **Buyer** - Companies purchasing packaging materials
2. **Supplier** - Manufacturers and sellers of packaging materials
3. **Admin** - Platform administrators
4. **Auditor** - Quality and compliance auditors
5. **Finance Manager** - Invoice discounting and financial services

### Sub-Roles (Team Members)
6. **Buyer - Procurement Manager** - Full procurement access for buyer organization
7. **Buyer - Plant Manager** - Plant-specific access
8. **Buyer - Finance** - Invoice and payment access
9. **Buyer - View Only** - Read-only access to buyer data
10. **Supplier - Admin** - Full supplier account access
11. **Supplier - Sales** - Order and quote management
12. **Supplier - Inventory Manager** - Stock and warehouse management
13. **Supplier - Finance** - Invoice and payment access
14. **Super Admin** - Full system access

---

## Detailed Role Permissions

### 1. BUYER ROLE

#### Account & Profile Management
- ✅ View own company profile
- ✅ Edit company information
- ✅ Manage team members
- ✅ Invite new team members
- ✅ Assign roles to team members
- ✅ Manage plants and locations
- ✅ Upload company documents
- ✅ Manage payment methods
- ❌ Access other buyer's data
- ❌ Access supplier backend

#### Product Catalog & Search
- ✅ Browse product catalog
- ✅ Search products
- ✅ View product details
- ✅ View supplier profiles
- ✅ Save favorite products
- ✅ Compare products
- ✅ View pricing (authenticated)
- ✅ View certifications
- ✅ Download product specifications
- ✅ Use AR visualization
- ✅ View sustainability metrics
- ❌ Edit product information
- ❌ Add products

#### Shopping & Orders
- ✅ Add products to cart
- ✅ Manage shopping cart
- ✅ Create orders
- ✅ Place orders
- ✅ View order history
- ✅ Track orders
- ✅ Cancel orders (within policy)
- ✅ Download invoices
- ✅ Request returns
- ✅ Reorder previous orders
- ✅ Bulk ordering
- ✅ Schedule orders
- ❌ Modify orders after supplier acceptance
- ❌ Access other buyer's orders

#### RFQ/RFI Management
- ✅ Create RFQ (Request for Quote)
- ✅ Create RFI (Request for Information)
- ✅ Edit draft RFQs/RFIs
- ✅ Publish RFQs/RFIs
- ✅ Select target suppliers
- ✅ Receive quotes
- ✅ Compare quotes
- ✅ Award contracts
- ✅ Decline quotes
- ✅ Extend RFQ deadlines
- ✅ Close RFQs
- ✅ Save RFQ templates
- ✅ View RFQ history
- ❌ Delete RFQs with responses

#### Negotiation & Communication
- ✅ Send inquiries to suppliers
- ✅ Chat with suppliers
- ✅ Upload files in chat
- ✅ Negotiate pricing
- ✅ Accept/reject offers
- ✅ Make counter offers
- ✅ View negotiation history
- ❌ Communicate with other buyers

#### Supplier Management
- ✅ View supplier directory
- ✅ Search suppliers
- ✅ Filter suppliers
- ✅ View supplier profiles
- ✅ View supplier ratings and reviews
- ✅ Rate suppliers
- ✅ Write reviews
- ✅ Report suppliers
- ✅ Save favorite suppliers
- ✅ View supplier certifications
- ✅ View audit reports (if shared)
- ✅ Request supplier information
- ❌ Approve/verify suppliers
- ❌ Edit supplier profiles

#### Plant & Warehouse Management
- ✅ Add plants/locations
- ✅ Edit plant information
- ✅ Delete plants
- ✅ Link warehouses to plants
- ✅ View JIT inventory at warehouses
- ✅ Set reorder points
- ✅ View plant-wise analytics
- ✅ Manage plant-specific preferences

#### Payments & Invoices
- ✅ View invoices
- ✅ Download invoices
- ✅ Make payments
- ✅ Save payment methods
- ✅ View payment history
- ✅ Set up automatic payments
- ✅ Dispute invoices
- ✅ Request payment terms
- ✅ Apply credit terms
- ❌ Modify invoices
- ❌ Access other buyer's invoices

#### Reports & Analytics
- ✅ View procurement dashboard
- ✅ View spend analytics
- ✅ View supplier performance reports
- ✅ View cost savings reports
- ✅ Export reports
- ✅ Schedule reports
- ✅ View price trends
- ✅ View demand forecasts
- ✅ Benchmark against industry
- ✅ View sustainability reports
- ❌ View platform-wide analytics
- ❌ View other buyer's data

#### Document Management
- ✅ Upload documents
- ✅ Organize documents
- ✅ Download documents
- ✅ Share documents with suppliers
- ✅ Archive documents
- ❌ Access supplier's private documents

#### Notifications & Settings
- ✅ View notifications
- ✅ Configure notification preferences
- ✅ Set price alerts
- ✅ Set stock alerts
- ✅ Email preferences
- ✅ SMS preferences
- ✅ Account settings
- ✅ Privacy settings
- ✅ Integrations setup

#### Compliance & Audits
- ✅ View audit requirements
- ✅ Request supplier audits
- ✅ View audit reports
- ✅ Track compliance status
- ✅ Download compliance documents
- ❌ Conduct audits
- ❌ Approve/reject audit reports

---

### 2. SUPPLIER ROLE

#### Account & Profile Management
- ✅ View company profile
- ✅ Edit company information
- ✅ Upload company logo
- ✅ Manage certifications
- ✅ Upload audit reports
- ✅ Manage team members
- ✅ Invite team members
- ✅ Assign roles
- ✅ Update manufacturing capabilities
- ✅ Manage bank details
- ✅ Subscription management
- ❌ Access buyer backend
- ❌ Access other supplier's data

#### Product Management
- ✅ Add products
- ✅ Edit products
- ✅ Delete products
- ✅ Upload product images
- ✅ Set pricing
- ✅ Set volume discounts
- ✅ Manage inventory
- ✅ Set MOQ (Minimum Order Quantity)
- ✅ Add product specifications
- ✅ Upload technical documents
- ✅ Set lead times
- ✅ Activate/deactivate products
- ✅ Feature products (premium)
- ✅ View product analytics
- ✅ Upload AR models
- ❌ Edit other supplier's products
- ❌ Override platform policies

#### Orders Management
- ✅ View incoming orders
- ✅ Accept orders
- ✅ Reject orders (with reason)
- ✅ Update order status
- ✅ Mark orders as shipped
- ✅ Add tracking information
- ✅ Upload delivery proof
- ✅ Generate invoices
- ✅ Process returns
- ✅ View order history
- ✅ Export orders
- ✅ Print packing slips
- ✅ Generate shipping labels
- ❌ Cancel orders after acceptance (requires buyer approval)
- ❌ Modify buyer's orders

#### RFQ/RFI Responses
- ✅ View available RFQs
- ✅ View RFQ details
- ✅ Submit quotes
- ✅ Edit quotes (before deadline)
- ✅ Withdraw quotes
- ✅ View quote status
- ✅ Upload supporting documents
- ✅ Ask clarification questions
- ✅ View RFI details
- ✅ Respond to RFIs
- ✅ Bookmark RFQs
- ❌ Create RFQs
- ❌ View quotes from other suppliers

#### Pricing & Quotes
- ✅ Set base prices
- ✅ Create volume discount tiers
- ✅ Set special pricing
- ✅ Create promotional offers
- ✅ Negotiate prices
- ✅ Accept/reject counter offers
- ✅ View pricing history
- ✅ Set dynamic pricing rules
- ✅ View competitor pricing (anonymized)
- ❌ See other supplier's actual prices
- ❌ Collude on pricing

#### Negotiation & Communication
- ✅ Chat with buyers
- ✅ Respond to inquiries
- ✅ Upload files in chat
- ✅ Send offers
- ✅ Negotiate terms
- ✅ View communication history
- ❌ Spam buyers
- ❌ Communicate with other suppliers (unless collaboration feature)

#### Inventory & Warehouse
- ✅ Manage inventory levels
- ✅ Set reorder points
- ✅ Receive stock alerts
- ✅ Transfer stock between warehouses
- ✅ Add warehouse locations
- ✅ Manage JIT inventory for buyers
- ✅ View stock movement history
- ✅ Bulk update inventory
- ✅ Import inventory via CSV
- ✅ View stock valuation

#### Logistics & Tracking
- ✅ Create shipments
- ✅ Add tracking information
- ✅ Update tracking status
- ✅ Integrate logistics partners
- ✅ Generate shipping labels
- ✅ Upload proof of delivery
- ✅ Handle failed deliveries
- ✅ Manage return shipments
- ✅ View logistics analytics

#### Invoices & Payments
- ✅ Create invoices
- ✅ Send invoices to buyers
- ✅ View invoice status
- ✅ Track payments
- ✅ View payment history
- ✅ Download payment reports
- ✅ Manage bank accounts
- ✅ Set payment terms
- ✅ Send payment reminders
- ❌ Modify invoices after buyer acceptance
- ❌ Forge invoices

#### Invoice Discounting (Finance)
- ✅ View eligible invoices
- ✅ Apply for invoice discounting
- ✅ Track discounting applications
- ✅ View discounting terms
- ✅ Accept/reject discounting offers
- ✅ Track repayments
- ✅ View finance history
- ❌ Override discounting terms

#### Buyer Relations
- ✅ View buyer directory (limited)
- ✅ View active buyers
- ✅ View buyer purchase history (with supplier)
- ✅ View buyer ratings
- ✅ Send messages to buyers
- ❌ View all buyer information
- ❌ Access buyer's private data

#### Performance & Analytics
- ✅ View performance dashboard
- ✅ View ratings and reviews
- ✅ View sales analytics
- ✅ View product performance
- ✅ View order metrics
- ✅ View quality metrics
- ✅ View delivery performance
- ✅ Export reports
- ✅ Benchmark against category
- ❌ Manipulate ratings
- ❌ View other supplier's performance

#### Audits & Certifications
- ✅ View audit schedule
- ✅ Request audits
- ✅ View audit reports
- ✅ Upload audit documents
- ✅ Respond to audit findings
- ✅ Upload certifications
- ✅ Renew certifications
- ✅ Receive expiry notifications
- ✅ Share certifications with buyers
- ❌ Modify audit reports
- ❌ Bypass audit requirements

#### Reports & Analytics
- ✅ View sales reports
- ✅ View revenue reports
- ✅ View product analytics
- ✅ View buyer analytics
- ✅ View performance metrics
- ✅ Export reports
- ✅ Schedule reports
- ✅ Custom report builder
- ❌ View platform-wide data
- ❌ View other supplier's data

#### Marketing & Promotions
- ✅ Create promotional campaigns (premium)
- ✅ Feature products (premium)
- ✅ Run advertisements (premium)
- ✅ View marketing analytics
- ✅ Manage promotional budgets
- ❌ Access buyer contact lists directly

#### Settings & Integrations
- ✅ Account settings
- ✅ Notification preferences
- ✅ Team management
- ✅ API access (premium)
- ✅ ERP integration
- ✅ Accounting software integration
- ✅ Webhook configuration
- ✅ Security settings

---

### 3. ADMIN ROLE

#### User Management
- ✅ View all users
- ✅ Search users
- ✅ Filter users
- ✅ View user details
- ✅ Edit user information
- ✅ Activate users
- ✅ Deactivate/suspend users
- ✅ Delete users (soft delete)
- ✅ Reset user passwords
- ✅ Impersonate users (for support)
- ✅ View user activity logs
- ✅ Export user data
- ✅ Bulk user operations

#### Buyer Management
- ✅ View all buyers
- ✅ Approve buyer registrations
- ✅ Verify buyer documents
- ✅ Edit buyer information
- ✅ View buyer analytics
- ✅ Suspend buyers
- ✅ View buyer orders
- ✅ View buyer disputes
- ✅ Resolve buyer issues

#### Supplier Management
- ✅ View all suppliers
- ✅ Review supplier applications
- ✅ Approve/reject suppliers
- ✅ Verify supplier documents
- ✅ Verify certifications
- ✅ Edit supplier information
- ✅ Suspend suppliers
- ✅ View supplier performance
- ✅ Manage supplier tiers
- ✅ Handle supplier disputes
- ✅ Assign audits to suppliers

#### Product Management
- ✅ View all products
- ✅ Approve/reject products
- ✅ Edit product information
- ✅ Deactivate products
- ✅ Feature products
- ✅ Manage product categories
- ✅ Create categories
- ✅ Edit category attributes
- ✅ Manage product flags/reports
- ✅ Bulk product operations

#### Order Management
- ✅ View all orders
- ✅ Search orders
- ✅ Filter orders
- ✅ View order details
- ✅ Monitor order status
- ✅ Resolve order disputes
- ✅ Cancel orders (with authorization)
- ✅ Process refunds
- ✅ View order analytics
- ✅ Export order data

#### RFQ/RFI Management
- ✅ View all RFQs/RFIs
- ✅ Monitor RFQ activities
- ✅ Flag inappropriate RFQs
- ✅ Close RFQs (if needed)
- ✅ View RFQ analytics
- ✅ Resolve RFQ disputes

#### Payment & Finance Management
- ✅ View all transactions
- ✅ Monitor payment status
- ✅ Process refunds
- ✅ Resolve payment disputes
- ✅ View transaction fees
- ✅ Manage payment gateways
- ✅ View revenue reports
- ✅ Reconcile payments
- ✅ Manage invoice discounting
- ✅ Approve discounting applications
- ✅ Monitor financial health

#### Audit Management
- ✅ View all audits
- ✅ Schedule audits
- ✅ Assign auditors
- ✅ Manage auditor accounts
- ✅ Approve audit reports
- ✅ View audit compliance
- ✅ Manage audit templates
- ✅ Track audit metrics
- ✅ Handle audit disputes

#### Certification Management
- ✅ View all certifications
- ✅ Verify certifications
- ✅ Approve/reject certifications
- ✅ Track expiring certifications
- ✅ Manage certification types
- ✅ Set certification requirements

#### Content Management
- ✅ Manage blog posts
- ✅ Edit static pages
- ✅ Manage testimonials
- ✅ Manage banners
- ✅ Manage promotional content
- ✅ Edit industry pages
- ✅ Manage FAQs
- ✅ Update help articles
- ✅ Manage email templates
- ✅ Manage SMS templates

#### Reports & Analytics
- ✅ View platform analytics
- ✅ View user metrics
- ✅ View transaction metrics
- ✅ View revenue reports
- ✅ View growth metrics
- ✅ View engagement metrics
- ✅ Create custom reports
- ✅ Export analytics data
- ✅ Schedule reports
- ✅ View real-time dashboard

#### System Configuration
- ✅ General site settings
- ✅ Configure payment gateways
- ✅ Manage integrations
- ✅ Email/SMS settings
- ✅ Notification templates
- ✅ Tax configuration
- ✅ Currency settings
- ✅ Language settings
- ✅ Security settings
- ✅ API configuration
- ✅ Blockchain settings
- ✅ Feature flags
- ✅ Maintenance mode

#### System Monitoring
- ✅ View system logs
- ✅ View error logs
- ✅ View API logs
- ✅ Monitor system health
- ✅ View performance metrics
- ✅ View security alerts
- ✅ Manage backups
- ✅ Database management

#### Support & Moderation
- ✅ View support tickets
- ✅ Respond to tickets
- ✅ Assign tickets
- ✅ Close tickets
- ✅ Moderate content
- ✅ Handle reports
- ✅ Ban users (with reason)
- ✅ Review appeals

---

### 4. AUDITOR ROLE

#### Profile Management
- ✅ View own profile
- ✅ Edit profile
- ✅ Upload credentials
- ✅ Manage availability
- ❌ Access buyer/supplier data (except audit assignments)

#### Audit Management
- ✅ View assigned audits
- ✅ Accept/decline audit assignments
- ✅ View audit details
- ✅ View supplier information (relevant to audit)
- ✅ Schedule audit dates
- ✅ Upload audit checklists
- ✅ Complete audit forms
- ✅ Upload findings
- ✅ Upload photos/evidence
- ✅ Submit audit reports
- ✅ Request additional information
- ✅ Schedule follow-up audits
- ❌ Modify completed reports (without admin approval)
- ❌ Share audit reports publicly

#### Certification Verification
- ✅ View certifications to verify
- ✅ Verify authenticity
- ✅ Approve/reject certifications
- ✅ Request additional documentation
- ✅ Upload verification reports

#### Communication
- ✅ Communicate with suppliers (regarding audits)
- ✅ Communicate with admin
- ✅ Upload documents
- ❌ Direct buyer communication
- ❌ Marketing to suppliers

#### Reports
- ✅ View own audit history
- ✅ View audit statistics
- ✅ Download audit templates
- ✅ Export audit data
- ❌ View other auditor's reports (unless shared)

---

### 5. FINANCE MANAGER ROLE

#### Invoice Discounting Management
- ✅ View discounting applications
- ✅ Review applications
- ✅ Approve/reject applications
- ✅ Set discounting terms
- ✅ Track disbursements
- ✅ Monitor repayments
- ✅ View defaults
- ✅ Generate finance reports
- ✅ Manage finance partners
- ❌ Access non-finance data

#### Financial Analytics
- ✅ View finance dashboard
- ✅ View outstanding amounts
- ✅ View repayment schedules
- ✅ View default rates
- ✅ Credit risk analysis
- ✅ Portfolio performance
- ✅ Export financial reports

#### Communication
- ✅ Communicate with suppliers (finance matters)
- ✅ Send payment reminders
- ✅ Handle finance disputes
- ❌ Access order details (except finance-related)

---

### 6. SUB-ROLES (TEAM MEMBERS)

#### 6.1 Buyer - Procurement Manager
- ✅ Full buyer permissions
- ✅ Manage team members
- ✅ Approve orders
- ✅ Manage budgets
- ✅ Strategic sourcing decisions

#### 6.2 Buyer - Plant Manager
- ✅ View products
- ✅ Create orders (for assigned plant only)
- ✅ Track deliveries (for assigned plant)
- ✅ Manage inventory (for assigned plant)
- ✅ Communicate with suppliers
- ❌ Access other plants
- ❌ Manage team members
- ❌ Company-wide settings

#### 6.3 Buyer - Finance
- ✅ View orders
- ✅ View invoices
- ✅ Make payments
- ✅ Download invoices
- ✅ Dispute invoices
- ✅ View payment analytics
- ❌ Create orders
- ❌ Manage products
- ❌ Manage team

#### 6.4 Buyer - View Only
- ✅ View products
- ✅ View orders
- ✅ View suppliers
- ✅ View reports
- ❌ Create orders
- ❌ Make changes
- ❌ Access payments

#### 6.5 Supplier - Admin
- ✅ Full supplier permissions
- ✅ Manage team
- ✅ Financial management
- ✅ Strategic decisions

#### 6.6 Supplier - Sales
- ✅ View products
- ✅ Manage orders
- ✅ Respond to RFQs
- ✅ Communicate with buyers
- ✅ Create quotes
- ❌ Manage inventory
- ❌ Access finances
- ❌ Manage team

#### 6.7 Supplier - Inventory Manager
- ✅ Manage inventory
- ✅ Manage warehouses
- ✅ Update stock levels
- ✅ View orders (for inventory planning)
- ✅ Manage logistics
- ❌ Create quotes
- ❌ Manage pricing
- ❌ Access finances

#### 6.8 Supplier - Finance
- ✅ View orders
- ✅ Create invoices
- ✅ Track payments
- ✅ Apply for invoice discounting
- ✅ View financial reports
- ❌ Manage products
- ❌ Accept orders
- ❌ Manage team

#### 6.9 Super Admin
- ✅ All admin permissions
- ✅ System configuration
- ✅ Database access
- ✅ Deploy updates
- ✅ Manage admins
- ✅ Access production data
- ✅ Emergency actions

---

## Permission Matrix Summary

| Feature | Buyer | Supplier | Admin | Auditor | Finance Mgr |
|---------|-------|----------|-------|---------|-------------|
| Browse Products | ✅ | ✅ | ✅ | ❌ | ❌ |
| Add Products | ❌ | ✅ | ✅ | ❌ | ❌ |
| Create Orders | ✅ | ❌ | ✅ | ❌ | ❌ |
| Accept Orders | ❌ | ✅ | ✅ | ❌ | ❌ |
| Create RFQ | ✅ | ❌ | ✅ | ❌ | ❌ |
| Respond to RFQ | ❌ | ✅ | ✅ | ❌ | ❌ |
| View Own Analytics | ✅ | ✅ | ✅ | ✅ | ✅ |
| View All Analytics | ❌ | ❌ | ✅ | ❌ | ❌ |
| Conduct Audits | ❌ | ❌ | ✅ | ✅ | ❌ |
| Verify Suppliers | ❌ | ❌ | ✅ | ✅ | ❌ |
| Invoice Discounting | ❌ | ✅ | ✅ | ❌ | ✅ |
| Approve Discounting | ❌ | ❌ | ✅ | ❌ | ✅ |
| Chat | ✅ | ✅ | ✅ | ✅ | ✅ |
| Manage Team | ✅ | ✅ | ✅ | ❌ | ❌ |
| System Settings | ❌ | ❌ | ✅ | ❌ | ❌ |
| View System Logs | ❌ | ❌ | ✅ | ❌ | ❌ |

---

## Implementation Details

### Database Schema for RBAC

```sql
-- Users table
users (
  id, email, password_hash, role, 
  status, created_at, updated_at
)

-- Roles table
roles (
  id, name, description, 
  permissions_json, created_at
)

-- Permissions table
permissions (
  id, resource, action, 
  description, created_at
)

-- User_roles (for multiple roles)
user_roles (
  id, user_id, role_id, 
  scope, created_at
)

-- Role_permissions
role_permissions (
  id, role_id, permission_id, 
  created_at
)

-- Team members
team_members (
  id, organization_id, user_id, 
  role, permissions_override_json,
  invited_by, created_at
)
```

### Permission Naming Convention

Format: `resource:action:scope`

Examples:
- `products:create:own`
- `products:read:all`
- `orders:update:own`
- `orders:delete:admin`
- `users:manage:organization`
- `analytics:view:platform`

### Middleware Implementation

```typescript
// Permission check middleware
checkPermission(resource, action, scope)

// Role check middleware
requireRole(['buyer', 'admin'])

// Organization scope check
checkOrganizationAccess(organizationId)

// Team member check
checkTeamMemberAccess(organizationId, userId)
```

---

## Security Features

### 1. Multi-Factor Authentication (MFA)
- Optional for buyers/suppliers
- Mandatory for admins
- SMS and authenticator app support

### 2. Session Management
- JWT tokens with refresh tokens
- Session timeout after 30 minutes inactivity
- Device tracking
- Force logout from all devices option

### 3. Audit Logging
- All user actions logged
- IP address tracking
- Timestamp tracking
- Failed login attempts monitoring

### 4. Data Access Controls
- Row-level security
- Column-level permissions
- Encrypted sensitive data
- Data masking for PII

### 5. API Security
- Rate limiting per role
- API key authentication
- OAuth 2.0 support
- Webhook signature verification

---

## Role Transition Workflows

### Buyer Inviting Team Members
1. Buyer admin invites member (email)
2. Member receives invitation
3. Member registers/logs in
4. Role assigned by buyer admin
5. Permissions activated

### Supplier Verification Process
1. Supplier registers
2. Admin reviews application
3. Documents verified
4. Auditor assigned (if needed)
5. Approval granted
6. Supplier role activated

### Auditor Assignment
1. Admin identifies audit need
2. Auditor invited to platform
3. Auditor credentials verified
4. Specific audits assigned
5. Limited-time access granted

---

## Future Role Enhancements

### Planned Roles
1. **Marketplace Manager** - Category-specific managers
2. **Content Manager** - Blog and content specialists
3. **Customer Support** - Ticket management
4. **Logistics Coordinator** - Shipping oversight
5. **Quality Manager** - Quality control oversight
6. **Finance Analyst** - Financial analytics
7. **Marketing Manager** - Campaign management
8. **Partner Manager** - Third-party integrations

### Planned Features
- Dynamic role creation
- Custom permission sets
- Temporary role assignments
- Scheduled role changes
- Role inheritance
- Permission delegation

---

**Document Version**: 1.0  
**Last Updated**: 2024  
**Status**: Planning Phase

