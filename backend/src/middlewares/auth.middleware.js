const User = require("../model/user.model");
const jwt = require("jsonwebtoken");

const verifyJWT = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization");

        if (!token) {
            return res.json({
                success: false,
                message: "Unauthorized request",
            });
        }

        const decodedToken = jwt.verify(token, "aarchi");

        const user = await User.findById(decodedToken?._id).select(
            "-password"
        );

        if (!user) {
            return res.json({
                success: false,
                message: "Somthing Went to wrong",
            });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.json({
            success: false,
            message: error?.message || "Somthing want to wrong",
        });
    }
};

module.exports = verifyJWT;