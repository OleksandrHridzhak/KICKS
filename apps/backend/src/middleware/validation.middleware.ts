import type { NextFunction, Request, Response } from "express";
import * as z from "zod";

export const validationMiddleware = (schema: z.ZodTypeAny) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const result = await schema.safeParseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    if (!result.success) {
      return res.status(400).json({
        message: "Validation error",
        issues: result.error.issues,
      });
    }
    // TODO: CLAUDE - req.validated наразі має тип `unknown` для body/query/params (див. express.d.ts).
    // Через це в контролерах потрібен явний `as SomeDto` каст.
    // Краще рішення — зробити validationMiddleware generic: <T extends z.ZodTypeAny>(schema: T),
    // тоді TypeScript сам виведе тип `req.validated` з переданої схеми без жодних кастів.
    req.validated = result.data;
    return next();
  };
};
