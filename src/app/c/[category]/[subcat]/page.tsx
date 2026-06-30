import { permanentRedirect } from "next/navigation";
import { innovationCategories } from "@/data/innovationCatalog";

type PageProps = {
  params: Promise<{ category: string; subcat: string }>;
};

export function generateStaticParams() {
  return innovationCategories.slice(0, 6).map((category) => ({
    category: category.slug,
    subcat: "featured",
  }));
}

export default async function CategorySubcategoryAliasPage({ params }: PageProps) {
  const { category } = await params;
  permanentRedirect(`/packaging-categories/${category}`);
}
