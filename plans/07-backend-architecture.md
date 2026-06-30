# Backend Architecture - Toreso B2B Marketplace

## Technology Stack

### Core Framework
- **Node.js 20 LTS** - JavaScript runtime
- **Express.js 4.18+** - Web application framework
- **TypeScript 5.3+** - Type-safe JavaScript

### Database & ORM
- **PostgreSQL 15+** - Primary relational database
- **Prisma ORM** - Type-safe database client
- **Redis 7+** - Caching and session storage
- **Elasticsearch 8+** - Full-text search engine

### Authentication & Authorization
- **JWT (jsonwebtoken)** - Token-based authentication
- **bcryptjs** - Password hashing
- **Passport.js** - Authentication middleware
- **express-rate-limit** - Rate limiting

### API & Communication
- **REST API** - Primary API architecture
- **Socket.io** - Real-time WebSocket communication
- **GraphQL** (Optional) - Alternative query language
- **Bull** - Job/queue management

### Payment Gateways
- **Razorpay SDK** - Indian payment gateway
- **Stripe SDK** - International payments
- **PayPal SDK** - Alternative payment method

### Blockchain
- **Web3.js** - Ethereum interaction
- **Ethers.js** - Alternative Ethereum library
- **IPFS** - Decentralized storage
- **Smart Contracts (Solidity)** - On-chain logic

### File Storage
- **AWS S3 SDK** - File storage
- **Google Cloud Storage** - Alternative storage
- **Multer** - File upload middleware
- **Sharp** - Image processing

### Email & SMS
- **Nodemailer** - Email sending
- **SendGrid** - Email service provider
- **Twilio** - SMS service
- **AWS SES** - Alternative email service

### Monitoring & Logging
- **Winston** - Logging framework
- **Morgan** - HTTP request logger
- **Sentry** - Error tracking
- **PM2** - Process manager

### Validation & Security
- **Zod** - Schema validation
- **Joi** - Alternative validation
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **express-validator** - Request validation

### Testing
- **Jest** - Testing framework
- **Supertest** - HTTP testing
- **@faker-js/faker** - Fake data generation

### Documentation
- **Swagger/OpenAPI** - API documentation
- **JSDoc** - Code documentation

---

## Project Structure

