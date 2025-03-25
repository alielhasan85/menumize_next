// lib/actions/profile.actions.ts
"use server";

import { prisma } from "@/db/prisma";
import { auth } from "@/auth";
import type { ProfileSchema } from "@/lib/validators/user.validator";
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

/**
 * Updates the current user's profile with the provided values
 * and marks the profile as complete.
 */
export async function completeProfileAction(values: ProfileSchema) {
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("No user session found. Cannot complete profile.");
  }

  const updatedUser = await prisma.user.update({
    where: { email: session.user.email },
    data: {
      name: values.name,
      phone: values.phone,
      businessName: values.businessName,
      // Here we store the country inside the 'address' field (adjust as needed)
      address: { country: values.country },
      profileComplete: true,
    },
  });

  // Convert to a plain object before returning:
  return { success: true, updatedUser: JSON.parse(JSON.stringify(updatedUser)) };
}