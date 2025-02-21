"use server"

import { and, eq } from "drizzle-orm";
import { users } from "../dbSchema"
import { db } from "turso"
import { nanoidInt, nanoidString } from "utils/nanoid";

export const createUser = async (user: typeof users.$inferInsert) => {
    const newUser = {
        ...user,
        id: nanoidInt(6),
        referralCode: nanoidString(6),
        registeredOn: new Date(),
        lastUpdated: new Date(),
    }
    return await db.insert(users).values(newUser).returning();
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

export const getUserFromDb = async (formData) => {
    const resp = await db.select().from(users).where(and(eq(users.phoneNumber, formData.phoneNumber), eq(users.password, formData.password)));
    if (resp.length != 1) {
        return null;
    }
    return resp;
}

export const getUserByID = async (id: number) => {
    const resp = await db.select().from(users).where(eq(users.id, id));
    if (resp.length != 1) {
        return null;
    }
    return resp[0];
}