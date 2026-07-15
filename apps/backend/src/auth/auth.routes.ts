import { Router } from "express";
import {
  registerController,
  loginController,
  logoutController,
  meController,
  refreshController,
} from "./auth.controller.ts";

import { validationMiddleware } from "../middleware/validation.middleware.ts";
import { loginSchema, registerSchema } from "./auth.schema.ts";
import { authMiddleware } from "./auth.middleware.ts";

const router = Router();

router.post(
  "/register",
  validationMiddleware(registerSchema),
  registerController,
);
router.post("/login", validationMiddleware(loginSchema), loginController);
router.post("/refresh", refreshController);
router.post("/logout", authMiddleware, logoutController);
router.get("/me", authMiddleware, meController);

export default router;
