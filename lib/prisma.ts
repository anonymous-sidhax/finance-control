import { PrismaClient } from '@/generated/prisma/client'
import { PrismaLibSql } from '@prisma/adapter-libsql'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient(): PrismaClient {
  // Check if we're using Turso (production)
  const isTurso =
    process.env.TURSO_AUTH_TOKEN &&
    process.env.DATABASE_URL?.startsWith('libsql://')

  if (isTurso) {
    console.log('Connecting to Turso...')

    // Create the adapter with config (not the client)
    const adapter = new PrismaLibSql({
      url: process.env.DATABASE_URL!,
      authToken: process.env.TURSO_AUTH_TOKEN!,
    })

    return new PrismaClient({ adapter })
  }

  // Local SQLite for development
  console.log(' Using local SQLite database...')
  const adapter = new PrismaLibSql({
    url: process.env.DATABASE_URL || 'file:./dev.db',
  })

  return new PrismaClient({ adapter } as any)
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
