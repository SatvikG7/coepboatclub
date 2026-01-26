/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Home, Users, Calendar, ImageIcon } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700">

                {/* LOGO */}
                <div className="flex flex-col items-center md:items-start">
                    <Image
                        src="/bclogo-full.jpg"
                        alt="Boat Club Logo"
                        width={170}
                        height={170}
                        className="rounded-lg shadow-lg"
                        unoptimized
                    />
                </div>

                {/* ADDRESS */}
                <div>
                    <h3 className="text-white font-semibold text-xl mb-3">Address</h3>

                    <div className="flex gap-2 text-base leading-relaxed">
                        <MapPin className="w-5 h-5 mt-[3px]" />
                        <p>
                            COEP Boat Club,<br />
                            College of Engineering Pune,<br />
                            Shivajinagar, Pune 411005
                        </p>
                    </div>

                    <a
                        href="https://maps.app.goo.gl/abgHVMYrfxhn4qEK7"
                        target="_blank"
                        className="inline-block mt-3 px-4 py-2 bg-blue-600 rounded text-base hover:bg-blue-700 transition"
                    >
                        View on Google Maps
                    </a>
                </div>

                {/* CONTACT */}
                <div>
                    <h3 className="text-white font-semibold text-xl mb-3">Contact</h3>

                    <div className="flex items-center gap-2 text-base mb-2">
                        <Phone className="w-5 h-5" />
                        <span>+91 20-25507179</span>
                    </div>

                    <div className="flex items-center gap-2 text-base">
                        <Mail className="w-5 h-5" />
                        <a
                            href="mailto:boatclub@coeptech.ac.in"
                            className="underline underline-offset-2 hover:text-blue-400 transition"
                        >
                            boatclub@coeptech.ac.in
                        </a>
                    </div>
                </div>

                {/* LINKS */}
                <div>
                    <h3 className="text-white font-semibold text-xl mb-3">Links</h3>

                    <div className="grid grid-cols-2 gap-y-4 text-base">
                        <a href="/" className="flex gap-4 hover:text-blue-400 transition">
                            <Home className="w-5 h-5 flex-shrink-0" /> <span>Home</span>
                        </a>
                        <a href="/events" className="flex gap-4 hover:text-blue-400 transition">
                            <Calendar className="w-5 h-5 flex-shrink-0" /> <span>Events</span>
                        </a>
                        <a href="/gallery" className="flex gap-4 hover:text-blue-400 transition">
                            <ImageIcon className="w-5 h-5 flex-shrink-0" /> <span>Gallery</span>
                        </a>
                        <a href="/committee" className="flex gap-x-4 hover:text-blue-400 transition">
                            <Users className="w-5 h-5 flex-shrink-0" /> <span>Committee</span>
                        </a>
                        <a href="/jalmaitri-camp" className="flex gap-2 hover:text-blue-400 transition">
                            <Users className="w-5 h-5 flex-shrink-0" /> <span>Jalmaitri Camp</span>
                        </a>
                        <a href="/contact-us" className="flex gap-4 hover:text-blue-400 transition">
                            <Phone className="w-5 h-5 flex-shrink-0" /> <span>Contact</span>
                        </a>

                        <a href="/sports" className="flex gap-4 hover:text-blue-400 transition whitespace-nowrap">
                            <Users className="w-5 h-5 flex-shrink-0" /> <span>Sports & Competitions</span>
                        </a>
                    </div>
                </div>

            </div>

            <div className="py-3 text-center text-sm md:text-base text-gray-400 bg-black">
                Developed by{" "}
                <a
                    href="https://github.com/Payalcoep"
                    className="text-blue-400 underline hover:text-blue-300 transition"
                    target="_blank"
                >
                    Payal Kotkar (Web Head)
                </a>{" "}
                • © 2026 COEP Tech Boat Club
            </div>

        </footer>
    );
}

export default Footer;
