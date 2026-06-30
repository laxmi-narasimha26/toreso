"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Package, ArrowRight, Shield, CheckCircle, Award, 
  FileText, Users, BarChart3, Clock, Target,
  Search, AlertTriangle, Zap, TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function QualityAssurance() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Multi-Level Supplier Verification",
      description: "Comprehensive verification process including document verification, factory inspections, and compliance audits.",
      benefits: ["ISO certification verification", "Factory audit reports", "Compliance documentation"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Automated Quality Tracking",
      description: "Real-time monitoring of quality metrics, delivery performance, and customer satisfaction scores.",
      benefits: ["Quality scorecards", "Performance dashboards", "Automated alerts"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Audit Team",
      description: "Certified quality auditors conduct regular inspections and assessments of supplier facilities.",
      benefits: ["Certified auditors", "Regular inspections", "Detailed reports"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Continuous Improvement",
      description: "Data-driven insights and recommendations help suppliers continuously improve their quality standards.",
      benefits: ["Performance analytics", "Improvement plans", "Best practice sharing"]
    }
  ];

  const auditProcess = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "Document verification, company background check, and initial compliance review.",
      duration: "2-3 days"
    },
    {
      step: "02", 
      title: "Factory Inspection",
      description: "On-site facility audit covering manufacturing processes, quality controls, and safety standards.",
      duration: "1-2 days"
    },
    {
      step: "03",
      title: "Quality Testing",
      description: "Product sampling, material testing, and quality parameter verification in certified labs.",
      duration: "3-5 days"
    },
    {
      step: "04",
      title: "Certification & Monitoring",
      description: "Issue quality certificate and establish ongoing monitoring with regular re-audits.",
      duration: "Ongoing"
    }
  ];

  const qualityMetrics = [
    { value: "100%", label: "Supplier Verification", icon: <Shield /> },
    { value: "99.2%", label: "Quality Compliance", icon: <CheckCircle /> },
    { value: "24hrs", label: "Issue Resolution", icon: <Clock /> },
    { value: "ISO 9001", label: "Certification Standard", icon: <Award /> }
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "ISO 14001:2015 Environmental Management", 
    "OHSAS 18001 Occupational Health & Safety",
    "BRC Global Standard for Food Safety",
    "FDA Compliance for Food Contact Materials",
    "FSC Chain of Custody Certification"
  ];

  const industries = [
    {
      name: "Food & Beverage",
      requirements: ["Food-grade materials", "FDA compliance", "Hygiene standards"],
      icon: "🍽️"
    },
    {
      name: "Pharmaceuticals",
      requirements: ["GMP compliance", "Sterile packaging", "Regulatory approval"],
      icon: "💊"
    },
    {
      name: "Electronics",
      requirements: ["Anti-static materials", "ESD protection", "Clean room standards"],
      icon: "📱"
    },
    {
      name: "Automotive",
      requirements: ["TS 16949 compliance", "Durability testing", "Supply chain traceability"],
      icon: "🚗"
    }
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
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 bg-green-100 text-green-800 border-green-200">
              <Shield className="w-4 h-4 mr-2" />
              Quality Assurance Program
            </Badge>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Guaranteed <span className="text-green-600">Quality</span> Standards
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Every supplier on our platform undergoes rigorous quality audits and continuous monitoring to ensure you receive only the highest quality packaging materials.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/buyers/register">
                <Button size="lg" className="px-8 py-4 text-lg bg-green-600 hover:bg-green-700">
                  View Quality Standards
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Schedule Audit
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {qualityMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                  {metric.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
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
              Comprehensive Quality Assurance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our multi-layered quality assurance program ensures every supplier meets the highest standards before joining our platform.
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
                      <div className="p-3 bg-green-100 text-green-600 rounded-lg">
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

      {/* Audit Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Quality Audit Process
            </h2>
            <p className="text-xl text-gray-600">
              Rigorous 4-step process to ensure supplier quality and compliance
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-green-200"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {auditProcess.map((process, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-3">{process.title}</h3>
                    <p className="text-gray-600 text-center mb-3">{process.description}</p>
                    <div className="text-center">
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        {process.duration}
                      </Badge>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Standards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Quality Standards
            </h2>
            <p className="text-xl text-gray-600">
              Tailored quality requirements for different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4 text-center">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-4">{industry.name}</h3>
                <div className="space-y-2">
                  {industry.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Recognized Certifications
              </h2>
              <p className="text-xl text-gray-600">
                Our suppliers maintain industry-leading certifications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Award className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-800">{cert}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/suppliers/register">
                <Button size="lg" className="px-12 py-4 text-lg bg-green-600 hover:bg-green-700">
                  Apply for Verification
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <p className="text-gray-600 mt-4">
                Join our network of quality-verified suppliers
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
                Ensuring quality standards across India's B2B packaging marketplace.
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
              <h4 className="font-semibold mb-4">Quality</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/solutions/quality#standards" className="hover:text-white">Quality Standards</Link></li>
                <li><Link href="/solutions/quality#audit" className="hover:text-white">Audit Process</Link></li>
                <li><Link href="/solutions/quality#certifications" className="hover:text-white">Certifications</Link></li>
                <li><Link href="/solutions/quality#compliance" className="hover:text-white">Compliance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/resources/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/company/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/resources/documentation" className="hover:text-white">Documentation</Link></li>
                <li><Link href="/company/careers" className="hover:text-white">Careers</Link></li>
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

