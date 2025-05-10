import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const linkClicks = sqliteTable("link_clicks", {
    click_id: text().notNull().unique(),
    link: text().notNull(),
    link_path: text().notNull(),
    link_user_id: int().notNull(),
    link_offer_id: int().notNull(),
    offer_amount: int().notNull(),
    aff_link: text().notNull(),
    link_type: text().notNull(),
    user_browser: text(),
    user_operating_system: text(),
    user_device: text(),
    click_time: int({ mode: "timestamp_ms"}).notNull(),
    click_ip: text(),
})