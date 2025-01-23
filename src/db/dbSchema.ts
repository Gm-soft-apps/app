import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { nanoidInt, nanoidString } from "utils/nanoid";

export const users = sqliteTable("users", {
    id: int().primaryKey().default(nanoidInt(6)),
    countryCode: text().notNull().default("+91"),
    phoneNumber: text({ length: 10 }).notNull().unique(),
    password: text().notNull(),
    referralCode: text().notNull().unique().default(nanoidString(6)),
    verifiedAccount: int({ mode: "boolean" }).default(false),
    lastVerified: int({ mode: "timestamp_ms" }),
    RegisteredOn: int({ mode: "timestamp_ms" }).default(new Date()),
    lastUpdated: int({ mode: "timestamp_ms" }).default(new Date()),
});
