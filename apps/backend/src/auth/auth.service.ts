import { prisma } from "../core/prisma.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  ConflictError,
  NotFoundError,
  UnauthenticatedError,
} from "../core/error.ts";
import { type TokenPayload } from "./auth.types.ts";

import { createAuthToken } from "../core/jwt.ts";
import { config } from "../../config.ts";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./auth.constants.ts";

import type {
  RegisterDto,
  LoginDto,
} from "../../../../packages/schemas/auth/auth.schema.ts";

export const registerService = async ({
  email,
  password,
  gender,
  firstName,
  lastName,
  rememberMe,
}: RegisterDto) => {
  let user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (user) {
    throw new ConflictError("User already exists");
  }

  const encryptedPassword = await bcrypt.hash(password, 10);

  user = await prisma.user.create({
    data: {
      email,
      gender,
      firstName,
      lastName,
      password: encryptedPassword,
    },
  });

  const accessToken = createAuthToken(
    user.id,
    user.email,
    config.jwtSecret,
    ACCESS_TOKEN.JWT_STANDARD_LIFETIME,
  );
  const refreshToken = createAuthToken(
    user.id,
    user.email,
    config.jwtRefreshSecret,

    rememberMe
      ? REFRESH_TOKEN.JWT_STANDARD_LIFETIME
      : REFRESH_TOKEN.JWT_SHORT_SESSION_LIFETIME,
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const loginService = async ({
  email,
  password,
  rememberMe,
}: LoginDto) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (user === null) {
    throw new UnauthenticatedError("Invalid email or password");
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new UnauthenticatedError("Invalid email or password");
  }

  const accessToken = createAuthToken(
    user.id,
    user.email,
    config.jwtSecret,
    ACCESS_TOKEN.JWT_STANDARD_LIFETIME,
  );
  const refreshToken = createAuthToken(
    user.id,
    user.email,
    config.jwtRefreshSecret,
    rememberMe
      ? REFRESH_TOKEN.JWT_STANDARD_LIFETIME
      : REFRESH_TOKEN.JWT_SHORT_SESSION_LIFETIME,
  );

  return {
    accessToken,
    refreshToken,
  }; //TODO: SHOULD I RETURN SOMETHING MORE THAN TWO TOKENS?
};

export const refreshService = async (refreshToken: string) => {
  const payload = jwt.verify(
    refreshToken,
    config.jwtRefreshSecret,
  ) as TokenPayload;

  const accessToken = createAuthToken(
    payload.id,
    payload.email,
    config.jwtSecret,
    ACCESS_TOKEN.JWT_STANDARD_LIFETIME,
  );

  return { accessToken };
};

export const meService = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user) {
    throw new NotFoundError("We can't find your information");
  }
  return {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    gender: user.gender,
  };
};
