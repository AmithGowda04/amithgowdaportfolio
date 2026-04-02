import React from "react";
import amithPhoto from "@/assets/amith-photo.jpeg";

const CHIPS = ["SQL", "Power BI", "Tableau", "Python", "Excel", "DAX"];

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Background glows */}
      <div className="hero__glow hero__glow--blue" />
      <div className="hero__glow hero__glow--teal" />

      <div className="hero__inner">
        {/* Text column */}
        <div className="hero__text">
          <div className="hero__pill">
            <span className="hero__pill-dot" />
            Open to Work
          </div>

          <h1 className="hero__name">Amith<br />Gowda S</h1>

          <p className="hero__title">Data Analyst · Bangalore, India</p>

          <div className="hero__chips">
            {CHIPS.map(chip => (
              <span key={chip} className="hero__chip">{chip}</span>
            ))}
          </div>

          <div className="hero__ctas">
            <a
              href="#contact"
              className="hero__btn-primary"
              onClick={e => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in Touch
            </a>
            <a
              href="https://drive.google.com/file/d/13P05rpEDwxS88xm0Fu4uArJOen2p7e6X/view"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn-outline"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Photo column */}
        <div className="hero__photo">
          <div className="hero__photo-card">
            <img src={amithPhoto} alt="Amith Gowda S" />
            <div className="hero__photo-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
