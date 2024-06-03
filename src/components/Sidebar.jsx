import React from 'react';
import user from './assets/user.png';
import logo from './assets/logo.png';
import './Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <img src={logo} alt="Logo" className="logo" />
    <nav>
      <ul>
        <li><a href="https://www.wherehouse.io/">Home</a></li>
        <li><a href="">Dashboard</a></li>
        <li><a href="https://documenter.getpostman.com/view/26032653/2s93CRLXYX">API Docs</a></li>
        <li><a href="https://wellfound.com/company/wherehouse-io">Careers</a></li>
        <li><a href="https://www.wherehouse.io/pricing.html">Pricing</a></li>
        <li><a href="https://www.wherehouse.io/technology.html">Technology</a></li>
        <li><a href="https://www.wherehouse.io/privacy-policy.html">Privacy Policy</a></li>
        <li><a href="https://www.wherehouse.io/terms-of-use.html">Terms of use</a></li>
        <li><a href="https://www.wherehouse.io/contact-us.html">Contact us</a></li>
        
      </ul>
    </nav>
    <div className="user-info">
      <img src={user} alt="User" className="user" />
      <div className="user-details">
        <p>Sneha Goyal</p>
        <p><a href="#">sneha.goyal@techjockey.com</a></p>
      </div>
    </div>
  </div>
);

export default Sidebar;