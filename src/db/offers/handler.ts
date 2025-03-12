"use server"

import { db } from "turso"
import { offers } from "./schema"

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