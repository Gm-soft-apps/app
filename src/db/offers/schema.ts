import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const offers = sqliteTable("offers",{
    id: int().notNull().unique(),
    offerPriority: int(),
    offerName: text().notNull(),
    offerTitle: text().notNull(),
    offerPayout: int().notNull(),
    offerLinkOne: text().notNull(),
    offerLinkTwo: text().notNull(),
    offerDetails: text(),
    offerSteps: text(),
    offerTerms: text(),
    offerDocs: text(),
    offerPayoutRules: text(),
    offerCategory: text().notNull(),
    offerStatus: text().notNull(),
    offerLogo: text(),
    offerBanner: text(),
})