import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { formatPrice, getCommerceProfile } from "@/data/commerce";
import { innovationCategories, innovationProducts } from "@/data/innovationCatalog";
import { cleanCatalogText, compactCatalogText, productJobLabel } from "@/lib/catalog-copy";

export const metadata: Metadata = {
  title: "Recyclable Packaging Aisles",
  description:
    "Shop Toreso recyclable packaging departments for resealing, freshness, shipping, travel, storage, gifting, labeling, and everyday reuse.",
  keywords: [
    "recyclable packaging aisles",
    "innovative packaging products",
    "daily packaging products",
    "eco friendly packaging products",
    "reusable packaging products",
    "packaging products India",
    "sustainable packaging store",
  ],
  alternates: {
    canonical: "/packaging-categories",
  },
};

const aisleVideos = [
  "/brand-assets/videos/circular-packaging-flow-uhd.mp4",
  "/brand-assets/videos/earth-material-recovery-uhd.mp4",
  "/brand-assets/videos/nature-packaging-system-uhd.mp4",
  "/brand-assets/videos/recycling-sort-loop-hd.mp4",
  "/brand-assets/videos/paper-fiber-loop-hd.mp4",
  "/brand-assets/videos/vertical-material-closeup-hd.mp4",
  "/brand-assets/videos/vertical-reuse-detail-hd.mp4",
  "/brand-assets/videos/vertical-earth-care-uhd.mp4",
  "/brand-assets/videos/recyclable-packaging-table-hd.mp4",
];

const departments = [
  {
    eyebrow: "Department 01",
    title: "Kitchen Reseal Studio",
    promise: "Stop open packets, stale snacks, leaking bottles, wasted produce, and messy fridge shelves.",
    video: "/brand-assets/videos/recyclable-packaging-table-hd.mp4",
    mood: "seal / portion / store / pour / preserve",
    heroProductSlugs: [
      "toreso-snapseal-mini",
      "toreso-vacfresh-handheld",
      "toreso-pourclip",
      "toreso-everbag-silicone-zip",
      "toreso-stackfresh-canisters",
      "toreso-coffee-valve-canister",
    ],
    categorySlugs: [
      "heat-sealing-and-resealing-gadgets",
      "vacuum-sealing-and-food-compression",
      "bag-clips-pour-spouts-and-resealable-closures",
      "reusable-silicone-solutions",
      "reusable-and-eco-wraps-beeswax-fabric",
      "fridge-and-pantry-organization",
      "portion-snack-and-lunch-packaging",
      "bottle-liquid-and-beverage-sealing",
      "specialty-sealing-and-preservation-advanced",
    ],
  },
  {
    eyebrow: "Department 02",
    title: "Ship, Wrap & Return Counter",
    promise: "Consumer-scale dispatch tools for resellers, movers, return parcels, fragile goods, and cleaner packing.",
    video: "/brand-assets/videos/paper-fiber-loop-hd.mp4",
    mood: "cushion / bundle / label / return",
    heroProductSlugs: [
      "toreso-resellpack-kit",
      "honeywrap-roll",
      "toreso-wraproller-mini",
      "toreso-mini-label-printer",
      "travel-tech-organizer-roll",
    ],
    categorySlugs: [
      "cushioning-and-shipping-protection-bubble-void-fill-foam-reinvention",
      "mini-stretch-film-and-wrapping-reinventions",
      "label-sticker-and-identification-solutions",
      "cable-cord-and-tech-small-item-containment",
    ],
  },
  {
    eyebrow: "Department 03",
    title: "Freshness & Care Lab",
    promise: "Moisture, tarnish, odor, closet humidity, jewelry storage, and small-value protection made daily.",
    video: "/brand-assets/videos/earth-material-recovery-uhd.mp4",
    mood: "dry / protect / refresh / prevent",
    heroProductSlugs: [
      "toreso-freshorb-ethylene-absorber",
      "toreso-dryhang-closet-bag",
      "toreso-reusable-silica-pods",
      "toreso-shineguard-pouch",
      "toreso-anti-slip-hanger-set",
    ],
    categorySlugs: [
      "freshness-and-moisture-control-vci-desiccant-reinvention",
      "jewelry-silver-and-small-valuables-protection-vci-anti-tarnish-reinvention",
      "home-closet-and-bathroom-storage-extensions",
    ],
  },
  {
    eyebrow: "Department 04",
    title: "Travel & Outdoor Pack Bar",
    promise: "Compression, leak control, picnic formats, cooler bags, cable containment, and monsoon-ready carry.",
    video: "/brand-assets/videos/vertical-reuse-detail-hd.mp4",
    mood: "compress / carry / protect / refill",
    heroProductSlugs: [
      "toreso-packdown-cordless-kit",
      "packdown-cubes",
      "travel-bottle-leak-lock-set",
      "toreso-foldable-cooler-bag",
      "toreso-waterproof-dry-bag",
    ],
    categorySlugs: [
      "travel-packing-and-clothes-compression",
      "outdoor-picnic-and-on-the-go-packaging",
    ],
  },
  {
    eyebrow: "Department 05",
    title: "Gift, Festival & Fun Desk",
    promise: "Presentation packaging that still has a use after the gift is opened.",
    video: "/brand-assets/videos/nature-packaging-system-uhd.mp4",
    mood: "present / surprise / reuse / delight",
    heroProductSlugs: [
      "toreso-glidecut-wrap-slicer",
      "reusable-fabric-gift-wrap-furoshiki",
      "toreso-instant-gift-bags-pop-open",
      "toreso-blind-box-mystery-storage-minis",
      "toreso-festival-gift-kits-diwali-rakhi",
    ],
    categorySlugs: [
      "gift-wrapping-and-presentation-innovations",
      "seasonal-novelty-and-impulse-fun-packaging",
    ],
  },
];

