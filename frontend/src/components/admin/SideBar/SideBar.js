import React from 'react';
import './SideBar.css';
import { HiMiniHome } from "react-icons/hi2";
import { TbCategoryFilled } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { MdFeedback } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa6";

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className="sidebar">
                <div className='admin-logo'>
                    <FaPizzaSlice className='logo-icon-a' />
                    <h2>Pizzaria</h2>
                </div>

                <div className='sidebar-list'>
                    <a href='/' className='a-item'>
                        <HiMiniHome className='logo-icon-a' />
                        Dashboard
                    </a>
                    <a href='/' className='a-item'>
                        <TbCategoryFilled className='logo-icon-a' />
                        Categories
                    </a>
                    <a href='/' className='a-item'>
                        <MdOutlineRestaurantMenu className='logo-icon-a' />
                        Products
                    </a>
                    <a href='/' className='a-item'>
                        <TbReportSearch className='logo-icon-a' />
                        Order Details
                    </a>
                    <a href='/' className='a-item'>
                        <MdPayments className='logo-icon-a' />
                        Payments
                    </a>
                    <a href='/' className='a-item'>
                        <MdFeedback className='logo-icon-a' />
                        Feedbacks
                    </a>
                </div>
            </div>
        </div>

    );
}

export default Sidebar;
