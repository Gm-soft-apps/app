import { db } from "turso"
import { linkClicks } from "./schema"

export const insertLinkClick = async (linkClickObj) => {
    const resp = await db.insert(linkClicks).values(linkClickObj).returning();
    return resp[0];
}