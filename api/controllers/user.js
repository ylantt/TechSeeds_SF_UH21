const User = require("../models/User");
const ErrorResponse = require("../untils/errorResponse");
const asyncHandler = require("../middlewares/async");

// @desc    Update user
// @route   POST /api/v1/user
// @access  Private
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    data: user,
  });
});
