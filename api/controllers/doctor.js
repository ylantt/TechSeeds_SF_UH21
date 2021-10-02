const Doctor = require("../models/Doctor");
const ErrorResponse = require("../untils/errorResponse");
const asyncHandler = require("../middlewares/async");

exports.getDoctorList = async (req, res) => {
  try {
    const problem = req.query.problem;
    let doctors = null;

    if (problem === "SD")
      doctors = await Doctor.find().sort({ "problem.SD": -1, "rating": -1 }).limit(3);
    else if (problem === "IA")
      doctors = await Doctor.find().sort({ "problem.IA": -1, "rating": -1 }).limit(3);
    else
      doctors = await Doctor.find().sort({ "problem.MX": -1, "rating": -1 }).limit(3);

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
  const { name, email, photoUrl } = req.body.user;
  const avt = photoUrl;
  const password = email + process.env.JWT_SECRET;

  const doctor = await Doctor.create({ name, email, password, avt });

  sendTokenResponse(doctor, 201, res);
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
  });
};
