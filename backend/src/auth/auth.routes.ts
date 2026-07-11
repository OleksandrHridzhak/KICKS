import { Router } from "express";
import {
  registerController,
  loginController,
  logoutController,
  meController,
} from "./auth.controller.ts";

import { authMiddleware } from "../middleware/auth.middleware.ts";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/logout", authMiddleware, logoutController);
router.get("/me", authMiddleware, meController);

export default router;
