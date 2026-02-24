"use client"

import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

const reviews = [
    {
        name: "Michael Thompson",
        role: "Homeowner",
        rating: 5,
        text: "Outstanding service! My AC broke down right before a heatwave, and AD Trades Mechanical was there the same day. The technician was polite, explained the issue clearly, and had it running in under an hour."
    },
    {
        name: "Sarah Jenkins",
        role: "Business Owner",
        rating: 5,
        text: "We used them for a full furnace replacement. The team was incredibly professional, respected our home, and offered a great price. It's rare to find such honest tradespeople these days."
    },
    {
        name: "Robert Lewis",
        role: "Homeowner",
        rating: 5,
        text: "I've been using them for annual maintenance for 3 years now. Always punctual, never try to upsell things I don't need. Highly recommend their services to anyone in the area."
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
}

export default function Testimonials() {
    return (
        <section className="py-24 bg-background relative border-t border-border overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-4 mb-16 max-w-3xl mx-auto"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary font-bold text-sm tracking-wider uppercase mb-2 border border-primary/10 shadow-sm">
                        Client Success Stories
                    </span>
                    <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                        What Our Customers Say About Us
                    </h2>
                    <p className="text-muted-foreground text-lg sm:text-xl">
                        We pride ourselves on honesty, integrity, and quality workmanship.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {reviews.map((review, i) => (
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -15, scale: 1.02 }}
                            key={i}
                            className="bg-card rounded-[2rem] p-8 md:p-10 border border-border flex flex-col shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 relative group overflow-hidden"
                        >
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />

                            <Quote className="absolute top-8 right-8 h-12 w-12 text-primary/10 rotate-180 group-hover:text-primary/20 group-hover:scale-110 group-hover:-rotate-[190deg] transition-all duration-500" />

                            <div className="flex space-x-1 mb-6">
                                {[...Array(review.rating)].map((_, j) => (
                                    <motion.div
                                        key={j}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + (j * 0.1), type: "spring" }}
                                    >
                                        <Star className="h-5 w-5 fill-accent text-accent drop-shadow-sm" />
                                    </motion.div>
                                ))}
                            </div>

                            <div className="relative flex-grow mb-8">
                                <p className="text-foreground/90 font-medium leading-relaxed relative z-10 text-lg">
                                    &quot;{review.text}&quot;
                                </p>
                            </div>

                            <div className="flex items-center space-x-4 pt-6 border-t border-border mt-auto">
                                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white shadow-md text-lg group-hover:scale-110 transition-transform duration-300">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-foreground">
                                        {review.name}
                                    </div>
                                    <div className="text-sm text-primary font-medium">
                                        {review.role}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
