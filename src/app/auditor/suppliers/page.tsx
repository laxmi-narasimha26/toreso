import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, CheckCircle2, Clock, Star, ClipboardCheck, ArrowRight } from "lucide-react";

const suppliers = [
    { id: "1", name: "Apex Packaging Pvt Ltd", location: "Gurugram, Haryana", audits: 3, lastAudit: "Feb 15, 2026", status: "compliant", rating: 96 },
    { id: "2", name: "PolyCraft India", location: "Surat, Gujarat", audits: 2, lastAudit: "In Progress", status: "in_review", rating: null },
    { id: "3", name: "SafeWrap Co.", location: "Pune, Maharashtra", audits: 1, lastAudit: "Jan 20, 2026", status: "minor_nc", rating: 78 },
    { id: "4", name: "SecurePack Ltd.", location: "Chennai, Tamil Nadu", audits: 2, lastAudit: "Jan 30, 2026", status: "compliant", rating: 92 },
];

const statusConfig: Record<string, { label: string, class: string }> = {
    compliant: { label: "Fully Compliant", class: "bg-emerald-100 text-emerald-700" },
    in_review: { label: "Under Review", class: "bg-amber-100 text-amber-700" },
    minor_nc: { label: "Minor Non-Conformance", class: "bg-orange-100 text-orange-700" },
};

export default function AuditorSuppliersPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Supplier Profiles</h1>
                    <p className="text-muted-foreground mt-1">All supplier organizations assigned to your audit jurisdiction.</p>
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                {suppliers.map(s => (
                    <Card key={s.id} className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                                        <Building2 className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">{s.name}</h3>
                                        <p className="text-xs text-slate-500 flex items-center mt-0.5"><MapPin className="w-3 h-3 mr-0.5" />{s.location}</p>
                                    </div>
                                </div>
                                <Badge className={`${statusConfig[s.status].class} border-0 shadow-none text-[10px] font-semibold mt-1`}>
                                    {statusConfig[s.status].label}
                                </Badge>
                            </div>

                            <div className="grid grid-cols-3 gap-3 mb-4">
                                <div className="bg-slate-50 rounded-lg p-3 text-center">
                                    <p className="text-lg font-bold text-slate-900">{s.audits}</p>
                                    <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider">Total Audits</p>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-3 text-center">
                                    <p className="text-sm font-bold text-slate-700">{s.lastAudit}</p>
                                    <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider">Last Audit</p>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-3 text-center">
                                    {s.rating ? (
                                        <>
                                            <p className="text-lg font-bold text-indigo-600">{s.rating}<span className="text-xs text-slate-400">/100</span></p>
                                            <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider">Score</p>
                                        </>
                                    ) : (
                                        <p className="text-xs text-slate-400 mt-2">Pending</p>
                                    )}
                                </div>
                            </div>

                            <Button variant="outline" size="sm" className="w-full border-slate-300 text-xs h-8">
                                <ClipboardCheck className="w-3.5 h-3.5 mr-1.5" /> View Audit History <ArrowRight className="w-3 h-3 ml-1" />
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
