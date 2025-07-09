// server/models/Labour.js
const mongoose = require('mongoose');

const labourSchema = new mongoose.Schema({
    name: String,
    gender: { 
        type: String, 
        enum: ['Male', 'Female', 'Others'] 
    },
    age: Number,
    email: { 
        type: String, 
        unique: true 
    },
    password: String,
    phone: String,
    location: {
        latitude: Number,
        longitude: Number,
    },
    skill: { 
        type: String, 
        enum: ['Plumber', 'Electrician', 'Carpenter', 'Cleaner'] 
    },
    fare: Number,
    rating: { 
        type: Number, 
        default: 0 
    },
    verified: { 
        type: Boolean, 
        default: true 
    },
});

module.exports = mongoose.model('Labour', labourSchema);
