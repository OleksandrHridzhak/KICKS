import { type Request, type Response } from "express";
import type {
  RegisterDto,
  LoginDto,
} from "../../../../packages/schemas/auth/auth.schema.ts";
import {
  registerService,
  loginService,
  meService,
  refreshService,
} from "./auth.service.ts";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./auth.constants.ts";

export const registerController = async (req: Request, res: Response) => {
  const data: RegisterDto = req.body;
  const tokens = await registerService(data);

  res.cookie(REFRESH_TOKEN.NAME, tokens.refreshToken, {
    httpOnly: true,
    path: "/api/auth/refresh",

    ...(data.rememberMe && {
      maxAge: REFRESH_TOKEN.COOKIE_MAX_AGE,
    }),
  });

  res.cookie(ACCESS_TOKEN.NAME, tokens.accessToken, {
    httpOnly: true,
    maxAge: ACCESS_TOKEN.COOKIE_MAX_AGE,
  });

  return res.sendStatus(201);
};

export const loginController = async (req: Request, res: Response) => {
  const data: LoginDto = req.body;
  const tokens = await loginService(data);

  res.cookie(REFRESH_TOKEN.NAME, tokens.refreshToken, {
    httpOnly: true,
    path: "/api/auth/refresh",

    ...(data.rememberMe && {
      maxAge: REFRESH_TOKEN.COOKIE_MAX_AGE,
    }),
  });

  res.cookie(ACCESS_TOKEN.NAME, tokens.accessToken, {
    httpOnly: true,
    maxAge: ACCESS_TOKEN.COOKIE_MAX_AGE,
  });
  return res.sendStatus(200); //TODO: SHOULD I RETURN SOME DATA?
};

export const logoutController = async (req: Request, res: Response) => {
  res.clearCookie(ACCESS_TOKEN.NAME);
  res.clearCookie(REFRESH_TOKEN.NAME, { path: "/api/auth/refresh" });

  return res.sendStatus(204);
};

export const refreshController = async (req: Request, res: Response) => {
  const refreshToken = req.cookies[REFRESH_TOKEN.NAME];
  const newAccessToken = await refreshService(refreshToken);

  res.cookie(ACCESS_TOKEN.NAME, newAccessToken.accessToken, {
    httpOnly: true,
    maxAge: ACCESS_TOKEN.COOKIE_MAX_AGE,
  });
  return res.sendStatus(204);
};

export const meController = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const user = await meService(userId);

  res.status(200).json(user);
};
