import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
    id: int().notNull().unique(),
    countryCode: text().notNull().default("+91"),
    phoneNumber: text({ length: 10 }).notNull().unique(),
    password: text().notNull(),
    role: text().notNull().default("user"),
    referralCode: text().notNull().unique(),
    invitedBy: text(),
    verifiedAccount: int({ mode: "boolean" }).default(false),
    lastVerified: int({ mode: "timestamp_ms" }),
    registeredOn: int({ mode: "timestamp_ms" }).notNull(),
    lastUpdated: int({ mode: "timestamp_ms" }).notNull(),
});
