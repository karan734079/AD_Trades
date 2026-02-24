"use client"

import { CheckCircle2, ShieldCheck, Trophy, DollarSign, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const features = [
    {
        title: "Family-Owned Excellence",
        description: "When an AC repair technician shows up at your door, you can trust our family-owned values and deep community roots.",
        icon: ShieldCheck
    },
    {
        title: "Best Price Assurance",
        description: "We deliver exceptional value with transparent, upfront pricing. No hidden fees, ever.",
        icon: DollarSign
    },
    {
        title: "24/7 Availability",
        description: "HVAC emergencies don't wait for business hours. We're here for you whenever you need us, day or night.",
        icon: Clock
    }
]

export default function WhyChooseUs() {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

    return (
        <section ref={sectionRef} className="py-24 bg-card overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">

                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                        >
                            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
                                About Us
                            </h2>
                            <h3 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                                Providing Expert AC Repair & Installation Services
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed pt-2">
                                When it comes to your home&apos;s comfort, you need a partner you can rely on. Our team is dedicated to providing high-quality workmanship and exceptional customer service on every job.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[450px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-border group"
                        >
                            <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                                <Image
                                    src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=2070"
                                    alt="HVAC Technician working on unit"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="absolute bottom-8 left-8 right-8 bg-background/90 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg flex items-center space-x-4"
                            >
                                <div className="p-3 bg-primary/10 rounded-xl">
                                    <Trophy className="h-8 w-8 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground text-lg">Award Winning Service</h4>
                                    <p className="text-sm text-muted-foreground">Recognized for excellence in 2025</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col justify-center space-y-12 lg:pl-10">
                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    className="flex space-x-6 group"
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="h-16 w-16 rounded-2xl bg-secondary text-primary flex items-center justify-center font-bold text-lg border border-transparent group-hover:border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
                                            <feature.icon className="h-7 w-7" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{feature.title}</h4>
                                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="pt-10 border-t border-border"
                        >
                            <div className="flex items-center space-x-8">
                                <div className="flex flex-col">
                                    <div className="flex items-end">
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5 }}
                                            className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                                        >
                                            15
                                        </motion.span>
                                        <span className="text-4xl font-black text-accent">+</span>
                                    </div>
                                    <span className="text-sm font-bold text-muted-foreground uppercase mt-2 tracking-wide">Years of<br />Experience</span>
                                </div>
                                <div className="h-16 w-px bg-border"></div>
                                <div className="flex flex-col">
                                    <div className="flex items-end">
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: 0.2 }}
                                            className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                                        >
                                            10k
                                        </motion.span>
                                        <span className="text-4xl font-black text-accent">+</span>
                                    </div>
                                    <span className="text-sm font-bold text-muted-foreground uppercase mt-2 tracking-wide">Happy<br />Customers</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
