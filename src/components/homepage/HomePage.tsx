"use client";

import React from 'react';
import { Metadata } from 'next';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import StatsSection from './StatsSection';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

