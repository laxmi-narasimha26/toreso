import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Clock, ShoppingCart, Truck, CreditCard, Building2, MapPin, CheckCircle2, Package, Download, Phone, Mail, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface SupplierOrderDetailPageProps {
    params: {
        id: string;
    };
}

export default async function SupplierOrderDetailPage({ params }: SupplierOrderDetailPageProps) {
    const isMock = params.id.startsWith('mock-');

    let order = null;
    if (!isMock) {
        order = await db.order.findUnique({
            where: { id: params.id },
            include: {
                buyer: true,
                items: { include: { product: true } }
            }
        });
        if (!order) notFound();
    }

    const orderId = isMock ? `PO-2026-89${params.id.split('-')[1]}` : `PO-${params.id.substring(0, 8).toUpperCase()}`;
    const status = order ? order.status : (isMock && params.id.includes('1') ? 'pending' : 'processing');
    const total = order ? Number(order.total_amount) : 12400;
    const items = order ? order.items : [
        { id: 'i1', product: { name: 'Premium Heavy Duty Corrugated Box (3-Ply)', sku: 'CBX-3P-HD-001' }, quantity: 5000, unit_price: 2.00, total_price: 10000 },
        { id: 'i2', product: { name: 'Kraft Packaging Tape (50m)', sku: 'TAPE-KFT-50' }, quantity: 1200, unit_price: 2.00, total_price: 2400 }
    ];
    const buyerName = order?.buyer?.display_name || "Zenith Corp India";
    const statusText = status === 'pending' ? 'Requires Action' : (status === 'processing' ? 'In Production' : status);

    return (
        <div className="flex-col pb-12 max-w-6xl mx-auto">
            <div className="mb-6">
                <Link href="/supplier/orders" className="text-sm text-slate-500 hover:text-slate-900 flex items-center mb-4">
                    <ArrowLeft className="w-4 h-4 mr-1" /> Back to Orders
                </Link>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-3xl font-bold tracking-tight text-slate-900">{orderId}</h1>
                            <Badge className={status === 'pending' ? 'bg-amber-100 text-amber-700 hover:bg-amber-200 border-0 shadow-none' : 'bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 shadow-none'}>
                                {statusText.toUpperCase()}
                            </Badge>
                        </div>
                        <p className="text-sm text-slate-500 flex items-center">
                            <Clock className="w-4 h-4 mr-1.5" /> Ordered on {new Date().toLocaleDateString()} by {buyerName}
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" className="bg-white border-slate-200 text-slate-700 shadow-sm">
                            <Download className="w-4 h-4 mr-2" /> Download PO
                        </Button>
                        {status === 'pending' ? (
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white shadow-sm font-semibold">
                                Accept Order
                            </Button>
                        ) : (
                            <Button className="bg-slate-900 hover:bg-slate-800 text-white shadow-sm font-semibold">
                                Generate Manifest
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Update Status Bar */}
                    <Card className="shadow-sm border-blue-200 bg-blue-50/50">
                        <CardContent className="p-4 flex items-center justify-between">
                            <div className="flex items-center">
                                {status === 'pending' ? (
                                    <>
                                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-4 shrink-0">
                                            <AlertCircle className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900 text-sm">Action Required</h4>
                                            <p className="text-xs text-slate-600">Please accept the PO to begin production and set delivery dates.</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 shrink-0">
                                            <Package className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900 text-sm">Order in Production</h4>
                                            <p className="text-xs text-slate-600">Update status when items are ready to ship.</p>
                                        </div>
                                    </>
                                )}
                            </div>
                            {status === 'processing' && (
                                <div className="flex gap-2">
                                    <Select defaultValue="processing">
                                        <SelectTrigger className="w-[180px] h-9 text-sm bg-white border-blue-200 shadow-sm">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="processing">In Production</SelectItem>
                                            <SelectItem value="ready">Ready for Pickup</SelectItem>
                                            <SelectItem value="shipped">In Transit</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Update</Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Order Items */}
                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="border-b border-slate-100 bg-slate-50/50 py-4">
                            <CardTitle className="text-lg flex items-center">
                                <Package className="w-5 h-5 text-indigo-500 mr-2" /> Ordered Items
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="divide-y divide-slate-100">
                                {items.map((item, idx) => (
                                    <div key={idx} className="p-6 flex flex-col sm:flex-row gap-6 hover:bg-slate-50 transition-colors">
                                        <div className="w-16 h-16 bg-slate-100 rounded-lg border border-slate-200 shrink-0 flex items-center justify-center">
                                            <Package className="w-6 h-6 text-slate-300" />
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <h4 className="font-bold text-slate-900 text-base">{item.product.name}</h4>
                                            <p className="text-sm text-slate-500 font-mono">SKU: {item.product.sku || `SKU-${idx}0912`}</p>
                                            <div className="flex items-center text-sm text-slate-600 mt-2">
                                                <Badge variant="secondary" className="bg-white border border-slate-200 shadow-sm mr-2">{item.quantity} Units</Badge>
                                                <span>@ ₹{Number(item.unit_price).toFixed(2)} / unit</span>
                                            </div>
                                        </div>
                                        <div className="sm:text-right">
                                            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Subtotal</p>
                                            <p className="text-lg font-bold text-slate-900">₹{Number(item.total_price).toLocaleString()}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Fulfillment & Logistics */}
                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="border-b border-slate-100 bg-slate-50/50 py-4 flex flex-row justify-between items-center">
                            <CardTitle className="text-lg flex items-center">
                                <Truck className="w-5 h-5 text-amber-500 mr-2" /> Shipping Details
                            </CardTitle>
                            <Button variant="ghost" size="sm" className="text-orange-600 h-8">Edit Tracking</Button>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Deliver To</h4>
                                    <div className="bg-slate-50 border border-slate-100 rounded-lg p-4">
                                        <p className="font-bold text-slate-900 mb-1">{buyerName}</p>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Plot 45, Udyog Vihar Phase IV<br />
                                            Sector 18, Gurugram<br />
                                            Haryana 122015<br />
                                            India
                                        </p>
                                        <div className="mt-3 pt-3 border-t border-slate-200 space-y-2">
                                            <p className="text-sm text-slate-600 flex items-center"><Phone className="w-3 h-3 mr-2" /> +91 98765 43210</p>
                                            <p className="text-sm text-slate-600 flex items-center"><Mail className="w-3 h-3 mr-2" /> receiving@zenith.in</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Logistics Provider</h4>
                                        <p className="font-semibold text-slate-900">Delhivery (B2B Standard)</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tracking Number</h4>
                                        {status === 'pending' ? (
                                            <p className="text-sm text-slate-400 italic">Not generated yet</p>
                                        ) : (
                                            <div className="flex items-center">
                                                <p className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">DEL-8902112344</p>
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Expected Dispatch</h4>
                                        <p className="font-semibold text-slate-900 flex items-center">
                                            <Calendar className="w-4 h-4 mr-1.5 text-slate-400" /> +7 Days from Approval
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column - Financials */}
                <div className="space-y-6">
                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="border-b border-slate-100 bg-slate-50/50 py-4">
                            <CardTitle className="text-lg flex items-center">
                                <CreditCard className="w-5 h-5 text-emerald-500 mr-2" /> Order Financials
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-4">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-600">Subtotal</span>
                                <span className="font-medium text-slate-900">₹{total.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-600 flex items-center">Tax (GST 18%)</span>
                                <span className="font-medium text-slate-900">₹{(total * 0.18).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-600">Shipping (DDP)</span>
                                <span className="font-medium text-slate-900">₹1,200.00</span>
                            </div>
                            <Separator className="bg-slate-200 my-2" />
                            <div className="flex justify-between items-center">
                                <span className="text-base font-bold text-slate-900">Total</span>
                                <span className="text-xl font-bold text-slate-900">₹{(total * 1.18 + 1200).toLocaleString()}</span>
                            </div>

                            <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                                <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">Payment Terms</h4>
                                <p className="font-semibold text-emerald-900">Net 30 Days</p>
                                <p className="text-xs text-emerald-700 mt-1 pb-2 mb-2 border-b border-emerald-200/50">Post delivery confirmation</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-emerald-800">Status</span>
                                    <Badge className="bg-emerald-200 text-emerald-800 hover:bg-emerald-200 shadow-none border-0 uppercase text-[10px]">Awaiting Fulf.</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="border-b border-slate-100 bg-slate-50/50 py-4">
                            <CardTitle className="text-base flex items-center">Buyer Notes</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4">
                            <p className="text-sm text-slate-600 italic">
                                "Please ensure all boxes are securely palletized and moisture-wrapped. Delivery window is 9 AM - 4 PM on weekdays only. Call warehouse manager 1 hour before arrival."
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
