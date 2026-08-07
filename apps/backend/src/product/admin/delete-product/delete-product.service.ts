import { prisma } from "../../../core/prisma.ts";

export const deleteProductService = async (id: string) => {
  return prisma.product.delete({
    where: {
      id,
    },
  });
};
