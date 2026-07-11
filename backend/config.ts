import dotenv from "dotenv";

dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
  throw new Error("JWT_SECRET is missing");
}

export const config = {
  port: Number(process.env.PORT) || 3337,
  jwtSecret: jwtSecret,
} as const;

if (!config.port) {
  throw new Error("Port is missing");
}
