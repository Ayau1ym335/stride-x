import { Activity, TrendingUp, Shield, Clock } from "lucide-react";

const capabilities = [
  {
    icon: Activity,
    title: "Movement Quantification",
    description: "Precise measurements of gait parameters including cadence, stride length, stance time, and joint angles across the full kinetic chain."
  },
  {
    icon: TrendingUp,
    title: "Longitudinal Tracking",
    description: "Monitor patient progress over time with comparative analysis showing objective changes in movement patterns between visits."
  },
  {
    icon: Shield,
    title: "Clinical Integration",
    description: "Reports designed for clinical context. Data presented alongside normative ranges with clear, interpretable visualizations."
  },
  {
    icon: Clock,
    title: "Rapid Processing",
    description: "Results available within minutes of data capture. No waiting for external lab processing or delayed reports."
  }
];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Objective data for{' '}
              <span className="text-gradient-primary">informed decisions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our platform doesn't diagnose or prescribe. It provides the quantitative foundation 
              that supports your clinical expertise—helping you see patterns that visual observation alone might miss.
            </p>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <p className="text-sm text-muted-foreground italic">
                "The gait analysis data has become an essential part of my pre-operative assessments. 
                It gives me objective baseline measurements I can reference throughout the patient's recovery."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-sm font-medium">DR</span>
                </div>
                <div>
                  <div className="text-sm font-medium">Orthopedic Surgeon</div>
                  <div className="text-xs text-muted-foreground">Academic Medical Center</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <capability.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-medium mb-2">{capability.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
