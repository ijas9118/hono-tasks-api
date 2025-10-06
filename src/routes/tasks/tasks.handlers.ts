import type { AppRouterHandler } from "@/lib/types.js";

import { db } from "@/db/index.js";

import type { ListRoute } from "./tasks.routes.js";

export const list: AppRouterHandler<ListRoute> = async (c) => {
  const tasks = await db.query.tasks.findMany();
  return c.json(tasks);
};
