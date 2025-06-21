import { pgTable, varchar, integer, uuid, primaryKey, pgEnum, } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createdAt, updatedAt } from "../schemaHelpers";
import { UserTable } from "./user";
import { JobListingTable } from "./jobListing";
import { table } from "console";

export const applicationStages = ['denied', 'applied', 'interested', 'interviews', 'hired'] as const
export type ApplicationStage = (typeof applicationStages)[number]
export const applicationStagesEnum = pgEnum('application_stages', applicationStages)

export const JobListingApplicationTable = pgTable('job_listing_applications', {
        jobListingId: uuid().references(() => JobListingTable.id, { onDelete: 'cascade' }).notNull(),
        userId: varchar().references(() => UserTable.id, { onDelete: 'cascade' }).notNull(),
        coverLetter: varchar(),
        rating: integer(),
        stage: applicationStagesEnum().notNull(),
        createdAt,
        updatedAt,
    },
    table => [primaryKey({ columns: [table.jobListingId, table.userId] })]
)

export const jobListingApplicationRelations = relations(JobListingApplicationTable, ({ one }) => ({
    jobListing: one(JobListingTable, {
        fields: [JobListingApplicationTable.jobListingId],
        references: [JobListingTable.id],
    }),
    user: one(UserTable, {
        fields: [JobListingApplicationTable.userId],
        references: [UserTable.id],
    }),
}))