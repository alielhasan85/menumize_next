// This function will be executed on the server.
"use server";
import { PrismaClient } from "@prisma/client";
import { convertToPlainObject } from "../utils";

// Get the latest products
export async function getLatestUsers() {
  const prisma = new PrismaClient();

  const data = await prisma.user.findMany({
    take: 1,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
}
