"use client"

import ContactForm from "@/components/ContactForm"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
    return (
        <div className="bg-background min-h-screen py-24 overflow-hidden relative">
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center max-w-4xl mx-auto space-y-6"
                >
                    <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl text-foreground">
                        Get in Touch
                    </h1>
                    <p className="text-2xl text-muted-foreground leading-relaxed font-light">
                        We are here to answer your questions and schedule service for your home or business. Your comfort is our priority.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-card p-2 rounded-[2.5rem] shadow-xl border border-border"
                    >
                        <ContactForm />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="space-y-8 h-full flex flex-col"
                    >
                        <div className="bg-[#0B1528] text-white p-12 rounded-[2.5rem] border border-white/10 space-y-10 shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

                            <h3 className="text-3xl font-bold relative z-10">Contact Information</h3>

                            <div className="space-y-8 relative z-10">
                                <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-6 group/item">
                                    <div className="p-4 bg-white/10 rounded-2xl group-hover/item:bg-primary transition-colors">
                                        <Phone className="h-7 w-7 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg text-slate-400">Phone</p>
                                        <a href="tel:2262606697" className="text-white hover:text-primary transition-colors text-xl font-medium">(226) 260-6697</a>
                                    </div>
                                </motion.div>

                                <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-6 group/item">
                                    <div className="p-4 bg-white/10 rounded-2xl group-hover/item:bg-primary transition-colors">
                                        <Mail className="h-7 w-7 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg text-slate-400">Email</p>
                                        <a href="mailto:info@adtradesmechanical.com" className="text-white hover:text-primary transition-colors text-xl font-medium">info@adtradesmechanical.com</a>
                                    </div>
                                </motion.div>

                                <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-6 group/item">
                                    <div className="p-4 bg-white/10 rounded-2xl group-hover/item:bg-primary transition-colors">
                                        <MapPin className="h-7 w-7 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg text-slate-400">Location</p>
                                        <p className="text-white text-xl font-medium">123 HVAC Street<br />Mechanical City, CA 90210</p>
                                    </div>
                                </motion.div>

                                <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-6 group/item">
                                    <div className="p-4 bg-white/10 rounded-2xl group-hover/item:bg-primary transition-colors">
                                        <Clock className="h-7 w-7 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg text-slate-400">Business Hours</p>
                                        <p className="text-white text-xl font-medium">Mon-Fri: 8AM - 6PM<br />Weekend: By Appointment<br /><span className="text-accent underline decoration-2 underline-offset-4 mt-2 inline-block">24/7 Emergency Service</span></p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
