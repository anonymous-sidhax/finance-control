import { NextRequest, NextResponse } from 'next/server'
import { TransactionsService } from './transactions.service'
import { validateDto } from '../../util/validateDTO'
import { createTransactionSchema } from '../../lib/joi/schema' // You need to add this export

const transactionsService = new TransactionsService()

export async function GET(req: NextRequest) {
  try {
    const transactions = await transactionsService.findAll()

    return NextResponse.json(
      {
        message: 'Transactions successfully retrieved',
        success: true,
        data: transactions,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: 'An error occurred while fetching transactions',
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
    const validateError = await validateDto(createTransactionSchema)(body)
    if (validateError) return validateError
    const transaction = await transactionsService.create(body)

    return NextResponse.json(
      {
        message: 'Transaction successfully created',
        success: true,
        data: transaction,
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: 'An error occurred while creating transaction',
        error: (error as Error).message,
        success: false,
      },
      { status: 500 }
    )
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const idParam = searchParams.get('id')

    if (!idParam) {
      return NextResponse.json(
        { error: 'ID parameter is required for update' },
        { status: 400 }
      )
    }

    const id = Number(idParam)
    const body = await req.json()

    const updatedTransaction = await transactionsService.update(id, {
      amount: body.amount ? Number(body.amount) : undefined,
      description: body.description,
      transactionDate: body.transactionDate,
    })

    return NextResponse.json(
      {
        message: 'Transaction updated',
        success: true,
        data: updatedTransaction,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Update failed', error: (error as Error).message },
      { status: 500 }
    )
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const idParam = searchParams.get('id')

    if (!idParam) {
      return NextResponse.json(
        { error: 'ID parameter is required' },
        { status: 400 }
      )
    }

    const id = Number(idParam)
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
    }

    await transactionsService.delete(id)

    return NextResponse.json(
      { message: 'Transaction deleted successfully', success: true },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete', details: (error as Error).message },
      { status: 500 }
    )
  }
}
