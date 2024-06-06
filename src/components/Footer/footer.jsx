import React from 'react';
import './footer.css'; 
import logo from "../assets/logo.png";
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <footer className="footer">
        
        <div className="logo">
          <img src={logo} alt="logo" className='logo' />
          <p>Journey finder</p>
        </div>

        <div className="Useful_Links">
          <p>Useful Links</p>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Go on vacation</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        <div className="About_us">
          <p>About us</p>
          <ul>
            <li><a href="#">Contact us</a></li>
          </ul>
          <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        </div>
    </footer>
  );
}

export default Footer;
