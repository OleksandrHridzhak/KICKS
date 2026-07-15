import { describe, it, expect, beforeEach, afterAll } from "vitest";
import request from "supertest";
import { prisma } from "../../../lib/prisma.ts";
import app from "../../../index.ts";
import { REFRESH_TOKEN_NAME, ACCESS_TOKEN_NAME } from "../auth.constants.ts";

describe("Register test", () => {
  beforeEach(async () => {
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect;
  });

  it("it should register a new user and return correct tokens", async () => {
    const newUser = {
      email: "ne3443w@gmail.com",
      password: "newpasssword123",
    };

    const response = await request(app)
      .post("/api/auth/register")
      .send(newUser);

    expect(response.status).toBe(201);
    const cookie = response.headers["set-cookie"];

    expect(cookie).toBeDefined();

    expect(cookie).toEqual(
      expect.arrayContaining([
        expect.stringContaining(`${ACCESS_TOKEN_NAME}=`),
        expect.stringContaining(`${REFRESH_TOKEN_NAME}=`),
      ]),
    );
  });

  it("it should return 409", async () => {
    const existingUser = {
      email: "new@gamil.com",
      password: "newpasssword123",
    };
    await prisma.user.create({
      data: existingUser,
    });
    const response = await request(app)
      .post("/api/auth/register")
      .send(existingUser);

    expect(response.status).toBe(409);
  });

  it.each([
    ["@ symbol is missing", "testgmail.com"],
    ["domain is missing", "test@"],
  ])("should return 400 if email %s", async (_, email) => {
    const user = {
      email: email,
      password: "newpasssword123",
    };

    const response = await request(app).post("/api/auth/register").send(user);

    expect(response.status).toBe(400);
  });

  it.each([
    ["is too short", "83jdf"],
    ["doesn't have numbers", "hsjdbbfsk"],
    ["doesn't have letters", "83927343834786"],
  ])("sould return 400 if password %s", async (_, password) => {
    const user = {
      email: "test@gmail.com",
      password,
    };

    const response = await request(app).post("/api/auth/register").send(user);

    expect(response.status).toBe(400);
  });
});
