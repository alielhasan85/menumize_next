"use client";

import * as React from "react";
import Image from "next/image";
import { useSidebar } from "@/app/(platform)/components/sidebar";

function SidebarLogo() {
  const { state } = useSidebar();

  // When collapsed, hide the logo completely.
  if (state === "collapsed") return null;

  return (
    <div className="relative w-[190px] aspect-[190/80]">
      <Image
        src="/logo.png"
        alt="Menumize Logo"
        fill
        sizes="(max-width: 768px) 100vw, 190px"
        className="object-contain"
        priority
      />
    </div>
  );
}

export { SidebarLogo };
