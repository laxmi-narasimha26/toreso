# Frontend Architecture - Toreso B2B Marketplace

## Technology Stack Overview

### Core Framework
- **Next.js 14** (App Router) - React framework with built-in SEO optimization
- **React 18** - UI library with Server Components
- **TypeScript 5.3+** - Type safety and better DX
- **Node.js 20+** - Runtime environment

### Styling & UI
- **Tailwind CSS 3.4+** - Utility-first CSS framework
- **Shadcn/ui** - High-quality, accessible component library
- **Radix UI** - Unstyled, accessible component primitives
- **class-variance-authority (CVA)** - Component variants
- **tailwind-merge** - Merge Tailwind classes without conflicts
- **Lucide React** - Modern icon library

### State Management
- **React Context** - Global state for auth, theme
- **TanStack Query (React Query) v5** - Server state management, caching
- **Zustand** - Lightweight client state management
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### Data Fetching
- **Native Fetch API** - With Next.js enhancements
- **Axios** - HTTP client for complex requests
- **SWR** - Alternative for real-time data (optional)

### Real-time Communication
- **Socket.io-client** - WebSocket for chat and real-time updates
- **Server-Sent Events (SSE)** - For notifications

### File Handling
- **React Dropzone** - File upload component
- **Sharp** - Image processing (server-side)
- **next-image** - Optimized image component

### Charts & Visualization
- **Recharts** - React charting library
- **D3.js** - Advanced visualizations (if needed)
- **React-PDF** - PDF generation

### Maps & Location
- **Google Maps API** - Interactive maps
- **@react-google-maps/api** - React wrapper
- **Leaflet** (Alternative) - Open-source maps

### Authentication
- **NextAuth.js v5** - Authentication solution
- **JWT** - Token-based auth
- **bcryptjs** - Password hashing

### Testing
- **Vitest** - Unit testing
- **React Testing Library** - Component testing
- **Playwright** - E2E testing
- **MSW** - API mocking

### Build & Development Tools
- **Turbopack** - Fast bundler (Next.js 14)
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Run linters on staged files

### Performance & Monitoring
- **Vercel Analytics** - Performance monitoring
- **Sentry** - Error tracking
- **Web Vitals** - Core Web Vitals tracking

---

## Project Structure

