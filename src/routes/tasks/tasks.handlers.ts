import type { AppRouterHandler } from "@/lib/types.js";

import { db } from "@/db/index.js";
import { tasks } from "@/db/schema.js";
import { StatusCodes } from "@/utils/http-status-codes.js";

import type { CreateRoute, ListRoute } from "./tasks.routes.js";

export const list: AppRouterHandler<ListRoute> = async (c) => {
  const tasks = await db.query.tasks.findMany();
  return c.json(tasks);
};

export const create: AppRouterHandler<CreateRoute> = async (c) => {
  const task = c.req.valid("json");
  const [inserted] = await db.insert(tasks).values(task).returning();
  return c.json(inserted, StatusCodes.OK);
};
