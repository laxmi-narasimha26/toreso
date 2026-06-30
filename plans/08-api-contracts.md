# API Contracts - Toreso B2B Marketplace

## API Overview

### Base URLs
- **Development**: `http://localhost:5000/api/v1`
- **Staging**: `https://api-staging.Toreso.com/v1`
- **Production**: `https://api.Toreso.com/v1`

### Authentication
All protected endpoints require JWT token in header:
```
Authorization: Bearer <access_token>
```

### Standard Response Format

**Success Response:**
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { /* response data */ },
  "meta": { /* pagination, etc */ }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error message",
  "errors": [ /* validation errors if applicable */ ]
}
```

### Pagination
```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5,
    "hasMore": true
  }
}
```

---

## Authentication Endpoints

### POST /auth/register/buyer
Register a new buyer organization

**Request Body:**
```json
{
  "email": "buyer@company.com",
  "password": "SecurePass123!",
  "phone": "+919876543210",
  "legal_name": "Company Pvt Ltd",
  "display_name": "Company",
  "gst_number": "29AABCU9603R1ZV",
  "industry": "food_beverage",
  "contact_person": {
    "first_name": "John",
    "last_name": "Doe"
  }
}
```

**Response: 201 Created**
```json
{
  "success": true,
  "message": "Registration successful. Please verify your email.",
  "data": {
    "user_id": "uuid",
    "organization_id": "uuid",
    "email": "buyer@company.com",
    "verification_email_sent": true
  }
}
```

### POST /auth/register/supplier
Register a new supplier organization

**Request Body:**
```json
{
  "email": "supplier@factory.com",
  "password": "SecurePass123!",
  "phone": "+919876543210",
  "legal_name": "Factory Pvt Ltd",
  "display_name": "Factory",
  "gst_number": "29AABCU9603R1ZV",
  "business_type": "manufacturer",
  "product_categories": ["corrugated_boxes", "flexible_packaging"],
  "manufacturing_capacity_per_month": 100000,
  "contact_person": {
    "first_name": "Jane",
    "last_name": "Smith"
  }
}
```

**Response: 201 Created**

### POST /auth/login
User login

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response: 200 OK**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIs...",
    "refresh_token": "eyJhbGciOiJIUzI1NiIs...",
    "expires_in": 900,
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "role": "buyer",
      "organization": {
        "id": "uuid",
        "display_name": "Company",
        "type": "buyer"
      }
    }
  }
}
```

### POST /auth/refresh-token
Refresh access token

**Request Body:**
```json
{
  "refresh_token": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Response: 200 OK**
```json
{
  "success": true,
  "data": {
    "access_token": "new_access_token",
    "expires_in": 900
  }
}
```

### POST /auth/logout
Logout user

**Headers:** `Authorization: Bearer <token>`

**Response: 200 OK**

### POST /auth/forgot-password
Request password reset

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response: 200 OK**

### POST /auth/reset-password
Reset password with token

**Request Body:**
```json
{
  "token": "reset_token",
  "password": "NewPassword123!",
  "password_confirmation": "NewPassword123!"
}
```

**Response: 200 OK**

---

## Product Endpoints

### GET /products
Get all products (paginated)

**Query Parameters:**
- `page` (default: 1)
- `limit` (default: 20, max: 100)
- `category` - Filter by category ID
- `search` - Search query
- `min_price` - Minimum price
- `max_price` - Maximum price
- `supplier_id` - Filter by supplier
- `certifications` - Filter by certifications (comma-separated)
- `sort` - Sort by (price_asc, price_desc, rating_desc, newest)

**Response: 200 OK**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "Heavy Duty Corrugated Box",
      "slug": "heavy-duty-corrugated-box",
      "sku": "BOX-HD-001",
      "short_description": "High quality corrugated box",
      "base_price": 50.00,
      "currency": "INR",
      "min_order_quantity": 100,
      "stock_status": "in_stock",
      "primary_image_url": "https://cdn.Toreso.com/products/...",
      "supplier": {
        "id": "uuid",
        "display_name": "ABC Packaging",
        "logo_url": "https://...",
        "overall_rating": 4.5
      },
      "category": {
        "id": "uuid",
        "name": "Corrugated Boxes"
      },
      "certifications": ["ISO 9001", "FSC"],
      "average_rating": 4.5,
      "review_count": 23,
      "is_featured": false
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8,
    "hasMore": true
  }
}
```

### GET /products/:id
Get product details

