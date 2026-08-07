import { Prisma } from "../../../generated/prisma/client.ts";
import { prisma } from "../../../core/prisma.ts";

export const createProductService = async (data: Prisma.ProductCreateInput) => {
  return prisma.product.create({
    data,
  });
};
