import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { SidebarGroup, SidebarGroupAction, SidebarGroupLabel } from "@/components/ui/sidebar";
import { ClipboardListIcon, PlusIcon } from "lucide-react";
import { SidebarNavMenuGroup } from "@/components/sidebar/SidebarNavMenuGroup";
import Link from "next/link";
import { SidebarOrganizationButton } from "../features/organizations/components/SidebarOrganizationButton";
import { getCurrentOrganization } from "@/services/clerk/lib/getCurrentAuth";
import { redirect } from "next/navigation";

export default function EmployerLayout({children}: {children: React.ReactNode}) {
    return (
        <LayoutSuspense>
            {children}
        </LayoutSuspense>
    )
}
async function LayoutSuspense({children}: {children: React.ReactNode}) {
    const {orgId} = await getCurrentOrganization()
    if (orgId == null) {
        return redirect("/organizations/select")
    }
    return (
        <AppSidebar content=
        {
            <>
                <SidebarGroup>
                    <SidebarGroupLabel>Job Listings</SidebarGroupLabel>
                    <SidebarGroupAction title="Add Job Listing" asChild>
                        <Link href="/employer/job-listings/new" className="flex items-center gap-2">
                            <PlusIcon /> 
                            <span className="sr-only">Add Job Listing</span>
                        </Link>
                    </SidebarGroupAction>
                </SidebarGroup>
                <SidebarNavMenuGroup className="mt-auto" items={[
                    {href: "/", label: "Job Board", icon: <ClipboardListIcon />},
                ]}
                />
            </>
        } 
        footerButton={<SidebarOrganizationButton />}>
        {children}
      </AppSidebar>
    )
}