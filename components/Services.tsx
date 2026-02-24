"use client"

import Link from "next/link"
import { Wind, ThermometerSnowflake, Wrench, RefreshCw, AlertTriangle, ShieldCheck, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const services = [
    {
        icon: Wind,
        title: "Furnace Installation",
        description: "High-efficiency heating systems installed by certified professionals for complete winter comfort."
    },
    {
        icon: ThermometerSnowflake,
        title: "AC Installation",
        description: "Premium cooling systems designed to maximize energy efficiency and whole-house cooling."
    },
    {
        icon: Wrench,
        title: "HVAC Repair",
        description: "Fast, reliable repairs for all makes and models to restore your comfort quickly."
    },
    {
        icon: RefreshCw,
        title: "Heat Pump Installation",
        description: "Versatile climate control solutions providing both heating and cooling in one system."
    },
    {
        icon: ShieldCheck,
        title: "Maintenance",
        description: "Comprehensive tune-ups to extend equipment life and ensure peak performance year-round."
    },
    {
        icon: AlertTriangle,
        title: "Emergency Service",
        description: "24/7 responsive service when you need us most. We're here protecting your peace of mind."
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
}

export default function Services() {
    return (
        <section className="py-24 bg-card border-b border-border overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-4 mb-20 max-w-2xl mx-auto"
                >
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
                        Our Services
                    </h2>
                    <h3 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                        Comprehensive Heating & Air Conditioning Services
                    </h3>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
                >
                    {services.map((service, index) => {
                        const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                        return (
                            <Link href={`/services/${slug}`} key={index} className="block group h-full">
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{ y: -10 }}
                                    className="relative p-10 h-full bg-background rounded-3xl border border-border hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/10 flex flex-col overflow-hidden"
                                >
                                    <motion.div
                                        className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500"
                                    />

                                    <div className="relative z-10 flex-grow">
                                        <div className="h-16 w-16 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-md">
                                            <service.icon className="h-8 w-8" />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-4 tracking-tight text-foreground group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h4>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="relative z-10 flex items-center text-primary font-semibold mt-8 text-sm opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                        Learn more <ArrowRight className="ml-2 w-4 h-4" />
                                    </div>
                                </motion.div>
                            </Link>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
