import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Building2, MapPin, Calendar, Boxes, FileText, Send, Clock, DollarSign, Target, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface SupplierRfqDetailPageProps {
    params: {
        id: string;
    };
}

async function submitQuoteAction(formData: FormData) {
    "use server";
    console.log("Submitting quote...");
}

export default async function SupplierRfqDetailPage({ params }: SupplierRfqDetailPageProps) {
    // Handling mock ID for presentation
    const isMock = params.id.startsWith('mock-');

    let rfq = null;
    if (!isMock) {
        rfq = await db.rfq.findUnique({
            where: { id: params.id },
            include: {
                category: true,
                buyer: { select: { display_name: true } }
            }
        });
        if (!rfq) notFound();
    }

    const title = rfq?.title || "500,000 Custom Printed Mailer Boxes (Monthly)";
    const category = rfq?.category?.name || "Corrugated Boxes";
    const buyerName = rfq?.buyer?.display_name || "Zenith Retail India";
    const quantity = rfq?.quantity || 500000;
    const deadline = rfq?.response_deadline ? new Date(rfq.response_deadline).toLocaleDateString() : new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString();
    const description = rfq?.product_description || "Looking for a reliable supplier to provide 500k units monthly of 3-ply corrugated mailer boxes. E-flute, 150 GSM Kraft top liner, 1-color black flexo print with our branding and handling instructions.\n\nBoxes must pass standard drop tests and be bundled in packs of 50. We require JIT delivery to our Gurugram facility. Looking for a 12-month contract lock-in for pricing.";

    return (
        <div className="flex-col pb-12 max-w-6xl mx-auto">
            <div className="mb-6">
                <Link href="/supplier/rfq" className="text-sm text-slate-500 hover:text-slate-900 flex items-center mb-4">
                    <ArrowLeft className="w-4 h-4 mr-1" /> Back to Opportunities
                </Link>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="bg-blue-50 text-blue-700 font-medium border-0 tracking-wide text-[10px] uppercase">{category}</Badge>
                            <span className="text-xs text-slate-400 font-mono">RFQ-{isMock ? '9021' : params.id.substring(0, 8)}</span>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">{title}</h1>
                        <div className="flex flex-wrap items-center text-sm text-slate-600 gap-4">
                            <span className="flex items-center"><Building2 className="w-4 h-4 mr-1.5 text-slate-400" /> {buyerName}</span>
                            <span className="flex items-center"><MapPin className="w-4 h-4 mr-1.5 text-slate-400" /> Gurugram, HR</span>
                            <span className="flex items-center text-rose-600"><Clock className="w-4 h-4 mr-1.5" /> Closes: {deadline}</span>
                        </div>
                    </div>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white shadow-sm font-semibold shrink-0">
                        Save for Later
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - RFQ Details */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="border-b border-slate-100 bg-slate-50/50 pb-4">
                            <div className="flex items-center">
                                <FileText className="w-5 h-5 text-blue-500 mr-2" />
                                <CardTitle className="text-lg">Requirement Details</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            <div>
                                <h4 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider">Description</h4>
                                <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg text-slate-700 text-sm leading-relaxed whitespace-pre-wrap">
                                    {description}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-y-6 border-t border-slate-100 pt-6">
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Required Volume</h4>
                                    <p className="font-semibold text-slate-900 text-lg">{quantity.toLocaleString()} units</p>
                                    <p className="text-xs text-slate-500">Monthly recurring</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Target Price</h4>
                                    <p className="font-semibold text-slate-900 text-lg">Not Disclosed</p>
                                    <p className="text-xs text-slate-500">Competitive bidding</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Delivery Terms</h4>
                                    <p className="font-semibold text-slate-900 text-lg">DDP</p>
                                    <p className="text-xs text-slate-500">Delivered Duty Paid (Gurugram)</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Payment Terms</h4>
                                    <p className="font-semibold text-slate-900 text-lg">Net 45</p>
                                    <p className="text-xs text-slate-500">From date of invoice</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="border-b border-slate-100 bg-slate-50/50 pb-4">
                            <div className="flex items-center">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
                                <CardTitle className="text-lg">Compliance & Certifications</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                    </div>
                                    <span className="text-sm text-slate-700">ISO 9001:2015 Certification Required</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                    </div>
                                    <span className="text-sm text-slate-700">FSC Mix Certification (Board must be sourced responsibly)</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                    </div>
                                    <span className="text-sm text-slate-700">Vendor must pass facility audit before contract award</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column - Quote Formulation */}
                <div className="space-y-6">
                    <Card className="border-orange-200 shadow-md bg-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
                        <CardHeader className="bg-orange-50/50 border-b border-orange-100 pb-4">
                            <div className="flex items-center">
                                <DollarSign className="w-5 h-5 text-orange-600 mr-2" />
                                <div>
                                    <CardTitle className="text-orange-900 text-lg">Build Your Quote</CardTitle>
                                    <CardDescription className="text-orange-700/70 text-xs mt-1">Submit your most competitive offer.</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <form action={submitQuoteAction} className="space-y-5">
                                <input type="hidden" name="rfq_id" value={params.id} />

                                <div className="space-y-2">
                                    <Label htmlFor="price" className="text-slate-700 font-bold text-sm">Unit Price (INR)</Label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-slate-500 font-medium">₹</span>
                                        </div>
                                        <Input id="price" name="unit_price" type="number" min="0" step="0.01" required placeholder="0.00" className="pl-8 border-slate-300 shadow-sm focus-visible:ring-orange-500" />
                                    </div>
                                    <p className="text-[10px] text-slate-500 font-medium">Total value will be: ₹ - </p>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="tooling" className="text-slate-700 font-bold text-sm">One-time Tooling Cost (Stereo/Die)</Label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-slate-500 font-medium">₹</span>
                                        </div>
                                        <Input id="tooling" name="tooling_cost" type="number" min="0" step="0.01" placeholder="0.00" className="pl-8 border-slate-300 shadow-sm focus-visible:ring-orange-500" />
                                    </div>
                                </div>

                                <Separator className="bg-slate-100" />

                                <div className="space-y-2">
                                    <Label htmlFor="lead_time" className="text-slate-700 font-bold text-sm">Production Lead Time (Days)</Label>
                                    <Input id="lead_time" name="lead_time_days" type="number" min="1" required placeholder="e.g. 14" className="border-slate-300 shadow-sm focus-visible:ring-orange-500" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="valid_until" className="text-slate-700 font-bold text-sm">Quote Valid Until</Label>
                                    <Input id="valid_until" name="valid_until" type="date" required className="border-slate-300 shadow-sm focus-visible:ring-orange-500" defaultValue={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]} />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="comments" className="text-slate-700 font-bold text-sm">Message to Buyer</Label>
                                    <Textarea id="comments" name="comments" placeholder="Highlight why they should choose you, variations in specs, or specific payment requests..." className="resize-none min-h-[100px] border-slate-300 shadow-sm focus-visible:ring-orange-500 text-sm" />
                                </div>

                                <div className="space-y-2 pt-2">
                                    <Label className="text-slate-700 font-bold text-sm">Attachments</Label>
                                    <div className="border border-dashed border-slate-300 p-4 text-center rounded bg-slate-50">
                                        <span className="text-xs text-orange-600 font-semibold cursor-pointer hover:underline">Click to upload</span>
                                        <span className="text-xs text-slate-500 block mt-1">CAD, Dielines, or Corporate Profile (PDF)</span>
                                    </div>
                                </div>

                                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold h-12 mt-6 shadow-md transition-all active:scale-[0.98]">
                                    <Send className="w-4 h-4 mr-2" /> Submit Formal Quote
                                </Button>
                                <p className="text-[10px] text-center text-slate-400 mt-2">By submitting this quote, you agree to Toreso's marketplace terms.</p>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
