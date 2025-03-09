"use server"

import { db } from "turso"
import { offers } from "./schema"

export const createOffer = async (offer)=>{
    return await db.insert(offers).values(offer).returning();
}