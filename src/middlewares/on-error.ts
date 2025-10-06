import type { ErrorHandler } from "hono";
import type { ContentfulStatusCode } from "hono/utils/http-status";

import env from "@/config/env.js";
import { StatusCodes } from "@/utils/http-status-codes.js";

const onError: ErrorHandler = (err, c) => {
  const currentStatus = "status" in err ? err.status : c.newResponse(null).status;
  const statusCode = currentStatus !== StatusCodes.OK
    ? (currentStatus as ContentfulStatusCode)
    : StatusCodes.INTERNAL_SERVER_ERROR;

  return c.json(
    {
      message: err.message,

      stack: (c.env?.NODE_ENV || env?.NODE_ENV) === "production"
        ? undefined
        : err.stack,
    },
    statusCode,
  );
};

export default onError;
