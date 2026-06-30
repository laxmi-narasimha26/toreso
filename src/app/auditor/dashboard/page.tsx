import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Clock, CheckCircle2, AlertCircle, Calendar, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

const upcomingAudits = [
    { id: "AUD-2026-019", supplier: "Apex Packaging Pvt Ltd", type: "ISO 9001 Quality Audit", date: "Mar 5, 2026", status: "scheduled" },
    { id: "AUD-2026-018", supplier: "PolyCraft India", type: "Environmental Compliance", date: "Feb 28, 2026", status: "in_progress" },
];

const stats = [
    { label: "Assigned Audits", value: "7", icon: ClipboardCheck, color: "indigo" },
    { label: "In Progress", value: "1", icon: Clock, color: "amber" },
    { label: "Completed (YTD)", value: "14", icon: CheckCircle2, color: "emerald" },
    { label: "Reports Pending", value: "2", icon: AlertCircle, color: "rose" },
];

export default function AuditorDashboard() {
    return (
        <div className="flex-col pb-12">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Auditor Dashboard</h1>
                <p className="text-muted-foreground mt-1">Your assigned audit schedule, pending reports, and supplier overview.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-4 mb-8">
                {stats.map(stat => (
                    <Card key={stat.label} className="shadow-sm border-slate-200">
                        <CardContent className="p-5 flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full bg-${stat.color}-50 flex items-center justify-center shrink-0`}>
                                <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-slate-500">{stat.label}</p>
                                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="border-b border-slate-100 bg-slate-50/50 py-4">
                        <CardTitle className="text-base flex items-center justify-between">
                            <span className="flex items-center"><ClipboardCheck className="w-4 h-4 mr-2 text-indigo-500" /> Upcoming Audits</span>
                            <Link href="/auditor/audits"><Button variant="ghost" size="sm" className="text-xs text-slate-500">View All <ArrowRight className="w-3 h-3 ml-1" /></Button></Link>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 divide-y divide-slate-100">
                        {upcomingAudits.map(a => (
                            <div key={a.id} className="p-4 hover:bg-slate-50/50">
                                <div className="flex justify-between mb-1">
                                    <h4 className="font-bold text-slate-900 text-sm">{a.supplier}</h4>
                                    <Badge className={`${a.status === "in_progress" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"} border-0 shadow-none text-[10px]`}>
                                        {a.status === "in_progress" ? "In Progress" : "Scheduled"}
                                    </Badge>
                                </div>
                                <p className="text-xs text-slate-500">{a.type}</p>
                                <p className="text-xs text-slate-400 flex items-center mt-1"><Calendar className="w-3 h-3 mr-1" />{a.date}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="border-b border-slate-100 bg-slate-50/50 py-4">
                        <CardTitle className="text-base flex items-center">
                            <AlertCircle className="w-4 h-4 mr-2 text-rose-500" /> Pending Actions
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 space-y-3">
                        {[
                            { text: "Submit audit report for AUD-2026-016 (SafeWrap Co.)", urgent: true },
                            { text: "Confirm attendance for AUD-2026-019 (Apex Packaging)", urgent: false },
                        ].map((item, i) => (
                            <div key={i} className={`flex items-start gap-3 p-3 rounded-lg border ${item.urgent ? "bg-rose-50 border-rose-100" : "bg-slate-50 border-slate-100"}`}>
                                <AlertCircle className={`w-4 h-4 mt-0.5 shrink-0 ${item.urgent ? "text-rose-500" : "text-slate-400"}`} />
                                <p className="text-sm text-slate-700">{item.text}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
