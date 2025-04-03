"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

interface CollapsibleMenuProps {
  label: string;
  tooltip?: string;
  /**
   * Default open state if not otherwise determined.
   * If one of `items` matches the current path,
   * that will take precedence.
   */
  openByDefault?: boolean;
  /**
   * The current path (e.g. from Next.js router.pathname).
   */
  currentPath?: string;
  /**
   * Sub-menu items. Each item is something like
   * { label: "Venue Information", href: "/settings/venue" }
   */
  items: {
    label: string;
    href: string;
  }[];
}

export default function CollapsibleMenu({
  label,
  tooltip,
  openByDefault = false,
  currentPath = "",
  items,
}: CollapsibleMenuProps) {
  // Force open if currentPath starts with any of the item hrefs
  const shouldForceOpen = items.some(
    (item) => currentPath && currentPath.startsWith(item.href)
  );

  return (
    <Collapsible
      asChild
      defaultOpen={shouldForceOpen || openByDefault}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={tooltip || label}>
            <ChevronRight />
            <span>{label}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {items.map((item, index) => {
              // Determine if this sub-item is the active one.
              const isActive = currentPath === item.href;
              return (
                <SidebarMenuSubItem key={index}>
                  <SidebarMenuSubButton asChild isActive={isActive}>
                    <a href={item.href}>
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              );
            })}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}
