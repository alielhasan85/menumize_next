"use client";

import * as React from "react";
// import Image from "next/image";
// import Image from "next/image";
import {
  AudioWaveform,
  BarChart,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  Map,
  MoreHorizontal,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/app/(platform)/components/nav-main";
import { NavProjects } from "@/app/(platform)/components/nav-projects";
import { TeamSwitcher } from "@/app/(platform)/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/app/(platform)/components/sidebar";
import { SidebarLogo } from "./side-bar-logo";
import { NavSingleItem } from "./single-sidebar-item";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// This is sample data.
const data = {
  // TODO: teams is for venue list
  teams: [
    {
      name: "Naya menu",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "test 2",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Menu Management",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="gap-0 pt-0 pb-4">
        {/* Add the logo above the team switcher */}
        <SidebarLogo />
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Dashboard" asChild size={"lg"}>
                <a href="/dashboard">
                  <LayoutDashboard />
                  <span className="group-data-[collapsible=icon]:hidden">
                    Dashboard
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Reports" asChild size={"lg"}>
                <a href="/reports">
                  <BarChart />
                  <span className="group-data-[collapsible=icon]:hidden">
                    Reports
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Menu Management</SidebarGroupLabel>

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/menu">
                  <SquareTerminal />
                  <span>Menu Management</span>
                </a>
              </SidebarMenuButton>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuAction showOnHover>
                    <MoreHorizontal />
                    <span className="sr-only">More</span>
                  </SidebarMenuAction>
                </DropdownMenuTrigger>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <>to add contact</>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
