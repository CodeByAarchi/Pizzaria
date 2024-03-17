import React, { useState } from 'react';
import './Login.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pizzamakerimg from '../../../assets/Pizza maker (5).gif';
import profileimg from '../../../assets/user (1).png';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordFieldVisible, setPasswordFieldVisibility] = useState(false);

    const addFocus = (e) => {
        e.target.parentNode.parentNode.classList.add("focus");
    };

    const removeFocus = (e) => {
        if (e.target.value === "") {
            e.target.parentNode.parentNode.classList.remove("focus");
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordFieldVisibility(!isPasswordFieldVisible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = [];

        if (!email.trim()) {
            errors.push('Email is required.');
        }

        if (!password.trim()) {
            errors.push('Password is required.');
        }

        if (errors.length > 0) {
            errors.forEach(error => toast.error(error));
            return;
        }

        try {
            const response = await fetch('http://localhost:1000/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                if (data.success) {
                    toast.success(data.message);
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
    };

    return (
        <div className="container">
            <div className="img">
                <img src={pizzamakerimg} alt="Pizza Maker" />
            </div>
            <div className="login-content">
                <form onSubmit={handleSubmit}>
                    <img src={profileimg} alt="User Icon" />
                    <h2 className="title">Login to Your Account</h2>
                    <div className="input-div one">
                        <div className="i">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="div">
                            <h5>Email</h5>
                            <input type="email" className="input" onFocus={addFocus} onBlur={removeFocus} value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="input-div pass">
                        <div className="i">
                            <i className="fas fa-lock"></i>
                        </div>
                        <div className="div">
                            <h5>Password</h5>
                            <input type={isPasswordFieldVisible ? "text" : "password"} className="input" onFocus={addFocus} onBlur={removeFocus} value={password} onChange={(e) => setPassword(e.target.value)} />
                            <i className={isPasswordFieldVisible ? "fas fa-eye" : "fas fa-eye-slash"} onClick={togglePasswordVisibility}></i>
                        </div>
                    </div>
                    <p className="register-link">Forgot your password? <span><a href="/forgotpassword">Reset it here</a></span></p>

                    <input type="submit" className="btn" value="Login" />
                    <p className="register-link">Don't have an account? <span><a href="/">Sign up Here</a></span></p>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
