"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, CheckCircle, TrendingUp, Users, Package, Shield } from 'lucide-react';

const HeroSection = () => {
  const benefits = [
    "Zero upfront costs",
    "Verified suppliers only",
    "Instant price comparisons",
    "Volume discounts up to 30%"
  ];

  const stats = [
    { label: "Active Suppliers", value: "500+", icon: Package },
    { label: "Happy Buyers", value: "1000+", icon: Users },
    { label: "Orders Processed", value: "50K+", icon: TrendingUp },
    { label: "Quality Assured", value: "99.9%", icon: Shield }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-in-from-left">
              {/* Badge */}
              <Badge variant="outline" className="w-fit">
                🚀 #1 B2B Packaging Marketplace in India
              </Badge>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block">Revolutionizing</span>
                  <span className="block gradient-text">B2B Packaging</span>
                  <span className="block">Procurement</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Connect with verified suppliers, unlock volume discounts, ensure quality with audits, 
                  and streamline your entire packaging procurement process on one intelligent platform.
                </p>
              </div>

              {/* Benefits List */}
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-gradient group" asChild>
                  <Link href="/register">
                    Start Free Today
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="group" asChild>
                  <Link href="/request-demo">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
                  </Link>
                </Button>
              </div>

              {/* Social Proof */}
              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">
                  Trusted by leading companies across India
                </p>
                <div className="flex flex-wrap gap-8 opacity-60">
                  {/* Placeholder for company logos */}
                  <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs font-medium">
                    Company 1
                  </div>
                  <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs font-medium">
                    Company 2
                  </div>
                  <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs font-medium">
                    Company 3
                  </div>
                  <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs font-medium">
                    Company 4
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image/Illustration */}
            <div className="relative animate-slide-in-from-right">
              <div className="relative">
                {/* Main Hero Card */}
                <div className="bg-card border rounded-2xl p-8 shadow-2xl glass">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Live Platform Stats</h3>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat, index) => (
                        <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                          <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Recent Activity */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-muted-foreground">Recent Activity</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3 p-2 bg-muted/30 rounded">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-sm">New supplier verified in Mumbai</span>
                        </div>
                        <div className="flex items-center space-x-3 p-2 bg-muted/30 rounded">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="text-sm">₹2.5L order placed from Delhi</span>
                        </div>
                        <div className="flex items-center space-x-3 p-2 bg-muted/30 rounded">
                          <div className="w-2 h-2 bg-orange-500 rounded-full" />
                          <span className="text-sm">Quality audit completed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">30%</div>
                    <div className="text-xs">Cost Savings</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-xs">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

