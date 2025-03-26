"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  AudioWaveform,
  BarChart,
  Command,
  GalleryVerticalEnd,
  LayoutDashboard,
  ListTree,
  Settings,
} from "lucide-react";

import { TeamSwitcher } from "@/app/(platform)/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SidebarLogo } from "./side-bar-logo";

// Import your new components
import CollapsibleMenu from "./collapsible-menu";
import SidebarSingleItem from "./sidebar-single-item";

// SAMPLE DATA
const data = {
  teams: [
    { name: "Naya menu", logo: GalleryVerticalEnd, plan: "Enterprise" },
    { name: "test 2", logo: AudioWaveform, plan: "Startup" },
    { name: "Evil Corp.", logo: Command, plan: "Free" },
  ],
};

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const currentPath = usePathname();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="gap-0 pt-0 pb-4">
        <SidebarLogo />
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>

      <SidebarContent>
        {/* Dashboard Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarSingleItem
              href="/dashboard"
              icon={LayoutDashboard}
              label="Dashboard"
              tooltip="Dashboard"
            />
            <SidebarSingleItem
              href="/reports"
              icon={BarChart}
              label="Reports"
              tooltip="Reports"
            />
          </SidebarMenu>
        </SidebarGroup>

        {/* Menu Management Group */}
        <SidebarGroup>
          <SidebarMenu>
            <CollapsibleMenu
              icon={ListTree}
              label="Menu Management"
              currentPath={currentPath}
              items={[
                { label: "Menu", href: "/menu" },
                { label: "Section", href: "/section" },
                { label: "Items", href: "/items" },
                { label: "Adds on", href: "/addons" },
              ]}
            />
          </SidebarMenu>

          {/* Settings Group */}
          <SidebarMenu>
            <CollapsibleMenu
              icon={Settings}
              label="Settings"
              currentPath={currentPath}
              items={[
                { label: "Venue Information", href: "/settings/venue" },
                { label: "Branding & Design", href: "/settings/branding" },
                { label: "Social Media", href: "/social-media" },
                { label: "Prices Options", href: "/prices-options" },
                { label: "Tables", href: "/tables" },
                { label: "QR Codes", href: "/qr-codes" },
              ]}
            />
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <>to add contact</>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
