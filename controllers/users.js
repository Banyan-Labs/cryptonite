const User = require("../models/User.js");

// READ ROUTES
const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ error: "User not found." });
  }
};

// UPDATE ROUTES

module.exports = { getUser };
