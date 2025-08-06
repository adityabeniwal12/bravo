import React from "react";
import logoImage from "../assets/LOGO.PNG"; // Your logo path

export default function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header>
      <div className="logo" onClick={scrollToTop} style={{ cursor: "pointer" }}>
        <img src={logoImage} alt="CreatorsHub Logo" />
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}