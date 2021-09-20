const express = require('express');
const doctorController = require('../controllers/doctor');

const router = express.Router();

router.route('/').get(doctorController.getDoctorList);

router.route('/:id').get(doctorController.getDoctor)

module.exports = router;