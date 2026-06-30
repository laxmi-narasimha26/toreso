"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Package, Shield, Eye, Lock, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal Information: Name, email address, phone number, company details, and business registration information.",
        "Account Information: Username, password, profile preferences, and account settings.",
        "Transaction Data: Order history, payment information, invoices, and financial transaction records.",
        "Usage Information: How you interact with our platform, including pages visited, features used, and time spent.",
        "Device Information: IP address, browser type, device type, and operating system information.",
        "Communication Data: Messages, support tickets, and correspondence with our team."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "Platform Services: To provide, maintain, and improve our B2B marketplace services.",
        "Account Management: To create and manage your account, verify your identity, and process registrations.",
        "Transaction Processing: To facilitate orders, payments, and communications between buyers and suppliers.",
        "Customer Support: To respond to inquiries, provide technical support, and resolve issues.",
        "Marketing Communications: To send relevant updates, newsletters, and promotional content (with consent).",
        "Analytics and Improvement: To analyze platform usage and improve our services and user experience.",
        "Legal Compliance: To comply with applicable laws, regulations, and legal processes."
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        "Business Partners: We share necessary information with suppliers and buyers to facilitate transactions.",
        "Service Providers: We may share data with trusted third-party service providers who assist in platform operations.",
        "Payment Processors: Financial information is shared with secure payment processors for transaction processing.",
        "Legal Requirements: We may disclose information when required by law or to protect our rights and users.",
        "Business Transfers: Information may be transferred in connection with mergers, acquisitions, or asset sales.",
        "Consent: We share information with your explicit consent for specific purposes."
      ]
    },
    {
      title: "Data Security and Protection",
      content: [
        "Encryption: All sensitive data is encrypted in transit and at rest using industry-standard protocols.",
        "Access Controls: Strict access controls ensure only authorized personnel can access user data.",
        "Regular Audits: We conduct regular security audits and vulnerability assessments.",
        "Secure Infrastructure: Our platform is hosted on secure, compliant cloud infrastructure.",
        "Employee Training: All employees receive regular training on data protection and privacy practices.",
        "Incident Response: We have procedures in place to respond quickly to any security incidents."
      ]
    },
    {
      title: "Your Rights and Choices",
      content: [
        "Access: You can request access to your personal information we hold.",
        "Correction: You can request correction of inaccurate or incomplete information.",
        "Deletion: You can request deletion of your personal information, subject to legal requirements.",
        "Portability: You can request your data in a portable format.",
        "Opt-out: You can opt-out of marketing communications at any time.",
        "Account Control: You can update your privacy settings and preferences in your account."
      ]
    },
    {
      title: "Cookies and Tracking Technologies",
      content: [
        "Essential Cookies: Required for basic platform functionality and security.",
        "Analytics Cookies: Help us understand how users interact with our platform.",
        "Preference Cookies: Remember your settings and preferences.",
        "Marketing Cookies: Used to deliver relevant advertisements and measure campaign effectiveness.",
        "Third-party Cookies: Some cookies are set by third-party services we use.",
        "Cookie Control: You can manage cookie preferences through our settings or browser controls."
      ]
    },
    {
      title: "International Data Transfers",
      content: [
        "Global Operations: We may transfer data internationally to provide our services.",
        "Adequate Protection: We ensure adequate protection for international data transfers.",
        "Standard Contractual Clauses: We use approved contractual clauses for data protection.",
        "Local Laws: We comply with local data protection laws in all jurisdictions where we operate.",
        "Cross-border Transfers: International transfers are conducted with appropriate safeguards."
      ]
    },
    {
      title: "Data Retention",
      content: [
        "Retention Periods: We retain data only as long as necessary for business and legal purposes.",
        "Account Data: Account information is retained while your account is active.",
        "Transaction Records: Financial and transaction data is retained per regulatory requirements.",
        "Support Data: Support communications are retained for quality assurance purposes.",
        "Legal Obligations: Some data may be retained longer to comply with legal requirements.",
        "Data Deletion: We securely delete data when retention is no longer required."
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
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center px-4 py-2 mb-6 bg-blue-100 text-blue-800 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Shield className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Privacy Policy</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Your Privacy Matters to Us
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </motion.p>
            
            <motion.p 
              className="text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Last updated: {lastUpdated}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Privacy Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Privacy Commitments
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Data Security</h3>
                  <p className="text-gray-600">
                    Bank-grade encryption and security measures protect your sensitive information.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Eye className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                  <p className="text-gray-600">
                    Clear information about what data we collect and how we use it.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Your Control</h3>
                  <p className="text-gray-600">
                    Full control over your data with easy access, correction, and deletion options.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
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
                  transition={{ delay: index * 0.1 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Questions About Privacy?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our privacy team is here to help you understand how we protect your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/company/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Contact Privacy Team
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/legal/terms">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  View Terms of Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Related Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <FileText className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Terms of Service</h3>
                  <p className="text-gray-600 mb-4">
                    Understand the terms and conditions for using our platform.
                  </p>
                  <Link href="/legal/terms">
                    <Button variant="outline" size="sm">
                      Read Terms
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Shield className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Security Overview</h3>
                  <p className="text-gray-600 mb-4">
                    Learn about our security measures and data protection practices.
                  </p>
                  <Link href="/legal/security">
                    <Button variant="outline" size="sm">
                      View Security
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
                Committed to protecting your privacy and data security.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/legal/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/legal/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/legal/security" className="hover:text-white">Security</Link></li>
                <li><Link href="/legal/cookies" className="hover:text-white">Cookie Policy</Link></li>
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
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>privacy@Toreso.com</li>
                <li>+91 98765 43210</li>
                <li>Mumbai, India</li>
                <li>Mon-Fri: 9AM-7PM IST</li>
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