```
/toreso-backend
├── /src
│   ├── /api                          # API layer
│   │   ├── /v1                       # API version 1
│   │   │   ├── /routes               # Route definitions
│   │   │   │   ├── auth.routes.ts
│   │   │   │   ├── user.routes.ts
│   │   │   │   ├── organization.routes.ts
│   │   │   │   ├── product.routes.ts
│   │   │   │   ├── category.routes.ts
│   │   │   │   ├── order.routes.ts
│   │   │   │   ├── rfq.routes.ts
│   │   │   │   ├── quote.routes.ts
│   │   │   │   ├── supplier.routes.ts
│   │   │   │   ├── buyer.routes.ts
│   │   │   │   ├── cart.routes.ts
│   │   │   │   ├── checkout.routes.ts
│   │   │   │   ├── payment.routes.ts
│   │   │   │   ├── invoice.routes.ts
│   │   │   │   ├── shipment.routes.ts
│   │   │   │   ├── audit.routes.ts
│   │   │   │   ├── certification.routes.ts
│   │   │   │   ├── chat.routes.ts
│   │   │   │   ├── notification.routes.ts
│   │   │   │   ├── review.routes.ts
│   │   │   │   ├── analytics.routes.ts
│   │   │   │   ├── admin.routes.ts
│   │   │   │   ├── webhook.routes.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── /controllers           # Request handlers
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── user.controller.ts
│   │   │   │   ├── product.controller.ts
│   │   │   │   ├── order.controller.ts
│   │   │   │   ├── rfq.controller.ts
│   │   │   │   ├── payment.controller.ts
│   │   │   │   ├── chat.controller.ts
│   │   │   │   ├── notification.controller.ts
│   │   │   │   └── ...
│   │   │   │
│   │   │   └── /validators            # Request validation schemas
│   │   │       ├── auth.validator.ts
│   │   │       ├── user.validator.ts
│   │   │       ├── product.validator.ts
│   │   │       ├── order.validator.ts
│   │   │       └── ...
│   │   │
│   │   └── /v2                        # Future API version
│   │
│   ├── /services                      # Business logic layer
│   │   ├── auth.service.ts
│   │   ├── user.service.ts
│   │   ├── organization.service.ts
│   │   ├── product.service.ts
│   │   ├── category.service.ts
│   │   ├── order.service.ts
│   │   ├── rfq.service.ts
│   │   ├── quote.service.ts
│   │   ├── cart.service.ts
│   │   ├── payment.service.ts
│   │   ├── invoice.service.ts
│   │   ├── shipment.service.ts
│   │   ├── audit.service.ts
│   │   ├── certification.service.ts
│   │   ├── chat.service.ts
│   │   ├── notification.service.ts
│   │   ├── email.service.ts
│   │   ├── sms.service.ts
│   │   ├── search.service.ts
│   │   ├── analytics.service.ts
│   │   ├── blockchain.service.ts
│   │   ├── storage.service.ts
│   │   ├── cache.service.ts
│   │   └── ...
│   │
│   ├── /repositories                  # Data access layer
│   │   ├── base.repository.ts
│   │   ├── user.repository.ts
│   │   ├── organization.repository.ts
│   │   ├── product.repository.ts
│   │   ├── order.repository.ts
│   │   ├── rfq.repository.ts
│   │   ├── payment.repository.ts
│   │   └── ...
│   │
│   ├── /models                        # Data models (if not using Prisma schema)
│   │   └── index.ts
│   │
│   ├── /middlewares                   # Express middlewares
│   │   ├── auth.middleware.ts         # JWT verification
│   │   ├── role.middleware.ts         # Role-based access control
│   │   ├── permission.middleware.ts   # Permission checks
│   │   ├── validate.middleware.ts     # Request validation
│   │   ├── upload.middleware.ts       # File upload handling
│   │   ├── error.middleware.ts        # Error handling
│   │   ├── logger.middleware.ts       # Request logging
│   │   ├── rateLimit.middleware.ts    # Rate limiting
│   │   ├── cors.middleware.ts         # CORS configuration
│   │   ├── cache.middleware.ts        # Response caching
│   │   └── ...
│   │
│   ├── /utils                         # Utility functions
│   │   ├── logger.ts                  # Winston logger
│   │   ├── jwt.ts                     # JWT utilities
│   │   ├── password.ts                # Password hashing
│   │   ├── pagination.ts              # Pagination helpers
│   │   ├── response.ts                # Standard API responses
│   │   ├── error.ts                   # Custom error classes
│   │   ├── validators.ts              # Common validators
│   │   ├── formatters.ts              # Data formatters
│   │   ├── helpers.ts                 # General helpers
│   │   └── ...
│   │
│   ├── /integrations                  # Third-party integrations
│   │   ├── /payment
│   │   │   ├── razorpay.ts
│   │   │   ├── stripe.ts
│   │   │   └── paypal.ts
│   │   ├── /blockchain
│   │   │   ├── ethereum.ts
│   │   │   ├── smartContract.ts
│   │   │   └── ipfs.ts
│   │   ├── /logistics
│   │   │   ├── delhivery.ts
│   │   │   ├── bluedart.ts
│   │   │   └── dtdc.ts
│   │   ├── /storage
│   │   │   ├── s3.ts
│   │   │   └── gcs.ts
│   │   ├── /email
│   │   │   ├── sendgrid.ts
│   │   │   ├── ses.ts
│   │   │   └── nodemailer.ts
│   │   └── /sms
│   │       ├── twilio.ts
│   │       └── msg91.ts
│   │
│   ├── /jobs                          # Background jobs
│   │   ├── /queues
│   │   │   ├── email.queue.ts
│   │   │   ├── notification.queue.ts
│   │   │   ├── analytics.queue.ts
│   │   │   ├── invoice.queue.ts
│   │   │   └── blockchain.queue.ts
│   │   ├── /workers
│   │   │   ├── email.worker.ts
│   │   │   ├── notification.worker.ts
│   │   │   ├── analytics.worker.ts
│   │   │   └── ...
│   │   └── /schedulers
│   │       ├── certification-expiry.ts
│   │       ├── audit-reminder.ts
│   │       ├── invoice-reminder.ts
│   │       └── ...
│   │
│   ├── /websocket                     # WebSocket/Socket.io
│   │   ├── index.ts
│   │   ├── handlers
│   │   │   ├── chat.handler.ts
│   │   │   ├── notification.handler.ts
│   │   │   └── order.handler.ts
│   │   └── middlewares
│   │       └── auth.middleware.ts
│   │
│   ├── /types                         # TypeScript types
│   │   ├── index.ts
│   │   ├── express.d.ts               # Express type augmentation
│   │   ├── api.types.ts
│   │   ├── auth.types.ts
│   │   ├── user.types.ts
│   │   ├── product.types.ts
│   │   └── ...
│   │
│   ├── /config                        # Configuration
│   │   ├── index.ts
│   │   ├── database.ts
│   │   ├── redis.ts
│   │   ├── elasticsearch.ts
│   │   ├── aws.ts
│   │   ├── payment.ts
│   │   ├── email.ts
│   │   ├── blockchain.ts
│   │   └── ...
│   │
│   ├── /database                      # Database related
│   │   ├── /migrations
│   │   ├── /seeds
│   │   └── /scripts
│   │
│   ├── /blockchain                    # Smart contracts & blockchain
│   │   ├── /contracts                 # Solidity contracts
│   │   │   ├── SupplyChain.sol
│   │   │   ├── Transaction.sol
│   │   │   └── Verification.sol
│   │   ├── /abis                      # Contract ABIs
│   │   └── /scripts
│   │       ├── deploy.ts
│   │       └── interact.ts
│   │
│   ├── /docs                          # Documentation
│   │   ├── swagger.json
│   │   └── README.md
│   │
│   ├── app.ts                         # Express app setup
│   ├── server.ts                      # Server entry point
│   └── constants.ts                   # Application constants
│
├── /tests                             # Test files
│   ├── /unit
│   ├── /integration
│   ├── /e2e
│   └── setup.ts
│
├── /prisma                            # Prisma ORM
│   ├── schema.prisma                  # Database schema
│   ├── /migrations
│   └── seed.ts
│
├── /scripts                           # Utility scripts
│   ├── seed-data.ts
│   ├── migrate.ts
│   └── generate-docs.ts
│
├── /logs                              # Log files (gitignored)
├── /uploads                           # Temporary uploads (gitignored)
│
├── .env.example
├── .env.development
├── .env.production
├── .eslintrc.json
├── .prettierrc
├── tsconfig.json
├── package.json
├── ecosystem.config.js                # PM2 configuration
└── README.md
```

