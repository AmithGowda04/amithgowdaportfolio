import React from "react";
import { ChevronDown, Download } from "lucide-react";
import amithPhoto from "@/assets/amith-photo.jpeg";

const CHIPS = [
  { label: "SQL",      teal: false },
  { label: "Power BI", teal: false },
  { label: "Tableau",  teal: true  },
  { label: "Python",   teal: false },
  { label: "Excel",    teal: false },
  { label: "DAX",      teal: true  },
  { label: "ETL",      teal: false },
  { label: "Pandas",   teal: true  },
];

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero__inner">

      {/* ── Left column ── */}
      <div className="hero__text">
        <div className="hero__pill">
          <span className="hero__pill-dot" />
          Open to Work &nbsp;·&nbsp; Bangalore, India
        </div>

        <h1 className="hero__name">
          Amith<br />Gowda S
        </h1>

        <p className="hero__subtitle">
          <span className="hero__subtitle-role">Data Analyst</span>
          <span className="hero__subtitle-sep"> · 5+ Years</span>
        </p>

        <p className="hero__desc">
          I turn raw data into <strong>actionable dashboards</strong> — SQL
          pipelines, Power BI reports, and Python analytics — across
          government e-governance and enterprise environments.
        </p>

        <div className="hero__chips">
          {CHIPS.map(c => (
            <span key={c.label} className={`hero__chip${c.teal ? " hero__chip--teal" : ""}`}>
              {c.label}
            </span>
          ))}
        </div>

        <div className="hero__ctas">
          <a
            href="#experience"
            className="hero__btn-primary"
            onClick={e => {
              e.preventDefault();
              document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <ChevronDown size={15} strokeWidth={2.5} />
            View Experience
          </a>
          <a
            href="https://drive.google.com/file/d/13P05rpEDwxS88xm0Fu4uArJOen2p7e6X/view"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__btn-outline"
          >
            <Download size={15} strokeWidth={2.2} />
            Download CV
          </a>
        </div>
      </div>

      {/* ── Right column — photo card ── */}
      <div className="hero__photo">
        <div className="hero__photo-card">
          <img src={amithPhoto} alt="Amith Gowda S" />

          {/* Bottom overlay */}
          <div className="hero__photo-overlay">
            <p className="hero__overlay-name">Amith Gowda S</p>
            <p className="hero__overlay-role">Data Analyst &nbsp;·&nbsp; 5+ Years</p>
            <div className="hero__overlay-stats">
              <div className="hero__overlay-stat">
                <span className="hero__overlay-num">5+</span>
                <span className="hero__overlay-lbl">Yrs Exp</span>
              </div>
              <div className="hero__overlay-stat">
                <span className="hero__overlay-num">20+</span>
                <span className="hero__overlay-lbl">Dashboards</span>
              </div>
              <div className="hero__overlay-stat">
                <span className="hero__overlay-num">8+</span>
                <span className="hero__overlay-lbl">Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Hero;
