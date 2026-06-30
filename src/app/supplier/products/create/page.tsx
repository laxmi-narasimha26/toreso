import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Package, DollarSign, Image as ImageIcon, Truck, ListChecks, ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

export default async function CreateProductPage() {
    const { userId } = await auth();

    let categories = [];
    try {
        categories = await db.category.findMany({
            where: { is_active: true }
        });
    } catch (e) { console.error(e) }

    return (
        <div className="flex-col pb-12 max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <Link href="/supplier/products" className="text-sm text-slate-500 hover:text-slate-900 flex items-center mb-2">
                        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Products
                    </Link>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Add New Product</h1>
                    <p className="text-muted-foreground mt-1">Create a comprehensive product listing to attract buyers.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="text-slate-600">
                        Save as Draft
                    </Button>
                    <Button className="bg-orange-500 hover:bg-orange-600 shadow-sm font-semibold text-white">
                        <Save className="w-4 h-4 mr-2" /> Publish Product
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Basic Information */}
                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                            <div className="flex items-center">
                                <Package className="w-5 h-5 text-orange-500 mr-2" />
                                <div>
                                    <CardTitle className="text-lg">Basic Information</CardTitle>
                                    <CardDescription>Essential details about the product.</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-slate-700 font-semibold">Product Title <span className="text-red-500">*</span></Label>
                                <Input id="name" name="name" placeholder="e.g., Heavy Duty Double Wall Corrugated Box" className="border-slate-300" required />
                                <p className="text-[11px] text-slate-500">Use a clear, descriptive title to help buyers find your product.</p>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="category" className="text-slate-700 font-semibold">Category <span className="text-red-500">*</span></Label>
                                    <Select name="category_id" required>
                                        <SelectTrigger className="border-slate-300">
                                            <SelectValue placeholder="Select Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categories.length > 0 ? categories.map(c => (
                                                <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                                            )) : (
                                                <>
                                                    <SelectItem value="c1">Corrugated Boxes</SelectItem>
                                                    <SelectItem value="c2">Flexible Packaging</SelectItem>
                                                    <SelectItem value="c3">Rigid Packaging</SelectItem>
                                                    <SelectItem value="c4">Tapes & Adhesives</SelectItem>
                                                </>
                                            )}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="sku" className="text-slate-700 font-semibold">SKU / Internal Code</Label>
                                    <Input id="sku" name="sku" placeholder="e.g., HD-CBX-001" className="border-slate-300" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description" className="text-slate-700 font-semibold">Product Description <span className="text-red-500">*</span></Label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    placeholder="Provide detailed information about materials, use cases, and benefits..."
                                    className="min-h-[150px] border-slate-300 resize-none"
                                    required
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Pricing & Inventory */}
                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                            <div className="flex items-center">
                                <DollarSign className="w-5 h-5 text-emerald-500 mr-2" />
                                <div>
                                    <CardTitle className="text-lg">Pricing & Inventory</CardTitle>
                                    <CardDescription>Set your base price, volume discounts, and stock levels.</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="price" className="text-slate-700 font-semibold">Base Price (Per Unit) <span className="text-red-500">*</span></Label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-slate-500 font-medium">₹</span>
                                        </div>
                                        <Input id="price" name="base_price" type="number" step="0.01" min="0" placeholder="0.00" className="pl-8 border-slate-300" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="min_order" className="text-slate-700 font-semibold">Minimum Order Quantity (MOQ) <span className="text-red-500">*</span></Label>
                                    <Input id="min_order" name="min_order_quantity" type="number" min="1" defaultValue="500" className="border-slate-300" required />
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100">
                                <h4 className="text-sm font-semibold text-slate-700 mb-4">Volume Discount Tiers (Optional)</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-4">
                                        <div className="flex-1">
                                            <Input placeholder="Quantity (e.g., 5000+)" className="border-slate-300 text-sm" />
                                        </div>
                                        <div className="flex-1 relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="text-slate-500 font-medium text-sm">₹</span>
                                            </div>
                                            <Input placeholder="Price per unit" className="pl-8 border-slate-300 text-sm" />
                                        </div>
                                        <Button variant="ghost" size="sm" className="text-rose-500 hover:bg-rose-50 hover:text-rose-600 px-2">Remove</Button>
                                    </div>
                                    <Button variant="outline" size="sm" className="mt-2 text-orange-600 border-orange-200 hover:bg-orange-50 bg-white shadow-none border-dashed border-2 w-full h-10">
                                        + Add Tier
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Technical Specifications */}
                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                            <div className="flex items-center">
                                <ListChecks className="w-5 h-5 text-blue-500 mr-2" />
                                <div>
                                    <CardTitle className="text-lg">Technical Specs</CardTitle>
                                    <CardDescription>Detailed dimensions, weight, and materials.</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <Label className="text-slate-700 text-xs font-bold uppercase tracking-wider">Length (mm)</Label>
                                    <Input type="number" placeholder="0" className="border-slate-300" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-slate-700 text-xs font-bold uppercase tracking-wider">Width (mm)</Label>
                                    <Input type="number" placeholder="0" className="border-slate-300" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-slate-700 text-xs font-bold uppercase tracking-wider">Depth (mm)</Label>
                                    <Input type="number" placeholder="0" className="border-slate-300" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label className="text-slate-700 text-xs font-bold uppercase tracking-wider">Material Grade</Label>
                                    <Select>
                                        <SelectTrigger className="border-slate-300">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">Kraft Paper (Virgin)</SelectItem>
                                            <SelectItem value="2">Test Liner (Recycled)</SelectItem>
                                            <SelectItem value="3">Fluting Medium</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-slate-700 text-xs font-bold uppercase tracking-wider">Certifications</Label>
                                    <Select>
                                        <SelectTrigger className="border-slate-300">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">FSC Certified</SelectItem>
                                            <SelectItem value="2">ISO 9001</SelectItem>
                                            <SelectItem value="3">RoHS Compliant</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column - Secondary Settings */}
                <div className="space-y-6">
                    {/* Media Upload */}
                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                            <div className="flex items-center">
                                <ImageIcon className="w-5 h-5 text-purple-500 mr-2" />
                                <div>
                                    <CardTitle className="text-lg">Product Media</CardTitle>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group mb-4 relative overflow-hidden">
                                <div className="w-12 h-12 bg-white shadow-sm border border-slate-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                    <ImageIcon className="w-5 h-5 text-slate-400" />
                                </div>
                                <p className="text-sm font-semibold text-slate-700 mb-1">Click to upload Main Image</p>
                                <p className="text-[11px] text-slate-500">PNG, JPG up to 5MB</p>
                                <Input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" />
                            </div>

                            <div className="grid grid-cols-4 gap-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="aspect-square bg-slate-100 rounded border border-slate-200 flex items-center justify-center cursor-pointer hover:bg-slate-200 transition-colors relative">
                                        <span className="text-slate-400 text-xl font-light">+</span>
                                        <Input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Logistics */}
                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                            <div className="flex items-center">
                                <Truck className="w-5 h-5 text-amber-500 mr-2" />
                                <div>
                                    <CardTitle className="text-lg">Logistics</CardTitle>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 space-y-4">
                            <div className="space-y-2">
                                <Label className="text-slate-700 font-semibold text-sm">Standard Lead Time (Days)</Label>
                                <Input type="number" defaultValue="14" className="border-slate-300" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-slate-700 font-semibold text-sm">Ships From (Plant)</Label>
                                <Select defaultValue="1">
                                    <SelectTrigger className="border-slate-300">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">North Manufacturing Unit (Gurugram)</SelectItem>
                                        <SelectItem value="2">South Warehouse (Chennai)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center mt-4 pt-4 border-t border-slate-100">
                                <input type="checkbox" id="sample" className="w-4 h-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500" />
                                <Label htmlFor="sample" className="ml-2 font-medium text-slate-700 cursor-pointer text-sm">Free Samples Available</Label>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
