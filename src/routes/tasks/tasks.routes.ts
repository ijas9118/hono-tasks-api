import { createRoute, z } from "@hono/zod-openapi";

import { StatusCodes } from "@/utils/http-status-codes.js";
import jsonContent from "@/utils/json-content.js";

const tags = ["Tasks"];

export const list = createRoute({
  path: "/tasks",
  method: "get",
  tags,
  responses: {
    [StatusCodes.OK]: jsonContent(
      z.array(z.object({
        name: z.string(),
        done: z.boolean(),
      })),
      "The list of tasks",
    ),
  },
});

export type ListRoute = typeof list;
