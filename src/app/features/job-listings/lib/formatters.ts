import { WageInterval } from "@/drizzle/schema";

export const formatWageInterval = (interval: WageInterval) => {
    switch(interval) {
        case "hourly":
            return "Hour"
        case "yearly":
            return "Year"
        default:
            throw new Error(`Invalid wage interval ${interval satisfies never}`)
    }
}