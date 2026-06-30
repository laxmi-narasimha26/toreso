"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Package, FileText, Scale, Shield, ArrowRight, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function TermsOfService() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing or using the Toreso platform, you agree to be bound by these Terms of Service.",
        "If you disagree with any part of these terms, you may not access or use our services.",
        "These terms apply to all users, including buyers, suppliers, and visitors to our platform.",
        "We may update these terms from time to time, and continued use constitutes acceptance of changes.",
        "You must be at least 18 years old or have legal capacity to enter into agreements."
      ]
    },
    {
      title: "Platform Description",
      content: [
        "Toreso is a B2B marketplace connecting packaging material suppliers with buyers.",
        "We facilitate transactions but do not directly engage in the sale or purchase of goods.",
        "Our platform provides tools for RFQ management, supplier verification, and order tracking.",
        "We offer additional services including invoice discounting and quality assurance programs.",
        "Platform availability may vary and we do not guarantee uninterrupted access."
      ]
    },
    {
      title: "User Accounts and Registration",
      content: [
        "You must provide accurate, current, and complete information during registration.",
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You must notify us immediately of any unauthorized use of your account.",
        "Each user may maintain only one active account unless explicitly authorized.",
        "We reserve the right to suspend or terminate accounts that violate these terms.",
        "Account verification may be required for certain platform features."
      ]
    },
    {
      title: "Buyer Responsibilities",
      content: [
        "Provide accurate specifications and requirements in RFQs and orders.",
        "Make payments according to agreed terms and conditions.",
        "Communicate professionally and respectfully with suppliers.",
        "Comply with all applicable laws and regulations in your jurisdiction.",
        "Report any quality issues or disputes promptly through proper channels.",
        "Maintain confidentiality of proprietary supplier information."
      ]
    },
    {
      title: "Supplier Responsibilities",
      content: [
        "Provide accurate product information, pricing, and delivery timelines.",
        "Maintain all required licenses, certifications, and compliance standards.",
        "Deliver products that meet specified quality and safety requirements.",
        "Respond to RFQs and communications in a timely manner.",
        "Honor all accepted orders and agreed-upon terms.",
        "Participate in quality audits and verification processes as required."
      ]
    },
    {
      title: "Transaction Terms",
      content: [
        "All transactions are between buyers and suppliers; Toreso facilitates but is not a party.",
        "Payment terms and conditions are established between transacting parties.",
        "Disputes should be resolved directly between buyers and suppliers.",
        "We may provide mediation services but are not obligated to resolve disputes.",
        "Cancellation and refund policies are subject to agreement between parties.",
        "We may charge platform fees as disclosed in our pricing structure."
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        "The Toreso platform, including software, design, and content, is our intellectual property.",
        "Users retain ownership of their content but grant us license to use it on the platform.",
        "You may not copy, modify, distribute, or reverse engineer our platform.",
        "Trademark and copyright infringement is strictly prohibited.",
        "We respect intellectual property rights and expect users to do the same.",
        "Report any intellectual property violations through our designated channels."
      ]
    },
    {
      title: "Prohibited Activities",
      content: [
        "Fraudulent activities, misrepresentation, or deceptive practices.",
        "Harassment, abuse, or inappropriate behavior toward other users.",
        "Violation of applicable laws, regulations, or industry standards.",
        "Unauthorized access to other users' accounts or platform systems.",
        "Distribution of malware, viruses, or other harmful code.",
        "Spamming, solicitation outside platform channels, or unauthorized marketing.",
        "Circumventing platform fees or payment processing systems."
      ]
    },
    {
      title: "Privacy and Data Protection",
      content: [
        "Our Privacy Policy governs the collection and use of your personal information.",
        "We implement appropriate security measures to protect user data.",
        "You consent to data processing necessary for platform operations.",
        "We may share information as required by law or to protect our rights.",
        "Users have rights regarding their personal data as outlined in our Privacy Policy.",
        "International data transfers are conducted with appropriate safeguards."
      ]
    },
    {
      title: "Platform Availability and Modifications",
      content: [
        "We strive to maintain platform availability but do not guarantee uninterrupted service.",
        "Scheduled maintenance and updates may temporarily affect availability.",
        "We reserve the right to modify, suspend, or discontinue services at any time.",
        "Features and functionality may change as we improve the platform.",
        "Users will be notified of significant changes affecting their use of the platform.",
        "We are not liable for any inconvenience caused by service interruptions."
      ]
    },
    {
      title: "Disclaimers and Limitation of Liability",
      content: [
        "The platform is provided 'as is' without warranties of any kind.",
        "We do not guarantee the accuracy of user-provided information.",
        "We are not liable for the quality, safety, or legality of listed products.",
        "Our liability is limited to the maximum extent permitted by law.",
        "We are not responsible for disputes between buyers and suppliers.",
        "Users assume all risks associated with their use of the platform."
      ]
    },
    {
      title: "Indemnification",
      content: [
        "You agree to indemnify and hold harmless Toreso from claims arising from your use.",
        "This includes claims related to your content, conduct, or violation of these terms.",
        "You will bear the costs of legal defense and any resulting damages.",
        "Indemnification obligations survive termination of your account.",
        "We reserve the right to assume defense of any claim at our expense."
      ]
    },
    {
      title: "Termination",
      content: [
        "Either party may terminate the agreement at any time with or without cause.",
        "We may immediately suspend or terminate accounts for violations of these terms.",
        "Upon termination, your right to use the platform ceases immediately.",
        "Certain provisions of these terms survive termination.",
        "We may retain certain information as required by law or legitimate business needs.",
        "Outstanding obligations between users must be resolved independently."
      ]
    },
    {
      title: "Governing Law and Dispute Resolution",
      content: [
        "These terms are governed by the laws of India.",
        "Disputes will be resolved through binding arbitration in Mumbai, India.",
        "The arbitration will be conducted in English under Indian Arbitration and Conciliation Act.",
        "Each party bears their own costs unless otherwise determined by the arbitrator.",
        "Injunctive relief may be sought in appropriate courts for intellectual property matters.",
        "Class action lawsuits and collective arbitrations are not permitted."
      ]
    }
  ];

  const lastUpdated = "January 15, 2024";

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
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center px-4 py-2 mb-6 bg-gray-100 text-gray-800 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Scale className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Terms of Service</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Terms of Service
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              These terms govern your use of the Toreso platform and services. Please read them carefully.
            </motion.p>
            
            <motion.div
              className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                <p className="text-yellow-800 font-medium">
                  By using our platform, you agree to these terms and conditions.
                </p>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Last updated: {lastUpdated}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Key Terms Summary
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Scale className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Fair Usage</h3>
                  <p className="text-gray-600">
                    Use our platform responsibly and in accordance with applicable laws and regulations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Account Security</h3>
                  <p className="text-gray-600">
                    Maintain the security of your account and notify us of any unauthorized access.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Transaction Terms</h3>
                  <p className="text-gray-600">
                    All transactions are between users; we facilitate but are not party to agreements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Questions About These Terms?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our legal team is available to help clarify any questions about our terms of service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/company/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  Contact Legal Team
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/legal/privacy">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  View Privacy Policy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Documents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Related Legal Documents
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Shield className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Privacy Policy</h3>
                  <p className="text-gray-600 mb-4">
                    Learn how we collect, use, and protect your personal information.
                  </p>
                  <Link href="/legal/privacy">
                    <Button variant="outline" size="sm">
                      Read Privacy Policy
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <FileText className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Security Information</h3>
                  <p className="text-gray-600 mb-4">
                    Understand our security measures and data protection practices.
                  </p>
                  <Link href="/legal/security">
                    <Button variant="outline" size="sm">
                      View Security Info
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
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
                Transparent terms for a trusted B2B marketplace platform.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/legal/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/legal/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/legal/security" className="hover:text-white">Security</Link></li>
                <li><Link href="/legal/cookies" className="hover:text-white">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/buyers/register" className="hover:text-white">Buyer Registration</Link></li>
                <li><Link href="/suppliers/register" className="hover:text-white">Supplier Registration</Link></li>
                <li><Link href="/platform/features" className="hover:text-white">Features</Link></li>
                <li><Link href="/platform/pricing" className="hover:text-white">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/resources/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/company/contact" className="hover:text-white">Contact Us</Link></li>
                <li>legal@Toreso.com</li>
                <li>+91 98765 43210</li>
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