**Response: 200 OK**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "Heavy Duty Corrugated Box",
    "slug": "heavy-duty-corrugated-box",
    "sku": "BOX-HD-001",
    "description": "Detailed product description...",
    "specifications": {
      "material": "Kraft Paper",
      "dimensions": {"length": 30, "width": 20, "height": 15, "unit": "cm"},
      "weight": 0.5,
      "weight_unit": "kg"
    },
    "base_price": 50.00,
    "currency": "INR",
    "price_unit": "piece",
    "volume_pricing": [
      {"min_qty": 100, "max_qty": 499, "price": 50.00},
      {"min_qty": 500, "max_qty": 999, "price": 45.00},
      {"min_qty": 1000, "max_qty": null, "price": 40.00}
    ],
    "min_order_quantity": 100,
    "stock_quantity": 5000,
    "stock_status": "in_stock",
    "lead_time_days": 7,
    "primary_image_url": "https://...",
    "images": ["https://...", "https://..."],
    "video_url": null,
    "ar_model_url": null,
    "technical_docs": [
      {"name": "Specifications.pdf", "url": "https://..."}
    ],
    "certifications": [
      {
        "id": "uuid",
        "type": "ISO 9001",
        "number": "ISO-001",
        "expiry_date": "2025-12-31"
      }
    ],
    "sustainability": {
      "is_recyclable": true,
      "recycled_content_percentage": 80,
      "is_biodegradable": false,
      "carbon_footprint_kg": 0.5
    },
    "supplier": {
      "id": "uuid",
      "display_name": "ABC Packaging",
      "logo_url": "https://...",
      "overall_rating": 4.5,
      "total_orders": 1500,
      "on_time_delivery_rate": 95.5,
      "certifications": ["ISO 9001", "ISO 14001"]
    },
    "category": {
      "id": "uuid",
      "name": "Corrugated Boxes",
      "slug": "corrugated-boxes"
    },
    "average_rating": 4.5,
    "review_count": 23,
    "view_count": 1234,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-02-20T14:45:00Z"
  }
}
```

### POST /products
Create a new product (Supplier only)

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "name": "Product Name",
  "category_id": "uuid",
  "short_description": "Short description",
  "description": "Long description",
  "specifications": {
    "material": "Kraft Paper",
    "dimensions": {"length": 30, "width": 20, "height": 15, "unit": "cm"}
  },
  "base_price": 50.00,
  "currency": "INR",
  "price_unit": "piece",
  "volume_pricing": [
    {"min_qty": 100, "max_qty": 499, "price": 50.00}
  ],
  "min_order_quantity": 100,
  "stock_quantity": 1000,
  "lead_time_days": 7,
  "images": ["base64_encoded_image"],
  "certifications": ["uuid1", "uuid2"],
  "tags": ["corrugated", "heavy-duty"]
}
```

**Response: 201 Created**

### PUT /products/:id
Update product (Supplier only)

**Headers:** `Authorization: Bearer <token>`

**Response: 200 OK**

### DELETE /products/:id
Delete product (Supplier/Admin only)

**Headers:** `Authorization: Bearer <token>`

**Response: 200 OK**

---

## Order Endpoints

### POST /orders
Create a new order

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "items": [
    {
      "product_id": "uuid",
      "quantity": 500,
      "unit_price": 45.00
    }
  ],
  "plant_id": "uuid",
  "delivery_address": {
    "address_line1": "123 Main St",
    "city": "Mumbai",
    "state": "Maharashtra",
    "postal_code": "400001",
    "country": "India"
  },
  "requested_delivery_date": "2024-03-15",
  "special_instructions": "Handle with care",
  "payment_method": "credit_terms"
}
```

**Response: 201 Created**
```json
{
  "success": true,
  "message": "Order created successfully",
  "data": {
    "id": "uuid",
    "order_number": "ORD-2024-001234",
    "status": "pending",
    "total_amount": 22500.00,
    "currency": "INR",
    "items": [...],
    "created_at": "2024-02-20T10:00:00Z"
  }
}
```

### GET /orders
Get user's orders

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `page`, `limit`
- `status` - Filter by status
- `from_date`, `to_date` - Date range
- `supplier_id` - For buyers
- `buyer_id` - For suppliers

**Response: 200 OK**

### GET /orders/:id
Get order details

**Headers:** `Authorization: Bearer <token>`

**Response: 200 OK**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "order_number": "ORD-2024-001234",
    "buyer": {
      "id": "uuid",
      "display_name": "Company Pvt Ltd"
    },
    "supplier": {
      "id": "uuid",
      "display_name": "ABC Packaging"
    },
    "status": "confirmed",
    "items": [
      {
        "id": "uuid",
        "product_name": "Heavy Duty Corrugated Box",
        "product_sku": "BOX-HD-001",
        "quantity": 500,
        "unit_price": 45.00,
        "subtotal": 22500.00
      }
    ],
    "subtotal": 22500.00,
    "tax_amount": 4050.00,
    "shipping_amount": 500.00,
    "total_amount": 27050.00,
    "currency": "INR",
    "delivery_address": {...},
    "requested_delivery_date": "2024-03-15",
    "payment_method": "credit_terms",
    "payment_status": "pending",
    "special_instructions": "Handle with care",
    "status_history": [
      {
        "status": "pending",
        "timestamp": "2024-02-20T10:00:00Z"
      },
      {
        "status": "confirmed",
        "timestamp": "2024-02-20T11:30:00Z"
      }
    ],
    "created_at": "2024-02-20T10:00:00Z",
    "confirmed_at": "2024-02-20T11:30:00Z"
  }
}
```

