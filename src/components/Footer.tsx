
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
    <footer className="py-16 bg-gradient-to-b from-background to-secondary/40 relative border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full premium-gradient text-white flex items-center justify-center premium-shadow hover:scale-110 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </button>
          
          <div className="text-3xl font-display font-bold mb-8 mt-4">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Amith Gowda
            </span>
          </div>
          
          <div className="flex space-x-4 mb-10">
            <a
              href="https://www.linkedin.com/in/amith-gowda/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-primary hover:text-white hover:bg-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
            <a
              href="https://github.com/AmithGowda04"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-primary hover:text-white hover:bg-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            
            <a
              href="mailto:gowdaamith62@gmail.com"
              className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-primary hover:text-white hover:bg-primary transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-muted-foreground text-sm">
            &copy; {currentYear} Amith Gowda. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
