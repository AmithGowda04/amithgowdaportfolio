
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
    company: "Invensis Technologies (BMC)",
    position: "Data Analyst",
    period: "May 2022 - Present",
    description: [
      "Enhanced forecasting accuracy by implementing advanced analytical models for Bhoomi applications.",
      "Designed and optimized SQL data models, improving data integrity and accuracy.",
      "Developed interactive BI dashboards, delivering actionable insights on project performance and key metrics.",
      "Conducted quality control for Bhoomi applications, ensuring compliance with usability and functionality standards.",
      "Led training programs for government officials and stakeholders to strengthen data-driven decision-making."
    ],
    current: true
  },
  {
    company: "Amazon",
    position: "Catalog Associate",
    period: "Jun 2020 - May 2022",
    description: [
      "Optimized pricing accuracy across multiple platforms, increasing operational efficiency by 15%.",
      "Conducted data analysis & market research, providing insights to improve strategic decision-making.",
      "Collaborated with business, automation, and technology teams to drive process improvements and enhance system performance."
      ]
  },
  {
    company: "Pitstop",
    position: "Junior Data Analyst",
    period: "Dec 2019 - May 2020",
    description: [
      "Designed data-driven strategies to enhance operational processes and customer experience for Pitstop, an Indian automotive start-up",
      "Built analytics models to identify inefficiencies in service delivery, improving customer satisfaction and operational efficiency.",
      "Collaborated with cross-functional teams to implement process improvements, leading to measurable gains in service quality."
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
