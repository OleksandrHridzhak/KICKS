import { afterAll, beforeEach, describe, expect, it } from "vitest";
import request from "supertest";
import app from "../../../index.ts";
import { config } from "../../../config.ts";
import { prisma } from "../../../lib/prisma.ts";
import {
  REFRESH_TOKEN_NAME,
  ACCESS_TOKEN_NAME,
  ACCESS_TOKEN_EXPIRES_IN,
} from "../auth.constants.ts";
import bcrypt from "bcrypt";
import { createAuthToken } from "../../core/jwt.ts";

const LOGOUT_URL = "/api/auth/logout";
const DEFAULT_EMAIL = "ema8il@gmail.com";
const DEFAULT_PASSWORD = "ueru783847h";

const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, 10);

describe("Logo out test", () => {
  beforeEach(async () => {
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should return 204 ", async () => {
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
      .post("/api/auth/logout")
      .set("Cookie", `${ACCESS_TOKEN_NAME}=${accessToken}`);

    expect(response.status).toBe(204);

    const cookie = response.headers["set-cookie"];

    expect(cookie).toEqual(
      expect.arrayContaining([
        expect.stringContaining(`${ACCESS_TOKEN_NAME}=;`),
        expect.stringContaining(`${REFRESH_TOKEN_NAME}=;`),
      ]),
    );
  });
  it("should return 401 without token", async () => {
    const response = await request(app).post(LOGOUT_URL);

    expect(response.status).toBe(401);
  });
});
