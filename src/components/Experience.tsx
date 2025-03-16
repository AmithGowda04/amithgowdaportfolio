
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
    company: "Acme Technologies",
    position: "Senior Frontend Developer",
    period: "Jan 2022 - Present",
    description: [
      "Lead the front-end development of the company's flagship SaaS product, implementing modern React patterns and optimizing performance",
      "Migrated legacy codebase to TypeScript and Next.js, reducing bundle size by 35% and improving Lighthouse scores",
      "Established a component library used across multiple projects, increasing development speed by 40%",
      "Mentored junior developers and conducted technical interviews for new hires"
    ],
    current: true
  },
  {
    company: "DevCorp Solutions",
    position: "Full Stack Developer",
    period: "Mar 2020 - Dec 2021",
    description: [
      "Developed RESTful APIs using Node.js and Express, integrated with MongoDB and PostgreSQL databases",
      "Built responsive web applications with React, Redux, and Material UI",
      "Implemented CI/CD pipelines with GitHub Actions, reducing deployment time by 60%",
      "Collaborated with UX designers to implement accessible user interfaces following WCAG guidelines"
    ]
  },
  {
    company: "StartUp Innovations",
    position: "Junior Web Developer",
    period: "Jun 2018 - Feb 2020",
    description: [
      "Created and maintained company websites and e-commerce platforms using JavaScript, HTML, and CSS",
      "Implemented analytics tracking to measure user engagement and conversion rates",
      "Collaborated with marketing team to optimize landing pages for better conversion",
      "Participated in agile development process, including daily standups and sprint planning"
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
