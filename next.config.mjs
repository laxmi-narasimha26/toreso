/** @type {import('next').NextConfig} */
import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: "/for-buyers", destination: "/products", permanent: true },
      { source: "/for-suppliers", destination: "/packaging-categories", permanent: true },
      { source: "/buyers/:path*", destination: "/products", permanent: true },
      { source: "/suppliers/:path*", destination: "/packaging-categories", permanent: true },
      { source: "/platform", destination: "/products", permanent: true },
      { source: "/platform/:path*", destination: "/products", permanent: true },
      { source: "/blueprint", destination: "/recycle-guide", permanent: true },
      { source: "/advanced-home", destination: "/", permanent: true },
      { source: "/post-requirement", destination: "/products", permanent: true },
      { source: "/request-demo", destination: "/contact", permanent: true },
      { source: "/solutions/procurement", destination: "/products", permanent: true },
      { source: "/solutions/quality", destination: "/materials", permanent: true },
      { source: "/solutions/finance", destination: "/products", permanent: true },
      { source: "/solutions/catalog", destination: "/products", permanent: true },
      { source: "/solutions/orders", destination: "/track-order", permanent: true },
      { source: "/solutions/rfq", destination: "/products", permanent: true },
      { source: "/solutions/analytics", destination: "/answers", permanent: true },
      { source: "/solutions/verification", destination: "/materials", permanent: true },
    ];
  },
};

export default nextConfig; 
