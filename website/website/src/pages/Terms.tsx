import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-32 pb-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl font-semibold mb-4">Terms of Service</h1>
                        <p className="text-muted-foreground mb-8">Last updated: February 2025</p>

                        <div className="prose prose-invert max-w-none space-y-8">
                            <section>
                                <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    These Terms of Service ("Terms") govern your use of NMove's website, mobile
                                    application, movement tracking sensor, and related services (collectively,
                                    the "Services"). By accessing or using our Services, you agree to be bound
                                    by these Terms. If you do not agree, do not use the Services.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">Description of Services</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    NMove provides movement tracking tools and analytics for general wellness
                                    purposes. Our Services include a wearable sensor, mobile application, and
                                    web platform that track gait patterns and generate trend reports.
                                </p>
                                <div className="mt-4 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                                    <p className="text-sm text-muted-foreground">
                                        <strong className="text-yellow-500">Important:</strong> NMove is NOT a medical
                                        device. See our Medical Disclaimer for more information about the limitations
                                        of our Services.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">Account Responsibilities</h2>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>You must be at least 18 years old to use our Services</li>
                                    <li>You are responsible for maintaining the security of your account</li>
                                    <li>You must provide accurate, current, and complete information</li>
                                    <li>You are responsible for all activities under your account</li>
                                    <li>Notify us immediately of any unauthorized access</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">Acceptable Use</h2>
                                <p className="text-muted-foreground mb-4">You agree NOT to:</p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>Use the Services for any unlawful purpose</li>
                                    <li>Attempt to gain unauthorized access to our systems</li>
                                    <li>Interfere with or disrupt the Services</li>
                                    <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
                                    <li>Use the Services to harm, threaten, or harass others</li>
                                    <li>Share your account credentials with others</li>
                                    <li>Use the Services for commercial purposes without our permission</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    The Services, including all content, features, and functionality, are owned
                                    by NMove and are protected by copyright, trademark, and other intellectual
                                    property laws. You may not copy, modify, distribute, or create derivative
                                    works without our express written permission.
                                </p>
                                <p className="text-muted-foreground mt-4">
                                    You retain ownership of your personal and movement data. By using our Services,
                                    you grant us a license to use this data to provide and improve the Services.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">Subscriptions and Payment</h2>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>Paid subscriptions are billed in advance on a monthly or annual basis</li>
                                    <li>Prices are subject to change with notice</li>
                                    <li>You may cancel at any time; access continues until the end of the billing period</li>
                                    <li>Refunds are provided in accordance with applicable law</li>
                                    <li>We may suspend or terminate accounts with overdue payments</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF
                                    ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING
                                    IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                                    NON-INFRINGEMENT.
                                </p>
                                <p className="text-muted-foreground mt-4">
                                    We do not warrant that the Services will be uninterrupted, error-free, secure,
                                    or free of viruses or other harmful components.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, NMOVE SHALL NOT BE LIABLE FOR ANY
                                    INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY
                                    LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR
                                    USE OF THE SERVICES.
                                </p>
                                <p className="text-muted-foreground mt-4">
                                    OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE
                                    MONTHS PRECEDING THE CLAIM.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    You agree to indemnify, defend, and hold harmless NMove and its officers,
                                    directors, employees, and agents from any claims, damages, losses, or expenses
                                    arising from your use of the Services or violation of these Terms.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">Termination</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We may suspend or terminate your access to the Services at any time, with or
                                    without cause, with or without notice. You may terminate your account at any
                                    time through the app settings. Upon termination, your right to use the Services
                                    ceases immediately.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    These Terms are governed by the laws of the State of Delaware, United States,
                                    without regard to conflict of law principles. Any disputes shall be resolved
                                    in the courts located in Delaware.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We may update these Terms from time to time. We will notify you of material
                                    changes via email or prominent notice. Your continued use after changes
                                    constitutes acceptance of the updated Terms.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                                <p className="text-muted-foreground">
                                    For questions about these Terms:<br />
                                    Email: legal@nmove.co<br />
                                    Address: United States
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Terms;
