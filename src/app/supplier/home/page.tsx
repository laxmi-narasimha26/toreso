"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Package, ArrowRight, CheckCircle, Building2,
  TrendingUp, Shield, Users, BarChart3, Clock,
  Truck, FileText, Calculator, Award, Star,
  Phone, Mail, MapPin, Linkedin, Twitter,
  Globe, Zap, Target, HandCoins
} from 'lucide-react';

export default function SupplierHomePage() {
  const keyBenefits = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Expand Market Reach",
      description: "Access buyers from across India and internationally, growing your customer base beyond traditional networks",
      stats: "500+ New Buyers Monthly"
    },
    {
      icon: <HandCoins className="w-6 h-6" />,
      title: "Instant Cash Flow",
      description: "Get immediate payment through invoice discounting, improving liquidity and operational efficiency",
      stats: "₹2Cr+ Disbursed Daily"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Steady Order Flow",
      description: "Consistent demand from verified buyers with automated lead generation and order management",
      stats: "95% Order Fulfillment"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Recognition",
      description: "Build credibility through our verification process and performance tracking system",
      stats: "4.8/5 Avg Rating"
    }
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Verified Buyer Network",
      description: "Connect only with legitimate, credit-worthy buyers who have been pre-screened by our team"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Lead Alerts",
      description: "Get instant notifications when buyers post requirements matching your capabilities"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Track your ratings, order history, and performance metrics to improve your business"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Digital Documentation",
      description: "Maintain all certificates, quality reports, and compliance documents digitally"
    }
  ];

  const testimonials = [
    {
      name: "Ravi Kumar",
      company: "Supreme Packaging Pvt. Ltd.",
      role: "Managing Director",
      content: "Toreso has opened doors to new markets we never had access to. Our revenue has grown by 40% in just 6 months.",
      rating: 5
    },
    {
      name: "Anita Desai",
      company: "EcoPack Innovations",
      role: "Operations Head",
      content: "The instant payment feature through invoice discounting has revolutionized our cash flow management.",
      rating: 5
    },
    {
      name: "Suresh Patel",
      company: "Flexi-Tubes America",
      role: "Business Development Manager",
      content: "The platform's verification process has helped us build trust with enterprise clients. Highly recommended for serious suppliers.",
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
              <Link href="/supplier/dashboard" className="text-gray-600 hover:text-gray-900 font-medium">
                Dashboard
              </Link>
              <Link href="/suppliers/register" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Award className="w-4 h-4 mr-2" />
              Join 5,000+ Successful Suppliers
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Grow Your Business with
              <span className="text-green-600"> Verified Buyers</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Join India's largest B2B packaging marketplace and connect with verified buyers, access instant payments, and scale your manufacturing business.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/suppliers/register" className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 font-semibold flex items-center justify-center group">
                Start Free Registration
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/request-demo" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 font-semibold flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
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
                <div className="text-3xl font-bold text-green-600 mb-1">5,000+</div>
                <div className="text-sm text-gray-600">Verified Suppliers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">10,000+</div>
                <div className="text-sm text-gray-600">Active Buyers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">₹500Cr+</div>
                <div className="text-sm text-gray-600">Annual GMV</div>
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
              Why Suppliers Choose Toreso
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of suppliers who have transformed their business with our platform
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
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {benefit.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
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
              Powerful Tools for Supplier Success
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to find buyers, manage orders, and grow your manufacturing business
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
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6 mx-auto">
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
              Success Stories from Our Suppliers
            </h2>
            <p className="text-xl text-gray-600">
              Real suppliers, real growth, real results
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
                  <div className="text-sm text-green-600 font-medium">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Join 5,000+ suppliers already connecting with verified buyers and scaling their operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/suppliers/register" className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-50 font-semibold">
                Start Free Registration
              </Link>
              <Link href="/contact" className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-600 font-semibold">
                Contact Partnership Team
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
                <Package className="w-8 h-8 text-green-400" />
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
              <h3 className="text-lg font-semibold mb-6">For Suppliers</h3>
              <ul className="space-y-3">
                <li><Link href="/suppliers/register" className="text-gray-400 hover:text-white">Supplier Registration</Link></li>
                <li><Link href="/suppliers/dashboard" className="text-gray-400 hover:text-white">Supplier Dashboard</Link></li>
                <li><Link href="/suppliers/verification" className="text-gray-400 hover:text-white">Verification Process</Link></li>
                <li><Link href="/suppliers/success-stories" className="text-gray-400 hover:text-white">Success Stories</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                <li><Link href="/help" className="text-gray-400 hover:text-white">Help Center</Link></li>
                <li><Link href="/resources" className="text-gray-400 hover:text-white">Supplier Resources</Link></li>
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
