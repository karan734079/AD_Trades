import { Wind, ThermometerSnowflake, Wrench, RefreshCw, ShieldCheck, AlertTriangle } from "lucide-react"

export const metadata = {
    title: "Services | AD Trades Mechanical",
    description: "Furnace installation, AC repair, heat pumps, and emergency HVAC services.",
}

const detailedServices = [
    {
        icon: Wind,
        title: "Furnace Installation & Replacement",
        description: "Keep your home warm during the coldest months with our high-efficiency heating systems. We assess your home's unique heating requirements and install premium furnaces from leading brands to ensure lasting comfort and lower energy bills.",
        features: ["Energy Audit", "High-Efficiency Models", "Professional Installation", "Post-Install Inspection"]
    },
    {
        icon: ThermometerSnowflake,
        title: "AC Installation & Upgrades",
        description: "Beat the heat with state-of-the-art cooling technology. Whether you need a brand-new central air system or an upgrade to your existing unit, our technicians size and install your AC for optimal performance.",
        features: ["SEER Rating Guidance", "Ductwork Assessment", "Smart Thermostat Integration", "Cooling Guarantees"]
    },
    {
        icon: Wrench,
        title: "HVAC Repair Services",
        description: "Strange noises, inconsistent temperatures, or a complete system breakdown? Our diagnosis experts quickly identify the root cause and provide upfront, transparent pricing for all necessary repairs.",
        features: ["Rapid Diagnostics", "Stocked Service Vehicles", "Honest Pricing", "All Makes & Models"]
    },
    {
        icon: RefreshCw,
        title: "Heat Pump Systems",
        description: "Experience the versatility of a heat pump, providing both heating and cooling in a single, energy-efficient package. We specialize in both traditional and advanced cold-climate heat pump installations.",
        features: ["Year-Round Comfort", "Energy Savings", "Ductless Options", "Rebate Assistance"]
    },
    {
        icon: ShieldCheck,
        title: "Preventative Maintenance",
        description: "The best way to avoid costly repairs is regular maintenance. Our comprehensive tune-ups clean, inspect, and calibrate your HVAC simply to peak efficiency prior to the heavy usage seasons.",
        features: ["Filter Replacements", "Coil Cleaning", "System Calibration", "Safety Checks"]
    },
    {
        icon: AlertTriangle,
        title: "24/7 Emergency Service",
        description: "HVAC emergencies don't stick to business hours. We provide round-the-clock rapid response for heating failures in freezing conditions or cooling breakdowns during dangerous heatwaves.",
        features: ["No Overtime Shock", "Priority Response", "Emergency Repairs", "Temporary Solutions"]
    }
]

export default function ServicesPage() {
    return (
        <div className="bg-background min-h-screen">
            <div className="bg-secondary text-secondary-foreground py-24 border-b border-border/10">
                <div className="container px-4 md:px-6">
                    <div className="max-w-3xl space-y-6">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
                            HVAC Solutions You Can Depend On
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            We offer a full spectrum of mechanical services, from minor repairs to whole-house system installations. Discover how we can optimize your home's climate.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container px-4 md:px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {detailedServices.map((service, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-6 p-8 bg-card rounded-3xl shadow-sm border border-border hover:shadow-xl transition-all">
                            <div className="shrink-0 h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                <service.icon className="h-8 w-8" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="grid grid-cols-2 gap-2 pt-4 border-t border-border/50">
                                    {service.features.map((feature, j) => (
                                        <li key={j} className="flex items-center text-sm font-medium">
                                            <div className="h-2 w-2 bg-primary rounded-full mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
