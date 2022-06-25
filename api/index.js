const express = require("express");
const dotenv = require("dotenv");
const mongoDbConn = require("./config/mongoDbConn");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
mongoDbConn();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.listen(8000, () => {
  console.log("here");
});
