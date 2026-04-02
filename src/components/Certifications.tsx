import React from "react";

interface Cert {
  emoji: string;
  iconBg: string;
  name: string;
  issuer: string;
  year?: string;
}

const certs: Cert[] = [
  {
    emoji: "📊",
    iconBg: "linear-gradient(135deg, #1a73e8, #0d47a1)",
    name: "Microsoft Power BI Data Analyst",
    issuer: "Microsoft",
    year: "2023",
  },
  {
    emoji: "🔷",
    iconBg: "linear-gradient(135deg, #e87722, #b34700)",
    name: "Tableau Desktop Specialist",
    issuer: "Tableau / Salesforce",
    year: "2022",
  },
  {
    emoji: "☁️",
    iconBg: "linear-gradient(135deg, #34a853, #1e6e34)",
    name: "Google Data Analytics",
    issuer: "Google / Coursera",
    year: "2022",
  },
  {
    emoji: "🐍",
    iconBg: "linear-gradient(135deg, #306998, #1a3d5c)",
    name: "Python for Data Analysis",
    issuer: "IBM / Coursera",
    year: "2022",
  },
  {
    emoji: "🗄️",
    iconBg: "linear-gradient(135deg, #2DD4BF, #0e7a70)",
    name: "SQL for Data Science",
    issuer: "UC Davis / Coursera",
    year: "2021",
  },
  {
    emoji: "📈",
    iconBg: "linear-gradient(135deg, #F4C542, #b8892e)",
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
          <div key={i} className="certs__card rv" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="certs__icon" style={{ background: c.iconBg }}>
              <span>{c.emoji}</span>
            </div>
            <div className="certs__info">
              <h3 className="certs__name">{c.name}</h3>
              <p className="certs__issuer">
                {c.issuer}{c.year ? ` · ${c.year}` : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
