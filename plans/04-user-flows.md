# User Flows - Toreso B2B Marketplace

## User Journey Maps for All Personas

This document outlines complete user flows for all key personas and their primary interactions with the Toreso platform.

---

## 1. BUYER USER FLOWS

### 1.1 Buyer Registration & Onboarding Flow

**Entry Point**: Landing page CTA "Register as Buyer"

**Steps**:
1. **Landing on Registration Page** (`/register/buyer`)
   - View registration form
   - See benefits summary
   
2. **Enter Basic Information**
   - Company name
   - Industry selection
   - Contact person name
   - Email address
   - Phone number
   - Password creation (with strength indicator)
   - Accept terms and conditions
   - Click "Create Account"

3. **Email Verification**
   - Receive verification email
   - Click verification link
   - Redirected to platform

4. **Complete Company Profile**
   - Upload company logo
   - Company registration number
   - GST number (GSTIN)
   - PAN number
   - Company address
   - Year established
   - Number of employees
   - Annual turnover range

5. **Add Plant Locations**
   - Add first plant (mandatory)
   - Plant name
   - Plant address
   - Plant contact person
   - Plant phone/email
   - Option to add more plants
   - Set primary plant

6. **Business Verification**
   - Upload GST certificate
   - Upload business registration
   - Upload address proof
   - Submit for verification

7. **Guided Tour** (Optional but recommended)
   - Interactive platform walkthrough
   - Key features highlight
   - Skip or complete tour

8. **Dashboard Landing**
   - Welcome message
   - Quick action suggestions
   - Onboarding checklist
   - Browse catalog CTA

**Exit Point**: Buyer dashboard with onboarding checklist

---

### 1.2 Product Discovery & Ordering Flow

**Entry Point**: Buyer dashboard or catalog page

**Flow A: Browse and Order**

1. **Browse Catalog** (`/buyer/catalog`)
   - View product categories
   - See featured products
   - View recommended products (if available)

2. **Filter & Search**
   - Apply filters (category, price, location, certifications)
   - Sort results (relevance, price, rating)
   - Refine search

3. **View Product Details** (`/buyer/product/:id`)
   - View images (zoom, 360°)
   - Read specifications
   - Check certifications
   - View sustainability metrics
   - See pricing tiers (volume discounts)
   - Check availability
   - View supplier profile link
   - Read reviews

4. **Decision Point**: Add to cart or Request quote?

**If Add to Cart**:
5. **Add to Cart**
   - Select quantity
   - Choose delivery plant
   - Specify requirements
   - Click "Add to Cart"
   - See cart notification
   - Option: Continue shopping or checkout

6. **Review Cart** (`/buyer/cart`)
   - Review items (grouped by supplier)
   - Adjust quantities
   - Remove items if needed
   - See estimated delivery dates
   - View total with discounts
   - Apply coupon codes (if any)

7. **Proceed to Checkout** (`/buyer/checkout`)
   
   **Step 1: Delivery Details**
   - Confirm/select plant location
   - Add delivery instructions
   - Select requested delivery date
   - Next

   **Step 2: Review Orders** (by supplier)
   - Review each supplier's items
   - Add special instructions
   - Confirm packaging requirements
   - Next

   **Step 3: Payment Method**
   - Select payment option:
     - Credit terms (if available)
     - Online payment (Razorpay/Stripe/PayPal)
     - Bank transfer
     - Payment on delivery
   - Enter payment details
   - Next

   **Step 4: Review & Confirm**
   - Final review all details
   - Accept terms
   - Click "Place Order"

8. **Order Confirmation**
   - View order confirmation
   - Receive confirmation email
   - Download purchase order
   - Track order link

9. **Track Order** (`/buyer/orders/:id`)
   - View order status
   - Track shipment
   - Communicate with supplier
   - Receive order

**If Request Quote (from product page)**:
5. **Quick RFQ Form**
   - Quantity needed
   - Delivery location
   - Expected delivery date
   - Additional requirements
   - Submit quote request

6. **Wait for Quote Response**
   - Receive notification when supplier responds
   - View quote in dashboard

7. **Review Quote** (`/buyer/quotes/:id`)
   - Compare with other quotes (if any)
   - Accept, reject, or negotiate
   - Convert to order if accepted

**Exit Point**: Order placed and tracking, or Quote received

---

### 1.3 Create RFQ (Request for Quote) Flow

**Entry Point**: Dashboard "Create RFQ" or RFQ management page

**Steps**:

1. **Initiate RFQ** (`/buyer/rfq/create`)
   - Click "Create New RFQ"
   - Choose: Start fresh or Use template

2. **Basic Information**
   - RFQ title/name
   - Select product category
   - Add detailed description
   - Specify product requirements

3. **Specifications**
   - Add technical specifications
   - Upload technical drawings (if any)
   - Specify materials
   - Dimensions and tolerances
   - Quality requirements
   - Certifications required (ISO, FDA, etc.)

