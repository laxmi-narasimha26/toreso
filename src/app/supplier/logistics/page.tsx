import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Truck, Map, Search, Clock } from "lucide-react";

export default function SupplierLogisticsPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Logistics & Tracking</h1>
                    <p className="text-muted-foreground mt-1">Manage 3PL integrations and track active shipments.</p>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Book Shipment
                </Button>
            </div>

            <Card className="shadow-sm border-slate-200">
                <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                    <CardTitle className="text-lg flex items-center"><Map className="w-5 h-5 mr-2 text-blue-500" /> Live Shipments Tracking Map</CardTitle>
                </CardHeader>
                <CardContent className="p-0 relative">
                    <div className="w-full h-[400px] bg-slate-100 flex items-center justify-center relative overflow-hidden">
                        {/* Fake map pattern */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                        <div className="text-center z-10 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-white">
                            <Truck className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-slate-900">Map Interface Placeholder</h3>
                            <p className="text-sm text-slate-500 max-w-sm mt-2">Integrating with logistics providers (Delhivery, BlueDart) to show real-time truck tracking.</p>
                            <Button variant="outline" className="mt-4 border-blue-200 text-blue-600">Configure 3PL API Keys</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
