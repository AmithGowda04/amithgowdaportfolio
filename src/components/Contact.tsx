import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

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
    className="glass-card p-6 flex flex-col items-center text-center group cursor-pointer card-hover"
    target={link?.startsWith("http") ? "_blank" : undefined}
    rel={link?.startsWith("http") ? "noopener noreferrer" : undefined}
  >
    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
      <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="text-xl font-semibold mb-1 text-foreground">{title}</h3>
    <p className="text-muted-foreground">{content}</p>
  </a>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:gowdaamith62@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
    toast({
      title: "Message Prepared",
      description: "Your email client should open with the message ready to send.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-title mx-auto">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Let's connect! I'm open to collaborations and opportunities.
          </p>
        </div>
        
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <ContactCard
            icon={Mail}
            title="Email"
            content="gowdaamith62@gmail.com"
            link="mailto:gowdaamith62@gmail.com"
          />
          
          <ContactCard
            icon={Phone}
            title="Phone"
            content="+91 9900251454"
            link="tel:+919900251454"
          />
          
          <ContactCard
            icon={MapPin}
            title="Location"
            content="Bangalore, India"
            link="https://www.google.com/maps/place/Bengaluru"
          />
        </div>
        
        {/* Contact Form */}
        <div className="max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="rounded-lg border-border focus:border-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="rounded-lg border-border focus:border-primary"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="rounded-lg border-border focus:border-primary resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-3 flex items-center justify-center gap-2 font-semibold"
              >
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-muted-foreground mb-6">Connect with me on social media</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com/in/amith-gowda"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 text-primary"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/amith-gowda"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 text-primary"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:gowdaamith62@gmail.com"
              className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 text-primary"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;