import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";

export const tasks = pgTable("tasks", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text()
    .notNull(),
  done: boolean()
    .notNull()
    .default(false),
  createdAt: timestamp("created_at")
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const selectTaskSchema = createSelectSchema(tasks);
