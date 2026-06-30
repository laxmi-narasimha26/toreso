import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Boxes, Plus, Search, Filter, AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SupplierInventoryPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Inventory Management</h1>
                    <p className="text-muted-foreground mt-1">Track stock levels across all your warehouse locations.</p>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Plus className="w-4 h-4 mr-2" /> Adjust Stock
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-semibold text-slate-500 flex items-center">
                            <Boxes className="w-4 h-4 mr-2" /> Total SKUs in Stock
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-slate-900">142</div>
                    </CardContent>
                </Card>
                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-semibold text-slate-500 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2 text-rose-500" /> Low Stock Alerts
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-rose-600">8</div>
                        <p className="text-xs text-slate-500 mt-1">Below minimum threshold</p>
                    </CardContent>
                </Card>
            </div>

            <Card className="shadow-sm border-slate-200">
                <CardHeader className="border-b border-slate-100 bg-slate-50/50 pb-4">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-4 w-full max-w-md">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <Input placeholder="Search SKU or product..." className="pl-9 bg-white" />
                            </div>
                            <Button variant="outline"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="p-8 text-center text-slate-500">
                        <Boxes className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Inventory Data Syncing</h3>
                        <p className="max-w-sm mx-auto">Connect your ERP or WMS system to automatically sync inventory levels, or update them manually here.</p>
                        <Button variant="outline" className="mt-6 border-orange-200 text-orange-600 hover:bg-orange-50">Connect ERP</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
