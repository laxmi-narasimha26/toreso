import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, FileText, CheckCircle2, ShieldCheck } from "lucide-react";

interface ProductCardProps {
    product: any; // Using any for MVP, should be defined Prisma type
}

export function ProductCard({ product }: ProductCardProps) {
    // Mock image based on category for visual appeal
    const categoryImages: Record<string, string> = {
        'Corrugated Boxes': 'https://images.unsplash.com/photo-1605600659873-d808a1fae464?w=500&q=80',
        'Flexible Packaging': 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&q=80',
        'Primary Packaging (Bottles/Jars)': 'https://images.unsplash.com/photo-1610486689871-3317094d4d54?w=500&q=80',
        // Default fallback
        'default': 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=500&q=80'
    }

    const imageUrl = categoryImages[product.category?.name] || categoryImages['default'];

    return (
        <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-slate-200 group">
            <div className="relative aspect-square w-full bg-slate-100 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm shadow-sm text-xs font-medium border-0">{product.category?.name}</Badge>
                    {/* Mock Certification Badge */}
                    <Badge variant="secondary" className="bg-green-100/90 text-green-800 backdrop-blur-sm shadow-sm text-[10px] font-medium border-0 flex items-center pr-1.5 w-fit">
                        <ShieldCheck className="w-3 h-3 mr-1" /> Verified
                    </Badge>
                </div>

                {/* Quick Actions Overlay (Hidden until hover on desktop) */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                    <Button size="icon" variant="secondary" className="rounded-full shadow-lg bg-white hover:bg-teal-50 hover:text-teal-600 transition-colors" title="Add to Cart">
                        <ShoppingCart className="w-4 h-4" />
                    </Button>
                    <Link href={`/buyer/rfq/create?product=${product.id}`}>
                        <Button size="icon" variant="secondary" className="rounded-full shadow-lg bg-white hover:bg-blue-50 hover:text-blue-600 transition-colors" title="Request Quote">
                            <FileText className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>

            <CardContent className="p-4 flex-1 flex flex-col">
                <div className="flex-1">
                    <Link href={`/buyer/product/${product.id}`} className="hover:text-teal-600 transition-colors">
                        <h3 className="font-bold text-slate-900 line-clamp-2 leading-tight mb-1">{product.name}</h3>
                    </Link>

                    <div className="text-xs text-slate-500 mb-3 flex items-center mt-1">
                        <span>By </span>
                        <span className="font-medium text-slate-700 hover:text-teal-600 hover:underline cursor-pointer ml-1 line-clamp-1">{product.supplier?.display_name || 'Verified Supplier'}</span>
                        {product.supplier?.supplier_profile?.overall_rating && (
                            <span className="ml-2 flex items-center bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold">
                                ★ {product.supplier.supplier_profile.overall_rating}
                            </span>
                        )}
                    </div>

                    <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                        {product.description || `High-quality ${product.name.toLowerCase()} suitable for various industrial applications.`}
                    </p>
                </div>

                <div className="mt-auto">
                    <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-lg font-bold text-slate-900">
                            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: product.currency || 'INR', maximumFractionDigits: 0 }).format(Number(product.base_price))}
                        </span>
                        <span className="text-xs text-slate-500">/ unit</span>
                    </div>
                    <div className="flex items-center text-xs text-slate-500 gap-2 font-medium">
                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600" /> MOQ: {product.min_order_quantity}</span>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="p-4 pt-0 gap-2 border-t border-slate-100 bg-slate-50/50 flex-col sm:flex-row">
                <Link href={`/buyer/product/${product.id}`} className="w-full">
                    <Button variant="outline" className="w-full text-sm font-medium bg-white hover:bg-slate-50 border-slate-200">
                        View Details
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
