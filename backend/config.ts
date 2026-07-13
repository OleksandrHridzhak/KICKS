import dotenv from "dotenv";

dotenv.config();

const jwtSecret = process.env.JWT_SECRET;
const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET;

if (!jwtSecret || !jwtRefreshSecret) {
  throw new Error("JWT_SECRET is missing");
}

export const config = {
  port: Number(process.env.PORT) || 3337,
  jwtSecret: jwtSecret,
  jwtRefreshSecret: jwtRefreshSecret,
  nodeEnv: process.env.NODE_ENV,
} as const;

if (!config.port) {
  throw new Error("Port is missing");
}
