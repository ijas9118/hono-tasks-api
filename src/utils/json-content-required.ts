import type { z } from "@hono/zod-openapi";

import jsonContent from "./json-content";

export default function jsonContentRequired<T extends z.ZodTypeAny>(schema: T, description: string) {
  return {
    ...jsonContent(schema, description),
    required: true,
  };
}
