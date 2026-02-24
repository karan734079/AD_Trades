"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    phone: z.string().min(10, { message: "Phone number must be at least 10 characters." }),
    service: z.string().min(2, { message: "Please enter a requested service." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactForm() {
    const [isSuccess, setIsSuccess] = useState(false)
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        setIsSuccess(true)
        reset()
        setTimeout(() => setIsSuccess(false), 5000)
    }

    return (
        <div className="bg-card shadow-lg border border-border rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            {isSuccess && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-card/95 backdrop-blur-sm">
                    <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold">Message Sent!</h3>
                    <p className="text-muted-foreground mt-2">We&apos;ll get back to you shortly.</p>
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-2xl font-bold tracking-tight">Send us a message</h3>
                <p className="text-muted-foreground mt-2">Fill out the form below and our team will respond within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" {...register("name")} placeholder="John Doe" />
                        {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" {...register("email")} placeholder="john@example.com" />
                        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" {...register("phone")} placeholder="(555) 123-4567" />
                        {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="service">Service Needed</Label>
                        <Input id="service" {...register("service")} placeholder="AC Repair" />
                        {errors.service && <p className="text-sm text-destructive">{errors.service.message}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Tell us about your issue..."
                        className="min-h-[120px]"
                    />
                    {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                </div>

                <Button type="submit" className="w-full h-12" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : (
                        <>
                            Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                    )}
                </Button>
            </form>
        </div>
    )
}
