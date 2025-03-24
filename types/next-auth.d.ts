// /types/next-auth.d.ts

import { DefaultSession, DefaultUser } from "next-auth";

// We want to augment the existing "next-auth" module declarations.
declare module "next-auth" {
  interface Session {
    user?: {
      /** The user's unique identifier. */
      id?: string;
      /** The user's email address. */
      email?: string | null;
      /** The user's display name. */
      name?: string | null;
      /** The user's profile picture. */
      image?: string | null;
      /** Our custom field from Prisma. */
      profileComplete?: boolean;
    };
  }

  // If you need to override the built-in `User` type for callbacks, etc.
  interface User extends DefaultUser {
    profileComplete?: boolean;
  }
}
