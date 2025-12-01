import React, { useEffect, useState } from 'react';
import './styles/index.css';
import logo from "./assets/logo_saffron.png";
import bg1 from "./assets/hero_bg_1.avif";
import bg2 from "./assets/hero_bg_2.avif";
import bg3 from "./assets/hero_bg_3.avif";

const backgrounds = [
  bg1, bg2, bg3
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % backgrounds.length);
    }, 5000); // Change hero section image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      {/* Apply 'active' style to display the background */}
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`hero-background ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${bg})` }}
        />
      ))}

      <div className="hero-overlay">
        <div className="top-section">
          <div className="header-div">
            <img
            className="header-logo"
            src={logo}
            alt="Logo of Shri Veda Vyasa Seva Trust (SVVST), Cherthala"
            />
            <p className="header-title">Shri Veda Vyasa Seva Trust, Cherthala</p>
          </div>
        </div>
        <div className="middle-section">
          <div className="middle-container">
            <h1 className="hero-title">Building a Better Tomorrow!</h1>
            <div className="button-container">
              <a href="#mission-vision-values"><button className="hero-button"><span>Ethos</span></button></a>
              <a href="#events"><button className="hero-button"><span>Events</span></button></a>
              <a href="#founders"><button className="hero-button"><span>Founders</span></button></a>
              <a href="#contact-us"><button className="hero-button"><span>Contact</span></button></a>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;