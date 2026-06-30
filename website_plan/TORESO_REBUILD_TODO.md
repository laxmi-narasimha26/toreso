# Toreso Rebuild Todo

Source documents:
- `C:\Users\user\Downloads\Toreso_SEO_GEO_AEO_Build_Module.md`
- `C:\Users\user\Downloads\compass_artifact_wf-110572de-f67c-4a90-9b41-f2c56c7305f6_text_markdown.md`

## Visual Identity
- [x] Use the supplied screenshots as direction: editorial oversized type, motion ribbons, layered product worlds, rounded glass navigation, sparse premium sections.
- [ ] Replace placeholder product glyphs with generated/rendered product assets once available.
- [ ] Remove box-heavy product-card feeling from high-visibility sections.
- [x] Add motion carefully: horizontal marquees, drifting background text, slow orbit lines, layered product stacks, reduced-motion fallback.

## Catalog
- [x] Treat the supplied 212-product catalog as the source of truth.
- [x] Generate product/category data from the supplied catalog only.
- [x] Update shop, category, cart, order, and PDP routes to use catalog slugs from the supplied list.
- [ ] Add richer product fields: specs, box contents, FAQs, price, schema, related products, and use cases.

## SEO / GEO / AEO
- [ ] Keep SEO/GEO/AEO work invisible to shoppers: metadata, schema, internal links, answer-first copy, robots, sitemap, llms, and semantic headings.
- [x] Add `/shop`, `/c/[category]`, `/p/[slug]` aliases or redirects for the spec URL model while preserving existing routes.
- [x] Add guides, answers, compare, and collection templates.
- [x] Add at least 10 answer pages, 5 compare pages, and one pillar guide per launch category.
- [ ] Add Product, Breadcrumb, FAQ, Organization, WebSite, ItemList, Article, HowTo, and VideoObject schema where appropriate.

## Commerce Experience
- [ ] Make PDPs feel like premium Amazon: gallery, price, MRP, delivery, reviews, specs table, box contents, FAQ, related products, add to cart, buy now.
- [ ] Add order status, returns, tracking, cart, and checkout polish.
- [ ] Add marketplace-ready naming and asset requirements without exposing SEO copy on-page.

## Verification
- [x] `npm run build`
- [x] Localhost smoke test for `/`, `/products`, at least one PDP, at least one category, cart, checkout, tracking.
- [x] Check rendered pages do not contain internal terms like `SEO`, `GEO`, `AEO`, `keyword`, `schema`, or `search query` in visible marketing copy.
- [x] Localhost smoke test for `/guides`, `/answers`, `/compare`, `/robots.txt`, `/llms.txt`, and `/sitemap.xml`.
