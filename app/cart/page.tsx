import Link from "next/link"
import { ShoppingCart, ArrowLeft, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
    title: "Your Cart | AD Trades Mechanical",
    description: "View items in your cart. Ready to schedule service?",
}

export default function CartPage() {
    return (
        <div className="flex flex-col min-h-[70vh] items-center justify-center p-4">
            <div className="max-w-md w-full bg-card p-10 rounded-3xl shadow-lg border border-border text-center flex flex-col items-center space-y-6">
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <ShoppingCart className="h-12 w-12" />
                </div>

                <div className="space-y-2">
                    <h2 className="text-3xl font-extrabold tracking-tight">Your cart is empty</h2>
                    <p className="text-muted-foreground text-lg">
                        Looking for HVAC services? Let's get your appointment scheduled with our experts.
                    </p>
                </div>

                <div className="w-full space-y-4 pt-4 border-t border-border">
                    <Link href="/appointment" className="w-full block">
                        <Button size="lg" className="w-full h-14 text-lg rounded-full shadow-lg">
                            <Calendar className="mr-2 h-5 w-5" /> Book Appointment
                        </Button>
                    </Link>
                    <Link href="/" className="w-full block">
                        <Button size="lg" variant="outline" className="w-full h-14 text-lg rounded-full">
                            <ArrowLeft className="mr-2 h-5 w-5" /> Continue Browsing
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
