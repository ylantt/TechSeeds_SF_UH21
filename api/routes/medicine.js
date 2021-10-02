const express = require("express");

const { addMedicine, getMedicines } = require("../controllers/medicine");

const router = express.Router();

const { protect, authorize } = require("../middlewares/auth");

// router.use(protect);

router.route("/").post(addMedicine).get(getMedicines);

module.exports = router;
