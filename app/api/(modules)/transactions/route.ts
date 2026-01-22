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
