import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Leaf, PackageCheck, Recycle, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Toreso",
  description:
    "Toreso is a B2C packaging product brand that converts industrial packaging ideas into useful daily packaging tools.",
};

const values = [
  {
    title: "Useful before aesthetic",
    text: "Every product must solve a real packaging job: wrap, seal, ship, store, protect, label, return, compress, or carry.",
    icon: PackageCheck,
  },
  {
    title: "Circular by default",
    text: "We prefer products that can be reused, refilled, recycled, composted responsibly, or clearly separated.",
    icon: Recycle,
  },
  {
    title: "B2B made usable",
    text: "The catalog starts with packaging formats that already work in industry, then redesigns them for household and small-seller use.",
    icon: Sparkles,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fbfaf4]">
      <Navbar />
      <main className="pt-28">
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <p className="text-sm font-bold uppercase text-emerald-800">About Toreso</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-display font-bold text-stone-950 sm:text-5xl">
              Toreso is becoming the consumer brand for innovative daily packaging products.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
              The new Toreso is not a B2B procurement marketplace and not a generic
              lifestyle store. It is a B2C packaging brand: stretch film becomes a
              pocket roller, carton tape becomes a safe home sealing dock, desiccants
              become monsoon protection kits, and industrial mailers become better
              return-ready tools for consumers.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto grid gap-4 px-6 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-lg border border-stone-200 bg-white p-6">
                <value.icon className="mb-5 h-6 w-6 text-emerald-700" />
                <h2 className="text-xl font-display font-bold">{value.title}</h2>
                <p className="mt-3 text-sm leading-6 text-stone-600">{value.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-emerald-950 py-16 text-white">
          <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Leaf className="mb-5 h-8 w-8 text-emerald-300" />
              <h2 className="text-3xl font-display font-bold">The brand image</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "A daily packaging needs provider, not an industrial packaging vendor.",
                "A packaging-only product brand with variety-store breadth.",
                "A place for niche, clever, less-common packaging tools.",
                "A practical innovation brand that avoids vague green claims.",
              ].map((item) => (
                <p key={item} className="rounded-lg border border-white/10 bg-white/5 p-5 text-sm leading-6">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="mx-auto max-w-3xl text-3xl font-display font-bold">
              From industrial packaging supply to packaging products people actually use.
            </h2>
            <Link
              href="/innovation-catalog"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-stone-950 px-5 py-3 text-sm font-semibold text-white"
            >
              Explore 200+ concepts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
