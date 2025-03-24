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

   callbacks: {
    async session({ session, token }) {
      if (!token?.email) return session;
      const foundUser = await prisma.user.findUnique({
        where: { email: token.email },
      });
      // This now compiles fine because our `next-auth.d.ts` says
      // session.user has an optional `profileComplete` property.
      session.user.profileComplete = foundUser?.profileComplete ?? false;
      return session;
    },
}

});