---

## Layered Architecture

### 1. Route Layer (API Endpoints)

```typescript
// src/api/v1/routes/product.routes.ts
import { Router } from 'express'
import { productController } from '../controllers/product.controller'
import { authenticate, authorize } from '@/middlewares/auth.middleware'
import { validate } from '@/middlewares/validate.middleware'
import { productValidators } from '../validators/product.validator'
import { cacheMiddleware } from '@/middlewares/cache.middleware'

const router = Router()

// Public routes
router.get(
  '/',
  cacheMiddleware(300), // Cache for 5 minutes
  productController.getAll
)

router.get(
  '/:id',
  cacheMiddleware(600),
  productController.getById
)

// Protected routes - Supplier only
router.post(
  '/',
  authenticate,
  authorize(['supplier']),
  validate(productValidators.create),
  productController.create
)

router.put(
  '/:id',
  authenticate,
  authorize(['supplier']),
  validate(productValidators.update),
  productController.update
)

router.delete(
  '/:id',
  authenticate,
  authorize(['supplier', 'admin']),
  productController.delete
)

export default router
```

### 2. Controller Layer (Request Handling)

```typescript
// src/api/v1/controllers/product.controller.ts
import { Request, Response, NextFunction } from 'express'
import { productService } from '@/services/product.service'
import { successResponse, errorResponse } from '@/utils/response'
import { AppError } from '@/utils/error'

export const productController = {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { page = 1, limit = 20, category, search, minPrice, maxPrice } = req.query
      
      const result = await productService.getAll({
        page: Number(page),
        limit: Number(limit),
        category: category as string,
        search: search as string,
        minPrice: minPrice ? Number(minPrice) : undefined,
        maxPrice: maxPrice ? Number(maxPrice) : undefined,
      })
      
      return successResponse(res, result, 'Products retrieved successfully')
    } catch (error) {
      next(error)
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const product = await productService.getById(id)
      
      if (!product) {
        throw new AppError('Product not found', 404)
      }
      
      return successResponse(res, product, 'Product retrieved successfully')
    } catch (error) {
      next(error)
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const supplierId = req.user!.organizationId
      const productData = { ...req.body, supplier_id: supplierId }
      
      const product = await productService.create(productData)
      
      return successResponse(res, product, 'Product created successfully', 201)
    } catch (error) {
      next(error)
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const supplierId = req.user!.organizationId
      
      // Verify ownership
      const existingProduct = await productService.getById(id)
      if (!existingProduct) {
        throw new AppError('Product not found', 404)
      }
      if (existingProduct.supplier_id !== supplierId) {
        throw new AppError('Unauthorized to update this product', 403)
      }
      
      const product = await productService.update(id, req.body)
      
      return successResponse(res, product, 'Product updated successfully')
    } catch (error) {
      next(error)
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const supplierId = req.user!.organizationId
      
      // Verify ownership (unless admin)
      if (req.user!.role !== 'admin') {
        const existingProduct = await productService.getById(id)
        if (!existingProduct) {
          throw new AppError('Product not found', 404)
        }
        if (existingProduct.supplier_id !== supplierId) {
          throw new AppError('Unauthorized to delete this product', 403)
        }
      }
      
      await productService.delete(id)
      
      return successResponse(res, null, 'Product deleted successfully')
    } catch (error) {
      next(error)
    }
  },
}
```

