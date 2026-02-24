"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ShoppingCart, Settings, ArrowRight } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Settings className="h-6 w-6 text-primary" />
                    <span className="font-bold text-xl tracking-tight hidden sm:inline-block">AD Trades Mechanical</span>
                    <span className="font-bold text-xl tracking-tight sm:hidden">AD Trades</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === link.href ? "text-primary bg-primary/10 px-3 py-1.5 rounded-md" : "text-muted-foreground"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center space-x-4">
                    <Link href="/cart">
                        <Button variant="ghost" size="icon" className="relative group">
                            <ShoppingCart className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </Button>
                    </Link>
                    <div className="hidden md:block">
                        <Link href="/appointment">
                            <Button>Book Appointment <ArrowRight className="ml-2 h-4 w-4" /></Button>
                        </Link>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t">
                    <div className="container flex flex-col space-y-4 py-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-primary ${pathname === link.href ? "text-primary" : "text-muted-foreground"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/appointment" onClick={() => setIsOpen(false)}>
                            <Button className="w-full mt-4">Book Appointment</Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
