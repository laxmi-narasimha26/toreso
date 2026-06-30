import { Card, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export default function AdminFinancePage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Finance & Transaction Logs</h1>
                    <p className="text-muted-foreground mt-1">Audit trails, platform fee revenue, and payout statuses.</p>
                </div>
            </div>

            <Card className="shadow-sm border-slate-200 min-h-[400px]">
                <CardContent className="p-12 flex flex-col items-center justify-center text-slate-500">
                    <DollarSign className="w-12 h-12 text-emerald-300 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Financial Hub</h3>
                    <p className="max-w-md text-center">Track Gross Merchandise Value (GMV), supplier payouts, commission fees, and Escrow logs for all transactions.</p>
                </CardContent>
            </Card>
        </div>
    );
}
