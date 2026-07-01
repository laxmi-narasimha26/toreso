import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { formatPrice, getCommerceProfile } from "@/data/commerce";
import { innovationCategories, innovationProducts } from "@/data/innovationCatalog";
import { cleanCatalogText, compactCatalogText, productJobLabel } from "@/lib/catalog-copy";

export const metadata: Metadata = {
  title: "Everyday Packaging Products",
  description:
    "Shop Toreso everyday packaging products for resealing, freshness, travel, storage, labels, moisture control, gifting, shipping, and returns.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Everyday Packaging Products | Toreso",
    description:
      "A premium daily packaging shelf for homes, small sellers, gifting, travel, returns, and storage.",
    url: "https://toreso.com/products",
    type: "website",
  },
};

const shelfProducts = innovationProducts;

const productVideos = [
  {
    src: "/brand-assets/videos/seamless-heat-seal-demo.mp4",
    label: "Seal",
    title: "Watch the edge close.",
  },
  {
    src: "/brand-assets/videos/paper-fiber-loop-hd.mp4",
    label: "Texture",
    title: "Fiber, film, fold, repeat.",
  },
  {
    src: "/brand-assets/videos/recyclable-packaging-table-hd.mp4",
    label: "Pack",
    title: "A shelf with motion.",
  },
];

const shelfVideos = [
  "/brand-assets/videos/recyclable-packaging-table-hd.mp4",
  "/brand-assets/videos/paper-fiber-loop-hd.mp4",
  "/brand-assets/videos/earth-material-recovery-uhd.mp4",
  "/brand-assets/videos/nature-packaging-system-uhd.mp4",
  "/brand-assets/videos/recycling-sort-loop-hd.mp4",
  "/brand-assets/videos/vertical-material-closeup-hd.mp4",
  "/brand-assets/videos/vertical-reuse-detail-hd.mp4",
  "/brand-assets/videos/vertical-earth-care-uhd.mp4",
  "/brand-assets/videos/circular-packaging-flow-uhd.mp4",
];

const departmentShelves = [
  {
    title: "Kitchen Reseal Studio",
    text: "Seal, pour, vacuum, portion, preserve, and organize opened food packs.",
    categorySlugs: [
      "heat-sealing-and-resealing-gadgets",
      "vacuum-sealing-and-food-compression",
      "bag-clips-pour-spouts-and-resealable-closures",
      "reusable-silicone-solutions",
      "fridge-and-pantry-organization",
      "portion-snack-and-lunch-packaging",
      "bottle-liquid-and-beverage-sealing",
      "specialty-sealing-and-preservation-advanced",
    ],
  },
  {
    title: "Ship, Wrap & Return",
    text: "Small-seller and home dispatch formats for cleaner protection and return-ready parcels.",
    categorySlugs: [
      "cushioning-and-shipping-protection-bubble-void-fill-foam-reinvention",
      "mini-stretch-film-and-wrapping-reinventions",
      "label-sticker-and-identification-solutions",
      "cable-cord-and-tech-small-item-containment",
    ],
  },
  {
    title: "Freshness & Care Lab",
    text: "Moisture, anti-tarnish, closet, home storage, and small-value protection.",
    categorySlugs: [
      "freshness-and-moisture-control-vci-desiccant-reinvention",
      "jewelry-silver-and-small-valuables-protection-vci-anti-tarnish-reinvention",
      "home-closet-and-bathroom-storage-extensions",
    ],
  },
  {
    title: "Travel & Outdoor Pack Bar",
    text: "Compression, leak control, cooler, dry-bag, picnic, and carry formats.",
    categorySlugs: ["travel-packing-and-clothes-compression", "outdoor-picnic-and-on-the-go-packaging"],
  },
  {
    title: "Gift, Festival & Fun Desk",
    text: "Reusable presentation, cutters, festival kits, impulse storage, and functional fun.",
    categorySlugs: ["gift-wrapping-and-presentation-innovations", "seasonal-novelty-and-impulse-fun-packaging"],
  },
];

const departmentForProduct = (categorySlug: string) =>
  departmentShelves.find((department) => department.categorySlugs.includes(categorySlug)) ?? departmentShelves[0];

