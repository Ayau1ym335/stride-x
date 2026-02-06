import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-12 md:p-16">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Ready to integrate objective gait data into your practice?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We work with healthcare institutions and clinical practices to implement 
              gait analysis that fits your workflow. No sales pressure—just a conversation 
              about whether our approach might be useful for your patients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
                Schedule a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-muted">
                Download Clinical Overview
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
