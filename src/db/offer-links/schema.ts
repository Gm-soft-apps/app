import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const offerLinks = sqliteTable("offer_links", {
    sl_no: int().primaryKey().notNull(),
    offer_id: int().notNull(),
    user_id: int().notNull(),
    self_path: text().notNull().unique(),
    share_path: text().notNull().unique(),
    created_on: int(),
    user_ip: text(),
})