4. **Quantity & Delivery**
   - Quantity required
   - Unit of measurement
   - Delivery plant/location
   - Expected delivery date
   - Urgency level

5. **Budget & Terms** (Optional)
   - Budget range (optional)
   - Payment terms preference
   - Contract duration (if applicable)
   - Warranty requirements

6. **Attach Documents**
   - Upload specifications
   - Upload drawings
   - Upload samples (images)
   - Add reference documents

7. **Select Suppliers**
   - Option 1: Broadcast to all eligible suppliers
   - Option 2: Select specific suppliers
   - Filter suppliers by criteria
   - Add to recipient list

8. **Set Deadline**
   - Response deadline date and time
   - Timezone

9. **Review RFQ**
   - Preview all details
   - Edit if needed
   - Save as draft or Publish
   - Option to save as template

10. **Publish RFQ**
    - Click "Publish RFQ"
    - Confirmation message
    - Suppliers notified immediately

11. **Manage RFQ** (`/buyer/rfq/:id`)
    - Monitor responses
    - Receive quote notifications
    - View submitted quotes
    - Answer supplier questions
    - Extend deadline if needed

12. **Compare Quotes**
    - Side-by-side comparison table
    - Sort by price, rating, delivery time
    - View supplier profiles
    - Check certifications

13. **Award Contract**
    - Select winning quote
    - Send award notification
    - Convert to order
    - Notify other suppliers

**Exit Point**: RFQ awarded and converted to order, or RFQ closed

---

### 1.4 Supplier Evaluation & Selection Flow

**Entry Point**: Supplier directory or product page

**Steps**:

1. **Access Supplier Directory** (`/buyer/suppliers`)
   - View all suppliers
   - Featured suppliers highlight

2. **Filter Suppliers**
   - By category
   - By location
   - By certifications
   - By rating (4+ stars)
   - By capacity
   - By delivery time

3. **View Supplier Profile** (`/buyer/suppliers/:id`)
   - Company overview
   - Product catalog
   - Certifications displayed
   - Audit reports (if shared)
   - Performance metrics
   - Reviews and ratings
   - Response time
   - On-time delivery rate
   - Quality score

4. **Review Performance**
   - View rating breakdown
   - Read reviews from other buyers
   - Check order history (if previously ordered)
   - View compliance status

5. **Check Products**
   - Browse supplier's catalog
   - Filter by category
   - View product details

6. **Decision Making**
   - Add to favorites (for future)
   - Send inquiry
   - Request quote
   - Start chat
   - View contact information

7. **Initiate Communication**
   - Click "Contact Supplier"
   - Choose: Chat, Email, or RFQ
   - Send message/inquiry

8. **Ongoing Monitoring**
   - Track communication
   - Receive responses
   - Add to preferred suppliers list
   - Set up alerts for new products

**Exit Point**: Supplier shortlisted, inquiry sent, or order placed

---

### 1.5 Order Tracking & Management Flow

**Entry Point**: Order confirmation email or dashboard

**Steps**:

1. **Access Orders** (`/buyer/orders`)
   - View all orders
   - Filter by status:
     - Pending (awaiting supplier acceptance)
     - Confirmed (supplier accepted)
     - Processing (being prepared)
     - Shipped (in transit)
     - Delivered
     - Cancelled
     - Returned

2. **View Order Details** (`/buyer/orders/:id`)
   - Order number
   - Order date
   - Supplier information
   - Line items with prices
   - Delivery location
   - Order total
   - Payment status
   - Current status

3. **Track Shipment**
   - View status timeline
   - See tracking number
   - Real-time location (if available)
   - Estimated delivery date
   - Delivery contact

4. **Communication**
   - Chat with supplier
   - View order notes
   - Add internal notes

5. **Actions Available** (based on status):
   - **If Pending**: Cancel order
   - **If Confirmed**: Request cancellation
   - **If Shipped**: Track shipment, prepare for receipt
   - **If Delivered**: Confirm receipt, rate order

6. **Receive Order**
   - Mark as received
   - Upload proof of delivery (optional)
   - Confirm quantity received
   - Note any damages/discrepancies

7. **Post-Delivery Actions**
   - Download invoice
   - Rate supplier (1-5 stars)
   - Write review
   - Report issue (if any)
   - Request return (if needed)
   - Reorder same items

8. **Issue Management** (if problems)
   - Report issue button
   - Select issue type:
     - Quality problem
     - Wrong item
     - Quantity mismatch
     - Damaged goods
     - Late delivery
     - Other
   - Upload evidence (photos)
   - Submit report
   - Track resolution

**Exit Point**: Order completed, reviewed, or issue resolved

---

### 1.6 Invoice & Payment Flow

**Entry Point**: Invoice received notification

**Steps**:

1. **Invoice Notification**
   - Email notification
   - In-app notification
   - Dashboard alert

2. **Access Invoices** (`/buyer/invoices`)
   - View all invoices
   - Filter by status (pending, paid, overdue)
   - Sort by date, amount

