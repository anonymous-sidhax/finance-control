import { prisma } from '@/lib/prisma'

export class CategoriesService {
  private prisma = prisma
  async create(data: { name: string; description?: string }) {
    const category = await this.prisma.category.create({ data })
    return category
  }

  async findById(id: number) {
    const category = await this.prisma.category.findUnique({
      where: { id },
    })
    return category
  }

  async findAll() {
    const categories = await this.prisma.category.findMany()
    return categories
  }

  async update(id: number, data: { name?: string; description?: string }) {
    const category = await this.prisma.category.update({
      where: { id },
      data,
    })
    return category
  }

  async delete(id: number) {
    return await this.prisma.category.delete({
      where: { id },
    })
  }
}
