const mongoose = require("mongoose");

const mongoDbConn = () => {
  const mongoDbUrl = process.env.MONGO_URI;
  mongoose
    .connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log("Db Connection Successfull"))
    .catch((err) => console.log(err));
};

module.exports = mongoDbConn;
