# Toreso - User Roles and Permissions

## Role Hierarchy

```
├── Super Admin
├── Platform Admin
├── Auditor
│   ├── Customer Auditor
│   └── Panel Auditor
├── Buyer (Customer)
│   ├── Buyer Admin
│   ├── Procurement Manager
│   ├── Plant Manager
│   └── Buyer User
├── Supplier (Vendor)
│   ├── Supplier Admin
│   ├── Sales Manager
│   └── Supplier User
└── Guest (Non-authenticated)
```

---

## 1. Guest User (Non-authenticated)

### Permissions
**Can Access**:
- Public website pages
- Product browsing (limited information)
- Supplier directory (limited view)
- Resources and blog
- About, How It Works, Pricing pages
- Registration pages
- Login page

**Cannot Access**:
- Pricing information
- Supplier contact details
- Place orders
- RFQ submission
- Dashboard areas
- Detailed product specifications
- Supplier ratings and reviews

**Actions Allowed**:
- Browse products
- Search products
- View categories
- Read blog posts
- Download public resources
- Register as buyer or supplier
- Contact support
- Subscribe to newsletter

---

## 2. Buyer Roles

### 2.1 Buyer Admin

**Primary Responsibilities**:
- Overall account management
- User management for organization
- Financial oversight
- Strategic procurement decisions
- Compliance management

**Full Permissions**:

**User Management**:
- ✅ Add/remove users
- ✅ Assign roles and permissions
- ✅ Manage user access levels
- ✅ View user activity logs
- ✅ Deactivate/activate users

**Company Profile**:
- ✅ Edit company information
- ✅ Manage multiple plants
- ✅ Add/edit delivery addresses
- ✅ Upload company documents
- ✅ Manage certifications

**Procurement**:
- ✅ View all orders (all plants)
- ✅ Place orders
- ✅ Cancel orders
- ✅ Approve large orders
- ✅ Create/manage RFQs
- ✅ Negotiate with suppliers
- ✅ Approve quotes
- ✅ Set approval workflows

**Supplier Management**:
- ✅ View all suppliers
- ✅ Add to preferred suppliers
- ✅ Remove suppliers
- ✅ View audit reports
- ✅ Request audits
- ✅ Rate and review suppliers
- ✅ Block/unblock suppliers

**Financial**:
- ✅ View all invoices
- ✅ Manage payment methods
- ✅ Set credit terms
- ✅ View financial reports
- ✅ Export financial data
- ✅ Manage billing information
- ✅ Set budget limits

**Analytics & Reports**:
- ✅ Access all analytics
- ✅ Generate custom reports
- ✅ Export data
- ✅ View spend analysis
- ✅ Supplier performance reports
- ✅ Plant-wise reports

**Settings**:
- ✅ Configure notifications
- ✅ API access management
- ✅ Integration settings
- ✅ Security settings
- ✅ Subscription management

### 2.2 Procurement Manager

**Primary Responsibilities**:
- Day-to-day procurement operations
- Supplier relationship management
- Order management
- RFQ management

**Permissions**:

**Procurement**:
- ✅ View orders (assigned plants)
- ✅ Place orders (within budget limits)
- ✅ Track orders
- ✅ Create RFQs
- ✅ Evaluate quotes
- ✅ Recommend suppliers
- ✅ Communicate with suppliers
- ❌ Cancel large orders (requires approval)
- ❌ Approve quotes above threshold

**Supplier Management**:
- ✅ View suppliers
- ✅ View audit reports
- ✅ Rate suppliers
- ✅ Recommend preferred suppliers
- ❌ Block suppliers
- ❌ Request audits

**Financial**:
- ✅ View invoices (assigned plants)
- ✅ Track payments
- ❌ Manage payment methods
- ❌ Set credit terms
- ❌ Access financial reports

**Analytics**:
- ✅ View procurement analytics
- ✅ Supplier performance metrics
- ✅ Generate standard reports
- ❌ Access financial analytics
- ❌ Export sensitive data

**Settings**:
- ✅ Personal profile settings
- ✅ Notification preferences
- ❌ Company settings
- ❌ User management

### 2.3 Plant Manager

**Primary Responsibilities**:
- Plant-specific procurement
- Inventory management
- Local supplier coordination
- Delivery management

**Permissions**:

