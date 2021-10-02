const mongoose = require("mongoose");

const MedicineSChema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    doctor: {
      type: mongoose.Schema.ObjectId,
      ref: "Doctor",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Medicine", MedicineSChema);
