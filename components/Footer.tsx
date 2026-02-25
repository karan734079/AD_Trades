import Link from "next/link"
import { Settings, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Settings className="h-6 w-6 text-primary" />
                            <span className="font-bold text-xl tracking-tight text-white">AD Trades</span>
                        </Link>
                        <p className="text-sm text-slate-400 max-w-xs">
                            Premium HVAC installation, repair, and maintenance services you can trust. Available 24/7 for all your needs.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-900 rounded-full hover:bg-primary">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-900 rounded-full hover:bg-primary">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-900 rounded-full hover:bg-primary">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-900 rounded-full hover:bg-primary">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-lg text-white">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/appointment" className="hover:text-white transition-colors">Book Appointment</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-lg text-white">Services</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link href="/services/furnace-installation" className="hover:text-white transition-colors">Furnace Installation</Link></li>
                            <li><Link href="/services/ac-installation" className="hover:text-white transition-colors">AC Installation</Link></li>
                            <li><Link href="/services/hvac-repair" className="hover:text-white transition-colors">HVAC Repair</Link></li>
                            <li><Link href="/services/heat-pump-installation" className="hover:text-white transition-colors">Heat Pump</Link></li>
                            <li><Link href="/services/maintenance" className="hover:text-white transition-colors">Maintenance</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-lg text-white">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span>123 HVAC Street, Mechanical City, CA 90210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <span>(226) 260-6697</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <span>info@adtradesmechanical.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} AD Trades Mechanical Inc. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