```
/toreso-frontend
├── /public
│   ├── /images
│   ├── /icons
│   ├── /fonts
│   ├── robots.txt
│   ├── sitemap.xml (generated)
│   └── manifest.json
│
├── /src
│   ├── /app                          # Next.js App Router
│   │   ├── layout.tsx               # Root layout
│   │   ├── page.tsx                 # Home page
│   │   ├── loading.tsx              # Loading UI
│   │   ├── error.tsx                # Error UI
│   │   ├── not-found.tsx            # 404 page
│   │   │
│   │   ├── /(public)                # Public pages group
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── how-it-works/
│   │   │   ├── for-buyers/
│   │   │   ├── for-suppliers/
│   │   │   ├── industries/
│   │   │   ├── pricing/
│   │   │   ├── blog/
│   │   │   └── case-studies/
│   │   │
│   │   ├── /(auth)                  # Auth pages group
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   │   ├── buyer/
│   │   │   │   └── supplier/
│   │   │   ├── forgot-password/
│   │   │   ├── reset-password/
│   │   │   └── verify-email/
│   │   │
│   │   ├── /buyer                   # Buyer portal (protected)
│   │   │   ├── layout.tsx          # Buyer layout with sidebar
│   │   │   ├── dashboard/
│   │   │   ├── catalog/
│   │   │   ├── product/[id]/
│   │   │   ├── search/
│   │   │   ├── cart/
│   │   │   ├── checkout/
│   │   │   ├── orders/
│   │   │   │   └── [id]/
│   │   │   ├── rfq/
│   │   │   │   ├── create/
│   │   │   │   └── [id]/
│   │   │   ├── rfi/
│   │   │   ├── quotes/
│   │   │   ├── suppliers/
│   │   │   │   └── [id]/
│   │   │   ├── plants/
│   │   │   ├── warehouses/
│   │   │   ├── invoices/
│   │   │   ├── payments/
│   │   │   ├── analytics/
│   │   │   ├── documents/
│   │   │   ├── messages/
│   │   │   ├── notifications/
│   │   │   └── settings/
│   │   │
│   │   ├── /supplier                # Supplier portal (protected)
│   │   │   ├── layout.tsx          # Supplier layout with sidebar
│   │   │   ├── dashboard/
│   │   │   ├── products/
│   │   │   │   ├── create/
│   │   │   │   └── [id]/edit/
│   │   │   ├── orders/
│   │   │   ├── rfq/
│   │   │   ├── quotes/
│   │   │   ├── buyers/
│   │   │   ├── inventory/
│   │   │   ├── warehouses/
│   │   │   ├── logistics/
│   │   │   ├── invoices/
│   │   │   ├── payments/
│   │   │   ├── finance/            # Invoice discounting
│   │   │   ├── performance/
│   │   │   ├── audits/
│   │   │   ├── certifications/
│   │   │   ├── analytics/
│   │   │   ├── documents/
│   │   │   ├── messages/
│   │   │   ├── notifications/
│   │   │   └── settings/
│   │   │
│   │   ├── /admin                   # Admin portal (protected)
│   │   │   ├── layout.tsx
│   │   │   ├── dashboard/
│   │   │   ├── users/
│   │   │   ├── suppliers/
│   │   │   │   └── verification/
│   │   │   ├── buyers/
│   │   │   ├── products/
│   │   │   ├── orders/
│   │   │   ├── rfqs/
│   │   │   ├── audits/
│   │   │   ├── certifications/
│   │   │   ├── payments/
│   │   │   ├── finance/
│   │   │   ├── content/
│   │   │   ├── reports/
│   │   │   ├── settings/
│   │   │   └── logs/
│   │   │
│   │   ├── /auditor                 # Auditor portal (protected)
│   │   │   ├── dashboard/
│   │   │   ├── audits/
│   │   │   ├── suppliers/
│   │   │   └── reports/
│   │   │
│   │   ├── /api                     # API routes
│   │   │   ├── auth/
│   │   │   │   └── [...nextauth]/
│   │   │   ├── webhooks/
│   │   │   ├── upload/
│   │   │   └── health/
│   │   │
│   │   └── /legal                   # Legal pages
│   │       ├── terms/
│   │       ├── privacy/
│   │       ├── cookies/
│   │       └── compliance/
│   │
│   ├── /components                   # React components
│   │   ├── /ui                      # Shadcn UI components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── toast.tsx
│   │   │   └── ... (50+ components)
│   │   │
│   │   ├── /layout                  # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   ├── Breadcrumbs.tsx
│   │   │   └── PageLayout.tsx
│   │   │
│   │   ├── /auth                    # Auth components
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   ├── ProtectedRoute.tsx
│   │   │   ├── SocialLogin.tsx
│   │   │   └── TwoFactorAuth.tsx
│   │   │
│   │   ├── /buyer                   # Buyer-specific components
│   │   │   ├── /dashboard
│   │   │   ├── /catalog
│   │   │   ├── /orders
│   │   │   ├── /rfq
│   │   │   ├── /analytics
│   │   │   └── ...
│   │   │
│   │   ├── /supplier                # Supplier-specific components
│   │   │   ├── /dashboard
│   │   │   ├── /products
│   │   │   ├── /orders
│   │   │   ├── /performance
│   │   │   └── ...
│   │   │
│   │   ├── /admin                   # Admin-specific components
│   │   │   ├── /dashboard
│   │   │   ├── /users
│   │   │   ├── /verification
│   │   │   └── ...
│   │   │
│   │   ├── /shared                  # Shared components
│   │   │   ├── ProductCard.tsx
│   │   │   ├── SupplierCard.tsx
│   │   │   ├── OrderCard.tsx
│   │   │   ├── RatingStars.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   ├── FilterPanel.tsx
│   │   │   ├── Pagination.tsx
│   │   │   ├── EmptyState.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── ConfirmDialog.tsx
│   │   │   ├── FileUpload.tsx
│   │   │   ├── ImageGallery.tsx
│   │   │   ├── ChatWidget.tsx
│   │   │   ├── NotificationBell.tsx
│   │   │   ├── UserAvatar.tsx
│   │   │   ├── StatusBadge.tsx
│   │   │   ├── PriceDisplay.tsx
│   │   │   ├── DatePicker.tsx
│   │   │   ├── RichTextEditor.tsx
│   │   │   ├── MapPicker.tsx
│   │   │   └── ...
│   │   │
│   │   ├── /forms                   # Form components
│   │   │   ├── ProductForm.tsx
│   │   │   ├── RFQForm.tsx
│   │   │   ├── ProfileForm.tsx
│   │   │   ├── PaymentForm.tsx
│   │   │   └── ...
│   │   │
│   │   ├── /charts                  # Chart components
│   │   │   ├── LineChart.tsx
│   │   │   ├── BarChart.tsx
│   │   │   ├── PieChart.tsx
│   │   │   ├── AreaChart.tsx
│   │   │   └── ...
│   │   │
│   │   └── /widgets                 # Widget components
│   │       ├── StatsCard.tsx
│   │       ├── ActivityFeed.tsx
│   │       ├── QuickActions.tsx
│   │       ├── RecentOrders.tsx
│   │       └── ...
│   │
│   ├── /lib                         # Utilities and helpers
│   │   ├── utils.ts                # Common utilities
│   │   ├── cn.ts                   # Class name merger
│   │   ├── api.ts                  # API client
│   │   ├── auth.ts                 # Auth utilities
│   │   ├── constants.ts            # App constants
│   │   ├── validators.ts           # Validation schemas
│   │   ├── formatters.ts           # Data formatters
│   │   ├── helpers.ts              # Helper functions
│   │   └── blockchain.ts           # Blockchain utilities
│   │
│   ├── /hooks                       # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useUser.ts
│   │   ├── useOrganization.ts
│   │   ├── useCart.ts
│   │   ├── useChat.ts
│   │   ├── useNotifications.ts
│   │   ├── useWebSocket.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useSessionStorage.ts
│   │   ├── useDebounce.ts
│   │   ├── useThrottle.ts
│   │   ├── useMediaQuery.ts
│   │   ├── useIntersectionObserver.ts
│   │   ├── useOnClickOutside.ts
│   │   ├── useCopyToClipboard.ts
│   │   └── ...
│   │
│   ├── /store                       # State management
│   │   ├── authStore.ts            # Zustand store for auth
│   │   ├── cartStore.ts            # Cart state
│   │   ├── chatStore.ts            # Chat state
│   │   ├── notificationStore.ts    # Notifications state
│   │   └── themeStore.ts           # Theme state
│   │
│   ├── /services                    # API services
│   │   ├── authService.ts
│   │   ├── userService.ts
│   │   ├── productService.ts
│   │   ├── orderService.ts
│   │   ├── rfqService.ts
│   │   ├── supplierService.ts
│   │   ├── paymentService.ts
│   │   ├── chatService.ts
│   │   ├── notificationService.ts
│   │   ├── analyticsService.ts
│   │   └── ...
│   │
│   ├── /types                       # TypeScript types
│   │   ├── index.ts
│   │   ├── auth.types.ts
│   │   ├── user.types.ts
│   │   ├── product.types.ts
│   │   ├── order.types.ts
│   │   ├── rfq.types.ts
│   │   ├── supplier.types.ts
│   │   ├── payment.types.ts
│   │   ├── api.types.ts
│   │   └── ...
│   │
│   ├── /config                      # Configuration files
│   │   ├── site.ts                 # Site metadata
│   │   ├── navigation.ts           # Navigation config
│   │   ├── routes.ts               # Route constants
│   │   ├── api.ts                  # API endpoints
│   │   └── seo.ts                  # SEO config
│   │
│   ├── /styles                      # Global styles
│   │   ├── globals.css             # Global CSS
│   │   └── themes.css              # Theme variables
│   │
│   └── middleware.ts                # Next.js middleware
│
├── /.storybook                      # Storybook config (optional)
├── /tests                           # Test files
│   ├── /unit
│   ├── /integration
│   └── /e2e
│
├── .env.local                       # Environment variables
├── .env.production
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Next.js 14 App Router Implementation

### Why Next.js for SEO

1. **Server-Side Rendering (SSR)**
   - Dynamic content rendered on server
   - Search engines see fully rendered HTML
   - Better indexing and ranking

2. **Static Site Generation (SSG)**
   - Pre-render pages at build time
   - Lightning-fast page loads
   - Excellent for product catalog

3. **Incremental Static Regeneration (ISR)**
   - Update static pages without rebuild
   - Best of both SSG and SSR
   - Perfect for frequently updated content

4. **Automatic Code Splitting**
   - Only load necessary JavaScript
   - Faster page loads
   - Better Core Web Vitals

5. **Built-in Image Optimization**
   - Automatic WebP conversion
   - Responsive images
   - Lazy loading by default

6. **Metadata API**
   - Programmatic meta tags
   - Dynamic OpenGraph images
   - Structured data support

---

## SEO Implementation

### 1. Metadata Configuration

```typescript
// app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Toreso - B2B Packaging Materials Marketplace',
    template: '%s | Toreso'
  },
  description: 'India\'s leading B2B marketplace for packaging materials. Connect with verified suppliers, get instant quotes, and streamline your procurement process.',
  keywords: ['packaging materials', 'b2b marketplace', 'corrugated boxes', 'packaging suppliers', 'industrial packaging'],
  authors: [{ name: 'Toreso' }],
  creator: 'Toreso',
  publisher: 'Toreso',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.Toreso.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/en',
      'hi-IN': '/hi',
    },
  },
  openGraph: {
    title: 'Toreso - B2B Packaging Materials Marketplace',
    description: 'India\'s leading B2B marketplace for packaging materials',
    url: 'https://www.Toreso.com',
    siteName: 'Toreso',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Toreso Marketplace',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toreso - B2B Packaging Materials Marketplace',
    description: 'India\'s leading B2B marketplace for packaging materials',
    creator: '@Toreso',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    bing: 'bing-verification-code',
  },
}
```

### 2. Dynamic Metadata for Product Pages

```typescript
// app/buyer/product/[id]/page.tsx
import { Metadata } from 'next'
import { getProduct } from '@/services/productService'

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProduct(params.id)
  
  return {
    title: product.name,
    description: product.short_description,
    keywords: [...product.tags, product.category_name],
    openGraph: {
      title: product.name,
      description: product.short_description,
      images: [product.primary_image_url],
      type: 'product',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.short_description,
      images: [product.primary_image_url],
    },
    alternates: {
      canonical: `/product/${product.slug}-${product.id}`,
    },
  }
}
```

### 3. Structured Data (JSON-LD)

```typescript
// components/shared/StructuredData.tsx
export function ProductStructuredData({ product }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.primary_image_url,
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: product.supplier_name,
    },
    offers: {
      '@type': 'Offer',
      url: `https://www.Toreso.com/product/${product.slug}`,
      priceCurrency: product.currency,
      price: product.base_price,
      priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: product.supplier_name,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.average_rating,
      reviewCount: product.review_count,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
```

### 4. Sitemap Generation

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'
import { getAllProducts, getAllCategories, getAllSuppliers } from '@/services'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.Toreso.com'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/how-it-works',
    '/for-buyers',
    '/for-suppliers',
    '/pricing',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic product pages
  const products = await getAllProducts()
  const productPages = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}-${product.id}`,
    lastModified: new Date(product.updated_at),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Category pages
  const categories = await getAllCategories()
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Supplier pages
  const suppliers = await getAllSuppliers()
  const supplierPages = suppliers.map((supplier) => ({
    url: `${baseUrl}/suppliers/${supplier.slug}-${supplier.id}`,
    lastModified: new Date(supplier.updated_at),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...productPages, ...categoryPages, ...supplierPages]
}
```

### 5. Robots.txt

```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/buyer/',
          '/supplier/',
          '/admin/',
          '/auditor/',
          '/api/',
          '/checkout/',
          '/cart/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/buyer/',
          '/supplier/',
          '/admin/',
          '/api/',
        ],
      },
    ],
    sitemap: 'https://www.Toreso.com/sitemap.xml',
  }
}
```

---

## Component Architecture

### 1. Server Components (Default)

```typescript
// app/buyer/catalog/page.tsx
import { ProductGrid } from '@/components/buyer/catalog/ProductGrid'
import { FilterSidebar } from '@/components/buyer/catalog/FilterSidebar'
import { getProducts } from '@/services/productService'

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string }
}) {
  // Fetch on server
  const products = await getProducts(searchParams)
  
  return (
    <div className="flex">
      <FilterSidebar />
      <ProductGrid products={products} />
    </div>
  )
}
```

### 2. Client Components

```typescript
// components/buyer/catalog/ProductCard.tsx
'use client'

