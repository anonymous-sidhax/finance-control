import { NextResponse } from 'next/server'
import Joi from 'joi'

export const validateDto = (schema: Joi.ObjectSchema) => async (body: any) => {
  try {
    const { error } = schema.validate(body, { abortEarly: false })

    if (error) {
      return NextResponse.json(
        { message: 'Validation failed', error: error.details },
        { status: 400 }
      )
    }

    return null // Validation passed
  } catch (err) {
    // console.log(err);
    return NextResponse.json(
      { message: 'Invalid JSON payload', error: err },
      { status: 400 }
    )
  }
}

export const validateArrayDto =
  (schema: Joi.ArraySchema) => async (body: any) => {
    try {
      const { error } = schema.validate(body, { abortEarly: false })

      if (error) {
        return NextResponse.json(
          { message: 'Validation failed', error: error.details },
          { status: 400 }
        )
      }

      return null // Validation passed
    } catch (err) {
      // console.log(err);
      return NextResponse.json(
        { message: 'Invalid JSON payload', error: err },
        { status: 400 }
      )
    }
  }
