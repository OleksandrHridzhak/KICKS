import { Router } from "express";
import {
  registerController,
  loginController,
  logoutController,
  meController,
  refreshController,
} from "./auth.controller.ts";

import { validationMiddleware } from "../middleware/validation.middleware.ts";
import {
  loginReqSchema,
  registerReqSchema,
} from "../../../../packages/schemas/auth/auth.schema.ts";
import { authMiddleware } from "./auth.middleware.ts";
import { AUTH_ROUTES } from "../../../../packages/routes/auth.routes.ts";

const router = Router();

router.post(
  AUTH_ROUTES.REGISTER,
  validationMiddleware(registerReqSchema),
  registerController,
);
router.post(
  AUTH_ROUTES.LOGIN,
  validationMiddleware(loginReqSchema),
  loginController,
);
router.post(AUTH_ROUTES.REFRESH, refreshController);
router.post(AUTH_ROUTES.LOGOUT, authMiddleware, logoutController);
router.get(AUTH_ROUTES.ME, authMiddleware, meController);

export default router;
