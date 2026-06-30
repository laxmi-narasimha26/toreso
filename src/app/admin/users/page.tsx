import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Download, UserPlus, MoreHorizontal, ShieldAlert, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default async function AdminUsersPage() {
    const { userId } = await auth();

    const users = await db.user.findMany({
        orderBy: { created_at: 'desc' },
        include: {
            team_memberships: {
                include: { organization: true }
            }
        },
        take: 50 // Limit for MVP
    });

    return (
        <div className="flex-col pb-12">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">User Management</h1>
                    <p className="text-muted-foreground mt-1">View and manage all registered accounts on the platform.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Export CSV</Button>
                    <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                        <UserPlus className="w-4 h-4 mr-2" /> Invite User
                    </Button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-6">
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex gap-4 w-full max-w-md">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input placeholder="Search name or email..." className="pl-9 bg-white" />
                        </div>
                        <Button variant="outline" className="bg-white"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
                    </div>
                    <div className="text-sm text-slate-500 font-medium">
                        Displaying {users.length} users
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-slate-50/50 text-xs uppercase text-slate-500 font-semibold tracking-wider">
                            <TableRow>
                                <TableHead className="px-6 py-4">Full Name</TableHead>
                                <TableHead>Email Address</TableHead>
                                <TableHead>Role / Account</TableHead>
                                <TableHead>Affiliation</TableHead>
                                <TableHead>Joined Date</TableHead>
                                <TableHead className="text-right px-6">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id} className="hover:bg-slate-50/50 group">
                                    <TableCell className="px-6 py-4 font-semibold text-slate-900">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mr-3 text-xs font-bold text-slate-600 border border-slate-200">
                                                {user.first_name?.charAt(0) || 'U'}{user.last_name?.charAt(0) || ''}
                                            </div>
                                            {user.first_name} {user.last_name}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-slate-600">{user.email}</TableCell>
                                    <TableCell>
                                        <Badge className={`${user.role === 'admin' ? 'bg-red-100 text-red-700 hover:bg-red-200' :
                                                user.role === 'supplier' ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' :
                                                    'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                                            } border-0 shadow-none capitalize font-semibold`}>
                                            {user.role}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        {user.team_memberships.length > 0 ? (
                                            user.team_memberships.map(m => (
                                                <div key={m.id} className="flex flex-col">
                                                    <span className="text-sm font-medium text-slate-900">{m.organization.display_name}</span>
                                                    <span className="text-xs text-slate-500 capitalize">{m.organization.type} Org</span>
                                                </div>
                                            ))
                                        ) : (
                                            <span className="text-slate-400 italic text-sm">Independent</span>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-slate-500 text-sm">
                                        {new Date(user.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                                    </TableCell>
                                    <TableCell className="text-right px-6">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-900 hover:bg-slate-100">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
