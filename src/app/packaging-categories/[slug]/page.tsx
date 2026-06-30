import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ProductArtifact } from "@/components/brand/ToresoMark";
import { formatPrice, getCommerceProfile } from "@/data/commerce";
import {
  getInnovationCategory,
  getProductsByCategorySlug,
  innovationCategories,
} from "@/data/innovationCatalog";
import { cleanCatalogText, compactCatalogText, productJobLabel } from "@/lib/catalog-copy";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const shapes = ["roller", "mailer", "tape", "pouch", "honeycomb", "label"] as const;

export async function generateStaticParams() {
  return innovationCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getInnovationCategory(slug);

  if (!category) {
    return {};
  }

  return {
    title: `${cleanCatalogText(category.aisle)} Recyclable Packaging Products`,
    description: cleanCatalogText(`${category.signal} Shop Toreso ${category.aisle.toLowerCase()} products built for recyclable daily packaging use cases.`),
    keywords: [
      `${cleanCatalogText(category.aisle)} recyclable packaging products`,
      `${cleanCatalogText(category.aisle)} eco friendly packaging`,
      "recyclable daily packaging",
      "sustainable packaging products India",
      cleanCatalogText(category.b2bOrigin),
    ],
    alternates: {
      canonical: `/packaging-categories/${category.slug}`,
    },
    openGraph: {
      title: `${cleanCatalogText(category.aisle)} Recyclable Packaging Products | Toreso`,
      description: cleanCatalogText(category.signal),
      url: `https://toreso.com/packaging-categories/${category.slug}`,
      type: "website",
    },
  };
}

