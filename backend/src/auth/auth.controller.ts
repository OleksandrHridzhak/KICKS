import { type Request, type Response } from "express";
import { registerService, loginService, meService } from "./auth.service.ts";

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const token = await registerService(email, password);

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.sendStatus(201);
};

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const token = await loginService(email, password);

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.sendStatus(200);
};

export const logoutController = async (req: Request, res: Response) => {
  res.clearCookie("token");

  return res.sendStatus(204);
};

export const meController = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const user = await meService(userId);

  res.status(200).json(user);
};
