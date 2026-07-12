import { prisma } from "../../lib/prisma.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  ConflictError,
  NotFoundError,
  ValidationError,
} from "../core/error.ts";

import { config } from "../../config.ts";

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

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    config.jwtSecret,
    {
      expiresIn: "7d",
    },
  );
  return token;
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

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    config.jwtSecret,
    {
      expiresIn: "7d",
    },
  );

  return token;
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
