import { type Request, type Response } from "express";
import { type ProductCatalogReqDto } from "../../../../packages/schemas/product/product.catalog.schema.ts";

import {
  createProductService,
  getProductCatalogService,
  getProductVariantService,
  updateProductService,
} from "./product.service.ts";

export const getVariantController = async (req: Request, res: Response) => {
  const variantId = req.params.id as string;

  const data = await getProductVariantService(variantId);

  return res.status(200).json(data);
};

export const getProductCatalogController = async (
  req: Request,
  res: Response,
) => {
  const filters = req.validated.query as ProductCatalogReqDto;
  const data = await getProductCatalogService(filters);

  return res.status(200).json(data);
};

// Admin
export const createProductController = async (req: Request, res: Response) => {
  const product = await createProductService(req.body);

  return res.status(201).json(product);
};

export const updateProductController = async (req: Request, res: Response) => {
  const product = await updateProductService(req.params.id as string, req.body);
  return res.status(200).json(product);
};
