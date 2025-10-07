
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
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="space-y-3 group mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SkillIcon name={skill.name} />
          <div className="font-semibold flex items-center gap-2">
            <span>{skill.name}</span>
            {skill.level >= 90 && (
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
                Expert
              </span>
            )}
          </div>
        </div>
        <span className="text-sm font-medium text-primary">{skill.level}%</span>
      </div>
      
      {/* Animated progress bar */}
      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
          }}
        />
      </div>
      
      {skill.description && (
        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
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
    <section id="skills" className="py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-container relative">
        <h2 className="section-title mb-16 animate-fade-up">
          Professional Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass-card p-8 animate-fade-up group"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border/50">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">
                  {category.name}
                </h3>
              </div>
              
              <div className="space-y-2">
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
