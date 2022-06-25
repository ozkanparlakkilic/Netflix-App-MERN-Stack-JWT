const router = require("express").Router();
const {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
  getUserStats,
} = require("../controller/userController");
const authMiddlewares = require("../middlewares/auth/authMiddlewares");
const checkAdmin = require("../middlewares/checkAdmin/checkAdminMiddlewares");
const checkUser = require("../middlewares/checkUser/checkUserMiddlewares");

// GET ALL
// GET USER STATS

router.route("/").get(authMiddlewares, checkAdmin, getAllUser);
router.route("/stats").get(authMiddlewares, checkAdmin, getUserStats);

// UPDATE
// DELETE
// GET
router
  .route("/:id")
  .put(authMiddlewares, checkUser, updateUser)
  .delete(authMiddlewares, checkUser, deleteUser)
  .get(authMiddlewares, checkUser, getUser);

module.exports = router;
