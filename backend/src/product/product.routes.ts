import { Router } from "express";
import {
  createProductController,
  updateProductController,
} from "./product.controller.ts";
const router = Router();

router.post("/", createProductController);
router.patch("/:id", updateProductController);

// router.get("/product");
// router.put("/proudct");
// router.delete("/product");

// router.post("/variant");
// router.put("/variant");
// router.delete("/variant");

export default router;
