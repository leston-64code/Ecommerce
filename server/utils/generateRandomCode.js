const randomstring = require('randomstring');

// Function to generate a random 6-digit code
exports.generateVerificationCode = () => {
    return randomstring.generate({
        length: 6,
        charset: 'numeric'
    });
}



