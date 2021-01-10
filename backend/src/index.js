const express = require("express");
const { json } = express;
const cors = require("cors");
const app = express();
const port = 3000;

const registerHandler = require("./registerHandler");
const loginHandler = require("./loginHandler");

app.use(json());
app.use(
  cors({
    origin: "*",
  }),
);

app.post("/register", registerHandler);
app.post("/login", loginHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
