const List = require("../models/List");

// CREATE LIST
// /api/lists

const createList = async (req, res) => {
  try {
    const newList = new List(req.body);
    const savedList = await newList.save();
    res.status(201).json(savedList);
  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATE LIST
// /api/lists/:id

const updateList = async (req, res) => {
  const { id } = req.params;
  try {
    const updateList = await Movie.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateList);
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE LISTS
// /api/lists/:id

const deleteList = async (req, res) => {
  const { id } = req.params;
  try {
    await List.findByIdAndDelete(id);
    res.status(200).json("The lists has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET MOVIE
// /api/lists

const getList = async (req, res) => {
  const { type, genre } = req.query;
  let list = [];
  try {
    if (type) {
      if (genre) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: type, genre: genre } },
          {
            $lookup: {
              from: "movies",
              foreignField: "_id",
              localField: "content",
              as: "movie",
            },
          },
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: type } },
          {
            $lookup: {
              from: "movies",
              foreignField: "_id",
              localField: "content",
              as: "movie",
            },
          },
        ]);
      }
    } else {
      list = await List.aggregate([
        { $sample: { size: 10 } },
        {
          $lookup: {
            from: "movies",
            foreignField: "_id",
            localField: "content",
            as: "movies",
          },
        },
      ]);
    }
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // GET RANDOM MOVIE
// // /api/movies/random
// // @access private

// const getRandomMovie = async (req, res) => {
//   const { type } = req.query;
//   const series = "series";
//   let movie;
//   try {
//     if (type === series) {
//       movie = await Movie.aggregate([
//         { $match: { isSeries: true } },
//         { $sample: { size: 1 } },
//       ]);
//     } else {
//       movie = await Movie.aggregate([
//         { $match: { isSeries: false } },
//         { $sample: { size: 1 } },
//       ]);
//     }
//     res.status(200).json(movie);
//   } catch (error) {
//     res.status(500).json("You are not allowed to see all users");
//   }
// };

// // GET ALL MOVIE
// // /api/movies

// const getAllMovies = async (req, res) => {
//   try {
//     const movies = await Movie.find();
//     res.status(200).json(movies.reverse());
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

module.exports = {
  createList,
  updateList,
  deleteList,
  getList,
};
