
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  specialNotes?: string;
}

const projects: Project[] = [
  {
    title: "Aadhar Seeding Application",
    description: "Led the integration of Aadhar data with Bhoomi land records in Karnataka for a state e-governance initiative. Automated database updates, improved data accuracy in record integration, and delivered training for hundreds of government stakeholders, resulting in faster, more reliable digital governance.",
    technologies: ["SQL", "Advanced Queries", "Stored Procedures", "Database Systems", "Excel", "Stakeholder Training"],
    liveUrl: "https://rdservices.karnataka.gov.in/service63",
    featured: true,
    specialNotes: "Featured project key to Karnataka's digital transformation, with large-scale user impact and substantial process improvement."
  },
  {
    title: "Hospital ER Analysis in Power BI",
    description: "Developed a multi-dashboard analytics tool for hospital emergency room operations. The dashboard tracks patient flow, wait times, satisfaction scores, and referral patterns. Its insights help the medical team identify bottlenecks, reduce patient wait times, and optimize resource allocation for improved service delivery.",
    technologies: ["Power BI", "DAX", "Power Query", "Excel", "Data Analytics"],
    liveUrl: "https://drive.google.com/file/d/1uTf9O4RqmWNrIzBO5UIR0d5aXEGAufV_/view?usp=sharing",
    featured: true,
    specialNotes: "This project directly improved patient care by reducing ER wait times by 15%. It is one of my proudest contributions as clinical staff began using data insights for daily operational improvements."
  },
  {
    title: "Parihara Project",
    description: "Supported the design and launch of an efficient digital system for disbursing financial relief to drought-affected farmers. Ensured data integrity in the land records system, validated records, and reduced compensation disbursement errors, resulting in timely and transparent financial aid.",
    technologies: ["SQL", "Excel", "Data Validation", "Reporting", "Government Systems"],
    liveUrl: "https://parihara.karnataka.gov.in/Pariharahome/",
    featured: true,
    specialNotes: "Proud to contribute to a socially impactful initiative that directly benefited thousands of farmers and improved transparency in relief distribution."
  },
  {
    title: "Revenue Commissionerate Website Redesign",
    description: "Redesigned the Revenue Commissionerate of Karnataka's website using WordPress to improve accessibility, user engagement, and ease of navigation. Delivered a modern, mobile-responsive layout with updated features including a news section, event calendar, and contact form.",
    technologies: ["WordPress", "CSS/HTML", "Theme Customization", "Plugins", "Responsive Design"],
    liveUrl: "https://revenuecommissionerate.karnataka.gov.in/",
    specialNotes: "While not a core analytics project, it was valuable for strengthening technical flexibility and client communication skills."
  },
  {
    title: "COVID-19 Analysis Dashboard",
    description: "Built an interactive Tableau dashboard analyzing COVID-19 cases and vaccination trends across India. Applied time-series analysis, parameters, and interactive filters to uncover regional trends and correlations between case spikes and vaccination rollout phases.",
    technologies: ["Tableau", "Data Visualization", "Time Series", "Analytics", "Public Health Data"],
    liveUrl: "https://public.tableau.com/app/profile/amith.gowda.s/viz/Covid19Analysis_17590053856060",
    featured: true,
    specialNotes: "The dashboard provided clear visual insights into pandemic progression, helping users track daily cases and vaccination rates with dynamic drill-downs."
  },
  {
    title: "HR Analytics Dashboard",
    description: "Developed a workforce analytics dashboard in Tableau to track employee attrition, hiring velocity, and performance metrics. Designed KPI-driven views with parameters and interactive filters to support HR teams in data-driven decision-making.",
    technologies: ["Tableau", "Data Modeling", "KPI Dashboards", "Storytelling", "Analytics"],
    liveUrl: "https://github.com/AmithGowda04/HR-analytics-Dashboard",
    featured: true,
    specialNotes: "Enhanced HR's visibility into workforce trends and improved data-based planning for recruitment and retention."
  },
  {
    title: "Netflix Dashboard",
    description: "Created an interactive Tableau dashboard analyzing streaming performance, viewership trends, and genre preferences. Integrated parameters and LOD calculations to deliver user-driven insights on top-performing content and audience engagement.",
    technologies: ["Tableau", "LOD Calculations", "Data Analytics", "Visualization", "Entertainment Data"],
    liveUrl: "https://github.com/AmithGowda04/Netflix-Dashboard-Tableau",
    featured: true,
    specialNotes: "Demonstrated strong storytelling and design principles to make data insights more actionable for content analysis."
  },
  {
    title: "Blinkit Sales Analysis Dashboard",
    description: "Built a Power BI dashboard analyzing sales KPIs, customer ratings, and outlet performance trends. Implemented advanced DAX calculations and visual hierarchies for intuitive, filter-driven insights into sales operations and customer satisfaction.",
    technologies: ["Power BI", "DAX", "Power Query", "Excel", "Sales Analytics"],
    liveUrl: "https://github.com/AmithGowda04/Blinkit-Sales-Analysis",
    featured: true,
    specialNotes: "Enabled stakeholders to monitor outlet performance and identify opportunities for improving customer experience."
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div 
      className={cn(
        "group bg-card border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20",
        project.featured ? "md:col-span-2" : ""
      )}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground">
            {project.title}
          </h3>
          {project.featured && (
            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
              Featured
            </span>
          )}
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        
        {project.specialNotes && (
          <div className="p-3 bg-secondary/50 rounded-lg border-l-4 border-primary">
            <p className="text-sm text-muted-foreground italic">
              {project.specialNotes}
            </p>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex space-x-4 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                <span>View Project</span>
              </a>
            )}
            
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                <Github className="w-4 h-4 mr-2" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);
  
  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className={cn(
        "py-20 bg-secondary/30 transition-all duration-1000",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="section-container">
        <h2 className="section-title">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => {
            const { ref: projectRef, isVisible: projectVisible } = useScrollAnimation(0.1);
            return (
              <div 
                key={index}
                ref={projectRef}
                className={cn(
                  "transition-all duration-700",
                  projectVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
