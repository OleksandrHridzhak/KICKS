import { type Request, type Response } from "express";
import {
  registerService,
  loginService,
  meService,
  refreshService,
} from "./auth.service.ts";
import {
  REFRESH_TOKEN_NAME,
  ACCESS_TOKEN_NAME,
  ACCESS_TOKEN_COOKIE_MAX_AGE,
  REFRESH_TOKEN_COOKIE_MAX_AGE,
} from "./auth.constants.ts";

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const tokens = await registerService(email, password);

  res.cookie(REFRESH_TOKEN_NAME, tokens.refreshToken, {
    httpOnly: true,
    maxAge: REFRESH_TOKEN_COOKIE_MAX_AGE,
    path: "/api/auth/refresh",
  });

  res.cookie(ACCESS_TOKEN_NAME, tokens.accessToken, {
    httpOnly: true,
    maxAge: ACCESS_TOKEN_COOKIE_MAX_AGE,
  });

  return res.sendStatus(201);
};

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const tokens = await loginService(email, password);

  res.cookie(REFRESH_TOKEN_NAME, tokens.refreshToken, {
    httpOnly: true,
    maxAge: REFRESH_TOKEN_COOKIE_MAX_AGE,
    path: "/api/auth/refresh",
  });

  res.cookie(ACCESS_TOKEN_NAME, tokens.accessToken, {
    httpOnly: true,
    maxAge: ACCESS_TOKEN_COOKIE_MAX_AGE,
  });
  return res.sendStatus(200);
};

export const logoutController = async (req: Request, res: Response) => {
  res.clearCookie(ACCESS_TOKEN_NAME);
  res.clearCookie(REFRESH_TOKEN_NAME, { path: "/api/auth/refresh" });

  return res.sendStatus(204);
};

export const refreshController = async (req: Request, res: Response) => {
  const refreshToken = req.cookies[REFRESH_TOKEN_NAME];
  const newAccesToken = await refreshService(refreshToken);

  res.cookie(ACCESS_TOKEN_NAME, newAccesToken.accessToken, {
    httpOnly: true,
    maxAge: ACCESS_TOKEN_COOKIE_MAX_AGE,
  });
  return res.sendStatus(204);
};

export const meController = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const user = await meService(userId);

  res.status(200).json(user);
};
