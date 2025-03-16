
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 1-5
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "JavaScript", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "React", level: 5 },
      { name: "HTML/CSS", level: 5 },
      { name: "Angular", level: 3 },
      { name: "Next.js", level: 4 },
      { name: "Redux", level: 4 },
      { name: "Tailwind CSS", level: 5 },
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Express", level: 4 },
      { name: "Python", level: 3 },
      { name: "Django", level: 3 },
      { name: "PostgreSQL", level: 4 },
      { name: "MongoDB", level: 4 },
      { name: "GraphQL", level: 3 },
      { name: "REST API", level: 5 },
    ]
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", level: 5 },
      { name: "Docker", level: 4 },
      { name: "AWS", level: 3 },
      { name: "CI/CD", level: 4 },
      { name: "Jest", level: 4 },
      { name: "Webpack", level: 3 },
      { name: "Figma", level: 3 },
      { name: "Jira", level: 4 },
    ]
  }
];

const SkillBar = ({ skill }: { skill: Skill }) => {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, []);

  return (
    <div className="space-y-1 group" ref={barRef}>
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">
          {skill.level * 20}%
        </span>
      </div>
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className={cn(
            "h-full bg-primary origin-left transition-all duration-1000 ease-out-expo",
            isVisible ? "w-[" + skill.level * 20 + "%]" : "w-0"
          )}
          style={{ 
            width: isVisible ? `${skill.level * 20}%` : "0%",
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-title mb-16 animate-fade-up">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b">
                {category.name}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
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