3. **View Invoice Details** (`/buyer/invoices/:id`)
   - Invoice number and date
   - Supplier information
   - Line items
   - Tax breakdown (GST)
   - Total amount
   - Payment terms
   - Due date
   - Related order link

4. **Verify Invoice**
   - Match with order
   - Verify quantities
   - Check pricing
   - Confirm delivery receipt

5. **Decision Point**: Accept or Dispute?

**If Accept**:
6. **Make Payment**
   - Click "Pay Now"
   - Choose payment method:
     - Saved payment method
     - Credit/debit card
     - Net banking
     - UPI
     - Bank transfer
   - Enter payment details
   - Confirm payment

7. **Payment Confirmation**
   - Payment successful message
   - Download payment receipt
   - Invoice marked as paid
   - Supplier notified

**If Dispute**:
6. **Dispute Invoice**
   - Click "Dispute Invoice"
   - Select dispute reason:
     - Incorrect amount
     - Incorrect quantity
     - Quality issues
     - Pricing mismatch
     - Other
   - Add explanation
   - Upload supporting documents
   - Submit dispute

7. **Dispute Resolution**
   - Supplier notified
   - Communication thread opens
   - Negotiate resolution
   - Admin may intervene
   - Resolve or escalate

8. **Download Documents**
   - Download invoice PDF
   - Download payment receipt
   - Export to accounting software

**Exit Point**: Payment completed or dispute resolved

---

### 1.7 Supplier Performance Review Flow

**Entry Point**: After order delivery

**Steps**:

1. **Review Prompt**
   - Email reminder to review
   - Dashboard notification
   - Order detail page prompt

2. **Rate Supplier** (`/buyer/orders/:id`)
   - Overall rating (1-5 stars)
   - Category ratings:
     - Product quality
     - Delivery time
     - Communication
     - Packaging quality
     - Value for money

3. **Write Review** (Optional)
   - Add written feedback
   - Highlight positives
   - Note improvements
   - Character limit: 500 words

4. **Add Photos** (Optional)
   - Upload product photos
   - Show received items
   - Document quality

5. **Submit Review**
   - Preview review
   - Confirm submission
   - Review posted

6. **Review Management**
   - View own reviews
   - Edit review (within 48 hours)
   - Respond to supplier's reply

**Exit Point**: Review published

---

## 2. SUPPLIER USER FLOWS

### 2.1 Supplier Registration & Verification Flow

**Entry Point**: Landing page "Register as Supplier"

**Steps**:

1. **Landing on Registration** (`/register/supplier`)
   - View registration form
   - See requirements checklist
   - Understand verification process

2. **Basic Information**
   - Company legal name
   - Business type (Manufacturer/Distributor/Both)
   - Contact person name
   - Email address
   - Phone number
   - Password creation
   - Accept terms

3. **Company Details**
   - Year established
   - Number of employees
   - Annual turnover
   - Company registration number
   - GST number (GSTIN)
   - PAN number
   - Business address

4. **Manufacturing Capabilities**
   - Product categories manufactured
   - Manufacturing capacity (units/month)
   - Lead time (days)
   - Minimum order quantity
   - Quality certifications held
   - Export capability

5. **Plant Information**
   - Plant location(s)
   - Plant area (sq ft)
   - Machinery details
   - Workforce size
   - Shift operations

6. **Financial Information**
   - Bank name
   - Account number
   - IFSC code
   - Branch
   - Account holder name
   - Cancelled cheque upload

7. **Document Upload**
   **Required Documents**:
   - Business registration certificate
   - GST certificate
   - PAN card
   - Cancelled cheque
   - Factory license
   - Pollution control certificate
   
   **Optional Documents**:
   - ISO certifications
   - Quality certificates
   - Export license
   - Other relevant certificates

8. **Verification Process**
   - Submit application
   - Application under review message
   - Estimated verification time: 2-5 business days

9. **Wait for Verification**
   - Receive status notifications
   - Admin reviews documents
   - May request additional documents
   - Background verification

10. **Audit Scheduling** (if required)
    - Admin assigns auditor
    - Auditor contacts supplier
    - Schedule on-site audit
    - Audit conducted
    - Audit report submitted

11. **Verification Decision**
    - **If Approved**:
      - Approval email
      - Welcome package
      - Access granted to supplier portal
      - Onboarding guide
    
    - **If Rejected**:
      - Rejection email with reason
      - Option to reapply
      - Guidance on requirements

12. **Complete Profile** (if approved)
    - Upload company logo
    - Add company description
    - Add team members
    - Set up product catalog
    - Configure notifications

13. **Guided Tour**
    - Platform walkthrough
    - Feature highlights
    - Best practices tips

**Exit Point**: Verified supplier dashboard

---

### 2.2 Product Listing Flow

**Entry Point**: Supplier dashboard "Add Product"

**Steps**:

1. **Initiate Product Creation** (`/supplier/products/create`)
   - Click "Add New Product"
   - Select product category
   - Choose template (if available)

