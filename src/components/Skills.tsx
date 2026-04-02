import React from "react";

interface SkillItem {
  icon: string;
  name: string;
  iconBg: string;
}

interface StackGroup {
  category: string;
  skills: SkillItem[];
}

const stack: StackGroup[] = [
  {
    category: "BI & Visualization",
    skills: [
      { icon: "📊", name: "Power BI",   iconBg: "linear-gradient(145deg,#F2C811,#c9a200)" },
      { icon: "🔶", name: "Tableau",    iconBg: "linear-gradient(145deg,#E97627,#b35200)" },
      { icon: "👁️", name: "Looker",     iconBg: "linear-gradient(145deg,#4285F4,#1a56c4)" },
      { icon: "📉", name: "Grafana",    iconBg: "linear-gradient(145deg,#F46800,#b34d00)" },
    ],
  },
  {
    category: "Databases & SQL",
    skills: [
      { icon: "🗄️", name: "SQL",               iconBg: "linear-gradient(145deg,#00758F,#005570)" },
      { icon: "🔗", name: "Stored Procedures", iconBg: "linear-gradient(145deg,#336791,#1e3f5a)" },
      { icon: "🪟", name: "CTEs",              iconBg: "linear-gradient(145deg,#4A90D9,#2c6aad)" },
      { icon: "🪜", name: "Window Functions",  iconBg: "linear-gradient(145deg,#2DD4BF,#0e7a6e)" },
    ],
  },
  {
    category: "Spreadsheets",
    skills: [
      { icon: "📋", name: "Excel",         iconBg: "linear-gradient(145deg,#217346,#145c30)" },
      { icon: "🔍", name: "VLOOKUP",       iconBg: "linear-gradient(145deg,#1D6F42,#0f4028)" },
      { icon: "🔄", name: "Pivot Tables",  iconBg: "linear-gradient(145deg,#2E7D32,#1b4d1e)" },
      { icon: "⚡", name: "Power Query",   iconBg: "linear-gradient(145deg,#F4C542,#b08a1e)" },
    ],
  },
  {
    category: "Programming",
    skills: [
      { icon: "🐍", name: "Python",  iconBg: "linear-gradient(145deg,#306998,#1a3d5c)" },
      { icon: "🐼", name: "Pandas",  iconBg: "linear-gradient(145deg,#150458,#2d0a8f)" },
      { icon: "🔢", name: "NumPy",   iconBg: "linear-gradient(145deg,#4DABF7,#1971c2)" },
      { icon: "📓", name: "Jupyter", iconBg: "linear-gradient(145deg,#F37626,#b34d00)" },
    ],
  },
  {
    category: "Analytics",
    skills: [
      { icon: "📐", name: "Statistics",       iconBg: "linear-gradient(145deg,#A78BFA,#6d4fc9)" },
      { icon: "📈", name: "Forecasting",      iconBg: "linear-gradient(145deg,#34D399,#0e7a4e)" },
      { icon: "🎯", name: "KPI Tracking",     iconBg: "linear-gradient(145deg,#F87171,#c03030)" },
      { icon: "🔬", name: "Root Cause",       iconBg: "linear-gradient(145deg,#60A5FA,#1d5fa6)" },
    ],
  },
  {
    category: "Tools & Soft Skills",
    skills: [
      { icon: "🌿", name: "Git",             iconBg: "linear-gradient(145deg,#F05032,#a83020)" },
      { icon: "🌐", name: "WordPress",       iconBg: "linear-gradient(145deg,#21759B,#134d6b)" },
      { icon: "🤝", name: "Stakeholders",    iconBg: "linear-gradient(145deg,#4F8EF7,#2355b0)" },
      { icon: "🏫", name: "Training",        iconBg: "linear-gradient(145deg,#2DD4BF,#0e7a70)" },
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
                    <span>{s.icon}</span>
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
