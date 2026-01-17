import { prisma } from '@/app/api/lib/prisma'

export class TransactionsService {
  private prisma = prisma
  async create(data: {
    amount: number
    description: string
    transactionDate: string
  }) {
    return await this.prisma.transaction.create({
      data: {
        amount: data.amount,
        description: data.description,
        transactionDate: new Date(data.transactionDate),
      },
    })
  }

  async findAll() {
    return await prisma.transaction.findMany({
      orderBy: { transactionDate: 'desc' },
    })
  }

  async update(
    id: number,
    data: { amount?: number; description?: string; transactionDate?: string }
  ) {
    return await this.prisma.transaction.update({
      where: { id },
      data: {
        amount: data.amount,
        description: data.description,
        ...(data.transactionDate && {
          transactionDate: new Date(data.transactionDate),
        }),
      },
    })
  }

  async delete(id: number) {
    return await this.prisma.transaction.delete({
      where: { id },
    })
  }
}
