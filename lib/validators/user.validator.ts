// \menumize-try3\lib\validators\user.validator.ts 
import { z } from "zod";

/**
 * Schema for creating or updating a user.
 * (Email, name, and password may be required in sign‑up flows; adjust as needed.)
 */
export const userCreateSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"), // required
  jobTitle: z.string().optional(),
  businessName: z.string().optional(),
  phone: z.string().optional(),
  role: z
    .enum(["ADMIN", "USER", "MANAGER", "WAITER", "ACCOUNTANT"])
    .default("USER"),
  // You might want to require a password on sign‑up.
  password: z.string().optional(),
  language: z.string().optional(),
  orderNotification: z.boolean().default(true),
  feedbackNotification: z.boolean().default(true),
  integrationNotification: z.boolean().default(true),
  reservationNotification: z.boolean().default(true),
  smsNotification: z.boolean().default(false),
  emailNotification: z.boolean().default(true),
  // In this create schema, we only include addOns (no staff since it's removed)
  addOns: z.array(z.string()).default([]),
});

/**
 * Schema for the User output (as stored in the database).
 * This includes all fields returned by Prisma. For fields that can be null,
 * we transform null to undefined. The totalPaid field accepts a number or string and returns a string.
 * We also default nested arrays to empty arrays.
 */
export const userOutputSchema = z.object({
  id: z.string(),
  email: z.string().email(), // required, non-null
  name: z.string(),
  // Optional fields that may be null:
  jobTitle: z
    .string()
    .nullable()
    .optional()
    .transform((val) => (val === null ? undefined : val)),
  businessName: z
    .string()
    .nullable()
    .optional()
    .transform((val) => (val === null ? undefined : val)),
  phone: z
    .string()
    .nullable()
    .optional()
    .transform((val) => (val === null ? undefined : val)),
  // NextAuth related fields (if present) can be added later if needed
  role: z.enum(["ADMIN", "USER", "MANAGER", "WAITER", "ACCOUNTANT"]),
  createdAt: z.date(),
  lastLogin: z
    .date()
    .nullable()
    .optional()
    .transform((val) => (val === null ? undefined : val)),
  loginCount: z.number(),
  totalPaid: z
    .union([z.number(), z.string()])
    .transform((val) => (typeof val === "string" ? val : val.toString())),
  isActive: z.boolean(),
  language: z
    .string()
    .nullable()
    .optional()
    .transform((val) => (val === null ? undefined : val)),
  orderNotification: z.boolean(),
  feedbackNotification: z.boolean(),
  integrationNotification: z.boolean(),
  reservationNotification: z.boolean(),
  smsNotification: z.boolean(),
  emailNotification: z.boolean(),
  addOns: z.array(z.string()),
  // In your new model, address is stored as JSON.
  address: z.any().optional(),
  // For related models, default to empty arrays.
  subscriptions: z.array(z.any()).optional().default([]),
  payments: z.array(z.any()).optional().default([]),
  // NextAuth relations:
  account: z.array(z.any()).optional().default([]),
  session: z.array(z.any()).optional().default([]),
  profileComplete: z.boolean(),
});

export const signInFormSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .min(3, "Email must be at least 3 characters"),
  password: z.string().min(3, "Password must be at least 3 characters"),
});

// Create a new schema for profile completion by picking and extending fields
export const profileSchema = userCreateSchema
  .pick({
    name: true,
    phone: true,
    businessName: true,
  })
  .extend({
    country: z.string().min(1, "Country is required"),
  });

  export type ProfileSchema = z.infer<typeof profileSchema>;

// Export TypeScript types (if needed)
export type UserCreateInput = z.infer<typeof userCreateSchema>;
export type UserOutput = z.infer<typeof userOutputSchema>;
