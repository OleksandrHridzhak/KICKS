import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

import { Gender } from "../../../apps/backend/src/generated/prisma/enums.ts";

// Register schema ---
export const registerReqSchema = z.object({
  body: z.object({

    email: z.email("Invalid email"),
    password: z
      .string()
      .min(8, "Password should be at least 8 characters")
      .regex(/\d/, "Must contain a number")
      .regex(/[A-Za-z]/, "Must contain a letter"),
    gender: z.preprocess(
      (val) => (typeof val === "string" ? val.toUpperCase() : val),
      z.enum(Gender).optional(),
    ),
    firstName: z.string().trim().min(1).optional(),
    lastName: z.string().trim().min(1).optional(),
    rememberMe: z.boolean().default(false),
  }),
});

export type RegisterDto = z.infer<typeof registerReqSchema>["body"];

// Login schema ---
export const loginReqSchema = z.object({
  body: z.object({
    email: z.email(),
    password: z.string().nonempty("Password is required"),
    rememberMe: z.boolean().default(false),
  }),
});

export type LoginDto = z.infer<typeof loginReqSchema>["body"];

// Current user response schema ---
export const meResponseSchema = z.object({
  id: z.string().openapi({
    example: "550e8400-e29b-41d4-a716-446655440000",
  }),
  email: z.email().openapi({
    example: "user@example.com",
  }),
  firstName: z.string().nullable().openapi({
    example: "Alex",
  }),
  lastName: z.string().nullable().openapi({
    example: "Johnson",
  }),
  gender: z.enum(Gender).nullable().openapi({
    example: "OTHER",
  }),
});
