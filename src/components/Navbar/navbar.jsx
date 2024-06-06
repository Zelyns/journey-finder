import React from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";



const Navbar = () => {
  

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="logo" className='logo' />
        <div className="Journey_Finder">
          <p>Journey Finder</p>
        </div>
        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Go_on_Vacation" >Go on Vacation</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Sign_in">Sign in</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
