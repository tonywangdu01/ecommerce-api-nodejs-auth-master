# E-Commerce API

This is a Node.js E-Commerce API built using Express and Prisma. It provides functionalities for user authentication, product management, order processing, and payment integration.

## Features

- **JWT Authentication**: Secure user authentication with JSON Web Tokens.
- **CRUD Operations**: Create, Read, Update, and Delete operations for products and orders.
- **Payment Gateway Integration**: Process payments using a payment gateway like Stripe.

## Project Structure

```
ecommerce-api
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains controllers for handling requests
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── orderController.js
│   │   └── paymentController.js
│   ├── routes                # Contains route definitions
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── orderRoutes.js
│   │   └── paymentRoutes.js
│   ├── middleware            # Contains middleware functions
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── prisma                # Prisma client setup
│   │   └── client.js
│   ├── utils                 # Utility functions
│   │   └── jwt.js
│   └── config                # Configuration files
│       └── paymentConfig.js
├── prisma                    # Prisma schema
│   └── schema.prisma
├── .env                      # Environment variables
└── package.json              # NPM configuration
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd ecommerce-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your environment variables in the `.env` file. You can use the `.env.example` as a reference.

4. Run the Prisma migrations to set up the database:
   ```
   npx prisma migrate dev
   ```

5. Start the application:
   ```
   npm start
   ```

## API Usage

- **Authentication**: Use the `/auth` routes for user sign-up and login.
- **Products**: Use the `/products` routes to manage product listings.
- **Orders**: Use the `/orders` routes to create and retrieve orders.
- **Payments**: Use the `/payments` routes to process payments.

## License

This project is licensed under the MIT License.