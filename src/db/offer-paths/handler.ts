"use server"

import { db } from "turso"
import { offerPaths } from "./schema"
import { and, eq } from "drizzle-orm"

export const searchOfferPathWith = async (offerID, userID) => {
    const resp = await db.select().from(offerPaths).where(and(eq(offerPaths.offer_id, offerID), eq(offerPaths.user_id, userID)))

    return resp[0];
}

export const createOfferPath = async (offerPathObj) => {
    const resp = await db.insert(offerPaths).values(offerPathObj).returning();
    return resp[0];
}

export const searchOfferPath = async (path) => {
    const resp = await db.select().from(offerPaths).where(eq(path, offerPaths.path));
    return resp[0];
}