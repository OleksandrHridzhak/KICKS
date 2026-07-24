import { afterAll, beforeEach, describe, expect, it } from "vitest";
import request from "supertest";
import app from "../../../index.ts";
import { prisma } from "../../../lib/prisma.ts";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../auth.constants.ts";
import { userFactory } from "../../../tests/user.factory.ts";

const LOGIN_URL = "/api/auth/login";
const FAKE_EMAIL = "emai66l@gmail.com";
const FAKE_PASSWORD = "ueru783847h";

describe("login test", () => {
  beforeEach(async () => {
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe("POST", () => {
    it("should login successfully with valid credentials and returns valid tokens", async () => {
      const user = await userFactory();

      const response = await request(app).post(LOGIN_URL).send({
        email: user.email,
        password: user.rawPassword,
      });

      expect(response.status).toBe(200);

      const cookie = response.headers["set-cookie"];

      expect(cookie).toBeDefined();

      expect(cookie).toEqual(
        expect.arrayContaining([
          expect.stringContaining(`${ACCESS_TOKEN.NAME}=`),
          expect.stringContaining(`${REFRESH_TOKEN.NAME}=`),
        ]),
      );
    });

    it("should return an error for a non-existent email", async () => {
      const response = await request(app).post(LOGIN_URL).send({
        email: FAKE_EMAIL,
        password: FAKE_PASSWORD,
      });

      expect(response.status).toBe(401);
    });

    it("should return an error for an incorrect password", async () => {
      const user = await userFactory();
      const response = await request(app).post(LOGIN_URL).send({
        email: user.email,
        password: FAKE_PASSWORD,
      });

      expect(response.status).toBe(401);
    });

    it("should return a validation error when email is empty", async () => {
      const response = await request(app).post(LOGIN_URL).send({
        email: "",
        password: FAKE_PASSWORD,
      });

      expect(response.status).toBe(400);
    });

    it("should return a validation error when password is empty", async () => {
      const response = await request(app).post(LOGIN_URL).send({
        email: FAKE_EMAIL,
        password: "",
      });

      expect(response.status).toBe(400);
    });
  });
});
