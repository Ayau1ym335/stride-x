import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, Calendar, ArrowRight, Mail, MapPin } from "lucide-react";

const milestones = [
    { year: "2024", event: "Concept development and initial research" },
    { year: "2024", event: "Prototype sensor development" },
    { year: "2025", event: "Beta program launch" },
    { year: "2025", event: "Public launch (anticipated)" },
];

const About = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                            Make movement progress <span className="text-gradient-primary">visible</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            We're building tools to bridge the gap between clinical visits,
                            giving patients and clinicians the context they need.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                <Target className="h-7 w-7 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Too much happens between doctor visits that never gets captured.
                                    Patients struggle to remember details. Clinicians lack objective context.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                                    NMove exists to make movement progress visible—giving patients simple
                                    tools to track their journey and clinicians the quick-review summaries
                                    they need to provide better care.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-start gap-6 mb-12">
                            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                                <Users className="h-7 w-7 text-secondary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We're a small team passionate about using technology to improve
                                    healthcare experiences. Our backgrounds span biomedical engineering,
                                    software development, and clinical research.
                                </p>
                            </div>
                        </div>

                        {/* Team placeholder */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="p-6 rounded-xl bg-card border border-border text-center">
                                    <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                                        <Users className="h-8 w-8 text-muted-foreground" />
                                    </div>
                                    <p className="text-sm text-muted-foreground">Team Member</p>
                                    <p className="text-xs text-muted-foreground/60">Coming soon</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-start gap-6 mb-12">
                            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                <Calendar className="h-7 w-7 text-accent" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    From concept to product—here's where we are on the path to launch.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 pl-8 border-l-2 border-border">
                            {milestones.map((milestone, index) => (
                                <div key={index} className="relative pl-8">
                                    <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-primary border-4 border-background" />
                                    <span className="text-sm text-primary font-medium">{milestone.year}</span>
                                    <p className="text-muted-foreground">{milestone.event}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-semibold mb-8 text-center">Get in touch</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-xl bg-card border border-border flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Email</h3>
                                    <a href="mailto:hello@nmove.co" className="text-muted-foreground hover:text-primary transition-colors">
                                        hello@nmove.co
                                    </a>
                                </div>
                            </div>
                            <div className="p-6 rounded-xl bg-card border border-border flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <MapPin className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Location</h3>
                                    <p className="text-muted-foreground">United States</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-8">
                            <Link to="/contact">
                                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                                    Contact Us
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
