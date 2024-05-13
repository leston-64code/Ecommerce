const ErrorHandler = require("../utils/ErrorHandler");

const isLoggedIn = (req, res, next) => {
    if (req.session.userData) {
        // User is logged in    
        next();
    } else {
        // User is not logged in
        return next(new ErrorHandler("Unauthorized, Login to access", 401, "manual"))
    }
};

module.exports = isLoggedIn;
