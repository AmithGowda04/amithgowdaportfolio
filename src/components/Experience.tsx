
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
      "Improved Bhoomi application forecasting accuracy by implementing advanced analytical practices, reducing error rates and increasing decision confidence.",
      "Built SQL-based data models and integrity checks across large land record datasets, improving data accuracy and compliance with government standards.",
      "Developed interactive BI dashboards, delivering actionable insights on project performance and key metrics.",
      "Performed the quality control of the Bhoomi applications in terms of usability, functionality and compliance with standards",
      " Delivered training and capacity-building programs to 200+ government officials and land administrators across Karnataka, improving adoption and reducing support dependency."
    ],
    current: true
  },
  {
    company: "Amazon",
    position: "Catalog Associate",
    period: "Jun 2020 - May 2022",
    description: [
      "Increased operational efficiency by 15% through process audits and defect detection automation.",
      "Implemented workflow improvements that cut defect-resolution turnaround by 10+ hours per cycle, enhancing responsiveness.",
      " Translated catalog issues into structured analytics, enabling KPI-driven corrective actions by business and tech teams."
      ]
  },
  {
    company: "Pitstop",
    position: "Junior Data Analyst",
    period: "Dec 2019 - May 2020",
    description: [
      "Formulated data analysis approaches to improve operational processes as well as customer experience at Pitstop, an Indian automotive start-up.",
      "Used the data to make improvements to the processes employed in service delivery which led to enhanced customer satisfaction and efficiency of operations.",
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
