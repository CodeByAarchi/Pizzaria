const express = require('express');
const router = express.Router();
const { signUp, login, forgotPassword, verifyOTP, resetPassword } = require("../controllers/user.controller");

// Secure routes
router.route("/signup").post(signUp);
router.route("/login").post(login);
router.route("/forgotpassword").post(forgotPassword);
router.route("/verify-otp").post(verifyOTP);
router.route("/resetpassword").post(resetPassword);

module.exports = router;
