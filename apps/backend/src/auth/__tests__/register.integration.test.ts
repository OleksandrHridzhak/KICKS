import { describe, it, expect, beforeEach, afterAll } from "vitest";
import request from "supertest";
import { prisma } from "../../core/prisma.ts";
import app from "../../../index.ts";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../auth.constants.ts";
import { userFactory } from "../../../tests/user.factory.ts";

describe("/register", () => {
  beforeEach(async () => {
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect;
  });

  describe("POST", () => {
    it("it should register a new user and return correct tokens", async () => {
      const email = "newuser@gmail.com";
      const password = "newpassword123";

      const response = await request(app)
        .post("/api/auth/register")
        .send({ email, password });

      expect(response.status).toBe(201);
      const cookie = response.headers["set-cookie"];

      expect(cookie).toBeDefined();

      expect(cookie).toEqual(
        expect.arrayContaining([
          expect.stringContaining(`${ACCESS_TOKEN.NAME}=`),
          expect.stringContaining(`${REFRESH_TOKEN.NAME}=`),
        ]),
      );
    });

    it("it should return 409", async () => {
      const user = await userFactory();

      const response = await request(app)
        .post("/api/auth/register")
        .send({ email: user.email, password: user.password });

      expect(response.status).toBe(409);
    });

    it.each([
      ["@ symbol is missing", "testgmail.com"],
      ["domain is missing", "test@"],
    ])("should return 400 if email %s", async (_, email) => {
      const user = await userFactory();

      const response = await request(app)
        .post("/api/auth/register")
        .send({ email: email, password: user.password });

      expect(response.status).toBe(400);
    });

    it.each([
      ["is too short", "83jdf"],
      ["doesn't have numbers", "hsjdbbfsk"],
      ["doesn't have letters", "83927343834786"],
    ])("sould return 400 if password %s", async (_, password) => {
      const user = await userFactory();

      const response = await request(app)
        .post("/api/auth/register")
        .send({ email: user.email, password: password });

      expect(response.status).toBe(400);
    });
  });
});
