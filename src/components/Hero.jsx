import React from "react";
import logoImage from "../assets/LOGO.PNG"; // Your logo path

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>
          <img src={logoImage} alt="CreatorsHub Logo" />
        </h1>
        <p>Futuristic solutions for modern creativity</p>

        {/* Button that scrolls to Contact */}
        <a href="#contact" className="cta">
          Get Started
        </a>
      </div>
    </section>
  );
}