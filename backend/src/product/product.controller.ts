import { type Request, type Response } from "express";

import {
  createProductService,
  updateProductService,
} from "./product.service.ts";

export const createProductController = async (req: Request, res: Response) => {
  const product = await createProductService(req.body);

  return res.status(201).json(product);
};

export const updateProductController = async (req: Request, res: Response) => {
  const product = await updateProductService(req.params.id as string, req.body);
  return res.status(200).json(product);
};
