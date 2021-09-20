const express = require("express");

const { updateUser } = require("../controllers/user");

const router = express.Router();

const { protect, authorize } = require("../middlewares/auth");

router.use(protect);

router.route("/").post(authorize("user"), updateUser);

module.exports = router;
