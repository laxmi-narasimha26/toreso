import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InfoIcon, Plus, Search, Clock, CheckCircle2, MessageSquare, Building2, Calendar } from "lucide-react";

const mockRFIs = [
    { id: "RFI-001", title: "Eco-Friendly Corrugated Box Specifications", suppliers: 8, responses: 5, status: "active", date: "Feb 18, 2026", category: "Corrugated" },
    { id: "RFI-002", title: "Compostable Mailer Bag Capabilities Survey", suppliers: 12, responses: 12, status: "closed", date: "Jan 30, 2026", category: "Flexible Packaging" },
    { id: "RFI-003", title: "Heavy Gauge Shrink Wrap Technical Details", suppliers: 6, responses: 2, status: "active", date: "Feb 19, 2026", category: "Shrink Wrap" },
];

export default function BuyerRFIPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Requests for Information</h1>
                    <p className="text-muted-foreground mt-1">Gather supplier capabilities and technical specs before committing to an RFQ.</p>
                </div>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white shadow-sm font-semibold">
                    <Plus className="w-4 h-4 mr-2" /> Create RFI
                </Button>
            </div>

            {/* KPI Row */}
            <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-5 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center"><InfoIcon className="w-5 h-5 text-teal-600" /></div>
                        <div><p className="text-sm font-medium text-slate-500">Active RFIs</p><p className="text-2xl font-bold text-slate-900">2</p></div>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-5 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center"><MessageSquare className="w-5 h-5 text-blue-600" /></div>
                        <div><p className="text-sm font-medium text-slate-500">Responses Received</p><p className="text-2xl font-bold text-slate-900">19</p></div>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardContent className="p-5 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center"><Building2 className="w-5 h-5 text-emerald-600" /></div>
                        <div><p className="text-sm font-medium text-slate-500">Suppliers Engaged</p><p className="text-2xl font-bold text-slate-900">26</p></div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input placeholder="Search RFIs..." className="pl-9 bg-white" />
                </div>
            </div>

            <Tabs defaultValue="active">
                <TabsList className="bg-slate-100 p-1 mb-6">
                    <TabsTrigger value="active" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Active</TabsTrigger>
                    <TabsTrigger value="closed" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Closed</TabsTrigger>
                </TabsList>

                <TabsContent value="active">
                    <div className="space-y-4">
                        {mockRFIs.filter(r => r.status === "active").map(rfi => (
                            <Card key={rfi.id} className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
                                <CardContent className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge className="bg-slate-100 text-slate-600 border-0 shadow-none text-[10px] font-mono">{rfi.id}</Badge>
                                            <Badge className="bg-teal-100 text-teal-700 border-0 shadow-none text-[10px]">{rfi.category}</Badge>
                                        </div>
                                        <h3 className="font-bold text-slate-900 text-lg">{rfi.title}</h3>
                                        <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                                            <span className="flex items-center"><Building2 className="w-4 h-4 mr-1" />{rfi.suppliers} suppliers targeted</span>
                                            <span className="flex items-center"><MessageSquare className="w-4 h-4 mr-1" />{rfi.responses} responses</span>
                                            <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />Sent {rfi.date}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 shrink-0">
                                        <div className="text-center">
                                            <p className="text-2xl font-bold text-teal-600">{Math.round((rfi.responses / rfi.suppliers) * 100)}%</p>
                                            <p className="text-xs text-slate-500">Response Rate</p>
                                        </div>
                                        <Button variant="outline" className="border-slate-300 text-slate-700" size="sm">View Responses</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="closed">
                    <div className="space-y-4">
                        {mockRFIs.filter(r => r.status === "closed").map(rfi => (
                            <Card key={rfi.id} className="shadow-sm border-slate-200 opacity-80">
                                <CardContent className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge className="bg-slate-100 text-slate-600 border-0 shadow-none text-[10px] font-mono">{rfi.id}</Badge>
                                            <Badge className="bg-emerald-100 text-emerald-700 border-0 shadow-none text-[10px]">Completed</Badge>
                                        </div>
                                        <h3 className="font-bold text-slate-800 text-lg">{rfi.title}</h3>
                                        <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                                            <span>{rfi.suppliers} suppliers • {rfi.responses} responses</span>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="sm" className="text-slate-500">View Archive</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
