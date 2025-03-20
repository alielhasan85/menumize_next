// db/prisma.ts
import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import ws from "ws";

// Set up WebSocket connections for Neon using the 'ws' package.
neonConfig.webSocketConstructor = ws;

// Read the connection string from environment variables.
const connectionString = process.env.DATABASE_URL as string;

// Create a new connection pool using Neon’s serverless driver.
const pool = new Pool({ connectionString });

// Instantiate the Prisma adapter with the Neon connection pool.
const adapter = new PrismaNeon(pool);

// Extend PrismaClient to automatically convert the Decimal field 'totalPaid'
// in the User model to a string before it reaches your application.
export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    user: {
      totalPaid: {
        compute(user) {
          return user.totalPaid.toString();
        },
      },
    },
    // You can add additional transformations for other models if needed.
    // For example, for Payment model's 'amount', if desired:
    // payment: {
    //   amount: {
    //     compute(payment) {
    //       return payment.amount.toString();
    //     },
    //   },
    // },
  },
});
