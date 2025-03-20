// user.validator.ts
import { z } from "zod";

/**
 * Schema for creating or updating a user.
 * (Email is required here since a user must sign up with an email.)
 */
export const userCreateSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"), // now required
  jobTitle: z.string().optional(),
  businessName: z.string().optional(),
  phone: z.string().optional(),
  role: z
    .enum(["ADMIN", "USER", "MANAGER", "WAITER", "ACCOUNTANT"])
    .default("USER"),
  language: z.string().optional(),
  orderNotification: z.boolean().default(true),
  feedbackNotification: z.boolean().default(true),
  integrationNotification: z.boolean().default(true),
  reservationNotification: z.boolean().default(true),
  smsNotification: z.boolean().default(false),
  emailNotification: z.boolean().default(true),
  staff: z.array(z.string()).default([]),
  addOns: z.array(z.string()).default([]),
});

/**
 * Schema for the User output (as stored in the database).
 * For fields like jobTitle, businessName, phone, language, and lastLogin we allow null
 * and transform null to undefined.
 * The totalPaid field accepts either a number or a string and then transforms it to a string.
 * We also ensure that nested arrays default to empty arrays.
 */
export const userOutputSchema = z.object({
  id: z.string(),
  email: z.string().email(), // required, non-null
  name: z.string(),
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
  staff: z.array(z.string()),
  addOns: z.array(z.string()),
  // For nested relationships, allow undefined and default to an empty array.
  addresses: z.array(z.any()).optional().default([]),
  subscriptions: z.array(z.any()).optional().default([]),
  payments: z.array(z.any()).optional().default([]),
});

// Export TypeScript types (if needed)
export type UserCreateInput = z.infer<typeof userCreateSchema>;
export type UserOutput = z.infer<typeof userOutputSchema>;
