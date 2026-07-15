import { afterAll, beforeEach, describe, expect, it } from "vitest";
import request from "supertest";
import bcrypt from "bcrypt";
import app from "../../../index.ts";
import { prisma } from "../../../lib/prisma.ts";
import { REFRESH_TOKEN_NAME, ACCESS_TOKEN_NAME } from "../auth.constants.ts";

const LOGIN_URL = "/api/auth/login";
const DEFAULT_EMAIL = "emai66l@gmail.com";
const DEFAULT_PASSWORD = "ueru783847h";

describe("login test", () => {
  beforeEach(async () => {
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should login successfully with valid credentials and returns valid tokens", async () => {
    const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, 10);

    await prisma.user.create({
      data: {
        email: DEFAULT_EMAIL,
        password: hashedPassword,
      },
    });

    const response = await request(app).post(LOGIN_URL).send({
      email: DEFAULT_EMAIL,
      password: DEFAULT_PASSWORD,
    });

    expect(response.status).toBe(200);

    const cookie = response.headers["set-cookie"];

    expect(cookie).toBeDefined();

    expect(cookie).toEqual(
      expect.arrayContaining([
        expect.stringContaining(`${ACCESS_TOKEN_NAME}=`),
        expect.stringContaining(`${REFRESH_TOKEN_NAME}=`),
      ]),
    );
  });

  it("should return an error for a non-existent email", async () => {
    const response = await request(app).post(LOGIN_URL).send({
      email: DEFAULT_EMAIL,
      password: DEFAULT_PASSWORD,
    });

    expect(response.status).toBe(401);
  });

  it("should return an error for an incorrect password", async () => {
    const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, 10);

    await prisma.user.create({
      data: {
        email: DEFAULT_EMAIL,
        password: hashedPassword,
      },
    });

    const response = await request(app).post(LOGIN_URL).send({
      email: DEFAULT_EMAIL,
      password: "wrongpassword123",
    });

    expect(response.status).toBe(401);
  });

  it("should return a validation error when email is empty", async () => {
    const response = await request(app).post(LOGIN_URL).send({
      email: "",
      password: DEFAULT_PASSWORD,
    });

    expect(response.status).toBe(400);
  });

  it("should return a validation error when password is empty", async () => {
    const response = await request(app).post(LOGIN_URL).send({
      email: DEFAULT_EMAIL,
      password: "",
    });

    expect(response.status).toBe(400);
  });
});
