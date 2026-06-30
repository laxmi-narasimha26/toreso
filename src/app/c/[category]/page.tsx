import { permanentRedirect } from "next/navigation";
import { innovationCategories } from "@/data/innovationCatalog";

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return innovationCategories.map((category) => ({ category: category.slug }));
}

export default async function CategoryAliasPage({ params }: PageProps) {
  const { category } = await params;
  permanentRedirect(`/packaging-categories/${category}`);
}
