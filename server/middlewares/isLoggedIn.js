const isLoggedIn = (req, res, next) => {
    if (req.session.userId) {
        // User is logged in
        next();
    } else {
        // User is not logged in
        res.status(401).json({ success: false, error: 'Unauthorized, Login to access' });
    }
};

module.exports = isLoggedIn;
