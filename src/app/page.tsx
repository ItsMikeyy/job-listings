import { Sidebar, SidebarHeader, SidebarProvider, SidebarTrigger, SidebarContent, SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import AppSidebarClient from "./_AppSidebarClient";

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
          asdsad
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