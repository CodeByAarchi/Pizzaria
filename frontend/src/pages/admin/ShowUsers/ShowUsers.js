import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShowUsers.css'; // Import CSS file for styling
import { FaTrash } from 'react-icons/fa';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:1000/api/v1/user/showusers');
                if (response.data.success) {
                    setUsers(response.data.users);
                } else {
                    console.error('Error fetching users:', response.data.message);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleDeleteUser = async (userId) => {
        try {
            const response = await axios.delete(`http://localhost:1000/api/v1/user/deleteuser/${userId}`);
            if (response.data.success) {
                // Remove the deleted user from the state
                setUsers(users.filter(user => user._id !== userId));
            } else {
                console.error('Error deleting user:', response.data.message);
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };


    return (
        <div className="user-list-container">
            <h2>User List</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Login Status</th>
                        <th>Last Login</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.loginStatus ? 'Logged In' : 'Logged Out'}</td>
                            <td>{user.lastLogin ? new Date(user.lastLogin).toLocaleString() : 'Never'}</td>
                            <td>
                                <button className="delete-button" onClick={() => handleDeleteUser(user._id)}>
                                    <FaTrash className="delete-icon" /> Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
