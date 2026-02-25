"use client"

import { Wind, ThermometerSnowflake, Wrench, RefreshCw, ShieldCheck, AlertTriangle } from "lucide-react"
import { motion } from "framer-motion"

const detailedServices = [
    {
        icon: Wind,
        title: "Furnace Installation & Replacement",
        description: "Keep your home warm during the coldest months with our high-efficiency heating systems. We assess your home's unique heating requirements and install premium furnaces from leading brands.",
        features: ["Energy Audit", "High-Efficiency Models", "Professional Installation", "Post-Install Inspection"]
    },
    {
        icon: ThermometerSnowflake,
        title: "AC Installation & Upgrades",
        description: "Beat the heat with state-of-the-art cooling technology. Whether you need a brand-new central air system or an upgrade to your existing unit, our technicians size and install your AC for optimal performance.",
        features: ["SEER Rating Guidance", "Ductwork Assessment", "Smart Thermostat Integration", "Cooling Guarantees"]
    },
    {
        icon: Wrench,
        title: "HVAC Repair Services",
        description: "Strange noises, inconsistent temperatures, or a complete system breakdown? Our diagnosis experts quickly identify the root cause and provide upfront, transparent pricing for all necessary repairs.",
        features: ["Rapid Diagnostics", "Stocked Service Vehicles", "Honest Pricing", "All Makes & Models"]
    },
    {
        icon: RefreshCw,
        title: "Heat Pump Systems",
        description: "Experience the versatility of a heat pump, providing both heating and cooling in a single, energy-efficient package. We specialize in both traditional and advanced cold-climate heat pump installations.",
        features: ["Year-Round Comfort", "Energy Savings", "Ductless Options", "Rebate Assistance"]
    },
    {
        icon: ShieldCheck,
        title: "Preventative Maintenance",
        description: "The best way to avoid costly repairs is regular maintenance. Our comprehensive tune-ups clean, inspect, and calibrate your HVAC simply to peak efficiency prior to the heavy usage seasons.",
        features: ["Filter Replacements", "Coil Cleaning", "System Calibration", "Safety Checks"]
    },
    {
        icon: AlertTriangle,
        title: "24/7 Emergency Service",
        description: "HVAC emergencies don't stick to business hours. We provide round-the-clock rapid response for heating failures in freezing conditions or cooling breakdowns during dangerous heatwaves.",
        features: ["No Overtime Shock", "Priority Response", "Emergency Repairs", "Temporary Solutions"]
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

export default function ServicesPage() {
    return (
        <div className="bg-background min-h-screen">
            <div className="bg-[#0B1528] text-white py-32 border-b border-white/5 relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="container px-4 md:px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto space-y-8"
                    >
                        <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl">
                            HVAC Solutions You Can Depend On
                        </h1>
                        <p className="text-2xl text-slate-300 leading-relaxed font-light">
                            We offer a full spectrum of mechanical services, from minor repairs to whole-house system installations. Discover how we can optimize your home&apos;s climate.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container px-4 md:px-6 py-24">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                    {detailedServices.map((service, i) => (
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            key={i}
                            className="flex flex-col xl:flex-row gap-8 p-10 bg-card rounded-[2.5rem] shadow-lg border border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden relative group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700" />
                            <div className="shrink-0 h-20 w-20 bg-primary/10 rounded-[1.5rem] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <service.icon className="h-10 w-10 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="space-y-5 flex-1">
                                <h3 className="text-3xl font-bold">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {service.description}
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-border/50">
                                    {service.features.map((feature, j) => (
                                        <li key={j} className="flex items-center text-base font-semibold text-foreground">
                                            <div className="h-2 w-2 bg-accent rounded-full mr-3" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
