
import React from "react";
import { Linkedin, Github, Twitter, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-secondary/40 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
          
          <div className="text-2xl font-display font-bold mb-6">
            Amith <span className="text-primary">Gowda</span>
          </div>
          
          <div className="flex space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/in/amith-gowda/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
            <a
              href="https://github.com/AmithGowda04"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            
            <a
              href="https://twitter.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            
            <a
              href="mailto:john.doe@example.com"
              className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-muted-foreground text-sm">
            &copy; {currentYear} John Doe. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
