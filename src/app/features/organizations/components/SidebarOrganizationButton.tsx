import { Suspense } from "react";
import { getCurrentUser, getCurrentOrganization } from "@/services/clerk/lib/getCurrentAuth";
import { SignOutButton } from "@clerk/nextjs";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { LogOutIcon } from "lucide-react";
import { SidebarOrganizationButtonClient } from "./_SidebarOrganizationButton";

export const SidebarOrganizationButton = () => {
    return (
        <Suspense>
            <SidebarOrganizationSuspense />
        </Suspense>
    )
}

const SidebarOrganizationSuspense = async () => {
    const [{user}, {organization}] = await Promise.all([getCurrentUser({allData: true}), getCurrentOrganization({allData: true})])

    if (user == null || organization == null) {
        return (
            <SignOutButton>
                <SidebarMenuButton>
                    <LogOutIcon />
                    <span>Log Out</span>
                </SidebarMenuButton>
            </SignOutButton>
        )
    }

    return <SidebarOrganizationButtonClient user={user} organization={organization} />
}

export default SidebarOrganizationSuspense;