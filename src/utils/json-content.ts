import type { z } from "@hono/zod-openapi";

export default function jsonContent<T extends z.ZodTypeAny>(schema: T, description: string) {
  return {
    content: {
      "application/json": {
        schema,
      },
    },
    description,
  };
}
