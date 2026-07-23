import { afterAll, beforeEach, describe, expect, it } from "vitest";
import request from "supertest";
import app from "../../../index.ts";
import { prisma } from "../../../lib/prisma.ts";
import { ACCESS_TOKEN_NAME } from "../auth.constants.ts";
import { authUserFactory } from "../../../tests/user.factory.ts";

const ME_URL = "/api/auth/me";

describe("auth/me", () => {
  beforeEach(async () => {
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe("GET", () => {
    it("returns users data when token is provided", async () => {
      const { user, accessToken } = await authUserFactory();

      const response = await request(app)
        .get(ME_URL)
        .set("Cookie", `${ACCESS_TOKEN_NAME}=${accessToken}`);

      expect(response.status).toBe(200);

      expect(response.body).toEqual(
        expect.objectContaining({
          id: user.id,
          email: user.email,
          gender: user.gender,
          firstName: user.firstName,
          lastName: user.lastName,
        }),
      );
    });

    it("returns 401 when the token wasn't provided", async () => {
      const response = await request(app).get(ME_URL);

      expect(response.status).toBe(401);
    });

    it("returns 401 when the token is not valid", async () => {
      const response = await request(app)
        .get(ME_URL)
        .set("Cookie", `${ACCESS_TOKEN_NAME}=invalid-token`);

      expect(response.status).toBe(401);
    });
  });
});

//Was 72
