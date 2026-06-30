# Feature Specification: RFQ/RFI System

## Overview

Request for Quote (RFQ) and Request for Information (RFI) system enables buyers to solicit quotes from multiple suppliers for specific packaging needs, facilitating competitive bidding and informed purchasing decisions.

---

## User Stories

### Buyer Stories
- As a buyer, I want to create an RFQ with detailed specifications so that suppliers can quote accurately
- As a buyer, I want to receive multiple quotes so that I can compare and choose the best option
- As a buyer, I want to compare quotes side-by-side so that I can make informed decisions
- As a buyer, I want to negotiate with suppliers so that I can get better pricing
- As a buyer, I want to award contracts directly from RFQ so that ordering is streamlined
- As a buyer, I want to save RFQ templates so that I can reuse for similar requirements
- As a buyer, I want to track RFQ status so that I know where it stands
- As a buyer, I want to extend deadlines if needed so that I get more responses

### Supplier Stories
- As a supplier, I want to see relevant RFQs so that I can bid on opportunities
- As a supplier, I want to submit detailed quotes so that buyers understand my offering
- As a supplier, I want to ask clarification questions so that I quote accurately
- As a supplier, I want to track my quote status so that I know if I'm being considered
- As a supplier, I want to revise quotes before deadline so that I can stay competitive
- As a supplier, I want notifications for new RFQs so that I don't miss opportunities

---

## Functional Requirements

### 1. Create RFQ/RFI (Buyer)

**RFQ Creation Form - Multi-Step:**

**Step 1: Basic Information**
- RFQ Title * (required)
- Type: RFQ or RFI (radio selection)
- Category * (dropdown with hierarchy)
- Sub-category (if applicable)
- Industry segment (dropdown)
- Urgency Level (Low, Medium, High, Urgent)
- Internal Reference Number (optional)
- Description * (rich text editor, 500+ chars)
  - Purpose of procurement
  - Current challenges
  - Expected outcomes

**Step 2: Product Specifications**
- Product Name/Description *
- Specifications Builder:
  - Material Type * (dropdown/input)
  - Dimensions (L × W × H) with unit selector
  - Weight (with unit)
  - Color options
  - Finish type
  - Grade/Quality level
  - Custom specifications (add key-value pairs dynamically)
  - Special requirements (text area)
  
- Technical Documents Upload:
  - Technical drawings (PDF, DWG, AutoCAD)
  - Sample images
  - Specification sheets
  - Reference materials
  - Maximum 10 files, 10MB each

**Step 3: Quantity & Delivery**
- Quantity Required * (number input)
- Unit of Measurement * (dropdown: pieces, kg, meters, sq meters, etc.)
- Delivery Type:
  - One-time delivery
  - Split delivery (specify batches)
  - Recurring order (specify frequency)
- Delivery Plant/Location * (dropdown from saved plants)
- Delivery Address (auto-fill from plant or custom)
- Expected Delivery Date * (date picker)
- Flexible delivery date checkbox
- Delivery instructions (text area)

**Step 4: Quality & Compliance**
- Quality Requirements (text area)
- Certifications Required:
  - ISO 9001
  - ISO 14001
  - FSC
  - FDA
  - BRC
  - Custom (add text field)
- Testing Requirements (if any)
- Quality Standards to be Met
- Packaging Requirements
- Labeling Requirements
- Documentation Requirements

**Step 5: Commercial Terms**
- Budget Range (optional):
  - Minimum budget
  - Maximum budget
  - Currency
  - Hide from suppliers checkbox
- Payment Terms Preference:
  - Advance payment
  - On delivery
  - 30 days credit
  - 60 days credit
  - 90 days credit
  - Custom terms
- Warranty Requirements
- Return Policy Requirements
- Contract Duration (for recurring orders)
- Penalty Clauses (text area)

**Step 6: Supplier Selection**
- Supplier Selection Type *:
  - **Broadcast to All Eligible Suppliers**
    - System automatically shows to suppliers in matching category
  - **Select Specific Suppliers**
    - Search and select from supplier directory
    - Multi-select with checkboxes
    - Shows: Supplier name, rating, past performance
    - Can select up to 50 suppliers
  - **Invite Suppliers via Email**
    - Enter email addresses (comma-separated)
    - Custom invitation message

- Supplier Criteria (optional filters):
  - Minimum rating
  - Location preference
  - Capacity requirement
  - Certification requirement

**Step 7: Timeline & Settings**
- Response Deadline * (date & time picker)
  - System suggests: 7 days from now
  - Minimum: 48 hours
  - Maximum: 90 days
- Quote Submission Format:
  - Standard format (default)
  - Custom format (attach template)
