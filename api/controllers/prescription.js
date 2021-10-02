const Prescription = require("../models/Prescription");
const ErrorResponse = require("../untils/errorResponse");
const asyncHandler = require("../middlewares/async");

// @desc    Create prescription
// @route   POST /api/v1/prescriptions
// @access  Private
exports.addPrescription = asyncHandler(async (req, res, next) => {
  const prescription = await Prescription.create(req.body);

  res.status(201).json({
    success: true,
    data: prescription,
  });
});

// @desc    Create prescription
// @route   POST /api/v1/prescriptions
// @access  Private
exports.getPrescription = asyncHandler(async (req, res, next) => {
  const prescription = await Prescription.find();

  res.status(200).json({
    success: true,
    data: prescription,
  });
});

// @desc    Update prescription
// @route   POST /api/v1/prescriptions/:id
// @access  Private
exports.updatePrescription = asyncHandler(async (req, res, next) => {
  const prescription = await Prescription.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    success: true,
    data: prescription,
  });
});
