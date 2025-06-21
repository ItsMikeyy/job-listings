import { pgTable, varchar, boolean, integer, primaryKey } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";
import { UserTable } from "./user";
import { OrganizationTable } from "./orgainization";

export const OrganizationUserSettingsTable = pgTable('organization_user_settings', {
    userId: varchar().references(() => UserTable.id).notNull(),
    organizationId: varchar().references(() => OrganizationTable.id).notNull(),
    newApplicationEmailNotifications: boolean().notNull().default(false),
    minimumRating: integer(),
    createdAt,
    updatedAt,
},
table => [primaryKey({ columns: [table.userId, table.organizationId] })]
)