"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Users, Package, Phone, Mail, MapPin } from 'lucide-react';

const CTASection = () => {
  const benefits = [
    "Free account setup in under 5 minutes",
    "No monthly fees or hidden charges", 
    "Access to 500+ verified suppliers",
    "24/7 customer support included",
    "Volume discounts up to 30%",
    "Quality assurance guarantee"
  ];

  const userTypes = [
    {
      title: "For Buyers",
      description: "Start procurement smarter with verified suppliers and transparent pricing",
      benefits: ["Cost savings up to 35%", "Quality guaranteed suppliers", "Streamlined RFQ process"],
      cta: "Start Buying",
      href: "/buyer/register",
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "For Suppliers", 
      description: "Grow your business with access to qualified buyers across India",
      benefits: ["Reach 1000+ active buyers", "Invoice discounting available", "Quality certification support"],
      cta: "Start Selling",
      href: "/supplier/register", 
      icon: Package,
      color: "from-green-500 to-green-600"
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 98765 43210",
      href: "tel:+919876543210"
    },
    {
      icon: Mail,
      label: "Email Us", 
      value: "hello@Toreso.com",
      href: "mailto:hello@Toreso.com"
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "Mumbai, India",
      href: "/contact"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              🚀 Ready to Transform Your Business?
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Join India's Leading
              <br />
              <span className="gradient-text">B2B Packaging Marketplace</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Start your journey towards smarter procurement and better business outcomes. 
              Join thousands of businesses already saving costs and improving efficiency with Toreso.
            </p>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 text-left">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* User Type Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {userTypes.map((userType, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30 hover:shadow-2xl transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${userType.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <CardContent className="p-8 relative">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${userType.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <userType.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{userType.title}</h3>
                  <p className="text-muted-foreground mb-6">{userType.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {userType.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${userType.color}`} />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button size="lg" className={`w-full btn-gradient group/btn`} asChild>
                    <Link href={userType.href}>
                      {userType.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-primary/5 via-background to-secondary/5 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help Getting Started?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you understand how Toreso can transform 
              your procurement process. Get in touch for a personalized consultation.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((contact, index) => (
                <Link key={index} href={contact.href} className="group">
                  <div className="flex flex-col items-center space-y-2 p-4 rounded-xl hover:bg-background/50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <contact.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-sm font-medium">{contact.label}</div>
                    <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="/request-demo">
                  Request Demo
                </Link>
              </Button>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Sales Team
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Final Statistics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Verified Suppliers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Active Buyers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹50Cr+</div>
              <div className="text-sm text-muted-foreground">Monthly GMV</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

