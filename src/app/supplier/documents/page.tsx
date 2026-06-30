import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Folder, FileText, Upload, MoreVertical, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SupplierDocumentsPage() {
    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Document Library</h1>
                    <p className="text-muted-foreground mt-1">Manage POs, NDAs, technical specs, and compliance documents.</p>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Upload className="w-4 h-4 mr-2" /> Upload File
                </Button>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input placeholder="Search documents..." className="pl-9 bg-white" />
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
                {['Purchase Orders', 'Signed NDAs', 'Technical Specs', 'Certifications'].map(folder => (
                    <Card key={folder} className="shadow-sm border-slate-200 hover:border-blue-300 transition-colors cursor-pointer group">
                        <CardContent className="p-6 text-center">
                            <Folder className="w-12 h-12 text-blue-200 group-hover:text-blue-500 mx-auto mb-3 transition-colors" />
                            <h3 className="font-semibold text-slate-900">{folder}</h3>
                            <p className="text-xs text-slate-500 mt-1">12 Files</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <h2 className="text-lg font-bold text-slate-900 mt-10 mb-4">Recent Documents</h2>
            <div className="space-y-3">
                {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-lg hover:shadow-sm">
                        <div className="flex items-center">
                            <FileText className="w-8 h-8 text-rose-400 mr-4" />
                            <div>
                                <h4 className="font-semibold text-slate-900 text-sm">Tech_Spec_Corrugated_Box_v{i}.pdf</h4>
                                <p className="text-xs text-slate-500">Added Yesterday by Admin</p>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" className="text-slate-400">
                            <MoreVertical className="w-4 h-4" />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}
