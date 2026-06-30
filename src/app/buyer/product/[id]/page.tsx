import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Truck, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";

interface ProductPageProps {
    params: {
        id: string;
    };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const product = await db.product.findUnique({
        where: { id: params.id },
        include: {
            category: true,
            supplier: {
                include: {
                    supplier_profile: true
                }
            }
        }
    });

    if (!product) {
        notFound();
    }

    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {/* Image Gallery (Placeholder) */}
                <div className="space-y-4">
                    <div className="relative aspect-square bg-white rounded-lg border overflow-hidden">
                        {product.images && product.images.length > 0 ? (
                            <Image
                                src={product.images[0]}
                                alt={product.name}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full text-gray-300 bg-gray-50">
                                No Image Available
                            </div>
                        )}
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {/* Thumbnail placeholders */}
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-square bg-gray-100 rounded-md cursor-pointer hover:ring-2 ring-primary/50"></div>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{product.category.name}</Badge>
                            <div className="text-sm text-green-600 font-medium flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                In Stock
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                        <div className="flex items-center gap-2 mt-2">
                            <p className="text-sm text-muted-foreground">Sold by </p>
                            <Link href={`/buyer/supplier/${product.supplier.id}`} className="text-sm font-medium text-primary hover:underline">
                                {product.supplier.display_name}
                            </Link>
                        </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                        <p className="text-3xl font-bold text-teal-700">
                            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: product.currency }).format(Number(product.base_price))}
                            <span className="text-sm text-gray-500 font-normal ml-2">/ unit</span>
                        </p>
                        <p className="text-sm text-gray-500">Minimum Order Quantity: {product.min_order_quantity} units</p>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg flex flex-col gap-3">
                            <h3 className="font-semibold text-blue-900">Purchase Options</h3>
                            <div className="flex gap-3">
                                <Button className="flex-1 bg-teal-600 hover:bg-teal-700">Buy Now</Button>
                                <Button variant="outline" className="flex-1 border-teal-600 text-teal-600 hover:bg-teal-50">Request Quote</Button>
                            </div>
                            <p className="text-xs text-blue-700 text-center">
                                Bulk discounts available for orders over 1000 units.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                            <Truck className="w-4 h-4" />
                            <span>Standard Shipping</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Verified Supplier</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>Lead Time: 5-7 days</span>
                        </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Description</h3>
                        <div className="prose prose-sm text-gray-600 max-w-none">
                            {product.description || "No detailed description provided."}
                        </div>
                    </div>

                    {/* Specifications */}
                    {product.specifications && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Specifications</h3>
                            <div className="grid grid-cols-1 gap-y-2">
                                {Object.entries(product.specifications as Record<string, any>).map(([key, value]) => (
                                    <div key={key} className="grid grid-cols-3 border-b py-2">
                                        <span className="font-medium text-gray-600">{key}</span>
                                        <span className="col-span-2 text-gray-900">{String(value)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
