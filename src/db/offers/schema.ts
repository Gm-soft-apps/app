import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const offers = sqliteTable("offers", {
    id: int().notNull().unique(),
    offerPriority: int(),
    offerName: text().notNull(),
    offerTitle: text().notNull(),
    offerPayout: int().notNull(),
    offerLink: text().notNull(),
    offerDetails: text(),
    offerSteps: text(),
    offerTerms: text(),
    offerDocs: text(),
    offerPayoutRules: text(),
    offerCategory: text().notNull(),
    offerStatus: int({ mode: "boolean" }).notNull(),
    affNetwork: text(),
    offerLogo: text().notNull(),
    offerBanner: text().notNull(),
    offerCreatedOn: int({mode: "timestamp_ms"}).notNull(),
    offerLastModifiedOn: int({mode: "timestamp_ms"}).notNull()
})