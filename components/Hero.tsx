"use client"

import Link from "next/link"
import { ArrowRight, Phone, Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-secondary">
            {/* Animated Background Orbs */}
            <motion.div
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, -50, 50, 0],
                    scale: [1, 1.2, 0.8, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-1/4 w-[30rem] h-[30rem] bg-primary/20 rounded-full mix-blend-screen filter blur-[120px]"
            />
            <motion.div
                animate={{
                    x: [0, -70, 40, 0],
                    y: [0, 60, -40, 0],
                    scale: [1, 0.9, 1.1, 1]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-20 right-1/4 w-[25rem] h-[25rem] bg-accent/20 rounded-full mix-blend-screen filter blur-[100px]"
            />
            <motion.div
                animate={{
                    x: [0, 40, -60, 0],
                    y: [0, 40, -50, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-32 left-1/3 w-[35rem] h-[35rem] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px]"
            />

            {/* Background Image with Parallax-like slow zoom */}
            <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.15] mix-blend-overlay"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=2069')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-secondary z-10" />

            <div className="container relative z-20 px-4 md:px-6 mt-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto text-center space-y-8"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.6, duration: 1, delay: 0.2 }}
                        className="inline-flex items-center rounded-full border border-primary/50 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary/90 backdrop-blur-md shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                    >
                        <Sparkles className="w-4 h-4 mr-2 text-primary" />
                        Top Rated HVAC Services
                    </motion.div>

                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-2xl">
                        <motion.span
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.4, type: "spring", bounce: 0.4 }}
                            className="block"
                        >
                            Premium Climate
                        </motion.span>
                        <motion.span
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.6, type: "spring", bounce: 0.4 }}
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent mt-2 pb-2"
                        >
                            Control Solutions
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        className="mx-auto max-w-[42rem] leading-relaxed text-muted-foreground/90 sm:text-xl sm:leading-8 font-medium"
                    >
                        Expert installation, repair, and maintenance for residential and commercial spaces. Trust the professionals at AD Trades Mechanical for comfort that lasts.
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
                    >
                        <Link href="/appointment">
                            <Button size="lg" className="group w-full sm:w-auto h-14 px-8 text-lg rounded-full shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.5)] transition-all duration-300">
                                Get Free Quote
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="tel:2262606697">
                            <Button size="lg" variant="outline" className="group w-full sm:w-auto h-14 px-8 text-lg rounded-full bg-white/5 text-white border-white/20 hover:bg-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95">
                                Call Now
                                <Phone className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
