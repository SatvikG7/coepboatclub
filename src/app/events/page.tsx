/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import React from "react";

const cardData = [
    {
        title: "Regatta Inaugration",
        date: "13/12/2024",
        description: (
            <div>
                <p className="text-justify">
                    The Regatta Inauguration is a grand event that marks the
                    beginning of the Regatta season. The event is graced by the
                    presence of the Vice-Chancellor, the Dean of Student
                    Affairs, and other dignitaries. The event is a grand success
                    every year and is enjoyed by all the students of COEP. This
                    event is held to encourage students to participate in the
                    Regatta and to motivate them to perform their best. <br />{" "}
                    <b className="text-gray-700">
                        Dr. S. M. Nawghare - Regatta Incharge
                    </b>
                </p>
            </div>
        ),
        image: "/inaug.png",
    },
    {
        title: "Deepotsav",
        date: "24/10/2024",
        description: (
            <div>
                <p>
                    On this occasion, the Boat Club is decorated with
                    &quot;Diyas&quot; to have a glimpse of the festival of
                    Diwali. Every corner is lit with diyas and there isn&apos;t
                    a single spot of darkness. Everybody enjoys this sight with
                    laughter and joy as they realise how amazing our boat club
                    really is.
                </p>
            </div>
        ),
        image: "/assets/deepotsav/deepotsav_1.jpg",
    },
    {
        title: "Moonlight Punting",
        date: "16/10/2024",
        description: (
            <div>
                <p>
                    Moonlight Punting is held on the occasion of &apos;Kojagiri
                    Purnima&apos; (Full Moon). Everyone is given a chance to
                    ride a punt in the dimly lit waters of the Mula river.{" "}
                    <br /> Under the beautiful Full Moon and with the company of
                    friends, this event is enjoyed by many students of COEP. It
                    is concluded by providing everyone with the traditional
                    Masala Doodh - enjoyed as a refreshment on Kojagiri. <br />{" "}
                    <b className="text-gray-700">
                        Kshitij Prashant Nazirkar - Punt Formation Secretary
                    </b>
                </p>
            </div>
        ),
        image: "/assets/moonlight_punting/moonlight_punting_1.jpg",
    },
];

export default function Events() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* <h1 className="text-4xl font-bold text-center mb-10 decoration-dashed underline">Events</h1> */}
            <div className="space-y-8">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className={cn(
                            "flex flex-col-reverse bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300",
                            index % 2 === 0
                                ? "md:flex-row-reverse"
                                : "md:flex-row"
                        )}
                    >
                        {/* Left 2/3 Part */}
                        <div className="flex flex-col justify-between p-6 bg-gradient-to-r from-teal-400/50 to-blue-500/50">
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">
                                    {card.title}
                                </h2>
                                <h3 className="text-gray-600 mb-2">
                                    {card.date}
                                </h3>
                                {card.description}
                            </div>
                            <a
                                href={
                                    "gallery#" +
                                    card.title.toLowerCase().replace(" ", "-")
                                }
                            >
                                <button className="px-4 py-1 rounded-md bg-teal-500 text-lg text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                                    View more images
                                </button>
                            </a>
                        </div>

                        {/* Right 1/3 Part */}
                        <div className="flex-none md:w-1/3">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full object-cover object-center h-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
