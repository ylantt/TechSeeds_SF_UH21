const Medicine = require("../models/Medicine");
const ErrorResponse = require("../untils/errorResponse");
const asyncHandler = require("../middlewares/async");

// @desc    Create medicine
// @route   POST /api/v1/medicine
// @access  Private
exports.addMedicine = asyncHandler(async (req, res, next) => {
  const medicine = await Medicine.create(req.body);

  res.status(201).json({
    success: true,
    data: medicine,
  });
});

// @desc    Get all medicines
// @route   GET /api/v1/medicines
// @access  Private
exports.getMedicines = asyncHandler(async (req, res, next) => {
  const medicines = await Medicine.find();

  res.status(200).json({
    success: true,
    data: medicines,
  });
});
