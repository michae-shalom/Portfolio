import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm [Your Name]</h1>
        <p>Welcome to my portfolio!</p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  );
};

export default HeroSection;