### 3. Service Layer (Business Logic)

```typescript
// src/services/product.service.ts
import { productRepository } from '@/repositories/product.repository'
import { cacheService } from './cache.service'
import { searchService } from './search.service'
import { storageService } from './storage.service'
import { AppError } from '@/utils/error'
import { logger } from '@/utils/logger'

export const productService = {
  async getAll(filters: ProductFilters) {
    const { page, limit, category, search, minPrice, maxPrice } = filters
    const cacheKey = `products:${JSON.stringify(filters)}`
    
    // Check cache
    const cached = await cacheService.get(cacheKey)
    if (cached) {
      return cached
    }
    
    // If search query, use Elasticsearch
    if (search) {
      const result = await searchService.searchProducts(search, filters)
      await cacheService.set(cacheKey, result, 300)
      return result
    }
    
    // Otherwise, use database
    const result = await productRepository.findAll({
      page,
      limit,
      where: {
        ...(category && { category_id: category }),
        ...(minPrice && { base_price: { gte: minPrice } }),
        ...(maxPrice && { base_price: { lte: maxPrice } }),
        status: 'active',
        deleted_at: null,
      },
      include: {
        supplier: {
          select: {
            id: true,
            display_name: true,
            logo_url: true,
          },
        },
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: { created_at: 'desc' },
    })
    
    await cacheService.set(cacheKey, result, 300)
    return result
  },

  async getById(id: string) {
    const cacheKey = `product:${id}`
    
    // Check cache
    const cached = await cacheService.get(cacheKey)
    if (cached) {
      return cached
    }
    
    const product = await productRepository.findById(id, {
      include: {
        supplier: true,
        category: true,
        certifications: true,
      },
    })
    
    if (product) {
      // Increment view count (async, don't wait)
      productRepository.incrementViewCount(id).catch(err => 
        logger.error('Failed to increment view count', err)
      )
      
      await cacheService.set(cacheKey, product, 600)
    }
    
    return product
  },

  async create(data: CreateProductDto) {
    // Upload images if provided
    if (data.images) {
      const imageUrls = await Promise.all(
        data.images.map(image => storageService.uploadImage(image, 'products'))
      )
      data.primary_image_url = imageUrls[0]
      data.images = imageUrls
    }
    
    // Create product
    const product = await productRepository.create(data)
    
    // Index in Elasticsearch
    await searchService.indexProduct(product)
    
    // Invalidate cache
    await cacheService.invalidatePattern('products:*')
    
    logger.info(`Product created: ${product.id}`)
    
    return product
  },

  async update(id: string, data: UpdateProductDto) {
    // Upload new images if provided
    if (data.images) {
      const imageUrls = await Promise.all(
        data.images.map(image => storageService.uploadImage(image, 'products'))
      )
      data.images = imageUrls
    }
    
    const product = await productRepository.update(id, data)
    
    // Update in Elasticsearch
    await searchService.updateProduct(product)
    
    // Invalidate cache
    await cacheService.del(`product:${id}`)
    await cacheService.invalidatePattern('products:*')
    
    logger.info(`Product updated: ${id}`)
    
    return product
  },

  async delete(id: string) {
    // Soft delete
    await productRepository.softDelete(id)
    
    // Remove from Elasticsearch
    await searchService.deleteProduct(id)
    
    // Invalidate cache
    await cacheService.del(`product:${id}`)
    await cacheService.invalidatePattern('products:*')
    
    logger.info(`Product deleted: ${id}`)
  },
}
```

