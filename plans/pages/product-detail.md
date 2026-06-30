# Page — Product Detail

URL
- `/product/[id]`

Audience
- Buyer; Supplier (own products)

SEO
- Indexable; schema Product, Offer, Breadcrumb

Sections
- Gallery, specs, sustainability metrics, pricing tiers, supplier info, reviews

Buttons & Routing
- Add to RFQ → `/rfq?product=[id]`
- Request Sample → `/rfq?type=sample&product=[id]`
- Negotiate → `/negotiation?product=[id]`
- Chat with Supplier → `/chat?supplier=[supplierId]`

Data & Events
- Product API; events: `product_view`, `rfq_initiated`


