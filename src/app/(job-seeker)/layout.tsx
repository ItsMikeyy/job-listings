import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { SignedOut } from "@/services/clerk/components/SignInStatus";
import { LogInIcon } from "lucide-react";
import Link from "next/link";
import { SidebarUserButton } from "@/app/features/users/components/SidebarUserButton";

export default function JobSeekerLayout({children}: {children: React.ReactNode}) {
    return (
        <AppSidebar content=
        {
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
        } 
        footerButton={<SidebarUserButton />}>
        {children}
      </AppSidebar>
    )
}