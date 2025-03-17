
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactCard = ({ 
  icon: Icon, 
  title, 
  content, 
  link
}: { 
  icon: React.ElementType; 
  title: string; 
  content: string;
  link?: string;
}) => (
  <a 
    href={link} 
    className="glass-card p-6 flex flex-col items-center text-center group cursor-pointer transition-all duration-300 premium-shadow hover:translate-y-[-5px]"
    target={link?.startsWith("http") ? "_blank" : undefined}
    rel={link?.startsWith("http") ? "noopener noreferrer" : undefined}
  >
    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
      <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="text-xl font-semibold mb-1">{title}</h3>
    <p className="text-muted-foreground">{content}</p>
  </a>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-section-gradient">
      <div className="section-container">
        <h2 className="section-title animate-fade-up">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <ContactCard
            icon={Mail}
            title="Email"
            content="john.doe@example.com"
            link="mailto:john.doe@example.com"
          />
          
          <ContactCard
            icon={Phone}
            title="Phone"
            content="+1 (123) 456-7890"
            link="tel:+11234567890"
          />
          
          <ContactCard
            icon={MapPin}
            title="Location"
            content="San Francisco, California"
            link="https://maps.google.com/?q=San+Francisco"
          />
        </div>
        
        <div className="text-center max-w-2xl mx-auto animate-fade-up bg-white/50 p-8 rounded-2xl premium-shadow backdrop-blur-sm" style={{ animationDelay: "0.2s" }}>
          <p className="text-lg text-foreground">
            I'm currently available for full-time data analyst positions or consulting opportunities. 
            Feel free to reach out if you'd like to discuss how my data analysis skills can help your organization 
            make better data-driven decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