- Quote Validity Period (days)
- Allow Questions from Suppliers (Yes/No)
- Auto-award if single quote (Yes/No)
- Visibility:
  - Public (searchable in RFQ directory)
  - Private (only selected suppliers)

**Step 8: Review & Publish**
- Preview RFQ (formatted view)
- Summary of all entered information
- Edit buttons for each section
- Save as Template:
  - Template name
  - Template description
  - Save checkbox
- Save as Draft (for later completion)
- Publish RFQ (final submission)

**Post-Publish:**
- RFQ number generated (RFQ-2024-001234)
- Confirmation message
- Notifications sent to suppliers
- Redirect to RFQ detail page

### 2. RFQ/RFI Dashboard (Buyer)

**View Options:**
- **All RFQs** (default)
- **My RFQs** (created by me)
- **Team RFQs** (created by team members)
- **Drafts**
- **Templates**

**Filters:**
- Status:
  - Draft
  - Published
  - Receiving Quotes
  - Under Review
  - Awarded
  - Closed
  - Cancelled
- Date Range
- Category
- Urgency
- Budget Range

**Sort Options:**
- Most Recent
- Deadline Approaching
- Most Quotes Received
- Alphabetical

**RFQ Card Display:**
```
┌─────────────────────────────────────┐
│ RFQ-2024-001234    [Status Badge]  │
│ Heavy Duty Corrugated Boxes         │
│ ├─ Category: Corrugated Boxes       │
│ ├─ Qty: 10,000 pieces               │
│ ├─ Deadline: Mar 15, 2024           │
│ ├─ Quotes: 5 received                │
│ └─ Budget: ₹4-5 Lakhs               │
│ [View Details] [Compare Quotes]     │
└─────────────────────────────────────┘
```

**Quick Actions:**
- Duplicate RFQ
- Edit (if no quotes received)
- Extend Deadline
- Close RFQ
- Delete (if draft)
- Download PDF

### 3. RFQ Detail Page (Buyer)

**Page Sections:**

**A. RFQ Header**
- RFQ Number and Title
- Status badge
- Created date
- Created by
- Deadline countdown timer
- Action buttons:
  - Edit (if no quotes)
  - Extend Deadline
  - Close RFQ
  - Cancel RFQ
  - Share RFQ
  - Download PDF
  - Print

**B. RFQ Information Tabs**

**Tab 1: Overview**
- All RFQ details (read-only formatted view)
- Specifications table
- Attached documents (downloadable)
- Delivery details
- Quality requirements
- Commercial terms

**Tab 2: Quotes Received**
- Quote count: "5 quotes received"
- Quote cards with summary:
  ```
  ┌─────────────────────────────────────┐
  │ ABC Packaging     [Rating: 4.5★]   │
  │ ├─ Price: ₹45/piece                 │
  │ ├─ Total: ₹4,50,000                 │
  │ ├─ Lead Time: 15 days               │
  │ ├─ Payment Terms: 30 days credit    │
  │ └─ Valid Until: Apr 15, 2024        │
  │ [View Details] [Compare] [Award]    │
  └─────────────────────────────────────┘
  ```
- Sort quotes by:
  - Lowest price
  - Highest rating
  - Best lead time
  - Submission date
- Filter quotes by:
  - Price range
  - Rating
  - Certifications
  - Location

**Tab 3: Quote Comparison**
- Side-by-side comparison table (up to 4 quotes)
- Select quotes to compare (checkboxes)
- Comparison attributes:
  - Supplier name & rating
  - Unit price
  - Total price
  - Lead time
  - Payment terms
  - Warranty
  - Certifications
  - Specifications compliance
  - Additional services
  - Terms & conditions
- Highlight best values (green)
- Highlight differences
- Export comparison (PDF, Excel)

**Tab 4: Q&A**
- Questions from suppliers
- Answer publicly or privately
- Q&A thread format
- Notifications to all suppliers when public answer posted
- Search questions

**Tab 5: Activity Log**
- Timeline of all activities:
  - RFQ created
  - Sent to suppliers
  - Quote received
  - Question asked/answered
  - Deadline extended
  - Quote awarded
  - RFQ closed
- User and timestamp for each activity

**C. Supplier Responses Section**
- Total responses received
- List of suppliers who viewed (if visible)
- List of suppliers who submitted quotes
- List of suppliers who declined

**D. Actions Panel (Sidebar)**
- Award Contract (button)
- Request Additional Info
- Negotiate with Supplier
- Start Chat
- Extend Deadline
- Close RFQ
- Download All Quotes

### 4. Quote Submission (Supplier)

**Available RFQs Page (Supplier)**

**Filters:**
- Category
- Location
- Deadline
- Budget Range
- Certifications Required
- My Capabilities Match

