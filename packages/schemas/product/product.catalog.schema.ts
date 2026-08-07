import * as z from "zod";
import { ProductGender } from "../../../apps/backend/src/generated/prisma/enums";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { queryToArray } from "../helpers/query-to-array.ts";

// TODO: move to one general file to avoid duplications
extendZodWithOpenApi(z);

// REQUEST
export const sortBySchema = z.enum([
  "price_asc",
  "price_desc",
  "newest",
  "oldest",
  "tranding",
]);

export const productCatalogQuerySchema = z.object({
  page: z.coerce.number().int().positive().optional().default(1).openapi({
    example: 1,
  }),
  limit: z.coerce.number().int().positive().optional().default(4).openapi({
    example: 4,
  }),

  size: queryToArray(z.coerce.number())
    .optional()
    .openapi({
      type: "array",
      items: { type: "integer" },
      example: [40, 41],
    }),

  color: queryToArray(z.string()).optional().openapi({
    type: "array",
    items: { type: "string" },
    example: ["black", "white"],
  }),
  categoryIds: queryToArray(z.string()).optional().openapi({
    type: "array",
    items: { type: "string" },
    example: ["running", "basketball"],
  }),

  priceMin: z.coerce.number().nonnegative().optional().openapi({
    example: 50,
  }),
  priceMax: z.coerce.number().nonnegative().optional().openapi({
    example: 250,
  }),


  targetGender: queryToArray(z.enum(ProductGender)).optional().openapi({
    type: "array",
    items: { type: "string", enum: Object.values(ProductGender) },
    example: ["MEN"],
  }),

  sortBy: sortBySchema.optional().openapi({
    example: "newest",
  }),
});

export const productCatalogReqSchema = z.object({
  query: productCatalogQuerySchema,
});

export type ProductCatalogReqDto = z.infer<
  typeof productCatalogReqSchema
>["query"];

// RESPONSE
export const productCatalogItemSchema = z.object({
  id: z.string().openapi({
    example: "clx123abc456def789",
  }),
  name: z.string().openapi({
    example: "Air Max 90",
  }),
  photoUrl: z.string().openapi({
    example: "https://cdn.example.com/products/air-max-90.jpg",
  }),
  price: z.number().openapi({
    example: 129.99,
  }),
});

export const productCatalogResponseSchema = z.array(productCatalogItemSchema);

// export type ProductCatalogItemDto = z.infer<typeof productCatalogItemSchema>;

export type ProductCatalogResponseDto = z.infer<
  typeof productCatalogResponseSchema
>;
