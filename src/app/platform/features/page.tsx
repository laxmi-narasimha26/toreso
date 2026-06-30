"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Package, ArrowRight, Zap, Bot, Shield, 
  BarChart3, Clock, Users, DollarSign, CheckCircle,
  Search, FileText, Truck, CreditCard, Bell,
  Smartphone, Globe, Lock, Award, Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function PlatformFeatures() {
  const coreFeatures = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Powered Matching",
      description: "Advanced machine learning algorithms match buyers with the most suitable suppliers based on quality, price, capacity, and location.",
      benefits: ["99% accurate supplier matching", "Reduced search time by 80%", "Access to hidden suppliers"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Smart Search & Discovery",
      description: "Intelligent search with filters, recommendations, and predictive suggestions to find exactly what you need.",
      benefits: ["Advanced filtering options", "Personalized recommendations", "Predictive search suggestions"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Automated RFQ System",
      description: "Create, distribute, and manage RFQs with automated follow-ups and intelligent quote comparison.",
      benefits: ["Instant RFQ distribution", "Automated follow-ups", "Smart comparison tools"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Multi-layer verification process ensures all suppliers meet the highest quality and compliance standards.",
      benefits: ["Comprehensive supplier verification", "Regular quality audits", "Compliance tracking"]
    }
  ];

  const advancedFeatures = [
    {
      category: "Analytics & Intelligence",
      features: [
        {
          icon: <BarChart3 className="w-6 h-6" />,
          name: "Predictive Analytics",
          description: "Forecast demand, pricing trends, and supplier performance"
        },
        {
          icon: <Target className="w-6 h-6" />,
          name: "Performance Dashboards",
          description: "Real-time insights into procurement metrics and KPIs"
        },
        {
          icon: <Award className="w-6 h-6" />,
          name: "Supplier Scoring",
          description: "AI-driven supplier performance scoring and ranking"
        }
      ]
    },
    {
      category: "Operations & Logistics",
      features: [
        {
          icon: <Truck className="w-6 h-6" />,
          name: "Real-time Tracking",
          description: "End-to-end visibility of orders from placement to delivery"
        },
        {
          icon: <Clock className="w-6 h-6" />,
          name: "JIT Delivery",
          description: "Just-in-time delivery optimization with warehouse management"
        },
        {
          icon: <Bell className="w-6 h-6" />,
          name: "Smart Notifications",
          description: "Intelligent alerts for orders, deliveries, and opportunities"
        }
      ]
    },
    {
      category: "Financial Services",
      features: [
        {
          icon: <CreditCard className="w-6 h-6" />,
          name: "Invoice Discounting",
          description: "Instant liquidity solutions with competitive rates"
        },
        {
          icon: <DollarSign className="w-6 h-6" />,
          name: "Payment Protection",
          description: "Secure payment processing with fraud protection"
        },
        {
          icon: <BarChart3 className="w-6 h-6" />,
          name: "Financial Analytics",
          description: "Cash flow analysis and financial performance tracking"
        }
      ]
    },
    {
      category: "Platform & Integration",
      features: [
        {
          icon: <Smartphone className="w-6 h-6" />,
          name: "Mobile Apps",
          description: "Native iOS and Android apps for on-the-go management"
        },
        {
          icon: <Globe className="w-6 h-6" />,
          name: "API Integration",
          description: "RESTful APIs for seamless ERP and system integration"
        },
        {
          icon: <Lock className="w-6 h-6" />,
          name: "Enterprise Security",
          description: "Bank-grade security with SOC 2 compliance"
        }
      ]
    }
  ];

  const stats = [
    { value: "99.9%", label: "Platform Uptime", icon: <Zap /> },
    { value: "2 sec", label: "Average Response Time", icon: <Clock /> },
    { value: "256-bit", label: "SSL Encryption", icon: <Lock /> },
    { value: "24/7", label: "System Monitoring", icon: <Shield /> }
  ];

  const integrations = [
    "SAP ERP", "Oracle NetSuite", "QuickBooks", "Zoho Books",
    "Tally ERP", "Microsoft Dynamics", "Salesforce", "HubSpot",
    "Slack", "Microsoft Teams", "Google Workspace", "Zapier"
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
              <Link href="/platform" className="text-gray-600 hover:text-gray-900 font-semibold">Platform</Link>
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
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 bg-purple-100 text-purple-800 border-purple-200">
              <Zap className="w-4 h-4 mr-2" />
              Platform Features
            </Badge>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Powerful <span className="text-purple-600">Platform</span> Built for Scale
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Enterprise-grade B2B marketplace platform with AI-powered features, real-time analytics, and seamless integrations designed to transform your packaging procurement.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/buyers/register">
                <Button size="lg" className="px-8 py-4 text-lg bg-purple-600 hover:bg-purple-700">
                  Try Platform Free
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

      {/* Platform Stats */}
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading features that power the most efficient B2B procurement experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-2xl">{feature.title}</CardTitle>
                    </div>
                    <CardContent className="p-0">
                      <p className="text-gray-600 mb-6 text-lg">{feature.description}</p>
                      <div className="space-y-3">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
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

      {/* Advanced Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive feature set covering every aspect of B2B procurement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advancedFeatures.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-600 mb-6">{category.category}</CardTitle>
                    <CardContent className="p-0">
                      <div className="space-y-6">
                        {category.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <div className="p-2 bg-purple-100 text-purple-600 rounded-lg flex-shrink-0">
                              {feature.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">{feature.name}</h4>
                              <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
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

      {/* Integrations */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Connect with your existing tools and systems effortlessly
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md border text-center hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <p className="text-sm font-medium text-gray-700">{integration}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/platform/api">
                <Button size="lg" variant="outline" className="px-8 py-4">
                  View API Documentation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience the Platform?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of businesses who have transformed their procurement with our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/buyers/register">
                <Button size="lg" className="px-12 py-4 text-lg bg-white text-purple-600 hover:bg-gray-100">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-12 py-4 text-lg border-white text-white hover:bg-white hover:text-purple-600">
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-75">
              No credit card required • 30-day free trial • Setup in minutes
            </p>
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
                Enterprise-grade B2B marketplace platform built for the future of procurement.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/platform/features" className="hover:text-white">Features</Link></li>
                <li><Link href="/platform/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/platform/api" className="hover:text-white">API Docs</Link></li>
                <li><Link href="/platform/integrations" className="hover:text-white">Integrations</Link></li>
              </ul>
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
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/resources/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/company/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/legal/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/legal/privacy" className="hover:text-white">Privacy Policy</Link></li>
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

