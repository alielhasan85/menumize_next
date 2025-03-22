// Page.tsx
import { AppSidebar } from "@/app/(platform)/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/app/(platform)/components/sidebar";
import { NavUser } from "@/app/(platform)/components/nav-user";
import { auth } from "@/auth";

export default async function Page() {
  // Fetch session data on the server side
  const session = await auth();

  // Transform session.user to match NavUser's expected shape.
  const user = {
    name: session?.user?.name || "Guest",
    email: session?.user?.email || "",
    // Map the session's image property to avatar
    avatar: session?.user?.image || "/default-avatar.png",
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-white flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
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
          {/* Add NavUser on the right */}
          <div className="ml-auto pr-4">
            <NavUser user={user} />
          </div>
        </header>
        <div className="bg-background-platform flex flex-1 flex-col gap-4 p-4 pt-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-white aspect-video rounded-xl" />
            <div className="bg-white aspect-video rounded-xl" />
            <div className="bg-white aspect-video rounded-xl" />
          </div>
          <div className="bg-white min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
