import { text, sqliteTable } from "drizzle-orm/sqlite-core";
const users = sqliteTable("users", {
  id: text("id").primaryKey().notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
});

export { users };
