import { prisma } from "../../../src/core/prisma";
import { categories, brands, products } from "./data";

export async function productSeed() {
  await prisma.category.createMany({
    data: categories,
    skipDuplicates: true,
  });

  await prisma.brand.createMany({
    data: brands,
    skipDuplicates: true,
  });

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}
