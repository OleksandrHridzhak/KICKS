import * as z from "zod";

export const sortBySchema = z.enum([
  "price_asc",
  "price_desc",
  "newest",
  "oldest",
  "tranding",
]);

export const productCatalogReqSchema = z.object({
  query: z.object({
    page: z.coerce.number().int().positive().optional().default(1),
    limit: z.coerce.number().int().positive().optional().default(4),

    size: z.preprocess(
      (val) =>
        Array.isArray(val)
          ? val.map(Number)
          : val != undefined
            ? [Number(val)]
            : undefined,
      z.array(z.number()).optional(),
    ),
    color: z.preprocess(
      (val) =>
        Array.isArray(val) ? val : typeof val === "string" ? [val] : undefined,
      z.array(z.string()).optional(),
    ),
    type: z.preprocess(
      (val) =>
        Array.isArray(val) ? val : typeof val === "string" ? [val] : undefined,
      z.array(z.string()).optional(),
    ),

    priceMin: z.coerce.number().nonnegative().optional(),
    priceMax: z.coerce.number().nonnegative().optional(),
    gender: z.preprocess(
      (val) =>
        Array.isArray(val) ? val : typeof val === "string" ? [val] : undefined,
      z.array(z.string()).optional(),
    ),

    sortBy: sortBySchema.optional(),
  }),
});

export type ProductCatalogReqDto = z.infer<
  typeof productCatalogReqSchema
>["query"];

// Response DTO
export interface ProductCatalogResponseDto {
  id: string;
  name: string;
  photoUrl: string;

  price: number;
}
