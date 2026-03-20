import { Github, Mail, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950/20 border-t border-white/20 rounded-t-3xl py-8 px-6 sm:px-12 max-w-8xl mx-auto">
            {/* Logo and Description */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
                
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <p className="hidden lg:block text-xs font-bold text-gray-400">
                        Transform your workflow with AI-powered tools and automation.<br />
                        Built for modern teams.
                    </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-3">
                    <a href="https://github.com/ansif-getachew" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 rounded-full bg-gray-500 hover:bg-gray-600 transition-colors">
                        <Github className="w-5 h-5 text-white" />
                    </a>
                    <a href="https://instagram.com/lil_spidey_senser" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-3 rounded-full bg-gray-500 hover:bg-gray-600 transition-colors">
                        <Instagram className="w-5 h-5 text-white" />
                    </a>
                    <a href="mailto:ansifgetachew@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="p-3 rounded-full bg-gray-500 hover:bg-gray-600 transition-colors">
                        <Mail className="w-5 h-5 text-white" />
                    </a>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 text-center text-gray-400 space-y-2">
                <p className="text-xs font-bold">@2026 WebLio AI, All rights reserved.</p>
                <div className="flex flex-wrap justify-center gap-4 text-xs">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                    <span>Contact Info</span>
                </div>
            </div>
        </footer>
    );
}
