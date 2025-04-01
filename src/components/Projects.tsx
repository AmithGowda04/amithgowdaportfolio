
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Personal Finance Dashboard",
    description: "A comprehensive financial tracking application with budget planning, expense categorization, and visual reports for better money management.",
    technologies: ["React", "TypeScript", "Chart.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    liveUrl: "https://finance-dashboard.example.com",
    githubUrl: "https://github.com/johndoe/finance-dashboard",
    featured: true
  },
  {
    title: "Recipe Finder App",
    description: "A mobile-responsive application that helps users find recipes based on ingredients they have at home, with filtering by dietary restrictions.",
    technologies: ["React", "Redux", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f",
    liveUrl: "https://recipe-finder.example.com",
    githubUrl: "https://github.com/johndoe/recipe-finder"
  },
  {
    title: "Real-time Chat Platform",
    description: "A scalable chat application supporting private messaging, group chats, and file sharing with end-to-end encryption.",
    technologies: ["Next.js", "Socket.io", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28",
    liveUrl: "https://chat-app.example.com",
    githubUrl: "https://github.com/johndoe/chat-platform",
    featured: true
  },
  {
    title: "Weather Visualization Tool",
    description: "An interactive dashboard showing global weather patterns with historical data comparison and forecasting features.",
    technologies: ["React", "D3.js", "Weather API", "Express"],
    image: "https://images.unsplash.com/photo-1530908295418-a12e326966ba",
    liveUrl: "https://weather-viz.example.com",
    githubUrl: "https://github.com/johndoe/weather-visualization"
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div 
      className={cn(
        "group relative rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg",
        project.featured ? "md:col-span-2" : ""
      )}
    >
      {/* Image with overlay */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-80" />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
            {project.title}
          </h3>
          
          <p className="text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                <span>Live Demo</span>
              </a>
            )}
            
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4 mr-1" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
