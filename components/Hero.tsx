"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, ShieldCheck } from "lucide-react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="relative bg-background pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
            {/* Subtle dot pattern background */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />

            <div className="container relative z-10 px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8 max-w-2xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center space-x-2 text-primary font-bold uppercase tracking-widest text-sm"
                        >
                            <ShieldCheck className="w-5 h-5 text-accent" />
                            <span>Top Rated HVAC Services</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]"
                        >
                            Innovative and Personalized HVAC Solutions.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl font-medium"
                        >
                            Expert installation, repair, and maintenance for residential and commercial spaces. Trust the professionals at AD Trades Mechanical for comfort that lasts.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <Link href="/appointment">
                                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm hover:scale-105 transition-all w-full sm:w-auto block text-center">
                                    Get Free Estimate
                                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                                </Button>
                            </Link>
                            <Link href="tel:18008581922">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg rounded-xl border-border text-foreground hover:bg-secondary hover:scale-105 transition-all w-full sm:w-auto block text-center">
                                    <Phone className="mr-2 h-5 w-5 text-primary inline" />
                                    1-800-858-1922
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
                        className="relative mx-auto w-full max-w-[600px] lg:max-w-none lg:pl-10 mix-blend-normal group"
                    >
                        {/* Decorative background shape */}
                        <motion.div
                            animate={{ rotate: [2, -2, 2] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -z-10 top-0 -right-4 bottom-0 -left-4 bg-secondary rounded-[2.5rem]"
                        />

                        <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-border">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=2069"
                                    alt="HVAC Professional at work"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>

                        {/* Floating Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, type: "spring", bounce: 0.5 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="absolute -bottom-6 -left-6 bg-background rounded-xl p-6 shadow-2xl border border-border max-w-[240px]"
                        >
                            <div className="flex items-center space-x-1 mb-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <motion.svg
                                        key={star}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1 + (star * 0.1) }}
                                        className="w-5 h-5 text-accent fill-current"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </motion.svg>
                                ))}
                            </div>
                            <p className="text-sm font-bold text-foreground">5.0 (243 reviews)</p>
                            <p className="text-xs text-muted-foreground mt-1">Trusted by homeowners nationwide.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
