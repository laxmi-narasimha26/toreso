"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "ABC Manufacturing Ltd.",
      role: "Procurement Manager",
      avatar: "/avatars/rajesh.jpg",
      rating: 5,
      content: "Toreso has transformed our packaging procurement process completely. We've achieved 35% cost savings through bulk ordering and their supplier verification gives us complete peace of mind. The quality audit system is exceptional.",
      savings: "₹25L annually",
      category: "Food & Beverages"
    },
    {
      name: "Priya Singh",
      company: "TechPack Solutions",
      role: "Supply Chain Director",
      avatar: "/avatars/priya.jpg",
      rating: 5,
      content: "The RFQ system is incredibly efficient. What used to take weeks now takes hours. The real-time tracking and invoice discounting features have significantly improved our cash flow management.",
      savings: "40% time reduction",
      category: "Electronics"
    },
    {
      name: "Mohammed Ali",
      company: "Green Valley Packaging",
      role: "CEO",
      avatar: "/avatars/mohammed.jpg",
      rating: 5,
      content: "As a supplier, Toreso has opened new markets for us across India. The platform's reach and the quality of buyers is impressive. The audit system helps us maintain high standards consistently.",
      savings: "300% growth",
      category: "Supplier"
    },
    {
      name: "Anita Sharma",
      company: "Pharma Plus Industries",
      role: "Operations Head",
      avatar: "/avatars/anita.jpg",
      rating: 5,
      content: "The compliance tracking and quality assurance features are exactly what pharmaceutical companies need. Every supplier is thoroughly vetted, and the audit trails are comprehensive.",
      savings: "Zero compliance issues",
      category: "Pharmaceuticals"
    },
    {
      name: "Vikram Patel",
      company: "Fresh Foods Pvt Ltd",
      role: "Procurement Head",
      avatar: "/avatars/vikram.jpg",
      rating: 5,
      content: "JIT delivery scheduling has revolutionized our inventory management. No more overstocking or stockouts. The cost optimization recommendations have saved us lakhs every quarter.",
      savings: "₹18L quarterly",
      category: "FMCG"
    },
    {
      name: "Sunita Reddy",
      company: "EcoPack Materials",
      role: "Founder",
      avatar: "/avatars/sunita.jpg",
      rating: 5,
      content: "Toreso's focus on sustainable packaging aligns perfectly with our mission. The platform has helped us reach environmentally conscious buyers and grow our sustainable product line significantly.",
      savings: "200% eco-sales growth",
      category: "Sustainable Packaging"
    }
  ];

  const stats = [
    { value: "4.9/5", label: "Average Rating" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "1000+", label: "Success Stories" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Customer Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Industry Leaders
              <span className="gradient-text"> Across India</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Join thousands of businesses who have transformed their procurement process 
              and achieved significant cost savings with Toreso.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-background">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Savings Badge */}
                  <Badge variant="secondary" className="mb-6 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    💰 {testimonial.savings}
                  </Badge>

                  {/* Author Info */}
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Case Study Highlights */}
          <div className="bg-gradient-to-r from-primary/5 via-background to-secondary/5 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Success Stories by Numbers</h3>
              <p className="text-muted-foreground">
                Real results from businesses that chose Toreso as their B2B procurement partner
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">35%</div>
                <div className="text-lg font-semibold mb-2">Average Cost Reduction</div>
                <div className="text-sm text-muted-foreground">
                  Through bulk ordering and transparent pricing
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">75%</div>
                <div className="text-lg font-semibold mb-2">Time Savings</div>
                <div className="text-sm text-muted-foreground">
                  In procurement process and supplier management
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">99.5%</div>
                <div className="text-lg font-semibold mb-2">Quality Satisfaction</div>
                <div className="text-sm text-muted-foreground">
                  With our verified supplier network
                </div>
              </div>
            </div>
          </div>

          {/* Industry Recognition */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-6">
              Recognized by leading industry publications and organizations
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-sm font-medium">Featured in Economic Times</div>
              <div className="text-sm font-medium">Business Today Award Winner</div>
              <div className="text-sm font-medium">Startup India Recognized</div>
              <div className="text-sm font-medium">CII Excellence Award</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

