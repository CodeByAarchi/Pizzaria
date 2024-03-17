import React from 'react';
import './Header.css';
import logo from '../../../assets/logo.png';

const Header = () => {
  return (

    <div className='body'>
      <div className='navbar'>
        <img src={logo} alt='logo' className='logo'></img>

        <ul>
          <li><a href='/home' class="active">Home</a></li>
          <li><a href='/aboutus'>About Us</a></li>
          <li><a href='/menu'>Menu</a></li>
          <li><a href='/gallary'>Gallery</a></li>
          <li><a href='/contact'>Contact Us</a></li>
          <li><a href='/order'>orders</a></li>
          <li><a href='/pay'>pay</a></li>
        </ul>

        <div className="header-right">
          <a href="/cart" className="header-btn header-cart">
            <i className="uil uil-shopping-bag"></i>
            <span className="cart-number">0</span>
          </a>
          <a href='/signup' className="header-btn login-signup-button">Login/Signup</a>
          <button className="header-btn my-orders-button">View Orders</button>
        </div>
      </div>
    </div >
  );
};

export default Header;
