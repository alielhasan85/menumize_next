// app/(platform)/layout.tsx
import { redirect } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/app/(platform)/components/sidebar";
import { AppSidebar } from "@/app/(platform)/components/app-sidebar";
import { SidebarInset } from "@/app/(platform)/components/sidebar";
import { NavUser } from "@/app/(platform)/components/nav-user";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { auth } from "@/auth";

import "@/assets/styles/globals.css"; // if needed

export const metadata = {
  title: "Platform Section",
  description: "Pages inside (platform)",
};

export default async function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Protect all pages under (platform) with your auth logic
  const session = await auth();
  if (!session?.user) {
    redirect("/sign-in");
  }
  if (!session.user.profileComplete) {
    redirect("/profile");
  }

  // Transform session.user to match NavUser's expected shape
  const user = {
    name: session.user.name ?? "Guest",
    email: session.user.email ?? "",
    avatar: session.user.image ?? "/default-avatar.png",
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Header (if you want it on every page) */}
        <header className="bg-white flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            {/* Replace this with <SidebarTrigger /> if you like */}
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="ml-auto pr-4">
            <NavUser user={user} />
          </div>
        </header>
        {/* Main content area for each child route */}
        <div className="bg-background-platform flex flex-1 flex-col gap-4 p-4 pt-4">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
