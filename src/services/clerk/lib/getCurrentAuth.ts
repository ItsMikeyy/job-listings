import { auth } from "@clerk/nextjs/server";
import { db } from "@/drizzle/db";
import { UserTable } from "@/drizzle/schema";
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