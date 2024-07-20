const express = require("express");
const app = express();
const { PORT } = require("./config/server.config.js");
const router = require("./routes/userRouter");
const connectToDB = require("./config/db.config");

const dotenv = require("dotenv");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);
app.listen(PORT, async () => {
  console.log(`port is ${PORT}`);

  await connectToDB();
  console.log("Successfully connected to db");
});
