import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LoopStatement } from "@/components/brand/ToresoMark";
import { formatPrice, getCommerceProfile } from "@/data/commerce";
import { getInnovationProduct, innovationCategories, innovationProducts } from "@/data/innovationCatalog";

const heroSlugs = [
  "toreso-snapseal-mini",
  "toreso-wraproller-mini",
  "toreso-freshorb-ethylene-absorber",
  "toreso-everbag-silicone-zip",
  "honeywrap-roll",
  "toreso-dryhang-closet-bag",
];

const heroProducts = heroSlugs
  .map((slug) => getInnovationProduct(slug))
  .filter((product): product is NonNullable<typeof product> => Boolean(product));

const motionWords = [
  "reseal snacks",
  "wrap luggage",
  "save coriander",
  "ship clean",
  "store dry",
  "gift better",
  "label everything",
  "pack less",
];

const proofStats = [
  { value: "212", label: "daily packaging products" },
  { value: "20", label: "packaging-only categories" },
  { value: "5", label: "launch hero systems" },
  { value: "0", label: "generic lifestyle clutter" },
];

const circularSteps = [
  {
    number: "01",
    label: "Make it useful",
    text: "Each product starts with a real daily packaging frustration: stale snacks, humid closets, damaged parcels, leaky travel bottles, tangled cables, or wasteful returns.",
  },
  {
    number: "02",
    label: "Make it smaller",
    text: "Industrial packaging formats become drawer-sized tools, refill packs, starter kits, and compact systems people can actually buy and use at home.",
  },
  {
    number: "03",
    label: "Make it circular",
    text: "Products carry clearer material logic, reusable parts where it matters, recyclable outer sleeves, and QR care guidance for the next use.",
  },
];

const launchAisles = innovationCategories.filter((category) =>
  [
    "heat-sealing-and-resealing-gadgets",
    "freshness-and-moisture-control-vci-desiccant-reinvention",
    "mini-stretch-film-and-wrapping-reinventions",
    "cushioning-and-shipping-protection-bubble-void-fill-foam-reinvention",
    "reusable-silicone-solutions",
    "fridge-and-pantry-organization",
  ].includes(category.slug),
);

