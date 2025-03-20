// seed.ts

import { prisma } from "@/db/prisma";
import {
  usersData,
  addressesData,
  subscriptionsData,
  paymentsData,
} from "./sample-data";

async function main() {
  console.log("Seeding database...");

  // 1. Create Users
  // createMany supports an array of objects
  const createdUsers = await prisma.user.createMany({
    data: usersData,
    skipDuplicates: true, // if you run seed multiple times, avoids error for unique fields
  });
  console.log(`Created ${createdUsers.count} users`);

  // Retrieve the actual user records (to get their auto-generated IDs).
  const allUsers = await prisma.user.findMany();
  console.log("All users:", allUsers);

  // 2. Assign addresses to a user
  // For example, let's assign the addresses to the first user
  if (allUsers.length > 0) {
    const userId = allUsers[0].id;

    // For demonstration, create each address one by one
    for (const addressData of addressesData) {
      await prisma.address.create({
        data: {
          ...addressData,
          userId, // reference the first user's ID
        },
      });
    }
    console.log(`Assigned ${addressesData.length} addresses to user ${userId}`);
  }

  // 3. Assign a subscription to each user (just an example)
  for (const user of allUsers) {
    // pick a random subscription data
    const randomSubscriptionData =
      subscriptionsData[Math.floor(Math.random() * subscriptionsData.length)];
    await prisma.subscription.create({
      data: {
        ...randomSubscriptionData,
        userId: user.id,
      },
    });
  }
  console.log(`Assigned a random subscription to all users`);

  // 4. Create Payment records
  // For demonstration, we attach each payment to the first user
  if (allUsers.length > 0) {
    const userId = allUsers[0].id;
    for (const paymentData of paymentsData) {
      // Optionally also link a subscription if needed
      await prisma.payment.create({
        data: {
          ...paymentData,
          userId,
          // subscriptionId: <some subscription.id if you want to link>
        },
      });
    }
    console.log(`Created ${paymentsData.length} payments for user ${userId}`);
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
