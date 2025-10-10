
import React from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AboutCard = ({ title, content, className }: { title: string; content: string; className?: string }) => (
  <div className={cn("glass-card p-8 group", className)}>
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    <div className="relative">
      <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mb-4" />
      <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{content}</p>
    </div>
  </div>
);

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);
  const { ref: cardRef1, isVisible: cardVisible1 } = useScrollAnimation(0.1);
  const { ref: cardRef2, isVisible: cardVisible2 } = useScrollAnimation(0.1);
  const { ref: cardRef3, isVisible: cardVisible3 } = useScrollAnimation(0.1);
  const { ref: cardRef4, isVisible: cardVisible4 } = useScrollAnimation(0.1);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className={cn(
        "py-24 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background transition-all duration-1000",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-container relative">
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
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div ref={cardRef1} className={cn(
              "transition-all duration-700 delay-100",
              cardVisible1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}>
              <AboutCard
                title="Education"
                content="Bachelor of Engineering in Computer Science – Sri Venkateswara College of Engineering (2015–2019)
                CGPA: 6.7/10"
                className="md:translate-y-8"
              />
            </div>
            
            <div ref={cardRef2} className={cn(
              "transition-all duration-700 delay-200",
              cardVisible2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}>
              <AboutCard
                title="Location"
                content="Bangalore, India – Open to remote and global opportunities"
              />
            </div>
            
            <div ref={cardRef3} className={cn(
              "transition-all duration-700 delay-300",
              cardVisible3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}>
              <AboutCard
                title="Experience"
                content="4+ years in data analysis with proven expertise in SQL,Excel,Power BI, and business intelligence reporting"
              />
            </div>
            
            <div ref={cardRef4} className={cn(
              "transition-all duration-700 delay-[400ms]",
              cardVisible4 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}>
              <AboutCard
                title="Interests"
                content="Data Visualization, Business Intelligence, Predictive Analytics, Statistical Modeling, Data-Driven Decision Making, Exploring Emerging Tools (Python, Tableau, Grafana)"
                className="md:translate-y-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
