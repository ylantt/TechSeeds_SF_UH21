const express = require("express");
const {
  getDoctorList,
  getDoctor,
  addDoctor,
} = require("../controllers/doctor");

const router = express.Router();

const { protect, authorize } = require("../middlewares/auth");

router.route("/").get(getDoctorList).post(addDoctor);

router.route("/:id").get(getDoctor);

module.exports = router;