export default function Home() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Store",
      name: "Toreso",
      url: "https://toreso.com",
      description:
        "Toreso sells recyclable everyday packaging products for sealing, wrapping, freshness, storage, cushioning, shipping, labels, travel, and returns.",
      slogan: "Total Recyclable Solutions",
      brand: { "@type": "Brand", name: "Toreso" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Toreso everyday packaging products",
        itemListElement: launchAisles.map((category) => ({
          "@type": "OfferCatalog",
          name: category.aisle,
          url: `https://toreso.com/packaging-categories/${category.slug}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Featured Toreso packaging products",
      itemListElement: heroProducts.map((product, index) => {
        const profile = getCommerceProfile(product);
        const productUrl = `https://toreso.com/products/${product.slug}`;

        return {
          "@type": "ListItem",
          position: index + 1,
          url: productUrl,
          item: {
            "@type": "Product",
            name: product.name,
            sku: profile.sku,
            brand: { "@type": "Brand", name: "Toreso" },
            category: product.aisle,
            description: product.b2cInnovation,
            url: productUrl,
            offers: {
              "@type": "Offer",
              price: profile.price,
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              itemCondition: "https://schema.org/NewCondition",
              url: productUrl,
              seller: {
                "@type": "Organization",
                name: "Toreso",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: profile.rating,
              reviewCount: profile.reviews,
            },
          },
        };
      }),
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#111111]">
      <Navbar />
      <main>
        <section className="pack-hero relative min-h-screen overflow-hidden px-3 pb-6 pt-24 md:px-5">
          <div className="absolute inset-x-0 top-28 z-0 overflow-hidden opacity-[0.07]">
            <div className="animate-marquee marquee-phrase whitespace-nowrap font-sans text-[18vw] font-medium uppercase leading-none text-[#111111]">
              PACKAGING THAT MOVES WITH DAILY LIFE  /  PACKAGING THAT MOVES WITH DAILY LIFE  /
            </div>
          </div>

          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-[1860px] flex-col overflow-hidden rounded-[2rem] border border-white/55 bg-[#d8d5ec] shadow-[0_24px_90px_rgba(17,17,17,0.14)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(255,255,255,0.78),transparent_24%),radial-gradient(circle_at_20%_18%,rgba(113,159,219,0.22),transparent_22%),linear-gradient(120deg,#d7d3eb_0%,#efe9df_52%,#c7d8df_100%)]" />
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.36)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.26)_1px,transparent_1px)] [background-size:96px_96px]" />
            <div className="pack-orbit absolute right-[7%] top-[9%] h-[42rem] w-[42rem] rounded-full border border-white/55" />
            <div className="pack-orbit pack-orbit-slow absolute bottom-[-22rem] left-[10%] h-[38rem] w-[38rem] rounded-full border border-[#111111]/12" />

            <div className="relative z-10 grid flex-1 gap-10 px-6 pb-8 pt-10 md:px-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-end">
              <div className="pb-4">
                <p className="w-fit rounded-full border border-white/60 bg-white/48 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#111111] backdrop-blur-md">
                  Total recyclable solutions
                </p>
                <h1 className="mt-10 max-w-6xl font-sans text-[16vw] font-medium uppercase leading-[0.86] tracking-[-0.055em] text-white md:text-[10vw] lg:text-[7.6vw]">
                  Daily
                  <span className="block pl-[13vw] text-[#111111] md:pl-24">packaging</span>
                  <span className="block text-white">made cool</span>
                </h1>
                <div className="mt-9 max-w-3xl border-t border-white/65 pt-6">
                  <p className="text-lg leading-8 text-[#3b3941] md:text-xl">
                    Toreso is a packaging-only consumer brand: snack sealers, mini stretch rollers,
                    freshness pods, reusable storage, honeycomb wrap, anti-damp packs, labels, gift
                    systems, travel bottles, and shipping kits made for daily life.
                  </p>
                </div>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/products"
                    className="rounded-full bg-[#111111] px-7 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#f5f1eb] transition hover:bg-[#2c2c2c]"
                  >
                    Enter the shelf
                  </Link>
                  <Link
                    href="/packaging-categories"
                    className="rounded-full border border-white/70 bg-white/45 px-7 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#111111] backdrop-blur-md transition hover:bg-white/70"
                  >
                    Explore aisles
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[520px] lg:min-h-[660px]">
                <div className="absolute right-6 top-0 hidden rounded-full border border-white/65 bg-white/38 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-md md:block">
                  New everyday objects
                </div>
                <div className="pack-float absolute right-[12%] top-[2.5rem] z-10 w-[48%] overflow-hidden rounded-[2rem] border border-white/60 bg-white/28 p-3 shadow-[0_24px_80px_rgba(17,17,17,0.14)] backdrop-blur-xl md:w-[42%]">
                  <div className="h-52 overflow-hidden rounded-[1.4rem] bg-[#111111]">
                    <video
                      className="h-full w-full object-cover"
                      src="/brand-assets/videos/seamless-heat-seal-demo.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  </div>
                  <p className="mt-4 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[#5d5960]">
                    Motion sample
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-semibold leading-[0.9] tracking-[-0.04em] text-[#111111]">
                    Packaging should show the mechanism.
                  </h2>
                </div>
                <FloatingProduct product={heroProducts[0]} className="left-0 top-16 w-[48%] rotate-[-8deg]" tone="ink" />
                <FloatingProduct product={heroProducts[1]} className="right-0 top-72 w-[48%] rotate-[9deg]" tone="blue" />
                <FloatingProduct product={heroProducts[2]} className="left-[20%] top-[42%] w-[45%] rotate-[3deg]" tone="paper" />
                <FloatingProduct product={heroProducts[3]} className="bottom-4 right-[6%] w-[40%] rotate-[-6deg]" tone="clay" />
                <div className="absolute bottom-[7%] left-[2%] rounded-[2rem] bg-[#111111] p-4 text-[#f5f1eb] shadow-[0_20px_70px_rgba(17,17,17,0.24)]">
                  <div className="grid grid-cols-2 gap-3">
                    {heroProducts.slice(4, 6).map((product) => (
                      <Link key={product.slug} href={`/products/${product.slug}`} className="block w-36 rounded-[1.4rem] bg-white/8 p-4">
                        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[#b7cce6]">{product.aisle}</p>
                        <p className="mt-4 font-display text-xl font-semibold leading-[0.95]">{product.name}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 border-t border-white/55 bg-white/22 py-4 backdrop-blur-sm">
              <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
                {[...motionWords, ...motionWords].map((word, index) => (
                  <span key={`${word}-${index}`} className="text-sm font-semibold uppercase tracking-[0.22em] text-[#111111]">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1eb] py-20 md:py-28">
          <div className="mx-auto max-w-[1720px] px-6">
            <div className="overflow-hidden border-y border-[#111111]/12 py-5">
              <div className="animate-marquee marquee-phrase whitespace-nowrap font-sans text-[16vw] font-medium uppercase leading-none text-[#2d9cff] md:text-[10vw]">
                fresh food  /  dry closets  /  clean returns  /  safer gifts  /  smarter storage  /  fresh food  /  dry closets  /  clean returns  /  safer gifts  /  smarter storage  /
              </div>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7d766e]">The Toreso point of view</p>
                <h2 className="mt-5 max-w-3xl font-sans text-5xl font-medium uppercase leading-[0.96] tracking-[-0.045em] text-[#111111] md:text-7xl">
                  A packaging store should feel like a system, not a supply dump.
                </h2>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {proofStats.map((stat) => (
                  <article key={stat.label} className="border-t border-[#111111]/16 pt-5">
                    <p className="font-sans text-7xl font-medium leading-none tracking-[-0.08em] text-[#111111]">{stat.value}</p>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#7d766e]">{stat.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#111111] py-20 text-[#f5f1eb] md:py-28">
          <div className="mx-auto max-w-[1720px] px-6">
            <div className="mb-14 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8ebdf6]">Launch aisles</p>
                <h2 className="mt-5 font-sans text-5xl font-medium uppercase leading-[0.96] tracking-[-0.045em] md:text-7xl">
                  Built around daily jobs.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[#cfc8bd]">
                The catalog is broad, but the first shelf needs clarity: freshness, resealing,
                wrapping, cushioning, reusable storage, and monsoon moisture control.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {launchAisles.map((category, index) => (
                <Link
                  key={category.slug}
                  href={`/packaging-categories/${category.slug}`}
                  className="group relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:bg-white/[0.09]"
                >
                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#8ebdf6]/30 transition group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#2d9cff]/10 to-transparent" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8ebdf6]">
                    Aisle {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-12 max-w-sm font-sans text-5xl font-medium uppercase leading-[0.96] tracking-[-0.045em] text-[#f5f1eb]">
                    {category.aisle}
                  </h3>
                  <p className="mt-6 line-clamp-4 text-sm leading-7 text-[#cfc8bd]">{category.signal}</p>
                  <span className="absolute bottom-6 left-6 rounded-full bg-[#f5f1eb] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#111111]">
                    {category.count} products
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#e8ddd0] py-20 md:py-28">
          <div className="absolute inset-x-0 top-10 overflow-hidden opacity-[0.12]">
            <div className="animate-marquee-reverse marquee-phrase whitespace-nowrap font-sans text-[13vw] font-medium uppercase leading-none text-[#111111]">
              touch it  /  use it  /  refill it  /  recycle it  /  touch it  /  use it  /  refill it  /  recycle it  /
            </div>
          </div>
          <div className="relative mx-auto max-w-[1720px] px-6">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7d766e]">Featured products</p>
                <h2 className="mt-5 font-sans text-5xl font-medium uppercase leading-[0.96] tracking-[-0.045em] text-[#111111] md:text-7xl">
                  Objects with a reason.
                </h2>
                <p className="mt-6 text-lg leading-8 text-[#5a554f]">
                  These are not decorative filler SKUs. Each product has a daily problem,
                  a mechanism, a material story, and a clear ecommerce path.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {heroProducts.map((product, index) => {
                  const commerce = getCommerceProfile(product);
                  return (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      className="group rounded-[2rem] border border-[#111111]/10 bg-[#f5f1eb]/72 p-5 shadow-[0_24px_70px_rgba(17,17,17,0.08)] backdrop-blur transition hover:-translate-y-1"
                    >
                      <div className="mb-8 flex h-44 items-center justify-center rounded-[1.5rem] bg-[#111111]">
                        <ProductObject tone={["blue", "paper", "ink", "clay"][index % 4] as ProductTone} />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7d766e]">{product.aisle}</p>
                      <h3 className="mt-3 font-display text-4xl font-semibold leading-[0.9] tracking-[-0.04em] text-[#111111]">
                        {product.name}
                      </h3>
                      <p className="mt-4 line-clamp-2 text-sm leading-6 text-[#5a554f]">{product.b2cInnovation}</p>
                      <div className="mt-6 flex items-center justify-between border-t border-[#111111]/10 pt-4">
                        <span className="font-sans text-2xl font-medium tracking-[-0.05em]">{formatPrice(commerce.price)}</span>
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2d72b8]">Open</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1eb] py-20 md:py-28">
          <div className="mx-auto grid max-w-[1720px] gap-8 px-6 md:grid-cols-3">
            {circularSteps.map((step) => (
              <LoopStatement key={step.number} {...step} />
            ))}
          </div>
        </section>

        <section className="bg-[#111111] px-3 py-3 text-[#f5f1eb]">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#171412] px-6 py-16 text-center md:py-24">
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-32"
              src="/brand-assets/videos/recyclable-packaging-table-hd.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(240,194,123,0.34),transparent_24%),linear-gradient(180deg,rgba(17,17,17,0.5),#171412)]" />
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f0c27b]">Toreso shelf one</p>
              <h2 className="mx-auto mt-5 max-w-5xl font-sans text-5xl font-medium uppercase leading-[0.96] tracking-[-0.045em] md:text-8xl">
                Packaging people actually want to use.
              </h2>
              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/products"
                  className="rounded-full bg-[#f5f1eb] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#111111]"
                >
                  Shop all products
                </Link>
                <Link
                  href="/sustainability"
                  className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#f5f1eb] backdrop-blur"
                >
                  See sustainability
                </Link>
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

type ProductTone = "ink" | "blue" | "paper" | "clay";

function FloatingProduct({
  product,
  className,
  tone,
}: {
  product?: NonNullable<ReturnType<typeof getInnovationProduct>>;
  className: string;
  tone: ProductTone;
}) {
  if (!product) return null;

  return (
    <Link
      href={`/products/${product.slug}`}
      className={`pack-float absolute block rounded-[2rem] border border-white/65 bg-white/38 p-4 text-[#111111] shadow-[0_24px_80px_rgba(17,17,17,0.16)] backdrop-blur-xl ${className}`}
    >
      <div className="grid min-h-40 place-items-center rounded-[1.4rem] bg-[#111111]">
        <ProductObject tone={tone} />
      </div>
      <p className="mt-4 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[#5d5960]">{product.format}</p>
      <h2 className="mt-2 font-display text-3xl font-semibold leading-[0.92] tracking-[-0.04em]">{product.name}</h2>
    </Link>
  );
}

function ProductObject({ tone }: { tone: ProductTone }) {
  const toneClass = {
    ink: "from-[#f5f1eb] to-[#9ea8b8]",
    blue: "from-[#2d9cff] to-[#b7d6fb]",
    paper: "from-[#f0d4a9] to-[#f8f2df]",
    clay: "from-[#c77b5c] to-[#e7b693]",
  }[tone];

  return (
    <div className="relative h-32 w-44">
      <span className={`absolute left-1 top-6 h-24 w-24 rounded-full bg-gradient-to-br ${toneClass}`} />
      <span className="absolute left-10 top-14 h-10 w-10 rounded-full border-[10px] border-[#111111] bg-[#f5f1eb]/70" />
      <span className={`absolute right-0 top-10 h-14 w-28 rounded-[1rem] bg-gradient-to-br ${toneClass} shadow-[inset_0_-10px_0_rgba(17,17,17,0.16)]`} />
      <span className="absolute bottom-5 right-8 h-12 w-4 rounded-full bg-[#f5f1eb]/75" />
    </div>
  );
}
