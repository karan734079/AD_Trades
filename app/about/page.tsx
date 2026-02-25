"use client"

import Image from "next/image"
import { CheckCircle2, ShieldCheck, Award, HeartHandshake, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const trustFeatures = [
    { icon: ShieldCheck, title: "Fully Licensed & Insured", desc: "For your complete protection." },
    { icon: Award, title: "Award-Winning Service", desc: "Recognized locally for excellence." },
    { icon: HeartHandshake, title: "Customer-First Approach", desc: "Your satisfaction is our guarantee." }
]

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen pt-24 pb-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="container px-4 md:px-6 relative z-10">

                <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center space-x-2 text-primary font-bold uppercase tracking-widest text-sm bg-primary/5 py-1.5 px-4 rounded-full"
                        >
                            <Sparkles className="w-5 h-5 text-accent" />
                            <span>Who We Are</span>
                        </motion.div>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
                            About AD Trades Mechanical
                        </h1>
                        <div className="h-1.5 w-20 bg-primary rounded-full mb-6"></div>
                        <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                            Founded on the principles of honesty, integrity, and superior craftsmanship, AD Trades Mechanical has been delivering premium HVAC solutions to residential and commercial clients for over 15 years.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We understand that a functioning HVAC system is vital to your comfort and health. That's why we continually invest in training our technicians on the latest technologies and industry best practices.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 group">
                            <Image
                                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=2069"
                                alt="Professional HVAC Installations"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80" />
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#0B1528] text-white rounded-[3rem] p-12 lg:p-20 shadow-2xl mb-24 border border-white/10 relative overflow-hidden"
                >
                    <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center relative z-10">
                        {trustFeatures.map((feature, idx) => (
                            <motion.div
                                whileHover={{ y: -10 }}
                                key={idx}
                                className="flex flex-col items-center space-y-4 group"
                            >
                                <div className="h-24 w-24 rounded-3xl bg-primary/20 flex flex-col items-center justify-center text-primary mb-4 border border-primary/30 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-lg">
                                    <feature.icon className="h-10 w-10 text-white group-hover:animate-pulse" />
                                </div>
                                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">{feature.title}</h3>
                                <p className="text-slate-400 text-lg leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="max-w-5xl mx-auto space-y-16">
                    <div className="text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground mb-6"
                        >
                            Our Experience & Expertise
                        </motion.h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">We handle every project, large or small, with the same level of precision and care.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="p-10 bg-card rounded-[2rem] border border-border shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
                            <h3 className="text-3xl font-bold mb-4 flex items-center"><span className="text-primary mr-3 text-4xl">•</span> Residential Experts</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                                From simple tune-ups to complex whole-home system installations, we treat every home with the utmost respect. We wear shoe covers, use drop cloths, and clean up completely.
                            </p>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-center text-foreground font-semibold text-lg"><CheckCircle2 className="h-6 w-6 text-accent mr-3" /> New Home Constructions</li>
                                <li className="flex items-center text-foreground font-semibold text-lg"><CheckCircle2 className="h-6 w-6 text-accent mr-3" /> System Replacements</li>
                                <li className="flex items-center text-foreground font-semibold text-lg"><CheckCircle2 className="h-6 w-6 text-accent mr-3" /> Indoor Air Quality Testing</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="p-10 bg-card rounded-[2rem] border border-border shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
                            <h3 className="text-3xl font-bold mb-4 flex items-center"><span className="text-primary mr-3 text-4xl">•</span> Commercial Solutions</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                                We know that downtime costs you money. Our commercial division is equipped to handle large-scale HVAC maintenance, emergency repairs, and rooftop unit installations quickly.
                            </p>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-center text-foreground font-semibold text-lg"><CheckCircle2 className="h-6 w-6 text-accent mr-3" /> Retail & Office Spaces</li>
                                <li className="flex items-center text-foreground font-semibold text-lg"><CheckCircle2 className="h-6 w-6 text-accent mr-3" /> Rooftop Units (RTUs)</li>
                                <li className="flex items-center text-foreground font-semibold text-lg"><CheckCircle2 className="h-6 w-6 text-accent mr-3" /> Custom Maintenance Plans</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    )
}
