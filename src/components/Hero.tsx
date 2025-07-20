
import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  
  // Enhanced futuristic particles animation
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
        this.baseSize = Math.random() * 3 + 1;
        this.size = this.baseSize;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.pulse = Math.random() * Math.PI * 2;
        this.opacity = Math.random() * 0.8 + 0.2;
        
        // Enhanced color palette with HSL for dynamic effects
        this.hue = Math.random() * 60 + 200; // Blue to purple range
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
        this.size = this.baseSize + Math.sin(this.pulse) * 0.5;
        
        // Dynamic color shifting
        this.hue += 0.2;
        if (this.hue > 260) this.hue = 200;
        this.color = `hsl(${this.hue}, 70%, 60%)`;
        
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
        ctx.shadowBlur = 10;
        
        // Main particle
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner bright core
        ctx.fillStyle = 'white';
        ctx.globalAlpha = this.opacity * 0.3;
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
            const opacity = (1 - (distance / maxDistance)) * 0.3;
            
            // Create gradient line
            const gradient = ctx.createLinearGradient(
              particlesArray[a].x, particlesArray[a].y,
              particlesArray[b].x, particlesArray[b].y
            );
            gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(147, 51, 234, ${opacity})`);
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
    
    // Add scanning line effect
    let scanLine = 0;
    const drawScanLine = () => {
      if (!ctx) return;
      
      scanLine += 2;
      if (scanLine > canvas.height + 50) scanLine = -50;
      
      const gradient = ctx.createLinearGradient(0, scanLine - 20, 0, scanLine + 20);
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0)');
      gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.1)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanLine - 20, canvas.width, 40);
    };
    
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw scanning line
      drawScanLine();
      
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
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 -z-10"
      />
      <div className="absolute inset-0 -z-10 bg-hero-gradient opacity-90"></div>
      
      {/* Additional futuristic overlay effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center max-w-4xl z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-balance leading-tight animate-fade-up">
            Hello, I'm <span className="text-primary relative">
              Amith Gowda
              <span className="absolute -inset-2 bg-primary/10 rounded-lg blur-xl animate-pulse opacity-50"></span>
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-light text-muted-foreground animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Data Analyst
          </h2>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-balance animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Turning Data into Decisions, One Insight at a Time!
          </p>
          
          <div className="pt-8 flex justify-center space-x-4 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="#contact"
              className="px-8 py-3 premium-gradient text-white rounded-full premium-shadow hover:opacity-95 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Get in touch
            </a>
            
            <a
              href="https://drive.google.com/uc?export=download&id=1tLW1EIJul0ZX5AWwTp1_ySbwj3lYKf3u"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/80 backdrop-blur-sm border border-primary/20 text-primary rounded-full hover:border-primary/50 hover:bg-white/90 transition-all duration-300 premium-shadow hover:shadow-lg"
              download="Amith-Gowda-Resume.pdf"
              onClick={handleResumeClick}
            >
              Amith Gowda Resume
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 animate-subtle-pulse hover:scale-110 transition-transform duration-300"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="text-primary w-10 h-10 drop-shadow-lg" />
      </button>
    </section>
  );
};

export default Hero;