2. **Basic Information**
   - Product name
   - Product SKU/Code
   - Category and subcategory
   - Product type
   - Short description (160 chars for SEO)
   - Detailed description

3. **Specifications**
   - Material type
   - Dimensions (L x W x H)
   - Weight
   - Color options
   - Finish type
   - Grade/quality
   - Custom specifications (key-value pairs)

4. **Pricing**
   - Base price per unit
   - Unit of measurement
   - Currency
   - Volume discount tiers:
     - Quantity range 1: Price
     - Quantity range 2: Price
     - Quantity range 3: Price
   - Minimum order quantity (MOQ)
   - Maximum order quantity (if any)

5. **Images & Media**
   - Upload primary image
   - Upload additional images (up to 10)
   - Upload 360° view (optional)
   - Upload AR model (optional)
   - Upload product video (optional)
   - Set image as primary

6. **Inventory & Lead Time**
   - Current stock quantity
   - Low stock alert level
   - Reorder point
   - Manufacturing lead time (days)
   - Delivery time estimate
   - Available from date

7. **Certifications**
   - Select applicable certifications
   - Link certificate documents
   - Add certification numbers

8. **Sustainability Metrics**
   - Recyclable: Yes/No
   - Recycled content percentage
   - Biodegradable: Yes/No
   - Carbon footprint (kg CO2)
   - Sustainability certifications

9. **Shipping Information**
   - Package dimensions
   - Package weight
   - Shipping restrictions
   - Available shipping methods
   - Shipping costs

10. **SEO Optimization**
    - Meta title
    - Meta description
    - Keywords/tags
    - URL slug

11. **Additional Details**
    - Warranty information
    - Return policy
    - Care instructions
    - Related products
    - Cross-sell products

12. **Preview Product**
    - Review all information
    - Check image display
    - Verify pricing tiers
    - Test responsiveness

13. **Publish**
    - Save as draft (for later)
    - Submit for approval (if platform requires)
    - Publish immediately
    - Schedule publication

14. **Product Live**
    - Product visible in catalog
    - Appears in search results
    - Track product views
    - Monitor performance

**Exit Point**: Product listed and visible to buyers

---

### 2.3 RFQ Response Flow

**Entry Point**: RFQ notification or RFQ listing page

**Steps**:

1. **RFQ Notification**
   - Email alert
   - Dashboard notification
   - SMS alert (if enabled)

2. **View Available RFQs** (`/supplier/rfq`)
   - Browse matching RFQs
   - Filter by:
     - Category
     - Buyer location
     - Deadline
     - Budget range
   - Sort by date, urgency

3. **Review RFQ Details** (`/supplier/rfq/:id`)
   - Read buyer requirements
   - View specifications
   - Check quantity needed
   - Review delivery location
   - Check deadline
   - View buyer profile
   - Read terms and conditions

4. **Assess Capability**
   - Check if can fulfill requirements
   - Verify capacity availability
   - Calculate costs
   - Determine delivery timeline

5. **Decision**: Respond or Skip?

**If Respond**:
6. **Prepare Quote**
   - Click "Submit Quote"
   - Quote form opens

7. **Enter Quote Details**
   - Confirm product specifications
   - Unit price
   - Total price calculation
   - Quantity confirmation
   - Lead time (days)
   - Delivery timeline
   - Payment terms offered
   - Validity period of quote

8. **Add Details**
   - Technical specifications compliance
   - Quality certifications
   - Manufacturing process brief
   - Value propositions
   - Any deviations from RFQ

9. **Attach Documents**
   - Product specifications sheet
   - Certifications
   - Sample images
   - Test reports
   - Company profile

10. **Pricing Breakdown** (Optional)
    - Material costs
    - Manufacturing costs
    - Shipping costs
    - Taxes
    - Total

11. **Terms & Conditions**
    - Payment terms
    - Delivery terms
    - Warranty
    - Return policy
    - Special conditions

12. **Review Quote**
    - Preview submission
    - Check calculations
    - Verify documents attached
    - Edit if needed

13. **Submit Quote**
    - Click "Submit Quote"
    - Confirmation message
    - Buyer notified
    - Quote ID generated

14. **Track Quote Status**
    - Monitor in quotes dashboard
    - Receive updates:
      - Buyer viewed quote
      - Buyer shortlisted quote
      - Negotiation started
      - Quote accepted/rejected

15. **Negotiation** (if buyer initiates)
    - Receive counter offer
    - Review terms
    - Accept, reject, or counter again
    - Real-time chat if needed

16. **Quote Awarded**
    - Receive award notification
    - Quote automatically converts to order
    - Proceed to order fulfillment

**If Skip**:
6. **Decline RFQ**
   - Click "Not Interested"
   - Optionally provide reason
   - RFQ removed from list

**Exit Point**: Quote submitted and tracked, or RFQ declined

---

### 2.4 Order Fulfillment Flow

**Entry Point**: New order notification

**Steps**:

1. **New Order Alert**
   - Email notification
   - Dashboard alert
   - SMS notification (if enabled)
   - Sound notification (if logged in)

