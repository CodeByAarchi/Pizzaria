import React, { useState } from 'react';
import './SignUp.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pizzamakerimg from '../../../assets/Pizza maker (5).gif';
import profileimg from '../../../assets/user (1).png';


function SignUpForm() {
    const [isPasswordFieldVisible, setPasswordFieldVisibility] = useState(false);
    const [isConfirmPasswordFieldVisible, setConfirmPasswordFieldVisibility] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
    
        if (!username.trim()) {
            errors.push('Username is required.');
        }
    
        if (!email.trim()) {
            errors.push('Email is required.');
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                errors.push('Invalid email format.');
            }
        }
    
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
            const response = await fetch('http://localhost:1000/api/v1/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: username,
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
                    <h2 className="title">Create an Account</h2>
                    <div className="input-div one">
                        <div className="i">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="div">
                            <h5>Username</h5>
                            <input type="text" className="input" onFocus={addFocus} onBlur={removeFocus} value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                    </div>
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
                    <input type="submit" className="btn" value="Sign up" />
                    <p className="register-link">Already have an account? <span><a href="login">Login Here</a></span></p>
                </form>
            </div>
        </div>
    );
}
export default SignUpForm;
