import { prisma } from "../../lib/prisma.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  ConflictError,
  NotFoundError,
  ValidationError,
} from "../core/error.ts";
import { type TokenPayload } from "./auth.types.ts";

import { config } from "../../config.ts";
import {
  ACCESS_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_EXPIRES_IN,
} from "./auth.constants.ts";

const createAuthToken = (
  id: string,
  email: string,
  secret: string,
  expiresIn: number,
) => {
  return jwt.sign(
    {
      id,
      email,
    },
    secret,
    {
      expiresIn,
    },
  );
};

export const registerService = async (email: string, password: string) => {
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
      email: email,
      password: encryptedPassword,
    },
  });

  const accessToken = createAuthToken(
    user.id,
    user.email,
    config.jwtSecret,
    ACCESS_TOKEN_EXPIRES_IN,
  );
  const refreshToken = createAuthToken(
    user.id,
    user.email,
    config.jwtRefreshSecret,
    REFRESH_TOKEN_EXPIRES_IN,
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const loginService = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (user === null) {
    throw new ValidationError("Invalid email or password");
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new ValidationError("Invalid email or password");
  }

  const accessToken = createAuthToken(
    user.id,
    user.email,
    config.jwtSecret,
    ACCESS_TOKEN_EXPIRES_IN,
  );
  const refreshToken = createAuthToken(
    user.id,
    user.email,
    config.jwtRefreshSecret,
    REFRESH_TOKEN_EXPIRES_IN,
  );

  return {
    accessToken,
    refreshToken,
  };
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
    ACCESS_TOKEN_EXPIRES_IN,
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
  };
};
