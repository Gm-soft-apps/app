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
    const resp = await db.select().from(offers).where(eq(offers.id, id));
    return resp[0];
}

export const updateOffer = async (offer, id) => {
    const latestOffer = {
        ...offer,
        offerLastModifiedOn: new Date(),
    }
        return await db.update(offers).set(latestOffer).where(eq(offers.id, id)).returning();
}

export const deleteOffer = async (id) => {
    return await db.delete(offers).where(eq(offers.id, id))
}