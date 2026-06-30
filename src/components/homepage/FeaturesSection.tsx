"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  Shield, 
  TrendingUp, 
  Clock, 
  FileText, 
  CreditCard, 
  BarChart3, 
  Truck,
  Users,
  Search,
  CheckCircle,
  ArrowRight,
  Package,
  Globe,
  Zap
} from 'lucide-react';

const FeaturesSection = () => {
  const coreFeatures = [
    {
      icon: ShoppingCart,
      title: "Smart Procurement",
      description: "AI-powered product matching and automated RFQ generation streamlines your procurement process.",
      benefits: ["Automated supplier matching", "Bulk order optimization", "Smart inventory management"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Comprehensive supplier verification and regular quality audits ensure consistent product standards.",
      benefits: ["ISO certification tracking", "Regular quality audits", "Compliance monitoring"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Volume discounts, transparent pricing, and market insights help reduce procurement costs significantly.",
      benefits: ["Volume-based pricing", "Market rate comparisons", "Cost analytics dashboard"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Truck,
      title: "Logistics Management",
      description: "End-to-end shipment tracking, JIT delivery scheduling, and warehouse management solutions.",
      benefits: ["Real-time tracking", "JIT delivery scheduling", "Warehouse network access"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const advancedFeatures = [
    {
      icon: CreditCard,
      title: "Invoice Discounting",
      description: "Improve cash flow with instant invoice discounting options",
      link: "/solutions/invoice-discounting"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive reporting and business intelligence tools",
      link: "/solutions/analytics"
    },
    {
      icon: FileText,
      title: "RFQ Management",
      description: "Streamlined request for quotation process with automated matching",
      link: "/solutions/rfq-management"
    },
    {
      icon: Users,
      title: "Supplier Network",
      description: "Access to verified suppliers across India with quality ratings",
      link: "/suppliers"
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "AI-powered product discovery with advanced filtering options",
      link: "/categories"
    },
    {
      icon: Globe,
      title: "Multi-location Support",
      description: "Manage procurement across multiple plants and locations",
      link: "/solutions/multi-location"
    }
  ];

  const uniqueSellingPoints = [
    {
      title: "Zero Platform Fees",
      description: "Start selling or buying without any upfront costs",
      icon: Zap
    },
    {
      title: "Verified Suppliers Only",
      description: "Every supplier undergoes rigorous verification process",
      icon: CheckCircle
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support and technical assistance",
      icon: Clock
    },
    {
      title: "Pan-India Network",
      description: "Access suppliers and buyers across all major Indian cities",
      icon: Package
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Comprehensive B2B Solutions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for 
              <span className="gradient-text"> Smarter Procurement</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From supplier discovery to order fulfillment, our platform provides end-to-end 
              solutions that transform how businesses buy and sell packaging materials.
            </p>
          </div>

          {/* Core Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/30">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Advanced Features */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Advanced Features for Modern Businesses
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Leverage cutting-edge technology and data-driven insights to optimize 
                your procurement strategy and drive business growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedFeatures.map((feature, index) => (
                <Link key={index} href={feature.link}>
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            {feature.description}
                          </p>
                          <div className="flex items-center text-xs text-primary font-medium">
                            Learn more
                            <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Unique Selling Points */}
          <div className="bg-gradient-to-r from-primary/5 via-background to-secondary/5 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Why Choose Toreso?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're not just another B2B platform. We're your strategic partner in 
                building a more efficient, transparent, and profitable supply chain.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {uniqueSellingPoints.map((point, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <point.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{point.title}</h4>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button size="lg" className="btn-gradient" asChild>
                <Link href="/register">
                  Start Your Free Account Today
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                No credit card required • Setup in under 5 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

