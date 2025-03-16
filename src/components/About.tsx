
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
                I'm a passionate Software Engineer with 7+ years of experience in building exceptional digital experiences. My expertise spans frontend and backend development, with a strong focus on creating intuitive and performant applications.
              </p>
              
              <p className="text-lg">
                I believe that great software is not just about writing code – it's about solving problems and creating value for users. This philosophy guides my approach to every project I undertake.
              </p>
              
              <p className="text-lg">
                When I'm not coding, you'll find me hiking in the mountains, reading science fiction, or experimenting with new cooking recipes.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <AboutCard
              title="Education"
              content="Bachelor of Science in Computer Science from University of Technology (2015-2019)"
              className="md:translate-y-8"
            />
            
            <AboutCard
              title="Location"
              content="San Francisco, California"
            />
            
            <AboutCard
              title="Experience"
              content="7+ years in software development across various industries including fintech, e-commerce, and healthcare"
            />
            
            <AboutCard
              title="Interests"
              content="UI/UX Design, System Architecture, Cloud Computing, DevOps"
              className="md:translate-y-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
