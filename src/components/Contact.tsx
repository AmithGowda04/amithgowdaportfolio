
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

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
    className="glass-card p-6 flex flex-col items-center text-center group cursor-pointer transition-all duration-300 hover:shadow-md"
    target={link?.startsWith("http") ? "_blank" : undefined}
    rel={link?.startsWith("http") ? "noopener noreferrer" : undefined}
  >
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-muted-foreground">{content}</p>
  </a>
);

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      console.log("Form submitted:", formState);
      
      // Reset form after submission
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset status after a delay
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <h2 className="section-title animate-fade-up">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <ContactCard
            icon={Mail}
            title="Email"
            content="hello@example.com"
            link="mailto:hello@example.com"
          />
          
          <ContactCard
            icon={Phone}
            title="Phone"
            content="+1 (555) 123-4567"
            link="tel:+15551234567"
          />
          
          <ContactCard
            icon={MapPin}
            title="Location"
            content="San Francisco, California"
            link="https://maps.google.com/?q=San+Francisco"
          />
        </div>
        
        <div className="max-w-3xl mx-auto glass-card p-8 rounded-2xl shadow-sm animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-2xl font-semibold text-center mb-8">
            Send me a message
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300 resize-none"
                placeholder="Your message here..."
              />
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-primary text-white rounded-lg flex items-center space-x-2 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
            
            {submitStatus === "success" && (
              <div className="text-center py-3 px-4 bg-green-100 text-green-800 rounded-lg">
                Your message has been sent successfully!
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="text-center py-3 px-4 bg-red-100 text-red-800 rounded-lg">
                There was an error sending your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
