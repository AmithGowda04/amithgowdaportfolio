
import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string[];
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    company: "TechCorp Industries",
    position: "Senior Software Engineer",
    period: "Jan 2020 - Present",
    description: [
      "Led a team of 5 developers in rebuilding the company's flagship product using React and Node.js",
      "Implemented CI/CD pipelines reducing deployment time by 70%",
      "Architected scalable backend services using microservices architecture",
      "Mentored junior developers through code reviews and pair programming sessions"
    ],
    current: true
  },
  {
    company: "Innovate Solutions",
    position: "Full Stack Developer",
    period: "Mar 2018 - Dec 2019",
    description: [
      "Developed and maintained multiple client applications using Angular and Spring Boot",
      "Optimized database queries improving application performance by 40%",
      "Integrated third-party APIs for payment processing and data analytics",
      "Collaborated with designers to implement responsive UI components"
    ]
  },
  {
    company: "Digital Frontiers",
    position: "Junior Developer",
    period: "Jun 2016 - Feb 2018",
    description: [
      "Assisted in developing web applications using JavaScript and PHP",
      "Fixed bugs and implemented new features in existing codebases",
      "Participated in daily stand-ups and sprint planning meetings",
      "Created technical documentation for internal use"
    ]
  }
];

const ExperienceItem = ({ item, index }: { item: ExperienceItem; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={cn(
        "group relative px-6 py-8 border-l-2 animate-fade-up",
        item.current ? "border-primary" : "border-border"
      )}
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      {/* Timeline dot */}
      <div 
        className={cn(
          "absolute -left-[9px] top-9 w-4 h-4 rounded-full transition-all duration-300",
          item.current ? "bg-primary scale-125" : "bg-muted group-hover:bg-primary"
        )}
      />
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {item.position}
          </h3>
          <span className="text-sm text-muted-foreground">
            {item.period}
          </span>
        </div>
        
        <p className="text-primary font-medium">
          {item.company}
        </p>
        
        <ul className="mt-4 space-y-2">
          {item.description.map((point, i) => (
            <li key={i} className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span className="text-muted-foreground">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title animate-fade-up">
          Work Experience
        </h2>
        
        <div className="max-w-3xl mx-auto mt-16">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              item={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
