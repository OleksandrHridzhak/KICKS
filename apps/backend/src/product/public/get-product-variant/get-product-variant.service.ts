import { prisma } from "../../../core/prisma.ts";
import { NotFoundError } from "../../../core/error.ts";

import { type ProductVariantResponseDto } from "../../../../../../packages/schemas/product/product-variant.response.ts";

export const getProductVariantService = async (id: string) => {
  const product = await prisma.productVariant.findUnique({
    where: {
      id,
    },
    include: {
      sizes: { select: { id: true, inStock: true, size: true } },
      photos: true,
      product: {
        include: {
          variants: {
            select: {
              id: true,
              color: true,
              variantName: true,
            },
          },
        },
      },
    },
  });

  if (!product) {
    return new NotFoundError("The product was't found");
  }

  const variant: ProductVariantResponseDto = {
    id: product.id,
    name: product.product.name,
    color: product.color,
    description: product.product.description,
    price: product.product.price.toNumber(),
    photos: product.photos.map((p) => p.photoUrl),
    variants: product.product.variants,
    variantSizes: product.sizes.map((s) => ({
      id: s.id,
      inStock: s.inStock,
      size: s.size.toNumber(),
    })),
  };

  return variant;
};
