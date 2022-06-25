const User = require("../models/User");

const findByUserWithEmail = (email) => {
  return User.findOne({ email: email });
};

module.exports = findByUserWithEmail;
