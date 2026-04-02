import React from "react";

interface Cert {
  iconUrl: string;
  iconBg: string;
  name: string;
  issuer: string;
  year: string;
}

const certs: Cert[] = [
  {
    iconUrl: "https://cdn.simpleicons.org/powerbi/ffffff",
    iconBg: "linear-gradient(145deg, #1565C0, #1E88E5)",
    name: "Microsoft Power BI Data Analyst",
    issuer: "Microsoft",
    year: "2023",
  },
  {
    iconUrl: "https://cdn.simpleicons.org/tableau/ffffff",
    iconBg: "linear-gradient(145deg, #E65100, #FF6D00)",
    name: "Tableau Desktop Specialist",
    issuer: "Tableau / Salesforce",
    year: "2022",
  },
  {
    iconUrl: "https://cdn.simpleicons.org/google/ffffff",
    iconBg: "linear-gradient(145deg, #1B5E20, #2E7D32)",
    name: "Google Data Analytics",
    issuer: "Google / Coursera",
    year: "2022",
  },
  {
    iconUrl: "https://cdn.simpleicons.org/python/ffffff",
    iconBg: "linear-gradient(145deg, #0D47A1, #1565C0)",
    name: "Python for Data Analysis",
    issuer: "IBM / Coursera",
    year: "2022",
  },
  {
    iconUrl: "https://cdn.simpleicons.org/mysql/ffffff",
    iconBg: "linear-gradient(145deg, #00695C, #00897B)",
    name: "SQL for Data Science",
    issuer: "UC Davis / Coursera",
    year: "2021",
  },
  {
    iconUrl: "https://cdn.simpleicons.org/microsoftexcel/ffffff",
    iconBg: "linear-gradient(145deg, #1B5E20, #388E3C)",
    name: "Advanced Excel for Business",
    issuer: "Udemy",
    year: "2021",
  },
];

const Certifications = () => (
  <section className="certs" id="certifications">
    <div className="section-inner">
      <div className="certs__header">
        <span className="certs__label">Credentials</span>
        <h2 className="section-heading" style={{ marginBottom: 0 }}>Certifications</h2>
      </div>
      <div className="certs__grid">
        {certs.map((c, i) => (
          <div key={i} className="certs__item rv" style={{ transitionDelay: `${i * 70}ms` }}>
            <div className="certs__icon" style={{ background: c.iconBg }}>
              <img src={c.iconUrl} alt={c.name} width="28" height="28" />
            </div>
            <div className="certs__info">
              <h3 className="certs__name">{c.name}</h3>
              <p className="certs__issuer">{c.issuer} · {c.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
