import React, { useState } from 'react';
import './ForgotPassword.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pizzamakerimg from '../../../assets/Pizza maker (5).gif';
import profileimg from '../../../assets/user (1).png';
import OTPVerificationForm from '../OTPVerification/OTPVerification';

function ForgotPasswordForm() {
    const [email, setEmail] = useState('');
    const [emailExists, setEmailExists] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const addFocus = (e) => {
        e.target.parentNode.parentNode.classList.add("focus");
    };

    const removeFocus = (e) => {
        if (e.target.value === "") {
            e.target.parentNode.parentNode.classList.remove("focus");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const errors = [];

        if (!email.trim()) {
            errors.push('Email is required.');
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                errors.push('Invalid email format.');
            }
        }

        if (errors.length > 0) {
            errors.forEach(error => toast.error(error));
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:1000/api/v1/user/forgotpassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                if (data.success) {
                    setEmailExists(true);
                    toast.success('An OTP has been sent to your email.');
                } else {
                    toast.error(data.message);
                }
            } else {
                toast.error('An error occurred. Please try again later.');
            }

        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again later.');
        }
        setIsLoading(false);
    };

    if (emailExists) {
        return <OTPVerificationForm email={email} />;
    }

    return (
        <div className="container">
            <div className="img">
                <img src={pizzamakerimg} alt="Pizza Maker" />
            </div>
            <div className="login-content">
                <form onSubmit={handleSubmit}>
                    <img src={profileimg} alt="User Icon" />
                    <h2 className="title">Forgot Password?</h2>
                    <div className="input-div one">
                        <div className="i">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="div">
                            <h5>Email</h5>
                            <input type="email" className="input" onFocus={addFocus} onBlur={removeFocus} value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <input type="submit" className="btn" value={isLoading ? "Loading..." : "Send OTP"} disabled={isLoading} />
                    <p className="register-link">Remembered your password? <span><a href="login">Login Here</a></span></p>
                </form>
            </div>
        </div>
    );
}

export default ForgotPasswordForm;
