import { type Response, type Request, type NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../../config.ts";
import { type TokenPayload } from "./auth.types.ts";
import { ACCESS_TOKEN } from "./auth.constants.ts";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies[ACCESS_TOKEN.NAME];

  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const payload = jwt.verify(token, config.jwtSecret) as TokenPayload;

    req.user = {
      id: payload.id,
      email: payload.email,
    };
    next();
  } catch {
    return res.sendStatus(401);
  }
};
