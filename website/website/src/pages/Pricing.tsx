import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const tiers = [
    {
        name: "Free",
        price: "$0",
        period: "",
        description: "Basic tracking to get started",
        features: [
            "Basic gait trend tracking",
            "7-day history",
            "Daily status indicator",
            "Mobile app access",
        ],
        cta: "Join Waitlist",
        popular: false,
    },
    {
        name: "Plus",
        price: "$19",
        period: "/month",
        description: "Full features for active tracking",
        features: [
            "Everything in Free",
            "Unlimited history",
            "Weekly trend reports",
            "Export clinician reports",
            "Notes & event logging",
            "Priority support",
        ],
        cta: "Join Waitlist",
        popular: true,
    },
    {
        name: "Clinical",
        price: "Contact",
        period: "",
        description: "For practices & pilot programs",
        features: [
            "Everything in Plus",
            "Multi-patient dashboard",
            "Practice-wide analytics",
            "EHR integration (coming)",
            "Dedicated support",
            "Custom onboarding",
        ],
        cta: "Contact Us",
        popular: false,
    },
];

const Pricing = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
                            Launching Soon
                        </span>
                        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                            Simple, transparent <span className="text-gradient-primary">pricing</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Choose the plan that fits your needs. All plans include the NMove sensor.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {tiers.map((tier) => (
                            <div
                                key={tier.name}
                                className={`relative p-8 rounded-2xl border ${tier.popular
                                        ? "bg-gradient-to-b from-primary/10 to-transparent border-primary/50"
                                        : "bg-card border-border"
                                    }`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold">{tier.price}</span>
                                        <span className="text-muted-foreground">{tier.period}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link to="/contact">
                                    <Button
                                        className={`w-full ${tier.popular
                                                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                                : "bg-muted text-foreground hover:bg-muted/80"
                                            }`}
                                    >
                                        {tier.cta}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Early Access Note */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-semibold mb-4">Join for early access pricing</h2>
                        <p className="text-muted-foreground mb-6">
                            Waitlist members get exclusive early access pricing and priority for our
                            limited beta launch. Prices shown are estimates and may change.
                        </p>
                        <Link to="/contact">
                            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
                                Join Waitlist
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-semibold mb-8 text-center">Common questions</h2>
                        <div className="space-y-6">
                            <div className="p-6 rounded-xl bg-card border border-border">
                                <h3 className="font-semibold mb-2">Is the sensor included?</h3>
                                <p className="text-sm text-muted-foreground">
                                    Yes! All plans include one NMove sensor. Additional sensors are available for purchase.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-card border border-border">
                                <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
                                <p className="text-sm text-muted-foreground">
                                    Absolutely. Cancel anytime with no fees. You keep your data and can export it before canceling.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-card border border-border">
                                <h3 className="font-semibold mb-2">Is there a free trial?</h3>
                                <p className="text-sm text-muted-foreground">
                                    The Free tier is free forever. For Plus, we offer a 14-day trial so you can experience full features.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Pricing;
