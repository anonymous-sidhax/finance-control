import { prisma } from '@/app/api/lib/prisma'

async function main() {
  //  Check if categories already exist
  const categoryCount = await prisma.category.count()

  if (categoryCount > 0) {
    console.log('Seed skipped: categories already exist in the database')
    return
  }

  // Create categories
  const gaming = await prisma.category.create({
    data: {
      name: 'Gaming',
      description: 'Video games and consoles',
    },
  })

  const food = await prisma.category.create({
    data: {
      name: 'Food',
      description: 'Groceries and dining',
    },
  })

  console.log(' Seed data created:', { gaming, food })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
