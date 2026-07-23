import * as z from "zod";
import { Gender } from "../generated/prisma/enums.ts";

export const registerSchema = z.object({
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
});

export type RegisterDto = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().nonempty("Password is required"),
  rememberMe: z.boolean().default(false),
});

export type LoginDto = z.infer<typeof loginSchema>;
