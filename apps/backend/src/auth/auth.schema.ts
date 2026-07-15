import * as z from "zod";

export const registerSchema = z.object({
  email: z.email("Invalid email"),
  password: z
    .string()
    .min(8, "Password should be at least 8 characters")
    .regex(/\d/, "Must contain a number")
    .regex(/[A-Za-z]/, "Must contain a letter"),
});

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().nonempty("Password is required"),
});
