import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Building2, CheckCircle2, ShieldAlert, FileText, Globe, MapPin, Mail, Phone, Calendar, Download } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface VerificationReviewProps {
    params: {
        id: string;
    };
}

export default async function AdminSupplierReviewPage({ params }: VerificationReviewProps) {
    const org = await db.organization.findUnique({
        where: { id: params.id }
    });

    if (!org) notFound();

    return (
        <div className="flex-col pb-12 max-w-5xl mx-auto">
            <div className="mb-6">
                <Link href="/admin/suppliers/verification" className="text-sm text-slate-500 hover:text-slate-900 flex items-center mb-4">
                    <ArrowLeft className="w-4 h-4 mr-1" /> Back to Verification Queue
                </Link>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-3xl font-bold tracking-tight text-slate-900">{org.display_name}</h1>
                            <Badge className={`${org.status === 'pending' ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' :
                                    org.status === 'active' ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' :
                                        'bg-rose-100 text-rose-700 hover:bg-rose-200'
                                } border-0 shadow-none capitalize font-semibold tracking-wide text-[10px]`}>
                                {org.status}
                            </Badge>
                        </div>
                        <p className="text-sm text-slate-500 flex items-center">
                            <Calendar className="w-4 h-4 mr-1.5" /> Applied on {new Date(org.created_at).toLocaleDateString()}
                        </p>
                    </div>
                    {org.status === 'pending' && (
                        <div className="flex gap-3">
                            <Button variant="outline" className="border-rose-200 text-rose-600 hover:bg-rose-50 shadow-sm">
                                Reject App
                            </Button>
                            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm font-semibold">
                                <CheckCircle2 className="w-4 h-4 mr-2" /> Approve Supplier
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="border-b border-slate-100 bg-slate-50/50 py-4">
                            <CardTitle className="text-lg flex items-center">
                                <Building2 className="w-5 h-5 mr-2 text-blue-500" /> Company Profile Details
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Legal Entity Name</h4>
                                    <p className="font-semibold text-slate-900">{org.display_name} Pvt Ltd</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Business Type</h4>
                                    <p className="font-semibold text-slate-900">Manufacturer & Exporter</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tax ID (GSTIN)</h4>
                                    <p className="font-mono bg-slate-100 px-2 py-1 rounded inline-block text-sm">07AAAAA0000A1Z5</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Website</h4>
                                    <a href="#" className="font-semibold text-blue-600 flex items-center hover:underline">
                                        <Globe className="w-3 h-3 mr-1" /> www.{org.display_name.toLowerCase().replace(/\s+/g, '')}.in
                                    </a>
                                </div>
                                <div className="col-span-2">
                                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Registered Address</h4>
                                    <div className="flex items-start text-sm text-slate-700 bg-slate-50 p-3 rounded border border-slate-100">
                                        <MapPin className="w-4 h-4 mr-2 text-slate-400 mt-0.5 shrink-0" />
                                        <span>Plot 45, Udyog Vihar Phase IV, Sector 18, Gurugram, Haryana 122015, India</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="border-b border-slate-100 bg-slate-50/50 py-4">
                            <CardTitle className="text-lg flex items-center">
                                <FileText className="w-5 h-5 mr-2 text-indigo-500" /> KYC & Compliance Documents
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="divide-y divide-slate-100">
                                {[
                                    { name: 'Certificate of Incorporation', type: 'COI_Scan.pdf', status: 'verified', date: 'Oct 12, 2026' },
                                    { name: 'GST Registration Certificate', type: 'GST_Reg.pdf', status: 'verified', date: 'Oct 12, 2026' },
                                    { name: 'Bank Account Confirmation', type: 'Bank_Letter.pdf', status: 'pending', date: 'Oct 13, 2026' },
                                ].map((doc, idx) => (
                                    <div key={idx} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-indigo-50 rounded flex items-center justify-center shrink-0">
                                                <FileText className="w-5 h-5 text-indigo-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-900 text-sm">{doc.name}</h4>
                                                <p className="text-xs text-slate-500">{doc.type} • Uploaded {doc.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            {doc.status === 'verified' ? (
                                                <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-none"><CheckCircle2 className="w-3 h-3 mr-1" /> Verified</Badge>
                                            ) : (
                                                <Badge className="bg-amber-50 text-amber-700 border border-amber-200 shadow-none"><ShieldAlert className="w-3 h-3 mr-1" /> Pending Check</Badge>
                                            )}
                                            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-blue-600">
                                                <Download className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    <Card className="shadow-sm border-slate-200 bg-slate-50/50">
                        <CardHeader className="py-4">
                            <CardTitle className="text-sm font-bold uppercase tracking-wider text-slate-500">Primary Contact</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="font-bold text-slate-900">Rahul Sharma</h4>
                                <p className="text-sm text-slate-500">Director of Sales</p>
                            </div>
                            <Separator className="bg-slate-200" />
                            <div className="space-y-3">
                                <a href="mailto:rahul@example.com" className="flex items-center text-sm text-blue-600 hover:underline">
                                    <Mail className="w-4 h-4 mr-2 text-slate-400" /> rahul@{org.display_name.toLowerCase().replace(/\s+/g, '')}.in
                                </a>
                                <a href="tel:+919876543210" className="flex items-center text-sm text-slate-700 hover:text-slate-900">
                                    <Phone className="w-4 h-4 mr-2 text-slate-400" /> +91 98765 43210
                                </a>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="bg-amber-50 border-b border-amber-100 py-3">
                            <CardTitle className="text-sm font-bold text-amber-900 flex items-center">
                                <ShieldAlert className="w-4 h-4 mr-2" /> Admin Review Notes
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 bg-amber-50/50">
                            <p className="text-sm text-amber-800 leading-relaxed italic">
                                "GSTIN verified successfully on Govt portal. Awaiting manual confirmation of the bank letter from finance team before final approval."
                            </p>
                            <p className="text-xs text-amber-600/70 mt-3 font-medium text-right">— System Auto-Check</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
