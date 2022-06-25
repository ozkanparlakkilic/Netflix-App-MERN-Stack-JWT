const Movie = require("../models/Movie");

// CREATE MOVIE
// /api/movies

const createMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATE MOVIE
// /api/movies/:id

const updateMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const updateMovie = await Movie.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateMovie);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // DELETE MOVIE
// // /api/movies/:id

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    await Movie.findByIdAndDelete(id);
    res.status(200).json("The movie has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
};

// // GET MOVIE
// /api/movies/:id

const getMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET RANDOM MOVIE
// /api/movies/random
// @access private

const getRandomMovie = async (req, res) => {
  const { type } = req.query;
  const series = "series";
  let movie;
  try {
    if (type === series) {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json("You are not allowed to see all users");
  }
};

// GET ALL MOVIE
// /api/movies

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies.reverse());
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createMovie,
  updateMovie,
  deleteMovie,
  getMovie,
  getAllMovies,
  getRandomMovie,
};
