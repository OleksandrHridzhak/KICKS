import { AUTH_ROUTES } from "./auth.routes.ts";
import { PRODUCT_ROUTES } from "./product.routes.ts";

export const API = {
  AUTH_ROUTES,
  PRODUCT_ROUTES,
  HEALTH_ROUTE: "/api/health" as const,
} as const;

// В кожному файлі дублюєтся /api/ треба винести в окрему змінну?
