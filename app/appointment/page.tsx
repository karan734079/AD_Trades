import AppointmentForm from "@/components/AppointmentForm"
import { ShieldCheck, Clock, Users, Star } from "lucide-react"

export const metadata = {
    title: "Book Appointment | AD Trades Mechanical",
    description: "Schedule your HVAC service, repair, or installation appointment today.",
}

export default function AppointmentPage() {
    return (
        <div className="bg-background min-h-screen py-24">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    <div className="lg:col-span-4 space-y-12">
                        <div>
                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
                                Ready for Service?
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Fill out the form to request an appointment. Our team is standing by to deliver premium HVAC solutions.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex space-x-4">
                                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <Clock className="h-7 w-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Fast Response</h3>
                                    <p className="text-muted-foreground">We prioritize your comfort with quick scheduling and rapid emergency response.</p>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <ShieldCheck className="h-7 w-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Licensed & Insured</h3>
                                    <p className="text-muted-foreground">Every technician is fully certified, providing peace of mind and guaranteed quality.</p>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <Star className="h-7 w-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Top Rated</h3>
                                    <p className="text-muted-foreground">Hundreds of 5-star reviews from satisfied customers in the community.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-secondary rounded-3xl text-white">
                            <h3 className="text-2xl font-bold mb-4">Emergency Service?</h3>
                            <p className="mb-6 opacity-90">If you are experiencing a complete system failure or require immediate assistance, please call us directly for the fastest response.</p>
                            <a href="tel:2262606697" className="inline-block text-xl font-extrabold text-primary hover:text-white transition-colors">
                                (226) 260-6697
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <AppointmentForm />
                    </div>

                </div>
            </div>
        </div>
    )
}
