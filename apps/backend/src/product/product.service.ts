import { prisma } from "../core/prisma.ts";
import { Prisma } from "../generated/prisma/client.ts";

export const getProductsService = () => {};

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

export const deleteProductService = async (id: string) => {
  return prisma.product.delete({
    where: {
      id,
    },
  });
};

// export const createVariantService = async (productId: string) => {};

// export const createVariantService = async();
