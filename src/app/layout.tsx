import "@/app/globals.css";
import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Toreso | Total Recyclable Solutions for Daily Packaging",
    template: "%s | Toreso",
  },
  description:
    "Shop Toreso recyclable daily packaging products for wrapping, sealing, shipping, storing, gifting, food packet rescue, returns, and home protection.",
  keywords: [
    "recyclable packaging products",
    "eco friendly packaging products",
    "sustainable packaging products",
    "reusable packaging products",
    "daily packaging products",
    "total recyclable solutions",
    "recyclable shipping mailers",
    "paper tape dispenser",
    "honeycomb paper wrap",
    "food packet resealer",
    "reusable return mailers",
    "recyclable packaging India",
    "eco packaging India",
    "zero waste packaging products",
    "mini stretch film roller",
    "desiccant storage kits",
    "daily packaging store",
  ],
  authors: [{ name: "Toreso" }],
  creator: "Toreso",
  publisher: "Toreso",
  metadataBase: new URL("https://toreso.com"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
    },
  },
  openGraph: {
    title: "Toreso | Total Recyclable Solutions for Daily Packaging",
    description:
      "A recyclable daily packaging store for wraps, seals, mailers, cushioning, labels, refill tools, returns, and home protection.",
    url: "https://toreso.com",
    siteName: "Toreso",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Toreso recyclable daily packaging products",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toreso | Total Recyclable Solutions",
    description:
      "Recyclable everyday packaging products for wrapping, sealing, shipping, storing, gifting, and returns.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "shopping",
  classification: "Recyclable Consumer Packaging Product Brand",
  referrer: "strict-origin-when-cross-origin",
};

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Toreso",
    url: "https://toreso.com",
    logo: "https://toreso.com/logo.png",
    description:
      "Toreso sells recyclable daily packaging products for homes, travelers, small sellers, gifting, food storage, shipping, and returns.",
    foundingDate: "2023",
    slogan: "Total Recyclable Solutions",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "English",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${manrope.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
        suppressHydrationWarning
      >
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
