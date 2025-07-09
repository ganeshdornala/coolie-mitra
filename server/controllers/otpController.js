const Otp = require('../models/Otp.js');
const transporter = require('../utils/mailer.js');

const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

exports.sendOtp = async (req, res) => {
  const { email } = req.body;

  const otp = generateOtp();

  try {
    await Otp.findOneAndDelete({ email }); // remove old OTP

    const newOtp = new Otp({ email, otp });
    await newOtp.save();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP - CoolieMitra Signup",
      html: `<h2>Your OTP is: ${otp}</h2><p>This OTP is valid for 15 minutes.</p>`,
    });

    res.status(200).json({ message: "OTP sent to email" });
  } catch (error) {
    console.error("OTP Email Error:", error);
    res.status(500).json({ message: "Failed to send OTP" });
  }
};

exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const record = await Otp.findOne({ email });

    if (!record) return res.status(400).json({ message: "OTP expired or not found" });

    if (record.otp !== otp) return res.status(400).json({ message: "Invalid OTP" });

    await Otp.deleteOne({ email }); // delete OTP after successful verification

    res.status(200).json({ message: "OTP verified" });
  } catch (err) {
    console.error("OTP Verification Error:", err);
    res.status(500).json({ message: "Verification failed" });
  }
};
