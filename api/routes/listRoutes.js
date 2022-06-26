const router = require("express").Router();
const {
  createList,
  getList,
  deleteList,
  updateList,
} = require("../controller/listController");
const authMiddlewares = require("../middlewares/auth/authMiddlewares");
const checkAdmin = require("../middlewares/checkAdmin/checkAdminMiddlewares");

// GET LIST
// CREATE LIST

router
  .route("/")
  .get(authMiddlewares, getList)
  .post(authMiddlewares, checkAdmin, createList);

// UPDATE
// DELETE
router
  .route("/:id")
  .put(authMiddlewares, checkAdmin, updateList)
  .delete(authMiddlewares, checkAdmin, deleteList);

module.exports = router;
