import createMessageObjectSchema from "./create-message-object";
import { StatusPhrases } from "./http-status-phrases";

export const notFoundSchema = createMessageObjectSchema(StatusPhrases.NOT_FOUND);
