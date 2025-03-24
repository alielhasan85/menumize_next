// app/(marketing)/layout.tsx
"use client";

// import Link from "next/link";
// import { QrCode } from "lucide-react";

import Footer from "./components/footer";
import Header from "./components/header";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // If you still want to smooth scroll to sections by ID,
  // you could put that logic here or convert them to anchor links (#features, #pricing).

  return (
    <div className="flex flex-col min-h-screen">
     

      <Header />



      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
