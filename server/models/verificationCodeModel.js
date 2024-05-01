const mongoose = require('mongoose');


var verificationCodeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    verificationCode: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: "10m"
    }
});

// verificationCodeSchema({ createdAt: 1 }, { expireAfterSeconds: 20 });

module.exports = mongoose.model('VerificationCode', verificationCodeSchema);