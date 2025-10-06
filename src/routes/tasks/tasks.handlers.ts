import type { AppRouterHandler } from "@/lib/types.js";

import type { ListRoute } from "./tasks.routes.js";

export const list: AppRouterHandler<ListRoute> = (c) => {
  return c.json([{
    name: "Learn Hono",
    done: false,
  }]);
};
