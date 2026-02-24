"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Wind, ThermometerSnowflake, Wrench, RefreshCw, AlertTriangle, ShieldCheck } from "lucide-react"

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
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 15 }
    }
}

export default function Services() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="absolute top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-4 mb-20"
                >
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
                        Our Comprehensive Services
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl leading-relaxed">
                        From emergency repairs to full system installations, our licensed technicians deliver excellence in every job.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 text-left"
                >
                    {services.map((service, index) => {
                        const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                        return (
                            <Link href={`/services/${slug}`} key={index} className="block group">
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -12,
                                        scale: 1.02,
                                        transition: { type: "spring", stiffness: 300, damping: 20 }
                                    }}
                                    className="relative p-10 h-full bg-card rounded-[2.5rem] border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] overflow-hidden"
                                >
                                    {/* Hover Glow Effect */}
                                    <div className="absolute -inset-px bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-[2.5rem] transition-opacity duration-500 pointer-events-none" />
                                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500 pointer-events-none scale-50 group-hover:scale-150" />

                                    <div className="relative z-10 space-y-6">
                                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:rotate-6">
                                            <service.icon className="h-8 w-8 transition-transform duration-500 group-hover:scale-110" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                            <p className="text-muted-foreground/90 leading-relaxed text-[1.05rem]">
                                                {service.description}
                                            </p>
                                        </div>
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
