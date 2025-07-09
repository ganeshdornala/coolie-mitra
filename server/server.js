const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');


const otpRoutes = require('./routes/otpRoutes.js');
const labourRoutes = require('./routes/labour.js');

const app = express();
app.use(express.json());

app.use('/api/otp', otpRoutes);
app.use('/api/labour', labourRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () => console.log("Server running on http://localhost:5000"));
  })
  .catch(err => console.error("DB connection error:", err));
