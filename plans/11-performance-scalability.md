# Performance & Scalability

Targets
- Web Vitals: LCP < 2.5s (p75), TTFB < 200ms (p75), CLS < 0.1
- API Latency: p95 < 200ms for read, p95 < 400ms for write
- Uptime: 99.9%+ (monthly)

Techniques
- Edge caching of public pages (CDN); image optimization; critical CSS
- API caching (Redis) for read-heavy endpoints (catalog, search facets)
- Async jobs for heavy tasks (PDF gen, exports, virus scanning)
- DB: indexing, connection pooling, read replicas; partitioning high-volume tables
- Search engine for catalog/query offload
- Backpressure and rate limits; circuit breakers for integrations

Capacity Planning
- GMV projections → QPS per domain; autoscaling policies; load testing gates per release


