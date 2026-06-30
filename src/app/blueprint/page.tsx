"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight, Target, Users, Package, BarChart, Settings } from 'lucide-react';

export default function BlueprintPage() {
  const features = [
    {
      icon: Users,
      title: "Multi-Role Platform",
      description: "Seamless experience for Admins, Buyers, and Suppliers",
      details: ["Admin dashboard for platform management", "Buyer procurement tools", "Supplier business growth tools"]
    },
    {
      icon: Package,
      title: "Comprehensive Catalog",
      description: "Complete packaging materials across all categories",
      details: ["10,000+ products listed", "Verified supplier network", "Quality assured materials"]
    },
    {
      icon: BarChart,
      title: "Analytics & Insights",
      description: "Data-driven procurement and business intelligence",
      details: ["Cost optimization analytics", "Supplier performance tracking", "Market insights and trends"]
    },
    {
      icon: Settings,
      title: "Advanced Features",
      description: "Enterprise-grade tools for modern businesses",
      details: ["RFQ/RFI system", "Invoice discounting", "Real-time tracking"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                🔮 Platform Blueprint
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Toreso Platform
                <span className="gradient-text"> Architecture</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                A comprehensive overview of our B2B packaging marketplace platform,
                designed to revolutionize procurement processes across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/">
                    Explore Platform
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/request-demo">
                    Request Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Platform Overview</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Built with modern technology stack and enterprise-grade architecture
                  to serve the complex needs of B2B packaging procurement.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
              <p className="text-muted-foreground mb-8">
                Built with cutting-edge technologies for scalability, performance, and reliability.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'].map((tech, index) => (
                  <div key={index} className="p-4 bg-background rounded-lg border">
                    <div className="font-medium">{tech}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Experience Toreso?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of businesses already transforming their procurement process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-gradient" asChild>
                  <Link href="/register">
                    Get Started Today
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">
                    Contact Sales
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

