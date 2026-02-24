import Image from "next/image"
import { CheckCircle2, ShieldCheck, Award, HeartHandshake } from "lucide-react"

export const metadata = {
    title: "About Us | AD Trades Mechanical",
    description: "Learn more about our company, experience, and commitment to quality HVAC service.",
}

const trustFeatures = [
    { icon: ShieldCheck, title: "Fully Licensed & Insured", desc: "For your complete protection." },
    { icon: Award, title: "Award-Winning Service", desc: "Recognized locally for excellence." },
    { icon: HeartHandshake, title: "Customer-First Approach", desc: "Your satisfaction is our guarantee." }
]

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen py-24">
            <div className="container px-4 md:px-6">

                <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
                    <div className="lg:w-1/2 space-y-6">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
                            About AD Trades Mechanical
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Founded on the principles of honesty, integrity, and superior craftsmanship, AD Trades Mechanical has been delivering premium HVAC solutions to residential and commercial clients for over 15 years.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We understand that a functioning HVAC system is vital to your comfort and health. That's why we continually invest in training our technicians on the latest technologies and industry best practices.
                        </p>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                            <Image
                                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2069"
                                alt="HVAC Technicians"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                    </div>
                </div>

                <div className="bg-secondary text-secondary-foreground rounded-3xl p-12 lg:p-24 shadow-lg mb-24 border border-border">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
                        {trustFeatures.map((feature, idx) => (
                            <div key={idx} className="flex flex-col items-center space-y-4">
                                <div className="h-20 w-20 rounded-2xl bg-primary/20 flex flex-col items-center justify-center text-primary mb-4 border border-primary/30">
                                    <feature.icon className="h-10 w-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                                <p className="text-white/80 text-lg leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-12">Our Experience & Expertise</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 bg-card rounded-3xl border border-border shadow-sm">
                            <h3 className="text-2xl font-bold mb-4">Residential Experts</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                From simple tune-ups to complex whole-home system installations, we treat every home with the utmost respect. We wear shoe covers, use drop cloths, and clean up completely.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-center text-foreground font-medium"><CheckCircle2 className="h-5 w-5 text-primary mr-3" /> New Home Constructions</li>
                                <li className="flex items-center text-foreground font-medium"><CheckCircle2 className="h-5 w-5 text-primary mr-3" /> System Replacements</li>
                                <li className="flex items-center text-foreground font-medium"><CheckCircle2 className="h-5 w-5 text-primary mr-3" /> Indoor Air Quality Testing</li>
                            </ul>
                        </div>

                        <div className="p-8 bg-card rounded-3xl border border-border shadow-sm">
                            <h3 className="text-2xl font-bold mb-4">Commercial Solutions</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We know that downtime costs you money. Our commercial division is equipped to handle large-scale HVAC maintenance, emergency repairs, and rooftop unit installations quickly.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-center text-foreground font-medium"><CheckCircle2 className="h-5 w-5 text-primary mr-3" /> Retail & Office Spaces</li>
                                <li className="flex items-center text-foreground font-medium"><CheckCircle2 className="h-5 w-5 text-primary mr-3" /> Rooftop Units (RTUs)</li>
                                <li className="flex items-center text-foreground font-medium"><CheckCircle2 className="h-5 w-5 text-primary mr-3" /> Custom Maintenance Plans</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
