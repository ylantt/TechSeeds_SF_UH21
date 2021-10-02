const express = require("express");
const { getProblems } = require("../controllers/problem");

const router = express.Router();

const { protect, authorize } = require("../middlewares/auth");

router.route("/").get(getProblems);

module.exports = router;
