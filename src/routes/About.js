import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import Skill from "../components/Skill";
import Experience from "../components/Experience";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About" text="I am a friendly Front-End Developer" />
      <Skill />
      <Experience />
      <Footer />
      </div>
  );
};

export default About;
