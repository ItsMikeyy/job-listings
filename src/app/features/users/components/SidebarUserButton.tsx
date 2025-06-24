import { Suspense } from "react";
import { auth } from "@clerk/nextjs/server";
import {SidebarUserButtonClient} from "./_SidebarUserButtonClient";

export const SidebarUserButton = () => {
    return (
        <Suspense>
            <SidebarUserSuspense />
        </Suspense>
    )
}

const SidebarUserSuspense = async () => {
    const {userId} = await auth()

    return <SidebarUserButtonClient user={{email: "test@test.com", name: "test name", imageUrl: ""}} />
}

export default SidebarUserButton;