const Doctor = require('../models/Doctor');

exports.getDoctorList = async (req, res) => {
  try {
    const doctors = await Doctor.find();

    res.send(doctors);
  } catch (e) {
    console.log(e);
  }
}

exports.getDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    res.send(doctor);
  } catch (e) {
    console.log(e);
  }
}