### PUT /orders/:id/status
Update order status (Supplier)

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "status": "confirmed",
  "notes": "Order confirmed and scheduled for production"
}
```

**Response: 200 OK**

### POST /orders/:id/cancel
Cancel order

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "reason": "Changed requirements",
  "notes": "Will reorder later"
}
```

**Response: 200 OK**

---

## RFQ Endpoints

### POST /rfqs
Create RFQ

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "title": "RFQ for Corrugated Boxes",
  "category_id": "uuid",
  "product_description": "Need heavy-duty corrugated boxes",
  "specifications": {
    "material": "5-ply kraft",
    "dimensions": {"length": 30, "width": 20, "height": 15}
  },
  "quantity": 10000,
  "unit_of_measurement": "pieces",
  "delivery_plant_id": "uuid",
  "expected_delivery_date": "2024-04-01",
  "budget_min": 400000,
  "budget_max": 500000,
  "certifications_required": ["ISO 9001"],
  "response_deadline": "2024-03-01T23:59:59Z",
  "supplier_selection_type": "broadcast",
  "selected_suppliers": []
}
```

**Response: 201 Created**

### GET /rfqs
Get RFQs

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `page`, `limit`
- `status` - draft, published, closed, awarded
- `category` - Filter by category

**Response: 200 OK**

### GET /rfqs/:id
Get RFQ details

**Headers:** `Authorization: Bearer <token>`

**Response: 200 OK**

### POST /rfqs/:id/quotes
Submit quote (Supplier)

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "unit_price": 45.00,
  "total_price": 450000.00,
  "currency": "INR",
  "lead_time_days": 15,
  "delivery_terms": "FOB Mumbai",
  "payment_terms": "30 days credit",
  "validity_days": 30,
  "specifications_compliance": "Meets all requirements",
  "documents": [
    {"name": "Technical Specs", "url": "https://..."}
  ],
  "notes": "Can deliver in batches if needed"
}
```

**Response: 201 Created**

### GET /rfqs/:id/quotes
Get quotes for RFQ

**Headers:** `Authorization: Bearer <token>`

**Response: 200 OK**

---

## Cart Endpoints

### GET /cart
Get cart items

**Headers:** `Authorization: Bearer <token>`

**Response: 200 OK**
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "uuid",
        "product": {
          "id": "uuid",
          "name": "Product Name",
          "image_url": "https://...",
          "base_price": 50.00
        },
        "quantity": 500,
        "unit_price": 45.00,
        "subtotal": 22500.00,
        "plant_id": "uuid"
      }
    ],
    "subtotal": 22500.00,
    "item_count": 1
  }
}
```

### POST /cart/items
Add item to cart

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "product_id": "uuid",
  "quantity": 500,
  "plant_id": "uuid"
}
```

**Response: 201 Created**

### PUT /cart/items/:id
Update cart item

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "quantity": 1000
}
```

**Response: 200 OK**

### DELETE /cart/items/:id
Remove item from cart

**Headers:** `Authorization: Bearer <token>`

**Response: 200 OK**

### DELETE /cart
Clear cart

**Headers:** `Authorization: Bearer <token>`

**Response: 200 OK**

---

## Payment Endpoints

### POST /payments/create-order
Create payment order

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "invoice_id": "uuid",
  "amount": 27050.00,
  "currency": "INR",
  "payment_method": "razorpay"
}
```