### 4. Repository Layer (Data Access)

```typescript
// src/repositories/product.repository.ts
import { prisma } from '@/config/database'
import { Prisma } from '@prisma/client'

export const productRepository = {
  async findAll(options: {
    page: number
    limit: number
    where?: Prisma.ProductWhereInput
    include?: Prisma.ProductInclude
    orderBy?: Prisma.ProductOrderByWithRelationInput
  }) {
    const { page, limit, where, include, orderBy } = options
    const skip = (page - 1) * limit
    
    const [data, total] = await Promise.all([
      prisma.product.findMany({
        where,
        include,
        orderBy,
        skip,
        take: limit,
      }),
      prisma.product.count({ where }),
    ])
    
    return {
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasMore: page * limit < total,
      },
    }
  },

  async findById(id: string, options?: { include?: Prisma.ProductInclude }) {
    return prisma.product.findUnique({
      where: { id },
      include: options?.include,
    })
  },

  async create(data: Prisma.ProductCreateInput) {
    return prisma.product.create({ data })
  },

  async update(id: string, data: Prisma.ProductUpdateInput) {
    return prisma.product.update({
      where: { id },
      data,
    })
  },

  async softDelete(id: string) {
    return prisma.product.update({
      where: { id },
      data: { deleted_at: new Date() },
    })
  },

  async incrementViewCount(id: string) {
    return prisma.product.update({
      where: { id },
      data: { view_count: { increment: 1 } },
    })
  },
}
```

---

## Authentication & Authorization

### JWT Authentication

```typescript
// src/utils/jwt.ts
import jwt from 'jsonwebtoken'
import { config } from '@/config'

export const jwtUtils = {
  generateAccessToken(payload: any): string {
    return jwt.sign(payload, config.jwt.secret, {
      expiresIn: config.jwt.accessTokenExpiry, // 15 minutes
    })
  },

  generateRefreshToken(payload: any): string {
    return jwt.sign(payload, config.jwt.refreshSecret, {
      expiresIn: config.jwt.refreshTokenExpiry, // 7 days
    })
  },

  verifyAccessToken(token: string) {
    try {
      return jwt.verify(token, config.jwt.secret)
    } catch (error) {
      throw new AppError('Invalid or expired token', 401)
    }
  },

  verifyRefreshToken(token: string) {
    try {
      return jwt.verify(token, config.jwt.refreshSecret)
    } catch (error) {
      throw new AppError('Invalid or expired refresh token', 401)
    }
  },
}
```

### Auth Middleware

```typescript
// src/middlewares/auth.middleware.ts
import { Request, Response, NextFunction } from 'express'
import { jwtUtils } from '@/utils/jwt'
import { AppError } from '@/utils/error'

export async function authenticate(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '')
    
    if (!token) {
      throw new AppError('Authentication token required', 401)
    }
    
    const decoded = jwtUtils.verifyAccessToken(token)
    
    // Attach user to request
    req.user = {
      id: decoded.userId,
      email: decoded.email,
      role: decoded.role,
      organizationId: decoded.organizationId,
    }
    
    next()
  } catch (error) {
    next(new AppError('Invalid authentication token', 401))
  }
}

export function authorize(allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(new AppError('Unauthorized', 401))
    }
    
    if (!allowedRoles.includes(req.user.role)) {
      return next(new AppError('Insufficient permissions', 403))
    }
    
    next()
  }
}

export function checkPermission(permission: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const hasPermission = await permissionService.checkUserPermission(
        req.user!.id,
        permission
      )
      
      if (!hasPermission) {
        throw new AppError('Insufficient permissions', 403)
      }
      
      next()
    } catch (error) {
      next(error)
    }
  }
}
```

