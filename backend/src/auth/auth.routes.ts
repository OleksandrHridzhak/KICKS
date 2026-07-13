import { Router } from "express";
import {
  registerController,
  loginController,
  logoutController,
  meController,
  refreshController,
} from "./auth.controller.ts";

import { authMiddleware } from "./auth.middleware.ts";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/refresh", refreshController);
router.post("/logout", authMiddleware, logoutController);
router.get("/me", authMiddleware, meController);

export default router;
