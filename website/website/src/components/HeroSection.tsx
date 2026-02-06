import { GaitVisualization } from "./GaitVisualization";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            <div 
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Clinical decision support
              </span>
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight opacity-0 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              Gait analysis that{' '}
              <span className="text-gradient-primary">supports</span>{' '}
              clinical insight
            </h1>

            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed opacity-0 animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              We provide physicians with objective movement data and pattern analysis. 
              No diagnosis—just clear, actionable information to inform your clinical judgment.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground">
                View Documentation
              </Button>
            </div>

            <div 
              className="flex items-center gap-8 pt-4 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="text-center">
                <div className="text-2xl font-semibold text-foreground">FDA</div>
                <div className="text-xs text-muted-foreground">Registered</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-semibold text-foreground">HIPAA</div>
                <div className="text-xs text-muted-foreground">Compliant</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-semibold text-foreground">SOC 2</div>
                <div className="text-xs text-muted-foreground">Certified</div>
              </div>
            </div>
          </div>

          {/* Right: 3D Visualization */}
          <div 
            className="h-[500px] lg:h-[600px] opacity-0 animate-scale-in"
            style={{ animationDelay: '0.3s' }}
          >
            <GaitVisualization />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