---

## Error Handling

### Custom Error Class

```typescript
// src/utils/error.ts
export class AppError extends Error {
  statusCode: number
  isOperational: boolean
  
  constructor(message: string, statusCode: number = 500, isOperational: boolean = true) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = isOperational
    
    Error.captureStackTrace(this, this.constructor)
  }
}

export class ValidationError extends AppError {
  errors: any[]
  
  constructor(errors: any[]) {
    super('Validation failed', 400)
    this.errors = errors
  }
}

export class DatabaseError extends AppError {
  constructor(message: string) {
    super(message, 500, false)
  }
}
```

### Error Handling Middleware

```typescript
// src/middlewares/error.middleware.ts
import { Request, Response, NextFunction } from 'express'
import { AppError } from '@/utils/error'
import { logger } from '@/utils/logger'
import { Prisma } from '@prisma/client'

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Log error
  logger.error(err)
  
  // Send to Sentry in production
  if (process.env.NODE_ENV === 'production') {
    // Sentry.captureException(err)
  }
  
  // Handle known errors
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      ...(err instanceof ValidationError && { errors: err.errors }),
    })
  }
  
  // Handle Prisma errors
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      return res.status(400).json({
        success: false,
        message: 'Duplicate entry found',
      })
    }
    if (err.code === 'P2025') {
      return res.status(404).json({
        success: false,
        message: 'Record not found',
      })
    }
  }
  
  // Handle unexpected errors
  return res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : err.message,
  })
}
```

---

## Caching Strategy

### Redis Cache Service

```typescript
// src/services/cache.service.ts
import Redis from 'ioredis'
import { config } from '@/config'
import { logger } from '@/utils/logger'

const redis = new Redis(config.redis.url)

export const cacheService = {
  async get<T>(key: string): Promise<T | null> {
    try {
      const cached = await redis.get(key)
      return cached ? JSON.parse(cached) : null
    } catch (error) {
      logger.error(`Cache get error for key ${key}:`, error)
      return null
    }
  },

  async set(key: string, value: any, ttl: number = 3600): Promise<void> {
    try {
      await redis.setex(key, ttl, JSON.stringify(value))
    } catch (error) {
      logger.error(`Cache set error for key ${key}:`, error)
    }
  },

  async del(key: string): Promise<void> {
    try {
      await redis.del(key)
    } catch (error) {
      logger.error(`Cache delete error for key ${key}:`, error)
    }
  },

  async invalidatePattern(pattern: string): Promise<void> {
    try {
      const keys = await redis.keys(pattern)
      if (keys.length > 0) {
        await redis.del(...keys)
      }
    } catch (error) {
      logger.error(`Cache invalidate pattern error for ${pattern}:`, error)
    }
  },

  async exists(key: string): Promise<boolean> {
    try {
      const result = await redis.exists(key)
      return result === 1
    } catch (error) {
      logger.error(`Cache exists error for key ${key}:`, error)
      return false
    }
  },
}
```

---

## Real-Time Communication (WebSocket)

### Socket.io Setup

```typescript
// src/websocket/index.ts
import { Server as HTTPServer } from 'http'
import { Server as SocketServer } from 'socket.io'
import { jwtUtils } from '@/utils/jwt'
import { chatHandler } from './handlers/chat.handler'
import { notificationHandler } from './handlers/notification.handler'
import { logger } from '@/utils/logger'

export function initializeWebSocket(httpServer: HTTPServer) {
  const io = new SocketServer(httpServer, {
    cors: {
      origin: process.env.FRONTEND_URL,
      credentials: true,
    },
  })
  
  // Authentication middleware
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth.token
      if (!token) {
        throw new Error('Authentication token required')
      }
      
      const decoded = jwtUtils.verifyAccessToken(token)
      socket.data.user = decoded
      next()
    } catch (error) {
      next(new Error('Authentication failed'))
    }
  })
  
  // Connection handler
  io.on('connection', (socket) => {
    logger.info(`User connected: ${socket.data.user.userId}`)
    
    // Join user's personal room
    socket.join(`user:${socket.data.user.userId}`)
    socket.join(`org:${socket.data.user.organizationId}`)
    
    // Register handlers
    chatHandler(io, socket)
    notificationHandler(io, socket)
    
    socket.on('disconnect', () => {
      logger.info(`User disconnected: ${socket.data.user.userId}`)
    })
  })
  
  return io
}
```