**RFQ Card (Supplier View):**
```
┌─────────────────────────────────────┐
│ RFQ-2024-001234    [New]           │
│ Heavy Duty Corrugated Boxes         │
│ ├─ Buyer: XYZ Industries            │
│ ├─ Category: Corrugated Boxes       │
│ ├─ Qty: 10,000 pieces               │
│ ├─ Deadline: 5 days left            │
│ ├─ Certifications: ISO 9001         │
│ └─ Location: Mumbai                 │
│ [View Details] [Submit Quote]       │
│ [Not Interested]                     │
└─────────────────────────────────────┘
```

**Quote Submission Form:**

**Step 1: Review RFQ**
- Full RFQ details display
- Download attachments
- Review requirements checklist
- Ask Question button (if allowed)
- Proceed to Quote button

**Step 2: Pricing**
- Unit Price * (per specification unit)
- Quantity Confirmation * (must match RFQ)
- Price Breakdown (optional):
  - Material cost
  - Manufacturing cost
  - Logistics cost
  - Taxes
  - Margins
- Total Price (auto-calculated)
- Currency
- Price Validity Period * (days)
- Valid Until Date (auto-calculated)

**Step 3: Delivery & Terms**
- Lead Time * (days)
- Manufacturing lead time
- Shipping lead time
- Earliest Delivery Date
- Latest Delivery Date
- Delivery Terms * (dropdown):
  - FOB (Free on Board)
  - CIF (Cost, Insurance, Freight)
  - Ex-Works
  - Custom (specify)
- Payment Terms * (dropdown):
  - Advance payment (%)
  - On delivery
  - 15/30/45/60/90 days credit
  - Custom terms
- Warranty Period (months)
- Return Policy

**Step 4: Specifications Compliance**
- Compliance Statement (text area)
  - How does your product meet requirements?
  - Any deviations from specs?
  - Alternative solutions offered?
- Specifications Comparison Table:
  - Requested Spec | Your Offering
  - Material: 5-ply Kraft | 5-ply Kraft ✓
  - Dimensions: 30×20×15 | 30×20×15 ✓
  - (Auto-populated, editable)
- Highlight Deviations in red

**Step 5: Certifications & Documents**
- Select Applicable Certifications:
  - Checkboxes for each required certification
  - Upload certificate copy for each
- Upload Supporting Documents:
  - Product specifications
  - Test reports
  - Quality certificates
  - Company profile
  - Sample images
  - Case studies
  - Maximum 10 files

**Step 6: Additional Information**
- Production Capacity (units/month)
- Current Available Capacity
- Quality Assurance Process
- Packaging Details
- Special Services Offered:
  - Custom packaging
  - Branding/printing
  - JIT delivery
  - Inventory management
  - etc.
- Value-Add Services
- References (optional):
  - Previous similar projects
  - Client testimonials
  - Contact references

**Step 7: Notes & T&C**
- Additional Notes for Buyer (text area)
- Highlight Key Differentiators
- Special Offers (if any)
- Terms & Conditions (rich text editor)
- Accept RFQ Terms checkbox *
- Commitment Statement checkbox *

**Step 8: Review & Submit**
- Preview quote (formatted view)
- Edit buttons for each section
- Save as Draft
- Submit Quote button

**Post-Submission:**
- Quote number generated (QUO-2024-001234)
- Confirmation message
- Email confirmation to supplier
- Buyer notification
- Redirect to quote status page

### 5. Quote Management (Supplier)

**My Quotes Dashboard:**

**Views:**
- All Quotes
- Pending Response
- Shortlisted
- Awarded
- Declined
- Expired

**Quote Card:**
```
┌─────────────────────────────────────┐
│ QUO-2024-001234   [Shortlisted]    │
│ For: RFQ-2024-001234                │
│ Heavy Duty Corrugated Boxes         │
│ ├─ Buyer: XYZ Industries            │
│ ├─ Your Price: ₹45/piece            │
│ ├─ Total: ₹4,50,000                 │
│ ├─ Status: Under buyer review       │
│ └─ Submitted: Feb 20, 2024          │
│ [View Details] [Withdraw]           │
└─────────────────────────────────────┘
```

**Quote Detail Page (Supplier View):**
- Quote details (read-only)
- RFQ reference (link)
- Status tracking:
  - Submitted
  - Viewed by buyer
  - Shortlisted
  - Negotiation started
  - Awarded/Declined
- Buyer questions/feedback
- Revise Quote (if before deadline)
- Withdraw Quote
- Download PDF

### 6. Quote Comparison & Award (Buyer)

