import React from "react";

interface ExperienceItem {
  company: string;
  domain: string;
  emoji: string;
  position: string;
  period: string;
  current?: boolean;
  description: string[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Invensis Technologies (BMC)",
    domain: "invensis.net",
    emoji: "🏢",
    position: "Data Analyst",
    period: "May 2022 – Present",
    current: true,
    description: [
      "Improved Bhoomi application forecasting accuracy by implementing advanced analytical practices, reducing error rates and increasing decision confidence.",
      "Built SQL-based data models and integrity checks across large land record datasets, improving data accuracy and compliance with government standards.",
      "Developed interactive BI dashboards delivering actionable insights on project performance and key metrics.",
      "Performed quality control of Bhoomi applications in terms of usability, functionality, and compliance with standards.",
      "Delivered training and capacity-building programs to 200+ government officials and land administrators across Karnataka.",
    ],
    tags: ["SQL", "Power BI", "Excel", "Data Modeling", "Stakeholder Training"],
  },
  {
    company: "Amazon",
    domain: "amazon.com",
    emoji: "📦",
    position: "Catalog Associate",
    period: "Jun 2020 – May 2022",
    description: [
      "Increased operational efficiency by 15% through process audits and defect detection automation.",
      "Implemented workflow improvements that cut defect-resolution turnaround by 10+ hours per cycle.",
      "Translated catalog issues into structured analytics, enabling KPI-driven corrective actions by business and tech teams.",
    ],
    tags: ["Data Analytics", "Process Improvement", "KPI Tracking", "Excel"],
  },
  {
    company: "Pitstop",
    domain: "pitstop.in",
    emoji: "🚗",
    position: "Junior Data Analyst",
    period: "Dec 2019 – May 2020",
    description: [
      "Formulated data analysis approaches to improve operational processes and customer experience at an Indian automotive start-up.",
      "Used data to improve service delivery processes, leading to enhanced customer satisfaction.",
      "Collaborated with cross-functional teams to implement process improvements with measurable gains in service quality.",
    ],
    tags: ["Data Analysis", "Reporting", "Cross-functional Collaboration"],
  },
];

const Experience = () => (
  <section className="exp" id="experience">
    <div className="section-inner">
      <h2 className="section-heading">Experience</h2>
      <div className="exp__cards">
        {experiences.map((exp, i) => (
          <div key={i} className="exp__card rv" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="exp__header">
              <div className="exp__logo-placeholder">{exp.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                  <h3 className="exp__role">
                    {exp.position}
                    {exp.current && <span className="exp__current-badge">Current</span>}
                  </h3>
                </div>
                <p className="exp__company">
                  {exp.company} · {exp.period}
                </p>
              </div>
            </div>

            <ul className="exp__bullets">
              {exp.description.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>

            <div className="exp__tags">
              {exp.tags.map(tag => (
                <span key={tag} className="exp__tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
