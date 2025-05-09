import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const offerPaths = sqliteTable("offer_paths", {
    sl_no: int().primaryKey().notNull(),
    offer_id: int().notNull(),
    user_id: int().notNull(),
    path: text().notNull().unique(),
    //share_path: text().notNull().unique(),
    created_on: int(),
    user_ip: text(),
})

