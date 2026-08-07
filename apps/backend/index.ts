import express, { type Express } from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import authRouter from "./src/auth/auth.routes.ts";
import productRouter from "./src/product/product.routes.ts";
import { config } from "./config.ts";
import { errorMiddleware } from "./src/middleware/error.middleware.ts";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import YAML from "yaml";
import fs from "fs";
import { API } from "../../packages/routes/index.ts";
import path from "path";

const app: Express = express();

// Global middlewares

if (config.nodeEnv === "development") {
  app.use(morgan("dev"));
}
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Swagger

const swaggerPath = path.join(process.cwd(), "swagger.yaml");
const swaggerFile = fs.readFileSync(swaggerPath, "utf8");
const swaggerYAML = YAML.parse(swaggerFile);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerYAML));

// Routes
app.use(authRouter);
app.use(productRouter);

// Service endpoints
app.get(API.HEALTH_ROUTE, (req, res) => {
  res.status(200).send("Everything is ok 💚");
});

// error middleware (should be at the end)
app.use(errorMiddleware);

export default app;
