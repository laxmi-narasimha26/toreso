# Page — Orders

URL
- `/orders`

Audience
- Buyer (auth)

SEO
- Noindex

Sections
- Orders table with filters (status, date, plant, supplier), exports

Buttons & Routing
- View → `/order/[id]`
- Reorder → `/rfq?reorder=[id]`
- Download Invoice → `/orders/[id]/invoice`

Data & Events
- Orders API; events: `orders_view`, `order_row_clicked`


