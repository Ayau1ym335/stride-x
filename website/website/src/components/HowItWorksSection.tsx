import { Upload, BarChart3, FileText } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Capture Movement Data",
    description: "Patients complete a standardized walking protocol. Our sensors capture comprehensive kinematic data across multiple gait cycles.",
    color: "primary"
  },
  {
    icon: BarChart3,
    title: "Pattern Analysis",
    description: "Our algorithms identify deviations from normative patterns, quantifying asymmetries, timing variations, and movement characteristics.",
    color: "secondary"
  },
  {
    icon: FileText,
    title: "Clinical Report",
    description: "You receive a structured report with objective measurements and visualizations—data to complement your examination findings.",
    color: "accent"
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            How it works
          </h2>
          <p className="text-muted-foreground text-lg">
            A straightforward process designed to integrate seamlessly into clinical workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 h-full">
                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    step.color === 'primary' ? 'bg-primary/20 text-primary' :
                    step.color === 'secondary' ? 'bg-secondary/20 text-secondary' :
                    'bg-accent/20 text-accent'
                  }`}
                >
                  <step.icon className="w-6 h-6" />
                </div>
                
                <div className="text-sm text-muted-foreground mb-2">Step {index + 1}</div>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
