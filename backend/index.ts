import express, { type Express } from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import authRouter from "./src/auth/auth.routes.ts";
import productRouter from "./src/product/product.routes.ts";
import { config } from "./config.ts";
import { errorMiddleware } from "./src/middleware/error.middleware.ts";

const app: Express = express();
const port = config.port;

// Global middlewares

if (config.nodeEnv === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);

// Service endpoints
app.get("/api/health", (req, res) => {
  res.status(200).send("Everything is ok 💚");
});

// error middleware (should be at the end)
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
