import { AuditorSidebar } from "@/components/auditor/Sidebar";

export default function AuditorLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen flex overflow-hidden bg-slate-50">
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-50">
                <AuditorSidebar />
            </div>
            <main className="flex-1 overflow-y-auto md:pl-64">
                <div className="py-8 px-6 lg:px-12 max-w-screen-2xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
