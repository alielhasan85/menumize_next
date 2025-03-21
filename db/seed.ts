// seed.ts
import { prisma } from "@/db/prisma"; // or wherever your PrismaClient is exported
import {
  usersData,
  addressesData,
  subscriptionsData,
  paymentsData,
} from "./sample-data";

async function main() {
  console.log("Seeding database...");

  // 1. Create Users (with hashed passwords already in usersData)
  const createdUsers = await prisma.user.createMany({
    data: usersData,
    skipDuplicates: true,
  });
  console.log(`Created ${createdUsers.count} users.`);

  // 2. Fetch actual user records (to get their generated UUID IDs)
  const allUsers = await prisma.user.findMany();
  console.log("All users:", allUsers);

  // 3. Update the first user's "address" field with addressesData as JSON
  if (allUsers.length > 0) {
    const firstUserId = allUsers[0].id;
    await prisma.user.update({
      where: { id: firstUserId },
      data: {
        address: addressesData, // store entire addresses array as JSON
      },
    });
    console.log(`Updated user ${firstUserId} with address data`);
  }

  // 4. Assign a subscription to each user (randomly picks from subscriptionsData)
  for (const user of allUsers) {
    const randomSubscription =
      subscriptionsData[Math.floor(Math.random() * subscriptionsData.length)];

    await prisma.subscription.create({
      data: {
        ...randomSubscription,
        userId: user.id, // must be a UUID
      },
    });
  }
  console.log("Assigned random subscriptions to each user.");

  // 5. Create Payment records for the first user
  if (allUsers.length > 0) {
    const firstUserId = allUsers[0].id;
    for (const payment of paymentsData) {
      await prisma.payment.create({
        data: {
          ...payment,
          userId: firstUserId,
          // subscriptionId could also be linked here if desired
        },
      });
    }
    console.log(
      `Created ${paymentsData.length} payments for user ${firstUserId}.`
    );
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