**Procurement**:
- ✅ View orders (own plant only)
- ✅ Place orders (within plant budget)
- ✅ Track deliveries
- ✅ Create RFQs (plant-specific)
- ✅ Manage plant inventory
- ❌ View other plants' orders
- ❌ Approve large orders

**Inventory**:
- ✅ View plant inventory
- ✅ Set stock alerts
- ✅ Request reorders
- ✅ Manage JIT deliveries
- ✅ Track warehouse stock

**Supplier Management**:
- ✅ View approved suppliers
- ✅ Communicate with suppliers
- ✅ Rate deliveries
- ❌ Add/remove suppliers
- ❌ View audit reports

**Analytics**:
- ✅ Plant-specific reports
- ✅ Inventory reports
- ✅ Delivery performance
- ❌ Company-wide analytics
- ❌ Financial reports

### 2.4 Buyer User (Basic)

**Primary Responsibilities**:
- Product browsing
- Order tracking
- Basic communication

**Permissions**:

**Procurement**:
- ✅ Browse products
- ✅ View assigned orders
- ✅ Track order status
- ✅ Add items to cart
- ❌ Place orders (requires approval)
- ❌ Create RFQs
- ❌ Cancel orders

**Supplier Management**:
- ✅ View approved suppliers
- ✅ View supplier products
- ❌ Contact suppliers directly
- ❌ Rate suppliers

**Analytics**:
- ✅ View own order history
- ❌ Access analytics
- ❌ Generate reports

---

## 3. Supplier Roles

### 3.1 Supplier Admin

**Primary Responsibilities**:
- Overall supplier account management
- User management
- Financial management
- Strategic decisions
- Compliance management

**Full Permissions**:

**User Management**:
- ✅ Add/remove users
- ✅ Assign roles
- ✅ Manage permissions
- ✅ View user activity

**Company Profile**:
- ✅ Edit company information
- ✅ Manage certifications
- ✅ Upload audit documents
- ✅ Manage warehouses
- ✅ Update compliance documents

**Product Management**:
- ✅ Add/edit/delete products
- ✅ Bulk upload products
- ✅ Manage inventory
- ✅ Set pricing (all tiers)
- ✅ Manage product categories
- ✅ Feature products
- ✅ Approve product listings

**Order Management**:
- ✅ View all orders
- ✅ Accept/reject orders
- ✅ Update order status
- ✅ Manage shipping
- ✅ Handle returns
- ✅ Cancel orders

**RFQ/Quotes**:
- ✅ View all RFQs
- ✅ Submit quotes
- ✅ Negotiate terms
- ✅ Accept/decline RFQs

**Financial**:
- ✅ View all invoices
- ✅ Generate invoices
- ✅ Manage bill discounting
- ✅ View payment history
- ✅ Access financial reports
- ✅ Manage subscription
- ✅ Update billing information

**Marketing**:
- ✅ Create campaigns
- ✅ Purchase ad space
- ✅ Feature listings
- ✅ Manage promotions
- ✅ View marketing analytics

**Analytics**:
- ✅ Access all analytics
- ✅ Generate reports
- ✅ Export data
- ✅ View performance metrics
- ✅ Competitive analysis

**Settings**:
- ✅ All settings access
- ✅ API management
- ✅ Integration settings
- ✅ Security settings

### 3.2 Sales Manager

**Primary Responsibilities**:
- Sales operations
- Customer relationship management
- Quote management
- Order fulfillment

**Permissions**:

**Product Management**:
- ✅ View all products
- ✅ Edit product information
- ✅ Update inventory
- ✅ Adjust pricing (within limits)
- ❌ Delete products
- ❌ Bulk operations

**Order Management**:
- ✅ View all orders
- ✅ Accept orders
- ✅ Update order status
- ✅ Communicate with buyers
- ✅ Process returns
- ❌ Cancel orders above threshold

**RFQ/Quotes**:
- ✅ View RFQs
- ✅ Submit quotes
- ✅ Negotiate
- ✅ Follow up on quotes

**Buyer Management**:
- ✅ View buyer information
- ✅ Communicate with buyers
- ✅ View order history
- ✅ Manage relationships

**Financial**:
- ✅ View invoices
- ✅ Generate invoices
- ✅ Track payments
- ❌ Manage bill discounting
- ❌ Access financial reports

**Analytics**:
- ✅ Sales analytics
- ✅ Performance metrics
- ✅ Buyer analytics
- ❌ Financial analytics
- ❌ Export sensitive data

### 3.3 Supplier User (Basic)

