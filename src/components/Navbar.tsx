
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects with debouncing for better performance
  useEffect(() => {
    let scrollTimeout: number | undefined;
    
    const handleScroll = () => {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
      
      scrollTimeout = window.requestAnimationFrame(() => {
        // Update navbar style based on scroll position
        setScrolled(window.scrollY > 20);
        
        // Update active section based on scroll position
        const sections = document.querySelectorAll("section[id]");
        
        let currentSection = "home";
        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop - 100;
          if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id") || "home";
          }
        });
        
        setActiveSection(currentSection);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
    };
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? 
          "bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20 py-3" : 
          "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-display font-bold">
          <span className={cn(
            "relative transition-colors duration-300",
            scrolled ? "text-primary" : "text-white"
          )}>
            Portfolio
            <span className="absolute -inset-2 rounded-full blur-lg opacity-20 bg-primary animate-pulse" style={{ animationDuration: '3s' }}></span>
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "nav-item relative",
                activeSection === item.id ? "nav-item-active" : ""
              )}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -inset-1 rounded-md blur-sm opacity-10 bg-primary animate-pulse" style={{ animationDuration: '2s' }}></span>
              )}
            </button>
          ))}
        </nav>
        
        <button className="md:hidden">
          {/* Mobile menu button */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
