const User = require("../models/User");

// UPDATE USER
// /api/users/:id

const updateUser = async (req, res) => {
  const { params } = req;
  const { password } = req.body;
  if (password) {
    password = CryptoJS.AES.encrypt(
      password,
      process.env.SECRET_KEY
    ).toString();
  }
  try {
    const updateUser = await User.findByIdAndUpdate(
      params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE USER
// /api/users/:id

const deleteUser = async (req, res) => {
  const { params } = req;
  try {
    await User.findByIdAndDelete(params.id);
    res.status(200).json("User has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET USER
// /api/users/:id

const getUser = async (req, res) => {
  const { params } = req;
  try {
    const user = await User.findById(params.id);
    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET ALL USER
// /api/users
// @access private

const getAllUser = async (req, res) => {
  const { admin } = req.query;
  try {
    const users = admin
      ? await User.find().sort({ username: "asc" }).limit(10)
      : User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json("You are not allowed to see all users");
  }
};

// GET USER STATS
// /api/users/stats
// @access private

const getUserStats = async (req, res) => {
  try {
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { updateUser, deleteUser, getUser, getAllUser, getUserStats };
