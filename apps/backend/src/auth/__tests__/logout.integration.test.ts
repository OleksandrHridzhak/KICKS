import { afterAll, beforeEach, describe, expect, it } from "vitest";
import request from "supertest";
import app from "../../../index.ts";
import { prisma } from "../../core/prisma.ts";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../auth.constants.ts";
import { authUserFactory } from "../../../tests/user.factory.ts";
import { API } from "../../../../../packages/routes/index.ts";

const LOGOUT_URL = API.AUTH_ROUTES.LOGOUT;

describe("Logo out test", () => {
  beforeEach(async () => {
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should return 204 ", async () => {
    const { accessToken } = await authUserFactory();

    const response = await request(app)
      .post("/api/auth/logout")
      .set("Cookie", `${ACCESS_TOKEN.NAME}=${accessToken}`);

    expect(response.status).toBe(204);

    const cookie = response.headers["set-cookie"];

    expect(cookie).toEqual(
      expect.arrayContaining([
        expect.stringContaining(`${ACCESS_TOKEN.NAME}=;`),
        expect.stringContaining(`${REFRESH_TOKEN.NAME}=;`),
      ]),
    );
  });
  it("should return 401 without token", async () => {
    const response = await request(app).post(LOGOUT_URL);

    expect(response.status).toBe(401);
  });
});
