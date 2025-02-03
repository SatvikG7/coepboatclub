"use client";

import React from "react";
import Image from "next/image";

function Footer() {
    return (
        <footer className=" text-white ">
            <div className="bg-gray-800 py-8 px-16 mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p>
                        Address:
                        <br />
                        COEP Boat Club,
                        <br />
                        College Of Engireering Pune, <br />
                        Shivajinagar, Pune, Maharashtra 411005
                    </p>
                    <a href="https://maps.app.goo.gl/abgHVMYrfxhn4qEK7">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                            View on Google Maps
                        </button>
                    </a>
                </div>

                <div className="text-center md:text-left mb-4 md:mb-0">
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
            <div className="w-full text-center bg-black text-white">
                © 2025 COEP Tech Boat Club. Site developed by BMC Web
                Development Team
            </div>
        </footer>
    );
}

export default Footer;
