"use server"

import { db } from "turso"
import { offerLinks } from "./schema"
import { and, eq } from "drizzle-orm"

export const searchOfferLinkWith = async (offerID, userID) => {
    const resp = await db.select().from(offerLinks).where(and(eq(offerLinks.offer_id, offerID), eq(offerLinks.user_id, userID)))

    return resp[0];
}

export const createOfferLink = async (offerLinkObj) => {
    const resp = await db.insert(offerLinks).values(offerLinkObj).returning();
    return resp[0];
}