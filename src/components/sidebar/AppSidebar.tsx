import { Sidebar, SidebarHeader, SidebarProvider, SidebarTrigger, SidebarContent, SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroup } from "@/components/ui/sidebar";
import AppSidebarClient from "./_AppSidebarClient";
import { SignedIn,} from "@/services/clerk/components/SignInStatus";

export const AppSidebar = ({content, footerButton, children} : {content: React.ReactNode, footerButton: React.ReactNode, children: React.ReactNode}) => {
    return (
        <SidebarProvider className="overflow-y-hidden">
          <AppSidebarClient>
            <Sidebar collapsible="icon" className="overflow-hidden">
              <SidebarHeader className="flex-row">
                <SidebarTrigger />
                <span className="text-xl text-nowrap">JOBS</span>
              </SidebarHeader>
              <SidebarContent>
                {content}
              </SidebarContent>
              <SignedIn>
                <SidebarFooter>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      {footerButton}
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarFooter>
              </SignedIn>
            </Sidebar>
          <main className="flex-1">{children}</main>
          </AppSidebarClient>
        </SidebarProvider>
    )
}