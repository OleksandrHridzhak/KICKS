import { type Request, type Response, type NextFunction } from "express";

import { config } from "../../config.ts";
import {
  NotFoundError,
  ValidationError,
  UnauthenticatedError,
  ForbiddenError,
  ConflictError,
} from "../core/error.ts";

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = 500;

  if (err instanceof ValidationError) {
    statusCode = 400;
  } else if (err instanceof UnauthenticatedError) {
    statusCode = 401;
  } else if (err instanceof ForbiddenError) {
    statusCode = 403;
  } else if (err instanceof NotFoundError) {
    statusCode = 404;
  } else if (err instanceof ConflictError) {
    statusCode = 409;
  }

  if (statusCode === 500 && config.nodeEnv !== "development") {
    return res.status(500).json({
      message: "Internal server error",
    });
  } else {
    console.log(err);
  }

  res.status(statusCode).json({
    message: err.message,
  });
};
