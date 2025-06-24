"use client"
import { useIsMobile } from "@/hooks/use-mobile"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { SidebarMenuButton } from "@/components/ui/sidebar"
import { ChevronsUpDownIcon, LogOutIcon, SettingsIcon, UserIcon } from "lucide-react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { SignOutButton } from "@/services/clerk/components/AuthButtons"
import { useClerk } from "@clerk/nextjs"
import { useSidebar } from "@/components/ui/sidebar"

type User = {
    name: string,
    imageUrl: string,
    email: string,
}
export const SidebarUserButtonClient = ({user}: {user: User}) => {
    const {isMobile, setOpenMobile} = useSidebar()
    const {openUserProfile} = useClerk()
    return ( 
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state-open]:text-sidebar-accent-foreground">
                    <UserInfo {...user} />
                    <ChevronsUpDownIcon className="ml-auto group-data-[state=collapsed]:hidden" />
                </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={4} align="end" side={isMobile ? "bottom" : "right"} className="min-w-64 max-w-80">
                <DropdownMenuLabel className="font-normal p-1">
                    <UserInfo {...user} />
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => {
                    setOpenMobile(false)
                    openUserProfile()
                }}>
                    <UserIcon className="mr-1"/> Profile
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/user-settings/notifications">
                        <SettingsIcon className="mr-1"/> Notifications
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <SignOutButton>
                    <DropdownMenuItem>
                        <LogOutIcon className="mr-1"/> Log Out
                    </DropdownMenuItem>
                </SignOutButton>
            </DropdownMenuContent>
        </DropdownMenu>
        
    )
}

const UserInfo = ({imageUrl, name, email}: User) => {
    const nameInitials = name.split(" ").slice(0, 2).map(n => n[0]).join("")
    return (
        <div className="flex items-center gap-2 overflow-hidden"> 
            <Avatar className="rounded-lg size-8">
                <AvatarImage src={imageUrl} />
            </Avatar>
            <div className="flex flex-col flex-1 leading-tight group-data-[state=collapsed]:hidden">
                <span className="truncate text-sm font-semibold">{name}</span>
                <span className="truncate text-xs">{email}</span>
            </div>
        </div>
    )
}