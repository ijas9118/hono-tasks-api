import type { NotFoundHandler } from "hono";

import { StatusCodes } from "@/utils/http-status-codes.js";
import { StatusPhrases } from "@/utils/http-status-phrases.js";

const notFound: NotFoundHandler = (c) => {
  return c.json({
    message: `${StatusPhrases.NOT_FOUND} - ${c.req.path}`,
  }, StatusCodes.NOT_FOUND);
};

export default notFound;
