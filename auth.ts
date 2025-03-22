import { compareSync } from "bcrypt-ts-edge";
import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { prisma } from "@/db/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
export const config = {
  debug: true,

  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      profile(profile) {
        // Log the raw profile to verify its contents:
        console.log("Google profile:", profile);
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
    CredentialsProvider({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        if (credentials == null) return null;

        // Find user in database
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email as string,
          },
        });
        if (!user || !user.password) {
          // No user or no stored password
          return null;
        }

        // Check if user exists and password is correct
        if (user && user.password) {
          const isMatch = compareSync(
            credentials.password as string,
            user.password
          );
          // If password is correct, return user object
          if (isMatch) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
            };
          }
        }
        // If user doesn't exist or password is incorrect, return null
        return null;
      },
    }),
  ],

  callbacks: {
    // /**
    //  * The `signIn` callback runs after NextAuth finds or creates
    //  * the user in your database, for BOTH OAuth and credentials.
    //  * If you return a string (URL), NextAuth will redirect there.
    //  */
    // async signIn({ user, account }) {
    //   // Since user is guaranteed to be in DB at this point,
    //   // check the database to see if profileComplete is false.
    //   const foundUser = await prisma.user.findUnique({
    //     where: { email: user.email! },
    //   });
    //   if (!foundUser) {
    //     // If for some reason the user isn't found, let them sign in
    //     // or redirect to an error page if you prefer:
    //     return true;
    //   }
    //   // If profileComplete is false, send them to the profile page
    //   if (!foundUser.profileComplete) {
    //     // Return the route to complete their profile
    //     return "/(auth)/profile";
    //   }
    //   // Otherwise, go to the dashboard
    //   return "/(platform)/dashboard";
    // },
    // /**
    //  * If you're doing JWT sessions, attach the user ID so it's
    //  * available in `session.user.id`.
    //  */
    // async jwt({ token, user }) {
    //   if (user?.id) {
    //     token.sub = user.id;
    //   }
    //   return token;
    // },
    // /**
    //  * This is called whenever a session is checked (on both
    //  * client and server). We’ll copy the user id to session.user.id.
    //  */
    // async session({ session, token }) {
    //   if (token?.sub) {
    //     session.user.id = token.sub;
    //   }
    //   return session;
    // },
    // /**
    //  * Where NextAuth sends people when it calls `redirect()`.
    //  * Usually you can leave this as-is to keep them on the same domain.
    //  */
    // async redirect({ url, baseUrl }) {
    //   if (!url.startsWith(baseUrl)) {
    //     return baseUrl;
    //   }
    //   return url;
    // },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
