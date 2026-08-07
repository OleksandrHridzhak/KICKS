import { prisma } from "../../../core/prisma.ts";


import {
  type ProductCatalogReqDto,
  type ProductCatalogResponseDto,
} from "../../../../../../packages/schemas/product/product.catalog.schema.ts";


export const getProductCatalogService = async ({
  page,
  limit,
  size,
  color,
  targetGender,
  priceMax,
  priceMin,
  sortBy,
  categoryIds,
}: ProductCatalogReqDto) => {
  let orderBy;

  switch (sortBy) {
    case "newest":
      orderBy = {
        product: {
          createdAt: "desc" as const,
        },
      };
      break;
    case "oldest":
      orderBy = {
        product: {
          createdAt: "asc" as const,
        },
      };
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
      break;

    default:
      orderBy = undefined;
  }
  const products = await prisma.productVariant.findMany({
    skip: (page - 1) * limit,
    take: limit,

    orderBy,

    where: {
      product: {
        targetGender: {
          in: targetGender,
        },
        categories: {
          some: {
            id: { in: categoryIds },
          },
        },
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

  const data: ProductCatalogResponseDto = products.map((item) => ({
    id: item.id,
    name: item.product.name,
    price: item.product.price.toNumber(),
    photoUrl: item.photos[0].photoUrl,
  }));

  return data;
};

