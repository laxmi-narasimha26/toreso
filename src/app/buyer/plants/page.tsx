import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Plus, Factory, Building2, ExternalLink } from "lucide-react";

export default function BuyerPlantsPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Plants & Warehouses</h1>
                    <p className="text-muted-foreground mt-1">Manage your delivery locations and inventory centers.</p>
                </div>
                <Button className="bg-teal-600 hover:bg-teal-700 hidden sm:flex">
                    <Plus className="w-4 h-4 mr-2" /> Add Location
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Plant 1 */}
                <Card className="shadow-sm border-slate-200 hover:border-teal-400 transition-colors group">
                    <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
                        <div className="flex justify-between items-start">
                            <CardTitle className="text-lg flex items-center"><Factory className="w-5 h-5 mr-2 text-teal-600" /> North Plant</CardTitle>
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs border-0">Primary</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-4">
                            <MapPin className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                            <p className="text-sm text-slate-600 leading-relaxed">Plot 45, Phase 1 Industrial Area<br />Gurugram, Haryana 122016<br />India</p>
                        </div>
                        <div className="space-y-2 mt-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Active Orders:</span>
                                <span className="font-bold text-slate-900">12</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Receiving Hours:</span>
                                <span className="font-medium text-slate-900">09:00 - 18:00</span>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="p-4 border-t border-slate-100 bg-slate-50/50">
                        <Button variant="outline" className="w-full text-slate-600 bg-white">Manage Details <ExternalLink className="w-4 h-4 ml-2 max-w-[16px]" /></Button>
                    </CardFooter>
                </Card>

                {/* Plant 2 */}
                <Card className="shadow-sm border-slate-200 hover:border-teal-400 transition-colors">
                    <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
                        <div className="flex justify-between items-start">
                            <CardTitle className="text-lg flex items-center"><Building2 className="w-5 h-5 mr-2 text-purple-600" /> South Warehouse</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-4">
                            <MapPin className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                            <p className="text-sm text-slate-600 leading-relaxed">Logistics Park, Block C<br />Chennai, Tamil Nadu 600001<br />India</p>
                        </div>
                        <div className="space-y-2 mt-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Active Orders:</span>
                                <span className="font-bold text-slate-900">4</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Receiving Hours:</span>
                                <span className="font-medium text-slate-900">24/7</span>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="p-4 border-t border-slate-100 bg-slate-50/50">
                        <Button variant="outline" className="w-full text-slate-600 bg-white">Manage Details <ExternalLink className="w-4 h-4 ml-2" /></Button>
                    </CardFooter>
                </Card>

                {/* Add New */}
                <Card className="shadow-sm border-slate-200 border-dashed border-2 hover:bg-slate-50 transition-colors cursor-pointer flex flex-col items-center justify-center p-8 text-center h-full min-h-[300px]">
                    <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                        <Plus className="w-8 h-8 text-teal-600" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">Add Location</h3>
                    <p className="text-sm text-slate-500 max-w-xs">Register a new manufacturing plant or warehouse to direct deliveries.</p>
                </Card>
            </div>
        </div>
    );
}