import { useState } from 'react'
import { useCart } from '@/hooks/useCart'
import { Button } from '@/components/ui/button'
import { Heart, ShoppingCart } from 'lucide-react'

export function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const { addToCart } = useCart()

  return (
    <div className="product-card">
      <Image src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <div className="actions">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart fill={isFavorite ? 'currentColor' : 'none'} />
        </Button>
        <Button onClick={() => addToCart(product)}>
          <ShoppingCart className="mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  )
}
```

### 3. Hybrid Approach

```typescript
// app/buyer/product/[id]/page.tsx
import { ProductDetails } from '@/components/buyer/product/ProductDetails'
import { ProductReviews } from '@/components/buyer/product/ProductReviews'
import { AddToCartButton } from '@/components/buyer/product/AddToCartButton'
import { getProduct, getProductReviews } from '@/services/productService'

export default async function ProductPage({ params }: { params: { id: string } }) {
  // Server-side data fetching
  const [product, reviews] = await Promise.all([
    getProduct(params.id),
    getProductReviews(params.id),
  ])
  
  return (
    <div>
      {/* Server Component */}
      <ProductDetails product={product} />
      
      {/* Client Component for interactivity */}
      <AddToCartButton product={product} />
      
      {/* Server Component */}
      <ProductReviews reviews={reviews} productId={params.id} />
    </div>
  )
}
```

---

## State Management Strategy

### 1. Server State (TanStack Query)

```typescript
// hooks/useProducts.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { productService } from '@/services/productService'

