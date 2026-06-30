import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function AdminRFQsPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">All RFQs</h1>
                    <p className="text-muted-foreground mt-1">Global view of all Request for Quotes across the platform.</p>
                </div>
            </div>

            <Card className="shadow-sm border-slate-200 min-h-[400px]">
                <CardContent className="p-12 flex flex-col items-center justify-center text-slate-500">
                    <FileText className="w-12 h-12 text-slate-300 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Platform RFQ Feed</h3>
                    <p className="max-w-md text-center">Monitor all sourcing activity. In the future, this will allow admins to intervene, boost RFQs, or assist buyers in finding the right suppliers.</p>
                </CardContent>
            </Card>
        </div>
    );
}
