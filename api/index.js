const express = require("express");
const dotenv = require("dotenv");
const mongoDbConn = require("./config/mongoDbConn");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");

dotenv.config();
mongoDbConn();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes);

app.listen(8000, () => {
  console.log("here");
});
