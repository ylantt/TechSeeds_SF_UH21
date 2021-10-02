const Problem = require("../models/Problem");
const ErrorResponse = require("../untils/errorResponse");
const asyncHandler = require("../middlewares/async");

// @desc    Get all problems
// @route   POST /api/v1/problems
// @access  Private
exports.getProblems = asyncHandler(async (req, res) => {
  const problems = await Problem.find();

  res.status(200).json({
    success: true,
    data: problems,
  });
});
