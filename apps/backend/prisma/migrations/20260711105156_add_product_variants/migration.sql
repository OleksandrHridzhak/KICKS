/*
  Warnings:

  - Added the required column `brand` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ProductVariant" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "variantName" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "ProductVariant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VariantSize" (
    "id" TEXT NOT NULL,
    "productVariantId" TEXT NOT NULL,
    "sizeName" DECIMAL(65,30) NOT NULL,
    "inStock" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "VariantSize_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VariantPhoto" (
    "id" TEXT NOT NULL,
    "productVariantId" TEXT NOT NULL,
    "photoUrl" TEXT NOT NULL,

    CONSTRAINT "VariantPhoto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductVariant" ADD CONSTRAINT "ProductVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariantSize" ADD CONSTRAINT "VariantSize_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariantPhoto" ADD CONSTRAINT "VariantPhoto_productVariantId_fkey" FOREIGN KEY ("productVariantId") REFERENCES "ProductVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
