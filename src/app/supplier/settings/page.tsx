import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Key, Building, Users } from "lucide-react";

export default function SupplierSettingsPage() {
    return (
        <div className="flex-col pb-12 max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Settings</h1>
                <p className="text-muted-foreground mt-1">Manage your supplier profile, team members, and preferences.</p>
            </div>

            <Tabs defaultValue="profile" className="w-full">
                <TabsList className="bg-slate-100 p-1 mb-6">
                    <TabsTrigger value="profile" className="data-[state=active]:bg-white data-[state=active]:shadow-sm"><Building className="w-4 h-4 mr-2" /> Company Profile</TabsTrigger>
                    <TabsTrigger value="team" className="data-[state=active]:bg-white data-[state=active]:shadow-sm"><Users className="w-4 h-4 mr-2" /> Team Members</TabsTrigger>
                    <TabsTrigger value="notifications" className="data-[state=active]:bg-white data-[state=active]:shadow-sm"><Bell className="w-4 h-4 mr-2" /> Notifications</TabsTrigger>
                    <TabsTrigger value="security" className="data-[state=active]:bg-white data-[state=active]:shadow-sm"><Key className="w-4 h-4 mr-2" /> Security</TabsTrigger>
                </TabsList>

                <TabsContent value="profile">
                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                            <CardTitle>Company Information</CardTitle>
                            <CardDescription>Update your public profile visible to buyers.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label>Legal Company Name</Label>
                                    <Input defaultValue="Acme Packaging Co." />
                                </div>
                                <div className="space-y-2">
                                    <Label>GSTIN</Label>
                                    <Input defaultValue="07AAAAA0000A1Z5" disabled className="bg-slate-50" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Primary Contact Email</Label>
                                    <Input defaultValue="sales@acmepackaging.in" type="email" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Phone Number</Label>
                                    <Input defaultValue="+91 98765 43210" />
                                </div>
                                <div className="col-span-2 space-y-2">
                                    <Label>Company Address</Label>
                                    <Input defaultValue="Phase 4, Udyog Vihar, Gurugram, Haryana" />
                                </div>
                            </div>
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white shadow-sm font-semibold">Save Changes</Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="team">
                    <Card className="shadow-sm border-slate-200">
                        <CardContent className="p-12 text-center text-slate-500">
                            <p>Team management configuration placeholder.</p>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="notifications">
                    <Card className="shadow-sm border-slate-200">
                        <CardContent className="p-12 text-center text-slate-500">
                            <p>Notification preferences placeholder.</p>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="security">
                    <Card className="shadow-sm border-slate-200">
                        <CardContent className="p-12 text-center text-slate-500">
                            <p>Security settings placeholder.</p>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
