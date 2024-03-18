import React, { useState } from 'react';
import './AdminLogin.css';
import adminimg from '../../../assets/Admin.gif';
const AdminLoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className='admin-login'>
            <div className="admin-img">
                <img src={adminimg} alt="Pizza Maker" />
            </div>
            <div className="admin-login-container">
                <form onSubmit={handleSubmit}>
                    <h2 className='head-login'>Admin Login</h2>
                    <div className="admin-form-group">
                        <label htmlFor="admin-username" className='admin-label'>Username:</label>
                        <input
                            type="text"
                            id="admin-username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="admin-form-group">
                        <label htmlFor="admin-password"> Password:</label>

                        <input
                            type="password"
                            id="admin-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className='login-btn-admin'>Login</button>
                </form>
            </div>
        </div>

    );
};

export default AdminLoginForm;
