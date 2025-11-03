/* eslint-disable @next/next/no-img-element */
"use client";
import { Highlights } from "@/components/highlights";
import { AnimatedTestimonials } from "@/components/testimonials";
import { useEffect } from "react";
import { FiInstagram, FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import Clarity from "@microsoft/clarity";

const testimonials = [
    {
        quote: "The Regatta exemplifies our students' dedication and teamwork, making it a hallmark event of COEP.",
        name: "Dr. V. K. Haribhakta",
        designation: "Vice President, COEP Boat Club",
        src: "/assets/committee/vice_president.png",
    },
    {
        quote: "Organizing the Regatta is a testament to our students' relentless pursuit of excellence.",
        name: "Dr. S. G. Bhirud",
        designation: "Vice Chancellor, COEP Technological University",
        src: "/assets/committee/president.png",
    },
    {
        quote: "Witnessing the Regatta each year reaffirms the spirit and tradition that COEP upholds.",
        name: "Dr. S. M. Nawghare",
        designation: "Regatta Incharge, COEP Boat Club",
        src: "/assets/committee/regatta_incharge.png",
    },
    {
        quote: "Everything is energy, Your thought begins it, Your emotions amplifies it and your action increases the momentum",
        name: "Dr. M. P. Khond",
        designation: "Director, Board of Students' Development",
        src: "/assets/committee/director_bosd.jpg",
    },
];

export default function Home() {
    useEffect(() => {
        const video = document.querySelector("video");
        if (video) {
            video.playbackRate = 0.5;
        }

        const projectId = "q99zezs010";

        Clarity.init(projectId);
    }, []);
    return (
        <div>
            {/* Hero Section */}
            <div className="relative">
                <video
                    autoPlay
                    muted
                    loop
                    className="h-[75vw] w-[100vw] md:h-[100vh] object-cover"
                >
                    <source src="/hero_vid.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <p className="font-serif text-3xl text-white md:text-6xl">
                        COEP TECH
                    </p>
                    <p className="font-serif text-3xl text-white md:text-6xl">
                        BOAT CLUB
                    </p>
                    <p className="font-serif text-3xl text-white md:text-6xl">
                        Since 1928
                    </p>
                </div>
            </div>
            <div className="flex flex-col-reverse items-center py-6 md:flex-row">
                <div className="basis-1/3">
                    <div className="p-12 card">
                        <img
                            loading="lazy"
                            src="/bclogo-full.jpg"
                            alt="Boat Club Logo"
                            className="border-4 border-black rounded-full shadow-2xl shadow-black ring-4 ring-orange-400"
                        />
                    </div>
                </div>
                <div className="mx-8 text-lg basis-2/3">
                    <p>
                        <b>COEP Technological University</b> proudly presents a
                        true gem: the Boat Club. Nestled on the scenic banks of
                        the Mula River, this exceptional club has been a
                        cornerstone of <b>COEP&apos;s legacy since 1928</b>. It
                        stands as a symbol of tradition, excellence, and vibrant
                        community spirit.
                        <br />
                    </p>
                    <p className="font-bold ">
                        The Boat Club boasts an impressive array of boats:
                    </p>
                    <ol className="list-decimal list-inside">
                        <li>Kayaks</li>
                        <li>Canoes</li>
                        <li>Single sculls</li>
                        <li>Racing pairs</li>
                        <li>Punts</li>
                    </ol>
                    <p>
                        Beyond the water, the club offers a well-equipped
                        <b> gymnasium</b> and a sprawling indoor hall featuring
                        <b> 4 badminton courts </b> and
                        <b> 2 table-tennis court</b>, catering to the diverse
                        athletic pursuits of COEP&apos;s students.
                        <br />
                        A visit to the Boat Club is more than just sports;
                        it&apos;s an experience. The riverside ambiance provides
                        a majestic backdrop, offering breathtaking views of the
                        Mula River. For every COEPian, &quot;The Boatclub&quot;
                        is a haven, synonymous with the very essence of COEP
                        Technological University.
                        <br />
                        As we sail into a new era with the esteemed title of
                        COEP Technological University, the Boat Club remains a
                        beacon of camaraderie, athletic prowess, and cherished
                        memories. Membership is an invitation to be part of a
                        legacy that transcends time and tides. Whether
                        you&apos;re a current student or a proud alumnus, the
                        Boat Club welcomes you to embark on a journey of
                        excellence, unity, and the indomitable COEP spirit.
                    </p>
                </div>
            </div>

            {/* Latest Highlights */}
            <div className="w-full px-6 py-6 bg-gradient-to-r from-blue-300 to-blue-500">
                <Highlights />
            </div>

            {/* Testimonials */}
            <div className="w-full ">
                <AnimatedTestimonials
                    testimonials={testimonials}
                    autoplay={true}
                />
            </div>
            {/* Explore Section */}
            <div className="p-2 md:p-8 bg-gradient-to-b from-yellow-100 to-yellow-200">
                <div className="flex flex-col items-center justify-center gap-4 p-4 bg-blue-400 border-4 border-violet rounded-lg shadow-2xl md:p-8 shadow-black/50">
                    <iframe
                        className="rounded-lg ring ring-blue-600 ring-offset-4 shadow-lg mb-2 md:mb-4 w-[20rem] md:w-[48rem] h-[12rem] md:h-[24rem]"
                        src="https://www.youtube-nocookie.com/embed/wlfdtNQ9URs?si=U_HnpravCCu1a-HI&amp;controls=0&amp;start=4"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    <div className="flex flex-col items-center justify-center gap-2 text-lg md:flex-row md:text-xl">
                        <span className="font-serif text-2xl font-bold">
                            Socials:
                        </span>
                        <div className="flex flex-col gap-2 md:flex-row">
                            <a href="https://www.instagram.com/coepboatclub">
                                <span className="flex items-center justify-center px-4 py-2 text-white bg-blue-600 rounded-full">
                                    <FiInstagram /> /coepboatclub
                                </span>
                            </a>
                            <a href="https://www.youtube.com/@coepregatta4240">
                                <span className="flex items-center justify-center px-4 py-2 text-white bg-blue-600 rounded-full">
                                    <FiYoutube /> /coepregatta4240
                                </span>
                            </a>

                            <a href="https://x.com/coepboatclub">
                                <span className="flex items-center justify-center px-4 py-2 text-white bg-blue-600 rounded-full">
                                    <FaXTwitter /> /coepboatclub
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

