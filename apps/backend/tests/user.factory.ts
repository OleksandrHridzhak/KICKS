import { randomUUID } from "crypto";
import { prisma } from "../lib/prisma.ts";
import { createAuthToken } from "../src/core/jwt.ts";
import bcrypt from "bcrypt";
import type {
  UserCreateInput,
  UserModel,
} from "../src/generated/prisma/models";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../src/auth/auth.constants.ts";
import { config } from "../config.ts";

/**
 * Creates a user.
 */
export const userFactory = async (overrides: Partial<UserCreateInput> = {}) => {
  const randomSeed = randomUUID();

  const rawPassword = `pass888${randomSeed}`;
  const hashedPassword = await bcrypt.hash(rawPassword, 10);

  const user = await prisma.user.create({
    data: {
      email: `email${randomSeed}@gmail.com`,
      password: hashedPassword,
      gender: "MALE",
      firstName: "Oleksandr",
      lastName: "Globych",
      ...overrides,
    },
  });

  return { ...user, rawPassword };
};

/**
 * Creates an authenticated user.
 */
export const authUserFactory = async (
  overrides: Partial<UserCreateInput> = {},
): Promise<{ user: UserModel; accessToken: string; refreshToken: string }> => {
  const user = await userFactory(overrides);

  return {
    user,
    accessToken: createAuthToken(
      user.id,
      user.email,
      config.jwtSecret,
      ACCESS_TOKEN.JWT_STANDARD_LIFETIME,
    ),
    refreshToken: createAuthToken(
      user.id,
      user.email,
      config.jwtRefreshSecret,
      REFRESH_TOKEN.JWT_STANDARD_LIFETIME,
    ),
  };
};