**Primary Responsibilities**:
- Order processing
- Inventory updates
- Basic communication

**Permissions**:

**Product Management**:
- ✅ View products
- ✅ Update inventory
- ❌ Add/edit products
- ❌ Change pricing

**Order Management**:
- ✅ View assigned orders
- ✅ Update order status
- ✅ Upload shipping documents
- ❌ Accept/reject orders
- ❌ Cancel orders

**Communication**:
- ✅ Respond to messages
- ✅ View buyer inquiries
- ❌ Initiate contact

**Analytics**:
- ✅ View own performance
- ❌ Access company analytics

---

## 4. Auditor Roles

### 4.1 Customer Auditor

**Primary Responsibilities**:
- Conduct audits on behalf of buyers
- Verify supplier compliance
- Generate audit reports

**Permissions**:

**Audit Management**:
- ✅ View assigned audits
- ✅ Schedule audits
- ✅ Conduct audits
- ✅ Upload audit reports
- ✅ Approve/reject suppliers
- ✅ Request additional documentation

**Supplier Access**:
- ✅ View supplier information
- ✅ Access supplier documents
- ✅ View certifications
- ✅ View production facilities
- ❌ Edit supplier information

**Reporting**:
- ✅ Generate audit reports
- ✅ Submit findings
- ✅ Recommend actions
- ✅ Track compliance

**Communication**:
- ✅ Communicate with suppliers
- ✅ Communicate with buyers
- ✅ Request clarifications

### 4.2 Panel Auditor

**Primary Responsibilities**:
- Independent third-party audits
- Quality certification verification
- Compliance assessment

**Permissions**:

**Audit Management**:
- ✅ View audit assignments
- ✅ Schedule audits
- ✅ Conduct audits
- ✅ Upload audit reports
- ✅ Certify compliance
- ✅ Issue recommendations

**Supplier Access**:
- ✅ View supplier information
- ✅ Access all supplier documents
- ✅ Verify certifications
- ✅ Inspect facilities
- ❌ Edit supplier data

**Reporting**:
- ✅ Generate comprehensive reports
- ✅ Submit to platform
- ✅ Track audit history
- ✅ Issue certificates

---

## 5. Platform Admin Roles

### 5.1 Super Admin

**Primary Responsibilities**:
- Complete platform control
- System configuration
- Critical decisions
- Security management

**Full Permissions**:
- ✅ All system access
- ✅ User management (all roles)
- ✅ Financial management
- ✅ Content management
- ✅ System settings
- ✅ Security settings
- ✅ Database access
- ✅ API management
- ✅ Backup and recovery
- ✅ Audit logs access

### 5.2 Platform Admin

**Primary Responsibilities**:
- Day-to-day platform operations
- User support
- Content management
- Verification processes

**Permissions**:

**User Management**:
- ✅ View all users
- ✅ Verify users
- ✅ Suspend/activate users
- ✅ Manage user disputes
- ❌ Delete users
- ❌ Access sensitive data

**Verification**:
- ✅ Verify suppliers
- ✅ Review documents
- ✅ Approve/reject applications
- ✅ Request additional info

**Order Management**:
- ✅ View all orders
- ✅ Resolve disputes
- ✅ Mediate issues
- ❌ Cancel orders directly

**Content Management**:
- ✅ Manage blog posts
- ✅ Update pages
- ✅ Manage resources
- ✅ Send announcements

**Support**:
- ✅ Manage support tickets
- ✅ Live chat support
- ✅ Resolve issues
- ✅ Escalate to super admin

**Analytics**:
- ✅ View platform analytics
- ✅ Generate reports
- ✅ Monitor performance
- ❌ Access financial data

---

## Permission Matrix

### Feature Access Matrix

| Feature | Guest | Buyer User | Buyer PM | Buyer Admin | Supplier User | Supplier SM | Supplier Admin | Auditor | Admin |
|---------|-------|------------|----------|-------------|---------------|-------------|----------------|---------|-------|
| Browse Products | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| View Prices | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Place Orders | ❌ | 🔶 | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Create RFQ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Submit Quotes | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ |
| Add Products | ❌ | ❌ | ❌ | ❌ | ❌ | 🔶 | ✅ | ❌ | ✅ |
| Manage Users | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ | ✅ |
| View Analytics | ❌ | ❌ | 🔶 | ✅ | ❌ | 🔶 | ✅ | 🔶 | ✅ |
| Conduct Audits | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Financial Reports | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ | ✅ |

