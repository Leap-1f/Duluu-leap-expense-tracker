import express from "express";
import { sql } from "./config/database.js";
import { user } from "./src/router/user.js";
const app = express();
const port = 3000;

app.use("/users", user);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
