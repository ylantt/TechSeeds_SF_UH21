const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  avt: {
    type: String,
    default: "https://i.ibb.co/2g2F52j/doctor-1.png"
  },
  name: {
    type: String,
    required: true
  },
  address: {
    city: String,
    district: String,
    detail: String
  },
  company: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  },
  connection: Number,
  rating: {
    type: Number,
    default: 0
  }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;