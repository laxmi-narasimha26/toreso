import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { db } from '@/lib/db'

export async function POST(req: Request) {
    // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

    if (!WEBHOOK_SECRET) {
        throw new Error('Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
    }

    // Get the headers
    const headerPayload = await headers();
    constsvix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', {
            status: 400
        })
    }

    // Get the body
    const payload = await req.json()
    const body = JSON.stringify(payload)

    // Create a new Svix instance with your secret.
    const wh = new Webhook(WEBHOOK_SECRET)

    let evt: WebhookEvent

    // Verify the payload with the headers
    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent
    } catch (err) {
        console.error('Error verifying webhook:', err)
        return new Response('Error occured', {
            status: 400
        })
    }

    // Do something with the payload
    // For this guide, you can simply log the payload to the console
    const { id } = evt.data
    const eventType = evt.type
    console.log(`Webhook with and ID of ${id} and type of ${eventType}`)
    // console.log('Webhook body:', body)

    if (eventType === 'user.created') {
        const { id, email_addresses, first_name, last_name, image_url, phone_numbers } = evt.data

        if (!id || !email_addresses) {
            return new Response('Error occured -- missing data', {
                status: 400
            })
        }

        const email = email_addresses[0]?.email_address
        const phone = phone_numbers?.[0]?.phone_number

        // Create user in DB
        await db.user.create({
            data: {
                id: id,
                email: email,
                phone: phone,
                // Role is technically handled by Clerk metadata or default 'buyer' if not set
                // But for our schema 'role' is required. We'll default to 'buyer' if not provided in metadata.
                // Clerk publicMetadata can hold role.
                role: (evt.data.public_metadata as { role?: string })?.role || 'buyer',
                password_hash: 'managed_by_clerk', // Placeholder
                profile: {
                    create: {
                        first_name: first_name || '',
                        last_name: last_name || '',
                        avatar_url: image_url,
                    }
                }
            }
        })
        console.log(`User ${id} created in DB`)
    }

    if (eventType === 'user.updated') {
        const { id, email_addresses, first_name, last_name, image_url, phone_numbers } = evt.data

        if (!id) {
            return new Response('Error occured -- missing data', { status: 400 })
        }

        const email = email_addresses[0]?.email_address
        const phone = phone_numbers?.[0]?.phone_number

        await db.user.update({
            where: { id: id },
            data: {
                email: email,
                phone: phone,
                role: (evt.data.public_metadata as { role?: string })?.role, // Update role if changed in metadata
                profile: {
                    update: {
                        first_name: first_name || undefined,
                        last_name: last_name || undefined,
                        avatar_url: image_url || undefined,
                    }
                }
            }
        })
        console.log(`User ${id} updated in DB`)
    }

    if (eventType === 'user.deleted') {
        const { id } = evt.data

        if (!id) {
            return new Response('Error occured -- missing data', { status: 400 })
        }

        // Soft delete or hard delete? Schema has deleted_at, so let's try soft delete if supported or just delete.
        // Schema says deleted_at is DateTime? so soft delete is intended.
        await db.user.update({
            where: { id: id },
            data: {
                deleted_at: new Date(),
                status: 'deleted'
            }
        })
        console.log(`User ${id} marked deleted in DB`)
    }

    return new Response('', { status: 200 })
}