**Comparison View:**
- Select 2-4 quotes
- Side-by-side table
- All parameters compared
- Scoring system (optional):
  - Price score (40%)
  - Rating score (30%)
  - Lead time score (20%)
  - Terms score (10%)
  - Total score calculated
- Highlight recommendations
- Export comparison

**Award Process:**
- Select winning quote
- Award Confirmation Dialog:
  - Supplier name
  - Quote summary
  - Confirm details checkbox
  - Optional message to supplier
  - Terms acceptance
  - Award button
- Post-Award:
  - Email to winning supplier
  - Emails to non-selected suppliers
  - Automatic order creation (optional)
  - RFQ status: Awarded
  - Quote status: Awarded
  - Other quotes: Declined

### 7. Negotiation Feature

**Initiate Negotiation:**
- Button on quote detail page
- Opens negotiation thread

**Negotiation Interface:**
- Chat-style conversation
- Propose counter-offer:
  - Revised price
  - Modified quantity
  - Different terms
  - Custom conditions
- Attach documents
- Accept/Decline/Counter buttons
- Negotiation history
- Final agreement button

**Negotiation Rounds:**
- Track number of rounds
- Time-stamped messages
- Offer/Counter-offer display
- Eventually one party accepts

**Agreement:**
- Final terms displayed
- Both parties must accept
- E-signature option
- Convert to order

### 8. RFI (Request for Information)

**Differences from RFQ:**
- No pricing required
- Information gathering focus
- Supplier provides:
  - Capabilities
  - Product range
  - Technical information
  - Case studies
  - Samples offer
- No quote comparison
- No award process
- May lead to RFQ later

**RFI Response Form:**
- Company Overview
- Product Capabilities
- Technical Specifications
- Manufacturing Process
- Quality Certifications
- Case Studies
- Client References
- Sample Availability
- Consultation Offer

### 9. Templates

**Template Management (Buyer):**
- Save RFQ as template
- Template library
- Edit templates
- Duplicate template
- Delete template
- Use template (pre-fills RFQ form)

**Template Contents:**
- All RFQ fields except:
  - Dates
  - Supplier selection
  - Reference numbers
- Easy customization

### 10. Notifications

**Buyer Notifications:**
- New quote received
- Question from supplier
- Quote withdrawn
- Deadline approaching (48 hours)
- All quotes expired

**Supplier Notifications:**
- New relevant RFQ posted
- RFQ matched to your profile
- Your quote viewed by buyer
- You're shortlisted
- Question from buyer
- Buyer answered your question
- Deadline extended
- Quote awarded/declined
- Deadline approaching

---

## Non-Functional Requirements

### Performance
- RFQ creation: <3 seconds
- Quote submission: <3 seconds
- Quote comparison: <2 seconds
- Real-time updates for quotes

### Scalability
- Support 10,000+ active RFQs
- 100,000+ quotes
- Handle 1,000+ concurrent users

### Security
- Access control (buyers see only their RFQs)
- Suppliers see only their quotes
- Quote information confidential
- Secure file uploads
- Encryption for sensitive data

### Reliability
- 99.9% uptime
- Automatic email backups
- Data redundancy
- Audit trails

---

## Technical Implementation

### Frontend Components
```
/components/rfq/
  - RFQWizard.tsx (multi-step form)
  - RFQDashboard.tsx
  - RFQDetailPage.tsx
  - QuoteSubmissionForm.tsx
  - QuoteComparison.tsx
  - QuoteCard.tsx
  - NegotiationThread.tsx
  - RFQTemplates.tsx
```

### Backend Endpoints
```
POST   /rfqs (create)
GET    /rfqs (list with filters)
GET    /rfqs/:id (detail)
PUT    /rfqs/:id (update)
DELETE /rfqs/:id (delete)
POST   /rfqs/:id/extend-deadline
POST   /rfqs/:id/close
POST   /rfqs/:id/quotes (submit quote)
GET    /rfqs/:id/quotes (get quotes)
PUT    /rfqs/:id/quotes/:quoteId (update quote)
POST   /rfqs/:id/quotes/:quoteId/award
POST   /rfqs/:id/questions (ask question)
POST   /rfqs/:id/negotiation/:quoteId
```

### Database Tables
- rfqs
- rfq_quotes
- rfq_attachments
- rfq_questions
- rfq_templates
- quote_negotiations
- rfq_activity_log

---

## Success Metrics

- RFQ creation rate: 50+ per month
- Average quotes per RFQ: 3-5
- RFQ-to-order conversion: 40%+
- Average time to award: <7 days
- Supplier response rate: 60%+
- Buyer satisfaction: 4.5+/5

---

**Document Version**: 1.0  
**Last Updated**: 2024  
**Status**: Planning Phase  
**Priority**: Critical - Core Feature

