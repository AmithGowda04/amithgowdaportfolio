import React from "react";

interface Cert {
  emoji: string;
  logoUrl?: string;
  name: string;
  issuer: string;
  year: string;
}

const certs: Cert[] = [
  {
    emoji: "📊",
    logoUrl: "https://logo.clearbit.com/microsoft.com",
    name: "Microsoft Power BI Data Analyst",
    issuer: "Microsoft",
    year: "2023",
  },
  {
    emoji: "🔷",
    logoUrl: "https://logo.clearbit.com/tableau.com",
    name: "Tableau Desktop Specialist",
    issuer: "Tableau / Salesforce",
    year: "2022",
  },
  {
    emoji: "🐍",
    logoUrl: "https://logo.clearbit.com/python.org",
    name: "Python for Data Analysis",
    issuer: "Coursera / IBM",
    year: "2022",
  },
  {
    emoji: "🗄️",
    logoUrl: "https://logo.clearbit.com/coursera.org",
    name: "SQL for Data Science",
    issuer: "Coursera / UC Davis",
    year: "2021",
  },
  {
    emoji: "☁️",
    logoUrl: "https://logo.clearbit.com/google.com",
    name: "Google Data Analytics",
    issuer: "Google / Coursera",
    year: "2022",
  },
  {
    emoji: "📈",
    logoUrl: "https://logo.clearbit.com/udemy.com",
    name: "Advanced Excel for Business",
    issuer: "Udemy",
    year: "2021",
  },
];

const Certifications = () => (
  <section className="certs" id="certifications">
    <div className="section-inner">
      <h2 className="section-heading">Certifications</h2>
      <div className="certs__grid">
        {certs.map((c, i) => (
          <div key={i} className="certs__card rv" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="certs__logo-wrap">
              {c.logoUrl ? (
                <img
                  src={c.logoUrl}
                  alt={c.issuer}
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                    const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                    if (sibling) sibling.style.display = "block";
                  }}
                />
              ) : null}
              <span
                className="certs__logo-placeholder"
                style={{ display: c.logoUrl ? "none" : "block" }}
              >
                {c.emoji}
              </span>
            </div>
            <h3 className="certs__name">{c.name}</h3>
            <p className="certs__issuer">{c.issuer}</p>
            <p className="certs__year">{c.year}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
