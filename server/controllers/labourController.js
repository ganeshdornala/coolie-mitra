// server/controllers/labourController.js
const Labour = require('../models/Labour.js');
const OTP = require('../models/Otp.js'); // assuming OTP model already exists
const bcrypt = require('bcrypt');

exports.registerLabour = async (req, res) => {
  const {
    name, gender, age, email, password, phone,
    latitude, longitude, skill, fare, otp
  } = req.body;

  try {
    // Check OTP
    const validOtp = await OTP.findOne({ email, otp });
    if (!validOtp) return res.status(400).json({ message: 'Invalid OTP' });

    // Check if email already registered
    const existing = await Labour.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already registered' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newLabour = new Labour({
      name, gender, age, email, password: hashedPassword, phone,
      location: { latitude, longitude }, skill, fare
    });

    await newLabour.save();
    res.status(201).json({ message: 'Labour registered successfully' });
  } catch (err) {
    console.error('Labour Register Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
