import { getCurrentOrganization } from "@/services/clerk/lib/getCurrentAuth";
import { OrganizationList } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Suspense } from "react";

type Props = {
    searchParams: Promise<{redirect?: string}>
}

export default async function OrganizationSelectPage(props: Props) {
    return (
        <Suspense>
            <SuspendedPage {...props} />
        </Suspense>
    )
}

const SuspendedPage = async({searchParams}: Props) => {
    const {redirect} = await searchParams
    const redirectUrl = redirect ?? "/employer" 
    return <OrganizationList hidePersonal hideSlug skipInvitationScreen afterCreateOrganizationUrl={redirectUrl} afterSelectPersonalUrl={redirectUrl} />
}