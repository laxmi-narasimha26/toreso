import { permanentRedirect } from "next/navigation";
import { innovationProducts } from "@/data/innovationCatalog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return innovationProducts.map((product) => ({ slug: product.slug }));
}

export default async function ProductAliasPage({ params }: PageProps) {
  const { slug } = await params;
  permanentRedirect(`/products/${slug}`);
}
