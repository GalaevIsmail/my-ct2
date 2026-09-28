// /home/mikail/Documents/IT Hub/todo-list/src/db/schemas/todos.ts
import { integer, pgTable, varchar, text, boolean } from "drizzle-orm/pg-core";

export const todosTable = pgTable("todos", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  description: text(),
  completed: boolean().notNull().default(false),
  userId: integer().notNull(),
});
