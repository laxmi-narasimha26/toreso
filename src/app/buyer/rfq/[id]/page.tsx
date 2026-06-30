import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, XCircle, FileText, Download, Building, MessageSquare, Clock, ShieldCheck, Factory, Calendar, Settings } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default async function BuyerRfqDetailPage({ params }: { params: { id: string } }) {
    const { userId } = await auth();

    const rfq = await db.rfq.findUnique({
        where: { id: params.id },
        include: {
            category: true,
            quotes: {
                include: { supplier: true }
            }
        }
    });

    if (!rfq) return notFound();

    return (
        <div className="flex-col pb-12 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-6 flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">{rfq.title}</h1>
                        {rfq.status === 'published' ? <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-0 shadow-none">Active / Sourcing</Badge> :
                            rfq.status === 'closed' ? <Badge variant="secondary" className="bg-slate-100 text-slate-700 shadow-none">Closed / Awarded</Badge> :
                                <Badge variant="outline" className="text-slate-600 bg-white">Draft</Badge>}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 font-medium">
                        <span className="flex items-center"><FileText className="w-4 h-4 mr-1.5" /> ID: {rfq.id.split('-')[0].toUpperCase()}</span>
                        <span className="flex items-center"><Settings className="w-4 h-4 mr-1.5" /> {rfq.category?.name || 'General Packaging'}</span>
                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" /> Created {new Date(rfq.created_at).toLocaleDateString()}</span>
                        <span className="flex items-center text-amber-600"><Clock className="w-4 h-4 mr-1.5" /> Deadline: {new Date(rfq.deadline).toLocaleDateString()}</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="border-slate-200 text-slate-600">
                        <Download className="w-4 h-4 mr-2" /> Export
                    </Button>
                    {rfq.status === 'published' && (
                        <form action="/api/rfqs/close" method="post" className="inline">
                            <input type="hidden" name="id" value={rfq.id} />
                            <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">Close RFQ Early</Button>
                        </form>
                    )}
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-12">
                {/* Main Content Area */}
                <div className="col-span-12 md:col-span-8 space-y-6">

                    {/* Quotes Comparison Table */}
                    <Card className="shadow-sm border-slate-200 overflow-hidden">
                        <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4 flex flex-row items-center justify-between">
                            <div>
                                <CardTitle className="text-xl">Supplier Quotes</CardTitle>
                                <CardDescription>Compare bids and award the contract.</CardDescription>
                            </div>
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">{rfq.quotes.length} Received</Badge>
                        </CardHeader>
                        <CardContent className="p-0">
                            {rfq.quotes.length === 0 ? (
                                <div className="text-center py-16 px-4">
                                    <Building className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Awaiting Supplier Quotes</h3>
                                    <p className="text-slate-500 max-w-sm mx-auto mb-6">Suppliers are reviewing your RFQ and preparing their bids. You will be notified when quotes arrive.</p>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableHeader className="bg-slate-50/50 text-xs uppercase text-slate-500 tracking-wider">
                                            <TableRow>
                                                <TableHead className="px-6 py-4 font-semibold text-slate-900">Supplier</TableHead>
                                                <TableHead className="font-semibold text-slate-900 text-right">Unit Price</TableHead>
                                                <TableHead className="font-semibold text-slate-900 text-right">Extended Value</TableHead>
                                                <TableHead className="font-semibold text-slate-900 text-center">Lead Time</TableHead>
                                                <TableHead className="font-semibold text-slate-900 px-6 text-right">Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {rfq.quotes.map(quote => (
                                                <TableRow key={quote.id} className="hover:bg-slate-50/50 transition-colors">
                                                    <TableCell className="px-6 py-4">
                                                        <div className="font-bold text-slate-900">{quote.supplier.display_name}</div>
                                                        <div className="text-xs text-slate-500 flex items-center mt-0.5"><ShieldCheck className="w-3 h-3 text-teal-600 mr-1" /> Verified Premium</div>
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        <div className="font-bold text-slate-900">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: quote.currency || 'INR' }).format(Number(quote.price))}</div>
                                                        <div className="text-xs text-slate-500">Excl. taxes</div>
                                                    </TableCell>
                                                    <TableCell className="text-right font-bold text-teal-700">
                                                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: quote.currency || 'INR', maximumFractionDigits: 0 }).format(Number(quote.price) * rfq.quantity)}
                                                    </TableCell>
                                                    <TableCell className="text-center font-medium text-slate-900">
                                                        {quote.lead_time_days} days
                                                    </TableCell>
                                                    <TableCell className="px-6 text-right">
                                                        <div className="flex justify-end gap-2">
                                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600 hover:bg-blue-50 hover:text-blue-700" title="Message Supplier">
                                                                <MessageSquare className="w-4 h-4" />
                                                            </Button>
                                                            {quote.status === 'accepted' ? (
                                                                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Awarded</Badge>
                                                            ) : quote.status === 'rejected' ? (
                                                                <Badge variant="outline" className="text-slate-500">Rejected</Badge>
                                                            ) : (
                                                                rfq.status === 'published' && (
                                                                    <form action="/api/quotes/award" method="post" className="inline">
                                                                        <input type="hidden" name="quoteId" value={quote.id} />
                                                                        <Button size="sm" className="bg-slate-900 hover:bg-slate-800 text-white shadow-sm">Award</Button>
                                                                    </form>
                                                                )
                                                            )}
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            )}
                        </CardContent>

                        {rfq.quotes.length > 0 && rfq.status === 'published' && (
                            <CardFooter className="bg-amber-50 border-t border-amber-100 p-4">
                                <p className="text-sm font-medium text-amber-800 flex items-center">
                                    <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" /> Note: Awarding a contract to a supplier will automatically notify them and move this RFQ to 'Closed' status.
                                </p>
                            </CardFooter>
                        )}
                    </Card>

                    {/* Requirement Details */}
                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
                            <CardTitle className="text-lg">Requirement Specifications</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 border-b border-slate-100">
                                <div>
                                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Target Quantity</p>
                                    <p className="text-xl font-bold text-slate-900">{rfq.quantity.toLocaleString()}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Category</p>
                                    <p className="font-semibold text-slate-900">{rfq.category?.name}</p>
                                </div>
                                <div className="col-span-2">
                                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Expected Delivery Area</p>
                                    <p className="font-semibold text-slate-900">North Manufacturing Plant, Gurugram</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Detailed Description</p>
                                <div className="prose prose-sm max-w-none text-slate-600">
                                    {rfq.description.split('\n').map((line, i) => (
                                        <p key={i} className="mb-2">{line}</p>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Sidebar */}
                <div className="col-span-12 md:col-span-4 space-y-6">
                    <Card className="shadow-sm border-slate-200 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                            <ShieldCheck className="w-32 h-32" />
                        </div>
                        <CardHeader>
                            <CardTitle className="text-lg">Compliance & Needs</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 relative z-10">
                            <div>
                                <p className="text-xs font-semibold text-slate-500 mb-2">MANDATORY CERTIFICATIONS</p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="bg-slate-100 text-slate-700 border-slate-200">ISO 9001:2015</Badge>
                                    <Badge variant="secondary" className="bg-slate-100 text-slate-700 border-slate-200">FSC Validated</Badge>
                                </div>
                            </div>
                            <Separator />
                            <div>
                                <p className="text-xs font-semibold text-slate-500 mb-2">ATTACHMENTS</p>
                                <Button variant="outline" className="w-full justify-start text-slate-600 border-slate-200 hover:bg-slate-50">
                                    <FileText className="w-4 h-4 mr-2" /> dieline_specs_v2.pdf
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm border-slate-200 bg-teal-50 border-teal-100">
                        <CardContent className="p-6">
                            <h3 className="font-bold text-teal-900 mb-2 flex items-center"><Factory className="w-5 h-5 mr-2" /> Toreso Matchmaking</h3>
                            <p className="text-sm text-teal-800 mb-4">Our automated system has notified 14 verified suppliers matching your material and capacity requirements.</p>
                            <Link href="/buyer/suppliers">
                                <Button className="w-full bg-teal-600 hover:bg-teal-700 shadow-sm">Browse Active Suppliers</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
