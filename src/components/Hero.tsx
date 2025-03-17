
import React from "react";
import { ArrowDown } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Show a toast message explaining how to replace the PDF
    toast({
      title: "Resume Download",
      description: "This is a placeholder PDF. Replace it with your actual resume in the public folder.",
      duration: 5000,
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-32"
    >
      <div className="absolute inset-0 -z-10 bg-hero-gradient"></div>
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-balance leading-tight">
            Hello, I'm <span className="text-primary">John Doe</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-light text-muted-foreground">
            Data Analyst
          </h2>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-balance">
            I transform complex data into actionable insights that drive business decisions and strategic growth.
          </p>
          
          <div className="pt-8 flex justify-center space-x-4">
            <a
              href="#contact"
              className="px-8 py-3 premium-gradient text-white rounded-full premium-shadow hover:opacity-95 transform hover:-translate-y-1 transition-all duration-300"
            >
              Get in touch
            </a>
            
            <a
              href="/john-doe-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white border border-primary/20 text-primary rounded-full hover:border-primary/50 hover:bg-accent transition-all duration-300 premium-shadow"
              download="John-Doe-Resume.pdf"
              onClick={handleResumeClick}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 animate-subtle-pulse"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="text-primary w-10 h-10" />
      </button>
    </section>
  );
};

export default Hero;
