
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
                I'm a passionate Data Analyst with 5 years of experience in turning complex data sets into clear, actionable insights. I specialize in SQL, Excel, Power BI, and Data Visualization to deliver comprehensive analytical solutions.
              </p>
              
              <p className="text-lg">
                My approach combines statistical analysis with business acumen, resulting in data-driven recommendations that solve real business problems and improve decision-making processes.
              </p>
              
              <p className="text-lg">
                Beyond data analysis, I enjoy exploring new visualization techniques, staying current with the latest analytical tools, and contributing to data-focused communities.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <AboutCard
              title="Education"
              content="Bachelor of Science in Data Science from Stanford University (2015-2019)"
              className="md:translate-y-8"
            />
            
            <AboutCard
              title="Location"
              content="Bangalore, India"
            />
            
            <AboutCard
              title="Experience"
              content="3+ years in data analysis with expertise in SQL, Excel, Power BI, and business intelligence reporting"
            />
            
            <AboutCard
              title="Interests"
              content="Data Visualization, Statistical Modeling, Business Intelligence, Data-Driven Decision Making"
              className="md:translate-y-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
