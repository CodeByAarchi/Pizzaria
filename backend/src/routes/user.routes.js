const express = require('express');
const router = express.Router();
const { signUp, login,verifyOTP,resetPassword, ShowUsers, DeleteUser, sendOtp } = require("../controllers/user.controller");

// Secure routes
router.post("/signup", signUp);
router.post("/login", login);
router.post("/forgotpassword", sendOtp);
router.post("/verify-otp", verifyOTP);
router.post("/resetpassword", resetPassword);
router.get("/showusers", ShowUsers);
router.delete("/deleteuser/:userId", DeleteUser);

module.exports = router;
