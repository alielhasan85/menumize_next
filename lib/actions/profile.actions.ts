"use server";

import { prisma } from "@/db/prisma";
import { auth } from "@/auth"; // wherever you defined NextAuth config

/**
 * Marks the current user's `profileComplete` as true.
 */
export async function skipProfileAction() {

  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("No user session found. Cannot skip profile.");
  }

  await prisma.user.update({
    where: { email: session.user.email },
    data: { profileComplete: true },
  });

  return true;
}
