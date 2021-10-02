const express = require("express");
const {
  addPrescription,
  updatePrescription,
  getPrescription,
} = require("../controllers/prescription");

const router = express.Router();

const { protect, authorize } = require("../middlewares/auth");

router.route("/").post(addPrescription).get(getPrescription);

router.route("/:id").post(updatePrescription);

module.exports = router;
