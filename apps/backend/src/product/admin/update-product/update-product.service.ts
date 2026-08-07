import { Prisma } from "../../../generated/prisma/client.ts";
import { prisma } from "../../../core/prisma.ts";

export const updateProductService = async (
  id: string,
  data: Prisma.ProductUpdateInput,
) => {
  return prisma.product.update({
    where: {
      id,
    },
    data,
  });
};
