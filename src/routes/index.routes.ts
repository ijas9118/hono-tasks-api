import { createRoute, z } from "@hono/zod-openapi";

import { createRouter } from "@/lib/create-app.js";
import createMessageObjectSchema from "@/utils/create-message-object.js";
import { StatusCodes } from "@/utils/http-status-codes.js";
import jsonContent from "@/utils/json-content.js";

const router = createRouter()
  .openapi(
    createRoute({
      tags: ["Index"],
      method: "get",
      path: "/",
      responses: {
        [StatusCodes.OK]: jsonContent(
          createMessageObjectSchema("Tasks API!"),
          "Tasks API",
        ),
      },
    }),
    (c) => {
      return c.json({ message: "Tasks API" }, StatusCodes.OK);
    },
  );

export default router;
