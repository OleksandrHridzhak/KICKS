export const PRODUCT_ROUTES = {
  CATALOG: "/api/products",
  CREATE: "/api/products",
  BY_ID: (id: string) => `/api/products/${id}` as const,
} as const;
