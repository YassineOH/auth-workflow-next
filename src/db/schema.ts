import { pgTableCreator, serial, varchar } from 'drizzle-orm/pg-core';

export const createTable = pgTableCreator((name) => `auth_workflow_${name}`);

const users = createTable('users', {
  id: serial('id').primaryKey().notNull(),
  name: varchar('name', { length: 265 }).notNull(),
  email: varchar('email', { length: 265 }).notNull(),
});

export { users };
