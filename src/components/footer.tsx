"use client";

import React from "react";
import Image from "next/image";

function Footer() {
    return (
        <footer className="text-white ">
            <div className="flex flex-col items-center justify-between px-16 py-8 mx-auto bg-gray-800 md:flex-row md:items-start">
                <div className="mb-4 text-center md:text-left md:mb-0">
                    <p>
                        Address:
                        <br />
                        COEP Boat Club,
                        <br />
                        College Of Engireering Pune, <br />
                        Shivajinagar, Pune, Maharashtra 411005
                    </p>
                    <button className="px-4 py-2 mt-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                        <a href="https://maps.app.goo.gl/abgHVMYrfxhn4qEK7">
                            View on Google Maps
                        </a>
                    </button>
                </div>

                <div className="mb-4 text-center md:text-left md:mb-0">
                    <p>
                        Contact:
                        <br />
                        Boat Club Office: +91 20-25507179
                        <br />
                        Email:{" "}
                        <a href="mailto:boatclub@coeptech.ac.in">
                            boatclub@coeptech.ac.in
                        </a>
                    </p>
                </div>
                <Image
                    unoptimized
                    src="/bclogo-full.jpg"
                    alt="Logo"
                    className="w-40"
                    width={40}
                    height={40}
                />
            </div>
            <div className="w-full text-center text-white bg-black">
                © 2025 COEP Tech Boat Club. Site developed by BMC Web
                Development Team
            </div>
        </footer>
    );
}

export default Footer;
