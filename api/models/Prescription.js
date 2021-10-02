const mongoose = require("mongoose");

const PrescriptionSChema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    medicine: {
      type: [
        {
          name: String,
          quantity: Number,
        },
      ],
      required: true,
    },
    doctor: {
      type: mongoose.Schema.ObjectId,
      ref: "Doctor",
      required: true,
    },
    patient: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Prescription", PrescriptionSChema);
