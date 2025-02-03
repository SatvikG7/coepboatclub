/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Carousel, Card } from "@/components/cards-carousel";

export function Highlights() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full">
            <h2 className="max-w-7xl p-2 mx-auto text-3xl md:text-5xl font-bold text-neutral-800 font-serif">
                Highlights
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const events = {
    regatta_inaguration: (
        <div className="bg-[#F5F5F7] p-4 md:p-8 rounded-3xl m-2">
            <img
                src="/assets/jalmaitri_camp/jalmaitri_camp_6.jpg"
                alt="Regatta Inauguration"
                className="md:w-2/3 mx-auto object-cover rounded-3xl mb-2"
            />
            <p className="text-neutral-600 text-base md:text-2xl font-serif max-w-3xl mx-auto">
                The Regatta Inauguration is a grand event that marks the
                beginning of the Regatta season. The event is graced by the
                presence of the Vice-Chancellor, the Dean of Student Affairs,
                and other dignitaries. The event is a grand success every year
                and is enjoyed by all the students of COEP. This event is held
                to encourage students to participate in the Regatta and to
                motivate them to perform their best.
            </p>
        </div>
    ),
    deepotsav: (
        <div className="bg-[#F5F5F7] p-4 md:p-8 rounded-3xl m-2">
            <img
                className="md:w-2/3 mx-auto object-cover rounded-3xl m-4"
                src="/assets/deepotsav/deepotsav_1.jpg"
                alt="deepotsav"
                loading="lazy"
            />
            <p className="text-neutral-600 text-base md:text-2xl font-serif max-w-3xl mx-auto">
                On the occasion of Diwali, the Boat Club organizes a Deepotsav.
                The event is a grand success every year and is enjoyed by all
                the students of COEP. On this occasion, the Boat Club was
                decorated with Diyas to have a glimpse of the festival of
                Diwali.
            </p>
            <img
                className="md:w-2/3 mx-auto rounded-3xl m-4"
                src="/assets/deepotsav/deepotsav_3.jpg"
                alt="deepotsav"
                loading="lazy"
            />
            <p className="text-neutral-600 text-base md:text-2xl font-serif max-w-3xl mx-auto">
                Every corner was lit with diyas and there isn&apos;t a single
                spot of darkness. Everybody enjoyed this sight with laughter and
                joy as they realise how amazing our boat club really is.
            </p>
            <img
                className="md:w-2/3 mx-auto rounded-3xl m-4"
                src="/assets/deepotsav/deepotsav_2.jpg"
                alt="deepotsav"
                loading="lazy"
            />
        </div>
    ),
    moonlight_punting: (
        <div className="bg-[#F5F5F7] p-4 md:p-8 rounded-3xl m-2">
            <p className="text-neutral-600 text-base md:text-2xl font-serif max-w-3xl mx-auto">
                Moonlight Punting is held on the occasion of &apos;Kojagiri
                Purnima&apos; (Full Moon). Everyone is given a chance to ride a
                punt in the dimly lit waters of the Mula river. Under the
                beautiful Full Moon and with the company of friends, this event
                is enjoyed by many students of COEP. It is concluded by
                providing everyone with the traditional Masala Doodh - enjoyed
                as a refreshment on Kojagiri.
            </p>
        </div>
    ),
    mit_sports_meet: (
        <div className="bg-[#F5F5F7] p-4 md:p-8 rounded-3xl m-2">
            <p className="text-neutral-600 text-base md:text-2xl font-serif max-w-3xl mx-auto">
                In &quot;Vishwanath Sports Meet&quot;, COEP Boat Club Team has
                won the Silver Medal in following events competing with 8-9
                teams: <br />
                <br />
                Women double: <br /> a. Anushka Mane🥈 <br /> b. Snehal
                Yengandul🥈
                <br />
                <br /> Men&apos;s four: <br /> a. Kartik 🥈
                <br /> b. Yash Ekhande🥈 <br /> c. Nischay Bhosale🥈 <br /> d.
                Shreeram Kadam🥈
            </p>
        </div>
    ),
    survival_of_the_fittest: (
        <div className="bg-[#F5F5F7] p-4 md:p-8 rounded-3xl m-2">
            <p className="text-neutral-600 text-base md:text-2xl font-serif max-w-3xl mx-auto">
                Survival of the Fittest is a competition that tests the physical
                and mental strength of the participants. The event is a grand
                success every year and is enjoyed by all the students of COEP.
                The event is held to encourage students to participate in the
                Regatta and to motivate them to perform their best.
            </p>
        </div>
    ),
    jalmaitri_camp: (
        <div className="bg-[#F5F5F7] p-4 md:p-8 rounded-3xl m-2">
            <p className="text-neutral-600 text-base md:text-2xl font-serif max-w-3xl mx-auto">
                <a
                    className="text-2xl md:text-2xl font-bold text-blue-500 font-serif underline"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeCD5f6FODBeagIdF7EhxNjJQQR7vVBMtmmOP_g4PfW7LNkOQ/viewform?usp=send_form"
                >
                    Click here to Register
                </a>
                <br />
                Jalmaitri Camp is a camp organized by the Boat Club for the
                freshers of COEP. The camp is a grand success every year and is
                enjoyed by all the students of COEP. The camp is held to
                encourage students to participate in the Boat Club and to
                motivate them to perform their best.
                <br />
                <button className="px-8 py-2 rounded-md bg-teal-500 text-xl text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                    <a href="/gallery#jalmaitri-camp">View Memories</a>
                </button>
            </p>
        </div>
    ),
};

const data = [
    {
        date: "Upcoming 05/02/2025-06/02/2025",
        title: "Jalmaitri Camp - Register Now",
        src: "/assets/jalmaitri_camp/jalmaitri_camp_5.jpg",
        content: events["jalmaitri_camp"],
    },
    {
        date: "31/01/2025",
        title: "Survival of the Fittest",
        src: "/assets/survival_of_the_fittest/survival_of_the_fittest_1.jpg",
        content: events["survival_of_the_fittest"],
    },
    {
        date: "26/01/2025",
        title: "Vishwanath Sports Meet",
        src: "/assets/mit_sports_meet/hero.jpg",
        content: events["mit_sports_meet"],
    },
    {
        date: "13/12/2024",
        title: "Regatta Inaugration",
        src: "/assets/jalmaitri_camp/jalmaitri_camp_6.jpg",
        content: events["regatta_inaguration"],
    },
    {
        date: "24/10/2024",
        title: "Deepotsav",
        src: "/assets/deepotsav/deepotsav_1.jpg",
        content: events["deepotsav"],
    },
    {
        date: "16/10/2024",
        title: "Moonlight Punting",
        src: "/assets/moonlight_punting/moonlight_punting_1.jpg",
        content: events["moonlight_punting"],
    },
];
