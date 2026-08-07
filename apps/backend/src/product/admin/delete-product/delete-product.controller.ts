import { type Request, type Response } from "express";

import { deleteProductService } from "./delete-product.service.ts";

export const deleteProductController = async (req: Request, res: Response) => {
  await deleteProductService(req.params.id as string);

  return res.sendStatus(204);
};
