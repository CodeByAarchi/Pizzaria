import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import profileimg from '../../../assets/user (1).png';
import pizzamakerimg from '../../../assets/Pizza maker (5).gif';
import './OTPVerification.css';
import PasswordResetForm from '../ResetPassword/ResetPassword';
import axios from 'axios';

function OTPForm() {
    const [otp, setOTP] = useState(['', '', '', '', '', '']);
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const inputRefs = useRef([]);

    const handleInputChange = (index, value) => {
        setOTP(prev => {
            const newOtp = [...prev];
            newOtp[index] = value;
            return newOtp;
        });
        if (value && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const enteredOTP = otp.join('');
        if (enteredOTP.length !== 6) {
            toast.error('Please enter a 6-digit OTP.');
            setIsLoading(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:1000/api/v1/user/verify-otp', {
                otp: enteredOTP
            });

            const data = response.data;

            if (response.status === 200 && data.success) {
                setIsOtpVerified(true);
                toast.success(data.message);

                const sessionResponse = await axios.get('http://localhost:1000/api/v1/user/session');
                const sessionData = sessionResponse.data;
                console.log(sessionData);

            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isOtpVerified) {
        return <PasswordResetForm />;
    }

    return (
        <div className="container">
            <div className="img">
                <img src={pizzamakerimg} alt="OTP GIF" />
            </div>
            <div className="login-content">
                <form onSubmit={handleSubmit}>
                    <img src={profileimg} alt="User Icon" />
                    <h2 className="title">Enter OTP</h2>
                    <div className="otp-container">
                        {[...Array(6)].map((_, index) => (
                            <input
                                key={index}
                                type="text"
                                className="otp-input"
                                maxLength={1}
                                value={otp[index]}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                ref={(input) => inputRefs.current[index] = input}
                            />
                        ))}
                    </div>
                    <input type="submit" className="btn" value={isLoading ? "Verifying..." : "Verify OTP"} disabled={isLoading} />
                </form>
            </div>
        </div>
    );
}

export default OTPForm;
