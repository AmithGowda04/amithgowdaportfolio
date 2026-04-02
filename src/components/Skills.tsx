import React from "react";

interface SkillItem {
  iconSlug: string;
  iconBg: string;
  name: string;
}

interface StackGroup {
  category: string;
  skills: SkillItem[];
}

const stack: StackGroup[] = [
  {
    category: "BI & Visualization",
    skills: [
      { iconSlug: "powerbi",         iconBg: "linear-gradient(145deg,#F2C811,#c9a200)", name: "Power BI" },
      { iconSlug: "tableau",         iconBg: "linear-gradient(145deg,#E97627,#b35200)", name: "Tableau" },
      { iconSlug: "grafana",         iconBg: "linear-gradient(145deg,#F46800,#b34d00)", name: "Grafana" },
      { iconSlug: "googleanalytics", iconBg: "linear-gradient(145deg,#4285F4,#1a56c4)", name: "Looker / GA" },
    ],
  },
  {
    category: "Databases & SQL",
    skills: [
      { iconSlug: "mysql",      iconBg: "linear-gradient(145deg,#00758F,#005570)", name: "MySQL / SQL" },
      { iconSlug: "postgresql", iconBg: "linear-gradient(145deg,#336791,#1e3f5a)", name: "PostgreSQL" },
      { iconSlug: "sqlite",     iconBg: "linear-gradient(145deg,#4A90D9,#2c6aad)", name: "SQLite" },
      { iconSlug: "databricks", iconBg: "linear-gradient(145deg,#FF3621,#b32518)", name: "Databricks" },
    ],
  },
  {
    category: "Spreadsheets",
    skills: [
      { iconSlug: "microsoftexcel", iconBg: "linear-gradient(145deg,#217346,#145c30)", name: "Excel" },
      { iconSlug: "googlesheets",   iconBg: "linear-gradient(145deg,#0F9D58,#0a6e3f)", name: "Google Sheets" },
      { iconSlug: "microsoftexcel", iconBg: "linear-gradient(145deg,#D83B01,#9b2a01)", name: "Power Query" },
      { iconSlug: "airtable",       iconBg: "linear-gradient(145deg,#18BFFF,#0e8ab5)", name: "Airtable" },
    ],
  },
  {
    category: "Programming",
    skills: [
      { iconSlug: "python",  iconBg: "linear-gradient(145deg,#306998,#1a3d5c)", name: "Python" },
      { iconSlug: "pandas",  iconBg: "linear-gradient(145deg,#150458,#2d0a8f)", name: "Pandas" },
      { iconSlug: "numpy",   iconBg: "linear-gradient(145deg,#4DABF7,#1971c2)", name: "NumPy" },
      { iconSlug: "jupyter", iconBg: "linear-gradient(145deg,#F37626,#b34d00)", name: "Jupyter" },
    ],
  },
  {
    category: "Analytics & Stats",
    skills: [
      { iconSlug: "googleanalytics", iconBg: "linear-gradient(145deg,#E37400,#a65200)", name: "Analytics" },
      { iconSlug: "kaggle",          iconBg: "linear-gradient(145deg,#20BEFF,#0e87b5)", name: "Kaggle" },
      { iconSlug: "apacheairflow",   iconBg: "linear-gradient(145deg,#017CEE,#0154a5)", name: "Airflow" },
      { iconSlug: "dbt",             iconBg: "linear-gradient(145deg,#FF694B,#c04030)", name: "dbt" },
    ],
  },
  {
    category: "Tools & Collaboration",
    skills: [
      { iconSlug: "git",       iconBg: "linear-gradient(145deg,#F05032,#a83020)", name: "Git" },
      { iconSlug: "github",    iconBg: "linear-gradient(145deg,#24292E,#111518)", name: "GitHub" },
      { iconSlug: "wordpress", iconBg: "linear-gradient(145deg,#21759B,#134d6b)", name: "WordPress" },
      { iconSlug: "jira",      iconBg: "linear-gradient(145deg,#0052CC,#003d99)", name: "Jira" },
    ],
  },
];

const Skills = () => (
  <section className="stack" id="skills">
    <div className="section-inner">
      <div className="stack__header">
        <span className="stack__label">What I Work With</span>
        <h2 className="section-heading" style={{ marginBottom: 0 }}>Tech Stack</h2>
      </div>
      <div className="stack__groups">
        {stack.map((group, gi) => (
          <div key={gi} className="stack__group rv" style={{ transitionDelay: `${gi * 80}ms` }}>
            <h3 className="stack__group-name">{group.category}</h3>
            <div className="stack__skills">
              {group.skills.map((s, si) => (
                <div key={si} className="stack__skill">
                  <div className="stack__skill-icon" style={{ background: s.iconBg }}>
                    <img
                      src={`https://cdn.simpleicons.org/${s.iconSlug}/ffffff`}
                      alt=""
                      width="20"
                      height="20"
                      onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                    />
                  </div>
                  <span className="stack__skill-name">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
