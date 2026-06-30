"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Package, ArrowRight, Users, Target, Award, 
  CheckCircle, TrendingUp, Globe, Shield,
  Heart, Zap, Building, MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AboutUs() {
  const stats = [
    { value: "2019", label: "Founded", icon: <Building /> },
    { value: "10,000+", label: "Active Buyers", icon: <Users /> },
    { value: "5,000+", label: "Verified Suppliers", icon: <Shield /> },
    { value: "₹500Cr+", label: "Transaction Volume", icon: <TrendingUp /> }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Transparency",
      description: "We believe in building trust through complete transparency in pricing, processes, and partnerships."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation First",
      description: "We continuously innovate to solve real problems faced by buyers and suppliers in the packaging industry."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Success",
      description: "Our success is measured by the success of our customers. We're committed to their growth and profitability."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Sustainable Impact",
      description: "We promote sustainable packaging solutions and responsible business practices across our network."
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to digitize India's packaging supply chain"
    },
    {
      year: "2020",
      title: "First 100 Suppliers",
      description: "Onboarded our first 100 verified suppliers across major packaging categories"
    },
    {
      year: "2021",
      title: "AI Integration",
      description: "Launched AI-powered supplier matching and predictive analytics platform"
    },
    {
      year: "2022",
      title: "Invoice Discounting",
      description: "Introduced invoice discounting to solve cash flow challenges for suppliers"
    },
    {
      year: "2023",
      title: "Pan-India Expansion",
      description: "Expanded operations to 50+ cities with regional fulfillment centers"
    },
    {
      year: "2024",
      title: "Market Leadership",
      description: "Became India's largest B2B packaging marketplace with 10,000+ active buyers"
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Chief Executive Officer",
      description: "Former VP at Asian Paints with 15+ years in B2B markets",
      image: "/avatars/rajesh.jpg"
    },
    {
      name: "Priya Sharma", 
      role: "Chief Technology Officer",
      description: "Ex-Google engineer with expertise in AI and marketplace platforms",
      image: "/avatars/priya.jpg"
    },
    {
      name: "Mohammed Ali",
      role: "Chief Operating Officer", 
      description: "Supply chain expert with 12+ years at Flipkart and Amazon",
      image: "/avatars/mohammed.jpg"
    },
    {
      name: "Anita Desai",
      role: "Chief Financial Officer",
      description: "Former investment banker with expertise in fintech and lending",
      image: "/avatars/anita.jpg"
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
              <Link href="/company" className="text-gray-600 hover:text-gray-900 font-semibold">Company</Link>
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
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Transforming India's <span className="text-blue-600">Packaging Industry</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              We're on a mission to revolutionize how packaging materials are sourced, traded, and delivered across India through technology, transparency, and trust.
            </motion.p>
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

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To create India's most trusted and efficient B2B packaging marketplace that empowers small and medium businesses with access to quality suppliers, transparent pricing, and innovative financing solutions while promoting sustainable packaging practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              From startup to India's leading B2B packaging marketplace
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex-1 md:w-1/2">
                    <Card className="p-6">
                      <div className="flex items-center mb-4">
                        <Badge className="px-3 py-1 bg-blue-100 text-blue-800">
                          {milestone.year}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </Card>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-xl font-bold mx-8 z-10">
                    {milestone.year.slice(-2)}
                  </div>
                  
                  <div className="flex-1 md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Experienced leaders driving innovation in B2B marketplaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Life at Toreso</h2>
              <p className="text-xl text-gray-600">
                Join a team that's passionate about transforming Indian commerce
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Diverse Team</h3>
                <p className="text-gray-600">150+ professionals from diverse backgrounds working together</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Growth Focused</h3>
                <p className="text-gray-600">Continuous learning opportunities and career advancement</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Recognition</h3>
                <p className="text-gray-600">Regular recognition and rewards for outstanding performance</p>
              </Card>
            </div>

            <div className="text-center">
              <Link href="/company/careers">
                <Button size="lg" className="px-12 py-4 text-lg">
                  Join Our Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-8">
              Have questions about our platform or want to partner with us?
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Headquarters</h3>
                <p className="text-gray-600">Mumbai, Maharashtra, India</p>
              </Card>
              
              <Card className="p-6">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Sales</h3>
                <p className="text-gray-600">sales@Toreso.com</p>
              </Card>
              
              <Card className="p-6">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Support</h3>
                <p className="text-gray-600">support@Toreso.com</p>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/company/contact">
                <Button size="lg" className="px-8 py-4">
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/company/careers">
                <Button variant="outline" size="lg" className="px-8 py-4">
                  View Careers
                </Button>
              </Link>
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
                Transforming India's packaging industry through technology and innovation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/company/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/company/team" className="hover:text-white">Our Team</Link></li>
                <li><Link href="/company/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="/company/press" className="hover:text-white">Press</Link></li>
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