export default function ProductsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Toreso Everyday Packaging Products",
    description:
      "All Toreso everyday packaging products with category pages, material logic, pricing, and daily use cases.",
    url: "https://toreso.com/products",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: innovationProducts.length,
      itemListElement: innovationProducts.map((product, index) => {
        const commerce = getCommerceProfile(product);
        return {
          "@type": "ListItem",
          position: index + 1,
          url: `https://toreso.com/products/${product.slug}`,
          item: {
            "@type": "Product",
                      name: cleanCatalogText(product.name),
                      category: cleanCatalogText(product.aisle),
                      description: cleanCatalogText(product.b2cInnovation),
            sku: commerce.sku,
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
  };

  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#111111]">
      <Navbar />
      <main className="pt-24">
        <section className="relative overflow-hidden px-3 pb-8 pt-5 md:px-5">
          <div className="relative mx-auto min-h-[82vh] max-w-[1860px] overflow-hidden rounded-[2rem] bg-[#111111] text-[#f5f1eb] shadow-[0_24px_90px_rgba(17,17,17,0.18)]">
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-[0.42]"
              src="/brand-assets/videos/circular-packaging-flow-uhd.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.84),rgba(17,17,17,0.48)_48%,rgba(17,17,17,0.12)),radial-gradient(circle_at_76%_16%,rgba(240,194,123,0.32),transparent_26%)]" />
            <div className="absolute inset-x-0 top-12 opacity-[0.12]">
              <div className="animate-marquee marquee-phrase whitespace-nowrap font-sans text-[15vw] font-medium uppercase leading-none">
                shop the system  /  shop the system  /  shop the system  /
              </div>
            </div>

            <div className="relative z-10 grid min-h-[82vh] gap-12 px-6 py-12 md:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
              <div>
                <p className="w-fit rounded-full border border-white/15 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#f0c27b] backdrop-blur">
                  {innovationProducts.length} everyday packaging products
                </p>
                <h1 className="mt-10 max-w-6xl font-sans text-[17vw] font-medium uppercase leading-[0.86] tracking-[-0.055em] md:text-[10vw] lg:text-[7vw]">
                  The shelf
                  <span className="block text-[#f0c27b]">for every</span>
                  <span className="block">package.</span>
                </h1>
                <p className="mt-8 max-w-3xl border-t border-white/20 pt-6 text-lg leading-8 text-[#ddd4c8]">
                  Reseal snacks, protect parcels, compress travel, dry wardrobes, organize cables,
                  gift cleaner, and make returns less wasteful. This is not a generic catalog;
                  it is a daily packaging system.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3 lg:self-end">
                {productVideos.map((video, index) => (
                  <article
                    key={video.src}
                    className={`overflow-hidden rounded-[1.7rem] border border-white/18 bg-white/10 p-3 backdrop-blur-md ${
                      index === 1 ? "md:-translate-y-12" : ""
                    }`}
                  >
                    <div className="relative h-56 overflow-hidden rounded-[1.2rem] bg-[#f5f1eb]">
                      <video
                        className="h-full w-full object-cover"
                        src={video.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    </div>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#f0c27b]">{video.label}</p>
                    <h2 className="mt-2 font-display text-3xl font-semibold leading-[0.95] tracking-[-0.04em]">
                      {video.title}
                    </h2>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden border-y border-[#111111]/12 bg-[#f5f1eb] py-5">
          <div className="animate-marquee marquee-phrase whitespace-nowrap font-sans text-[12vw] font-medium uppercase leading-none text-[#a56c45] md:text-[7vw]">
            seal  /  wrap  /  dry  /  label  /  ship  /  return  /  store  /  gift  /  seal  /  wrap  /  dry  /  label  /  ship  /  return  /  store  /  gift  /
          </div>
        </section>

        <section className="bg-[#f5f1eb] px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-[1720px] gap-10 lg:grid-cols-[0.32fr_0.68fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7d766e]">Aisles</p>
              <h2 className="mt-5 font-sans text-5xl font-medium uppercase leading-[0.96] tracking-[-0.045em]">
                Find the job first.
              </h2>
              <div className="mt-8 flex gap-2 overflow-x-auto pb-2 lg:grid lg:overflow-visible">
                {departmentShelves.map((department, index) => {
                  const categories = department.categorySlugs
                    .map((slug) => innovationCategories.find((category) => category.slug === slug))
                    .filter(Boolean) as typeof innovationCategories;

                  return (
                  <Link
                    key={department.title}
                    href={`/packaging-categories/${categories[0]?.slug ?? ""}`}
                    className="group min-w-72 rounded-[1.5rem] border border-[#111111]/10 bg-[#fffaf2] p-4 transition hover:bg-[#111111] hover:text-[#f5f1eb] lg:min-w-0"
                  >
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#8a5f46]">
                      {String(index + 1).padStart(2, "0")} / {categories.reduce((total, category) => total + category.count, 0)} products
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-semibold leading-[0.95] tracking-[-0.035em]">
                      {department.title}
                    </h3>
                    <p className="mt-3 text-xs font-semibold leading-5 text-[#5a554f] group-hover:text-[#ddd4c8]">
                      {department.text}
                    </p>
                  </Link>
                  );
                })}
              </div>
            </aside>

            <div>
              <div className="mb-8 flex flex-col justify-between gap-6 border-b border-[#111111]/12 pb-8 md:flex-row md:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7d766e]">The product shelf</p>
                  <h2 className="mt-4 font-sans text-5xl font-medium uppercase leading-[0.96] tracking-[-0.045em] md:text-7xl">
                    Premium, useful, specific.
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-[#5a554f]">
                  Every product card keeps the buying signals visible: job, category, format,
                  price, and the mechanism that makes it different.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {shelfProducts.map((product, index) => {
                  const commerce = getCommerceProfile(product);
                  const department = departmentForProduct(product.categorySlug);
                  const useMotionCard = index < 30;
                  return (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      className="group overflow-hidden rounded-[2rem] border border-[#111111]/10 bg-[#fffaf2] p-4 transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(17,17,17,0.1)]"
                    >
                      <div className="relative mb-5 h-56 overflow-hidden rounded-[1.45rem] bg-[#111111]">
                        {useMotionCard ? (
                          <video
                            className="absolute inset-0 h-full w-full object-cover opacity-[0.82] transition duration-500 group-hover:scale-105"
                            src={shelfVideos[index % shelfVideos.length]}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(240,194,123,0.36),transparent_25%),radial-gradient(circle_at_76%_70%,rgba(143,95,74,0.28),transparent_24%),linear-gradient(135deg,#111111,#2b2520)]" />
                        )}
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.02),rgba(17,17,17,0.7))]" />
                        <span className="absolute left-4 top-4 rounded-full bg-[#f5f1eb] px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.15em] text-[#111111]">
                          TRS-{String(product.catalogNumber).padStart(3, "0")}
                        </span>
                        <span className="absolute bottom-4 left-4 right-4 rounded-full bg-[#111111]/75 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#f5f1eb] backdrop-blur">
                          {department.title}
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#8a5f46]">{cleanCatalogText(product.aisle)}</p>
                          <h3 className="mt-3 font-display text-3xl font-semibold leading-[0.92] tracking-[-0.04em] text-[#111111]">
                            {cleanCatalogText(product.name)}
                          </h3>
                        </div>
                        <p className="font-sans text-2xl font-medium tracking-[-0.05em] text-[#111111]">{formatPrice(commerce.price)}</p>
                      </div>
                      <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#5a554f]">{compactCatalogText(product.b2cInnovation, 150)}</p>
                      <div className="mt-5 grid grid-cols-3 gap-2">
                        {[
                          `${commerce.rating} rating`,
                          `${commerce.boughtPastMonth}+ bought`,
                          commerce.stock,
                        ].map((signal) => (
                          <span key={signal} className="rounded-[0.9rem] bg-[#f5f1eb] px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#5a554f]">
                            {cleanCatalogText(signal)}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5 rounded-[1.15rem] border border-[#111111]/10 bg-[#f5f1eb] p-3">
                        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#7d766e]">Spec preview</p>
                        <p className="mt-2 line-clamp-2 text-xs font-semibold leading-5 text-[#111111]">
                          {cleanCatalogText(product.specs[2]?.value || product.format)} / {cleanCatalogText(product.specs[4]?.value || product.origin)}
                        </p>
                      </div>
                      <div className="mt-6 flex items-center justify-between border-t border-[#111111]/10 pt-4">
                        <span className="rounded-full bg-[#e8ddd0] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#111111]">
                          {productJobLabel(product.format)}
                        </span>
                        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#7d766e]">
                          View product
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
