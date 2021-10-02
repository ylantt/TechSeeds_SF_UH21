const User = require("../models/User");
const Doctor = require("../models/Doctor");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const ErrorResponse = require("../untils/errorResponse");
const asyncHandler = require("../middlewares/async");

// @desc    Login with google
// @route   POST /api/v1/auth/googlelogin
// @access  Public
exports.googleLogin = asyncHandler(async (req, res, next) => {
  const { idToken, platform } = req.body;

  const audience =
    platform === "ios"
      ? process.env.IOS_GOOGLE_CLIENT_ID
      : process.env.ANDROID_GOOGLE_CLIENT_ID;

  const response = await client.verifyIdToken({
    idToken,
    audience,
  });

  const { email_verified, name, email } = response.payload;

  if (email_verified) {
    const user = await User.findOne({ email }).exec();

    if (user) {
      if (!user.phone) {
        user.isFullData = false;
      } else {
        user.isFullData = true;
        user.role = "user";
      }
      sendTokenResponse(user, 200, res);
    }

    const doctor = await Doctor.findOne({ email }).exec();

    if (doctor) {
      if (!doctor.bio || !doctor.company) {
        doctor.isFullData = false;
      } else {
        doctor.isFullData = true;
        doctor.role = "doctor";
      }
      sendTokenResponse(doctor, 200, res);
    }

    res.status(200).json({
      success: false,
    });

    // User not valid

    // let password = email + process.env.JWT_SECRET;
    // const newUser = await User.create({ name, email, password });
    // newUser.isFullData = false;
    // sendTokenResponse(newUser, 200, res);
  } else {
    return new ErrorResponse("Some thing went wrong!", 400);
  }
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
    isFullData: user.isFullData,
    role: user.role,
    success: true,
    token,
  });
};
