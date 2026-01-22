import { NextRequest, NextResponse } from 'next/server'
import { CategoriesService } from '../categories.service'

type RouterContex = {
  params: Promise<{
    id: string
  }>
}

const categoriesService = new CategoriesService()

export async function DELETE(_: NextRequest, { params }: RouterContex) {
  try {
    const id = Number((await params).id)
    const existing = await categoriesService.findById(id)
    if (!existing) {
      return NextResponse.json(
        {
          message: 'Category not found',
          success: false,
        },
        { status: 404 }
      )
    }
    const category = await categoriesService.delete(id)

    if (!category) {
      return NextResponse.json(
        {
          message: 'Category not found',
          success: false,
        },
        { status: 404 }
      )
    }
    return NextResponse.json(
      {
        message: 'Category successfully deleted',
        success: true,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: 'An error occured while deleting category',
        error: (error as Error).message,
        success: false,
      },
      { status: 500 }
    )
  }
}

export async function GET(_: NextRequest, { params }: RouterContex) {
  try {
    const id = Number((await params).id)
    const existing = await categoriesService.findById(id)
    if (!existing) {
      return NextResponse.json(
        {
          message: 'Category not found',
          success: false,
        },
        { status: 404 }
      )
    }
    const category = await categoriesService.findById(id)
    if (!category) {
      return NextResponse.json(
        {
          message: 'Category not found',
          success: false,
        },
        { status: 404 }
      )
    }
    return NextResponse.json(
      {
        message: 'Category successfully retrieved',
        success: true,
        data: category,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: 'An error occured while fetching category',
        error: (error as Error).message,
        success: false,
      },
      { status: 500 }
    )
  }
}

export async function PUT(req: NextRequest, { params }: RouterContex) {
  try {
    const id = Number((await params).id)
    const body = await req.json()
    const existing = await categoriesService.findById(id)
    if (!existing) {
      return NextResponse.json(
        {
          message: 'Category not found',
          success: false,
        },
        { status: 404 }
      )
    }
    const category = await categoriesService.update(id, body)
    return NextResponse.json(
      {
        message: 'Category successfully updated',
        success: true,
        data: category,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: 'An error occured while updating category',
        error: (error as Error).message,
        success: false,
      },
      { status: 500 }
    )
  }
}
