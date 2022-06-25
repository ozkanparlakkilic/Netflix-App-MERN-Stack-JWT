const jwt = require("jsonwebtoken");

function verifyToken(token) {
  return jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return false;
    return user;
  });
}

module.exports = verifyToken;
