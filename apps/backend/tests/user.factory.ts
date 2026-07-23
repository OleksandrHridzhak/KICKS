import { randomUUID } from "crypto";
import { prisma } from "../lib/prisma.ts";
import { createAuthToken } from "../src/core/jwt.ts";
import type {
  UserCreateInput,
  UserModel,
} from "../src/generated/prisma/models";
import {
  ACCESS_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_EXPIRES_IN,
} from "../src/auth/auth.constants.ts";
import { config } from "../config.ts";

/**
 * Creates a user.
 */
export const userFactory = async (overrides: Partial<UserCreateInput> = {}) => {
  const randomSeed = randomUUID();

  return prisma.user.create({
    data: {
      email: `email${randomSeed}@gmail.com`,
      password: `pass888${randomSeed}`,
      gender: "MALE",
      firstName: "Oleksandr",
      lastName: "Globych",
      ...overrides,
    },
  });
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
      ACCESS_TOKEN_EXPIRES_IN,
    ),
    refreshToken: createAuthToken(
      user.id,
      user.email,
      config.jwtRefreshSecret,
      REFRESH_TOKEN_EXPIRES_IN,
    ),
  };
};
