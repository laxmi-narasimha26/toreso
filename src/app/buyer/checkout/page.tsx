"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, Truck, Building, Building2, CreditCard, CheckCircle2, Factory } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

export default function CheckoutPage() {
    const { items, clearCart } = useCartStore();
    const [step, setStep] = useState(1);
    const router = useRouter();

    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const taxes = subtotal * 0.18;
    const shipping = 2500; // Mock fixed shipping
    const total = subtotal + taxes + shipping;

    const handlePlaceOrder = () => {
        // In real app, call API to create order, process payment, etc.
        clearCart();
        setStep(4); // Success step
    };

    if (items.length === 0 && step !== 4) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <Link href="/buyer/catalog"><Button>Return to Catalog</Button></Link>
            </div>
        );
    }

    const steps = [
        { id: 1, name: "Delivery Details", icon: Truck },
        { id: 2, name: "Review Orders", icon: CheckCircle2 },
        { id: 3, name: "Payment Method", icon: CreditCard },
    ];

    return (
        <div className="flex-col pb-12 max-w-6xl mx-auto">
            {step < 4 && (
                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Secure Checkout</h1>

                    {/* Stepper */}
                    <div className="flex items-center justify-between relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 z-0 rounded-full"></div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-teal-500 z-0 rounded-full transition-all duration-300" style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}></div>

                        {steps.map((s) => (
                            <div key={s.id} className="relative z-10 flex flex-col items-center gap-2">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${step > s.id ? 'bg-teal-500 border-teal-500 text-white' :
                                        step === s.id ? 'bg-white border-teal-500 text-teal-600' :
                                            'bg-white border-slate-200 text-slate-400'
                                    }`}>
                                    {step > s.id ? <Check className="w-5 h-5" /> : <s.icon className="w-5 h-5" />}
                                </div>
                                <span className={`text-xs font-semibold ${step >= s.id ? 'text-slate-900' : 'text-slate-400'}`}>{s.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {step === 4 ? (
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-12 text-center max-w-2xl mx-auto mt-12">
                    <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Order Placed Successfully!</h2>
                    <p className="text-slate-500 mb-6">Your order <span className="font-mono font-medium text-slate-900 bg-slate-100 px-2 py-1 rounded">ORD-2026-9081</span> has been confirmed. You will receive an email confirmation shortly.</p>

                    <div className="bg-slate-50 rounded-lg p-6 mb-8 text-left border border-slate-100">
                        <h3 className="font-semibold text-slate-900 mb-2">What happens next?</h3>
                        <ul className="text-sm text-slate-600 space-y-2 list-disc pl-4">
                            <li>The supplier will review and confirm packaging requirements.</li>
                            <li>You will be notified once the production begins.</li>
                            <li>Estimated dispatch date: <span className="font-medium text-slate-900">Oct 28, 2026</span></li>
                        </ul>
                    </div>

                    <div className="flex gap-4 justify-center">
                        <Link href="/buyer/orders">
                            <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">View Order Details</Button>
                        </Link>
                        <Link href="/buyer/dashboard">
                            <Button className="bg-teal-600 hover:bg-teal-700">Return to Dashboard</Button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Steps Content */}
                    <div className="w-full lg:w-2/3">
                        {step === 1 && (
                            <Card className="shadow-sm border-slate-200">
                                <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                                    <CardTitle className="text-xl flex items-center"><Factory className="w-5 h-5 mr-2 text-teal-600" /> Select Delivery Location</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6 space-y-6">
                                    <RadioGroup defaultValue="plant-1" className="grid gap-4 md:grid-cols-2">
                                        <Label htmlFor="plant-1" className="cursor-pointer">
                                            <div className="border border-slate-200 rounded-xl p-4 flex gap-4 hover:border-teal-500 [&:has(:checked)]:border-teal-500 [&:has(:checked)]:bg-teal-50 transition-colors">
                                                <RadioGroupItem value="plant-1" id="plant-1" className="mt-1" />
                                                <div>
                                                    <p className="font-bold text-slate-900 flex items-center">North Manufacturing Plant <Badge variant="secondary" className="ml-2 text-[10px] bg-blue-100 text-blue-700">Primary</Badge></p>
                                                    <p className="text-sm text-slate-500 mt-1 leading-snug">Plot 45, Industrial Area Phase 1<br />Gurugram, Haryana 122016<br />India</p>
                                                    <p className="text-xs font-semibold text-slate-600 mt-2 flex items-center"><Building2 className="w-3 h-3 mr-1" /> Receiving Dock B</p>
                                                </div>
                                            </div>
                                        </Label>
                                        <Label htmlFor="plant-2" className="cursor-pointer">
                                            <div className="border border-slate-200 rounded-xl p-4 flex gap-4 hover:border-teal-500 [&:has(:checked)]:border-teal-500 [&:has(:checked)]:bg-teal-50 transition-colors">
                                                <RadioGroupItem value="plant-2" id="plant-2" className="mt-1" />
                                                <div>
                                                    <p className="font-bold text-slate-900">South Regional Warehouse</p>
                                                    <p className="text-sm text-slate-500 mt-1 leading-snug">Logistics Park, Block C<br />Chennai, Tamil Nadu 600001<br />India</p>
                                                </div>
                                            </div>
                                        </Label>
                                    </RadioGroup>

                                    <Button variant="outline" className="w-full border-dashed border-2 hover:bg-slate-50 text-slate-600">
                                        + Add New Delivery Location
                                    </Button>

                                    <Separator />

                                    <div className="space-y-3">
                                        <Label className="text-base font-semibold">Delivery Instructions (Optional)</Label>
                                        <Textarea placeholder="E.g., Require palletized delivery, specific gate entry timings..." className="resize-none" />
                                    </div>
                                </CardContent>
                                <CardFooter className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50 mt-4 flex justify-end">
                                    <Button onClick={() => setStep(2)} className="bg-teal-600 hover:bg-teal-700">Continue to Review <ArrowRight className="w-4 h-4 ml-2" /></Button>
                                </CardFooter>
                            </Card>
                        )}

                        {step === 2 && (
                            <Card className="shadow-sm border-slate-200">
                                <CardHeader className="border-b border-slate-100 bg-slate-50/50 flex flex-row items-center justify-between">
                                    <CardTitle className="text-xl flex items-center"><Package className="w-5 h-5 mr-2 text-teal-600" /> Review Order Items</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <ul className="divide-y divide-slate-100">
                                        {items.map((item) => (
                                            <li key={item.id} className="p-6 flex flex-col sm:flex-row gap-4 items-center">
                                                <div className="w-16 h-16 bg-slate-100 rounded border border-slate-200 overflow-hidden">
                                                    <img src={item.imageUrl || "https://images.unsplash.com/photo-1605600659873-d808a1fae464?w=500&q=80"} alt={item.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-slate-900 leading-tight">{item.name}</h3>
                                                    <p className="text-xs text-slate-500">Sold by {item.supplierName}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold text-slate-900">{item.quantity} units</p>
                                                    <p className="text-sm font-semibold text-teal-700">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: item.currency }).format(item.price * item.quantity)}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50 mt-0 flex justify-between items-center">
                                    <Button variant="ghost" onClick={() => setStep(1)} className="text-slate-500">Back</Button>
                                    <Button onClick={() => setStep(3)} className="bg-teal-600 hover:bg-teal-700">Continue to Payment <ArrowRight className="w-4 h-4 ml-2" /></Button>
                                </CardFooter>
                            </Card>
                        )}

                        {step === 3 && (
                            <Card className="shadow-sm border-slate-200">
                                <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                                    <CardTitle className="text-xl flex items-center"><CreditCard className="w-5 h-5 mr-2 text-teal-600" /> Select Payment Method</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6 space-y-6">
                                    <RadioGroup defaultValue="credit" className="space-y-4">
                                        <Label htmlFor="credit" className="cursor-pointer">
                                            <div className="border border-slate-200 rounded-xl p-4 flex items-center gap-4 hover:border-teal-500 [&:has(:checked)]:border-teal-500 [&:has(:checked)]:bg-teal-50 transition-colors">
                                                <RadioGroupItem value="credit" id="credit" />
                                                <div className="flex-1 flex justify-between items-center">
                                                    <div>
                                                        <p className="font-bold text-slate-900 flex items-center">Net 30/60/90 Credit Terms <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700 text-[10px]">Pre-approved</Badge></p>
                                                        <p className="text-sm text-slate-500 mt-0.5">Pay via bank transfer after delivery based on agreed terms.</p>
                                                    </div>
                                                    <Building className="w-8 h-8 text-slate-300" />
                                                </div>
                                            </div>
                                        </Label>
                                        <Label htmlFor="card" className="cursor-pointer">
                                            <div className="border border-slate-200 rounded-xl p-4 flex items-center gap-4 hover:border-teal-500 [&:has(:checked)]:border-teal-500 [&:has(:checked)]:bg-teal-50 transition-colors">
                                                <RadioGroupItem value="card" id="card" />
                                                <div className="flex-1 flex justify-between items-center">
                                                    <div>
                                                        <p className="font-bold text-slate-900">Credit / Debit Card</p>
                                                        <p className="text-sm text-slate-500 mt-0.5">Pay securely now via Stripe/Razorpay.</p>
                                                    </div>
                                                    <CreditCard className="w-8 h-8 text-slate-300" />
                                                </div>
                                            </div>
                                        </Label>
                                    </RadioGroup>

                                    <div className="bg-amber-50 rounded-lg p-4 border border-amber-100 flex gap-3 text-sm text-amber-800 mt-6">
                                        <Info className="w-5 h-5 flex-shrink-0 text-amber-600 mt-0.5" />
                                        <p>By placing this order, you agree to our <Link href="#" className="underline font-bold">B2B Terms of Service</Link> and the supplier's specific return policies.</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50 mt-4 flex justify-between items-center">
                                    <Button variant="ghost" onClick={() => setStep(2)} className="text-slate-500">Back</Button>
                                    <Button onClick={handlePlaceOrder} className="bg-teal-600 hover:bg-teal-700 h-12 px-8 text-lg shadow-lg shadow-teal-500/30">Place Order - {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(total)}</Button>
                                </CardFooter>
                            </Card>
                        )}
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="w-full lg:w-1/3">
                        <div className="sticky top-6">
                            <Card className="shadow-sm border-slate-200 bg-slate-50/50">
                                <CardHeader className="pb-4 border-b border-slate-200/60 bg-white rounded-t-xl">
                                    <CardTitle className="text-lg">Order Summary</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex justify-between text-sm text-slate-600">
                                        <span>Subtotal</span>
                                        <span className="font-medium text-slate-900">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(subtotal)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-slate-600">
                                        <span>Estimated Taxes (18%)</span>
                                        <span className="font-medium text-slate-900">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(taxes)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-slate-600">
                                        <span>Freight & Shipping</span>
                                        <span className="font-medium text-slate-900">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(shipping)}</span>
                                    </div>

                                    <Separator className="my-4 border-slate-200" />

                                    <div className="flex justify-between text-xl font-bold text-slate-900">
                                        <span>Total</span>
                                        <span className="text-teal-700">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(total)}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
