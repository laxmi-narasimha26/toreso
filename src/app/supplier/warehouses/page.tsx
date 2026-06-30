import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Plus, Factory } from "lucide-react";

export default function SupplierWarehousesPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Plants & Warehouses</h1>
                    <p className="text-muted-foreground mt-1">Manage your manufacturing units and storage facilities.</p>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Plus className="w-4 h-4 mr-2" /> Add Location
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="pb-4">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                    <Factory className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <CardTitle className="text-lg">North Manufacturing Unit</CardTitle>
                                    <p className="text-xs text-slate-500 flex items-center mt-1"><MapPin className="w-3 h-3 mr-1" /> Gurugram, HR</p>
                                </div>
                            </div>
                            <Badge className="bg-emerald-100 text-emerald-700 shadow-none border-0">Primary</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="py-4 border-y border-slate-100">
                        <p className="text-sm text-slate-600 mb-2 font-semibold">Capabilities</p>
                        <div className="flex gap-2 flex-wrap">
                            <Badge variant="secondary" className="font-normal text-xs">Corrugation</Badge>
                            <Badge variant="secondary" className="font-normal text-xs">Offset Printing</Badge>
                            <Badge variant="secondary" className="font-normal text-xs">Die Cutting</Badge>
                        </div>
                    </CardContent>
                    <CardFooter className="pt-4 bg-slate-50/50 flex justify-between">
                        <span className="text-sm text-slate-500">ISO 9001, FSC Certified</span>
                        <Button variant="ghost" size="sm" className="text-blue-600">Manage</Button>
                    </CardFooter>
                </Card>

                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="pb-4">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-3">
                                    <Building2 className="w-5 h-5 text-amber-600" />
                                </div>
                                <div>
                                    <CardTitle className="text-lg">South Fulfillment Center</CardTitle>
                                    <p className="text-xs text-slate-500 flex items-center mt-1"><MapPin className="w-3 h-3 mr-1" /> Chennai, TN</p>
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="py-4 border-y border-slate-100">
                        <p className="text-sm text-slate-600 mb-2 font-semibold">Storage Capacity</p>
                        <p className="text-lg font-bold text-slate-900">45,000 sq.ft</p>
                    </CardContent>
                    <CardFooter className="pt-4 bg-slate-50/50 flex justify-between">
                        <span className="text-sm text-amber-600">80% Utilization</span>
                        <Button variant="ghost" size="sm" className="text-blue-600">Manage</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
