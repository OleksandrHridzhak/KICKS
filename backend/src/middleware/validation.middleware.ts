import type { NextFunction, Request, Response } from "express";
import * as z from "zod";

export const validationMiddleware = (schema: z.ZodTypeAny) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const result = await schema.safeParseAsync(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: "Validation error",
        issues: result.error.issues,
      });
    }

    req.body = result.data;
    return next();
  };
};
