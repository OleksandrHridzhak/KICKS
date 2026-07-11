import express, { type Express, type Request, type Response } from "express";
import { prisma } from "./lib/prisma.ts";
import cookieParser from "cookie-parser";
import authRouter from "./src/auth/auth.routes.ts";
import { config } from "./config.ts";

const app: Express = express();
const port = config.port;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/products", async (req, res) => {
  const data = await prisma.product.findMany();
  res.send(data);
});

app.listen(port, () => {
  console.log(`We are listening to the ${port} port`);
});
