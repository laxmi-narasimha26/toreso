"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Package, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-8">
          <Sparkles className="w-3 h-3" />
          <span>COMING SOON</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
          {title}
        </h1>
        
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="btn-gradient group">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact" className="flex items-center gap-2">
              <Package className="w-4 h-4 text-primary" />
              Contact Sales
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* Footer Decoration */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center opacity-20">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-toreso-teal-500 to-toreso-teal-700 flex items-center justify-center">
            <Package className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm font-display font-bold tracking-tight">Toreso</span>
        </div>
      </div>
    </div>
  );
}
