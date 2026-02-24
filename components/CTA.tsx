"use client"

import Link from "next/link"
import { ArrowRight, Phone, Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export default function CTA() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container relative z-10 px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                    className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12 bg-primary p-12 lg:p-16 rounded-[3rem] border border-primary-foreground/10 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.4)] relative overflow-hidden group"
                >
                    {/* Animated modern particles */}
                    <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

                    <motion.div
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-accent/30 transition-colors duration-700"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-white/20 transition-colors duration-700"
                    />

                    <div className="space-y-6 max-w-2xl text-center lg:text-left relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 text-white backdrop-blur-md mb-2"
                        >
                            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                            <span className="text-sm font-bold tracking-wide uppercase">Upgrade Your Comfort</span>
                        </motion.div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                            Ready for Your Home&apos;s Next Upgrade?
                        </h2>
                        <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed font-medium">
                            Don&apos;t compromise on comfort. Trust the professional experts with over 15 years of industry-leading performance to service your home or business.
                        </p>
                    </div>

                    <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4 flex-shrink-0 relative z-10">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="/appointment" className="w-full sm:w-auto block">
                                <Button size="lg" className="w-full sm:w-auto h-16 px-8 text-xl rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl hover:shadow-accent/40 transition-all border-b-4 border-accent-foreground/20 active:border-b-0 active:translate-y-1">
                                    Get a Free Estimate
                                    <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="tel:18008581922" className="w-full sm:w-auto block">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto h-16 px-8 text-xl rounded-2xl border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-md shadow-lg">
                                    <Phone className="mr-2 h-6 w-6" />
                                    1-800-858-1922
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}
