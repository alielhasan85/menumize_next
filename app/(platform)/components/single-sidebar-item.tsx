"use client";

import * as React from "react";
import Image from "next/image";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/app/(platform)/components/sidebar";

type NavSingleItemProps = {
  /** The URL or route path for this item. */
  url: string;
  /** The text label shown next to the icon. */
  text: string;
  /** Path to your icon/image (e.g. "/icons/dashboard.svg"). */
  iconSrc: string;
  /** Optional alt text for the icon (defaults to `text`). */
  iconAlt?: string;
  /** Control the icon width/height (defaults to 24). */
  iconWidth?: number;
  iconHeight?: number;
  /** Tooltip when sidebar is collapsed (defaults to `text`). */
  tooltip?: string;
  /**
   * Group label if you want to nest this item under a heading.
   * If omitted, no group heading is shown.
   */
  navGroupLabel?: string;
};

/**
 * Renders a single sidebar item with an image icon.
 * If `navGroupLabel` is provided, the item is grouped under that label.
 */
export function NavSingleItem({
  url,
  text,
  iconSrc,
  iconAlt,
  iconWidth = 20,
  iconHeight = 20,
  tooltip,
  navGroupLabel,
}: NavSingleItemProps) {
  const finalTooltip = tooltip ?? text;

  const itemNode = (
   
      <SidebarMenuItem className="px-2">
        <SidebarMenuButton tooltip={finalTooltip} asChild>
          <a href={url}>
            <Image
              src={iconSrc}
              alt={iconAlt ?? text}
              width={iconWidth}
              height={iconHeight}
            />
            <span>{text}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
  
  );

  // If no group label is provided, simply render the item within a SidebarMenu.
  if (!navGroupLabel) {
    return <SidebarMenu>{itemNode}</SidebarMenu>;
  }

  // Otherwise, wrap it in a group with a label.
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{navGroupLabel}</SidebarGroupLabel>
      <SidebarMenu>{itemNode}</SidebarMenu>
    </SidebarGroup>
  );
}
