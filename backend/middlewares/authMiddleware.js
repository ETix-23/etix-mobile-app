const jwt = require('jsonwebtoken');
const User = require("../models/user");

const checkAuth = async (req, res, next) => {

    const { authorization } = req.headers;
    
    if (!authorization) {
        return res.status(401).json({ error: "Authorization token is required" });
    }

    const token = authorization.split(' ')[1];

    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findById(decodedToken._id);

        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }

        req.user = user; // Set the user object in the request
        console.log(req.user);

        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({ error: "Request is not authorized" });
    }
}

const authorizeRoles = (role) => {
    return (req, res, next) => {
        // Assuming user roles are stored in the req.user object
        const userRoles = req.user.roles;
        if (userRoles != role) {
            return res.status(403).json({ error: 'Unauthorized' });
        }
        next();
    };
};


module.exports={
    checkAuth,
    authorizeRoles
}