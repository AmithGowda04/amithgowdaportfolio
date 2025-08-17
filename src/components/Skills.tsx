import React from "react";
import { Database, BarChart3, Server } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Data Analysis",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "from-blue-500 to-blue-600",
    skills: [
      { name: "SQL", level: 90 },
      { name: "Python", level: 85 },
      { name: "Pandas", level: 80 },
      { name: "Matplotlib", level: 75 },
    ],
  },
  {
    name: "Visualization",
    icon: <Database className="w-6 h-6" />,
    color: "from-green-500 to-green-600",
    skills: [
      { name: "Power BI", level: 90 },
      { name: "Tableau", level: 85 },
      { name: "Grafana", level: 70 },
    ],
  },
  {
    name: "Databases & Tools",
    icon: <Server className="w-6 h-6" />,
    color: "from-purple-500 to-purple-600",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "SQL Server", level: 80 },
      { name: "Git", level: 75 },
      { name: "Excel", level: 90 },
    ],
  },
];

const SkillCard = ({ category }: { category: SkillCategory }) => (
  <div className="glass-card p-6 space-y-6 card-hover">
    <div className="flex items-center space-x-3">
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white shadow-lg`}>
        {category.icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground">{category.name}</h3>
    </div>
    
    <div className="space-y-4">
      {category.skills.map((skill) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-foreground">{skill.name}</span>
            <span className="text-muted-foreground">{skill.level}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
    
    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill) => (
        <span key={skill.name} className="skill-badge">
          {skill.name}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title text-center animate-fade-up">
          Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={category.name} 
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <SkillCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;