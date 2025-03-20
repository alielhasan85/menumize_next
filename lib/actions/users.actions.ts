// user.actions.ts
"use server";
import { prisma } from "@/db/prisma";
import { userOutputSchema } from "@/lib/validators/user.validator";
import { convertToPlainObject } from "../utils";

export async function getLatestUsers() {
  const data = await prisma.user.findMany({
    take: 1,
    orderBy: { createdAt: "desc" },
  });

  // Parse and transform the data using the Zod schema.
  const parsedData = userOutputSchema.array().parse(data);

  return convertToPlainObject(parsedData);
}
