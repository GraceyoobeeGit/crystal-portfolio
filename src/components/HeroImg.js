import "./HeroImgStyles.css";

import React from 'react';

import HeaderImg from "../assets/header.jpg";

import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
  <div className="hero">
    <div className="mask">
        <img className="header-img" src=
        {HeaderImg} alt="HeaderImg" />
    </div>
    <div className="content">
        <p>Hi,&nbsp; I'm Crystal</p>
        <h1>Web developer</h1>
        <div class="btn-container">
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn-light">Contact</Link>
        </div>
    </div>
    </div>
  );
};


export default HeroImg
