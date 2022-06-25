const jwt = require("jsonwebtoken");
const verifyToken = require("../../helpers/token/verifyToken");

function verify(req, res, next) {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    req.user = verifyToken(token);

    if (req.user) {
      next();
    } else {
      res.status(403).json("Token is not valid!");
    }
  } else {
    return res.status(401).json("You are not authenticated!");
  }
}

module.exports = verify;
