import { prisma } from "../lib/prisma.ts";

async function main() {
  await prisma.product.create({
    data: {
      name: "Nike",
      description: "wooow shoes",
      price: 200,
    },
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    prisma.$disconnect();
  });
