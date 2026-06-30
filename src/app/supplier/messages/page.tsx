import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Send, User, Paperclip } from "lucide-react";

export default function SupplierMessagesPage() {
    return (
        <div className="flex-col h-[calc(100vh-8rem)]">
            <div className="mb-6">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Messages</h1>
                <p className="text-muted-foreground mt-1">Communicate directly with buyers regarding RFQs and Orders.</p>
            </div>

            <Card className="shadow-sm border-slate-200 h-full flex overflow-hidden">
                {/* Left Sidebar - Chat List */}
                <div className="w-1/3 border-r border-slate-100 flex flex-col bg-white">
                    <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input placeholder="Search messages..." className="pl-9 h-9" />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className={`p-4 cursor-pointer hover:bg-slate-50 transition-colors ${i === 1 ? 'bg-blue-50/30 border-l-2 border-l-blue-600' : ''}`}>
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="font-semibold text-slate-900 text-sm">Zenith Corp India</h4>
                                    <span className="text-xs text-slate-400">10:42 AM</span>
                                </div>
                                <p className="text-xs text-slate-500 truncate">Regarding the sample for PO-2026-892...</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Area - Chat View */}
                <div className="flex-1 flex flex-col bg-slate-50/30">
                    <div className="p-4 border-b border-slate-100 bg-white flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <User className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">Zenith Corp India</h3>
                                <p className="text-xs text-slate-500">Related to: <span className="text-blue-600 cursor-pointer hover:underline">PO-2026-892</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 p-6 overflow-y-auto">
                        <div className="space-y-6">
                            <div className="flex justify-start">
                                <div className="bg-white border border-slate-200 rounded-lg p-3 max-w-[70%] shadow-sm">
                                    <p className="text-sm text-slate-700">Hello, could you please confirm if the samples for the heavy duty boxes were shipped?</p>
                                    <p className="text-[10px] text-slate-400 mt-2 text-right">09:15 AM</p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="bg-blue-600 text-white rounded-lg p-3 max-w-[70%] shadow-sm">
                                    <p className="text-sm">Yes, they were dispatched via BlueDart yesterday. Tracking number is BD1290381.</p>
                                    <p className="text-[10px] text-blue-200 mt-2 text-right">09:45 AM</p>
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <div className="bg-white border border-slate-200 rounded-lg p-3 max-w-[70%] shadow-sm">
                                    <p className="text-sm text-slate-700">Thanks for the update!</p>
                                    <p className="text-[10px] text-slate-400 mt-2 text-right">10:42 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
                        <Button variant="outline" size="icon" className="shrink-0"><Paperclip className="w-4 h-4 text-slate-500" /></Button>
                        <Input placeholder="Type your message..." className="flex-1" />
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white shrink-0"><Send className="w-4 h-4 mr-2" /> Send</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
