import React from "react";

interface StackCategory {
  icon: string;
  name: string;
  tags: string[];
}

const categories: StackCategory[] = [
  {
    icon: "📊",
    name: "BI & Visualization",
    tags: ["Power BI", "Tableau", "Looker", "Grafana", "DAX", "Power Query"],
  },
  {
    icon: "🗄️",
    name: "Databases & SQL",
    tags: ["SQL", "Stored Procedures", "CTEs", "Window Functions", "Data Modeling", "Integrity Checks"],
  },
  {
    icon: "📋",
    name: "Spreadsheets",
    tags: ["Excel", "VLOOKUP", "Index-Match", "Pivot Tables", "Pivot Charts", "Power Query"],
  },
  {
    icon: "💻",
    name: "Programming",
    tags: ["Python", "Pandas", "NumPy", "Data Manipulation"],
  },
  {
    icon: "📈",
    name: "Analytics",
    tags: ["Hypothesis Testing", "Forecasting", "Correlation Analysis", "KPI Tracking", "Root Cause Analysis"],
  },
  {
    icon: "🔧",
    name: "Tools & Platforms",
    tags: ["Git", "WordPress", "GitHub", "Business Intelligence"],
  },
  {
    icon: "🤝",
    name: "Soft Skills",
    tags: ["Stakeholder Engagement", "Training & Capacity Building", "Cross-functional Collaboration", "SLA Delivery"],
  },
];

const Skills = () => (
  <section className="stack" id="skills">
    <div className="section-inner">
      <h2 className="section-heading">Tech Stack</h2>
      <div className="stack__grid">
        {categories.map((cat, i) => (
          <div key={i} className="stack__card rv" style={{ transitionDelay: `${i * 60}ms` }}>
            <span className="stack__icon">{cat.icon}</span>
            <h3 className="stack__cat-name">{cat.name}</h3>
            <div className="stack__tags">
              {cat.tags.map(tag => (
                <span key={tag} className="stack__tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
