const mongoose = require("mongoose");

const ProblemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name of problem"],
    },
    key: {
      type: String,
      required: [true, "Please add a key of problem"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Problem", ProblemSchema);
