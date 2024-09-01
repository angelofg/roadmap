const jwt = require('jsonwebtoken');
require('dotenv').config;

const verifyToken = (req, res, next) => {
    const header = req.header("Authorizacion") || "";
    const token = header.split("")[1];
    if(!token){
        return res.status(401).json({ message : "Token not provied" });
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.username = payload.username;
        next();
    } catch(error){
        return res.status(403).json({ message : "Token not valid" });
    }
};

module.exports = verifyToken;

