
import React from "react";
import { cn } from "@/lib/utils";
import { Database, LineChart, PieChart, Table2, Terminal, GitBranch, FileSpreadsheet, BarChartBig, Brain, Users } from "lucide-react";

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // Used for determining proficiency tags
  description?: string;
}

// You can modify the skills and their levels here
const skillCategories: SkillCategory[] = [
  {
    name: "Data Analysis Skills",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: [
      { 
        name: "SQL", 
        level: 100,
        description: "Advanced joins, subqueries, CTEs, window functions, stored procedures, data modeling, integrity checks"
      },
      { 
        name: "Excel", 
        level: 100,
        description: "VLOOKUP, Index-Match, Pivot Tables/Charts"
      },
      { 
        name: "Power BI", 
        level: 80,
        description: "Power Query, DAX calculations, data cleaning, report automation, row-level security, KPI dashboards"
      },
      { 
        name: "Tableau", 
        level: 80,
        description: "Dashboard design, storytelling, action filters, parameters, LOD calculations, advanced visualizations, adoption & usage tracking"
      },
      { 
        name: "Data Analytics", 
        level: 90,
        description: "Root Cause Analysis, Business Intelligence, KPI Tracking"
      },
    ]
  },
  {
    name: "Additional Tools & Skills",
    icon: <Terminal className="h-6 w-6 text-primary" />,
    skills: [
      { 
        name: "Python", 
        level: 70,
        description: "Data Manipulation, Pandas, NumPy"
      },
      { 
        name: "Statistics", 
        level: 70,
        description: "Correlation analysis, hypothesis testing, forecasting accuracy improvement (MAPE/MAE)"
      },
      { 
        name: "Git", 
        level: 60,
        description: "Version Control and Collaboration"
      },
      { 
        name: "Collaboration", 
        level: 80,
        description: "Stakeholder engagement, ad-hoc request delivery within SLAs, training & capacity building, knowledge asset creation"
      },
    ]
  }
];

const SkillItem = ({ skill }: { skill: Skill }) => {
  return (
    <div className="space-y-2 group mb-4">
      <div className="flex items-center gap-2">
        <SkillIcon name={skill.name} />
        <div className="font-medium flex items-center gap-2">
          <span>{skill.name}</span>
          {skill.level >= 90 && (
            <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
              Expert
            </span>
          )}
        </div>
      </div>
      
      {skill.description && (
        <p className="text-sm text-muted-foreground ml-8">{skill.description}</p>
      )}
    </div>
  );
};

const SkillIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "SQL":
      return <Database className="h-5 w-5 text-indigo-600" />;
    case "Excel":
      return <FileSpreadsheet className="h-5 w-5 text-green-600" />;
    case "Power BI":
      return <PieChart className="h-5 w-5 text-yellow-600" />;
    case "Tableau": 
      return <BarChartBig className="h-5 w-5 text-blue-600" />;
    case "Data Analytics":
      return <LineChart className="h-5 w-5 text-purple-600" />;
    case "Python":
      return <Terminal className="h-5 w-5 text-blue-600" />;
    case "Statistics":
      return <Table2 className="h-5 w-5 text-red-600" />;
    case "Git":
      return <GitBranch className="h-5 w-5 text-orange-600" />;
    case "Agile/Scrum":
      return <Users className="h-5 w-5 text-teal-600" />;
    default:
      return <Brain className="h-5 w-5 text-primary" />;
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title mb-16 animate-fade-up">
          Professional Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="animate-fade-up bg-card rounded-xl shadow-sm p-6 border border-border/50"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6 pb-2 border-b">
                {category.icon}
                <h3 className="text-xl font-semibold">
                  {category.name}
                </h3>
              </div>
              
              <div className="space-y-1">
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    skill={skill}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
