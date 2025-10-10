
import React from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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
    className="glass-card p-8 flex flex-col items-center text-center group cursor-pointer"
    target={link?.startsWith("http") ? "_blank" : undefined}
    rel={link?.startsWith("http") ? "noopener noreferrer" : undefined}
  >
    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-8 h-8 text-primary" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{content}</p>
  </a>
);

const Contact = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation(0.1);
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation(0.1);
  const { ref: card3Ref, isVisible: card3Visible } = useScrollAnimation(0.1);
  const { ref: card4Ref, isVisible: card4Visible } = useScrollAnimation(0.1);
  
  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className={cn(
        "py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden transition-all duration-1000",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-container relative">
        <h2 className="section-title">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto">
          <div ref={card1Ref} className={cn(
            "transition-all duration-700 delay-100",
            card1Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <ContactCard
              icon={Mail}
              title="Email"
              content="gowdaamith62@gmail.com"
              link="mailto:gowdaamith62@gmail.com"
            />
          </div>
          
          <div ref={card2Ref} className={cn(
            "transition-all duration-700 delay-200",
            card2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <ContactCard
              icon={Phone}
              title="Phone"
              content="+91 9900251454"
              link="tel:+919900251454"
            />
          </div>
          
          <div ref={card3Ref} className={cn(
            "transition-all duration-700 delay-300",
            card3Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <ContactCard
              icon={MapPin}
              title="Location"
              content="Bangalore, India"
              link="https://www.google.com/maps/place/Bengaluru"
            />
          </div>
          
          <div ref={card4Ref} className={cn(
            "transition-all duration-700 delay-[400ms]",
            card4Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <ContactCard
              icon={Linkedin}
              title="LinkedIn"
              content="linkedin.com/in/amith-gowda"
              link="https://www.linkedin.com/in/amith-gowda"
            />
          </div>
        </div>
        
        <div className="text-center max-w-2xl mx-auto glass-card p-10">
          <p className="text-lg text-foreground leading-relaxed">
            I'm currently available for full-time data analyst positions. 
            Feel free to reach out if you'd like to discuss how my data analysis skills can help your organization 
            make better data-driven decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
