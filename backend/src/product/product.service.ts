import { prisma } from "../../lib/prisma.ts";
import { Prisma } from "../generated/prisma/client.ts";

export const createProductService = async (data: Prisma.ProductCreateInput) => {
  return prisma.product.create({
    data,
  });
};

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

// export const createVariantService = async (productId: string) => {};

// export const createVariantService = async();
