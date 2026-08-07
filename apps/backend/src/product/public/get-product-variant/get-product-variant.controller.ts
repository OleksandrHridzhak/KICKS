import { type Request, type Response } from "express";

import { getProductVariantService } from "./get-product-variant.service.ts";

export const getVariantController = async (req: Request, res: Response) => {
  const variantId = req.params.id as string;
  const data = await getProductVariantService(variantId);

  return res.status(200).json(data);
};
