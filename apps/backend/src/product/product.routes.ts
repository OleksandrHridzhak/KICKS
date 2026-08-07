import { Router } from "express";
import {
  getProductCatalogController,
} from "./public/get-product-catalog/get-product-catalog.controller.ts";
import { getVariantController } from "./public/get-product-variant/get-product-variant.controller.ts";
import { createProductController } from "./admin/create-product/create-product.controller.ts";
import { updateProductController } from "./admin/update-product/update-product.controller.ts";
import { deleteProductController } from "./admin/delete-product/delete-product.controller.ts";
import { productCatalogReqSchema } from "../../../../packages/schemas/product/product.catalog.schema.ts";

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
router.delete(PRODUCT_ROUTES.BY_ID(":id"), deleteProductController);

export default router;
