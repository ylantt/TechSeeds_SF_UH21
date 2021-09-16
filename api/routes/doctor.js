const express = require('express');
const doctorController = require('../controllers/doctor');

const router = express.Router();

router.get('/doctors', doctorController.getDoctorList);

router.route('/doctor/:id').get(doctorController.getDoctor)

module.exports = router;