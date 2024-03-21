const express = require('express');
const router = express.Router();
const { signUp, login, forgotPassword, verifyOTP, resetPassword, ShowUsers, DeleteUser } = require("../controllers/user.controller");

// Secure routes
router.post("/signup", signUp);
router.post("/login", login);
router.post("/forgotpassword", forgotPassword);
router.post("/verify-otp", verifyOTP);
router.post("/resetpassword", resetPassword);
router.get("/showusers", ShowUsers);
router.delete("/deleteuser/:userId", DeleteUser); // Include userId as a parameter

module.exports = router;
