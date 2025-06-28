import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton,  } from "@/components/ui/sidebar";
import { SignedOut } from "@/services/clerk/components/SignInStatus";
import { BrainCircuitIcon, ClipboardListIcon, LayoutDashboard, LogInIcon } from "lucide-react";
import Link from "next/link";
import { SidebarUserButton } from "@/app/features/users/components/SidebarUserButton";
import { SidebarNavMenuGroup } from "@/components/sidebar/SidebarNavMenuGroup";
export default function JobSeekerLayout({children}: {children: React.ReactNode}) {
    return (
        <AppSidebar content=
        {
           <SidebarNavMenuGroup className="mt-auto" items={[
            {href: "/", label: "Job Board", icon: <ClipboardListIcon />},
            {href: "/ai-search", label: "AI Search", icon: <BrainCircuitIcon />},
            {href: "/employer", label: "Employer Dashboard", icon: <LayoutDashboard />, authStatus: "signedIn"},
            {href: "/sign-in", label: "Sign In", icon: <LogInIcon />, authStatus: "signedOut"},
        ]}
        />
      } 
        footerButton={<SidebarUserButton />}>
        {children}
      </AppSidebar>
    )
}