import { auth } from "@clerk/nextjs/server";
import { db } from "@/drizzle/db";
import { OrganizationTable, UserTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export const getCurrentUser = async ({allData = false} = {}) => {
    const {userId} = await auth()


    return {
        userId,
        user: allData && userId != null ? await getUser(userId) : undefined
    }
}

const getUser = async (id: string) => {
    return db.query.UserTable.findFirst({
        where: eq(UserTable.id, id)
    })
}

export const getCurrentOrganization = async ({allData = false} = {}) => {
    const {orgId} = await auth()


    return {
        orgId,
        organization: allData && orgId != null ? await getOrganization(orgId) : undefined
    }
}

const getOrganization = async (id: string) => {
    return db.query.OrganizationTable.findFirst({
        where: eq(OrganizationTable.id, id)
    })
}