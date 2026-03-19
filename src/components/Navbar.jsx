import { Menu, X } from 'lucide-react';
import { Wallet } from 'lucide-react'
import { Sparkle } from 'lucide-react';
import { MessageSquareQuote } from 'lucide-react';
import { useState } from 'react';


export default function Navbar() {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
         /* Sticks the navbar at the top */
        <nav className="fixed top-2 w-full min-h-5xl z-50 bg-slate-950/10 backdrop-blur-md">
            {/* Container for the navbar */}
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-14 sm:h-16 lg:h-20 rounded-xl border border-white/5">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img 
                        src="/Logo.png"
                        alt="Weblio"
                        className="h-20 w-20 absolute left-7 top-[-1]" 
                        />
                        <span className="absolute text-md md:text-lg text-bold font-mono bg-gradient-to-r from-purple-500 to-cyan-300 bg-clip-text text-transparent left-25">
                            WebLio
                        </span>
                    </div>
                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a
                            href="#features" 
                            className="text-gray-400 hover:text-white text-md lg:text-base" 
                        >
                            <Sparkle className="inline mr-2" />
                            Features
                        </a>
                        <a  
                            href="#pricing"
                            className="text-gray-400 hover:text-white text-md lg:text-base"  
                        >
                            <Wallet className="inline mr-2" />
                            Pricing
                        </a>
                        <a
                            href="#testimonials"  
                            className="text-gray-400 hover:text-white text-md lg:text-base"
                        >
                            <MessageSquareQuote className="inline mr-2" />
                            Testimonials
                        </a>
                    </div>
                    <span className="items-center">
                            {/* Setting the AI text on the right of navbar */}
                            <a href="#" className="absolute top-4 right-13 font-bold text-2xl bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">AI</a>
                    </span>
                    {/* Setting Mobile Menu */}
                    <button
                        className="md:hidden absolute items-center right-23 top-4 text-gray-400 hover:text-white flex"
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                    >
                        {/* Setting the X button to close the mobileMenu */}
                        {isMobileMenuOpen ? (<X className="h-6 w-6"/>) : (<Menu className="h-6 w-6" />)}
                    </button>
                    {/* Configuring the mobile menu to the navigation links when the mobileMenu is open */}
                    {isMobileMenuOpen && (
                        <div className="flex flex-col md:hidden absolute top-15 right-6 bg-slate-910 bg-blur-sm space-y-4 w-70 items-center border border-white/10 rounded-xl animate-in slide-in-from-top duration-400">
                           <a
                            href="#features" 
                            onClick={() => setMobileMenuOpen(false)}
                            className="block font-bold font-mono text-gray-400 hover:text-white text-md lg:text-base" 
                        >
                            <Sparkle className="inline mr-2" />
                            Features
                        </a>
                        <a
                            href="#pricing"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block font-bold font-mono text-gray-400 hover:text-white text-md lg:text-base"  
                        >
                            <Wallet className="inline mr-2" />
                            Pricing
                        </a>
                        <a
                            href="#testimonials"  
                            onClick={() => setMobileMenuOpen(false)}
                            className="block font-bold font-mono text-gray-400 hover:text-white text-md lg:text-base"
                        >
                            <MessageSquareQuote className="inline mr-2" />
                            Testimonials
                        </a> 
                        </div>
                    )}

                </div>
            </div>
        </nav>
    )
}