**Response: 200 OK**
```json
{
  "success": true,
  "data": {
    "order_id": "order_xyz",
    "amount": 27050.00,
    "currency": "INR",
    "key": "razorpay_key_id"
  }
}
```

### POST /payments/verify
Verify payment

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "razorpay_order_id": "order_xyz",
  "razorpay_payment_id": "pay_abc",
  "razorpay_signature": "signature"
}
```

**Response: 200 OK**

### GET /payments
Get payment history

**Headers:** `Authorization: Bearer <token>`

**Response: 200 OK**

---

## Invoice Endpoints

### GET /invoices
Get invoices

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `page`, `limit`
- `status` - unpaid, paid, overdue
- `from_date`, `to_date`

**Response: 200 OK**

### GET /invoices/:id
Get invoice details

**Headers:** `Authorization: Bearer <token>`

**Response: 200 OK**

### POST /invoices
Create invoice (Supplier)

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "order_id": "uuid",
  "invoice_date": "2024-02-20",
  "due_date": "2024-03-20",
  "items": [...],
  "notes": "Payment terms: 30 days"
}
```

**Response: 201 Created**

---

## Chat Endpoints

### GET /conversations
Get conversations

**Headers:** `Authorization: Bearer <token>`

**Response: 200 OK**

### GET /conversations/:id/messages
Get messages

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `page`, `limit`
- `before` - Get messages before timestamp

**Response: 200 OK**

### POST /conversations/:id/messages
Send message

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "message_text": "Hello, I have a question about your products",
  "attachments": []
}
```

**Response: 201 Created**

---

## Notification Endpoints

### GET /notifications
Get notifications

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `page`, `limit`
- `unread_only` - boolean

**Response: 200 OK**

### PUT /notifications/:id/read
Mark as read

**Headers:** `Authorization: Bearer <token>`

**Response: 200 OK**

### PUT /notifications/read-all
Mark all as read

**Headers:** `Authorization: Bearer <token>`

**Response: 200 OK**

---

## Analytics Endpoints

### GET /analytics/dashboard
Get dashboard analytics

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `from_date`, `to_date`
- `plant_id` (for buyers)

**Response: 200 OK**
```json
{
  "success": true,
  "data": {
    "total_orders": 150,
    "total_spend": 5000000,
    "total_savings": 250000,
    "avg_order_value": 33333,
    "orders_by_status": {
      "pending": 5,
      "confirmed": 10,
      "shipped": 20,
      "delivered": 115
    },
    "top_categories": [...],
    "top_suppliers": [...],
    "monthly_trends": [...]
  }
}
```

---

## File Upload Endpoints

### POST /upload/image
Upload image

**Headers:** `Authorization: Bearer <token>`

**Request:** `multipart/form-data`
- `file` - Image file
- `folder` - Destination folder (products, documents, etc.)

**Response: 200 OK**
```json
{
  "success": true,
  "data": {
    "url": "https://cdn.Toreso.com/products/image.jpg",
    "filename": "image.jpg",
    "size": 125000,
    "mime_type": "image/jpeg"
  }
}
```

### POST /upload/document
Upload document

**Headers:** `Authorization: Bearer <token>`

**Response: 200 OK**

---

## Webhook Endpoints

### POST /webhooks/razorpay
Razorpay webhook

**Headers:**
- `X-Razorpay-Signature`

**Request Body:** Razorpay event payload

**Response: 200 OK**

### POST /webhooks/stripe
Stripe webhook

**Headers:**
- `Stripe-Signature`

**Response: 200 OK**

---

## Rate Limiting

- **Anonymous**: 100 requests/15 minutes
- **Authenticated**: 1000 requests/15 minutes
- **Premium Suppliers**: 5000 requests/15 minutes

**Rate Limit Headers:**
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1708430400
```

---

## Error Codes

| Code | Message | Description |
|------|---------|-------------|
| 400 | Bad Request | Invalid request format |
| 401 | Unauthorized | Missing or invalid authentication |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource not found |
| 409 | Conflict | Duplicate resource |
| 422 | Unprocessable Entity | Validation failed |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server error |
| 503 | Service Unavailable | Temporary unavailable |

---

**Document Version**: 1.0  
**Last Updated**: 2024  
**Status**: Planning Phase  
**API Version**: v1

