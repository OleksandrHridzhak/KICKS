import type { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { API } from "../../../../packages/routes";
import {
  loginReqSchema,
  meResponseSchema,
  registerReqSchema,
} from "../../../../packages/schemas/auth/auth.schema";
import { errorResponseSchema } from "../../../../packages/schemas/error/error.schema";

export function authRegistry(registry: OpenAPIRegistry) {
  registry.registerComponent("securitySchemes", "accessCookie", {
    type: "apiKey",
    in: "cookie",
    name: "accessToken",
    description: "Access token stored in an HTTP-only cookie.",
  });

  registry.registerComponent("securitySchemes", "refreshCookie", {
    type: "apiKey",
    in: "cookie",
    name: "refreshToken",
    description: "Refresh token stored in an HTTP-only cookie.",
  });

  registry.registerPath({
    method: "post",
    path: API.AUTH_ROUTES.REGISTER,
    summary: "Register a user",
    description: "Creates a new user account and sets authentication cookies.",
    tags: ["Authentication"],
    request: {
      body: {
        content: {
          "application/json": {
            schema: registerReqSchema.shape.body,
          },
        },
      },
    },
    responses: {
      201: {
        description: "User registered successfully",
      },
      400: {
        description: "Invalid registration data",
        content: {
          "application/json": {
            schema: errorResponseSchema,
          },
        },
      },
      409: {
        description: "User already exists",
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
    path: API.AUTH_ROUTES.LOGIN,
    summary: "Log in a user",
    description: "Authenticates a user and sets authentication cookies.",
    tags: ["Authentication"],
    request: {
      body: {
        content: {
          "application/json": {
            schema: loginReqSchema.shape.body,
          },
        },
      },
    },
    responses: {
      200: {
        description: "User logged in successfully",
      },
      400: {
        description: "Invalid login data",
        content: {
          "application/json": {
            schema: errorResponseSchema,
          },
        },
      },
      401: {
        description: "Invalid email or password",
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
    path: API.AUTH_ROUTES.REFRESH,
    summary: "Refresh an access token",
    description: "Creates a new access token using the refresh-token cookie.",
    tags: ["Authentication"],
    security: [{ refreshCookie: [] }],
    responses: {
      204: {
        description: "Access token refreshed successfully",
      },
      401: {
        description: "Invalid or missing refresh token",
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
    path: API.AUTH_ROUTES.LOGOUT,
    summary: "Log out a user",
    description: "Clears the authentication cookies for the current user.",
    tags: ["Authentication"],
    security: [{ accessCookie: [] }],
    responses: {
      204: {
        description: "User logged out successfully",
      },
      401: {
        description: "Authentication required",
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
    path: API.AUTH_ROUTES.ME,
    summary: "Get the current user",
    description: "Returns information about the authenticated user.",
    tags: ["Authentication"],
    security: [{ accessCookie: [] }],
    responses: {
      200: {
        description: "Current user retrieved successfully",
        content: {
          "application/json": {
            schema: meResponseSchema,
          },
        },
      },
      401: {
        description: "Authentication required",
        content: {
          "application/json": {
            schema: errorResponseSchema,
          },
        },
      },
      404: {
        description: "User not found",
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
}
