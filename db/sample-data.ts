// sample-data.ts

import { Role, SubscriptionTier } from "@prisma/client";

/**
 * Example users:
 * - We use "role" with type Role (one role per user).
 * - Minimal fields for demonstration. Adjust as needed.
 */
export const usersData = [
  {
    // id is optional because Prisma will auto-generate cuid
    name: "Alice Smith",
    email: "alice@example.com",
    phone: "+1 555 0101",
    role: Role.ADMIN,
    language: "en",
    orderNotification: true,
    feedbackNotification: true,
    integrationNotification: true,
    reservationNotification: true,
    smsNotification: false,
    emailNotification: true,
    // these are arrays, example:
    staff: ["Bob", "Charlie"],
    addOns: ["extraReports"],
  },
  {
    name: "Bob Manager",
    email: "bob@example.com",
    phone: "+1 555 0202",
    role: Role.MANAGER,
    language: "en",
    orderNotification: true,
    feedbackNotification: false,
    integrationNotification: true,
    reservationNotification: false,
    smsNotification: true,
    emailNotification: true,
    staff: [],
    addOns: [],
  },
  {
    name: "Charlie Waiter",
    email: "charlie@example.com",
    phone: "+1 555 0303",
    role: Role.WAITER,
    language: "fr",
    orderNotification: false,
    feedbackNotification: true,
    integrationNotification: false,
    reservationNotification: true,
    smsNotification: true,
    emailNotification: false,
    staff: [],
    addOns: [],
  },
];

/**
 * Example addresses.
 * Each address references a userId. We’ll set that in the seed script
 * after creating users, because we need user IDs from the DB.
 */
export const addressesData = [
  {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    country: "USA",
  },
  {
    street: "456 Elm Rd",
    city: "Los Angeles",
    state: "CA",
    postalCode: "90001",
    country: "USA",
  },
];

/**
 * Example subscriptions.
 * We’ll assign them to a user in the seed script once we have a userId.
 */
export const subscriptionsData = [
  {
    tier: SubscriptionTier.BASE,
    // startDate, endDate, isActive, etc. can be left to defaults or overridden
  },
  {
    tier: SubscriptionTier.PREMIUM,
  },
];

/**
 * Example payments.
 * We'll assign them to a user and possibly a subscription.
 */
export const paymentsData = [
  {
    amount: 49.99,
    description: "Initial subscription",
    paymentMethod: "credit_card",
  },
  {
    amount: 9.99,
    description: "Extra add-on purchase",
    paymentMethod: "paypal",
  },
];
