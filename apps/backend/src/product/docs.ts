import type { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import * as z from "zod";
import { API } from "../../../../packages/routes";
import { productCatalogQuerySchema } from "../../../../packages/schemas/product/product.catalog.schema";
import { productCatalogResponseSchema } from "../../../../packages/schemas/product/product.catalog.schema";
import { errorResponseSchema } from "../../../../packages/schemas/error/error.schema";

const productMutationBodySchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  brand: z.string(),
});

const productMutationParamsSchema = z.object({
  id: z.string(),
});

const productMutationResponseSchema = z.object({}).passthrough();

const productMutationExample = {
  name: "Nike Air Max 270",
  description:
    "Кросівки Nike Air Max 270 для повсякденного використання. Легкі та зручні.",
  price: 149.99,
  category: "shoes",
  brand: "Nike",
};

export function productRegistry(registry: OpenAPIRegistry) {
  registry.registerPath({
    method: "get",
    path: API.PRODUCT_ROUTES.CATALOG,
    summary: "Get product catalog",
    description:
      "Returns a paginated list of products with optional filtering and sorting.",
    tags: ["Products"],
    request: {
      query: productCatalogQuerySchema,
    },

    responses: {
      200: {
        description: "Products retrieved successfully",
        content: {
          "application/json": {
            schema: productCatalogResponseSchema,
          },
        },
      },
      400: {
        description: "Invalid query parameters",
        content: {
          "application/json": {
            schema: errorResponseSchema,
          },
        },
      },
      500: {
        description: "Internal server error",
        content: {
          "application/json": {
            schema: errorResponseSchema,
          },
        },
      },
    },
  });

  registry.registerPath({
    method: "get",
    path: API.PRODUCT_ROUTES.BY_ID("{id}"),
    summary: "Get product variant",
    description: "Returns a product variant by id.",
    tags: ["Products"],
    request: {
      params: productMutationParamsSchema,
    },
    responses: {
      200: {
        description: "Product variant retrieved successfully",
      },
      404: {
        description: "Product variant not found",
        content: {
          "application/json": {
            schema: errorResponseSchema,
          },
        },
      },
      500: {
        description: "Internal server error",
        content: {
          "application/json": {
            schema: errorResponseSchema,
          },
        },
      },
    },
  });

  registry.registerPath({
    method: "post",
    path: API.PRODUCT_ROUTES.CREATE,
    summary: "Create product",
    description: "Creates a new product.",
    tags: ["Products"],
    request: {
      body: {
        content: {
          "application/json": {
            schema: productMutationBodySchema,
            example: productMutationExample,
          },
        },
      },
    },
    responses: {
      201: {
        description: "Product created successfully",
        content: {
          "application/json": {
            schema: productMutationResponseSchema,
          },
        },
      },
      500: {
        description: "Internal server error",
        content: {
          "application/json": {
            schema: errorResponseSchema,
          },
        },
      },
    },
  });

  registry.registerPath({
    method: "patch",
    path: API.PRODUCT_ROUTES.BY_ID("{id}"),
    summary: "Update product",
    description: "Updates an existing product by id.",
    tags: ["Products"],
    request: {
      params: productMutationParamsSchema,
      body: {
        content: {
          "application/json": {
            schema: productMutationBodySchema,
            example: productMutationExample,
          },
        },
      },
    },
    responses: {
      200: {
        description: "Product updated successfully",
        content: {
          "application/json": {
            schema: productMutationResponseSchema,
          },
        },
      },
      500: {
        description: "Internal server error",
        content: {
          "application/json": {
            schema: errorResponseSchema,
          },
        },
      },
    },
  });
}