export default async function PackagingCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getInnovationCategory(slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategorySlug(category.slug);
  const topProducts = products.slice(0, 6);
  const categoryAisle = cleanCatalogText(category.aisle);
  const categorySignal = cleanCatalogText(category.signal);
  const categoryAudience = cleanCatalogText(category.audience);
  const categoryOrigin = cleanCatalogText(category.b2bOrigin);
  const faqItems = [
    {
      question: `What are ${categoryAisle.toLowerCase()} recyclable packaging products?`,
      answer: `${categoryAisle} products are packaging tools for ${categoryAudience.toLowerCase()} that convert ${categoryOrigin.toLowerCase()} into easier consumer formats.`,
    },
    {
      question: `Why buy ${category.aisle.toLowerCase()} products from Toreso?`,
      answer:
        "Toreso focuses on daily-use packaging with reusable parts, recyclable materials where possible, clear labeling, right-sized packs, and clear use-case guidance.",
    },
    {
      question: "How does Toreso avoid vague sustainability claims?",
      answer:
        "Each page separates material, use case, refill or reuse path, replacement logic, and end-of-life instructions instead of relying on generic eco visuals.",
    },
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${categoryAisle} Recyclable Packaging Products`,
      description: categorySignal,
      url: `https://toreso.com/packaging-categories/${category.slug}`,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: products.length,
        itemListElement: products.map((product, index) => {
          const commerce = getCommerceProfile(product);
          return {
            "@type": "ListItem",
            position: index + 1,
            url: `https://toreso.com/products/${product.slug}`,
            item: {
              "@type": "Product",
              name: cleanCatalogText(product.name),
              description: cleanCatalogText(product.b2cInnovation),
              category: categoryAisle,
              offers: {
                "@type": "Offer",
                price: commerce.price,
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
              },
            },
          };
        }),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-[#f3eee6] text-[#242424]">
      <Navbar />
      <main className="pt-28">
        <section className="fiber-surface fiber-noise relative overflow-hidden py-20">
          <div className="container relative mx-auto px-6">
            <div className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#5f5a54]">
              <Link href="/packaging-categories" className="hover:text-[#242424]">Recyclable aisles</Link>
              <span>/</span>
              <span>{categoryAisle}</span>
            </div>
            <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="material-stamp bg-[#b96b4d]/70">{cleanCatalogText(category.name)}</p>
                <h1 className="mt-7 max-w-5xl font-display text-4xl font-semibold leading-[0.92] tracking-[-0.025em] sm:text-6xl">
                  {categoryAisle} recyclable packaging products.
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f5a54]">{categorySignal}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {topProducts.slice(0, 3).map((product, index) => (
                  <ProductArtifact
                    key={product.slug}
                    variant={shapes[index % shapes.length]}
                    title={cleanCatalogText(product.name)}
                    material={productJobLabel(product.format)}
                    accent={index === 0 ? "vapor" : index === 1 ? "fiber" : "amber"}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#242424]/12 bg-[#fbf8f2] py-10">
          <div className="container mx-auto grid gap-4 px-6 md:grid-cols-3">
            {[
              `${products.length} products in this aisle`,
              category.priceRange,
              categoryOrigin,
            ].map((item) => (
              <p key={item} className="rounded-full border border-[#242424]/12 bg-[#f3eee6] px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#5f5a54]">
                {item}
              </p>
            ))}
          </div>
        </section>

        <section className="bg-[#f3eee6] py-20">
          <div className="container mx-auto px-6">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="material-stamp bg-[#fbf8f2]">Category proof</p>
                <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.035em]">
                  Start with the problem before choosing the product.
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  `Designed for ${categoryAudience.toLowerCase()}.`,
                  "Made as a daily product, not bulk industrial supply.",
                  "Explains material, reuse path, and replacement support.",
                ].map((proof) => (
                  <article key={proof} className="rounded-[1.5rem] border border-[#242424]/14 bg-[#fbf8f2] p-6 loop-outline">
                    <span className="mb-5 block h-2 w-12 rounded-full bg-[#b96b4d]" />
                    <p className="text-sm font-bold leading-6 text-[#5f5a54]">{proof}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fbf8f2] py-20">
          <div className="container mx-auto px-6">
            <div className="mb-10 max-w-4xl">
              <p className="material-stamp bg-[#f3eee6]">Product shelf</p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.035em]">
                {products.length} Toreso products for this recyclable packaging job.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => {
                const commerce = getCommerceProfile(product);
                return (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="group rounded-[1.6rem] border border-[#242424]/12 bg-[#f3eee6] p-5 loop-outline transition hover:-translate-y-1"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="rounded-full bg-[#fbf8f2] px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.15em] text-[#6d5c35]">
                        {productJobLabel(product.format)}
                      </span>
                      <span className="font-display text-2xl font-semibold text-[#242424]">{formatPrice(commerce.price)}</span>
                    </div>
                    <h3 className="font-display text-3xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#242424] group-hover:text-[#8f5f4a]">
                      {cleanCatalogText(product.name)}
                    </h3>
                    <p className="mt-4 text-sm font-bold leading-6 text-[#5f5a54]">{compactCatalogText(product.userProblem, 120)}</p>
                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#5f5a54]">{compactCatalogText(product.b2cInnovation, 150)}</p>
                    <div className="mt-5 grid grid-cols-3 gap-2 border-t border-[#242424]/10 pt-4">
                      {[
                        `${commerce.rating} rated`,
                        `${commerce.boughtPastMonth}+ bought`,
                        commerce.deliveryPromise,
                      ].map((signal) => (
                        <span key={signal} className="rounded-[0.85rem] bg-[#fbf8f2] px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#5f5a54]">
                          {cleanCatalogText(signal)}
                        </span>
                      ))}
                    </div>
                    <span className="mt-5 inline-flex rounded-full bg-[#242424] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f3eee6]">
                      Open product
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="fiber-surface py-20">
          <div className="container mx-auto px-6">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="material-stamp bg-[#fbf8f2]">Common questions</p>
                <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.035em]">
                  Questions shoppers ask.
                </h2>
              </div>
              <div className="grid gap-4">
                {faqItems.map((faq) => (
                  <article key={faq.question} className="rounded-[1.5rem] border border-[#242424]/14 bg-[#fbf8f2] p-6">
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.025em]">{faq.question}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#5f5a54]">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </div>
  );
}
