import { Role, SubscriptionTier } from "@prisma/client";
import { hashSync } from "bcrypt-ts-edge";

// Example: 3 users with various roles
export const usersData = [
  {
    name: "Alice Admin",
    email: "alice@example.com",
    password: hashSync("AlicePass123", 10), // hashed password
    role: Role.ADMIN,

    // Optional fields according to your schema
    emailVerified: null,
    image: "https://example.com/alice.jpg",
    jobTitle: "CEO",
    businessName: "Alice Co.",
    phone: "+1 555 0101",
    language: "en",
    orderNotification: true,
    feedbackNotification: true,
    integrationNotification: true,
    reservationNotification: true,
    smsNotification: false,
    emailNotification: true,
    addOns: ["extraReports"],
  },
  {
    name: "Bob Manager",
    email: "bob@example.com",
    password: hashSync("BobPass456", 10),
    role: Role.MANAGER,

    emailVerified: null,
    image: "https://example.com/bob.jpg",
    jobTitle: "Manager",
    businessName: "Bob Inc.",
    phone: "+1 555 0202",
    language: "en",
    orderNotification: true,
    feedbackNotification: false,
    integrationNotification: true,
    reservationNotification: false,
    smsNotification: true,
    emailNotification: true,
    addOns: [],
  },
  {
    name: "Charlie Waiter",
    email: "charlie@example.com",
    password: hashSync("Charlie789", 10),
    role: Role.WAITER,

    emailVerified: null,
    image: null,
    jobTitle: "Waiter",
    businessName: null,
    phone: "+1 555 0303",
    language: "fr",
    orderNotification: false,
    feedbackNotification: true,
    integrationNotification: false,
    reservationNotification: true,
    smsNotification: true,
    emailNotification: false,
    addOns: [],
  },
];

// Example addresses (stored as JSON in the `User.address` field)
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

// Example subscriptions
export const subscriptionsData = [
  {
    tier: SubscriptionTier.BASE,
    // startDate/endDate/isActive can rely on their defaults
  },
  {
    tier: SubscriptionTier.PREMIUM,
  },
];

// Example payments
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
