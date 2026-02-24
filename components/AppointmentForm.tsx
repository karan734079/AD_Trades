"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { useState } from "react"
import { CalendarCheck, CheckCircle2 } from "lucide-react"

const formSchema = z.object({
    fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    phone: z.string().min(10, { message: "Phone number must be at least 10 characters." }),
    service: z.string().min(2, { message: "Please select a service." }),
    date: z.string().min(1, { message: "Please select a preferred date." }),
    time: z.string().min(1, { message: "Please select a preferred time." }),
    message: z.string().optional(),
})

export default function AppointmentForm() {
    const [success, setSuccess] = useState(false)
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Appointment Booked Data:", values)
        setSuccess(true)
        reset()
        setTimeout(() => setSuccess(false), 5000)
    }

    return (
        <div className="bg-card shadow-xl border border-border rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {success && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-card/95 backdrop-blur-sm">
                    <CheckCircle2 className="h-24 w-24 text-green-500 mb-6 drop-shadow-lg" />
                    <h3 className="text-3xl font-extrabold text-foreground">Booking Confirmed!</h3>
                    <p className="text-lg text-muted-foreground mt-4 text-center max-w-sm">
                        Thank you for choosing AD Trades Mechanical. Our representative will contact you shortly to confirm your appointment details.
                    </p>
                </div>
            )}

            <div className="mb-10 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                    <CalendarCheck className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Schedule an Appointment</h2>
                <p className="text-muted-foreground mt-3 text-lg">Fast, reliable, and professional HVAC services just a few clicks away.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-sm font-semibold">Full Name</Label>
                        <Input id="fullName" {...register("fullName")} placeholder="Jane Doe" className="h-12" />
                        {errors.fullName && <p className="text-sm text-destructive font-medium">{errors.fullName.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-semibold">Email Address</Label>
                        <Input id="email" type="email" {...register("email")} placeholder="jane@example.com" className="h-12" />
                        {errors.email && <p className="text-sm text-destructive font-medium">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-semibold">Phone Number</Label>
                        <Input id="phone" type="tel" {...register("phone")} placeholder="(123) 456-7890" className="h-12" />
                        {errors.phone && <p className="text-sm text-destructive font-medium">{errors.phone.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="service" className="text-sm font-semibold">Service Required</Label>
                        <select
                            id="service"
                            {...register("service")}
                            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <option value="">Select a service...</option>
                            <option value="Furnace Installation">Furnace Installation</option>
                            <option value="AC Installation">AC Installation</option>
                            <option value="HVAC Repair">HVAC Repair</option>
                            <option value="Heat Pump Installation">Heat Pump Installation</option>
                            <option value="Maintenance">Maintenance</option>
                            <option value="Emergency Service">Emergency Service</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.service && <p className="text-sm text-destructive font-medium">{errors.service.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="date" className="text-sm font-semibold">Preferred Date</Label>
                        <Input id="date" type="date" {...register("date")} className="h-12" />
                        {errors.date && <p className="text-sm text-destructive font-medium">{errors.date.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="time" className="text-sm font-semibold">Preferred Time</Label>
                        <select
                            id="time"
                            {...register("time")}
                            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <option value="">Select a time...</option>
                            <option value="Morning (8AM - 12PM)">Morning (8AM - 12PM)</option>
                            <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
                            <option value="Evening (4PM - 8PM)">Evening (4PM - 8PM)</option>
                            <option value="As soon as possible">As soon as possible (Emergency)</option>
                        </select>
                        {errors.time && <p className="text-sm text-destructive font-medium">{errors.time.message}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold">Additional Details (Optional)</Label>
                    <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Please describe any specific issues or requirements..."
                        className="min-h-[150px] resize-y"
                    />
                </div>

                <Button type="submit" className="w-full h-14 text-lg font-bold shadow-lg" disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "Confirm Appointment Request"}
                </Button>
            </form>
        </div>
    )
}
