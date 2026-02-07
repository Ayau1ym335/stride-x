import { Shield, Users, Heart } from "lucide-react";

export function TrustSection() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-6 w-6 text-green-500" />
                            </div>
                            <h3 className="font-semibold mb-2">Not a Diagnostic Device</h3>
                            <p className="text-sm text-muted-foreground">
                                NMove provides trend data to support clinical conversations, not medical diagnoses.
                            </p>
                        </div>

                        <div className="p-6">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                                <Heart className="h-6 w-6 text-blue-500" />
                            </div>
                            <h3 className="font-semibold mb-2">Supports Clinical Care</h3>
                            <p className="text-sm text-muted-foreground">
                                Designed to give clinicians objective context between appointments.
                            </p>
                        </div>

                        <div className="p-6">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                                <Users className="h-6 w-6 text-purple-500" />
                            </div>
                            <h3 className="font-semibold mb-2">Seeking Clinician Advisors</h3>
                            <p className="text-sm text-muted-foreground">
                                We're building with clinical feedback. Join our advisory network.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
