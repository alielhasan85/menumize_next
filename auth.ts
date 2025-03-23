// import { compareSync } from "bcrypt-ts-edge";
// import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import ForwardEmail from "next-auth/providers/forwardemail";

import { prisma } from "@/db/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/sign-in",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],

  // callbacks: {
  //   /**
  //    * The `signIn` callback runs after NextAuth finds or creates
  //    * the user in your database, for BOTH OAuth and credentials.
  //    * If you return a string (URL), NextAuth will redirect there.
  //    */
  //   async signIn({ user, account }) {
  //     // Since user is guaranteed to be in DB at this point,
  //     // check the database to see if profileComplete is false.
  //     const foundUser = await prisma.user.findUnique({
  //       where: { email: user.email! },
  //     });
  //     if (!foundUser) {
  //       // If for some reason the user isn't found, let them sign in
  //       // or redirect to an error page if you prefer:
  //       return true;
  //     }
  //     // If profileComplete is false, send them to the profile page
  //     if (!foundUser.profileComplete) {
  //       // Return the route to complete their profile
  //       return "/profile";
  //     }
  //     // Otherwise, go to the dashboard
  //     return "/dashboard";
  //   },
  //   /**
  //    * If you're doing JWT sessions, attach the user ID so it's
  //    * available in `session.user.id`.
  //    */
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.sub = user.id;
  //       token.email = user.email;
  //     }
  //     return token;
  //   },
  //   /**
  //    * This is called whenever a session is checked (on both
  //    * client and server). We’ll copy the user id to session.user.id.
  //    */
  //   async session({ session, token }) {
  //     if (token?.sub) {
  //       session.user.id = token.sub;
  //     }
  //     if (token?.email) {
  //       session.user.email = token.email;
  //     }
  //     return session;
  //   },
  //   /**
  //    * Where NextAuth sends people when it calls `redirect()`.
  //    * Usually you can leave this as-is to keep them on the same domain.
  //    */
  // },
});
