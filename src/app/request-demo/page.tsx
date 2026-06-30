"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const benefits = [
  "See the platform in action with a guided walkthrough",
  "Get answers to all your procurement questions",
  "Learn how to save 15-25% on packaging costs",
  "Custom demo tailored to your industry needs",
];

export default function RequestDemoPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24 lg:pt-44 bg-gradient-to-br from-toreso-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Info */}
            <div>
              <motion.p
                className="text-sm font-semibold text-toreso-teal-600 uppercase tracking-wider mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Request a Demo
              </motion.p>
              <motion.h1
                className="text-4xl font-display font-bold text-toreso-slate-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                See Toreso in action
              </motion.h1>
              <motion.p
                className="text-lg text-toreso-slate-500 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Book a personalized demo with our team. We&apos;ll show you exactly
                how Toreso can streamline your packaging procurement.
              </motion.p>

              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-toreso-slate-700">
                    <CheckCircle className="w-5 h-5 text-toreso-teal-500 shrink-0 mt-0.5" />
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <form
                className="p-8 rounded-2xl bg-white border border-toreso-slate-200 shadow-elevated space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-toreso-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-lg border border-toreso-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-toreso-teal-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-toreso-slate-700 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-toreso-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-toreso-teal-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-toreso-slate-700 mb-1.5">
                      Company Name *
                    </label>
                    <input
                      id="company"
                      type="text"
                      required
                      placeholder="Your company"
                      className="w-full px-4 py-2.5 rounded-lg border border-toreso-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-toreso-teal-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-toreso-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-lg border border-toreso-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-toreso-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-toreso-slate-700 mb-1.5">
                    I am a...
                  </label>
                  <select
                    id="role"
                    className="w-full px-4 py-2.5 rounded-lg border border-toreso-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-toreso-teal-500 text-toreso-slate-700"
                  >
                    <option value="">Select your role</option>
                    <option value="buyer">Buyer / Procurement Manager</option>
                    <option value="supplier">Supplier / Manufacturer</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-toreso-slate-700 mb-1.5">
                    What are you looking for?
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us about your packaging needs..."
                    className="w-full px-4 py-2.5 rounded-lg border border-toreso-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-toreso-teal-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-toreso-teal-600 text-white font-semibold rounded-xl hover:bg-toreso-teal-700 transition-colors shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  Book My Demo
                </button>

                <p className="text-xs text-toreso-slate-400 text-center">
                  We&apos;ll reach out within 1 business day to schedule your demo.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