const shopMissions = [
  {
    title: "Opened snack packet",
    text: "Use a heat sealer, pour clip, silicone bag, or date label before the packet goes stale.",
    slugs: ["toreso-snapseal-mini", "toreso-pourclip", "toreso-everbag-silicone-zip"],
  },
  {
    title: "One return parcel",
    text: "Right-size cushioning, bundle with a mini roller, label clearly, and avoid full industrial rolls.",
    slugs: ["toreso-resellpack-kit", "toreso-wraproller-mini", "toreso-mini-label-printer"],
  },
  {
    title: "Wardrobe humidity",
    text: "Move from disposable sachets to refillable humidity and anti-tarnish systems for closets and valuables.",
    slugs: ["toreso-dryhang-closet-bag", "drybox-refillable-dehumidifier", "toreso-shineguard-pouch"],
  },
  {
    title: "Weekend travel",
    text: "Compress clothes, prevent liquid leaks, organize cables, and keep wet items separate.",
    slugs: ["toreso-packdown-cordless-kit", "travel-bottle-leak-lock-set", "travel-tech-organizer-roll"],
  },
];

const getCategory = (slug: string) => innovationCategories.find((category) => category.slug === slug);
const getProduct = (slug: string) => innovationProducts.find((product) => product.slug === slug);

const departmentCards = departments.map((department, index) => {
  const categories = department.categorySlugs.map(getCategory).filter(Boolean) as typeof innovationCategories;
  const heroProducts = department.heroProductSlugs.map(getProduct).filter(Boolean) as typeof innovationProducts;
  const productCount = categories.reduce((sum, category) => sum + category.count, 0);

  return {
    ...department,
    categories,
    heroProducts,
    productCount,
    index,
  };
});

const featuredProducts = departments.flatMap((department) =>
  department.heroProductSlugs.slice(0, 3).map(getProduct).filter(Boolean),
) as typeof innovationProducts;

