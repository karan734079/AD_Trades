import { Wind, ThermometerSnowflake, Wrench, RefreshCw, ShieldCheck, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

const serviceData: Record<string, any> = {
    "furnace-installation": {
        icon: Wind,
        title: "Furnace Installation",
        description: "Keep your home warm during the coldest months with our high-efficiency heating systems. We assess your home's unique heating requirements and install premium furnaces from leading brands to ensure lasting comfort and lower energy bills.",
        features: ["Energy Audit", "High-Efficiency Models", "Professional Installation", "Post-Install Inspection"]
    },
    "ac-installation": {
        icon: ThermometerSnowflake,
        title: "AC Installation",
        description: "Beat the heat with state-of-the-art cooling technology. Whether you need a brand-new central air system or an upgrade to your existing unit, our technicians size and install your AC for optimal performance.",
        features: ["SEER Rating Guidance", "Ductwork Assessment", "Smart Thermostat Integration", "Cooling Guarantees"]
    },
    "hvac-repair": {
        icon: Wrench,
        title: "HVAC Repair",
        description: "Strange noises, inconsistent temperatures, or a complete system breakdown? Our diagnosis experts quickly identify the root cause and provide upfront, transparent pricing for all necessary repairs.",
        features: ["Rapid Diagnostics", "Stocked Service Vehicles", "Honest Pricing", "All Makes & Models"]
    },
    "heat-pump-installation": {
        icon: RefreshCw,
        title: "Heat Pump Installation",
        description: "Experience the versatility of a heat pump, providing both heating and cooling in a single, energy-efficient package. We specialize in both traditional and advanced cold-climate heat pump installations.",
        features: ["Year-Round Comfort", "Energy Savings", "Ductless Options", "Rebate Assistance"]
    },
    "maintenance": {
        icon: ShieldCheck,
        title: "Maintenance",
        description: "The best way to avoid costly repairs is regular maintenance. Our comprehensive tune-ups clean, inspect, and calibrate your HVAC simply to peak efficiency prior to the heavy usage seasons.",
        features: ["Filter Replacements", "Coil Cleaning", "System Calibration", "Safety Checks"]
    },
    "emergency-service": {
        icon: AlertTriangle,
        title: "Emergency Service",
        description: "HVAC emergencies don't stick to business hours. We provide round-the-clock rapid response for heating failures in freezing conditions or cooling breakdowns during dangerous heatwaves.",
        features: ["No Overtime Shock", "Priority Response", "Emergency Repairs", "Temporary Solutions"]
    }
}

export function generateStaticParams() {
    return Object.keys(serviceData).map(slug => ({
        slug
    }))
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const data = serviceData[params.slug]

    if (!data) {
        notFound()
    }

    const Icon = data.icon

    return (
        <div className="bg-background min-h-[80vh] py-24">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <Link href="/services" className="text-primary hover:underline mb-8 inline-block">
                        &larr; Back to all services
                    </Link>

                    <div className="bg-card rounded-[3rem] p-12 lg:p-16 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)] border border-border">
                        <div className="h-24 w-24 rounded-3xl bg-secondary/10 flex items-center justify-center text-primary mb-8 shadow-inner overflow-hidden border border-border/50">
                            <Icon className="h-12 w-12" />
                        </div>

                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
                            {data.title}
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed font-medium mb-12">
                            {data.description}
                        </p>

                        <div className="mb-12">
                            <h3 className="text-2xl font-bold mb-6">Service Benefits</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {data.features.map((feature: string, j: number) => (
                                    <li key={j} className="flex items-center text-lg font-medium p-4 bg-secondary/5 rounded-2xl border border-border/50">
                                        <div className="h-2.5 w-2.5 bg-primary rounded-full mr-4 shadow-sm" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gradient-to-r from-primary/10 to-transparent p-8 rounded-3xl border border-primary/20">
                            <h3 className="text-2xl font-bold mb-4">Need {data.title} right away?</h3>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/appointment">
                                    <Button size="lg" className="rounded-full shadow-lg">Schedule an Appointment</Button>
                                </Link>
                                <Link href="tel:2262606697">
                                    <Button size="lg" variant="outline" className="rounded-full">Call (226) 260-6697</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
