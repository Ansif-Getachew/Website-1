import { Star, Check } from "lucide-react";
import { ScrollingAnimation } from "./ScrollingAnimation";

const plans = [
    {
        name: "Starter",
        price: "$ 14.99",
        descripiton: "Perfect for Individuals and small teams",
        features: [
            "Up to 5 teams",
            "10Gb storage",
            "Basic analytics",
            "Email support",
            "API access",
            "Mobile App",
        ],
        popular: false,
    },
    {
        name: "Professional",
        price: "$ 27.99",
        descripiton: "Best for growing bussines",
        features: [
            "Up to 25 teams",
            "100Gb storage",
            "Advanced analytics",
            "Priority Supprot",
            "Email support",
            "API access",
            "Custom Intergration",
            "Mobile App",
            "Advanced secrurity"
        ],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "$ 39.99",
        descripiton: "For large organization",
        features: [
            "Unlimited team member",
            "Unlimited storage storage",
            "Enterprice analytics",
            "24.7 works",
            "Email support",
            "API access",
            "Mobile App",
            "Custom Intergretion",
            "Andvanced security",
            "Dedicated account manager",
        ],
        popular: false,
    },

];

export default function Pricing() {
    return (
        <section id="pricing" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
            <ScrollingAnimation>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-15 sm:mb-20 lg:mb-14 leading-relaxed">
                            <h2 className="text-6xl sm:text-6xl md:text-7xl font-bold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-400">
                                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                    Simple Pricing 
                                </span>
                                <br />
                                <span className="bg-gradient-to-br from-blue-900 to-purple-700 bg-clip-text text-transparent">
                                    Plan
                                </span>
                            </h2>
                            <p className="text-gray-400 text-base lg:text-lg font-bold leading-relaxed">
                                Choose the perfect plan that suites you. All plans include a 14-day free trail.
                            </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ">
                        {plans.map((plan, key) => (
                            <div key={key} className={`relative bg-slate-950/50 backdrop-blur-xl rounded-xl border p-6 sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full ${plan.popular ? "border-blue-500/70 shadow-2xl  shadow-blue-600/60 lg:scale-105" : "border border-slate-800 hover:border-gray-500"}`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none rounded-lg z-0" />
                                {plan.popular && (
                                    <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="flex gap-1 items-center px-3 py-1 sm:py-1.5 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full text-sm font-bold lg:text-md shadow-lg">
                                            <Star className="w-5 h-5 fill-blue-600/50"/>
                                            <p>Most Popular</p>
                                        </div>
                                    </div>
                                )}
                                <div className="text-center items-center justify-center mb-5 ">
                                    <h3 className="text-4xl lg:text-5xl font-bold mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-gray-400 text-lg lg:text-xl font-semibold mb-2 sm:mb-4 ">
                                        {plan.descripiton}
                                    </p>

                                    <div className="flex items-baseline justify-center">
                                        <span className="text-3xl lg:text-4xl font-bold bg-gradient-to-br from-cyan-400 to-purple-600 bg-clip-text text-transparent">{plan.price}</span>
                                        <span className="text-gray-400 text-sm lg:text-base ml-1 sm:ml-2 ">/month</span>
                                    </div>
                                </div>

                                <ul className="space-y-3 sm:space-y-4 mb-6 flex-row">
                                    {plan.features.map((feature, featureKey) => (
                                        <li key={featureKey} className="flex space-x-2 sm:space-x-4 items-start ">
                                            <div className="flex-shrink-0 w-4 h-4 sm:w-5 rounded-full bg-blue-600/20 flex items-center justify-center mt-0.5">
                                                <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400" />
                                            </div>
                                            <span className="text-gray-400 text-sm sm:text-base">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full border rounded-full px-3 py-3 text-lg font-bold items-center hover:scale-110 justify-center ${plan.popular ? "bg-gradient-to-r from-cyan-400 to-blue-600 border-blue-400 scale-105" : "border-blue-500/50 hover:border-white/10"}`}>
                                    Get Started
                                </button>
                            </div>
                        ))}

                        <div className="mt-2 sm:mt-4 text-center ">
                            <p className="text-md text-gray-400">
                                Need a custom plan? <a href="mailto:ansifgetachew@gmail.com" target="_blank" className="text-blue-400 hover:text-blue-300">Contact our sales team</a>
                            </p>
                        </div>
                    </div>
                </div>
            </ScrollingAnimation>
        </section>
    )
}