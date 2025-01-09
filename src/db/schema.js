import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations } from 'drizzle-orm';

export const usersTable = sqliteTable("users", {
  id: int().primaryKey({ autoIncrement: true }),
  phone_number: int().notNull().unique(),
  password: text().notNull(),
//   referral_code: text(),
//   invited: text(),
});

// export const referrals = relations(usersTable, ({ many }) => ({
// 	invited: many(usersTable),
// }));


// export const postsRelations = relations(usersTable, ({ one }) => ({
// 	invitedBy: one(usersTable, {
// 		fields: [usersTable.invited],
// 		references: [users.referral_code],
// 	}),
// }));