export function useProducts(filters) {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: () => productService.getAll(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export function useProduct(id: string) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => productService.getById(id),
  })
}

export function useCreateProduct() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: productService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
  })
}
```

### 2. Client State (Zustand)

```typescript
// store/cartStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  product_id: string
  quantity: number
  unit_price: number
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  total: number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => set((state) => ({
        items: [...state.items.filter(i => i.product_id !== item.product_id), item]
      })),
      
      removeItem: (productId) => set((state) => ({
        items: state.items.filter(i => i.product_id !== productId)
      })),
      
      updateQuantity: (productId, quantity) => set((state) => ({
        items: state.items.map(i => 
          i.product_id === productId ? { ...i, quantity } : i
        )
      })),
      
      clearCart: () => set({ items: [] }),
      
      get total() {
        return get().items.reduce((sum, item) => 
          sum + (item.unit_price * item.quantity), 0
        )
      },
    }),
    {
      name: 'cart-storage',
    }
  )
)
```

### 3. Auth State (Context + Zustand)

```typescript
// store/authStore.ts
import { create } from 'zustand'
import { User, Organization } from '@/types'

interface AuthStore {
  user: User | null
  organization: Organization | null
  token: string | null
  isAuthenticated: boolean
  setAuth: (user: User, organization: Organization, token: string) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  organization: null,
  token: null,
  isAuthenticated: false,
  
