import "./ExperienceStyles.css";

import React from 'react';

import { FaGraduationCap, FaMedal } from "react-icons/fa"

const Experience = () => {
  return (
    <div className="experience">
    <p className="experience-title">Education & Experience</p>
      <div className="experience-container">
        <div className="left">
        <h2>Education</h2>
      <div className="yoobee">
            <FaGraduationCap size={36} style={{color: "#fff", marginRight: "2rem" }} /> 
            <p>
            Diploma of UX/ UI design at Yoobee College
            </p>
            </div>
      <div className="connect">
            <FaGraduationCap size={36} style={{color: "#fff", marginRight: "2rem" }} /> 
            <p>
            Job ready course at Industry Connect
            </p>
            </div>
        </div>

        <div className="right">
        <h2>Internship</h2>
        <div className="studio">
            <FaMedal size={36} style={{color: "#fff", marginRight: "2rem" }} /> 
            <p>
            3 months of internship at Industry Connect
            </p>
            </div>
            <div className="other">
            <FaMedal size={36} style={{color: "#fff", marginRight: "2rem" }} /> 
            <p>
            NGO volunteer job
            </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
