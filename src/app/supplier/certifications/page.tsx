import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Plus, Upload, AlertCircle, CheckCircle2, Clock, Calendar, Download, ExternalLink } from "lucide-react";

const certifications = [
    { id: 1, name: "ISO 9001:2015", body: "Bureau Veritas", type: "Quality Management", issued: "Jan 15, 2024", expiry: "Jan 14, 2027", status: "active", score: 98 },
    { id: 2, name: "ISO 14001:2015", body: "SGS India", type: "Environmental Management", issued: "Mar 1, 2024", expiry: "Feb 28, 2027", status: "active", score: 94 },
    { id: 3, name: "FSC Chain of Custody", body: "SCS Global", type: "Sustainability", issued: "Jun 10, 2023", expiry: "Jun 9, 2026", status: "active", score: 100 },
    { id: 4, name: "BIS Certification - Grade A Corrugated", body: "Bureau of Indian Standards", type: "Product Standard", issued: "Sep 5, 2022", expiry: "Sep 4, 2025", status: "expired", score: null },
    { id: 5, name: "SA8000 Social Accountability", body: "SAAS", type: "Social Compliance", issued: null, expiry: null, status: "pending", score: null },
];

const statusConfig: Record<string, { label: string, icon: React.ElementType, badgeClass: string }> = {
    active: { label: "Active", icon: CheckCircle2, badgeClass: "bg-emerald-100 text-emerald-700" },
    expired: { label: "Expired", icon: AlertCircle, badgeClass: "bg-rose-100 text-rose-700" },
    pending: { label: "In Progress", icon: Clock, badgeClass: "bg-amber-100 text-amber-700" },
};

export default function SupplierCertificationsPage() {
    const active = certifications.filter(c => c.status === "active").length;
    const expired = certifications.filter(c => c.status === "expired").length;

    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Certifications</h1>
                    <p className="text-muted-foreground mt-1">Manage your quality, environmental, and compliance certifications to build buyer trust.</p>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white shadow-sm font-semibold">
                    <Plus className="w-4 h-4 mr-2" /> Add Certification
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="shadow-sm border-slate-200 border-l-4 border-l-emerald-500">
                    <CardContent className="p-5">
                        <p className="text-sm font-medium text-slate-500">Active Certifications</p>
                        <p className="text-3xl font-bold text-slate-900 mt-1">{active}</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200 border-l-4 border-l-rose-500">
                    <CardContent className="p-5">
                        <p className="text-sm font-medium text-slate-500">Expired / Needs Renewal</p>
                        <p className="text-3xl font-bold text-slate-900 mt-1">{expired}</p>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200 border-l-4 border-l-amber-500">
                    <CardContent className="p-5">
                        <p className="text-sm font-medium text-slate-500">Trust Score</p>
                        <p className="text-3xl font-bold text-emerald-600 mt-1">92 / 100</p>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-4">
                {certifications.map(cert => {
                    const cfg = statusConfig[cert.status];
                    const Icon = cfg.icon;
                    return (
                        <Card key={cert.id} className={`shadow-sm transition-colors ${cert.status === 'expired' ? 'border-rose-100 bg-rose-50/20' : 'border-slate-200'}`}>
                            <CardContent className="p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${cert.status === 'active' ? 'bg-emerald-50 border border-emerald-100' : cert.status === 'expired' ? 'bg-rose-50 border border-rose-100' : 'bg-amber-50 border border-amber-100'}`}>
                                        <ShieldCheck className={`w-6 h-6 ${cert.status === 'active' ? 'text-emerald-600' : cert.status === 'expired' ? 'text-rose-600' : 'text-amber-600'}`} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-bold text-slate-900">{cert.name}</h3>
                                            <Badge className={`${cfg.badgeClass} border-0 shadow-none text-[10px] font-semibold`}>
                                                <Icon className="w-3 h-3 mr-1" /> {cfg.label}
                                            </Badge>
                                        </div>
                                        <p className="text-sm text-slate-600">{cert.type} • Issued by: {cert.body}</p>
                                        {cert.issued && (
                                            <p className="text-xs text-slate-500 mt-1 flex items-center">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {cert.issued} → {cert.expiry}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 shrink-0">
                                    {cert.status === 'expired' ? (
                                        <Button size="sm" className="bg-rose-600 hover:bg-rose-700 text-white text-xs h-8">
                                            <Upload className="w-3.5 h-3.5 mr-1.5" /> Renew Now
                                        </Button>
                                    ) : cert.status === 'pending' ? (
                                        <Button size="sm" variant="outline" className="border-slate-300 text-xs h-8">
                                            <Upload className="w-3.5 h-3.5 mr-1.5" /> Upload Cert
                                        </Button>
                                    ) : (
                                        <Button size="sm" variant="ghost" className="text-slate-500 text-xs h-8">
                                            <Download className="w-3.5 h-3.5 mr-1.5" /> Download
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