  setAuth: (user, organization, token) => set({
    user,
    organization,
    token,
    isAuthenticated: true,
  }),
  
  clearAuth: () => set({
    user: null,
    organization: null,
    token: null,
    isAuthenticated: false,
  }),
}))
```

---

## Performance Optimization

### 1. Code Splitting

```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic'

const RichTextEditor = dynamic(
  () => import('@/components/shared/RichTextEditor'),
  {
    loading: () => <p>Loading editor...</p>,
    ssr: false, // Don't render on server
  }
)

const ChartComponent = dynamic(
  () => import('@/components/charts/LineChart'),
  {
    loading: () => <ChartSkeleton />,
  }
)
```

### 2. Image Optimization

```typescript
import Image from 'next/image'

<Image
  src={product.image_url}
  alt={product.name}
  width={400}
  height={400}
  priority={false} // Set true for above-fold images
  placeholder="blur"
  blurDataURL={product.blur_url}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### 3. Lazy Loading

```typescript
// Intersection Observer for lazy loading
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export function ProductCard({ product }) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })
  
  return (
    <div ref={ref}>
      {isIntersecting ? (
        <ProductContent product={product} />
      ) : (
        <ProductSkeleton />
      )}
    </div>
  )
}
```

### 4. Prefetching

```typescript
// Prefetch on hover
import { useRouter } from 'next/navigation'

export function ProductCard({ product }) {
  const router = useRouter()
  
  return (
    <div
      onMouseEnter={() => {
        router.prefetch(`/product/${product.id}`)
      }}
    >
      {/* Product content */}
    </div>
  )
}
```

