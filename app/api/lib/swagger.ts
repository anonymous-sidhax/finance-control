import swaggerJSDoc from 'swagger-jsdoc'

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Finance Control API',
    version: '1.0.0',
    description: 'API documentation for Finance Control application',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
}

const options = {
  swaggerDefinition,
  // Path to the API routes
  apis: ['./app/api/**/*.ts', './app/api/**/*.js', './app/api/**/*.yaml'],
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec
