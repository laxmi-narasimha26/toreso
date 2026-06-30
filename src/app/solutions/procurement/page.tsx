"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Package, ArrowRight, Zap, BarChart3, Clock, 
  CheckCircle, Target, Users, DollarSign, Shield,
  TrendingUp, Search, FileText, Bot
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SmartProcurement() {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Powered Supplier Matching",
      description: "Our advanced AI algorithm matches your requirements with the most suitable suppliers based on quality, pricing, capacity, and location.",
      benefits: ["99% accurate matching", "Reduced search time by 80%", "Access to hidden suppliers"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Automated RFQ Management",
      description: "Create, send, and manage RFQs effortlessly with our automated system that tracks responses and compares quotes in real-time.",
      benefits: ["Instant RFQ distribution", "Automated follow-ups", "Smart comparison tools"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Make data-driven procurement decisions with predictive insights on pricing trends, demand forecasting, and supplier performance.",
      benefits: ["Price trend predictions", "Demand forecasting", "Risk assessment"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Market Intelligence",
      description: "Stay ahead with real-time market data, pricing benchmarks, and industry insights to optimize your procurement strategy.",
      benefits: ["Live pricing data", "Market trend analysis", "Competitive intelligence"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Define Requirements",
      description: "Specify your packaging needs with detailed requirements including specifications, quantity, quality standards, and delivery timelines."
    },
    {
      step: "02", 
      title: "AI Matching",
      description: "Our AI engine instantly matches your requirements with the most suitable suppliers from our verified network of 5,000+ suppliers."
    },
    {
      step: "03",
      title: "Compare & Negotiate",
      description: "Receive multiple quotes, compare them side-by-side, and negotiate directly with suppliers through our platform."
    },
    {
      step: "04",
      title: "Automated Management",
      description: "Once selected, our system automates order management, tracking, quality checks, and payment processing."
    }
  ];

  const stats = [
    { value: "35%", label: "Average Cost Reduction", icon: <DollarSign /> },
    { value: "80%", label: "Time Savings", icon: <Clock /> },
    { value: "99%", label: "Match Accuracy", icon: <Target /> },
    { value: "24/7", label: "Platform Availability", icon: <Shield /> }
  ];

  const benefits = [
    "Reduce procurement costs by up to 35%",
    "Save 80% time on supplier discovery and evaluation",
    "Access to pre-verified, quality-assured suppliers",
    "Real-time pricing and availability information",
    "Automated compliance and quality tracking",
    "Predictive analytics for better decision making",
    "24/7 platform availability with mobile access",
    "Dedicated procurement specialist support"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Package className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Toreso</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/solutions" className="text-gray-600 hover:text-gray-900">Solutions</Link>
              <Link href="/platform" className="text-gray-600 hover:text-gray-900">Platform</Link>
              <Link href="/resources" className="text-gray-600 hover:text-gray-900">Resources</Link>
              <Link href="/company" className="text-gray-600 hover:text-gray-900">Company</Link>
              <div className="flex items-center space-x-3">
                <Link href="/login">
                  <Button variant="outline">Sign In</Button>
                </Link>
                <Link href="/register">
                  <Button>Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 bg-blue-100 text-blue-800 border-blue-200">
              <Zap className="w-4 h-4 mr-2" />
              Smart Procurement Solution
            </Badge>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              AI-Powered <span className="text-blue-600">Procurement</span> Revolution
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Transform your packaging procurement with intelligent automation, predictive analytics, and AI-driven supplier matching. Reduce costs by 35% while saving 80% of your time.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/buyers/register">
                <Button size="lg" className="px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Schedule Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Intelligent Procurement Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our smart procurement platform combines AI, automation, and analytics to revolutionize how you source packaging materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                    <CardContent className="p-0">
                      <p className="text-gray-600 mb-6">{feature.description}</p>
                      <div className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Smart Procurement Works
            </h2>
            <p className="text-xl text-gray-600">
              Four simple steps to transform your procurement process
            </p>
          </div>

          <div className="relative">
            {/* Process Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-blue-200"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((process, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-3">{process.title}</h3>
                    <p className="text-gray-600 text-center">{process.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Transform Your Procurement Today
              </h2>
              <p className="text-xl text-gray-600">
                Join thousands of companies who have revolutionized their procurement process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-green-800">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/buyers/register">
                <Button size="lg" className="px-12 py-4 text-lg">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <p className="text-gray-600 mt-4">
                No setup fees • 30-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Package className="w-8 h-8" />
                <span className="text-2xl font-bold">Toreso</span>
              </div>
              <p className="text-gray-400">
                Transforming B2B procurement with intelligent automation and AI-powered solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/solutions/procurement" className="hover:text-white">Smart Procurement</Link></li>
                <li><Link href="/solutions/quality" className="hover:text-white">Quality Assurance</Link></li>
                <li><Link href="/solutions/logistics" className="hover:text-white">JIT Delivery</Link></li>
                <li><Link href="/solutions/finance" className="hover:text-white">Invoice Discounting</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/platform/features" className="hover:text-white">Features</Link></li>
                <li><Link href="/platform/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/platform/api" className="hover:text-white">API</Link></li>
                <li><Link href="/platform/integrations" className="hover:text-white">Integrations</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/company/about" className="hover:text-white">About</Link></li>
                <li><Link href="/company/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/company/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="/resources/help" className="hover:text-white">Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Toreso Technologies Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

