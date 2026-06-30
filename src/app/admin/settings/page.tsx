import { Card, CardContent } from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function AdminSettingsPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">System Settings</h1>
                    <p className="text-muted-foreground mt-1">Configure platform-wide variables, API keys, and access controls.</p>
                </div>
            </div>

            <Card className="shadow-sm border-slate-200 min-h-[400px]">
                <CardContent className="p-12 flex flex-col items-center justify-center text-slate-500">
                    <Settings className="w-12 h-12 text-slate-300 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Global Settings</h3>
                    <p className="max-w-md text-center">Manage commission rates, default matching algorithms, external integrations (ERP, 3PL), and super-admin invitations.</p>
                </CardContent>
            </Card>
        </div>
    );
}
