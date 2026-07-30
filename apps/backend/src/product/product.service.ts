import { prisma } from "../core/prisma.ts";
import { Prisma } from "../generated/prisma/client.ts";

import { type ProductVariantResponseDto } from "../../../../packages/schemas/product/product-variant-response.dto.ts";
import {
  type ProductCatalogReqDto,
  type ProductCatalogResponseDto,
} from "../../../../packages/schemas/product/product.catalog.schema.ts";
import { NotFoundError } from "../core/error.ts";

export const getProductCatalogService = async ({
  page,
  limit,
  size,
  color,
  gender, // Don't have gender in  db schema
  priceMax,
  priceMin,
  sortBy,
  type, // Don't have gender in db schema
}: ProductCatalogReqDto) => {
  let orderBy;

  switch (sortBy) {
    case "newest":
      orderBy = {}; // Need to add created at to db
      break;
    case "oldest":
      orderBy = {}; // Need to add created at to db
      break;

    case "price_asc":
      orderBy = {
        product: {
          price: "asc" as const,
        },
      };
      break;

    case "price_desc":
      orderBy = {
        product: {
          price: "desc" as const,
        },
      };
      break;

    case "tranding":
      orderBy = {};
      break; // populariry score by amount of sales

    default:
      orderBy = undefined;
  }
  const products = await prisma.productVariant.findMany({
    skip: (page - 1) * limit,
    take: limit,

    orderBy,

    where: {
      product: {
        price: {
          gte: priceMin,
          lte: priceMax,
        },
      },
      color: {
        in: color,
      },
      sizes: {
        some: {
          size: {
            in: size,
          },
          inStock: {
            gt: 0,
          },
        },
      },
    },

    select: {
      id: true,
      photos: {
        select: {
          photoUrl: true,
        },
      },
      product: {
        select: {
          name: true,
          price: true,
        },
      },
    },
  });

  const data: ProductCatalogResponseDto[] = products.map((item) => ({
    id: item.id,
    name: item.product.name,
    price: item.product.price.toNumber(),
    photoUrl: item.photos[0].photoUrl,
  }));

  return data;
};

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

// Admin

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
