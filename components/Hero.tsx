"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShieldCheck, Zap, Star, CheckCircle2, Users } from "lucide-react"
import { Button } from "./ui/button"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useEffect, useState, useRef } from "react"

// Smooth spring config
const spring = { type: "spring", stiffness: 60, damping: 20 }

// Counter animation hook
function useCounter(target: number, duration = 2000) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        let start = 0
        const step = target / (duration / 16)
        const timer = setInterval(() => {
            start += step
            if (start >= target) { clearInterval(timer); setCount(target) }
            else setCount(Math.floor(start))
        }, 16)
        return () => clearInterval(timer)
    }, [target, duration])
    return count
}

function StatBadge({ value, suffix, label, delay }: { value: number, suffix: string, label: string, delay: number }) {
    const count = useCounter(value, 1800)
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center"
        >
            <span className="text-3xl sm:text-4xl font-black text-white">{count}{suffix}</span>
            <span className="text-white/50 text-xs sm:text-sm mt-1 tracking-wide">{label}</span>
        </motion.div>
    )
}

export default function Hero() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const sectionRef = useRef<HTMLElement>(null)

    // Smooth spring-based parallax
    const springX = useSpring(mouseX, { stiffness: 40, damping: 25 })
    const springY = useSpring(mouseY, { stiffness: 40, damping: 25 })

    // Image parallax (subtle opposite movement)
    const imgX = useTransform(springX, [-300, 300], [12, -12])
    const imgY = useTransform(springY, [-300, 300], [10, -10])

    // Text parallax (very subtle)
    const textX = useTransform(springX, [-300, 300], [-5, 5])
    const textY = useTransform(springY, [-300, 300], [-3, 3])

    // Glow parallax
    const glowX = useTransform(springX, [-300, 300], [-40, 40])
    const glowY = useTransform(springY, [-300, 300], [-30, 30])

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = sectionRef.current?.getBoundingClientRect()
        if (!rect) return
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        mouseX.set(e.clientX - cx)
        mouseY.set(e.clientY - cy)
    }

    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
    }

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative bg-[#040d1b] min-h-[100vh] flex flex-col justify-center pt-28 pb-0 overflow-hidden select-none"
        >
            {/* ── Static grid ── */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />

            {/* ── Parallax ambient glows ── */}
            <motion.div
                style={{ x: glowX, y: glowY, willChange: "transform" }}
                className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                style={{ x: useTransform(glowX, v => v * -0.6), y: useTransform(glowY, v => v * -0.4), willChange: "transform" }}
                className="absolute bottom-0 left-[-5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"
            />

            {/* ── Main Content ── */}
            <div className="container relative z-10 px-4 md:px-6 mx-auto">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-8 items-center">

                    {/* LEFT ── Text column */}
                    <motion.div style={{ x: textX, y: textY, willChange: "transform" }} className="space-y-8">

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
                            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full backdrop-blur-sm"
                        >
                            <motion.span
                                animate={{ opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                className="relative flex h-2 w-2"
                            >
                                <span className="absolute inline-flex h-full w-full rounded-full bg-accent scale-[2.5] opacity-30" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                            </motion.span>
                            <span className="text-white/80 font-semibold tracking-[0.2em] text-[11px] uppercase">Trusted Since 2009 · A+ Rated</span>
                        </motion.div>

                        {/* Main Headline */}
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[3.8rem] sm:text-[5rem] md:text-[5.8rem] font-black tracking-[-0.03em] text-white leading-[0.95]"
                            >
                                Your Home.
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden -mt-3">
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[3.8rem] sm:text-[5rem] md:text-[5.8rem] font-black tracking-[-0.03em] leading-[0.95] bg-gradient-to-r from-blue-400 via-primary to-cyan-400 bg-clip-text text-transparent"
                            >
                                Perfect Temp.
                            </motion.div>
                        </div>

                        {/* Sub */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                            className="text-lg text-slate-400 leading-relaxed max-w-md"
                        >
                            AD Trades Mechanical delivers industry-leading HVAC solutions — from emergency repairs to full system replacements. Available 24/7.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.75, duration: 0.8, ease: "easeOut" }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link href="/appointment">
                                <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                                    <Button size="lg" className="h-14 px-8 text-base font-bold rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_-5px_rgba(37,99,235,0.8)] border-0">
                                        <Zap className="mr-2 h-5 w-5 text-yellow-300" />
                                        Book a Service
                                    </Button>
                                </motion.div>
                            </Link>
                            <Link href="/services">
                                <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                                    <Button size="lg" variant="outline" className="h-14 px-8 text-base font-bold rounded-full border border-white/15 text-white/90 bg-white/5 hover:bg-white/10">
                                        Explore Services
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </motion.div>
                            </Link>
                        </motion.div>

                        {/* Trust badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="flex flex-wrap gap-5 pt-2"
                        >
                            {["Licensed & Insured", "100% Satisfaction", "24/7 Emergency"].map((t, i) => (
                                <div key={t} className="flex items-center gap-2 text-white/50 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                                    <span>{t}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* RIGHT ── Image column */}
                    <div className="relative flex justify-center lg:justify-end items-center">

                        {/* Rotating glow ring – CSS only = zero JS cost */}
                        <div className="absolute w-[440px] h-[440px] rounded-full border border-blue-500/10 animate-[spin_25s_linear_infinite] pointer-events-none" />
                        <div className="absolute w-[520px] h-[520px] rounded-full border border-white/5 animate-[spin_40s_linear_infinite_reverse] pointer-events-none" />

                        {/* Image card with parallax */}
                        <motion.div
                            style={{ x: imgX, y: imgY, willChange: "transform" }}
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-[320px] h-[420px] sm:w-[380px] sm:h-[490px] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_25px_80px_-10px_rgba(0,0,10,0.9)] z-20"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-[#040d1b] via-transparent to-transparent z-10" />
                            <Image
                                src="/heroImage.jpg"
                                alt="AD Trades Mechanical - Professional HVAC Services"
                                fill
                                priority
                                className="object-cover object-center"
                            />
                        </motion.div>

                        {/* Floating glass card – top left */}
                        <motion.div
                            initial={{ opacity: 0, x: -30, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: 0.9, duration: 0.7, ...spring }}
                            style={{ willChange: "transform" }}
                            className="absolute left-[2%] lg:-left-[8%] top-[10%] bg-white/5 backdrop-blur-2xl rounded-2xl px-5 py-4 border border-white/10 shadow-2xl z-30 flex items-center gap-4"
                        >
                            <div className="h-11 w-11 bg-yellow-400/20 rounded-full flex items-center justify-center shrink-0">
                                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            </div>
                            <div>
                                <div className="flex gap-0.5 mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-white font-bold text-sm leading-tight">5.0 Rating</p>
                                <p className="text-slate-400 text-xs">from 240+ reviews</p>
                            </div>
                        </motion.div>

                        {/* Floating glass card – bottom right */}
                        <motion.div
                            initial={{ opacity: 0, x: 30, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: 1.1, duration: 0.7, ...spring }}
                            style={{ willChange: "transform" }}
                            className="absolute right-[2%] lg:-right-[4%] bottom-[12%] bg-white/5 backdrop-blur-2xl rounded-2xl px-5 py-4 border border-white/10 shadow-2xl z-30 flex items-center gap-4"
                        >
                            <div className="h-11 w-11 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0">
                                <Users className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm leading-tight">10,000+ Clients</p>
                                <p className="text-slate-400 text-xs">across the region</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* ── Stats strip ── */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                className="relative z-10 mt-16 border-t border-white/5"
            >
                <div className="container mx-auto px-4 md:px-6 py-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-0 sm:divide-x divide-white/5">
                        <StatBadge value={15} suffix="+" label="Years Experience" delay={1.3} />
                        <div className="sm:pl-8"><StatBadge value={10000} suffix="+" label="Jobs Completed" delay={1.4} /></div>
                        <div className="sm:pl-8"><StatBadge value={99} suffix="%" label="Satisfaction Rate" delay={1.5} /></div>
                        <div className="sm:pl-8"><StatBadge value={24} suffix="/7" label="Emergency Service" delay={1.6} /></div>
                    </div>
                </div>
            </motion.div>

        </section>
    )
}
