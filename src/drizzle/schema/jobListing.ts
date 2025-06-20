import { pgTable, pgEnum, text, timestamp, varchar, integer, boolean, index } from "drizzle-orm/pg-core";
import { createdAt, updatedAt, id } from "../schemaHelpers";
import { OrganizationTable } from "./orgainizations";

export const wageIntervals = ['hourly', 'yearly'] as const
export type WageInterval = (typeof wageIntervals)[number]
export const wageIntervalEnum = pgEnum('job_listings_wage_interval', wageIntervals)

export const locationRequirments = ['remote', 'on-site', 'hybrid'] as const
export type LocationRequirment = (typeof locationRequirments)[number]
export const locationRequirementEnum = pgEnum('job_listings_location_requirment', locationRequirments)

export const experienceLevels = ['junior', 'mid-level', 'senior'] as const
export type ExperienceLevel = (typeof experienceLevels)[number]
export const experienceLevelEnum = pgEnum('job_listings_experience_level', experienceLevels)

export const jobListingStatuses = ['draft', 'published', 'delisted'] as const
export type JobListingStatus = (typeof jobListingStatuses)[number]
export const jobListingStatusEnum = pgEnum('job_listings_status', jobListingStatuses)

export const jobListingTypes = ['full-time', 'part-time', 'contract', 'internship'] as const
export type JobListingType = (typeof jobListingTypes)[number]
export const jobListingTypeEnum = pgEnum('job_listings_type', jobListingTypes)

export const JobListingTable = pgTable('job_listings', {
    id,
    organizationId: varchar().references(() => OrganizationTable.id, { onDelete: 'cascade' }).notNull(),
    title: varchar().notNull(),
    description: text().notNull(),
    wage: integer(),
    wageInterval: wageIntervalEnum(),
    provinceAbbreviation: varchar(),
    city: varchar(),
    isFeatured: boolean().notNull().default(false),
    locationRequirement: locationRequirementEnum().notNull(),
    experienceLevel: experienceLevelEnum().notNull(),
    status: jobListingStatusEnum().notNull().default("draft"),
    type: jobListingTypeEnum().notNull(),
    postedAt: timestamp({withTimezone: true}).notNull().defaultNow(),
    createdAt,
    updatedAt,
},
table => [index('job_listings_province_abbreviation_index').on(table.provinceAbbreviation)]);