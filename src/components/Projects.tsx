
import React, { useState } from "react";
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
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product catalog, cart functionality, user authentication, and payment processing.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, task assignments, and progress tracking.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Healthcare Portal",
    description: "A patient management system for healthcare providers with appointment scheduling and medical record tracking.",
    technologies: ["Angular", "TypeScript", "Spring Boot", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Financial Dashboard",
    description: "An interactive dashboard for tracking investments and financial goals with data visualization.",
    technologies: ["React", "D3.js", "Node.js", "Express"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    liveUrl: "#",
    githubUrl: "#"
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "group relative rounded-xl overflow-hidden transition-all duration-slow shadow-sm hover:shadow-lg",
        project.featured ? "md:col-span-2" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with overlay */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-80" />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end transition-all duration-slow">
        <div className={cn(
          "transform transition-all duration-slow",
          isHovered ? "translate-y-0" : "translate-y-8"
        )}>
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
            {project.title}
          </h3>
          
          <p className={cn(
            "text-white/80 mb-4 transition-all duration-slow",
            isHovered ? "opacity-100" : "opacity-0"
          )}>
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
          
          <div className={cn(
            "flex space-x-4 transition-all duration-slow",
            isHovered ? "opacity-100" : "opacity-0"
          )}>
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
        <h2 className="section-title animate-fade-up">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
