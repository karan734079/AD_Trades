"use client"

import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export default function CTA() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-primary/5 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />

            <div className="container relative z-10 px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col items-center justify-center space-y-10 text-center bg-gradient-to-br from-card via-card to-primary/5 rounded-[3rem] p-16 lg:p-24 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.2)] border border-primary/20 relative overflow-hidden group"
                >
                    {/* Animated Background Highlights */}
                    <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-colors duration-1000" />
                    <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-1000" />

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="space-y-6 max-w-4xl relative z-10"
                    >
                        <div className="inline-flex items-center space-x-2 text-primary font-bold uppercase tracking-widest text-sm bg-primary/10 px-4 py-2 rounded-full border border-primary/20 shadow-inner">
                            <Zap className="w-5 h-5 text-accent animate-pulse" />
                            <span>Take Action Now</span>
                        </div>

                        <h2 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl text-foreground drop-shadow-sm">
                            Ready for Unmatched Comfort?
                        </h2>

                        <p className="mx-auto text-xl md:text-2xl text-muted-foreground/90 leading-relaxed font-medium">
                            Don't wait for your system to fail. Get in touch with our experts today and experience the difference of <span className="text-primary font-bold underline decoration-accent underline-offset-4">premium</span> HVAC service.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="w-full max-w-lg space-y-4 relative z-10"
                    >
                        <Link href="/appointment" className="w-full block">
                            <Button size="lg" className="group w-full h-16 text-xl rounded-full shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 bg-primary text-white">
                                Get Your Free Quote
                                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
