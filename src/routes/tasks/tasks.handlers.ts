import { eq } from "drizzle-orm";

import type { AppRouterHandler } from "@/lib/types.js";

import { db } from "@/db/index.js";
import { tasks } from "@/db/schema.js";
import { StatusCodes } from "@/utils/http-status-codes.js";
import { StatusPhrases } from "@/utils/http-status-phrases.js";

import type { CreateRoute, GetOneRoute, ListRoute, UpdateRoute } from "./tasks.routes.js";

export const list: AppRouterHandler<ListRoute> = async (c) => {
  const tasks = await db.query.tasks.findMany();
  return c.json(tasks);
};

export const create: AppRouterHandler<CreateRoute> = async (c) => {
  const task = c.req.valid("json");
  const [inserted] = await db.insert(tasks).values(task).returning();
  return c.json(inserted, StatusCodes.OK);
};

export const getOne: AppRouterHandler<GetOneRoute> = async (c) => {
  const { id } = c.req.valid("param");
  const task = await db.query.tasks.findFirst({
    where: eq(tasks.id, id),
  });

  if (!task) {
    return c.json({ message: StatusPhrases.NOT_FOUND }, StatusCodes.NOT_FOUND);
  }

  return c.json(task, StatusCodes.OK);
};

export const update: AppRouterHandler<UpdateRoute> = async (c) => {
  const { id } = c.req.valid("param");
  const updates = c.req.valid("json");
  const [task] = await db.update(tasks)
    .set(updates)
    .where(eq(tasks.id, id))
    .returning();

  if (!task) {
    return c.json({ message: StatusPhrases.NOT_FOUND }, StatusCodes.NOT_FOUND);
  }

  return c.json(task, StatusCodes.OK);
};
