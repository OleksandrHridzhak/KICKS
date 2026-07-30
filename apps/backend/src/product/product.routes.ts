import { Router } from "express";
import {
  createProductController,
  getProductCatalogController,
  getVariantController,
  updateProductController,
} from "./product.controller.ts";
import {
  productCatalogReqSchema,
  type ProductCatalogReqDto,
} from "../../../../packages/schemas/product/product.catalog.schema.ts";

import { validationMiddleware } from "../middleware/validation.middleware.ts";
import { PRODUCT_ROUTES } from "../../../../packages/routes/product.routes.ts";

const router = Router();

router.get(PRODUCT_ROUTES.BY_ID(":id"), getVariantController);

router.get(
  PRODUCT_ROUTES.CATALOG,
  validationMiddleware(productCatalogReqSchema),
  getProductCatalogController,
);

router.post(PRODUCT_ROUTES.CREATE, createProductController);
router.patch(PRODUCT_ROUTES.BY_ID(":id"), updateProductController);

export default router;
