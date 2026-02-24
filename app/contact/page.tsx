import ContactForm from "@/components/ContactForm"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata = {
    title: "Contact Us | AD Trades Mechanical",
    description: "Get in touch with us for expert HVAC services.",
}

export default function ContactPage() {
    return (
        <div className="bg-background min-h-screen py-24">
            <div className="container px-4 md:px-6">
                <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We are here to answer your questions and schedule service for your home or business. Your comfort is our priority.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <ContactForm />

                    <div className="space-y-8 h-full flex flex-col">
                        <div className="bg-card p-8 rounded-3xl border border-border space-y-8 flex-1">
                            <h3 className="text-2xl font-bold">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold text-lg">Phone</p>
                                        <a href="tel:2262606697" className="text-muted-foreground hover:text-primary transition-colors text-lg">(226) 260-6697</a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold text-lg">Email</p>
                                        <a href="mailto:info@adtradesmechanical.com" className="text-muted-foreground hover:text-primary transition-colors text-lg">info@adtradesmechanical.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold text-lg">Location</p>
                                        <p className="text-muted-foreground text-lg">123 HVAC Street<br />Mechanical City, CA 90210</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold text-lg">Business Hours</p>
                                        <p className="text-muted-foreground text-lg">Mon-Fri: 8AM - 6PM<br />Weekend: By Appointment<br /><span className="text-primary font-medium">24/7 Emergency Service Available</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 bg-secondary aspect-[4/3] rounded-3xl overflow-hidden relative shadow-lg">
                            {/* Google Map Placeholder */}
                            <div className="absolute inset-0 bg-primary/5 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-primary/20 m-2 rounded-2xl">
                                <MapPin className="h-12 w-12 text-primary/50 mb-4" />
                                <h3 className="text-xl font-bold text-foreground/70 mb-2">Google Maps Embed Location</h3>
                                <p className="text-muted-foreground/80">
                                    A dynamic map placeholder pointing to 123 HVAC Street.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