---

## Responsive Design

### Breakpoints (Tailwind)

```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
}
```

### Mobile-First Approach

```typescript
// Components built mobile-first
<div className="
  w-full              // Mobile: full width
  md:w-1/2            // Tablet: half width
  lg:w-1/3            // Desktop: one-third width
  p-4                 // Mobile: padding 1rem
  md:p-6              // Tablet: padding 1.5rem
  lg:p-8              // Desktop: padding 2rem
">
  {/* Content */}
</div>
```

---

## Accessibility (WCAG 2.1 AA)

### 1. Semantic HTML

```typescript
<header>
  <nav aria-label="Main navigation">
    {/* Navigation */}
  </nav>
</header>

<main>
  <section aria-labelledby="products-heading">
    <h2 id="products-heading">Products</h2>
    {/* Products */}
  </section>
</main>

<footer>
  {/* Footer content */}
</footer>
```

### 2. ARIA Labels

```typescript
<button
  aria-label="Add to cart"
  aria-describedby="cart-description"
>
  <ShoppingCart />
</button>

<input
  type="search"
  aria-label="Search products"
  placeholder="Search..."
/>
```

### 3. Keyboard Navigation

```typescript
// Trap focus in modals
import { useEffect, useRef } from 'react'

export function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!isOpen) return
    
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    // Focus management logic
  }, [isOpen])
  
  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      onKeyDown={(e) => {
        if (e.key === 'Escape') onClose()
      }}
    >
      {children}
    </div>
  )
}
```

---

## Internationalization (i18n)

```typescript
// next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
    localeDetection: true,
  },
}

// Dictionary structure
// /dictionaries/en.json
// /dictionaries/hi.json

// Usage
import { getDictionary } from '@/lib/dictionaries'

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang)
  
  return <h1>{dict.welcome}</h1>
}
```

---

## Error Handling

### 1. Error Boundaries

```typescript
// app/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="error-container">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  )
}
```

### 2. Not Found

```typescript
// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link href="/">Go back home</Link>
    </div>
  )
}
```

---

## Security Best Practices

1. **Environment Variables**
   - Never expose secrets in client code
   - Use `NEXT_PUBLIC_` prefix only for public vars

2. **API Route Protection**
   - Validate auth tokens
   - Rate limiting
   - CSRF protection

3. **XSS Prevention**
   - Sanitize user input
   - Use `dangerouslySetInnerHTML` carefully
   - Content Security Policy

4. **HTTPS Only**
   - Force HTTPS in production
   - Secure cookies

---

## Testing Strategy

### 1. Unit Tests (Vitest)

```typescript
// components/__tests__/ProductCard.test.tsx
import { render, screen } from '@testing-library/react'
import { ProductCard } from '../ProductCard'

describe('ProductCard', () => {
  it('renders product name', () => {
    const product = { id: '1', name: 'Test Product', price: 100 }
    render(<ProductCard product={product} />)
    expect(screen.getByText('Test Product')).toBeInTheDocument()
  })
})
```

### 2. E2E Tests (Playwright)

```typescript
// tests/e2e/buyer-flow.spec.ts
import { test, expect } from '@playwright/test'

test('buyer can add product to cart', async ({ page }) => {
  await page.goto('/buyer/catalog')
  await page.click('[data-testid="product-card-1"]')
  await page.click('[data-testid="add-to-cart"]')
  await expect(page.locator('[data-testid="cart-count"]')).toContainText('1')
})
```

---

**Document Version**: 1.0  
**Last Updated**: 2024  
**Status**: Planning Phase  
**Framework**: Next.js 14 with App Router

