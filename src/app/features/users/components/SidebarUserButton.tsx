import { Suspense } from "react";
import { auth } from "@clerk/nextjs/server";
import {SidebarUserButtonClient} from "./_SidebarUserButtonClient";
import { getCurrentUser } from "@/services/clerk/lib/getCurrentAuth";
import { SignOutButton } from "@clerk/nextjs";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { LogOutIcon } from "lucide-react";

export const SidebarUserButton = () => {
    return (
        <Suspense>
            <SidebarUserSuspense />
        </Suspense>
    )
}

const SidebarUserSuspense = async () => {
    const {user} = await getCurrentUser({allData: true})

    if (user == null) {
        return (
            <SignOutButton>
                <SidebarMenuButton>
                    <LogOutIcon />
                    <span>Log Out</span>
                </SidebarMenuButton>
            </SignOutButton>
        )
    }

    return <SidebarUserButtonClient user={user} />
}

export default SidebarUserButton;