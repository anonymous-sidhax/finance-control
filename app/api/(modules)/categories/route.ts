import { NextRequest, NextResponse } from 'next/server'
import { CategoriesService } from './categories.service'

const categoriesService = new CategoriesService()
export async function GET() {
  try {
    const categories = await categoriesService.findAll()
    return NextResponse.json(
      {
        message: 'Categories successfully retrieved',
        success: true,
        data: categories,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: 'An error occured while fetching categories',
        error: (error as Error).message,
        success: false,
      },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const category = await categoriesService.create(body)
    return NextResponse.json(
      {
        message: 'Category successfully created',
        success: true,
        data: category,
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: 'An error occured while creating category',
        error: (error as Error).message,
        success: false,
      },
      { status: 500 }
    )
  }
}
