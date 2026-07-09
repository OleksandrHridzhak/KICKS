import express, { type Express, type Request, type Response } from "express";

const app: Express = express();
const port = 3337;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`We are listening to the ${port} port`);
});
