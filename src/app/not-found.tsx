import React from 'react';
import Link from 'next/link';
import { Package, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-toreso-slate-50 to-white flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-toreso-teal-100 flex items-center justify-center">
          <Package className="w-8 h-8 text-toreso-teal-600" />
        </div>

        <h1 className="text-7xl font-display font-extrabold text-toreso-slate-900 mb-3">
          404
        </h1>
        <p className="text-lg text-toreso-slate-600 mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-toreso-teal-600 text-white font-semibold rounded-xl hover:bg-toreso-teal-700 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
