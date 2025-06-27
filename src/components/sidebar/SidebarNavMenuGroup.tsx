import { SignedIn, SignedOut } from "@/services/clerk/components/SignInStatus"
import { SidebarGroup, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"

import { SidebarMenu } from "../ui/sidebar"
import Link from "next/link"
import { LogInIcon } from "lucide-react"
import { usePathname } from "next/navigation"

export const SidebarNavMenuGroup = ({items, className}: {
    items: {
        href: string,
        icon: React.ReactNode,
        label: string,
        authStatus: "signedOut" | "signedIn"
    }[]
    className?: string
    }) => {
    const pathname = usePathname()
    return (
        <SidebarGroup className={className}>
            <SidebarMenu>
                {items.map(item => {
                    const html = (
                        <SidebarMenuItem key={item.href}>
                            <SidebarMenuButton asChild isActive={item.href === pathname}>
                                <Link href={item.href}>
                                {item.icon}
                                <span>{item.label}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    )
                    if(item.authStatus === "signedOut") {
                        return <SignedOut key={item.href}>{html}</SignedOut>
                    }
                    if(item.authStatus === "signedIn") {
                        return <SignedIn key={item.href}>{html}</SignedIn>
                    }
                    return html
                })}
                <SignedOut> </SignedOut>
            </SidebarMenu>
        </SidebarGroup>
    )
}