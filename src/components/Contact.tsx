
import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ContactCard = ({ 
  icon: Icon, 
  title, 
  content, 
  link,
  onClick
}: { 
  icon: React.ElementType; 
  title: string; 
  content: string;
  link?: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="glass-card p-8 flex flex-col items-center text-center group cursor-pointer hover:scale-105 transition-all duration-300 w-full"
  >
    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
      <Icon className="w-8 h-8 text-primary" />
    </div>
    <h3 className="text-xl font-bold">{title}</h3>
  </button>
);

const Contact = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation(0.1);
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation(0.1);
  const { ref: card3Ref, isVisible: card3Visible } = useScrollAnimation(0.1);
  const { ref: card4Ref, isVisible: card4Visible } = useScrollAnimation(0.1);
  
  const [selectedContact, setSelectedContact] = useState<{
    title: string;
    content: string;
    link?: string;
    icon: React.ElementType;
  } | null>(null);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "gowdaamith62@gmail.com",
      link: "mailto:gowdaamith62@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9900251454",
      link: "tel:+919900251454"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Bangalore, India",
      link: "https://www.google.com/maps/place/Bengaluru"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "linkedin.com/in/amith-gowda",
      link: "https://www.linkedin.com/in/amith-gowda"
    }
  ];
  
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
          {contactInfo.map((contact, index) => {
            const refs = [card1Ref, card2Ref, card3Ref, card4Ref];
            const visibles = [card1Visible, card2Visible, card3Visible, card4Visible];
            const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-[400ms]'];
            
            return (
              <div 
                key={index}
                ref={refs[index]} 
                className={cn(
                  "transition-all duration-700",
                  delays[index],
                  visibles[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
              >
                <ContactCard
                  icon={contact.icon}
                  title={contact.title}
                  content={contact.content}
                  link={contact.link}
                  onClick={() => setSelectedContact(contact)}
                />
              </div>
            );
          })}
        </div>

        {/* Dialog for contact info */}
        <Dialog open={!!selectedContact} onOpenChange={(open) => !open && setSelectedContact(null)}>
          <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-xl border-primary/20">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3 text-2xl">
                {selectedContact && (
                  <>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <selectedContact.icon className="w-6 h-6 text-primary" />
                    </div>
                    {selectedContact.title}
                  </>
                )}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              {selectedContact && (
                <div className="space-y-4">
                  <p className="text-lg font-medium text-foreground break-all">
                    {selectedContact.content}
                  </p>
                  {selectedContact.link && (
                    <a
                      href={selectedContact.link}
                      target={selectedContact.link.startsWith("http") ? "_blank" : undefined}
                      rel={selectedContact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
                    >
                      {selectedContact.title === "Email" && "Send Email"}
                      {selectedContact.title === "Phone" && "Call Now"}
                      {selectedContact.title === "Location" && "View on Map"}
                      {selectedContact.title === "LinkedIn" && "Visit Profile"}
                      <selectedContact.icon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
        
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
