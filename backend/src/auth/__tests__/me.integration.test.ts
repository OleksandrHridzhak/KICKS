import { afterAll, beforeEach, describe, expect, it } from "vitest";
import request from "supertest";
import app from "../../../index.ts";
import { config } from "../../../config.ts";
import { prisma } from "../../../lib/prisma.ts";
import {
  ACCESS_TOKEN_NAME,
  ACCESS_TOKEN_EXPIRES_IN,
} from "../auth.constants.ts";
import bcrypt from "bcrypt";
import { createAuthToken } from "../../core/jwt.ts";

const ME_URL = "/api/auth/me";
const DEFAULT_EMAIL = "ema38il@gmail.com";
const DEFAULT_PASSWORD = "ueru783847h";

const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, 10);

describe("me test", () => {
  beforeEach(async () => {
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should return user data with valid token", async () => {
    const user = await prisma.user.create({
      data: {
        email: DEFAULT_EMAIL,
        password: hashedPassword,
      },
    });

    const accessToken = createAuthToken(
      user.id,
      DEFAULT_EMAIL,
      config.jwtSecret,
      ACCESS_TOKEN_EXPIRES_IN,
    );

    const response = await request(app)
      .get(ME_URL)
      .set("Cookie", `${ACCESS_TOKEN_NAME}=${accessToken}`);

    expect(response.status).toBe(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        id: user.id,
        email: DEFAULT_EMAIL,
      }),
    );
  });

  it("should return 401 without token", async () => {
    const response = await request(app).get(ME_URL);

    expect(response.status).toBe(401);
  });

  it("should return 401 with invalid token", async () => {
    const response = await request(app)
      .get(ME_URL)
      .set("Cookie", `${ACCESS_TOKEN_NAME}=invalid-token`);

    expect(response.status).toBe(401);
  });
});
