const mongoose = require("mongoose")
const ErrorHandler = require("./ErrorHandler")

const validateMondoDbId = (id, next) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new ErrorHandler('Invalid MongoDB ObjectId', 400))
    }
}

module.exports = validateMondoDbId