import Joi from 'joi'

export const createUserSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
})

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
})

export const createCategorySchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().max(255).optional(),
})
<<<<<<< HEAD

export const createTransactionSchema = Joi.object({
  amount: Joi.number().required(),
  description: Joi.string().required(),
  transactionDate: Joi.date().iso().required(),
})
=======
>>>>>>> 4e27e1d (feat: add input validation for category request body)
