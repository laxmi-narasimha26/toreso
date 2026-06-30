import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding ...')

    // Seed Categories
    const categories = [
        { name: 'Corrugated Boxes', slug: 'corrugated-boxes', icon_url: '/icons/box.svg' },
        { name: 'Flexible Packaging', slug: 'flexible-packaging', icon_url: '/icons/bag.svg' },
        { name: 'Rigid Containers', slug: 'rigid-containers', icon_url: '/icons/container.svg' },
        { name: 'Protective Packaging', slug: 'protective-packaging', icon_url: '/icons/shield.svg' },
        { name: 'Labels & Tags', slug: 'labels-tags', icon_url: '/icons/tag.svg' },
        { name: 'Tapes & Adhesives', slug: 'tapes-adhesives', icon_url: '/icons/tape.svg' },
        { name: 'Pallets & Crates', slug: 'pallets-crates', icon_url: '/icons/pallet.svg' },
        { name: 'Packaging Machines', slug: 'packaging-machines', icon_url: '/icons/machine.svg' },
    ]

    for (const cat of categories) {
        const existing = await prisma.category.findUnique({ where: { slug: cat.slug } })
        if (!existing) {
            await prisma.category.create({
                data: {
                    name: cat.name,
                    slug: cat.slug,
                    icon_url: cat.icon_url,
                    is_active: true,
                },
            })
            console.log(`Created category: ${cat.name}`)
        }
    }

    // Seed Admin User (Placeholder - in prod this comes from Clerk sync)
    // We can't easily seed users directly if they are managed by Clerk, 
    // but we can seed the corresponding User record if we know the ID.
    // For now, we'll skip user seeding and rely on the webhook.

    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