2. **View Order** (`/supplier/orders/:id`)
   - Order number
   - Order date
   - Buyer information
   - Delivery location
   - Line items
   - Quantities
   - Prices
   - Special instructions
   - Requested delivery date

3. **Review Order**
   - Verify product availability
   - Check inventory
   - Confirm capacity
   - Calculate delivery timeline
   - Review special requirements

4. **Decision**: Accept or Decline?

**If Accept**:
5. **Accept Order**
   - Click "Accept Order"
   - Confirm delivery date
   - Add any notes for buyer
   - Set order to "Confirmed" status

6. **Order Confirmed**
   - Buyer notified
   - Order added to fulfillment queue
   - Production/preparation scheduled

7. **Update Status: Processing**
   - Mark order as "Processing"
   - Internal notes on progress
   - Buyer can see status update

8. **Prepare Shipment**
   - Pick products from inventory
   - Quality check
   - Package items
   - Add packing slip
   - Generate shipping label

9. **Generate Invoice** (`/supplier/invoices/create`)
   - Auto-populate from order
   - Verify line items
   - Calculate taxes (GST)
   - Add any additional charges
   - Review total
   - Generate invoice PDF
   - Send to buyer

10. **Create Shipment** (`/supplier/logistics/create`)
    - Select logistics partner
    - Enter package details
    - Weight and dimensions
    - Generate AWB number
    - Print shipping label
    - Schedule pickup

11. **Update Status: Shipped**
    - Mark order as "Shipped"
    - Enter tracking number
    - Enter logistics partner
    - Estimated delivery date
    - Buyer notified automatically

12. **Track Shipment**
    - Update tracking status
    - Monitor delivery progress
    - Handle delays proactively
    - Communicate with buyer if issues

13. **Delivery Confirmation**
    - Upload proof of delivery
    - Mark as "Delivered"
    - Request buyer confirmation
    - Buyer notified

