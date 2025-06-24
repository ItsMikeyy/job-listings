import { Sidebar, SidebarHeader, SidebarProvider, SidebarTrigger, SidebarContent, SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroup } from "@/components/ui/sidebar";
import AppSidebarClient from "./_AppSidebarClient";
import { LogInIcon } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut } from "@/services/clerk/components/SignInStatus";
import { SidebarUserButton } from "./features/users/components/SidebarUserButton";

const Home = () => {
  return (
  <SidebarProvider className="overflow-y-hidden">
    <AppSidebarClient>
      <Sidebar collapsible="icon" className="overflow-hidden">
        <SidebarHeader className="flex-row">
          <SidebarTrigger />
          <span className="text-xl text-nowrap">JOBS</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup >
            <SidebarMenu>
                <SignedOut>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/sign-in">
                        <div className="flex items-center gap-2">
                          <LogInIcon />
                          <span>Login</span>
                        </div>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SignedOut>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SignedIn>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarUserButton />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </SignedIn>
      </Sidebar>
    <main className="flex-1">adkals</main>
    </AppSidebarClient>
  </SidebarProvider>
  )
};

export default Home;