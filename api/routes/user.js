const express = require("express");

const { updateUser, addUser } = require("../controllers/user");

const router = express.Router();

const { protect, authorize } = require("../middlewares/auth");

router.post("/", addUser);

router.use(protect);

router.route("/update").post(authorize("user"), updateUser);

module.exports = router;
