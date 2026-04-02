import React from "react";

interface Project {
  emoji: string;
  title: string;
  stat: string;
  statColor?: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  wide?: boolean;
}

const projects: Project[] = [
  {
    emoji: "🏛️",
    title: "Aadhar Seeding Application",
    stat: "200+ Officials Trained",
    statColor: "var(--blue)",
    description:
      "Led the integration of Aadhar data with Bhoomi land records in Karnataka for a state e-governance initiative. Automated database updates, improved data accuracy in record integration, and delivered training for hundreds of government stakeholders.",
    tags: ["SQL", "Stored Procedures", "Excel", "Stakeholder Training", "E-Governance"],
    liveUrl: "https://rdservices.karnataka.gov.in/service63",
    wide: true,
  },
  {
    emoji: "🏥",
    title: "Hospital ER Analysis – Power BI",
    stat: "15% Wait-Time Reduction",
    statColor: "var(--teal)",
    description:
      "Multi-dashboard analytics tool for hospital ER operations tracking patient flow, wait times, satisfaction scores, and referral patterns to optimize resource allocation.",
    tags: ["Power BI", "DAX", "Power Query", "Healthcare Analytics"],
    liveUrl: "https://drive.google.com/file/d/1uTf9O4RqmWNrIzBO5UIR0d5aXEGAufV_/view?usp=sharing",
  },
  {
    emoji: "🌾",
    title: "Parihara – Farmer Relief Portal",
    stat: "1000s of Farmers Impacted",
    statColor: "var(--gold)",
    description:
      "Supported the design and launch of a digital system for disbursing financial relief to drought-affected farmers. Ensured data integrity and reduced compensation disbursement errors.",
    tags: ["SQL", "Excel", "Data Validation", "Government Systems"],
    liveUrl: "https://parihara.karnataka.gov.in/Pariharahome/",
  },
  {
    emoji: "📉",
    title: "COVID-19 Analysis Dashboard",
    stat: "India-Wide Trend Insights",
    statColor: "var(--violet)",
    description:
      "Interactive Tableau dashboard analyzing COVID-19 cases and vaccination trends across India with time-series analysis and regional drill-downs.",
    tags: ["Tableau", "Time Series", "Public Health Data", "LOD Calculations"],
    liveUrl: "https://public.tableau.com/app/profile/amith.gowda.s/viz/Covid19Analysis_17590053856060",
  },
  {
    emoji: "👥",
    title: "HR Analytics Dashboard",
    stat: "Attrition Trends Visualised",
    statColor: "var(--rose)",
    description:
      "Workforce analytics dashboard in Tableau tracking employee attrition, hiring velocity, and performance metrics with KPI-driven views and interactive filters to support HR data-driven decisions.",
    tags: ["Tableau", "Data Modeling", "KPI Dashboards", "HR Analytics"],
    liveUrl: "https://github.com/AmithGowda04/HR-analytics-Dashboard",
  },
  {
    emoji: "🛒",
    title: "Blinkit Sales Analysis",
    stat: "Outlet KPIs at a Glance",
    statColor: "var(--green)",
    description:
      "Power BI dashboard analyzing sales KPIs, customer ratings, and outlet performance trends with advanced DAX calculations and visual hierarchies for filter-driven insights.",
    tags: ["Power BI", "DAX", "Power Query", "Sales Analytics", "Excel"],
    liveUrl: "https://github.com/AmithGowda04/Blinkit-Sales-Analysis",
  },
];

const Projects = () => (
  <section className="impact" id="projects">
    <div className="section-inner">
      <h2 className="section-heading">Impact & Projects</h2>
      <div className="impact__grid">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`impact__card rv${p.wide ? " impact__card--wide" : ""}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="impact__emoji">{p.emoji}</span>
            <h3>{p.title}</h3>
            <p className="impact__stat" style={{ color: p.statColor }}>{p.stat}</p>
            <p className="impact__desc">{p.description}</p>
            <div className="impact__tags">
              {p.tags.map(tag => (
                <span key={tag} className="impact__tag">{tag}</span>
              ))}
            </div>
            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="impact__link"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
