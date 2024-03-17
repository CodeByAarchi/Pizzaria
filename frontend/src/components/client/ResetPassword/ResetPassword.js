import React, { useState } from 'react';
import './ResetPassword.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pizzamakerimg from '../../../assets/Pizza maker (5).gif';
import profileimg from '../../../assets/user (1).png';

function PasswordResetForm() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordFieldVisible, setPasswordFieldVisibility] = useState(false);
    const [isConfirmPasswordFieldVisible, setConfirmPasswordFieldVisibility] = useState(false);

    const addFocus = (e) => {
        e.target.parentNode.parentNode.classList.add("focus");
    };

    const removeFocus = (e) => {
        if (e.target.value === "") {
            e.target.parentNode.parentNode.classList.remove("focus");
        }
    };

    const togglePasswordVisibility = (targetId) => {
        if (targetId === "passwordField") {
            setPasswordFieldVisibility(!isPasswordFieldVisible);
        } else if (targetId === "confirmPasswordField") {
            setConfirmPasswordFieldVisibility(!isConfirmPasswordFieldVisible);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = [];

        if (!password.trim()) {
            errors.push('Password is required.');
        } else if (password.length < 6) {
            errors.push('Password must be at least 6 characters long.');
        }

        if (!confirmPassword.trim()) {
            errors.push('Confirm Password is required.');
        }

        if (password !== confirmPassword) {
            errors.push('Passwords do not match.');
        }

        if (errors.length > 0) {
            errors.forEach(error => toast.error(error));
            return;
        }

        try {
            // Implement your password reset logic here
            toast.success('Password reset successful.');
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="container">
            <div className="img">
                <img src={pizzamakerimg} alt="Pizza Maker" />
            </div>
            <div className="login-content">
                <form onSubmit={handleSubmit}>
                    <img src={profileimg} alt="User Icon" />
                    <h2 className="title">Reset Your Password</h2>
                    <div className="input-div pass">
                        <div className="i">
                            <i className="fas fa-lock"></i>
                        </div>
                        <div className="div">
                            <h5>New Password</h5>
                            <input type={isPasswordFieldVisible ? "text" : "password"} className="input" onFocus={addFocus} onBlur={removeFocus} value={password} onChange={(e) => setPassword(e.target.value)} />
                            <i className={isPasswordFieldVisible ? "fas fa-eye" : "fas fa-eye-slash"} onClick={() => togglePasswordVisibility("passwordField")}></i>
                        </div>
                    </div>
                    <div className="input-div pass">
                        <div className="i">
                            <i className="fas fa-lock"></i>
                        </div>
                        <div className="div">
                            <h5>Confirm Password</h5>
                            <input type={isConfirmPasswordFieldVisible ? "text" : "password"} className="input" onFocus={addFocus} onBlur={removeFocus} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            <i className={isConfirmPasswordFieldVisible ? "fas fa-eye" : "fas fa-eye-slash"} onClick={() => togglePasswordVisibility("confirmPasswordField")}></i>
                        </div>
                    </div>

                    <input type="submit" className="btn" value="Reset Password" />
                </form>
            </div>
        </div>
    );
}

export default PasswordResetForm;
