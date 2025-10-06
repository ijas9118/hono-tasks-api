import { OpenAPIHono } from "@hono/zod-openapi";

import type { AppBindings } from "@/lib/types.js";

import notFound from "@/middlewares/not-found.js";
import onError from "@/middlewares/on-error.js";
import { pinologger } from "@/middlewares/pino-logger.js";

import defaultHook from "./default-hook.js";

export function createRouter() {
  return new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook,
  });
}

export default function createApp() {
  const app = createRouter();
  app.use(pinologger());

  app.notFound(notFound);
  app.onError(onError);

  return app;
}
