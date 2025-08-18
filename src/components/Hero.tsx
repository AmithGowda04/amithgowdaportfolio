
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
      description: "Download starting for Amith Gowda's resume.",
      duration: 3000,
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-32 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/f861a3d3-e6a7-439b-bb39-352266cc7d17.png')`
        }}
      />
      
      {/* Dark Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 100%)'
        }}
      />
      
      {/* Semi-transparent blurred text container */}
      <div 
        className="container mx-auto px-8 py-12 text-center max-w-4xl z-10 rounded-3xl"
        style={{
          backgroundColor: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}
      >
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white text-balance leading-tight animate-fade-up">
            Amith Gowda
          </h1>
          
          <h2 className="text-xl md:text-2xl font-light text-white animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Data Analyst
          </h2>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white text-balance animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Turning Data into Decisions, One Insight at a Time!
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="#contact"
              className="px-8 py-3 premium-gradient text-white rounded-full premium-shadow hover:opacity-95 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Get in touch
            </a>
            
            <a
              href="https://drive.google.com/file/d/13P05rpEDwxS88xm0Fu4uArJOen2p7e6X/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full hover:border-white/50 hover:bg-white/30 transition-all duration-300 premium-shadow hover:shadow-lg"
              download="Amith-Gowda-Resume.pdf"
              onClick={handleResumeClick}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 animate-subtle-pulse hover:scale-110 transition-transform duration-300"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="text-white w-10 h-10 drop-shadow-lg" />
      </button>
    </section>
  );
};

export default Hero;
