"use client";

import React from 'react';
import { Package, Users, TrendingUp, Shield, Clock, Globe, Award, Zap } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Package,
      value: "10,000+",
      label: "Products Listed",
      description: "Comprehensive packaging catalog",
      color: "text-blue-500"
    },
    {
      icon: Users,
      value: "2,500+",
      label: "Active Users",
      description: "Buyers and suppliers combined",
      color: "text-green-500"
    },
    {
      icon: TrendingUp,
      value: "₹50Cr+",
      label: "Transaction Volume",
      description: "Monthly platform GMV",
      color: "text-purple-500"
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Quality Score",
      description: "Supplier verification rate",
      color: "text-orange-500"
    },
    {
      icon: Clock,
      value: "24hrs",
      label: "Average Response",
      description: "RFQ response time",
      color: "text-red-500"
    },
    {
      icon: Globe,
      value: "28",
      label: "States Covered",
      description: "Pan-India presence",
      color: "text-indigo-500"
    },
    {
      icon: Award,
      value: "4.9/5",
      label: "Customer Rating",
      description: "Average platform rating",
      color: "text-yellow-500"
    },
    {
      icon: Zap,
      value: "30%",
      label: "Cost Savings",
      description: "Average procurement savings",
      color: "text-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transforming B2B Procurement 
              <span className="gradient-text"> Across India</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our platform connects thousands of businesses daily, creating a transparent, 
              efficient marketplace that drives growth for suppliers and savings for buyers.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-background border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors`}>
                    <stat.icon className={`w-6 h-6 ${stat.color} group-hover:scale-110 transition-all`} />
                  </div>

                  {/* Value */}
                  <div className="space-y-1">
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Metrics */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-lg font-semibold mb-1">Verified Suppliers</div>
              <div className="text-sm text-muted-foreground">
                Rigorously audited and quality-certified partners
              </div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-lg font-semibold mb-1">Active Buyers</div>
              <div className="text-sm text-muted-foreground">
                Procurement professionals trust our platform
              </div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
              <div className="text-lg font-semibold mb-1">Orders Fulfilled</div>
              <div className="text-sm text-muted-foreground">
                Successful transactions with 99% satisfaction
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by industry leaders and certified by leading organizations
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">MSME Registered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">Make in India Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

