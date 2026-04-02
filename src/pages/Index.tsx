import React from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useCursor } from "@/hooks/use-cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useScrollReveal();
  useCursor();

  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-ring" />

      <Navbar />
      <main>
        <Hero />
        <StatsBand />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
