
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
                I'm a passionate Data Analyst with 4+ years of experience transforming complex datasets into actionable insights that drive measurable business impact. Skilled in SQL, Excel, Power BI,Tableau and Data Visualization, I specialize in uncovering trends, improving processes, and enabling smarter decision-making.
              </p>
              
              <p className="text-lg">
                My approach blends statistical analysis with business acumen, delivering data-driven recommendations that have streamlined reporting efficiency and improved decision-making outcomes.
              </p>
              
              <p className="text-lg">
                Beyond analysis, I actively explore advanced visualization tools like Looker and Grafana, while enhancing my skills in Python for data analysis and automation. I enjoy contributing to data-driven communities and thrive on turning raw data into powerful stories that create value.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <AboutCard
              title="Education"
              content="Bachelor of Engineering in Computer Science – Sri Venkateswara College of Engineering (2015–2019)
              CGPA: 6.7/10"
              className="md:translate-y-8"
            />
            
            <AboutCard
              title="Location"
              content="Bangalore, India – Open to remote and global opportunities"
            />
            
            <AboutCard
              title="Experience"
              content="4+ years in data analysis with proven expertise in SQL,Excel,Power BI, and business intelligence reporting"
            />
            
            <AboutCard
              title="Interests"
              content="Data Visualization, Business Intelligence, Predictive Analytics, Statistical Modeling, Data-Driven Decision Making, Exploring Emerging Tools (Python, Tableau, Grafana)"
              className="md:translate-y-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
