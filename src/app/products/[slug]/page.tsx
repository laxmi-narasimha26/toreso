import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AddToCartButton from "@/components/storefront/AddToCartButton";
import { ProductArtifact } from "@/components/brand/ToresoMark";
import {
  getInnovationProduct,
  getRelatedProducts,
  innovationProducts,
} from "@/data/innovationCatalog";
import { formatPrice, getCommerceProfile } from "@/data/commerce";
import { cleanCatalogText, compactCatalogText, productJobLabel } from "@/lib/catalog-copy";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const shapes = ["roller", "mailer", "tape", "pouch", "honeycomb", "label"] as const;
const videoByTrack: Record<string, string> = {
  "Heat Sealing & Resealing Gadgets": "/brand-assets/videos/seamless-heat-seal-demo.mp4",
  "Mini Stretch Film & Wrapping Reinventions": "/brand-assets/videos/packing-motion-1080.mp4",
  "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)": "/brand-assets/videos/material-loop-720.mp4",
};

export async function generateStaticParams() {
  return innovationProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getInnovationProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${cleanCatalogText(product.name)} Recyclable Packaging Product`,
    description: cleanCatalogText(`${product.heroLine} ${product.b2cInnovation}`),
    keywords: [
      cleanCatalogText(product.name),
      `${cleanCatalogText(product.aisle)} recyclable packaging`,
      `${cleanCatalogText(product.format)} packaging product`,
      "recyclable packaging products",
      "daily packaging products",
      cleanCatalogText(product.userProblem),
    ],
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${cleanCatalogText(product.name)} | Toreso`,
      description: cleanCatalogText(product.b2cInnovation),
      url: `https://toreso.com/products/${product.slug}`,
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getInnovationProduct(slug);

  if (!product) {
    notFound();
  }

  const index = innovationProducts.findIndex((item) => item.slug === product.slug);
  const commerce = getCommerceProfile(product);
  const relatedProducts = getRelatedProducts(product, 6);
  const shape = shapes[Math.max(0, index) % shapes.length];
  const demoVideo = videoByTrack[product.track] ?? "/brand-assets/videos/material-loop-720.mp4";
  const productName = cleanCatalogText(product.name);
  const productAisle = cleanCatalogText(product.aisle);
  const productInnovation = cleanCatalogText(product.b2cInnovation);
  const productProblem = cleanCatalogText(product.userProblem);
  const productFormat = cleanCatalogText(product.format);
  const productOrigin = cleanCatalogText(product.origin);
  const lifecycle = [
    {
      label: "Material logic",
      value: `Built from ${cleanCatalogText(product.b2bOrigin).toLowerCase()} and converted into a consumer-ready ${productFormat.toLowerCase()}.`,
    },
    {
      label: "Daily use case",
      value: productProblem,
    },
    {
      label: "Circular action",
      value: "Ships with QR care, reuse, replacement, and recycle instructions for the product format.",
    },
  ];
  const quickFacts = [
    { label: "Rating", value: `${commerce.rating}/5 from ${commerce.reviews.toLocaleString("en-IN")} reviews` },
    { label: "Demand", value: `${commerce.boughtPastMonth}+ bought this month` },
    { label: "Delivery", value: commerce.fastDelivery },
    { label: "Warranty", value: commerce.warranty },
  ];
  const useSteps = [
    { label: "Open", text: `Use it for ${productProblem.toLowerCase()}.` },
    { label: "Protect", text: productInnovation },
    { label: "Repeat", text: "Keep the reusable part in circulation before replacing refills." },
    { label: "Return", text: "Use the shipping sleeve and QR care card for replacements or returns." },
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName,
    brand: {
      "@type": "Brand",
      name: "Toreso",
      slogan: "Total Recyclable Solutions",
    },
    category: `${productAisle} recyclable packaging products`,
    description: productInnovation,
    url: `https://toreso.com/products/${product.slug}`,
    sku: commerce.sku,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: commerce.rating,
      reviewCount: commerce.reviews,
    },
    offers: {
      "@type": "Offer",
      price: commerce.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `https://toreso.com/products/${product.slug}`,
    },
    additionalProperty: [
      ...product.specs.map((spec) => ({
        "@type": "PropertyValue",
        name: cleanCatalogText(spec.label),
        value: cleanCatalogText(spec.value),
      })),
      {
        "@type": "PropertyValue",
        name: "Packaging promise",
        value: "Return-ready recyclable outer packaging with QR care label",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((faq) => ({
      "@type": "Question",
      name: cleanCatalogText(faq.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: cleanCatalogText(faq.answer),
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#111111]">
      <Navbar />
      <main className="pt-28">
        <section className="relative overflow-hidden bg-[#f5f1eb] px-4 py-10">
          <div className="absolute inset-x-0 top-16 overflow-hidden opacity-[0.06]">
            <div className="animate-marquee marquee-phrase whitespace-nowrap font-sans text-[14vw] font-medium uppercase leading-none text-[#111111]">
              product detail  /  product detail  /  product detail  /
            </div>
          </div>
          <div className="container relative mx-auto px-6">
            <div className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#5f5a54]">
              <Link href="/products" className="hover:text-[#111111]">Products</Link>
              <span>/</span>
              <Link href={`/packaging-categories/${product.categorySlug}`} className="hover:text-[#111111]">
                {productAisle}
              </Link>
              <span>/</span>
              <span>{productName}</span>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <div className="overflow-hidden rounded-[2rem] bg-[#111111] p-3 text-[#f5f1eb] shadow-[0_24px_90px_rgba(17,17,17,0.14)]">
                  <div className="relative h-[440px] overflow-hidden rounded-[1.5rem]">
                    <video
                      className="absolute inset-0 h-full w-full object-cover opacity-70"
                      src={demoVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.08),rgba(17,17,17,0.68))]" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b7d6fb]">Demo motion</p>
                      <h2 className="mt-3 max-w-2xl font-display text-5xl font-semibold leading-[0.96] tracking-[-0.035em]">
                        See the packaging behavior before buying.
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <ProductArtifact
                    variant={shape}
                    title={productName}
                    material={productFormat}
                    accent={index % 3 === 0 ? "vapor" : index % 3 === 1 ? "fiber" : "amber"}
                  />
                  <article className="rounded-[1.5rem] border border-[#111111]/10 bg-[#fffaf2] p-5 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2d72b8]">Product media</p>
                    <h2 className="mt-4 font-display text-4xl font-semibold leading-[0.96] tracking-[-0.035em]">
                      Gallery-ready layout for real product cutouts.
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[#5a554f]">
                      This slot is ready for final product renders, in-hand scale shots, close-up
                      mechanism shots, and packaging instruction clips as soon as assets are generated.
                    </p>
                  </article>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {lifecycle.map((item) => (
                    <article key={item.label} className="rounded-[1.3rem] border border-[#111111]/10 bg-[#fffaf2] p-5">
                      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2d72b8]">{item.label}</h2>
                      <p className="mt-3 text-sm font-bold leading-6 text-[#5f5a54]">{item.value}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-6 shadow-[0_24px_70px_rgba(17,17,17,0.08)]">
                <p className="w-fit rounded-full bg-[#111111] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f5f1eb]">{cleanCatalogText(product.launchPriority)}</p>
                <h1 className="mt-6 font-sans text-5xl font-medium uppercase leading-[0.96] tracking-[-0.045em] sm:text-6xl">
                  {productName}
                </h1>
                <p className="mt-5 text-lg leading-8 text-[#5f5a54]">{productInnovation}</p>

                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {quickFacts.map((fact) => (
                    <article key={fact.label} className="rounded-[1.1rem] border border-[#111111]/10 bg-[#f5f1eb] p-4">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#7d766e]">{fact.label}</p>
                      <p className="mt-2 text-sm font-bold leading-5 text-[#111111]">{cleanCatalogText(fact.value)}</p>
                    </article>
                  ))}
                </div>

                <div className="mt-7 rounded-[1.5rem] border border-[#111111]/10 bg-[#f5f1eb] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2d72b8]">Toreso launch price</p>
                  <div className="mt-3 flex flex-wrap items-end gap-3">
                    <p className="font-sans text-5xl font-medium tracking-[-0.07em]">{formatPrice(commerce.price)}</p>
                    <p className="pb-2 text-base font-semibold text-[#6d5c35] line-through">{formatPrice(commerce.mrp)}</p>
                    <p className="pb-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#8f5f4a]">{commerce.discount}% off</p>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {[
                      commerce.deliveryPromise,
                      commerce.returnWindow,
                      commerce.stock,
                    ].map((item) => (
                      <p key={item} className="rounded-[1rem] bg-[#fffaf2] p-3 text-xs font-semibold leading-5 text-[#5f5a54]">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-[#111111]/10 bg-[#f5f1eb] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2d72b8]">Choose your pack</p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {commerce.packOptions.map((option, optionIndex) => (
                      <span
                        key={option}
                        className={`rounded-full border px-4 py-3 text-xs font-semibold uppercase tracking-[0.13em] ${
                          optionIndex === 1
                            ? "border-[#111111] bg-[#111111] text-[#f5f1eb]"
                            : "border-[#111111]/14 bg-[#fffaf2] text-[#111111]"
                        }`}
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <AddToCartButton
                    productSlug={product.slug}
                    className="rounded-full bg-[#111111] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#f5f1eb] transition hover:bg-[#2c2c2c] disabled:cursor-wait disabled:opacity-70"
                  />
                  <AddToCartButton
                    productSlug={product.slug}
                    label="Buy now"
                    redirectTo="/checkout"
                    className="rounded-full border border-[#111111]/18 bg-[#f5f1eb] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#111111] transition hover:border-[#111111]"
                  />
                </div>

                <div className="mt-6 grid gap-2">
                  {commerce.badges.slice(0, 4).map((badge) => (
                    <span key={badge} className="rounded-full border border-[#242424]/12 px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#5f5a54]">
                      {cleanCatalogText(badge)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#242424] py-20 text-[#f3eee6]">
          <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b96b4d]">Why this product exists</p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.035em]">
                A real packaging problem, not an aesthetic object.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {product.benefits.map((benefit, benefitIndex) => (
                <article key={`${benefit}-${benefitIndex}`} className="rounded-[1.5rem] border border-[#f3eee6]/12 bg-[#f3eee6]/7 p-6">
                  <span className="mb-5 block h-2 w-12 rounded-full bg-[#b96b4d]" />
                  <p className="text-sm font-bold leading-6 text-[#f3eee6]">{cleanCatalogText(benefit)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1eb] py-20">
          <div className="container mx-auto px-6">
            <div className="mb-10 grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2d72b8]">Use cycle</p>
                <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.035em]">
                  How {productName} earns its place at home.
                </h2>
              </div>
              <p className="max-w-3xl text-base leading-8 text-[#5f5a54]">
                Every Toreso product page explains the everyday job, the packaging mechanism,
                and the reuse or return path. That keeps the sustainability story practical.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {useSteps.map((step, stepIndex) => (
                <article key={step.label} className="rounded-[1.5rem] border border-[#111111]/10 bg-[#fffaf2] p-5">
                  <p className="font-sans text-5xl font-medium leading-none tracking-[-0.045em] text-[#2d9cff]">
                    {String(stepIndex + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#111111]">{step.label}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a54]">{compactCatalogText(step.text, 150)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fbf8f2] py-20">
          <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="material-stamp bg-[#f3eee6]">Details and care</p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.035em]">
                Clear details for buying, recycling, and support.
              </h2>
              <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-[#242424]/14">
                {commerce.technicalSpecs.map((spec) => (
                  <div key={spec.label} className="grid gap-2 border-b border-[#242424]/10 bg-[#f3eee6] p-4 text-sm last:border-b-0 md:grid-cols-[190px_1fr]">
                    <dt className="font-semibold uppercase tracking-[0.12em] text-[#6d5c35]">{cleanCatalogText(spec.label)}</dt>
                    <dd className="leading-6 text-[#5f5a54]">{cleanCatalogText(spec.value)}</dd>
                  </div>
                ))}
              </div>
            </div>
            <aside className="rounded-[2rem] border border-[#242424]/14 bg-[#f3eee6] p-6 loop-outline">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6d5c35]">Box contents</p>
              <div className="mt-5 grid gap-3">
                {commerce.boxContents.map((item) => (
                  <p key={item} className="rounded-full bg-[#fbf8f2] px-4 py-3 text-sm font-bold capitalize text-[#5f5a54]">
                    {cleanCatalogText(item)}
                  </p>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="fiber-surface py-20">
          <div className="container mx-auto px-6">
            <div className="mb-10 max-w-4xl">
              <p className="material-stamp bg-[#fbf8f2]">Common questions</p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.035em]">
                Questions this product page answers.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {product.faqs.map((faq) => (
                <article key={faq.question} className="rounded-[1.5rem] border border-[#242424]/14 bg-[#fbf8f2] p-6">
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.025em]">{cleanCatalogText(faq.question)}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f5a54]">{cleanCatalogText(faq.answer)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fbf8f2] py-20">
          <div className="container mx-auto px-6">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="material-stamp bg-[#f3eee6]">Related recyclable products</p>
                <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.035em]">
                  More from {productAisle}.
                </h2>
              </div>
              <Link href="/products" className="rounded-full bg-[#242424] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#f3eee6]">
                View all
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {relatedProducts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="rounded-[1.5rem] border border-[#242424]/12 bg-[#f3eee6] p-5 loop-outline transition hover:-translate-y-1"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6d5c35]">{productJobLabel(item.format)}</p>
                  <h3 className="mt-4 font-display text-3xl font-semibold leading-[0.98] tracking-[-0.03em]">{cleanCatalogText(item.name)}</h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#5f5a54]">{compactCatalogText(item.b2cInnovation, 140)}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
