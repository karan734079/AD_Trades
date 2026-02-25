"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, ShieldCheck, Zap } from "lucide-react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="relative bg-[#050B14] min-h-[100vh] flex items-center pt-32 pb-24 overflow-hidden">
            {/* Background WOW elements */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />

            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 -right-[20%] w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] border border-white/5 rounded-full pointer-events-none z-0"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 -right-[15%] w-[70vw] h-[70vw] max-w-[1000px] max-h-[1000px] border border-primary/10 rounded-full pointer-events-none z-0 border-dashed"
            />

            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[150px] pointer-events-none -z-10"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-accent/20 rounded-full blur-[150px] pointer-events-none -z-10"
            />

            <div className="container relative z-10 px-4 md:px-6 mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-10 max-w-2xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full backdrop-blur-md"
                        >
                            <span className="flex h-3 w-3 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                            </span>
                            <span className="text-white font-bold tracking-widest text-sm uppercase">Next Generation HVAC</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-[1.05]"
                        >
                            Master <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Your Climate.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-xl font-light"
                        >
                            Experience unparalleled comfort with our ultra-efficient heating and cooling systems, designed to transform your space.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-5 pt-4"
                        >
                            <Link href="/appointment">
                                <Button size="lg" className="w-full sm:w-auto h-16 px-10 text-xl font-bold rounded-full bg-primary hover:bg-primary/80 text-white shadow-[0_0_40px_-10px_rgba(37,99,235,0.8)] hover:shadow-[0_0_60px_-10px_rgba(37,99,235,1)] hover:-translate-y-1 transition-all">
                                    <Zap className="mr-3 h-6 w-6 text-accent" />
                                    Book Service
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto h-16 px-10 text-xl font-bold rounded-full border border-white/20 text-white bg-white/5 hover:bg-white/10 backdrop-blur-md hover:-translate-y-1 transition-all">
                                    Explore Solutions
                                    <ArrowRight className="ml-3 h-6 w-6" />
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="relative mx-auto w-full max-w-[650px] lg:max-w-none flex justify-center lg:justify-end perspective-[1000px]"
                    >
                        {/* 3D Orbiting Display Container */}
                        <div className="relative w-full aspect-square max-w-[550px] flex items-center justify-center">

                            {/* Inner Orbiting rings */}
                            <motion.div
                                animate={{ rotate: 360, rotateX: 60, rotateY: 20 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[110%] h-[110%] border-2 border-primary/30 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360, rotateX: 40, rotateY: -30 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[130%] h-[130%] border border-accent/20 rounded-full border-dashed"
                            />

                            {/* Main Floating Image */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-[300px] h-[400px] sm:w-[350px] sm:h-[480px] rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/40 border-4 border-white/10 z-20 group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                                <Image
                                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=2069"
                                    alt="Advanced HVAC System"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute bottom-6 inset-x-0 z-20 px-8 text-center border-t border-white/10 pt-4 backdrop-blur-sm mx-4 bg-black/20 rounded-2xl">
                                    <p className="font-bold text-white tracking-widest text-sm uppercase">Smart Climate</p>
                                    <p className="text-accent text-xs mt-1">Status: Optimized</p>
                                </div>
                            </motion.div>

                            {/* Orbiting Satellite Cards */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[120%] h-[120%] z-30 pointer-events-none"
                            >
                                <motion.div
                                    className="absolute -top-[5%] left-1/2 -translate-x-1/2 bg-[#0B1528]/90 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-white/10 flex items-center gap-4 pointer-events-auto"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                >
                                    <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center">
                                        <ShieldCheck className="text-primary w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">Certified</p>
                                        <p className="text-slate-400 text-xs">A+ Rating</p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[140%] h-[140%] z-30 pointer-events-none"
                            >
                                <motion.div
                                    className="absolute bottom-[10%] -left-[10%] bg-[#0B1528]/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/10 flex items-center gap-3 pointer-events-auto"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                >
                                    <div className="flex border-r border-white/10 pr-3">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <svg key={s} className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                    </div>
                                    <p className="text-white font-bold text-xs uppercase tracking-wider">Top Rated</p>
                                </motion.div>
                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