### Chat Handler

```typescript
// src/websocket/handlers/chat.handler.ts
import { Server, Socket } from 'socket.io'
import { chatService } from '@/services/chat.service'

export function chatHandler(io: Server, socket: Socket) {
  // Join conversation
  socket.on('chat:join', async (conversationId: string) => {
    socket.join(`conversation:${conversationId}`)
  })
  
  // Send message
  socket.on('chat:message', async (data: {
    conversationId: string
    message: string
    attachments?: any[]
  }) => {
    try {
      const message = await chatService.sendMessage({
        conversation_id: data.conversationId,
        sender_id: socket.data.user.userId,
        sender_org_id: socket.data.user.organizationId,
        message_text: data.message,
        attachments: data.attachments,
      })
      
      // Broadcast to conversation
      io.to(`conversation:${data.conversationId}`).emit('chat:new-message', message)
      
      // Send notification to recipient
      // (handled by notification service)
    } catch (error) {
      socket.emit('chat:error', { message: 'Failed to send message' })
    }
  })
  
  // Typing indicator
  socket.on('chat:typing', (conversationId: string) => {
    socket.to(`conversation:${conversationId}`).emit('chat:user-typing', {
      userId: socket.data.user.userId,
      conversationId,
    })
  })
  
  // Mark as read
  socket.on('chat:read', async (data: {
    conversationId: string
    messageId: string
  }) => {
    await chatService.markAsRead(data.messageId, socket.data.user.userId)
    socket.to(`conversation:${data.conversationId}`).emit('chat:message-read', data)
  })
}
```

---

## Background Jobs

### Queue Setup

```typescript
// src/jobs/queues/email.queue.ts
import Bull from 'bull'
import { config } from '@/config'

export const emailQueue = new Bull('email', {
  redis: config.redis.url,
})

export interface EmailJob {
  to: string | string[]
  subject: string
  template: string
  data: any
}

// Add job to queue
export async function sendEmail(data: EmailJob) {
  await emailQueue.add(data, {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 2000,
    },
  })
}
```

### Worker

```typescript
// src/jobs/workers/email.worker.ts
import { emailQueue } from '../queues/email.queue'
import { emailService } from '@/services/email.service'
import { logger } from '@/utils/logger'

emailQueue.process(async (job) => {
  try {
    logger.info(`Processing email job ${job.id}`)
    
    await emailService.send({
      to: job.data.to,
      subject: job.data.subject,
      template: job.data.template,
      data: job.data.data,
    })
    
    logger.info(`Email sent successfully: ${job.id}`)
  } catch (error) {
    logger.error(`Email job failed: ${job.id}`, error)
    throw error
  }
})

emailQueue.on('failed', (job, err) => {
  logger.error(`Email job ${job.id} failed:`, err)
})

emailQueue.on('completed', (job) => {
  logger.info(`Email job ${job.id} completed`)
})
```

---

## Payment Integration

### Razorpay Integration

```typescript
// src/integrations/payment/razorpay.ts
import Razorpay from 'razorpay'
import { config } from '@/config'
import crypto from 'crypto'

const razorpay = new Razorpay({
  key_id: config.razorpay.keyId,
  key_secret: config.razorpay.keySecret,
})

export const razorpayService = {
  async createOrder(amount: number, currency: string = 'INR', receipt: string) {
    const options = {
      amount: amount * 100, // Amount in paise
      currency,
      receipt,
    }
    
    return await razorpay.orders.create(options)
  },

  verifyPaymentSignature(
    orderId: string,
    paymentId: string,
    signature: string
  ): boolean {
    const text = `${orderId}|${paymentId}`
    const generated = crypto
      .createHmac('sha256', config.razorpay.keySecret)
      .update(text)
      .digest('hex')
    
    return generated === signature
  },

  async capturePayment(paymentId: string, amount: number) {
    return await razorpay.payments.capture(paymentId, amount * 100)
  },

  async refundPayment(paymentId: string, amount?: number) {
    const options = amount ? { amount: amount * 100 } : {}
    return await razorpay.payments.refund(paymentId, options)
  },
}
```

