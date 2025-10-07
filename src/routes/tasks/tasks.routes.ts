import { createRoute, z } from "@hono/zod-openapi";

import { insertTaskSchema, selectTaskSchema } from "@/db/schema";
import createErrorSchema from "@/utils/create-error-schema";
import { StatusCodes } from "@/utils/http-status-codes.js";
import IdParamsSchema from "@/utils/id-params";
import jsonContentRequired from "@/utils/json-content-required";
import jsonContent from "@/utils/json-content.js";
import { notFoundSchema } from "@/utils/not-found-schema";

const tags = ["Tasks"];

export const list = createRoute({
  path: "/tasks",
  method: "get",
  tags,
  responses: {
    [StatusCodes.OK]: jsonContent(
      z.array(selectTaskSchema),
      "The list of tasks",
    ),
  },
});

export const create = createRoute({
  path: "/tasks",
  method: "post",
  tags,
  request: {
    body: jsonContentRequired(
      insertTaskSchema,
      "The Task to Create",
    ),
  },
  responses: {
    [StatusCodes.OK]: jsonContent(
      selectTaskSchema,
      "The Created task",
    ),
    [StatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(insertTaskSchema),
      "The validation error(s)",
    ),
  },
});

export const getOne = createRoute({
  path: "/tasks/{id}",
  method: "get",
  tags,
  request: {
    params: IdParamsSchema,
  },
  responses: {
    [StatusCodes.OK]: jsonContent(
      selectTaskSchema,
      "The requested task",
    ),
    [StatusCodes.NOT_FOUND]: jsonContent(
      notFoundSchema,
      "Task Not Found Error",
    ),
    [StatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(IdParamsSchema),
      "Invalid id error",
    ),
  },
});

export type ListRoute = typeof list;
export type CreateRoute = typeof create;
export type GetOneRoute = typeof getOne;
