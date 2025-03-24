import type { Metadata } from "next";

import "@/assets/styles/globals.css";

import {  Inter } from "next/font/google";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";

// Load Cinzel Decorative with desired weights

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
