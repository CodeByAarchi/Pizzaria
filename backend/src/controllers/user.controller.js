const User = require('../models/user.model');
const sendOTP = require('../utils/sendOTP');

const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({
                success: false,
                message: "Please fill in all fields."
            });
        }

        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({
                success: false,
                message: 'Email already registered. Use a different one.'
            });
        }

        const newUser = new User({
            name,
            email,
            password
        });

        await newUser.save();

        res.json({
            success: true,
            message: 'Account created successfully!'
        });

    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: 'Something went wrong. Please try again.'
        });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({
                success: false,
                message: "Please provide email and password.",
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.json({
                success: false,
                message: "Email not registered. Sign up first.",
            });
        }

        const isPasswordValid = await user.isPasswordCorrect(password);

        if (!isPasswordValid) {
            return res.json({
                success: false,
                message: "Invalid email or password. Try again.",
            });
        }

        user.lastLogin = Date.now();
        await user.save();

        // Generate JWT token
        const token = await user.genrateAccessToken();

        return res.json({
            success: true,
            message: "Logged in successfully!",
            token: token
        });
    } catch (error) {
        console.error(error);
        return res.json({
            success: false,
            message: "Something went wrong. Please try again.",
        });
    }
};
// const forgotPassword = async (req, res) => {
//     try {
//         const { email } = req.body;
//         if (!email) {
//             return res.json({
//                 success: false,
//                 message: "Please provide your email.",
//             });
//         }

//         const existingUser = await User.findOne({ email });

//         if (!existingUser) {
//             return res.json({
//                 success: false,
//                 message: "Email not registered. Sign up first.",
//             });
//         }

//         const generateOTP = () => {
//             return Math.floor(100000 + Math.random() * 900000);
//         };

//         const otp = generateOTP();
//         await sendOTP(email, otp);

//         existingUser.otp = otp;
//         await existingUser.save();

//         return res.json({
//             success: true,
//             message: "OTP sent to your email. Check inbox.",
//             email: existingUser.email
//         });

//     } catch (error) {
//         return res.json({
//             success: false,
//             message: "Something went wrong. Please try again.",
//         });
//     }
// };

// const verifyOTP = async (req, res) => {
//     try {
//         const { email,otp } = req.body;

//         if (!otp) {
//             return res.json({
//                 success: false,
//                 message: "OTP is required.",
//             });
//         }

//         const user = await User.findOne({ otp });

//         if (!user) {
//             return res.json({
//                 success: false,
//                 message: "Invalid OTP",
//             });
//         }

//         req.session.userId = user._id;

//         user.otp = null;
//         user.otpVerified = true;
//         await user.save();

//         return res.json({
//             success: true,
//             message: "OTP verified successfully",
//             userId: user._id
//         });
//     } catch (error) {
//         console.error("Error verifying OTP:", error);
//         return res.json({
//             success: false,
//             message: error.message
//         });
//     }
// };

// const resetPassword = async (req, res) => {
//     try {
//         const { newPassword } = req.body;

//         if (!newPassword) {
//             return res.json({
//                 success: false,
//                 message: "New password field is required."
//             });
//         }

//         const userId = req.session.userId;

//         if (!userId) {
//             return res.json({
//                 success: false,
//                 message: "User session not found. Please verify OTP again."
//             });
//         }

//         const user = await User.findById(userId);

//         if (!user) {
//             return res.json({
//                 success: false,
//                 message: "User not found."
//             });
//         }

//         user.password = newPassword;
//         await user.save();

//         delete req.session.userId;

//         return res.json({
//             success: true,
//             message: "Password reset successfully."
//         });
//     } catch (error) {
//         return res.json({
//             success: false,
//             message: error.message
//         });
//     }
// };

const sendOtp = async (req, res) => {
    const { email } = req.body;
    try {
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
            await sendOTP(email, otp);

            existingUser.otp = otp;
            await existingUser.save();

            return { success: true, message: "OTP sent successfully" };
        } else {
            return { success: false, message: "Email doesn't exist" };
        }
    } catch (error) {
        console.error("Error checking email existence / sending OTP:", error);
        return { success: false, message: "Internal server error" };
    }
};

const verifyOTP = async (req, res) => {
    const { email, otp } = req.body;
    try {
        const existingUser = await User.findOne({ email, otp });
        if (existingUser) {
            existingUser.otp = null;
            existingUser.otpVerified = true;
            await existingUser.save();
            return { success: true, message: "OTP verified successfully" };
        } else {
            return { success: false, message: "Invalid OTP" };
        }
    } catch (error) {
        console.error("Error verifying OTP:", error);
        return { success: false, message: "Internal server error" };
    }
};

const resetPassword = async (req, res) => {
    const { email, new_password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser && existingUser.otpVerified) {
            existingUser.password = new_password;
            await existingUser.save();
            return { success: true, message: "Password reset successfully" };
        } else {
            return { success: false, message: "User not found or OTP not verified" };
        }
    } catch (error) {
        console.error("Error resetting password:", error);
        return { success: false, message: "Internal server error" };
    }
};


const ShowUsers = async (req, res) => {
    try {
        const users = await User.find({}, '-password');
        res.json({
            success: true,
            users: users
        });
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        });
    }
}

const DeleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;

        // Check if user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.json({
                success: false,
                message: 'User not found.'
            });
        }

        // Delete the user
        await User.findByIdAndDelete(userId);

        return res.json({
            success: true,
            message: 'User deleted successfully.'
        });
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.json({
            success: false,
            message: 'Something went wrong. Please try again later.'
        });
    }
};

module.exports = { signUp, login, sendOtp, verifyOTP, resetPassword, ShowUsers, DeleteUser }; 
