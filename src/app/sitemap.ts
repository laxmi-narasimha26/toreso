import type { MetadataRoute } from "next";
import { collections } from "@/data/consumerCatalog";
import { innovationCategories, innovationProducts } from "@/data/innovationCatalog";
import { answerPages, comparePages, guidePages } from "@/data/seoContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://toreso.com";
  const now = new Date();

  const mainRoutes = [
    { path: "", priority: 1, changeFrequency: "daily" as const },
    { path: "/products", priority: 0.99, changeFrequency: "daily" as const },
    { path: "/packaging-categories", priority: 0.98, changeFrequency: "weekly" as const },
    { path: "/guides", priority: 0.92, changeFrequency: "weekly" as const },
    { path: "/answers", priority: 0.92, changeFrequency: "weekly" as const },
    { path: "/compare", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/track-order", priority: 0.65, changeFrequency: "weekly" as const },
    { path: "/returns", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/innovation-catalog", priority: 0.98, changeFrequency: "weekly" as const },
    { path: "/categories", priority: 0.95, changeFrequency: "daily" as const },
    { path: "/collections", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/sustainability", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/materials", priority: 0.88, changeFrequency: "monthly" as const },
    { path: "/recycle-guide", priority: 0.88, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/resources/blog", priority: 0.5, changeFrequency: "weekly" as const },
    { path: "/legal/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/legal/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/legal/refund", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return [
    ...mainRoutes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...collections.map((collection) => ({
      url: `${baseUrl}/collections/${collection.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
    ...innovationCategories.map((category) => ({
      url: `${baseUrl}/packaging-categories/${category.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...innovationProducts.map((product) => ({
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.78,
    })),
    ...guidePages.map((guide) => ({
      url: `${baseUrl}/guides/${guide.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.83,
    })),
    ...answerPages.map((answer) => ({
      url: `${baseUrl}/answers/${answer.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    })),
    ...comparePages.map((page) => ({
      url: `${baseUrl}/compare/${page.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    })),
  ];
}
