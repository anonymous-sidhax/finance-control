import { NextRequest, NextResponse } from 'next/server'
import { TransactionsService } from '../transactions.service'

type RouterContext = {
  params: Promise<{
    id: string
  }>
}

const transactionsService = new TransactionsService()
export async function DELETE(_: NextRequest, { params }: RouterContext) {
  try {
    const id = Number((await params).id)
    const existing = await transactionsService.findById(id)
    if (!existing) {
      return NextResponse.json(
        {
          message: 'Transaction not found',
          success: false,
        },
        { status: 404 }
      )
    }

    await transactionsService.delete(id)

    return NextResponse.json(
      {
        message: 'Transaction successfully deleted',
        success: true,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: 'An error occurred while deleting transaction',
        error: (error as Error).message,
        success: false,
      },
      { status: 500 }
    )
  }
}

export async function GET(_: NextRequest, { params }: RouterContext) {
  try {
    const id = Number((await params).id)
    const transaction = await transactionsService.findById(id)

    if (!transaction) {
      return NextResponse.json(
        {
          message: 'Transaction not found',
          success: false,
        },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        message: 'Transaction successfully retrieved',
        success: true,
        data: transaction,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: 'An error occurred while fetching transaction',
        error: (error as Error).message,
        success: false,
      },
      { status: 500 }
    )
  }
}

export async function PUT(req: NextRequest, { params }: RouterContext) {
  try {
    const id = Number((await params).id)
    const body = await req.json()

    const existing = await transactionsService.findById(id)
    if (!existing) {
      return NextResponse.json(
        {
          message: 'Transaction not found',
          success: false,
        },
        { status: 404 }
      )
    }

    const updatedTransaction = await transactionsService.update(id, body)

    return NextResponse.json(
      {
        message: 'Transaction successfully updated',
        success: true,
        data: updatedTransaction,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: 'An error occurred while updating transaction',
        error: (error as Error).message,
        success: false,
      },
      { status: 500 }
    )
  }
}
