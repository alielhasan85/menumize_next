"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Icon as LucideIcon } from "lucide-react";
import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../../components/ui/sidebar";

/**
 * A single, non-collapsible sidebar menu item.
 * @param icon     A Lucide icon component
 * @param label    The text label
 * @param tooltip  Tooltip text (optional)
 * @param href     The URL for the link
 */
interface SidebarSingleItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  tooltip?: string;
}

export default function SidebarSingleItem({
  icon: Icon,
  label,
  href,
  tooltip,
}: SidebarSingleItemProps) {
  const currentPath = usePathname();
  const isActive = currentPath === href;

  return (
    <SidebarMenuItem>
      <SidebarMenuButton isActive={isActive} tooltip={tooltip || label} asChild>
        <a href={href}>
          <Icon />
          <span className="group-data-[collapsible=icon]:hidden">{label}</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
