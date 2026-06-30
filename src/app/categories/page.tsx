import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Filter, Package, Recycle, Search } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { collections, productCategories } from "@/data/consumerCatalog";
import { innovationProducts, innovationTracks } from "@/data/innovationCatalog";

export const metadata: Metadata = {
  title: "Shop Daily Packaging Products",
  description:
    "Browse Toreso starter packaging products and explore packaging tools for sealing, wrapping, gifting, storage, returns, shipping, and protection.",
  alternates: {
    canonical: "/categories",
  },
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-[#fbfaf4]">
      <Navbar />
      <main className="pt-28">
        <section className="border-b border-stone-200 bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase text-emerald-800">Shop Toreso</p>
              <h1 className="mt-3 text-4xl font-display font-bold text-stone-950 sm:text-5xl">
                Starter shop for daily packaging products.
              </h1>
              <p className="mt-5 text-lg leading-8 text-stone-600">
                A first launch catalog for consumer packaging jobs: seal opened packets,
                protect fragile items, organize storage, gift better, ship returns, and
                pack small-seller orders without industrial bulk.
              </p>
            </div>
            <div className="mt-8 flex max-w-2xl items-center gap-3 rounded-lg border border-stone-300 bg-[#fbfaf4] px-4 py-3">
              <Search className="h-5 w-5 text-stone-500" />
              <span className="text-sm text-stone-500">
                Search-ready catalog: use browser find for product names, materials, or routines.
              </span>
            </div>
            <Link
              href="/innovation-catalog"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Explore the 200+ concept backlog
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="mb-8 flex items-center gap-3">
              <Filter className="h-5 w-5 text-emerald-700" />
              <h2 className="text-2xl font-display font-bold">Shop by packaging job</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
              {productCategories.map((category) => (
                <Link
                  key={category.slug}
                  href="/innovation-catalog"
                  className="rounded-lg border border-stone-200 bg-white p-4 text-sm font-semibold transition hover:border-emerald-300"
                >
                  <category.icon className="mb-3 h-5 w-5 text-emerald-700" />
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
              <aside className="h-fit rounded-lg border border-stone-200 bg-white p-5">
                <h2 className="text-sm font-bold uppercase text-stone-500">Collections</h2>
                <div className="mt-4 grid gap-2">
                  <Link
                    href="/innovation-catalog"
                    className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100"
                  >
                    200+ Innovation Catalog
                  </Link>
                  {collections.map((collection) => (
                    <Link
                      key={collection.slug}
                      href={`/collections/${collection.slug}`}
                      className="rounded-lg px-3 py-2 text-sm font-semibold text-stone-700 transition hover:bg-emerald-50 hover:text-emerald-800"
                    >
                      {collection.name}
                    </Link>
                  ))}
                </div>
              </aside>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {innovationProducts.slice(0, 72).map((product, index) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    id={product.id}
                    className="rounded-lg border border-stone-200 bg-white p-4 shadow-soft"
                  >
                    <div className="mb-4 flex aspect-[4/3] items-end justify-between rounded-lg bg-gradient-to-br from-emerald-800 to-stone-950 p-4 text-white">
                      <Package className="h-9 w-9" />
                      <span className="rounded-lg bg-white/15 px-2 py-1 text-xs font-bold">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-bold text-stone-950">{product.name}</h3>
                      <span className="shrink-0 text-sm font-bold text-emerald-800">
                        Concept
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-stone-600">{product.b2cInnovation}</p>
                    <dl className="mt-4 grid gap-2 text-sm">
                      <div>
                        <dt className="font-bold text-stone-500">Packaging origin</dt>
                        <dd className="text-stone-800">{product.b2bOrigin}</dd>
                      </div>
                      <div>
                        <dt className="font-bold text-stone-500">User problem</dt>
                        <dd className="text-stone-800">{product.userProblem}</dd>
                      </div>
                    </dl>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[product.track, product.format].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-10 rounded-lg border border-stone-200 bg-white p-6 text-center">
              <p className="text-sm leading-6 text-stone-600">
                Showing 72 starter concepts here. The full catalog contains {innovationProducts.length} ideas
                across {innovationTracks.length} packaging tracks.
              </p>
              <Link
                href="/innovation-catalog"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                Open full catalog
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-emerald-950 py-16 text-white">
          <div className="container mx-auto flex flex-col justify-between gap-6 px-6 md:flex-row md:items-center">
            <div>
              <Recycle className="mb-4 h-7 w-7 text-emerald-300" />
              <h2 className="text-3xl font-display font-bold">Need a product line built around your routine?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-emerald-50/80">
                Toreso can expand this catalog into focused drops for moving, returns,
                packet sealing, monsoon storage, fragile protection, gifting, and small sellers.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-stone-950"
            >
              Contact Toreso
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
