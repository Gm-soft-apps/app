"use server"

import { db } from "turso"
import { offerLinks } from "./schema"
import { and, eq } from "drizzle-orm"

export const searchOfferLinkWith = async (offerID, userID) => {
    return await db.select().from(offerLinks).where(and(eq(offerLinks.offer_id, offerID), eq(offerLinks.user_id, userID)))
}

export const createOfferLink = async (offerLinkObj) => {
    return await db.insert(offerLinks).values(offerLinkObj).returning();
}