"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, ChevronDown, Flame, ArrowRight, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
    { name: "Home", href: "/" },
    {
        name: "Services", href: "/services",
        sub: ["AC Installation", "Heating Systems", "Duct Cleaning", "Maintenance Plans"]
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
    const pathname = usePathname()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#040d1b]/98 backdrop-blur-2xl border-b border-white/8 shadow-[0_4px_40px_rgba(0,0,0,0.5)]" : "bg-[#040d1b]/85 backdrop-blur-xl border-b border-white/5"}`}
            >
                <nav className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between h-20">

                        {/* ── Logo ── */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.5)] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.8)] transition-shadow">
                                <Flame className="w-5 h-5 text-white" />
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-[#040d1b] shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                            </div>
                            <div className="leading-none">
                                <span className="block font-black text-white text-lg tracking-tight">AD Trades</span>
                                <span className="block text-[10px] text-blue-400/80 font-semibold tracking-[0.15em] uppercase">Mechanical</span>
                            </div>
                        </Link>

                        {/* ── Desktop Nav links ── */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href
                                const hasSub = link.sub?.length

                                return (
                                    <div
                                        key={link.href}
                                        className="relative"
                                        onMouseEnter={() => hasSub && setHoveredMenu(link.name)}
                                        onMouseLeave={() => setHoveredMenu(null)}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`relative flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200
                                                ${isActive ? "text-white" : "text-white/55 hover:text-white/90"}`}
                                        >
                                            {/* Active pill */}
                                            {isActive && (
                                                <motion.span
                                                    layoutId="nav-active-pill"
                                                    className="absolute inset-0 rounded-full bg-white/8 border border-white/10"
                                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                                />
                                            )}
                                            <span className="relative">{link.name}</span>
                                            {hasSub && (
                                                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 relative ${hoveredMenu === link.name ? "rotate-180" : ""}`} />
                                            )}
                                        </Link>

                                        {/* Dropdown */}
                                        <AnimatePresence>
                                            {hasSub && hoveredMenu === link.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                                    transition={{ duration: 0.18, ease: "easeOut" }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-[#0a1628]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden"
                                                >
                                                    <div className="p-2">
                                                        {link.sub!.map((item) => (
                                                            <Link
                                                                key={item}
                                                                href="/services"
                                                                className="block px-4 py-2.5 rounded-xl text-white/60 hover:text-white hover:bg-white/5 text-sm transition-all"
                                                            >
                                                                {item}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )
                            })}
                        </div>

                        {/* ── Right group ── */}
                        <div className="hidden lg:flex items-center gap-3">
                            {/* Phone pill */}
                            <a href="tel:18008581922" className="group flex items-center gap-2.5 bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/15 px-5 py-2.5 rounded-full transition-all duration-200">
                                <div className="w-7 h-7 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-blue-500/30 transition-colors">
                                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                                </div>
                                <div className="leading-none">
                                    <span className="block text-[10px] text-white/40 font-medium tracking-widest uppercase mb-0.5">Call Us</span>
                                    <span className="block text-white text-sm font-bold">1-800-858-1922</span>
                                </div>
                            </a>

                            {/* CTA */}
                            <Link href="/appointment">
                                <motion.button
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-6 py-3 rounded-full shadow-[0_0_25px_-5px_rgba(37,99,235,0.7)] hover:shadow-[0_0_35px_-3px_rgba(37,99,235,0.9)] transition-all duration-200"
                                >
                                    <Sparkles className="w-4 h-4 text-yellow-300" />
                                    Book Now
                                </motion.button>
                            </Link>
                        </div>

                        {/* ── Mobile burger ── */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {isOpen
                                    ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X className="w-5 h-5" /></motion.span>
                                    : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu className="w-5 h-5" /></motion.span>
                                }
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </nav>
            </motion.header>

            {/* ── Mobile menu ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="fixed inset-x-4 top-24 z-40 bg-[#0a1628]/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden"
                    >
                        <div className="p-5 space-y-1">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05, duration: 0.25 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-3.5 rounded-2xl text-base font-semibold transition-colors ${pathname === link.href ? "bg-blue-600/20 text-blue-400" : "text-white/70 hover:text-white hover:bg-white/5"}`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <div className="p-5 pt-0 grid grid-cols-2 gap-3">
                            <a href="tel:18008581922" className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white/80 py-3 rounded-2xl text-sm font-semibold">
                                <Phone className="w-4 h-4 text-blue-400" /> Call Us
                            </a>
                            <Link href="/appointment" onClick={() => setIsOpen(false)}>
                                <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-2xl text-sm font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                    <Sparkles className="w-4 h-4 text-yellow-300" /> Book Now
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
