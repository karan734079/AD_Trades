import Hero from "@/components/Hero"
import Services from "@/components/Services"
import WhyChooseUs from "@/components/WhyChooseUs"
import Testimonials from "@/components/Testimonials"
import CTA from "@/components/CTA"
import ContactForm from "@/components/ContactForm"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <Services />
            <WhyChooseUs />
            <Testimonials />
            <CTA />

            {/* Contact Section inline as per instructions */}
            <section className="py-24 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Contact Our Experts</h2>
                                <p className="mt-4 text-lg text-muted-foreground">
                                    Need immediate assistance or looking to upgrade your system? Fill out the form or use our contact details to reach out. We are available 24/7 for emergency service.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 p-6 bg-card rounded-2xl border border-border">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Call Us Directly</p>
                                        <a href="tel:2262606697" className="text-2xl font-bold hover:text-primary transition-colors">(226) 260-6697</a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-6 bg-card rounded-2xl border border-border">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Email Us</p>
                                        <a href="mailto:info@adtradesmechanical.com" className="text-xl font-bold hover:text-primary transition-colors">info@adtradesmechanical.com</a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-6 bg-card rounded-2xl border border-border">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Our Location</p>
                                        <p className="text-lg font-bold">123 HVAC Street, Mechanical City</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ContactForm />

                    </div>
                </div>
            </section>
        </div>
    )
}
