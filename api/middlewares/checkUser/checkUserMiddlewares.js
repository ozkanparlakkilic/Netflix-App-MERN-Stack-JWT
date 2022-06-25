function checkUser(req, res, next) {
  const { user, params } = req;
  if (user.id === params.id) {
    next();
  } else {
    return res.status(403).json("The user is not authorized");
  }
}

module.exports = checkUser;