export default function PackagingCategoriesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Toreso Recyclable Packaging Aisles",
    description: "Premium recyclable daily packaging departments and category pages.",
    url: "https://toreso.com/packaging-categories",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: innovationCategories.length,
      itemListElement: innovationCategories.map((category, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://toreso.com/packaging-categories/${category.slug}`,
        name: `${cleanCatalogText(category.aisle)} recyclable packaging products`,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-[#f4eee4] text-[#161411]">
      <Navbar />
      <main className="pt-24">
        <section className="px-3 pb-10 pt-4 md:px-5">
          <div className="relative mx-auto min-h-[88vh] max-w-[1880px] overflow-hidden rounded-[2.2rem] bg-[#11100e] text-[#f8f0e3]">
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-[0.55]"
              src="/brand-assets/videos/circular-packaging-flow-uhd.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,16,14,0.9),rgba(17,16,14,0.64)_48%,rgba(17,16,14,0.16)),radial-gradient(circle_at_74%_20%,rgba(218,150,95,0.34),transparent_24%)]" />
            <div className="absolute inset-x-0 top-10 opacity-[0.12]">
              <div className="animate-marquee marquee-phrase whitespace-nowrap font-sans text-[13vw] font-medium uppercase leading-none">
                reseal / wrap / cushion / label / store / return / reuse / recycle /
              </div>
            </div>

            <div className="relative z-10 grid min-h-[88vh] gap-10 px-6 py-10 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="w-fit rounded-full border border-white/15 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#f0c27b] backdrop-blur">
                  Toreso aisle system
                </p>
                <h1 className="mt-10 max-w-6xl font-sans text-[15vw] font-medium uppercase leading-[0.86] tracking-[-0.06em] text-white md:text-[9vw] lg:text-[6.5vw]">
                  Shop by
                  <span className="block text-[#f0c27b]">daily job,</span>
                  <span className="block">not by clutter.</span>
                </h1>
                <p className="mt-8 max-w-3xl text-lg leading-8 text-[#eadccc]">
                  A premium store map for packaging products that solve the real daily failures:
                  stale food, broken parcels, damp closets, messy travel, leaking bottles, and throwaway gifting.
                </p>
              </div>

              <div className="grid gap-4 self-end">
                {[
                  ["214", "curated product ideas"],
                  ["20", "specialist category pages"],
                  ["5", "shopping departments"],
                ].map(([value, label]) => (
                  <article key={label} className="rounded-[1.4rem] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                    <p className="font-sans text-7xl font-medium leading-none tracking-[-0.08em] text-white">{value}</p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f0c27b]">{label}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden py-6">
          <div className="animate-marquee marquee-phrase whitespace-nowrap font-sans text-[12vw] font-medium uppercase leading-none tracking-[-0.075em] text-[#161411] opacity-[0.85] md:text-[8vw]">
            kitchen reseal studio / ship wrap return counter / freshness care lab / travel pack bar / gift desk /
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1720px]">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a5f46]">Curated departments</p>
                <h2 className="mt-5 font-sans text-5xl font-medium uppercase leading-[0.9] tracking-[-0.07em] md:text-7xl">
                  A better way to enter the catalog.
                </h2>
              </div>
              <p className="max-w-3xl text-base leading-8 text-[#5b554d]">
                The original categories stay alive for SEO and product depth. The shopper-facing layer now groups
                them into real buying departments so the page feels like a premium packaging store, not a spreadsheet.
              </p>
            </div>

            <div className="mt-12 grid gap-6">
              {departmentCards.map((department) => (
                <article
                  key={department.title}
                  className="group grid overflow-hidden rounded-[2.25rem] border border-[#161411]/10 bg-[#fff9ef] shadow-[0_24px_90px_rgba(22,20,17,0.08)] lg:grid-cols-[0.92fr_1.08fr]"
                >
                  <div className="relative min-h-[28rem] overflow-hidden bg-[#11100e]">
                    <video className="h-full w-full object-cover opacity-[0.82] transition duration-700 group-hover:scale-105" src={department.video} autoPlay muted loop playsInline preload="metadata" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,16,14,0.02),rgba(17,16,14,0.78))]" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="rounded-full bg-[#f4eee4] px-4 py-2 text-xs font-semibold uppercase tracking-[0.17em] text-[#161411]">{department.eyebrow}</p>
                      <p className="mt-4 font-sans text-5xl font-medium uppercase leading-[0.9] tracking-[-0.07em] text-white md:text-7xl">
                        {department.title}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 lg:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a5f46]">{department.mood}</p>
                    <p className="mt-5 max-w-4xl font-display text-3xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#161411] md:text-5xl">
                      {department.promise}
                    </p>

                    <div className="mt-7 grid gap-3 md:grid-cols-2">
                      {department.heroProducts.slice(0, 4).map((product) => {
                        const commerce = getCommerceProfile(product);
                        return (
                          <Link
                            key={product.slug}
                            href={`/products/${product.slug}`}
                            className="rounded-[1.25rem] border border-[#161411]/10 bg-[#f4eee4] p-4 transition hover:-translate-y-0.5 hover:bg-[#efe1d0]"
                          >
                            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-[#8a5f46]">{productJobLabel(product.format)}</p>
                            <h3 className="mt-3 font-display text-2xl font-semibold leading-[0.95] tracking-[-0.04em]">{cleanCatalogText(product.name)}</h3>
                            <div className="mt-4 flex items-center justify-between gap-4 border-t border-[#161411]/10 pt-3">
                              <span className="text-xs font-semibold text-[#5b554d]">{cleanCatalogText(commerce.deliveryPromise)}</span>
                              <span className="font-sans text-xl font-medium tracking-[-0.05em]">{formatPrice(commerce.price)}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {department.categories.map((category) => (
                        <Link
                          key={category.slug}
                          href={`/packaging-categories/${category.slug}`}
                          className="rounded-full border border-[#161411]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#161411] transition hover:bg-[#161411] hover:text-[#f4eee4]"
                        >
                          {cleanCatalogText(category.name)}
                        </Link>
                      ))}
                    </div>

                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#8a5f46]">
                      {department.productCount} products across {department.categories.length} focused aisles
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#11100e] px-3 py-3 text-[#f4eee4]">
          <div className="grid gap-3 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] bg-[#191511] p-7 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f0c27b]">Shop by problem</p>
              <h2 className="mt-6 font-sans text-5xl font-medium uppercase leading-[0.9] tracking-[-0.07em] md:text-7xl">
                Every product needs a job.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-[#dfd1c0]">
                Packaging becomes premium when it stops being a commodity. These rails turn the catalog into
                situations people recognize immediately.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {shopMissions.map((mission, index) => (
                <article key={mission.title} className="rounded-[2rem] bg-[#191511] p-5">
                  <video className="h-48 w-full rounded-[1.35rem] object-cover opacity-[0.86]" src={aisleVideos[(index + 4) % aisleVideos.length]} autoPlay muted loop playsInline preload="metadata" />
                  <h3 className="mt-5 font-display text-4xl font-semibold leading-[0.92] tracking-[-0.05em]">{mission.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#dfd1c0]">{mission.text}</p>
                  <div className="mt-5 grid gap-2">
                    {mission.slugs.map((slug) => {
                      const product = getProduct(slug);
                      if (!product) return null;
                      return (
                        <Link key={slug} href={`/products/${slug}`} className="rounded-full bg-[#f4eee4] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#161411]">
                          {cleanCatalogText(product.name)}
                        </Link>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-[1720px]">
            <div className="mb-12 grid gap-6 md:grid-cols-[0.86fr_1.14fr] md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a5f46]">Product highlights</p>
                <h2 className="mt-5 font-sans text-5xl font-medium uppercase leading-[0.9] tracking-[-0.07em] md:text-7xl">
                  Stronger shelf, less noise.
                </h2>
              </div>
              <p className="text-base leading-8 text-[#5b554d]">
                Hero products are selected because they convert industrial packaging logic into useful daily formats:
                mini rollers, handheld sealers, refillable moisture control, paper cushioning, leak-lock travel, and reusable gift systems.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {featuredProducts.slice(0, 15).map((product, index) => {
                const commerce = getCommerceProfile(product);
                return (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="group rounded-[1.8rem] border border-[#161411]/10 bg-[#fff9ef] p-5 shadow-[0_18px_60px_rgba(22,20,17,0.07)] transition hover:-translate-y-1"
                  >
                    <div className="mb-5 h-40 overflow-hidden rounded-[1.25rem] bg-[#11100e]">
                      <video className="h-full w-full object-cover opacity-80 transition group-hover:scale-105" src={aisleVideos[index % aisleVideos.length]} autoPlay muted loop playsInline preload="metadata" />
                    </div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-[#8a5f46]">{productJobLabel(product.format)}</p>
                    <h3 className="mt-3 font-display text-3xl font-semibold leading-[0.95] tracking-[-0.04em]">{cleanCatalogText(product.name)}</h3>
                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#5b554d]">{compactCatalogText(product.b2cInnovation, 138)}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-[#161411]/10 pt-4">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5b554d]">{commerce.rating} rated</span>
                      <span className="font-sans text-2xl font-medium tracking-[-0.06em]">{formatPrice(commerce.price)}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-[1720px] rounded-[2.2rem] bg-[#161411] p-6 text-[#f4eee4] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f0c27b]">All category doors</p>
                <h2 className="mt-5 font-sans text-5xl font-medium uppercase leading-[0.9] tracking-[-0.07em] md:text-7xl">
                  The complete aisle index.
                </h2>
              </div>
              <p className="max-w-3xl text-base leading-8 text-[#dfd1c0]">
                These remain the deep SEO and product-detail doors. The page leads with curated departments,
                then keeps every specialist category one click away.
              </p>
            </div>
            <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {innovationCategories.map((category, index) => (
                <Link
                  key={category.slug}
                  href={`/packaging-categories/${category.slug}`}
                  className="rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-4 transition hover:bg-white/[0.12]"
                >
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#f0c27b]">Aisle {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold leading-[0.96] tracking-[-0.035em]">{cleanCatalogText(category.name)}</h3>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#dfd1c0]">{category.count} products</p>
                </Link>
              ))}
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
