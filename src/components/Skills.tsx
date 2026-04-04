import React from "react";
import { BarChart3, PieChart, Table2, GitMerge, LayoutGrid, Brain, Network, Bot } from "lucide-react";

type IconSource =
  | { type: "cdn"; slug: string }
  | { type: "lucide"; icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }> };

interface SkillItem {
  icon: IconSource;
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
      { icon: { type: "lucide", icon: BarChart3 },          iconBg: "linear-gradient(145deg,#F2C811,#c9a200)", name: "Power BI" },
      { icon: { type: "lucide", icon: PieChart },           iconBg: "linear-gradient(145deg,#E97627,#b35200)", name: "Tableau" },
      { icon: { type: "cdn",    slug: "grafana" },          iconBg: "linear-gradient(145deg,#F46800,#b34d00)", name: "Grafana" },
      { icon: { type: "cdn",    slug: "googleanalytics" },  iconBg: "linear-gradient(145deg,#4285F4,#1a56c4)", name: "Looker / GA" },
    ],
  },
  {
    category: "Databases & SQL",
    skills: [
      { icon: { type: "cdn", slug: "mysql" },      iconBg: "linear-gradient(145deg,#00758F,#005570)", name: "MySQL / SQL" },
      { icon: { type: "cdn", slug: "postgresql" }, iconBg: "linear-gradient(145deg,#336791,#1e3f5a)", name: "PostgreSQL" },
      { icon: { type: "cdn", slug: "sqlite" },     iconBg: "linear-gradient(145deg,#4A90D9,#2c6aad)", name: "SQLite" },
      { icon: { type: "cdn", slug: "databricks" }, iconBg: "linear-gradient(145deg,#FF3621,#b32518)", name: "Databricks" },
    ],
  },
  {
    category: "Spreadsheets",
    skills: [
      { icon: { type: "lucide", icon: Table2 },          iconBg: "linear-gradient(145deg,#217346,#145c30)", name: "Excel" },
      { icon: { type: "cdn",    slug: "googlesheets" },  iconBg: "linear-gradient(145deg,#0F9D58,#0a6e3f)", name: "Google Sheets" },
      { icon: { type: "lucide", icon: LayoutGrid },      iconBg: "linear-gradient(145deg,#D83B01,#9b2a01)", name: "Power Query" },
      { icon: { type: "cdn",    slug: "airtable" },      iconBg: "linear-gradient(145deg,#18BFFF,#0e8ab5)", name: "Airtable" },
    ],
  },
  {
    category: "Programming",
    skills: [
      { icon: { type: "cdn", slug: "python" },  iconBg: "linear-gradient(145deg,#306998,#1a3d5c)", name: "Python" },
      { icon: { type: "cdn", slug: "pandas" },  iconBg: "linear-gradient(145deg,#150458,#2d0a8f)", name: "Pandas" },
      { icon: { type: "cdn", slug: "numpy" },   iconBg: "linear-gradient(145deg,#4DABF7,#1971c2)", name: "NumPy" },
      { icon: { type: "cdn", slug: "jupyter" }, iconBg: "linear-gradient(145deg,#F37626,#b34d00)", name: "Jupyter" },
    ],
  },
  {
    category: "Analytics & Stats",
    skills: [
      { icon: { type: "cdn",    slug: "googleanalytics" }, iconBg: "linear-gradient(145deg,#E37400,#a65200)", name: "Analytics" },
      { icon: { type: "cdn",    slug: "kaggle" },          iconBg: "linear-gradient(145deg,#20BEFF,#0e87b5)", name: "Kaggle" },
      { icon: { type: "cdn",    slug: "apacheairflow" },   iconBg: "linear-gradient(145deg,#017CEE,#0154a5)", name: "Airflow" },
      { icon: { type: "lucide", icon: GitMerge },          iconBg: "linear-gradient(145deg,#FF694B,#c04030)", name: "dbt" },
    ],
  },
  {
    category: "AI & Automation",
    skills: [
      { icon: { type: "lucide", icon: Brain },       iconBg: "linear-gradient(145deg,#CC785C,#9b4e30)", name: "Claude AI" },
      { icon: { type: "cdn",    slug: "openai" },    iconBg: "linear-gradient(145deg,#10A37F,#0a6b54)", name: "ChatGPT / OpenAI" },
      { icon: { type: "cdn",    slug: "githubcopilot" }, iconBg: "linear-gradient(145deg,#8B5CF6,#5b21b6)", name: "GitHub Copilot" },
      { icon: { type: "lucide", icon: Network },     iconBg: "linear-gradient(145deg,#4F8EF7,#2560c4)", name: "MCP" },
    ],
  },
  {
    category: "Tools & Collaboration",
    skills: [
      { icon: { type: "cdn", slug: "git" },       iconBg: "linear-gradient(145deg,#F05032,#a83020)", name: "Git" },
      { icon: { type: "cdn", slug: "github" },    iconBg: "linear-gradient(145deg,#24292E,#111518)", name: "GitHub" },
      { icon: { type: "cdn", slug: "wordpress" }, iconBg: "linear-gradient(145deg,#21759B,#134d6b)", name: "WordPress" },
      { icon: { type: "cdn", slug: "jira" },      iconBg: "linear-gradient(145deg,#0052CC,#003d99)", name: "Jira" },
    ],
  },
];

const IconBox = ({ icon, size }: { icon: IconSource; size: number }) => {
  if (icon.type === "lucide") {
    const LucideIcon = icon.icon;
    return <LucideIcon size={size} color="#ffffff" strokeWidth={1.8} />;
  }
  return (
    <img
      src={`https://cdn.simpleicons.org/${icon.slug}/ffffff`}
      alt=""
      width={size}
      height={size}
      onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
    />
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
                  <div className="stack__skill-icon" style={{ background: s.iconBg }}>
                    <IconBox icon={s.icon} size={20} />
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
