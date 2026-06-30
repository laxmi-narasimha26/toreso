import { Card, CardContent } from "@/components/ui/card";
import { Package, Search } from "lucide-react";

export default function AdminProductsPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Global Products Catalog</h1>
                    <p className="text-muted-foreground mt-1">Review all product listings across the supplier network.</p>
                </div>
            </div>

            <Card className="shadow-sm border-slate-200 min-h-[400px]">
                <CardContent className="p-12 flex flex-col items-center justify-center text-slate-500">
                    <Package className="w-12 h-12 text-slate-300 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Total Catalog Overview</h3>
                    <p className="max-w-md text-center">This dashboard provides a unified view of every SKU on the platform, allowing admins to moderate content and flag inappropriate listings.</p>
                </CardContent>
            </Card>
        </div>
    );
}
