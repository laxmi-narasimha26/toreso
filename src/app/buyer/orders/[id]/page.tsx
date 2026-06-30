import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Package, Truck, Receipt, CheckCircle2, ChevronLeft, MapPin, Building, AlertCircle, FileText, Download } from "lucide-react";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default async function BuyerOrderDetailPage({ params }: { params: { id: string } }) {
    const { userId } = await auth();

    const order = await db.order.findUnique({
        where: { id: params.id },
        include: {
            supplier: true,
            buyer: true,
            order_items: {
                include: { product: true }
            }
        }
    });

    if (!order) return notFound();

    // Determine active step
    const getStepStatus = (status: string) => {
        const flow = ['pending', 'confirmed', 'shipped', 'delivered'];
        const currentIndex = flow.indexOf(status);
        return (stepIndex: number) => {
            if (currentIndex === -1) return 'pending'; // cancelled etc
            if (stepIndex < currentIndex) return 'completed';
            if (stepIndex === currentIndex) return 'active';
            return 'pending';
        };
    };

    const statusFn = getStepStatus(order.status);

    const timelineSteps = [
        { title: "Order Placed", desc: new Date(order.created_at).toLocaleDateString(), status: statusFn(0) },
        { title: "Confirmed", desc: "Supplier accepted", status: statusFn(1) },
        { title: "Shipped", desc: order.tracking_number ? "In transit" : "Awaiting dispatch", status: statusFn(2) },
        { title: "Delivered", desc: "Package received", status: statusFn(3) }
    ];

    return (
        <div className="flex-col pb-12 max-w-6xl mx-auto">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <Link href="/buyer/orders" className="text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center mb-2">
                        <ChevronLeft className="w-4 h-4 mr-1" /> Back to Orders
                    </Link>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
                        Order {order.order_number}
                        <Badge variant="outline" className={`
                      ${order.status === 'delivered' ? 'bg-green-100 text-green-700 border-green-200' :
                                order.status === 'shipped' ? 'bg-blue-100 text-blue-700 border-blue-200' :
                                    order.status === 'cancelled' ? 'bg-red-100 text-red-700 border-red-200' :
                                        'bg-amber-100 text-amber-700 border-amber-200'}
                  `}>{order.status.toUpperCase()}</Badge>
                    </h1>
                    <p className="text-muted-foreground mt-1">Placed on {new Date(order.created_at).toLocaleString('en-IN')}</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="text-slate-600 border-slate-200">
                        <FileText className="w-4 h-4 mr-2" /> Download PO
                    </Button>
                    <Button className="bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900">
                        <Download className="w-4 h-4 mr-2" /> Download Invoice
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-12">
                {/* Main Content */}
                <div className="col-span-12 md:col-span-8 space-y-6">

                    {/* Status Timeline */}
                    {order.status !== 'cancelled' && (
                        <Card className="shadow-sm border-slate-200">
                            <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
                                <CardTitle className="text-lg flex items-center"><Truck className="w-5 h-5 mr-2 text-teal-600" /> Tracking & Status</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-8 pb-8 px-8">
                                <div className="relative">
                                    <div className="absolute top-5 left-6 right-6 h-1 rounded-full bg-slate-100 z-0"></div>
                                    <div className="absolute top-5 left-6 h-1 rounded-full bg-teal-500 z-0 transition-all duration-500"
                                        style={{ width: `${['pending', 'confirmed', 'shipped', 'delivered'].indexOf(order.status) * 33.33}%` }}></div>

                                    <div className="flex justify-between relative z-10">
                                        {timelineSteps.map((step, idx) => (
                                            <div key={idx} className="flex flex-col items-center">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 ${step.status === 'completed' ? 'bg-teal-500 border-white text-white shadow-md' :
                                                    step.status === 'active' ? 'bg-white border-teal-500 text-teal-600 shadow-md ring-4 ring-teal-50' :
                                                        'bg-white border-slate-200 text-slate-300'
                                                    }`}>
                                                    {step.status === 'completed' ? <CheckCircle2 className="w-5 h-5" /> : <div className="w-2.5 h-2.5 rounded-full bg-current"></div>}
                                                </div>
                                                <div className="mt-3 text-center">
                                                    <p className={`text-sm font-bold ${step.status !== 'pending' ? 'text-slate-900' : 'text-slate-400'}`}>{step.title}</p>
                                                    <p className={`text-xs mt-1 ${step.status !== 'pending' ? 'text-slate-500' : 'text-slate-300'}`}>{step.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Items List */}
                    <Card className="shadow-sm border-slate-200 overflow-hidden">
                        <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
                            <CardTitle className="text-lg flex items-center"><Package className="w-5 h-5 mr-2 text-teal-600" /> Order Items ({order.order_items.length})</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader className="bg-slate-50/50 text-xs uppercase tracking-wider text-slate-500 font-semibold">
                                    <TableRow>
                                        <TableHead className="px-6 py-3">Product</TableHead>
                                        <TableHead className="text-right">Price</TableHead>
                                        <TableHead className="text-center">Qty</TableHead>
                                        <TableHead className="text-right px-6">Subtotal</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {order.order_items.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell className="px-6 py-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-slate-100 rounded border border-slate-200 shrink-0">
                                                        <img src="https://images.unsplash.com/photo-1605600659873-d808a1fae464?w=100&q=80" alt={item.product.name} className="w-full h-full object-cover rounded" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900 leading-tight">{item.product.name}</p>
                                                        <p className="text-xs text-slate-500 mt-1">SKU: {item.product.sku}</p>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right text-slate-600">
                                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(Number(item.unit_price))}
                                            </TableCell>
                                            <TableCell className="text-center font-medium text-slate-900">
                                                {item.quantity}
                                            </TableCell>
                                            <TableCell className="text-right px-6 font-bold text-slate-900">
                                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(Number(item.total_price))}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Sidebar */}
                <div className="col-span-12 md:col-span-4 space-y-6">
                    {/* Payment Summary */}
                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
                            <CardTitle className="text-lg flex items-center"><Receipt className="w-5 h-5 mr-2 text-teal-600" /> Payment Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-600">Subtotal</span>
                                <span className="font-medium text-slate-900">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(Number(order.total_amount) * 0.82)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-600">Taxes (18%)</span>
                                <span className="font-medium text-slate-900">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(Number(order.total_amount) * 0.18)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-600">Shipping</span>
                                <span className="font-medium text-slate-900">₹0.00</span>
                            </div>
                            <Separator className="my-2" />
                            <div className="flex justify-between items-center text-lg font-bold text-slate-900">
                                <span>Total</span>
                                <span className="text-teal-700">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(Number(order.total_amount))}</span>
                            </div>
                        </CardContent>
                        <CardFooter className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50 mt-4 flex-col gap-2">
                            <Button className="w-full bg-teal-600 hover:bg-teal-700">Pay Now (Net 30)</Button>
                            <Button variant="outline" className="w-full text-slate-600">View Invoice PDF</Button>
                        </CardFooter>
                    </Card>

                    {/* Delivery Info */}
                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
                            <CardTitle className="text-lg flex items-center"><MapPin className="w-5 h-5 mr-2 text-teal-600" /> Delivery Details</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-4">
                            <div>
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Delivery Address</p>
                                <p className="font-medium text-slate-900">North Manufacturing Plant</p>
                                <p className="text-sm text-slate-600 mt-1 leading-relaxed">Plot 45, Industrial Area Phase 1<br />Gurugram, Haryana 122016<br />India</p>
                            </div>
                            <Separator />
                            <div>
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Tracking Information</p>
                                {order.tracking_number ? (
                                    <div className="flex items-center justify-between bg-blue-50 border border-blue-100 p-3 rounded-md">
                                        <div>
                                            <p className="text-xs text-blue-600 font-medium">Bluedart Logistics</p>
                                            <p className="text-sm font-bold text-slate-900 mt-0.5">{order.tracking_number}</p>
                                        </div>
                                        <Button size="sm" variant="outline" className="bg-white border-blue-200 text-blue-700 hover:bg-blue-100">Track</Button>
                                    </div>
                                ) : (
                                    <p className="text-sm text-slate-500 flex items-center">
                                        <AlertCircle className="w-4 h-4 mr-1.5 text-amber-500" /> Not shipped yet
                                    </p>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Supplier Info */}
                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
                            <CardTitle className="text-lg flex items-center"><Building className="w-5 h-5 mr-2 text-teal-600" /> Supplier Information</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p className="font-bold text-slate-900">{order.supplier.display_name}</p>
                            <p className="text-sm text-slate-600 mt-1">Verified Premium Partner</p>
                            <div className="mt-4 flex gap-2">
                                <Button variant="outline" size="sm" className="w-full text-slate-600">Contact</Button>
                                <Button variant="outline" size="sm" className="w-full text-slate-600">View Profile</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
