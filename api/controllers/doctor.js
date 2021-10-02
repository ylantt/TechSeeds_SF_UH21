const Doctor = require("../models/Doctor");
const ErrorResponse = require("../untils/errorResponse");
const asyncHandler = require("../middlewares/async");

exports.getDoctorList = async (req, res) => {
  try {
    const doctors = await Doctor.find();

    res.send(doctors);
  } catch (e) {
    console.log(e);
  }
};

exports.getDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    res.send(doctor);
  } catch (e) {
    console.log(e);
  }
};

// @desc    Create doctor
// @route   POST /api/v1/doctors
// @access  Public
exports.addDoctor = asyncHandler(async (req, res, next) => {
  const doctor = await Doctor.create(req.body);

  res.status(201).json({
    success: true,
    data: doctor,
  });
});
