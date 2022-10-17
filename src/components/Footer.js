import "./FooterStyles.css";

import React from 'react';

import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
      <div className="left">
        <div className="location">
           <FaHome size={20} style={{color: "#fff", marginRight: "2rem" }} /> 
           <div>
            <p>105 Queenstreet Auckland CBD</p>
            <p>New Zealand</p>
            </div>
        </div>
        <div className="phone">
            <h4> <FaPhone size={20} style={{color: "#fff", marginRight: "2rem" }} /> 
            021-0808-3395
            </h4>
        </div>
        <div className="email">
            <h4> <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem" }} /> 
            crystalyeo123@hotmail.com
            </h4>
        </div>
      </div>

      <div className="right">
        <h4>About Crystal</h4>
        <p>I enjoy discussing new projects and design challenges</p>
        <div className="social">
        <FaFacebook size={20} style={{color: "#fff", marginRight: "2rem" }} /> 
        <FaInstagram size={20} style={{color: "#fff", marginRight: "2rem" }} /> 
        <FaTwitter size={20} style={{color: "#fff", marginRight: "2rem" }} /> 
        </div>
    </div>
    </div>
    </div>
  )
}

export default Footer
