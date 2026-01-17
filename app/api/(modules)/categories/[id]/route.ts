import { NextRequest, NextResponse } from 'next/server'
import { CategoriesService } from '../categories.service'

const categoriesService = new CategoriesService()
export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id)
    await categoriesService.delete(id)
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

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id)
    const category = await categoriesService.findById(id)
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

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id)
    const body = await req.json()
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