14. **Post-Delivery**
    - Wait for buyer confirmation
    - Monitor for reviews
    - Address any issues immediately
    - Request review (if buyer hasn't provided)

**If Decline**:
5. **Decline Order**
   - Click "Decline Order"
   - Select reason:
     - Out of stock
     - Capacity issues
     - Unable to meet delivery date
     - Price error
     - Other
   - Add explanation
   - Suggest alternative (optional)
   - Submit

6. **Order Cancelled**
   - Buyer notified
   - Order marked as cancelled
   - Refund processed (if payment made)

15. **Issue Resolution** (if problems arise)
    - Buyer reports issue
    - Review complaint
    - Acknowledge within 24 hours
    - Investigate issue
    - Propose solution:
      - Replacement
      - Partial refund
      - Full refund
      - Credit note
    - Implement resolution
    - Follow up with buyer
    - Close issue

**Exit Point**: Order delivered and completed, or issue resolved

---

### 2.5 Invoice Discounting Application Flow

**Entry Point**: Invoices pending payment

**Steps**:

1. **View Eligible Invoices** (`/supplier/finance`)
   - Dashboard shows eligible invoices
   - Filter criteria:
     - Invoice age > 3 days
     - Amount > minimum threshold
     - Buyer verified
     - No disputes

2. **Select Invoice** for Discounting
   - Click on invoice
   - View invoice details
   - Check eligibility status

3. **View Discounting Terms**
   - Discount rate percentage
   - Processing fee
   - Net amount to receive
   - Repayment terms
   - Calculate savings vs waiting

4. **Apply for Discounting**
   - Click "Apply for Discounting"
   - Review terms
   - Select finance partner (if multiple)

5. **Submit Application**
   - Accept terms and conditions
   - E-sign agreement
   - Submit application

6. **Verification Process**
   - Finance team reviews
   - Buyer verification (automated)
   - Invoice authentication
   - Credit assessment

7. **Approval/Rejection**
   **If Approved**:
   - Approval notification
   - Funds disbursement timeline
   - Agreement document

   **If Rejected**:
   - Rejection notification
   - Reason provided
   - Can reapply or wait for buyer payment

8. **Disbursement**
   - Funds transferred to bank account
   - Notification of transfer
   - Download disbursement receipt
   - Invoice marked as discounted

9. **Repayment** (Automatic)
   - When buyer pays invoice
   - Repayment auto-deducted from incoming payment
   - Supplier receives remaining amount
   - Transaction completed

10. **Finance Dashboard**
    - Track all discounting applications
    - View repayment schedule
    - Monitor cash flow improvement
    - Financial reports

**Exit Point**: Funds received and repayment completed

---

### 2.6 Performance Monitoring Flow

**Entry Point**: Supplier dashboard

**Steps**:

1. **Access Performance Dashboard** (`/supplier/performance`)
   - View overall rating
   - Key metrics displayed:
     - Overall rating (out of 5)
     - Total orders completed
     - On-time delivery rate
     - Response time
     - Quality score

2. **View Detailed Metrics**

   **Order Performance**
   - Orders this month
   - Order fulfillment rate
   - Average processing time
   - Cancellation rate
   - Revenue trends

   **Delivery Performance**
   - On-time delivery percentage
   - Average delivery time
   - Delayed deliveries count
   - Delivery issues

   **Quality Metrics**
   - Quality rating
   - Return rate
   - Complaint rate
   - Resolution time

   **Communication**
   - Average response time
   - RFQ response rate
   - Quote win rate

3. **View Reviews & Ratings**
   - All buyer reviews
   - Filter by rating
   - Read feedback
   - Identify patterns
   - Common compliments
   - Common complaints

4. **Respond to Reviews**
   - Click on review
   - Write response
   - Thank for positive feedback
   - Address concerns professionally
   - Submit response

5. **Identify Improvement Areas**
   - Low-scoring categories
   - Trending issues
   - Comparison with category average
   - Actionable insights

6. **Set Improvement Goals**
   - Target metrics
   - Action plans
   - Timeline

7. **Track Progress**
   - Weekly performance updates
   - Month-over-month comparison
   - Achievement notifications
   - Celebrate milestones

**Exit Point**: Continuous performance monitoring and improvement

---

### 2.7 Audit & Certification Management Flow

**Entry Point**: Audit notification or certifications page

**Flow A: Scheduled Audit**

1. **Audit Notification**
   - Email about upcoming audit
   - Dashboard notification
   - Calendar event

2. **View Audit Details** (`/supplier/audits/:id`)
   - Audit type (initial, renewal, surprise, buyer-specific)
   - Audit date
   - Auditor information
   - Audit scope
   - Checklist

3. **Prepare for Audit**
   - Download audit checklist
   - Review requirements
   - Prepare documents
   - Organize workspace
   - Brief team

4. **Audit Day**
   - Auditor arrives
   - Facility tour
   - Document review
   - Interviews
   - Observations
   - Q&A session

5. **Post-Audit**
   - Receive preliminary findings
   - Discuss concerns
   - Clarify questions

6. **Audit Report**
   - Receive formal audit report
   - Review findings
   - Check scores
   - Note non-conformances

7. **Corrective Actions** (if needed)
   - Plan corrective actions
   - Implement fixes
   - Document changes
   - Upload evidence
   - Request follow-up audit

8. **Audit Completion**
   - Final approval
   - Audit status updated
   - Certificate issued (if pass)
   - Validity period noted

**Flow B: Certification Management**

1. **Access Certifications** (`/supplier/certifications`)
   - View all certifications
   - Active certificates
   - Expiring soon alerts
   - Expired certificates

2. **Add New Certification**
   - Click "Add Certification"
   - Select certification type:
     - ISO 9001
     - ISO 14001
     - FDA
     - BRC
     - FSC
     - Other
   - Enter details:
     - Certificate number
     - Issuing authority
     - Issue date
     - Expiry date
     - Scope
   - Upload certificate document
   - Submit for verification

3. **Verification**
   - Admin reviews certificate
   - Authenticity check
   - Approval/rejection

4. **Certification Active**
   - Displayed on profile
   - Visible to buyers
   - Badge on products

5. **Renewal Reminders**
   - 90 days before expiry: First alert
   - 60 days: Second alert
   - 30 days: Third alert
   - 15 days: Urgent alert

6. **Renew Certification**
   - Click on expiring certificate
   - Initiate renewal process
   - Upload renewed certificate
   - Update expiry date
   - Submit for verification

7. **Maintain Compliance**
   - Track all certifications
   - Set personal reminders
   - Download certificates
   - Share with buyers when requested

**Exit Point**: Audit passed and certifications up to date

---

## 3. ADMIN USER FLOWS

### 3.1 Supplier Verification Flow

**Entry Point**: Admin dashboard or verification queue

**Steps**:

1. **Access Verification Queue** (`/admin/suppliers/verification`)
   - View pending supplier applications
   - Sort by date, priority
   - Filter by category

2. **Select Supplier Application**
   - Click on pending supplier
   - View full application

3. **Review Basic Information**
   - Company details
   - Contact information
   - Business type
   - Manufacturing capabilities

4. **Verify Documents**
   - Check GST certificate
   - Verify business registration
   - Check PAN card
   - Review bank details
   - Check facility license
   - Review certifications

5. **Document Verification**
   - Cross-check details
   - Verify document authenticity
   - Check registration numbers online
   - Flag any discrepancies

6. **Background Check**
   - Check business registry
   - Verify GST number on portal
   - Check for blacklisting
   - Review industry reputation

7. **Capacity Assessment**
   - Review stated capacity
   - Check facility size
   - Assess workforce
   - Evaluate machinery

8. **Decision Point**: Audit required?

**If Audit Required**:
9. **Schedule Audit**
   - Assign auditor
   - Set audit date
   - Notify supplier
   - Wait for audit completion
   - Review audit report

**If Audit Not Required** (or after audit):
10. **Make Decision**
    
    **If Approve**:
    - Click "Approve Supplier"
    - Add approval notes
    - Set supplier tier (if applicable)
    - Confirm approval

    **If Reject**:
    - Click "Reject Application"
    - Select rejection reason:
      - Incomplete documents
      - False information
      - Failed audit
      - Insufficient capacity
      - Other
    - Add detailed explanation
    - Provide guidance for reapplication
    - Confirm rejection

    **If Need More Info**:
    - Click "Request Information"
    - List required documents/details
    - Set response deadline
    - Send to supplier

11. **Notification Sent**
    - Supplier receives decision
    - Welcome email (if approved)
    - Access granted (if approved)
    - Onboarding resources sent

12. **Post-Approval Setup** (if approved)
    - Supplier category assigned
    - Subscription tier set
    - Feature access configured
    - Analytics tracking enabled

**Exit Point**: Supplier verified and active, or rejected with feedback

---

### 3.2 Dispute Resolution Flow

**Entry Point**: Dispute notification

**Steps**:

1. **Dispute Alert**
   - Dashboard notification
   - Email alert
   - Dispute added to queue

2. **View Dispute** (`/admin/disputes/:id`)
   - Dispute type:
     - Payment dispute
     - Quality complaint
     - Delivery issue
     - Pricing disagreement
     - Other
   - Parties involved (buyer and supplier)
   - Dispute description
   - Supporting evidence
   - Timeline of events

3. **Review Details**
   - Read buyer's claim
   - Read supplier's response
   - View supporting documents
   - Check order history
   - Review communication logs

4. **Gather Information**
   - Contact buyer (if needed)
   - Contact supplier (if needed)
   - Request additional evidence
   - Review platform policies
   - Check similar past disputes

5. **Assess Situation**
   - Determine facts
   - Identify policy violations
   - Assess severity
   - Consider precedents

6. **Mediation** (Optional)
   - Facilitate communication
   - Suggest compromises
   - Propose solutions:
     - Partial refund
     - Replacement
     - Credit note
     - Revised terms

7. **Decision Making**
   - Determine resolution
   - Document reasoning
   - Prepare decision statement

8. **Communicate Decision**
   - Notify both parties
   - Explain decision
   - Outline next steps
   - Set deadlines for actions

9. **Implement Resolution**
   - Process refund (if applicable)
   - Adjust ratings (if applicable)
   - Update order status
   - Monitor compliance

10. **Follow-Up**
    - Confirm resolution implemented
    - Check party satisfaction
    - Close dispute
    - Document learnings

11. **Escalation** (if unresolved)
    - Escalate to senior admin
    - Legal review (if needed)
    - Final decision
    - Platform policies enforcement

**Exit Point**: Dispute resolved and closed

---

## 4. AUDITOR USER FLOWS

### 4.1 Conduct Audit Flow

**Entry Point**: Audit assignment notification

**Steps**:

1. **Audit Assignment**
   - Email notification
   - Dashboard alert
   - View assignment details

2. **Review Assignment** (`/auditor/audits/:id`)
   - Supplier information
   - Audit type
   - Audit scope
   - Checklist
   - Deadline

3. **Accept/Decline Assignment**
   - Review availability
   - Check expertise match
   - Accept or decline with reason

4. **Pre-Audit Preparation**
   - Download audit checklist
   - Review supplier profile
   - Review previous audit reports (if any)
   - Prepare documentation requirements list

5. **Contact Supplier**
   - Schedule audit date
   - Confirm location
   - Send document requirements
   - Set expectations

6. **Audit Confirmation**
   - Confirm date and time
   - Travel arrangements
   - Equipment checklist

7. **Conduct Audit** (On-site)
   
   **Opening Meeting**
   - Introduce self
   - Explain audit process
   - Set expectations
   - Q&A

   **Document Review**
   - Business licenses
   - Quality certifications
   - Process documentation
   - Safety records
   - Training records

   **Facility Tour**
   - Manufacturing area
   - Storage facilities
   - Quality control lab
   - Waste management
   - Safety systems

   **Observations**
   - Process observation
   - Equipment assessment
   - Hygiene and cleanliness
   - Safety compliance
   - Quality control practices

   **Interviews**
   - Management
   - Quality team
   - Production staff
   - Warehouse staff

   **Evidence Collection**
   - Take photographs
   - Collect samples
   - Copy documents
   - Note observations

   **Closing Meeting**
   - Preliminary findings
   - Discuss concerns
   - Clarify questions
   - Next steps

8. **Post-Audit Documentation**
   - Complete audit checklist
   - Score each criterion
   - Document non-conformances
   - Note observations
   - Add photographic evidence

9. **Audit Report Creation** (`/auditor/audits/:id/report`)
   - Executive summary
   - Audit scope
   - Methodology
   - Findings:
     - Conformances
     - Non-conformances (major/minor)
     - Observations
     - Opportunities for improvement
   - Scoring
   - Recommendations
   - Conclusion

10. **Upload Report**
    - Upload final report PDF
    - Attach evidence
    - Submit for review

11. **Admin Review**
    - Admin reviews report
    - May request clarifications
    - Approves report

12. **Report Published**
    - Supplier receives report
    - Buyer access (if applicable)
    - Certificate issued (if pass)

13. **Follow-Up** (if needed)
    - Schedule follow-up audit
    - Verify corrective actions
    - Close audit

**Exit Point**: Audit completed and report submitted

---

## 5. CROSS-FUNCTIONAL FLOWS

### 5.1 Real-Time Chat Flow

**Entry Point**: Chat button anywhere on platform

**Steps**:

1. **Initiate Chat**
   - Click "Chat" or message icon
   - Select recipient (supplier/buyer)
   - Chat window opens

2. **Chat Interface** (`/buyer/messages/:conversationId` or `/supplier/messages/:conversationId`)
   - Message thread
   - Real-time updates
   - Typing indicator

3. **Send Message**
   - Type message
   - Press enter or click send
   - Message delivered instantly

4. **Advanced Features**
   - Attach files (documents, images)
   - Share order/product links
   - Use quick replies
   - Add emojis
   - Quote previous messages

5. **Receive Messages**
   - Real-time notifications
   - Sound alert (if enabled)
   - Browser notification
   - Email notification (if offline)
   - SMS (if configured)

6. **File Sharing**
   - Click attach icon
   - Select file (max 10MB)
   - File uploads
   - Recipient receives file
   - Download file

7. **Message Management**
   - Search messages
   - Filter conversations
   - Archive conversations
   - Mark as unread
   - Delete conversations

8. **Read Receipts**
   - Single check: Sent
   - Double check: Delivered
   - Blue check: Read
   - Typing indicator when other party types

**Exit Point**: Communication completed

---

### 5.2 Negotiation Flow

**Entry Point**: Quote received or quote submitted

**Buyer Side**:

1. **Receive Quote**
   - Notification received
   - View quote details

2. **Review Quote**
   - Compare with requirements
   - Check pricing
   - Review terms

3. **Decision**: Accept, Reject, or Negotiate?

**If Negotiate**:
4. **Initiate Negotiation**
   - Click "Negotiate"
   - Enter counter offer:
     - Revised price
     - Modified quantity
     - Different delivery terms
     - Payment terms adjustment
   - Add reasoning
   - Send counter offer

5. **Wait for Response**
   - Notification when supplier responds
   - Real-time updates

**Supplier Side**:

1. **Receive Counter Offer**
   - Notification
   - View buyer's proposal

2. **Review Counter Offer**
   - Check feasibility
   - Calculate margins
   - Assess terms

3. **Decision**: Accept, Reject, or Counter Again?

**If Accept**:
4. **Accept Offer**
   - Click "Accept Counter Offer"
   - Terms finalized
   - Convert to order

**If Counter Again**:
4. **Send Counter Offer**
   - Revise terms
   - Adjust pricing
   - Send back to buyer

**Iteration**:
- Multiple rounds of negotiation
- Real-time chat available
- Direct call option
- Eventually reach agreement or cancel

**Exit Point**: Agreement reached and order created, or negotiation cancelled

---

## 6. ERROR & EDGE CASE FLOWS

### 6.1 Payment Failure Flow

**Steps**:

1. **Payment Attempt**
   - Buyer attempts payment
   - Payment gateway processes

2. **Payment Fails**
   - Failure message displayed
   - Reason shown (if available):
     - Insufficient funds
     - Bank declined
     - Card expired
     - Technical error
     - Other

3. **Retry Options**
   - Try again button
   - Change payment method
   - Contact support

4. **Alternative Payment**
   - Select different method
   - Try different card
   - Use bank transfer
   - Request invoice

5. **Support Escalation**
   - If repeated failures
   - Contact support button
   - Support ticket created
   - Admin investigation

**Exit Point**: Payment successful or support resolves

---

### 6.2 Product Out of Stock Flow

**Supplier Side**:

1. **Low Stock Alert**
   - Inventory reaches threshold
   - Email alert
   - Dashboard notification

2. **Options**:
   - Restock immediately
   - Mark product as out of stock
   - Set expected restock date

**Buyer Side**:

1. **Attempt to Order**
   - Add out-of-stock product to cart
   - "Out of Stock" badge shown

2. **Notification Options**
   - "Notify when available" button
   - Enter email
   - Subscribe to alerts

3. **Alternative Suggestions**
   - View similar products
   - Browse alternatives
   - Contact supplier for timeline

**Exit Point**: Buyer notified when restocked or buys alternative

---

## Flow Completion Metrics

### Success Metrics per Flow
- Completion rate
- Drop-off points
- Time to complete
- Error rate
- User satisfaction

### Optimization Points
- Simplify complex flows
- Reduce steps where possible
- Add progress indicators
- Provide clear CTAs
- Enable save and resume

---

**Document Version**: 1.0  
**Last Updated**: 2024  
**Status**: Planning Phase

