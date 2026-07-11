import { type Response, type Request, type NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { config } from "../../config.ts";

interface TokenPayload extends JwtPayload {
  id: string;
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(req);

  const token = req.cookies.token;

  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const payload = jwt.verify(token, config.jwtSecret) as TokenPayload;

    req.user = {
      id: payload.id,
    };
    next();
  } catch {
    return res.sendStatus(401);
  }
};
