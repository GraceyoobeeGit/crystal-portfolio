import "./SkillStyles.css";

import React from 'react'
import { FaHtml5, FaCss3, FaSass, FaReact, FaJava, FaGithub } from "react-icons/fa";
import { SiMysql, SiVisualstudio } from "react-icons/si";
import { DiCodeBadge } from "react-icons/di"

const skill = () => {
  return (
    <div className="skill">
    <p className="skill-title">Skills</p>
      <div className="skill-container">

      <div className="leftt">
        <div className="html">
        <FaHtml5 size={36} style={{color: "#fff", marginRight: "2rem" }} /> 
        <p>
           HTML
           </p>
        </div>
        <div className="css">
        <FaCss3 size={36} style={{color: "#fff", marginRight: "2rem" }} /> 
        <p>
            CSS
            </p>
        </div>
        <div className="sass">
        <FaSass size={36} style={{color: "#fff", marginRight: "2rem" }} /> 
        <p>
            SASS
            </p>
        </div>
      </div>

      <div className="midd">
      <div className="react">
        <FaReact size={36} style={{color: "#fff", marginRight: "2rem" }} /> 
        <p>
        React
        </p>
       </div> 

        <div className="java">
        <FaJava size={36} style={{color: "#fff", marginRight: "2rem" }} />
        <p>
        Javascript
        </p>
        </div>

        <div className="git">
        <FaGithub size={36} style={{color: "#fff", marginRight: "2rem" }} /> 
        <p>
        Github
        </p>
        </div>
        </div>


      <div className="rightt">
      <div className="sql">
      <SiMysql size={36} style={{color: "#fff", marginRight: "2rem" }} /> 
      <p>
        MySQL
        </p>
       </div> 

        <div className="sharp">
        <DiCodeBadge size={36} style={{color: "#fff", marginRight: "2rem" }} />
        <p>
        C#
        </p>
        </div>

        <div className="visual">
        <SiVisualstudio size={36} style={{color: "#fff", marginRight: "2rem" }} /> 
        <p>
        Visual Studio
        </p>
        </div>
    </div>

    </div>
    </div>
  )
}

export default skill
