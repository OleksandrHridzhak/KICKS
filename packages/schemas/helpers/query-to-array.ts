import * as z from "zod";

/**
 * Converts a query value into an array before validating each item.
 *
 * @param schema The schema for each array item.
 */
export const queryToArray = <T extends z.ZodTypeAny>(schema: T) => {
  return z.preprocess(
    (val) => {
      if (Array.isArray(val)) {
        return val;
      }

      if (typeof val === "string") {
        return [val];
      }

      return undefined;
    },
    z.array(schema),
  );
};
