import { User } from "lucide-react";
import { ScrollingAnimation } from "./ScrollingAnimation";
const testimonials = [
    {
        name: "Sarah Jhonson",
        role: "Product Designer",
        image: "<User />",
        content: "Clean design, easy to use, and very reliable. Highly recommended!"
    },
    {
        name: "Michael Chen",
        role: "Software Developer",
        image: "<User />",
        content: "Great experience overall. Everything works smoothly and looks professional."
    },
    {
        name: "David Rodrizuez",
        role: "Startup Founder",
        image: "<User />",
        content: "Fast, simple, and very effective. Exactly what I needed."
    },
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
            <ScrollingAnimation>
                <div className="max-w-7xl mx-auto scrollingAnimation duration-700">
                    <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
                        <div className="lg:w-1/2 lg:text-left w-full text-center">
                                <h2 className="text-6xl sm:text-6xl md:text-7xl font-bold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-400">
                                    What developers are saying about us.
                                </h2>
                                <p className="text-gray-400 text-sm lg:text-base font-bold leading-relaxed">
                                    Create, launch, and grow your project with tools designed for creators.
                                </p>
                        </div>

                        {/** Right side testimonials */}
                        <div className="lg:w-1/2 w-full">
                            <div className="space-y-6 sm:space-y-8">
                                {testimonials.map((testimonial, key) => (
                                    <div key={key} className="bg-slate-950/60 border border-slate-900/20 rounded-xl p-4 sm:p-6 backdrop-blur-lg">
                                        <div className="flex items-start space-x-3 sm:space-x-4 gap-4">
                                            <div className="flex-shrink-0">

                                                <div className="text-lg lg:text-xl font-bold bg-blue-600 bg-clip-text text-transparent">
                                                    "
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-sm lg:text-base text-gray-300 leading-relaxed mb-5 sm:mb-7 font-mono">{testimonial.content}</p>
                                                <div className="flex space-x-2 items-center">
                                                    <User className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-500 object-cover" />
                                                    <div>
                                                        <h6 className="font-semibold text-md lg:text-base text-white">{testimonial.name}</h6>
                                                        <p className="text-xs lg:text-base text-gray-300">{testimonial.role}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>    
            </ScrollingAnimation>
        </section>
    )
}