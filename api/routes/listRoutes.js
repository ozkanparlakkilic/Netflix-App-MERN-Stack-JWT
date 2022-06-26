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
  .post(authMiddlewares, checkAdmin, createList)
  .get(authMiddlewares, getList);

// UPDATE
// DELETE
router
  .route("/:id")
  .put(authMiddlewares, checkAdmin, updateList)
  .delete(authMiddlewares, checkAdmin, deleteList);

module.exports = router;
