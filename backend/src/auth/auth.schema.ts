import { z } from "zod";

export const registerScheme = z.object({
  body: z.object({
    email: z.email("Invalid email format"),
    password: z.string().min(8, "Password should be at least 8 characters"),
  }),
});
