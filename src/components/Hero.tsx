
import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  
  // Enhanced particles animation for navy-teal theme
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full width/height
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Mouse tracking for interaction - throttled for performance
    let mouseThrottle = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseThrottle) {
        mouseRef.current.x = e.clientX;
        mouseRef.current.y = e.clientY;
        mouseThrottle = true;
        setTimeout(() => mouseThrottle = false, 16); // ~60fps
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Create particles - reduced for better performance
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(window.innerWidth / 20, 50);
    
    class Particle {
      x: number;
      y: number;
      size: number;
      baseSize: number;
      speedX: number;
      speedY: number;
      color: string;
      hue: number;
      opacity: number;
      pulse: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseSize = Math.random() * 2 + 0.5;
        this.size = this.baseSize;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.pulse = Math.random() * Math.PI * 2;
        this.opacity = Math.random() * 0.6 + 0.2;
        
        // Teal to navy color palette
        this.hue = Math.random() * 60 + 174; // Teal to cyan range
        this.color = `hsl(${this.hue}, 70%, 60%)`;
      }
      
      update() {
        // Mouse interaction - particles attracted to mouse
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          this.speedX += (dx / distance) * force * 0.001;
          this.speedY += (dy / distance) * force * 0.001;
        }
        
        // Apply movement with slight friction
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedX *= 0.99;
        this.speedY *= 0.99;
        
        // Pulsing effect
        this.pulse += 0.02;
        this.size = this.baseSize + Math.sin(this.pulse) * 0.3;
        
        // Wrap around edges with smooth transition
        if (this.x > canvas.width + 50) this.x = -50;
        else if (this.x < -50) this.x = canvas.width + 50;
        
        if (this.y > canvas.height + 50) this.y = -50;
        else if (this.y < -50) this.y = canvas.height + 50;
      }
      
      draw() {
        if (!ctx) return;
        
        // Glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 8;
        
        // Main particle
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner bright core
        ctx.fillStyle = 'white';
        ctx.globalAlpha = this.opacity * 0.5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.3, 0, Math.PI * 2);
        ctx.fill();
        
        // Reset shadow
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }
    }
    
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    const connectParticles = () => {
      if (!ctx) return;
      const maxDistance = 80;
      
      // Limit connections for performance
      for (let a = 0; a < particlesArray.length; a += 2) {
        for (let b = a + 1; b < particlesArray.length; b += 2) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (1 - (distance / maxDistance)) * 0.2;
            
            // Create gradient line
            const gradient = ctx.createLinearGradient(
              particlesArray[a].x, particlesArray[a].y,
              particlesArray[b].x, particlesArray[b].y
            );
            gradient.addColorStop(0, `rgba(45, 212, 191, ${opacity})`);
            gradient.addColorStop(1, `rgba(59, 130, 246, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      // Draw connections
      connectParticles();
      
      requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    toast({
      title: "Resume Download",
      description: "Download starting for Amith Gowda's resume.",
      duration: 3000,
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-32 overflow-hidden hero-gradient"
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 opacity-30"
      />
      
      <div className="container mx-auto px-4 text-center max-w-5xl z-10 relative">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight animate-fade-up">
            Amith Gowda | <span className="text-teal-300">Data Analyst</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Turning data into insights with SQL, Python, Power BI & Tableau
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-white text-navy font-semibold rounded-full hover:bg-white/90 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            
            <a
              href="https://drive.google.com/file/d/13P05rpEDwxS88xm0Fu4uArJOen2p7e6X/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              download="Amith-Gowda-Resume.pdf"
              onClick={handleResumeClick}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToProjects}
        className="absolute bottom-12 animate-subtle-pulse hover:scale-110 transition-transform duration-300 text-white"
        aria-label="Scroll to Projects section"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
