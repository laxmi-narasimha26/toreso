"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2, FileUp, Plus, CalendarIcon, ArrowRight, ShieldCheck, FileText, Checkbox } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function CreateRfqPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        // In a real app, this would submit the massive form payload via API
        try {
            const formData = new FormData(e.currentTarget);
            const res = await fetch('/api/rfqs', {
                method: 'POST',
                body: JSON.stringify({
                    title: formData.get('title'),
                    categoryId: formData.get('categoryId') || 'clf6q11n0000008lc6p0z2222', // Mock fallback
                    quantity: Number(formData.get('quantity')),
                    description: formData.get('description'),
                    deadline: formData.get('deadline'),
                }),
                headers: { 'Content-Type': 'application/json' }
            });

            if (res.ok) {
                router.push('/buyer/rfq?tab=active');
                router.refresh();
            } else {
                console.error("Failed to create RFQ");
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex-col pb-12 max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Create Custom RFQ</h1>
                <p className="text-muted-foreground mt-1">Provide detailed specifications to get accurate quotes from suppliers.</p>
            </div>

            {/* Progress Indicators */}
            <div className="flex items-center justify-between mb-8 px-2">
                {['Basic Details', 'Technical Specs', 'Logistics', 'Requirements'].map((label, i) => (
                    <div key={label} className="flex flex-col items-center gap-2 relative z-10 w-full">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10 relative ${step > i + 1 ? 'bg-teal-500 text-white' :
                                step === i + 1 ? 'bg-white border-2 border-teal-500 text-teal-600' :
                                    'bg-white border-2 border-slate-200 text-slate-400'
                            }`}>
                            {i + 1}
                        </div>
                        <span className={`text-xs font-semibold hidden sm:block ${step >= i + 1 ? 'text-slate-900' : 'text-slate-400'}`}>{label}</span>
                        {i < 3 && <div className={`absolute top-4 left-1/2 w-full h-1 -z-0 ${step > i + 1 ? 'bg-teal-500' : 'bg-slate-200'}`}></div>}
                    </div>
                ))}
            </div>

            <form onSubmit={onSubmit}>
                <Card className="shadow-sm border-slate-200 overflow-hidden">

                    {step === 1 && (
                        <>
                            <CardHeader className="bg-slate-50/50 border-b border-slate-100">
                                <CardTitle className="text-xl">Basic Information</CardTitle>
                                <CardDescription>Start by defining what you need overall.</CardDescription>
                            </CardHeader>
                            <CardContent className="p-6 space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="title" className="text-base font-semibold">RFQ Title <span className="text-red-500">*</span></Label>
                                    <Input id="title" name="title" placeholder="e.g. 50,000 Custom Printed Corrugated Boxes" required className="h-12 border-slate-300" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="categoryId" className="font-semibold">Product Category <span className="text-red-500">*</span></Label>
                                        <Select name="categoryId" defaultValue="corrugated">
                                            <SelectTrigger className="h-12 border-slate-300">
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="corrugated">Corrugated Boxes</SelectItem>
                                                <SelectItem value="flexible">Flexible Packaging</SelectItem>
                                                <SelectItem value="primary">Primary Packaging (Cans/Bottles)</SelectItem>
                                                <SelectItem value="labels">Labels & Tapes</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="quantity" className="font-semibold">Target Quantity <span className="text-red-500">*</span></Label>
                                        <Input id="quantity" name="quantity" type="number" placeholder="e.g. 50000" required className="h-12 border-slate-300" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="description" className="font-semibold">General Description <span className="text-red-500">*</span></Label>
                                    <Textarea
                                        id="description"
                                        name="description"
                                        placeholder="Provide a comprehensive overview of what you are sourcing..."
                                        required
                                        className="min-h-[120px] border-slate-300 focus-visible:ring-teal-500"
                                    />
                                </div>
                            </CardContent>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <CardHeader className="bg-slate-50/50 border-b border-slate-100">
                                <CardTitle className="text-xl">Technical Specifications</CardTitle>
                                <CardDescription>Provide exact measurements, materials, and printing needs.</CardDescription>
                            </CardHeader>
                            <CardContent className="p-6 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="space-y-2">
                                        <Label className="font-semibold">Length (mm)</Label>
                                        <Input type="number" placeholder="200" className="border-slate-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="font-semibold">Width (mm)</Label>
                                        <Input type="number" placeholder="150" className="border-slate-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="font-semibold">Height (mm)</Label>
                                        <Input type="number" placeholder="100" className="border-slate-300" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label className="font-semibold">Material Grade</Label>
                                        <Input placeholder="e.g. 150 GSM Kraft Paper, 3-ply" className="border-slate-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="font-semibold">Printing Requirements</Label>
                                        <Select defaultValue="flexo">
                                            <SelectTrigger className="border-slate-300">
                                                <SelectValue placeholder="Select printing type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="none">No Printing</SelectItem>
                                                <SelectItem value="flexo">Flexographic (1-2 colors)</SelectItem>
                                                <SelectItem value="offset">Offset Printing (CMYK)</SelectItem>
                                                <SelectItem value="digital">Digital Printing</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-4">
                                    <Label className="font-semibold">Technical Drawings / Dielines (Optional)</Label>
                                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 hover:bg-slate-50 transition-colors text-center cursor-pointer flex flex-col items-center">
                                        <div className="bg-blue-50 p-3 rounded-full mb-3">
                                            <FileUp className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <h4 className="text-sm font-semibold text-slate-900">Click to upload or drag & drop</h4>
                                        <p className="text-xs text-slate-500 mt-1">PDF, AI, CDR, or image files (Max 25MB)</p>
                                    </div>
                                </div>
                            </CardContent>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <CardHeader className="bg-slate-50/50 border-b border-slate-100">
                                <CardTitle className="text-xl">Logistics & Budget</CardTitle>
                                <CardDescription>Tell suppliers where and when you need it.</CardDescription>
                            </CardHeader>
                            <CardContent className="p-6 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="deadline" className="font-semibold">Quote Submission Deadline <span className="text-red-500">*</span></Label>
                                        <Input id="deadline" name="deadline" type="date" required className="border-slate-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="font-semibold">Expected Delivery Date <span className="text-red-500">*</span></Label>
                                        <Input type="date" className="border-slate-300" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label className="font-semibold">Target Delivery Location <span className="text-red-500">*</span></Label>
                                    <Select defaultValue="plant-1">
                                        <SelectTrigger className="border-slate-300">
                                            <SelectValue placeholder="Select delivery plant" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="plant-1">North Manufacturing Plant - Gurugram</SelectItem>
                                            <SelectItem value="plant-2">South Regional Warehouse - Chennai</SelectItem>
                                            <SelectItem value="new">+ Add new location</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <Separator className="my-6" />

                                <div className="space-y-2">
                                    <Label className="font-semibold">Target Budget Range (Optional/Confidential)</Label>
                                    <p className="text-xs text-slate-500 mb-2">This is not shared with suppliers directly. It helps Toreso match you with the right vendors.</p>
                                    <div className="flex items-center gap-4">
                                        <div className="relative flex-1">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">₹</span>
                                            <Input type="number" placeholder="Min" className="pl-8 border-slate-300" />
                                        </div>
                                        <span className="text-slate-400">to</span>
                                        <div className="relative flex-1">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">₹</span>
                                            <Input type="number" placeholder="Max" className="pl-8 border-slate-300" />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </>
                    )}

                    {step === 4 && (
                        <>
                            <CardHeader className="bg-slate-50/50 border-b border-slate-100">
                                <CardTitle className="text-xl">Compliance & Requirements</CardTitle>
                                <CardDescription>Set the bar for which suppliers can bid.</CardDescription>
                            </CardHeader>
                            <CardContent className="p-6 space-y-6">
                                <div className="space-y-3">
                                    <Label className="text-base font-semibold"><ShieldCheck className="w-5 h-5 inline mr-1 text-teal-600" /> Required Certifications</Label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                                        {/* Mock checkboxes for UI */}
                                        <label className="flex items-start gap-3 p-3 border border-slate-200 rounded-lg hover:border-teal-500 cursor-pointer transition-colors bg-white">
                                            <input type="checkbox" className="mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-sm text-slate-900">ISO 9001:2015</p>
                                                <p className="text-xs text-slate-500">Quality Management Systems</p>
                                            </div>
                                        </label>
                                        <label className="flex items-start gap-3 p-3 border border-slate-200 rounded-lg hover:border-teal-500 cursor-pointer transition-colors bg-white">
                                            <input type="checkbox" className="mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-sm text-slate-900">FSC Certification</p>
                                                <p className="text-xs text-slate-500">For sustainable paper sourcing</p>
                                            </div>
                                        </label>
                                        <label className="flex items-start gap-3 p-3 border border-slate-200 rounded-lg hover:border-teal-500 cursor-pointer transition-colors bg-white">
                                            <input type="checkbox" className="mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-sm text-slate-900">FDA Compliant</p>
                                                <p className="text-xs text-slate-500">Food grade packaging safety</p>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-4">
                                    <Label className="text-base font-semibold">Broadcasting Strategy</Label>
                                    <RadioGroup defaultValue="all">
                                        <label className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:border-teal-500 cursor-pointer [&:has(:checked)]:bg-teal-50 [&:has(:checked)]:border-teal-500 transition-colors">
                                            <RadioGroupItem value="all" id="r-all" />
                                            <div className="flex-1">
                                                <p className="font-semibold text-slate-900">Public Broadcast (Recommended)</p>
                                                <p className="text-xs text-slate-500">Allow any verified Toreso supplier to review and bid.</p>
                                            </div>
                                        </label>
                                        <label className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:border-teal-500 cursor-pointer [&:has(:checked)]:bg-teal-50 [&:has(:checked)]:border-teal-500 transition-colors">
                                            <RadioGroupItem value="invite" id="r-invite" />
                                            <div className="flex-1">
                                                <p className="font-semibold text-slate-900">Invite Only</p>
                                                <p className="text-xs text-slate-500">I will explicitly invite specific suppliers to quote.</p>
                                            </div>
                                        </label>
                                    </RadioGroup>
                                </div>
                            </CardContent>
                        </>
                    )}

                    <CardFooter className="p-6 bg-slate-50 border-t border-slate-200 flex justify-between">
                        {step > 1 ? (
                            <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>Back</Button>
                        ) : (
                            <Button type="button" variant="ghost" onClick={() => router.back()}>Cancel</Button>
                        )}

                        {step < 4 ? (
                            <Button type="button" className="bg-teal-600 hover:bg-teal-700 w-32" onClick={() => setStep(step + 1)}>
                                Next Step
                            </Button>
                        ) : (
                            <Button type="submit" disabled={loading} className="bg-teal-600 hover:bg-teal-700 shadow-lg shadow-teal-500/30 w-40 text-lg">
                                {loading ? 'Publishing...' : 'Publish RFQ'}
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
}
