"use server"

import { db } from "turso"
import { offers } from "./schema"
import { eq } from "drizzle-orm"

export const createOffer = async (offer) => {
    const newOffer = {
        ...offer,
        offerCreatedOn: new Date(),
        offerLastModifiedOn: new Date()
    }
    return await db.insert(offers).values(newOffer).returning();
}

export const getAllOffers = async () => {
    return await db.select().from(offers);
}

export const getOfferByID = async (id) => {
    return await db.select().from(offers).where(eq(offers.id, id))
}