import React from "react";

interface Cert {
  iconSlug: string;
  iconBg: string;
  iconFallback: string;
  name: string;
  issuer: string;
  year: string;
}

const certs: Cert[] = [
  {
    iconSlug: "powerbi",
    iconBg: "linear-gradient(145deg, #1565C0, #1E88E5)",
    iconFallback: "PB",
    name: "Microsoft Power BI Data Analyst",
    issuer: "Microsoft",
    year: "2023",
  },
  {
    iconSlug: "tableau",
    iconBg: "linear-gradient(145deg, #E65100, #FF6D00)",
    iconFallback: "TB",
    name: "Tableau Desktop Specialist",
    issuer: "Tableau / Salesforce",
    year: "2022",
  },
  {
    iconSlug: "googleanalytics",
    iconBg: "linear-gradient(145deg, #1B5E20, #2E7D32)",
    iconFallback: "GA",
    name: "Google Data Analytics",
    issuer: "Google / Coursera",
    year: "2022",
  },
  {
    iconSlug: "python",
    iconBg: "linear-gradient(145deg, #0D47A1, #1565C0)",
    iconFallback: "PY",
    name: "Python for Data Analysis",
    issuer: "IBM / Coursera",
    year: "2022",
  },
  {
    iconSlug: "mysql",
    iconBg: "linear-gradient(145deg, #00695C, #00897B)",
    iconFallback: "SQL",
    name: "SQL for Data Science",
    issuer: "UC Davis / Coursera",
    year: "2021",
  },
  {
    iconSlug: "microsoftexcel",
    iconBg: "linear-gradient(145deg, #1B5E20, #388E3C)",
    iconFallback: "XL",
    name: "Advanced Excel for Business",
    issuer: "Udemy",
    year: "2021",
  },
];

const CertIcon = ({ slug, bg, fallback }: { slug: string; bg: string; fallback: string }) => {
  const [failed, setFailed] = React.useState(false);
  return (
    <div className="certs__icon" style={{ background: bg }}>
      {!failed ? (
        <img
          src={`https://cdn.simpleicons.org/${slug}/ffffff`}
          alt={slug}
          width="28"
          height="28"
          onError={() => setFailed(true)}
        />
      ) : (
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, color: "#fff" }}>
          {fallback}
        </span>
      )}
    </div>
  );
};

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
            <CertIcon slug={c.iconSlug} bg={c.iconBg} fallback={c.iconFallback} />
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
