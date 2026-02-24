"use client"

import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

const reviews = [
    {
        name: "Michael Thompson",
        rating: 5,
        text: "Outstanding service! My AC broke down right before a heatwave, and AD Trades Mechanical was there the same day. The technician was polite, explained the issue clearly, and had it running in under an hour."
    },
    {
        name: "Sarah Jenkins",
        rating: 5,
        text: "We used them for a full furnace replacement. The team was incredibly professional, respected our home, and offered a great price. It's rare to find such honest tradespeople these days."
    },
    {
        name: "Robert Lewis",
        rating: 5,
        text: "I've been using them for annual maintenance for 3 years now. Always punctual, never try to upsell things I don't need. Highly recommend their services to anyone in the area."
    }
]

export default function Testimonials() {
    return (
        <section className="py-32 bg-secondary relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-secondary to-transparent" />
            <div className="absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-t from-secondary to-transparent" />
            <div className="absolute -left-1/4 top-1/2 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen blur-[120px]" />
            <div className="absolute -right-1/4 top-1/4 w-[30rem] h-[30rem] bg-accent/10 rounded-full mix-blend-screen blur-[150px]" />

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center space-y-6 mb-24"
                >
                    <div className="inline-flex items-center space-x-2 text-primary font-bold uppercase tracking-widest text-sm bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                        <Quote className="w-5 h-5 text-primary" />
                        <span>Success Stories</span>
                    </div>
                    <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-md">
                        What Our Customers Say
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl font-medium">
                        Don&apos;t just take our word for it. Read why homeowners trust us for all their HVAC needs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: i * 0.2, type: "spring", bounce: 0.3 }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ y: -15, scale: 1.05 }}
                            className="relative bg-card/10 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/10 hover:border-primary/50 transition-colors duration-500 overflow-hidden group"
                        >
                            <div className="absolute -right-6 -top-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/40 transition-all duration-700" />

                            <Quote className="absolute top-10 right-10 h-24 w-24 text-white/5 -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-700" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex space-x-1 mb-8">
                                    {[...Array(review.rating)].map((_, j) => (
                                        <motion.div
                                            key={j}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.5 + (j * 0.1) }}
                                        >
                                            <Star className="h-6 w-6 fill-accent text-accent drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                                        </motion.div>
                                    ))}
                                </div>

                                <p className="text-white/90 italic mb-10 leading-relaxed text-lg flex-grow relative">
                                    <span className="text-primary text-2xl absolute -left-4 -top-2">&quot;</span>
                                    {review.text}
                                    <span className="text-primary text-2xl absolute -bottom-4 ml-2">&quot;</span>
                                </p>

                                <div className="flex items-center space-x-4 border-t border-white/10 pt-6">
                                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg ring-2 ring-white/20">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div className="font-bold text-white tracking-wide text-lg">
                                        {review.name}
                                        <div className="text-sm font-medium text-primary mt-1">Verified Customer</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
