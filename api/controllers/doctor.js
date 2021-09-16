const Doctor = require('../models/Doctor');

exports.getDoctorList = async (req, res) => {
  try {
    const doctors = await Doctor.find();

    res.send(doctors);
  } catch (e) {
    console.log(e);
  }
}
