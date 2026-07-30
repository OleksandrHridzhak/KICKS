import { prisma } from "../../src/core/prisma.ts";
import { productSeed } from "./products/products.seed.ts";

async function main() {
  await productSeed();
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    prisma.$disconnect();
  });
