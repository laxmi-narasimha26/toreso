import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Send, Paperclip, CheckCheck, FileText, MoreVertical } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function BuyerMessagesPage() {
    return (
        <div className="flex-col h-[calc(100vh-[180px])] min-h-[600px] flex">
            <div className="mb-6">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Messages Workspace</h1>
                <p className="text-muted-foreground mt-1">Communicate directly with suppliers regarding RFQs and active orders.</p>
            </div>

            <Card className="flex-1 shadow-sm border-slate-200 bg-white overflow-hidden flex flex-col md:flex-row min-h-0">
                {/* Chat List Sidebar */}
                <div className="w-full md:w-80 lg:w-96 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col bg-slate-50/50 block md:block hidden">
                    <div className="p-4 border-b border-slate-200 bg-white">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input placeholder="Search messages..." className="pl-9 bg-slate-50" />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className={`p-4 border-b border-slate-200/60 cursor-pointer transition-colors ${i === 1 ? 'bg-white border-l-4 border-l-teal-500' : 'hover:bg-white border-l-4 border-l-transparent'}`}>
                                <div className="flex justify-between items-start mb-1">
                                    <span className="font-bold text-slate-900 text-sm truncate pr-2">EcoPack Solutions {i}</span>
                                    <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap">10:42 AM</span>
                                </div>
                                <p className="text-xs font-semibold text-teal-600 mb-1">Re: RFQ-9021</p>
                                <p className={`text-sm truncate ${i < 3 ? 'text-slate-900 font-medium' : 'text-slate-500'}`}>We can definitely adjust the dieline to meet that structural requirement. Let me send a revised CAD.</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Active Chat Area */}
                <div className="flex-1 flex flex-col bg-white min-h-0">
                    <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-white z-10">
                        <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 border border-slate-200">
                                <AvatarFallback className="bg-teal-50 text-teal-700 font-bold">ES</AvatarFallback>
                            </Avatar>
                            <div>
                                <h2 className="font-bold text-slate-900 leading-tight">EcoPack Solutions</h2>
                                <div className="flex items-center text-xs text-slate-500 mt-0.5">
                                    <span className="w-2 h-2 rounded-full bg-green-500 mr-1.5"></span> Online
                                    <span className="mx-2">•</span> <span className="text-teal-600 hover:underline cursor-pointer">Re: RFQ-9021 - Corrugated Mailers</span>
                                </div>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600">
                            <MoreVertical className="w-5 h-5" />
                        </Button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30">
                        <div className="text-center">
                            <span className="bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Today</span>
                        </div>

                        {/* Supplier Message */}
                        <div className="flex items-start gap-4">
                            <Avatar className="h-8 w-8 border border-slate-200 mt-1 shrink-0">
                                <AvatarFallback className="bg-teal-50 text-teal-700 text-xs">ES</AvatarFallback>
                            </Avatar>
                            <div className="max-w-[80%]">
                                <div className="bg-white border border-slate-200 text-slate-900 p-4 rounded-2xl rounded-tl-none shadow-sm text-sm">
                                    Hi there, we received your RFQ for the corrugated mailers. To give you the most accurate pricing, could you confirm if you require flexographic or offset printing on the exterior?
                                </div>
                                <p className="text-[10px] text-slate-400 mt-1 ml-1">10:15 AM</p>
                            </div>
                        </div>

                        {/* Buyer Message */}
                        <div className="flex items-start gap-4 justify-end">
                            <div className="max-w-[80%] flex flex-col items-end">
                                <div className="bg-teal-600 text-white p-4 rounded-2xl rounded-tr-none shadow-sm text-sm border border-teal-700">
                                    Flexographic printing (1-color black) is sufficient for the exterior. We just need our logo and handling instructions.
                                </div>
                                <div className="flex items-center gap-1 mt-1 mr-1">
                                    <p className="text-[10px] text-slate-400">10:30 AM</p>
                                    <CheckCheck className="w-3 h-3 text-teal-600" />
                                </div>
                            </div>
                        </div>

                        {/* Supplier File Message */}
                        <div className="flex items-start gap-4">
                            <Avatar className="h-8 w-8 border border-slate-200 mt-1 shrink-0">
                                <AvatarFallback className="bg-teal-50 text-teal-700 text-xs">ES</AvatarFallback>
                            </Avatar>
                            <div className="max-w-[80%]">
                                <div className="bg-white border border-slate-200 text-slate-900 p-4 rounded-2xl rounded-tl-none shadow-sm text-sm">
                                    Thanks for confirming! We can definitely adjust the dieline to meet that structural requirement. Let me send a revised CAD for your approval.

                                    <div className="mt-4 border border-slate-200 rounded-lg p-3 flex items-center justify-between bg-slate-50/50 hover:bg-slate-100 transition-colors cursor-pointer group">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-blue-100 p-2 rounded">
                                                <FileText className="w-5 h-5 text-blue-700" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm text-slate-900 group-hover:text-blue-700 transition-colors">Mailer_CAD_Rev2.pdf</p>
                                                <p className="text-xs text-slate-500">2.4 MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[10px] text-slate-400 mt-1 ml-1">10:42 AM</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 border-t border-slate-200 bg-white z-10">
                        <div className="relative flex items-center">
                            <Button variant="ghost" size="icon" className="absolute left-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full h-8 w-8 z-10">
                                <Paperclip className="w-4 h-4" />
                            </Button>
                            <Input
                                placeholder="Type your message here..."
                                className="pl-12 pr-16 h-12 bg-slate-50 border-slate-200 rounded-full focus-visible:ring-teal-500 shadow-sm"
                            />
                            <Button size="icon" className="absolute right-2 h-8 w-8 rounded-full bg-teal-600 hover:bg-teal-700 shadow-sm z-10">
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