Legend:
- ✅ Full Access
- 🔶 Limited Access
- ❌ No Access

---

## Data Access Levels

### Level 1: Public Data
- Accessible to all users including guests
- Product categories
- Public blog posts
- Company information
- Help articles

### Level 2: Authenticated Data
- Requires login
- Product prices
- Supplier contact info
- Basic analytics
- Order history (own)

### Level 3: Role-Specific Data
- Requires specific role
- Financial data
- Audit reports
- Performance metrics
- User management data

### Level 4: Sensitive Data
- Requires admin/owner access
- Payment information
- Personal identification
- Compliance documents
- System configurations

### Level 5: Critical Data
- Requires super admin access
- Database access
- Security settings
- API keys
- Backup data

---

## Approval Workflows

### Order Approval Workflow
1. **Buyer User**: Creates order → Pending
2. **Procurement Manager**: Reviews → Approves/Rejects
3. **Buyer Admin**: Final approval (if above threshold)
4. **Supplier**: Accepts order
5. **Order Confirmed**

### Supplier Verification Workflow
1. **Supplier**: Submits application
2. **Platform Admin**: Initial review
3. **Auditor**: Conducts audit
4. **Platform Admin**: Final verification
5. **Supplier Approved**

### Product Approval Workflow
1. **Supplier User/SM**: Creates product
2. **Supplier Admin**: Reviews and approves
3. **Platform Admin**: Verifies compliance
4. **Product Published**

### RFQ Workflow
1. **Buyer PM/Admin**: Creates RFQ
2. **Suppliers**: Submit quotes
3. **Buyer PM**: Evaluates quotes
4. **Buyer Admin**: Approves selection (if above threshold)
5. **Order Created**

---

## Security Permissions

### Two-Factor Authentication (2FA)
- **Required for**:
  - All admin roles
  - Buyer Admin
  - Supplier Admin
  - Financial transactions
- **Optional for**:
  - Other roles

### IP Whitelisting
- Available for:
  - Admin accounts
  - Enterprise buyer accounts
  - Enterprise supplier accounts

### Session Management
- **Session Timeout**:
  - Admin: 30 minutes
  - Buyer/Supplier: 2 hours
  - Guest: N/A
- **Concurrent Sessions**:
  - Admin: 1 session
  - Others: 3 sessions

### API Access
- **Full API Access**:
  - Super Admin
  - Buyer Admin (own data)
  - Supplier Admin (own data)
- **Limited API Access**:
  - Procurement Manager
  - Sales Manager
- **No API Access**:
  - Basic users
  - Guests

---

## Audit Trail

### Actions Logged
- User login/logout
- Order placement/cancellation
- Product additions/modifications
- Financial transactions
- User management actions
- Settings changes
- Data exports
- API calls

### Log Access
- **Super Admin**: All logs
- **Platform Admin**: Platform logs
- **Buyer Admin**: Own organization logs
- **Supplier Admin**: Own organization logs
- **Others**: No access

---

## Data Export Permissions

### Can Export
- **Super Admin**: All data
- **Platform Admin**: Platform data (non-sensitive)
- **Buyer Admin**: Own organization data
- **Supplier Admin**: Own organization data
- **Procurement Manager**: Procurement reports
- **Sales Manager**: Sales reports

### Cannot Export
- Buyer User
- Supplier User
- Guests
- Auditors (except audit reports)

---

## Notification Permissions

### Can Send Platform-wide Notifications
- Super Admin
- Platform Admin

### Can Send Organization Notifications
- Buyer Admin
- Supplier Admin

### Can Send Direct Messages
- All authenticated users (within context)

---

## Integration Permissions

### Can Create Integrations
- Super Admin
- Buyer Admin
- Supplier Admin

### Can Use Integrations
- All users in organization

### Can Manage API Keys
- Super Admin
- Buyer Admin
- Supplier Admin

---

## Customization Permissions

### Can Customize Dashboard
- All authenticated users (own dashboard)

### Can Customize Reports
- Admins and Managers

### Can Customize Workflows
- Buyer Admin
- Supplier Admin
- Super Admin

---

## Support Access Levels

### Priority Support
- Super Admin
- Platform Admin
- Enterprise accounts

### Standard Support
- All paid accounts
- Verified suppliers

### Basic Support
- Free accounts
- Guests (limited)

