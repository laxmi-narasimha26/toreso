import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { formatPrice, getCommerceProfile } from "@/data/commerce";
import { getGuidePage, getRelatedProductsForSlugs, guidePages } from "@/data/seoContent";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guidePages.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuidePage(slug);

  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
    openGraph: {
      title: `${guide.title} | Toreso`,
      description: guide.description,
      url: `https://toreso.com/guides/${guide.slug}`,
      type: "article",
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuidePage(slug);

  if (!guide) {
    notFound();
  }

  const relatedProducts = getRelatedProductsForSlugs(guide.relatedProductSlugs);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.title,
      description: guide.description,
      datePublished: "2026-06-30",
      dateModified: "2026-06-30",
      author: { "@type": "Organization", name: "Toreso" },
      publisher: { "@type": "Organization", name: "Toreso" },
      mainEntityOfPage: `https://toreso.com/guides/${guide.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: guide.title,
      description: guide.description,
      step: guide.steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        text: step,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: guide.faqs.map((faq) => ({
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
    <div className="min-h-screen bg-[#f5f1eb] text-[#111111]">
      <Navbar />
      <main className="pt-28">
        <article>
          <section className="px-4 py-20">
            <div className="mx-auto max-w-[1500px] rounded-[2rem] bg-[#111111] px-6 py-16 text-[#f5f1eb] md:px-10">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8ebdf6]">
                <Link href="/guides" className="hover:text-[#f5f1eb]">Guides</Link>
                <span>/</span>
                <span>Packaging habits</span>
              </div>
              <h1 className="mt-8 max-w-5xl font-sans text-5xl font-medium uppercase leading-[0.88] tracking-[-0.08em] md:text-8xl">
                {guide.title}
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-9 text-[#cfc8bd]">{guide.intro}</p>
            </div>
          </section>

          <section className="px-6 pb-20">
            <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.68fr_0.32fr]">
              <div className="space-y-5">
                {guide.sections.map((section) => (
                  <section key={section.heading} className="rounded-[2rem] bg-[#fffaf2] p-6 md:p-8">
                    <h2 className="font-display text-4xl font-semibold leading-[0.95] tracking-[-0.045em]">
                      {section.heading}
                    </h2>
                    <p className="mt-5 text-lg font-semibold leading-8 text-[#111111]">{section.answer}</p>
                    <p className="mt-4 text-base leading-8 text-[#5a554f]">{section.detail}</p>
                  </section>
                ))}

                <section className="rounded-[2rem] bg-[#d8d5ec] p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5d5960]">Steps</p>
                  <div className="mt-7 grid gap-4">
                    {guide.steps.map((step, index) => (
                      <div key={step} className="grid gap-4 border-t border-[#111111]/12 pt-4 md:grid-cols-[80px_1fr]">
                        <p className="font-sans text-4xl font-medium tracking-[-0.08em]">{String(index + 1).padStart(2, "0")}</p>
                        <p className="text-base font-semibold leading-7 text-[#3b3941]">{step}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="space-y-6">
                <div className="rounded-[2rem] bg-[#fffaf2] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d766e]">Related products</p>
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

                <div className="rounded-[2rem] bg-[#fffaf2] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d766e]">Questions</p>
                  <div className="mt-5 space-y-5">
                    {guide.faqs.map((faq) => (
                      <section key={faq.question} className="border-t border-[#111111]/12 pt-4">
                        <h2 className="font-display text-2xl font-semibold leading-[0.95] tracking-[-0.035em]">{faq.question}</h2>
                        <p className="mt-3 text-sm leading-7 text-[#5a554f]">{faq.answer}</p>
                      </section>
                    ))}
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
