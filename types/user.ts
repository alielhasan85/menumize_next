// types/user.ts
import { z } from "zod";
import { userCreateSchema } from "@/lib/validators/user.validator";

// Inferred input type from the create schema.
export type UserCreateInput = z.infer<typeof userCreateSchema>;

// Extended type for a User returned from the database.
// Here you add properties that are not provided by the client (e.g., id, createdAt, etc.).
export type UserOutput = UserCreateInput & {
  id: string;
  createdAt: Date;
  lastLogin?: Date | null;
  loginCount: number;
  totalPaid: string; // assuming you've transformed Prisma's Decimal to a string
  isActive: boolean;
  // Arrays, relationships, etc. would be included here as needed.
};
