"use client";

import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Trash2, ShoppingCart, ArrowRight, Package, Truck, Info, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function CartPage() {
    const { items, removeItem, updateQuantity } = useCartStore();

    const groupedItems = items.reduce((acc, item) => {
        if (!acc[item.supplierId]) {
            acc[item.supplierId] = {
                supplierName: item.supplierName,
                items: []
            };
        }
        acc[item.supplierId].items.push(item);
        return acc;
    }, {} as Record<string, { supplierName: string, items: typeof items }>);

    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const taxes = subtotal * 0.18; // 18% GST mock
    const total = subtotal + taxes;

    return (
        <div className="flex-col pb-12">
            <div className="mb-8">
                <div className="flex items-center text-sm text-slate-500 mb-2">
                    <Link href="/buyer/catalog" className="hover:text-teal-600">Catalog</Link>
                    <ChevronRight className="w-4 h-4 mx-1" />
                    <span className="text-slate-900 font-medium">Shopping Cart</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
                    <ShoppingCart className="h-8 w-8 text-teal-600" />
                    Your Cart
                </h1>
            </div>

            {items.length === 0 ? (
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-16 text-center">
                    <div className="mx-auto w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                        <ShoppingCart className="h-10 w-10 text-slate-300" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
                    <p className="text-slate-500 mb-8 max-w-md mx-auto">Looks like you haven't added any products to your cart yet. Browse our catalog to discover premium packaging solutions.</p>
                    <Link href="/buyer/catalog">
                        <Button size="lg" className="bg-teal-600 hover:bg-teal-700 h-12 px-8">Browse Catalog</Button>
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-2/3 space-y-6">
                        {Object.entries(groupedItems).map(([supplierId, group]) => (
                            <Card key={supplierId} className="shadow-sm border-slate-200 overflow-hidden">
                                <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Package className="w-4 h-4 text-slate-500" />
                                        <span className="font-semibold text-slate-900">Sold by: {group.supplierName}</span>
                                    </div>
                                    <Badge variant="outline" className="bg-white text-slate-600 font-normal">
                                        <Truck className="w-3 h-3 mr-1 inline-block" /> Ships in 3-5 days
                                    </Badge>
                                </div>
                                <CardContent className="p-0">
                                    <ul className="divide-y divide-slate-100">
                                        {group.items.map((item) => (
                                            <li key={item.id} className="p-6 flex flex-col sm:flex-row gap-6">
                                                <div className="w-24 h-24 bg-slate-100 rounded-md border border-slate-200 flex-shrink-0 overflow-hidden">
                                                    <img src={item.imageUrl || "https://images.unsplash.com/photo-1605600659873-d808a1fae464?w=500&q=80"} alt={item.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-1 flex flex-col justify-between">
                                                    <div className="flex justify-between items-start gap-4">
                                                        <div>
                                                            <Link href={`/buyer/product/${item.id}`} className="hover:text-teal-600 transition-colors">
                                                                <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1">{item.name}</h3>
                                                            </Link>
                                                            <p className="text-sm text-slate-500">SKU: {item.sku}</p>
                                                            <div className="mt-2 flex items-center gap-2 text-xs">
                                                                <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-50">MOQ: {item.minOrderQuantity}</Badge>
                                                                <span className="text-amber-600 flex items-center"><Info className="w-3 h-3 mr-1" /> Volume discount eligible</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="text-lg font-bold text-slate-900">
                                                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: item.currency }).format(item.price * item.quantity)}
                                                            </p>
                                                            <p className="text-sm text-slate-500 mt-1">
                                                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: item.currency }).format(item.price)} / unit
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-between mt-4">
                                                        <div className="flex items-center border border-slate-200 rounded-md bg-white">
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                className="h-8 w-8 rounded-none border-r border-slate-200 hover:bg-slate-50 hover:text-teal-600 focus:ring-0"
                                                                onClick={() => updateQuantity(item.id, Math.max(item.minOrderQuantity, item.quantity - 100))}
                                                                disabled={item.quantity <= item.minOrderQuantity}
                                                            >
                                                                -
                                                            </Button>
                                                            <Input
                                                                type="number"
                                                                className="w-20 rounded-none border-0 text-center h-8 focus-visible:ring-0 focus-visible:ring-offset-0 px-2"
                                                                value={item.quantity}
                                                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || item.minOrderQuantity)}
                                                            />
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                className="h-8 w-8 rounded-none border-l border-slate-200 hover:bg-slate-50 hover:text-teal-600 focus:ring-0"
                                                                onClick={() => updateQuantity(item.id, item.quantity + 100)}
                                                            >
                                                                +
                                                            </Button>
                                                        </div>
                                                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50" onClick={() => removeItem(item.id)}>
                                                            <Trash2 className="h-4 w-4 mr-2" />
                                                            Remove
                                                        </Button>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}

                        <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                            <Button variant="outline" className="text-slate-600">Export Cart (CSV)</Button>
                            <Button variant="ghost" className="text-slate-500 hover:text-red-600">Empty Cart</Button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3">
                        <div className="sticky top-6 space-y-4">
                            <Card className="shadow-sm border-slate-200">
                                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                                    <CardTitle className="text-lg">Order Summary</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex justify-between text-sm text-slate-600">
                                        <span>Subtotal ({items.reduce((sum, i) => sum + i.quantity, 0)} items)</span>
                                        <span className="font-medium text-slate-900">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(subtotal)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-slate-600">
                                        <span>Estimated Taxes (GST 18%)</span>
                                        <span className="font-medium text-slate-900">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(taxes)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-slate-600">
                                        <span>Shipping</span>
                                        <span className="text-teal-600 font-medium">Calculated at checkout</span>
                                    </div>

                                    <Separator className="my-4" />

                                    <div className="flex justify-between text-lg font-bold text-slate-900">
                                        <span>Total</span>
                                        <span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(total)}</span>
                                    </div>
                                    <p className="text-xs text-slate-500 text-right mt-1">Excluding shipping charges</p>
                                </CardContent>
                                <CardFooter className="p-6 pt-0 flex-col gap-4">
                                    <Link href="/buyer/checkout" className="w-full">
                                        <Button className="w-full h-12 text-lg bg-teal-600 hover:bg-teal-700 shadow-sm shadow-teal-500/20">
                                            Proceed to Checkout <ArrowRight className="w-5 h-5 ml-2" />
                                        </Button>
                                    </Link>

                                    <div className="w-full mt-2">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Input placeholder="Have a promotional code?" className="h-10 text-sm" />
                                            <Button variant="outline" className="h-10">Apply</Button>
                                        </div>
                                    </div>
                                </CardFooter>
                            </Card>

                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 text-sm text-blue-800">
                                <Info className="w-5 h-5 flex-shrink-0 text-blue-600" />
                                <p>Need custom printing or specific modifications? <Link href="/buyer/rfq/create" className="font-bold underline hover:text-blue-900">Request a Custom Quote</Link> instead of checking out.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
