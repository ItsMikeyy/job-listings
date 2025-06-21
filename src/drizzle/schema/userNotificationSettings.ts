import { pgTable, varchar, boolean } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";
import { UserTable } from "./user";

export const UserNotificationSettingsTable = pgTable('user_notification_settings', {
    userId: varchar().references(() => UserTable.id).primaryKey(),
    newJobEmailNotifications: boolean().notNull().default(false),
    aiPrompt: varchar(),
    createdAt,
    updatedAt,
},
)