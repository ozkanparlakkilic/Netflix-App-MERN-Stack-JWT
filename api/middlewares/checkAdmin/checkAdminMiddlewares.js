function checkAdmin(req, res, next) {
  const { user } = req;
  if (user.isAdmin) {
    next();
  } else {
    return res.status(403).json("The user is not authorized");
  }
}

module.exports = checkAdmin;
