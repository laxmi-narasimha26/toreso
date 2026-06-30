"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AdminHomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Admin Home</h1>
        <p className="text-gray-600 mb-6">
          Welcome to the Toreso admin home page. This page is currently under development.
        </p>
        <Button asChild className="w-full">
          <Link href="/">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
} 
