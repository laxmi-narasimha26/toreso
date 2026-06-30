import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, User, Mail, CreditCard, Shield, Globe } from "lucide-react";

export default function BuyerSettingsPage() {
    return (
        <div className="flex-col pb-12 max-w-5xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Settings & Compliance</h1>
                <p className="text-muted-foreground mt-1">Manage your organization's profile, team access, and billing details.</p>
            </div>

            <Tabs defaultValue="company" className="w-full">
                <TabsList className="bg-slate-100 p-1 mb-6 flex flex-wrap h-auto gap-1 border border-slate-200/60 rounded-lg">
                    <TabsTrigger value="company" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded py-2 px-4"><Building className="w-4 h-4 mr-2" /> Company Profile</TabsTrigger>
                    <TabsTrigger value="team" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded py-2 px-4"><User className="w-4 h-4 mr-2" /> Team Members</TabsTrigger>
                    <TabsTrigger value="billing" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded py-2 px-4"><CreditCard className="w-4 h-4 mr-2" /> Billing & GST</TabsTrigger>
                    <TabsTrigger value="compliance" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded py-2 px-4"><Shield className="w-4 h-4 mr-2" /> Compliance</TabsTrigger>
                    <TabsTrigger value="preferences" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded py-2 px-4"><Globe className="w-4 h-4 mr-2" /> Preferences</TabsTrigger>
                </TabsList>

                <TabsContent value="company">
                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="bg-slate-50/50 border-b border-slate-100">
                            <CardTitle>Organization Details</CardTitle>
                            <CardDescription>Update your company's core information.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label className="font-semibold text-slate-700">Company Name (Public)</Label>
                                    <Input defaultValue="Acme Corp India" className="border-slate-300 h-10" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="font-semibold text-slate-700">Legal Entity Name</Label>
                                    <Input defaultValue="Acme Corporations India Pvt. Ltd." className="border-slate-300 h-10" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="font-semibold text-slate-700">Website</Label>
                                    <Input defaultValue="https://acmecorp.in" type="url" className="border-slate-300 h-10" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="font-semibold text-slate-700">Industry</Label>
                                    <Input defaultValue="FMCG & Retail" className="border-slate-300 h-10" />
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100">
                                <div className="space-y-2">
                                    <Label className="font-semibold text-slate-700">Registered Address</Label>
                                    <textarea className="w-full min-h-[100px] p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none text-sm" defaultValue={"123 Business Avenue\nSector 44\nGurugram, Haryana 122003\nIndia"}></textarea>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="bg-slate-50 border-t border-slate-200 p-6 flex justify-end">
                            <Button className="bg-teal-600 hover:bg-teal-700">Save Changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
