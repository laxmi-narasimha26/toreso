import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { formatPrice, getCommerceProfile } from "@/data/commerce";
import { comparePages, getComparePage, getRelatedProductsForSlugs } from "@/data/seoContent";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return comparePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getComparePage(slug);

  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/compare/${page.slug}`,
    },
    openGraph: {
      title: `${page.title} | Toreso`,
      description: page.description,
      url: `https://toreso.com/compare/${page.slug}`,
      type: "article",
    },
  };
}

export default async function ComparePage({ params }: PageProps) {
  const { slug } = await params;
  const page = getComparePage(slug);

  if (!page) {
    notFound();
  }

  const relatedProducts = getRelatedProductsForSlugs(page.relatedProductSlugs);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.title,
      description: page.description,
      datePublished: "2026-06-30",
      dateModified: "2026-06-30",
      author: { "@type": "Organization", name: "Toreso" },
      publisher: { "@type": "Organization", name: "Toreso" },
      mainEntityOfPage: `https://toreso.com/compare/${page.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: page.title,
      itemListElement: relatedProducts.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://toreso.com/products/${product.slug}`,
        name: product.name,
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#111111]">
      <Navbar />
      <main className="pt-28">
        <article>
          <section className="px-4 py-20">
            <div className="mx-auto max-w-[1500px] rounded-[2rem] bg-[#2d9cff] px-6 py-16 text-[#111111] md:px-10">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]">
                <Link href="/compare" className="hover:opacity-70">Compare</Link>
                <span>/</span>
                <span>Buying decision</span>
              </div>
              <h1 className="mt-8 max-w-5xl font-sans text-5xl font-medium uppercase leading-[0.88] tracking-[-0.08em] md:text-8xl">
                {page.title}
              </h1>
              <p className="mt-8 max-w-3xl text-xl font-semibold leading-9">{page.verdict}</p>
            </div>
          </section>

          <section className="px-6 pb-20">
            <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[0.7fr_0.3fr]">
              <div className="overflow-hidden rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2]">
                <div className="grid grid-cols-[0.8fr_1fr_1fr] border-b border-[#111111]/12 bg-[#111111] p-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#f5f1eb]">
                  <span>Feature</span>
                  <span>{page.a}</span>
                  <span>{page.b}</span>
                </div>
                {page.rows.map((row) => (
                  <div key={row.feature} className="grid grid-cols-[0.8fr_1fr_1fr] gap-3 border-b border-[#111111]/10 p-4 text-sm last:border-b-0 md:text-base">
                    <p className="font-semibold text-[#111111]">{row.feature}</p>
                    <p className="leading-7 text-[#5a554f]">{row.a}</p>
                    <p className="leading-7 text-[#5a554f]">{row.b}</p>
                  </div>
                ))}
              </div>

              <aside className="space-y-5">
                <div className="rounded-[2rem] bg-[#fffaf2] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d766e]">Best for</p>
                  <div className="mt-5 space-y-4">
                    {page.bestFor.map((item) => (
                      <section key={item.label} className="border-t border-[#111111]/12 pt-4">
                        <h2 className="font-display text-2xl font-semibold leading-[0.95] tracking-[-0.035em]">{item.label}</h2>
                        <p className="mt-2 text-sm leading-7 text-[#5a554f]">{item.value}</p>
                      </section>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] bg-[#fffaf2] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d766e]">Shop related</p>
                  <div className="mt-5 grid gap-3">
                    {relatedProducts.map((product) => {
                      const commerce = getCommerceProfile(product);
                      return (
                        <Link key={product.slug} href={`/products/${product.slug}`} className="block rounded-[1.2rem] bg-[#f5f1eb] p-4">
                          <h3 className="font-display text-2xl font-semibold leading-[0.95] tracking-[-0.035em]">{product.name}</h3>
                          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#2d72b8]">{formatPrice(commerce.price)}</p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </article>
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
