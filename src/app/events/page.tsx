/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import React from "react";

const cardData = [
    
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
        date: "06/10/2025",
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
                   
                </p>
            </div>
        ),
        image: "/assets/moonlight_punting/moonlight_punting_1.jpg",
    },
    {
        title: "Rise Of The Fittest",
        date: "01/10/2025",
        description: (
            <div>
                <p>
                    COEP celebrated Khande Navami Pooja with an energetic Gym Competition - Rise of the Fittest at the Boat Club, where BTech and MTech students competed in teams through challenges like rowing, push-ups, pull-ups, squats, and skipping. The event showcased incredible fitness, teamwork, and festive spirit, with exciting prizes and refreshments for the winners.
                    
                </p>
            </div>
        ),
        image: "/assets/rise_of_the_fittest/rise.jpg",
    },
    {
        title: "Mini Regatta",
        description: (
            <div>
                <p>
                    Celebrating the joy of setting sail at our Mini Regatta! To introduce with you our annual event, we organised a glimpse of it. Mini Regatta sets just a trailer of Regatta. We proudly inaugurate this nautical spectacle, where every ripple signifies new beginnings. <br />{" "}
                    
                </p>
            </div>
        ),
        image: "/assets/mini_regatta/mini_regatta.jpg",
    },
    {
        title: "Regatta Inauguration",
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
        image: "/assets/regatta_inauguration/regatta_inauguration_1.jpg",
    },
    {
        title: "Alumni Races",
        description: (
            <div>
                <p>
Alumni form a solid foundation for Regatta upon which we have built its long history. Presenting before you, the Alumni races of COEP Regatta. Be there to witness the thrill.
                </p>
            </div>
        ),
        image: "/assets/alumni_races/alumni_racing.jpg",
    },
    {
        title: "Treasure Hunt",
        description: (
            <div>
                <p>
                    “Treasure hunt” one of the most awaited event was organized for first-year students second-year students . The main aim of the event was to drift the students away from their academic routine.
                </p>
            </div>
        ),
        image: "/assets/survival_of_the_fittest/survival_of_the_fittest_1.jpg",
    },
];

export default function Events() {
    return (
        <div className="min-h-screen p-6 bg-gray-100">
            {/* <h1 className="mb-10 text-4xl font-bold text-center underline decoration-dashed">Events</h1> */}
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
                                <h3 className="mb-2 text-gray-600">
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
                                <button className="px-4 py-1 text-lg font-bold text-white transition duration-200 bg-teal-500 border-2 border-transparent rounded-md hover:bg-white hover:text-black hover:border-teal-500">
                                    View more images
                                </button>
                            </a>
                        </div>

                        {/* Right 1/3 Part */}
                        <div className="flex-none md:w-1/3">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="object-cover object-center w-full h-full"
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
