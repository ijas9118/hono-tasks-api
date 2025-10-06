import { Scalar } from "@scalar/hono-api-reference";

import type { AppOpenAPI } from "./types.js";

import packageJson from "../../package.json" with { type: "json" };

export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJson.version,
      title: "Tasks API",
    },
  });

  app.get(
    "/scalar",
    Scalar({
      url: "/doc",
      theme: "kepler",
      layout: "classic",
      defaultHttpClient: {
        targetKey: "js",
        clientKey: "axios",
      },
    }),
  );
}
