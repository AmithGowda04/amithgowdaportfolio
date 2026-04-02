import React from "react";

interface SkillItem {
  iconSlug: string;
  iconBg: string;
  fallback: string;
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
      { iconSlug: "powerbi",         iconBg: "linear-gradient(145deg,#F2C811,#c9a200)", fallback: "PB", name: "Power BI" },
      { iconSlug: "tableau",         iconBg: "linear-gradient(145deg,#E97627,#b35200)", fallback: "TB", name: "Tableau" },
      { iconSlug: "grafana",         iconBg: "linear-gradient(145deg,#F46800,#b34d00)", fallback: "GF", name: "Grafana" },
      { iconSlug: "googleanalytics", iconBg: "linear-gradient(145deg,#4285F4,#1a56c4)", fallback: "GA", name: "Looker / GA" },
    ],
  },
  {
    category: "Databases & SQL",
    skills: [
      { iconSlug: "mysql",      iconBg: "linear-gradient(145deg,#00758F,#005570)", fallback: "MY", name: "MySQL / SQL" },
      { iconSlug: "postgresql", iconBg: "linear-gradient(145deg,#336791,#1e3f5a)", fallback: "PG", name: "PostgreSQL" },
      { iconSlug: "sqlite",     iconBg: "linear-gradient(145deg,#4A90D9,#2c6aad)", fallback: "SQ", name: "SQLite" },
      { iconSlug: "databricks", iconBg: "linear-gradient(145deg,#FF3621,#b32518)", fallback: "DB", name: "Databricks" },
    ],
  },
  {
    category: "Spreadsheets",
    skills: [
      { iconSlug: "microsoftexcel",  iconBg: "linear-gradient(145deg,#217346,#145c30)", fallback: "XL", name: "Excel" },
      { iconSlug: "googlesheets",    iconBg: "linear-gradient(145deg,#0F9D58,#0a6e3f)", fallback: "GS", name: "Google Sheets" },
      { iconSlug: "microsoftexcel",  iconBg: "linear-gradient(145deg,#D83B01,#9b2a01)", fallback: "PQ", name: "Power Query" },
      { iconSlug: "airtable",        iconBg: "linear-gradient(145deg,#18BFFF,#0e8ab5)", fallback: "AT", name: "Airtable" },
    ],
  },
  {
    category: "Programming",
    skills: [
      { iconSlug: "python",  iconBg: "linear-gradient(145deg,#306998,#1a3d5c)", fallback: "PY", name: "Python" },
      { iconSlug: "pandas",  iconBg: "linear-gradient(145deg,#150458,#2d0a8f)", fallback: "PD", name: "Pandas" },
      { iconSlug: "numpy",   iconBg: "linear-gradient(145deg,#4DABF7,#1971c2)", fallback: "NP", name: "NumPy" },
      { iconSlug: "jupyter", iconBg: "linear-gradient(145deg,#F37626,#b34d00)", fallback: "JN", name: "Jupyter" },
    ],
  },
  {
    category: "Analytics & Stats",
    skills: [
      { iconSlug: "googleanalytics", iconBg: "linear-gradient(145deg,#E37400,#a65200)", fallback: "AN", name: "Analytics" },
      { iconSlug: "kaggle",          iconBg: "linear-gradient(145deg,#20BEFF,#0e87b5)", fallback: "KG", name: "Kaggle" },
      { iconSlug: "apacheairflow",   iconBg: "linear-gradient(145deg,#017CEE,#0154a5)", fallback: "AF", name: "Airflow" },
      { iconSlug: "dbt",             iconBg: "linear-gradient(145deg,#FF694B,#c04030)", fallback: "DT", name: "dbt" },
    ],
  },
  {
    category: "Tools & Collaboration",
    skills: [
      { iconSlug: "git",       iconBg: "linear-gradient(145deg,#F05032,#a83020)", fallback: "GT", name: "Git" },
      { iconSlug: "github",    iconBg: "linear-gradient(145deg,#24292E,#111518)", fallback: "GH", name: "GitHub" },
      { iconSlug: "wordpress", iconBg: "linear-gradient(145deg,#21759B,#134d6b)", fallback: "WP", name: "WordPress" },
      { iconSlug: "jira",      iconBg: "linear-gradient(145deg,#0052CC,#003d99)", fallback: "JR", name: "Jira" },
    ],
  },
];

const SkillIcon = ({ slug, bg, fallback }: { slug: string; bg: string; fallback: string }) => {
  const [failed, setFailed] = React.useState(false);
  return (
    <div className="stack__skill-icon" style={{ background: bg }}>
      {!failed ? (
        <img
          src={`https://cdn.simpleicons.org/${slug}/ffffff`}
          alt={slug}
          width="20"
          height="20"
          onError={() => setFailed(true)}
        />
      ) : (
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", fontWeight: 700, color: "#fff" }}>
          {fallback}
        </span>
      )}
    </div>
  );
};

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
                  <SkillIcon slug={s.iconSlug} bg={s.iconBg} fallback={s.fallback} />
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
