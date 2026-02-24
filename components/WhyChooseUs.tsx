"use client"

import { CheckCircle2, ShieldCheck, Trophy, Target } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const features = [
    "Licensed & Certified Technicians",
    "24/7 Emergency Service",
    "Fast Response Times",
    "Affordable & Transparent Pricing",
    "Comprehensive Warranties",
    "100% Satisfaction Guarantee"
]

export default function WhyChooseUs() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, -50])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5])

    return (
        <section ref={containerRef} className="py-24 bg-card overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div className="space-y-6">
                            <div className="inline-flex items-center space-x-2 text-primary font-bold uppercase tracking-widest text-sm bg-primary/10 px-4 py-2 rounded-full">
                                <ShieldCheck className="w-5 h-5 text-primary" />
                                <span>Our Guarantee</span>
                            </div>
                            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
                                Why Choose AD Trades Mechanical?
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                When it comes to your home&apos;s comfort, you need a partner you can rely on. Our team is dedicated to providing high-quality workmanship and exceptional customer service on every job.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                    viewport={{ once: true }}
                                    className="flex items-center space-x-4 p-4 rounded-2xl bg-secondary/5 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20"
                                >
                                    <div className="h-10 w-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary shadow-inner">
                                        <CheckCircle2 className="h-6 w-6" />
                                    </div>
                                    <span className="font-semibold text-foreground">{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex space-x-12 pt-8 border-t border-border">
                            <div className="flex flex-col">
                                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent">15+</span>
                                <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider mt-2">Years of<br />Experience</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent">10k+</span>
                                <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider mt-2">Happy<br />Customers</span>
                            </div>
                        </div>

                    </motion.div>

                    {/* Parallax Image Section */}
                    <motion.div
                        style={{ y, opacity }}
                        className="relative lg:h-[800px] h-[500px]"
                    >
                        <div className="absolute inset-x-0 bottom-0 top-12 bg-primary/5 rounded-[4rem] transform rotate-3 scale-105 blur-sm" />
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=2070"
                                alt="HVAC Technician working on unit"
                                fill
                                className="object-cover transition-transform duration-10000 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Floating Badge inside Image */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute bottom-10 left-10 max-w-sm"
                            >
                                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl text-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <Trophy className="h-10 w-10 text-accent" />
                                        <h3 className="text-3xl font-bold">Expert Care</h3>
                                    </div>
                                    <p className="text-white/80 text-lg font-medium leading-relaxed">
                                        We treat your home like our own, ensuring neat, professional, and efficient service every single time.
                                    </p>
                                </div>
                            </motion.div>

                        </motion.div>

                        {/* Floating Orbs behind image */}
                        <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-accent/30 rounded-full blur-[80px]" />
                        <div className="absolute -z-10 bottom-0 left-0 w-80 h-80 bg-primary/30 rounded-full blur-[100px]" />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
