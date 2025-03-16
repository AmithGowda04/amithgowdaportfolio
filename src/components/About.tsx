
import React from "react";
import { cn } from "@/lib/utils";

const AboutCard = ({ title, content, className }: { title: string; content: string; className?: string }) => (
  <div className={cn("glass-card p-6 transition-all duration-default hover:shadow-md", className)}>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{content}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="section-title animate-fade-up" style={{ animationDelay: "0.1s" }}>
              About Me
            </h2>
            
            <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-lg">
                I'm a passionate Full Stack Developer with 5 years of experience building web applications. I specialize in React, Node.js, and modern JavaScript frameworks to deliver responsive and scalable solutions.
              </p>
              
              <p className="text-lg">
                My approach combines technical expertise with a strong focus on user needs, resulting in applications that are not only functional but also intuitive and enjoyable to use.
              </p>
              
              <p className="text-lg">
                Beyond coding, I enjoy hiking, photography, and exploring new technologies through side projects and open source contributions.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <AboutCard
              title="Education"
              content="Bachelor of Science in Computer Science from Stanford University (2015-2019)"
              className="md:translate-y-8"
            />
            
            <AboutCard
              title="Location"
              content="San Francisco, California"
            />
            
            <AboutCard
              title="Experience"
              content="5+ years in full stack development with expertise in web applications, APIs, and cloud infrastructure"
            />
            
            <AboutCard
              title="Interests"
              content="Web Performance, Accessibility, Cloud Architecture, Open Source"
              className="md:translate-y-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
