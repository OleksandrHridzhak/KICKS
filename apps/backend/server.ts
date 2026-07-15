import app from "./index";
import { config } from "./config.ts";

const port = config.port;
app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
