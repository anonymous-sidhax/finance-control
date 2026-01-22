import { prisma } from '@/app/api/lib/prisma'

export class CategoriesService {
  private prisma = prisma
  async create(data: { name: string; description?: string }) {
    const category = await this.prisma.category.create({ data })
    return category
  }

  async findById(id: number) {
    return await this.prisma.category.findUnique({
      where: { id },
    })
  }

  async findAll() {
    return await this.prisma.category.findMany()
  }

  async update(id: number, data: { name?: string; description?: string }) {
    return await this.prisma.category.update({
      where: { id },
      data,
    })
  }

  async delete(id: number) {
    return await this.prisma.category.delete({
      where: { id },
    })
  }
}
