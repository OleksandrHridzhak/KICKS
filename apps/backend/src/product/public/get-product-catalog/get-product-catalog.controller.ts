import { type Request, type Response } from "express";
import { type ProductCatalogReqDto } from "../../../../../../packages/schemas/product/product.catalog.schema.ts";

import { getProductCatalogService } from "./get-product-catalog.service.ts";

export const getProductCatalogController = async (
  req: Request,
  res: Response,
) => {
  const filters = req.validated.query as ProductCatalogReqDto;
  const data = await getProductCatalogService(filters);

  return res.status(200).json(data);
};
