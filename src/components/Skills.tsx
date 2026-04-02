import React from "react";

interface SkillItem {
  iconUrl: string;
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
      { iconUrl: "https://cdn.simpleicons.org/powerbi/ffffff",  iconBg: "linear-gradient(145deg,#F2C811,#c9a200)", name: "Power BI" },
      { iconUrl: "https://cdn.simpleicons.org/tableau/ffffff",  iconBg: "linear-gradient(145deg,#E97627,#b35200)", name: "Tableau" },
      { iconUrl: "https://cdn.simpleicons.org/looker/ffffff",   iconBg: "linear-gradient(145deg,#4285F4,#1a56c4)", name: "Looker" },
      { iconUrl: "https://cdn.simpleicons.org/grafana/ffffff",  iconBg: "linear-gradient(145deg,#F46800,#b34d00)", name: "Grafana" },
    ],
  },
  {
    category: "Databases & SQL",
    skills: [
      { iconUrl: "https://cdn.simpleicons.org/mysql/ffffff",      iconBg: "linear-gradient(145deg,#00758F,#005570)", name: "SQL / MySQL" },
      { iconUrl: "https://cdn.simpleicons.org/postgresql/ffffff", iconBg: "linear-gradient(145deg,#336791,#1e3f5a)", name: "PostgreSQL" },
      { iconUrl: "https://cdn.simpleicons.org/sqlite/ffffff",     iconBg: "linear-gradient(145deg,#4A90D9,#2c6aad)", name: "SQLite" },
      { iconUrl: "https://cdn.simpleicons.org/microsoftsqlserver/ffffff", iconBg: "linear-gradient(145deg,#CC2927,#8b1a19)", name: "SQL Server" },
    ],
  },
  {
    category: "Spreadsheets",
    skills: [
      { iconUrl: "https://cdn.simpleicons.org/microsoftexcel/ffffff",      iconBg: "linear-gradient(145deg,#217346,#145c30)", name: "Excel" },
      { iconUrl: "https://cdn.simpleicons.org/googlesheets/ffffff",        iconBg: "linear-gradient(145deg,#0F9D58,#0a6e3f)", name: "Google Sheets" },
      { iconUrl: "https://cdn.simpleicons.org/microsoftoffice/ffffff",     iconBg: "linear-gradient(145deg,#D83B01,#9b2a01)", name: "Power Query" },
      { iconUrl: "https://cdn.simpleicons.org/airtable/ffffff",            iconBg: "linear-gradient(145deg,#18BFFF,#0e8ab5)", name: "Airtable" },
    ],
  },
  {
    category: "Programming",
    skills: [
      { iconUrl: "https://cdn.simpleicons.org/python/ffffff",  iconBg: "linear-gradient(145deg,#306998,#1a3d5c)", name: "Python" },
      { iconUrl: "https://cdn.simpleicons.org/pandas/ffffff",  iconBg: "linear-gradient(145deg,#150458,#2d0a8f)", name: "Pandas" },
      { iconUrl: "https://cdn.simpleicons.org/numpy/ffffff",   iconBg: "linear-gradient(145deg,#4DABF7,#1971c2)", name: "NumPy" },
      { iconUrl: "https://cdn.simpleicons.org/jupyter/ffffff", iconBg: "linear-gradient(145deg,#F37626,#b34d00)", name: "Jupyter" },
    ],
  },
  {
    category: "Analytics & Stats",
    skills: [
      { iconUrl: "https://cdn.simpleicons.org/googleanalytics/ffffff", iconBg: "linear-gradient(145deg,#E37400,#a65200)", name: "Analytics" },
      { iconUrl: "https://cdn.simpleicons.org/databricks/ffffff",      iconBg: "linear-gradient(145deg,#FF3621,#b32518)", name: "Databricks" },
      { iconUrl: "https://cdn.simpleicons.org/apacheairflow/ffffff",   iconBg: "linear-gradient(145deg,#017CEE,#0154a5)", name: "Forecasting" },
      { iconUrl: "https://cdn.simpleicons.org/kaggle/ffffff",          iconBg: "linear-gradient(145deg,#20BEFF,#0e87b5)", name: "Kaggle" },
    ],
  },
  {
    category: "Tools & Collaboration",
    skills: [
      { iconUrl: "https://cdn.simpleicons.org/git/ffffff",       iconBg: "linear-gradient(145deg,#F05032,#a83020)", name: "Git" },
      { iconUrl: "https://cdn.simpleicons.org/github/ffffff",    iconBg: "linear-gradient(145deg,#24292E,#111518)", name: "GitHub" },
      { iconUrl: "https://cdn.simpleicons.org/wordpress/ffffff", iconBg: "linear-gradient(145deg,#21759B,#134d6b)", name: "WordPress" },
      { iconUrl: "https://cdn.simpleicons.org/jira/ffffff",      iconBg: "linear-gradient(145deg,#0052CC,#003d99)", name: "Jira" },
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
                    <img src={s.iconUrl} alt={s.name} width="20" height="20" />
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
