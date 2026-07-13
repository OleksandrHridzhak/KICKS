import type { NextFunction, Request, Response } from "express";
import type { AnyZodObject } from "zod/v3";

export const validationMiddleware = (scheme: AnyZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {};
};
