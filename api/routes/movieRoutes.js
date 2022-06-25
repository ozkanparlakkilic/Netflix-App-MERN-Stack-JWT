const router = require("express").Router();
const {
  createMovie,
  getRandomMovie,
  updateMovie,
  deleteMovie,
  getMovie,
  getAllMovies,
} = require("../controller/movieController");
const authMiddlewares = require("../middlewares/auth/authMiddlewares");
const checkAdmin = require("../middlewares/checkAdmin/checkAdminMiddlewares");

// GET ALL
// GET MOVIE RANDOM
// CREATE MOVIE

router
  .route("/")
  .post(authMiddlewares, checkAdmin, createMovie)
  .get(authMiddlewares, checkAdmin, getAllMovies);
router.route("/random").get(authMiddlewares, checkAdmin, getRandomMovie);

// UPDATE
// DELETE
// GET
router
  .route("/:id")
  .put(authMiddlewares, checkAdmin, updateMovie)
  .delete(authMiddlewares, checkAdmin, deleteMovie)
  .get(authMiddlewares, getMovie);

module.exports = router;
