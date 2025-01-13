import { and, eq } from "drizzle-orm";
import { users } from "../users"
import { db } from "turso"

export const createUser = async (user: typeof users.$inferInsert) => {
    await db.insert(users).values(user);
}

type ILoginUser = { phoneNumber: string, password: string };

export const loginUser = async (user: ILoginUser): Promise<any> => {
    try {
        const resp = await db.select().from(users).where(and(eq(users.phoneNumber, user.phoneNumber), eq(users.password, user.password)));
        if (resp.length !== 1) {
            return false;
        }
        return true;

    } catch (err) {
        return false;
    }
}