import { db } from "@/drizzle/db"
import { OrganizationTable } from "@/drizzle/schema"
import { eq } from "drizzle-orm"

export const insertOrganization = async (organization: typeof OrganizationTable.$inferInsert) => {
    await db.insert(OrganizationTable).values(organization).onConflictDoNothing()
}

export const updateOrganization = async (id: string, organization: Partial<typeof OrganizationTable.$inferInsert>) => {
    await db.update(OrganizationTable).set(organization).where(eq(OrganizationTable.id, id))
}

export const deleteOrganization = async (id: string) => {
    await db.delete(OrganizationTable).where(eq(OrganizationTable.id, id))
}