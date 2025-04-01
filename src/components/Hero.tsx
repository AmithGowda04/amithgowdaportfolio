
import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Futuristic particles animation
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
    
    // Create particles
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(window.innerWidth / 10, 100);
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        
        // Use futuristic color palette
        const colors = ['#1EAEDB', '#33C3F0', '#8B5CF6', '#F97316', '#D946EF'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap around edges
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    const connectParticles = () => {
      if (!ctx) return;
      const maxDistance = 150;
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
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
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      connectParticles();
      requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
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
      description: "This is a placeholder PDF. Replace it with your actual resume in the public folder.",
      duration: 5000,
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
      <div className="container mx-auto px-4 text-center max-w-4xl z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-balance leading-tight">
            Hello, I'm <span className="text-primary">Amith Gowda</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-light text-muted-foreground">
            Data Analyst
          </h2>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-balance">
          Turning Data into Decisions, One Insight at a Time!
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
