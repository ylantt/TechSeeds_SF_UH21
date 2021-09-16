const express = require('express');
const doctorController = require('../controllers/doctor');

const router = express.Router();

router.get('/doctors', doctorController.getDoctorList);

module.exports = router;