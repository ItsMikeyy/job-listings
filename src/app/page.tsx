import { Sidebar, SidebarHeader, SidebarProvider, SidebarTrigger, SidebarContent, SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroup } from "@/components/ui/sidebar";
import AppSidebarClient from "./_AppSidebarClient";
import { LogInIcon } from "lucide-react";
import Link from "next/link";
import { SignedOut } from "@/services/clerk/components/SignInStatus";

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
                        <LogInIcon />
                        <span>Login</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SignedOut>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>asdjsak</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    <main className="flex-1">adkals</main>
    </AppSidebarClient>
  </SidebarProvider>
  )
};

export default Home;