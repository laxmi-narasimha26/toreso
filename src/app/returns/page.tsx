import type { Metadata } from "next";
import { CheckCircle2, PackageSearch, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ReturnsClient from "@/components/storefront/ReturnsClient";

export const metadata: Metadata = {
  title: "Returns and Replacements",
  description: "Start Toreso returns, replacements, damaged shipment claims, and return-ready packaging pickups.",
  alternates: {
    canonical: "/returns",
  },
};

const returnSteps = [
  {
    title: "Select item",
    text: "Choose the order and product that needs replacement, refund, or missing-part support.",
    icon: PackageSearch,
  },
  {
    title: "Use return-ready sleeve",
    text: "Reuse the original Toreso mailer or sleeve where possible and keep the QR label visible.",
    icon: RotateCcw,
  },
  {
    title: "Pickup or drop",
    text: "Schedule pickup or choose a nearby drop point depending on the packaging format.",
    icon: Truck,
  },
  {
    title: "Resolution",
    text: "Replacement, refund, or repair kit is triggered after condition scan.",
    icon: ShieldCheck,
  },
];

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-[#fbfaf4] text-stone-950">
      <Navbar />
      <main className="pt-28">
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <p className="text-sm font-bold uppercase text-emerald-800">Returns and replacements</p>
            <h1 className="mt-3 max-w-4xl text-5xl font-display font-bold">Return-ready by design.</h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-600">
              Toreso packaging should make post-purchase support feel premium: damaged shipment
              replacement, missing accessory support, reusable sleeve pickup, and repair-kit routing.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="mb-10 grid gap-4 md:grid-cols-4">
              {returnSteps.map((step) => (
                <article key={step.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
                  <step.icon className="mb-5 h-7 w-7 text-emerald-700" />
                  <h2 className="text-xl font-display font-bold">{step.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{step.text}</p>
                </article>
              ))}
            </div>
            <ReturnsClient />
          </div>
        </section>

        <section className="bg-stone-950 py-16 text-white">
          <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <CheckCircle2 className="mb-5 h-8 w-8 text-emerald-300" />
              <h2 className="text-3xl font-display font-bold">Support reasons to cover.</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                "Damaged in transit",
                "Missing accessory or refill",
                "Wrong product delivered",
                "Mechanism failed during warranty",
                "Returnable sleeve pickup",
                "Repair patch or replacement part",
              ].map((reason) => (
                <div key={reason} className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm font-semibold">
                  {reason}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
