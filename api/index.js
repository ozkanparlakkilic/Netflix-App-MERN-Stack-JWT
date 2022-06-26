const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoDbConn = require("./config/mongoDbConn");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
const listRoutes = require("./routes/listRoutes");

dotenv.config();
mongoDbConn();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/lists", listRoutes);

app.listen(8000, () => {
  console.log("here");
});
