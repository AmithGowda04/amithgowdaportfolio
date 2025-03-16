
import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-32"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/20 to-white"></div>
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-balance leading-tight">
            Hello, I'm <span className="text-primary">Your Name</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-light text-muted-foreground">
            Senior Software Engineer
          </h2>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-balance">
            I create elegant, user-centered digital experiences with a focus on
            performance and accessibility.
          </p>
          
          <div className="pt-8 flex justify-center space-x-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Get in touch
            </a>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-primary/50 text-primary rounded-full hover:border-primary transition-all duration-300"
            >
              View Resume
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
