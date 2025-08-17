import React from "react";
import { MapPin, GraduationCap, Calendar, Heart } from "lucide-react";

const AboutCard = ({ 
  icon: Icon,
  title, 
  content 
}: { 
  icon: React.ElementType;
  title: string; 
  content: string;
}) => (
  <div className="glass-card p-6 text-center space-y-3">
    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="font-semibold text-foreground">{title}</h3>
    <p className="text-muted-foreground text-sm">{content}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="section-container">
        <h2 className="section-title text-center animate-fade-up">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Photo */}
          <div className="order-2 lg:order-1 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-teal/20 rounded-2xl flex items-center justify-center">
                <div className="w-72 h-72 bg-gradient-to-br from-primary to-teal rounded-xl flex items-center justify-center">
                  <span className="text-6xl text-white font-bold">AG</span>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-teal/20 rounded-3xl blur-xl -z-10"></div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a data enthusiast passionate about transforming raw data into actionable insights. 
                Skilled in SQL, Power BI, Tableau, and Python for data analysis and visualization.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With experience in government projects and private sector analytics, I specialize in 
                creating data-driven solutions that improve decision-making processes and operational efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AboutCard
                icon={GraduationCap}
                title="Education"
                content="Data Analytics & Computer Science Background"
              />
              
              <AboutCard
                icon={MapPin}
                title="Location"
                content="Bangalore, India"
              />
              
              <AboutCard
                icon={Calendar}
                title="Experience"
                content="2+ Years in Data Analytics"
              />
              
              <AboutCard
                icon={Heart}
                title="Interests"
                content="Data Visualization, Machine Learning, Business Intelligence"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;