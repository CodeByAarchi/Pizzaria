import React from 'react'
import Sidebar from '../SideBar/SideBar';
import Content from '../Content/Content';
import './Dashboard.css';
const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <div className='dashboard'>
                <Sidebar />
                <div className='dashboard-content'>
                    <Content />
                </div>
            </div>
        </div>

    )
}

export default Dashboard