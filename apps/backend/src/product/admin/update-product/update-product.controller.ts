import { type Request, type Response } from "express";

import { updateProductService } from "./update-product.service.ts";

export const updateProductController = async (req: Request, res: Response) => {
  const product = await updateProductService(req.params.id as string, req.body);

  return res.status(200).json(product);
};
