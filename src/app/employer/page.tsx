import { db } from "@/drizzle/db"
import { JobListingTable } from "@/drizzle/schema"
import { getCurrentOrganization } from "@/services/clerk/lib/getCurrentAuth"
import { desc, eq } from "drizzle-orm"
import { redirect } from "next/navigation"
import { Suspense } from "react"

export default function EmployerHomePage() {
    return (
        <Suspense>
            <SuspendedPage />
        </Suspense>
    )
}

const SuspendedPage = async () => {
    const {orgId} = await getCurrentOrganization()
    if (orgId == null) {
        return null
    }

    const jobListings = await getMostRecentJobListing(orgId)
    if (jobListings == null) {
        redirect("/employer/create-job-listing")
    }
    else {
        redirect(`/employer/job-listing/${jobListings.id}`)
    }
}

const getMostRecentJobListing = async (orgId: string) => {

    return db.query.JobListingTable.findFirst({
        where: eq(JobListingTable.organizationId, orgId),
        orderBy: desc(JobListingTable.createdAt),
    })
}