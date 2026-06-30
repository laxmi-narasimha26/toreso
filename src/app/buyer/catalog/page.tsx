import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { ProductCard } from "@/components/shared/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, ChevronDown, List, Grid, BookmarkPlus, BellRing } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default async function BuyerCatalogPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const { userId } = await auth();

    // Real filtering logic would use searchParams
    const q = typeof searchParams.q === 'string' ? searchParams.q : '';
    const categoryId = typeof searchParams.category === 'string' ? searchParams.category : undefined;

    let whereClause: any = { status: 'active' };

    if (q) {
        whereClause.name = { contains: q, mode: 'insensitive' };
    }

    if (categoryId) {
        whereClause.category_id = categoryId;
    }

    let products: any[] = [];
    let categories: any[] = [];
    try {
        products = await db.product.findMany({
            where: whereClause,
            include: {
                category: true,
                supplier: {
                    include: {
                        supplier_profile: true
                    }
                }
            },
            take: 24,
        });

        categories = await db.category.findMany({ where: { is_active: true } });
    } catch (e) {
        console.error(e);
        // Fallback demo categories when DB is unavailable
        categories = [
            { id: "1", name: "Corrugated Boxes", is_active: true },
            { id: "2", name: "Flexible Packaging", is_active: true },
            { id: "3", name: "Labels & Tags", is_active: true },
            { id: "4", name: "Rigid Boxes", is_active: true },
            { id: "5", name: "Carry Bags", is_active: true },
            { id: "6", name: "Industrial Packaging", is_active: true },
            { id: "7", name: "Printed Packaging", is_active: true },
        ];
    }

    return (
        <div className="flex-col pb-12">
            {/* Header & Global Search Bar */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Product Catalog</h1>
                        <p className="text-muted-foreground text-sm mt-1">Discover, compare, and source packaging solutions.</p>
                    </div>

                    <div className="flex-1 max-w-xl flex gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input placeholder="Search by name, SKU, or supplier..." className="pl-9 bg-slate-50 border-slate-200" defaultValue={q} />
                        </div>
                        <Button className="bg-teal-600 hover:bg-teal-700">Search</Button>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="hidden lg:flex">
                            <BookmarkPlus className="h-4 w-4 mr-2 text-slate-500" /> Save Search
                        </Button>
                        <Button variant="outline" size="sm" className="hidden lg:flex">
                            <BellRing className="h-4 w-4 mr-2 text-slate-500" /> Price Alerts
                        </Button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Sidebar - Filters */}
                <div className="w-full lg:w-64 flex-shrink-0 space-y-6">
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-slate-900 flex items-center">
                                <SlidersHorizontal className="h-4 w-4 mr-2" /> Filters
                            </h3>
                            <Button variant="link" size="sm" className="text-teal-600 h-auto p-0 text-xs">Clear All</Button>
                        </div>

                        <Separator className="my-4" />

                        {/* Category Filter */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium text-slate-900">Categories</h4>
                            <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar pr-2">
                                {categories.map(cat => (
                                    <div key={cat.id} className="flex items-center space-x-2">
                                        <Checkbox id={`cat-${cat.id}`} />
                                        <Label htmlFor={`cat-${cat.id}`} className="text-sm font-normal text-slate-600 cursor-pointer">{cat.name}</Label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Separator className="my-4" />

                        {/* Price Range */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium text-slate-900">Price Range (INR)</h4>
                            <div className="flex items-center gap-2">
                                <Input type="number" placeholder="Min" className="h-8 text-sm" />
                                <span className="text-slate-400">-</span>
                                <Input type="number" placeholder="Max" className="h-8 text-sm" />
                            </div>
                        </div>

                        <Separator className="my-4" />

                        {/* Minimum Order Quantity */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium text-slate-900">MOQ</h4>
                            <div className="space-y-2">
                                {["< 100 units", "100 - 1,000 units", "1,000 - 10,000 units", "> 10,000 units"].map((range, i) => (
                                    <div key={i} className="flex items-center space-x-2">
                                        <Checkbox id={`moq-${i}`} />
                                        <Label htmlFor={`moq-${i}`} className="text-sm font-normal text-slate-600">{range}</Label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Separator className="my-4" />

                        {/* Certifications (Mock) */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium text-slate-900">Certifications</h4>
                            <div className="space-y-2">
                                {["FSC Certified", "ISO 9001", "FDA Approved", "Biodegradable"].map((cert, i) => (
                                    <div key={cert} className="flex items-center space-x-2">
                                        <Checkbox id={`cert-${i}`} />
                                        <Label htmlFor={`cert-${i}`} className="text-sm font-normal text-slate-600">{cert}</Label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Separator className="my-4" />

                        {/* Supplier Rating */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium text-slate-900">Supplier Rating</h4>
                            <div className="space-y-2">
                                {[4, 3, 2, 1].map((stars) => (
                                    <div key={stars} className="flex items-center space-x-2">
                                        <Checkbox id={`star-${stars}`} />
                                        <Label htmlFor={`star-${stars}`} className="text-sm font-normal text-slate-600 flex items-center">
                                            {stars} Stars & Up
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1">
                    {/* Top Bar (Sort & View Toggle) */}
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white p-3 rounded-lg border border-slate-200 shadow-sm gap-4">
                        <div className="text-sm text-slate-500 font-medium">
                            Showing <span className="font-bold text-slate-900">{products.length}</span> products
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-slate-500 whitespace-nowrap">Sort by:</span>
                                <Select defaultValue="relevance">
                                    <SelectTrigger className="w-[160px] h-8 text-sm bg-slate-50">
                                        <SelectValue placeholder="Sort By" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="relevance">Relevance</SelectItem>
                                        <SelectItem value="price_asc">Price: Low to High</SelectItem>
                                        <SelectItem value="price_desc">Price: High to Low</SelectItem>
                                        <SelectItem value="rating">Highest Rated</SelectItem>
                                        <SelectItem value="newest">Newest Arrivals</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="hidden sm:flex items-center border border-slate-200 rounded-md overflow-hidden bg-slate-50">
                                <button className="p-1.5 bg-white text-teal-600 shadow-sm">
                                    <Grid className="w-4 h-4" />
                                </button>
                                <button className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors">
                                    <List className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    {products.length === 0 ? (
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-12 text-center">
                            <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex flex-col items-center justify-center mb-4">
                                <Search className="w-8 h-8 text-slate-400" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">No products found</h3>
                            <p className="text-slate-500 mb-6 max-w-md mx-auto">Try adjusting your filters or search query to find what you're looking for.</p>
                            <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">Clear All Filters</Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                            {products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                // We'll pass extra props if we update ProductCard to support rich features
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
