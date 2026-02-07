import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend API
    setSubmitted(true);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Patients CTA */}
          <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              For Patients
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to track your progress?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Join our waitlist for early access. Be among the first to experience
              better movement tracking between appointments.
            </p>

            {submitted ? (
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-500">
                ✓ Thank you! We'll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-background border-border"
                />
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Join
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>

          {/* Clinicians CTA */}
          <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm mb-6">
              <Stethoscope className="h-4 w-4" />
              For Clinicians
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              See how NMove fits your practice
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Request a sample report template and learn how NMove can give you
              objective context between patient visits—without adding workflow burden.
            </p>
            <Link to="/for-clinicians">
              <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                Request Demo Report
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
