import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export async function getCurrentUser() {
    const { userId } = auth();

    if (!userId) {
        return null;
    }

    const user = await db.user.findUnique({
        where: { id: userId },
        include: {
            profile: true,
            team_memberships: {
                include: {
                    organization: true
                }
            }
        }
    });

    return user;
}

export async function getCurrentRole() {
    const { sessionClaims } = auth();
    // Clerk allows putting metadata in session token
    return (sessionClaims?.metadata as { role?: string })?.role || 'buyer';
}

export async function requireAuth() {
    const { userId } = auth();

    if (!userId) {
        redirect("/sign-in");
    }

    return userId;
}

export async function requireRole(role: string) {
    const currentRole = await getCurrentRole();

    if (currentRole !== role) {
        redirect("/unauthorized"); // Or dashboard
    }
}
