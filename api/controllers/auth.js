const User = require("../models/User");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const ErrorResponse = require("../untils/errorResponse");
const asyncHandler = require("../middlewares/async");

// @desc    Login with google
// @route   POST /api/v1/auth/googlelogin
// @access  Public
exports.googleLogin = asyncHandler(async (req, res, next) => {
  const { idToken } = req.body;

  const response = await client.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const { email_verified, name, email } = response.payload;

  if (email_verified) {
    const user = await User.findOne();

    if (user) {
      sendTokenResponse(user, 200, res);
    } else {
      let password = email + process.env.JWT_SECRET;
      const newUser = await User.create({ name, email, password });
      sendTokenResponse(newUser, 200, res);
    }
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
    success: true,
    token,
  });
};
