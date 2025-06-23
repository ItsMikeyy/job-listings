import { pgTable, varchar, boolean } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";
import { UserTable } from "./user";
import { relations } from "drizzle-orm";

export const UserNotificationSettingsTable = pgTable('user_notification_settings', {
    userId: varchar().references(() => UserTable.id).primaryKey(),
    newJobEmailNotifications: boolean().notNull().default(false),
    aiPrompt: varchar(),
    createdAt,
    updatedAt,
},
)

export const userNotificationSettingsRelations = relations(UserNotificationSettingsTable, ({ one }) => ({
    user: one(UserTable, {
        fields: [UserNotificationSettingsTable.userId],
        references: [UserTable.id],
    }),
}))