"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, SlidersHorizontal, Package, Building2, Star, MapPin, CheckCircle2, ArrowRight, X } from "lucide-react";
import Link from "next/link";

const mockProducts = [
    { id: "1", name: "Heavy Duty Corrugated Box 5-Ply", category: "Corrugated Boxes", supplier: "Apex Packaging", price: "₹48/unit", moq: "500 units", rating: 4.8, reviews: 120 },
    { id: "2", name: "BOPP Laminated Woven Bags 50kg", category: "Woven Bags", supplier: "PolyCraft India", price: "₹22/unit", moq: "1,000 units", rating: 4.5, reviews: 84 },
    { id: "3", name: "Bubble Wrap Roll 50m x 1.2m", category: "Protective Packaging", supplier: "SafeWrap Co.", price: "₹380/roll", moq: "20 rolls", rating: 4.9, reviews: 210 },
    { id: "4", name: "PET Strapping Rolls 19mm", category: "Strapping", supplier: "SecurePack Ltd.", price: "₹1,200/roll", moq: "10 rolls", rating: 4.7, reviews: 56 },
];

const mockSuppliers = [
    { id: "1", name: "Apex Packaging Pvt Ltd", location: "Gurugram, Haryana", type: "Manufacturer", rating: 4.9, products: 142, verified: true },
    { id: "2", name: "PolyCraft India", location: "Surat, Gujarat", type: "Manufacturer & Exporter", rating: 4.7, products: 68, verified: true },
    { id: "3", name: "SafeWrap Co.", location: "Pune, Maharashtra", type: "Manufacturer", rating: 4.8, products: 35, verified: true },
];

const filters = ["Corrugated Boxes", "Flexible Packaging", "Woven Bags", "Strapping", "Protective Packaging", "Labels & Stickers"];

export default function BuyerSearchPage() {
    const [query, setQuery] = useState("");
    const [activeFilters, setActiveFilters] = useState<string[]>([]);

    const toggleFilter = (f: string) =>
        setActiveFilters(prev => prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]);

    return (
        <div className="flex-col pb-12">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Advanced Search</h1>
                <p className="text-muted-foreground mt-1">Find products, categories, or verified suppliers across the network.</p>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search products, categories, or suppliers..."
                    className="pl-12 h-14 text-base rounded-xl border-slate-200 shadow-sm focus:border-teal-400 focus:ring-teal-400/20 bg-white"
                />
                <Button className="absolute right-2 top-2 h-10 bg-teal-600 hover:bg-teal-700 text-white px-6 rounded-lg">
                    Search
                </Button>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
                <div className="flex items-center text-sm font-medium text-slate-500 mr-2">
                    <SlidersHorizontal className="w-4 h-4 mr-1.5" /> Filter:
                </div>
                {filters.map(f => (
                    <button
                        key={f}
                        onClick={() => toggleFilter(f)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${activeFilters.includes(f)
                            ? "bg-teal-600 text-white border-teal-600 shadow-sm"
                            : "bg-white text-slate-600 border-slate-200 hover:border-teal-400"}`}
                    >
                        {f}
                        {activeFilters.includes(f) && <X className="inline w-3 h-3 ml-1" />}
                    </button>
                ))}
            </div>

            <Tabs defaultValue="products">
                <TabsList className="bg-slate-100 p-1 mb-6">
                    <TabsTrigger value="products" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                        <Package className="w-4 h-4 mr-2" /> Products
                    </TabsTrigger>
                    <TabsTrigger value="suppliers" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                        <Building2 className="w-4 h-4 mr-2" /> Suppliers
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="products">
                    <div className="grid gap-4 md:grid-cols-2">
                        {mockProducts.map(product => (
                            <Card key={product.id} className="shadow-sm border-slate-200 hover:border-teal-300 hover:shadow-md transition-all group">
                                <CardContent className="p-5 flex justify-between items-start gap-4">
                                    <div className="flex-1">
                                        <Badge className="bg-slate-100 text-slate-600 border-0 shadow-none text-[10px] mb-2">{product.category}</Badge>
                                        <h3 className="font-bold text-slate-900 mb-1 group-hover:text-teal-700 transition-colors">{product.name}</h3>
                                        <p className="text-xs text-slate-500 mb-3">by {product.supplier}</p>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center">
                                                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 mr-1" />
                                                <span className="text-xs font-semibold text-slate-700">{product.rating}</span>
                                                <span className="text-xs text-slate-400 ml-1">({product.reviews})</span>
                                            </div>
                                            <span className="text-xs text-slate-400">MOQ: {product.moq}</span>
                                        </div>
                                    </div>
                                    <div className="text-right shrink-0">
                                        <p className="text-lg font-bold text-slate-900">{product.price}</p>
                                        <Link href={`/buyer/product/${product.id}`}>
                                            <Button size="sm" className="mt-2 bg-teal-600 hover:bg-teal-700 text-white h-8 text-xs">View</Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="suppliers">
                    <div className="space-y-4">
                        {mockSuppliers.map(supplier => (
                            <Card key={supplier.id} className="shadow-sm border-slate-200 hover:border-teal-300 hover:shadow-md transition-all group">
                                <CardContent className="p-5 flex justify-between items-center gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center border border-teal-100 shrink-0">
                                            <Building2 className="w-6 h-6 text-teal-600" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-0.5">
                                                <h3 className="font-bold text-slate-900">{supplier.name}</h3>
                                                {supplier.verified && <CheckCircle2 className="w-4 h-4 text-teal-500" />}
                                            </div>
                                            <div className="flex items-center gap-3 text-xs text-slate-500">
                                                <span className="flex items-center"><MapPin className="w-3 h-3 mr-0.5" />{supplier.location}</span>
                                                <span>•</span>
                                                <span>{supplier.type}</span>
                                                <span>•</span>
                                                <span>{supplier.products} SKUs</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 shrink-0">
                                        <div className="flex items-center">
                                            <Star className="w-4 h-4 text-amber-400 fill-amber-400 mr-1" />
                                            <span className="font-bold text-slate-800">{supplier.rating}</span>
                                        </div>
                                        <Link href={`/buyer/suppliers/${supplier.id}`}>
                                            <Button variant="outline" size="sm" className="border-slate-300 h-8 text-xs">
                                                View Profile <ArrowRight className="w-3 h-3 ml-1" />
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
