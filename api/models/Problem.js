const mongoose = require("mongoose");

// @desc    Create doctor
// @route   POST /api/v1/doctors
// @access  Public
const ProblemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name of problem"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Problem", ProblemSchema);
