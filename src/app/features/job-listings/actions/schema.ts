import { experienceLevels, locationRequirments, jobListingTypes, wageIntervals } from "@/drizzle/schema";
import { z } from "zod";



export const jobListingSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    experienceLevel: z.enum(experienceLevels),
    locationRequirment: z.enum(locationRequirments),
    type: z.enum(jobListingTypes),
    wage: z.number().int().positive().min(1).nullable(),
    wageInterval: z.enum(wageIntervals).nullable(),
    provinceAbbreviation: z.string().transform(val => (val.trim() === "" ? null : val)).nullable(),
    city: z.string().transform(val => (val.trim() === "" ? null : val)).nullable(),
}).refine((listing) => {
    return listing.locationRequirment === "remote" || listing.city != null
}, {
    message: "City is required if location requirement is not remote",
    path: ["city"],
})
.refine((listing) => {
    return listing.locationRequirment === "remote" || listing.provinceAbbreviation != null
}, {
    message: "Province abbreviation is required if location requirement is not remote",
    path: ["provinceAbbreviation"],
})



