"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Package, ArrowRight, CheckCircle, Building2,
  TrendingUp, Shield, Users, BarChart3, Clock,
  Truck, FileText, Calculator, Award, Star,
  Phone, Mail, MapPin, Linkedin, Twitter,
  Search, Filter, Bell, Download, Settings
} from 'lucide-react';

export default function BuyerHomePage() {
  const keyBenefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Reduce Procurement Costs",
      description: "Average 15-25% cost savings through bulk discounts, competitive bidding, and optimized supplier selection",
      stats: "₹50L+ Saved Annually"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verified Supplier Network",
      description: "Access 5,000+ pre-vetted suppliers with quality audits, compliance tracking, and performance monitoring",
      stats: "99.2% Quality Score"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Streamlined Operations",
      description: "JIT delivery, real-time tracking, automated workflows, and integrated procurement management",
      stats: "40% Faster Processing"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data-Driven Insights",
      description: "Advanced analytics, spend analysis, supplier performance reports, and market intelligence",
      stats: "360° Visibility"
    }
  ];

  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Smart Supplier Discovery",
      description: "AI-powered matching algorithm finds the perfect suppliers for your specific requirements"
    },
    {
      icon: <Filter className="w-8 h-8" />,
      title: "Advanced Filtering",
      description: "Filter suppliers by location, certifications, capacity, quality ratings, and more"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Real-time Notifications",
      description: "Get instant alerts on new suppliers, price changes, and availability updates"
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Bulk Ordering Tools",
      description: "Consolidate orders from multiple suppliers with automated volume discount calculations"
    }
  ];

  const testimonials = [
    {
      name: "Amit Sharma",
      company: "Reliance Industries Ltd.",
      role: "Senior Procurement Manager",
      content: "Toreso has revolutionized our packaging procurement. We've reduced costs by 22% and improved supplier relationships significantly.",
      rating: 5
    },
    {
      name: "Sneha Patel",
      company: "HDFC Manufacturing",
      role: "Supply Chain Director",
      content: "The platform's quality assurance process and real-time tracking give us complete confidence in our supplier partnerships.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      company: "TechPack Solutions",
      role: "Operations Manager",
      content: "Outstanding platform! The automated workflows and supplier verification have saved us countless hours and improved our bottom line.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Toreso</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-gray-900 font-medium">Benefits</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 font-medium">Success Stories</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/buyer/dashboard" className="text-gray-600 hover:text-gray-900 font-medium">
                Dashboard
              </Link>
              <Link href="/login" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Award className="w-4 h-4 mr-2" />
              India's #1 B2B Packaging Procurement Platform
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform Your Packaging
              <span className="text-blue-600"> Procurement Process</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Join 10,000+ procurement professionals who have streamlined their packaging procurement, reduced costs by 15-25%, and built stronger supplier relationships.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/buyers/register" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-semibold flex items-center justify-center group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/request-demo" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 font-semibold flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Request Demo
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">10,000+</div>
                <div className="text-sm text-gray-600">Active Buyers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">₹500Cr+</div>
                <div className="text-sm text-gray-600">GMV Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">99.2%</div>
                <div className="text-sm text-gray-600">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Procurement Teams Choose Toreso
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proven results across industries with measurable cost savings and operational improvements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {benefit.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {benefit.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Procurement Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to streamline procurement, optimize costs, and build stronger supplier relationships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories from Procurement Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real procurement professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Procurement?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join thousands of procurement professionals already saving time and money with Toreso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/buyers/register" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 font-semibold">
                Start Free Trial
              </Link>
              <Link href="/contact" className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 font-semibold">
                Contact Sales Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Package className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold">Toreso</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                India's leading B2B packaging materials marketplace, connecting verified suppliers with procurement professionals.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Platform</h3>
              <ul className="space-y-3">
                <li><Link href="/buyers/dashboard" className="text-gray-400 hover:text-white">Buyer Dashboard</Link></li>
                <li><Link href="/buyers/rfq" className="text-gray-400 hover:text-white">Request for Quote</Link></li>
                <li><Link href="/buyers/orders" className="text-gray-400 hover:text-white">Order Management</Link></li>
                <li><Link href="/buyers/analytics" className="text-gray-400 hover:text-white">Analytics & Reports</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                <li><Link href="/help" className="text-gray-400 hover:text-white">Help Center</Link></li>
                <li><Link href="/resources" className="text-gray-400 hover:text-white">Resources</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                <li><Link href="/status" className="text-gray-400 hover:text-white">System Status</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-500">© 2024 Toreso Technologies Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
