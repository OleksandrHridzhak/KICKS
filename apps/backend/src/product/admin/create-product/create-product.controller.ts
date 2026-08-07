import { type Request, type Response } from "express";

import { createProductService } from "./create-product.service.ts";

export const createProductController = async (req: Request, res: Response) => {
  const product = await createProductService(req.body);

  return res.status(201).json(product);
};
