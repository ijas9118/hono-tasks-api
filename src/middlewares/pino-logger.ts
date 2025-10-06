import { pinoLogger } from "hono-pino";
import pino from "pino";

import env from "@/config/env.js";

export function pinologger() {
  return pinoLogger({
    pino: pino({
      base: null,
      level: env.LOG_LEVEL || "info",
      transport: env.NODE_ENV === "production"
        ? undefined
        : {
            target: "hono-pino/debug-log",
          },
      timestamp: pino.stdTimeFunctions.unixTime,
    }),
  });
}