---

## Blockchain Integration

### Smart Contract Interaction

```typescript
// src/services/blockchain.service.ts
import Web3 from 'web3'
import { config } from '@/config'
import SupplyChainABI from '@/blockchain/abis/SupplyChain.json'

const web3 = new Web3(config.blockchain.rpcUrl)
const contract = new web3.eth.Contract(
  SupplyChainABI,
  config.blockchain.contractAddress
)

export const blockchainService = {
  async recordTransaction(orderId: string, buyerId: string, supplierId: string, amount: number) {
    try {
      const accounts = await web3.eth.getAccounts()
      const tx = await contract.methods
        .recordTransaction(orderId, buyerId, supplierId, amount)
        .send({ from: accounts[0], gas: 500000 })
      
      return {
        transactionHash: tx.transactionHash,
        blockNumber: tx.blockNumber,
      }
    } catch (error) {
      logger.error('Blockchain transaction failed:', error)
      throw new AppError('Failed to record transaction on blockchain', 500)
    }
  },

  async verifyTransaction(orderId: string) {
    try {
      const tx = await contract.methods.getTransaction(orderId).call()
      return {
        orderId: tx.orderId,
        buyerId: tx.buyerId,
        supplierId: tx.supplierId,
        amount: tx.amount,
        timestamp: new Date(tx.timestamp * 1000),
        verified: true,
      }
    } catch (error) {
      logger.error('Blockchain verification failed:', error)
      return { verified: false }
    }
  },

  async getSupplyChainHistory(orderId: string) {
    try {
      const events = await contract.getPastEvents('TransactionRecorded', {
        filter: { orderId },
        fromBlock: 0,
        toBlock: 'latest',
      })
      
      return events.map(event => ({
        eventName: event.event,
        blockNumber: event.blockNumber,
        transactionHash: event.transactionHash,
        data: event.returnValues,
      }))
    } catch (error) {
      logger.error('Failed to fetch supply chain history:', error)
      return []
    }
  },
}
```

---

## API Documentation (Swagger)

```typescript
// src/docs/swagger.ts
import swaggerJsDoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Toreso API Documentation',
      version: '1.0.0',
      description: 'B2B Packaging Materials Marketplace API',
      contact: {
        name: 'Toreso Support',
        email: 'support@Toreso.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000/api/v1',
        description: 'Development server',
      },
      {
        url: 'https://api.Toreso.com/v1',
        description: 'Production server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/api/v1/routes/*.ts'],
}

export const swaggerSpec = swaggerJsDoc(options)
```

---

## Server Entry Point

```typescript
// src/server.ts
import express from 'express'
import { createServer } from 'http'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import compression from 'compression'
import swaggerUi from 'swagger-ui-express'
import { config } from './config'
import { logger } from './utils/logger'
import { errorHandler } from './middlewares/error.middleware'
import { initializeWebSocket } from './websocket'
import routes from './api/v1/routes'
import { swaggerSpec } from './docs/swagger'

const app = express()
const httpServer = createServer(app)

// Security middleware
app.use(helmet())
app.use(cors({
  origin: config.cors.origin,
  credentials: true,
}))

// Body parsing middleware
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Compression
app.use(compression())

// Request logging
app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } }))

// API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// API routes
app.use('/api/v1', routes)

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' })
})

// Error handler (must be last)
app.use(errorHandler)

// Initialize WebSocket
const io = initializeWebSocket(httpServer)

// Start server
const PORT = config.port || 5000
httpServer.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
  logger.info(`Environment: ${config.env}`)
  logger.info(`API Docs: http://localhost:${PORT}/api-docs`)
})

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: closing HTTP server')
  httpServer.close(() => {
    logger.info('HTTP server closed')
    process.exit(0)
  })
})

export { app, httpServer, io }
```

---

**Document Version**: 1.0  
**Last Updated**: 2024  
**Status**: Planning Phase  
**Runtime**: Node.js 20 LTS

