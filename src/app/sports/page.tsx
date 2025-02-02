/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

const games = [
    {
        name: "Rowing",
        image: "/assets/sports/rowing/rowing_1.jpg",
    },
    {
        name: "Kayaking",
        image: "/assets/sports/kayaking/kayaking_1.jpg",
    },
    {
        name: "Canoeing",
        image: "/assets/sports/canoeing/canoeing_1.jpg",
    },
    {
        name: "Indoor Rowing",
        image: "/assets/sports/indoor_rowing/indoor_rowing_1.jpg",
    },
];

export default function Sports() {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="flex flex-wrap gap-2 flex-row justify-evenly items-center">
                {games.map((game, index) => (
                    <div
                        key={index}
                        className="p-4 bg-indigo-400 rounded-lg shadow-md transition duration-300"
                    >
                        <a
                            href={
                                "sports/" +
                                game.name.toLowerCase().replace(" ", "-")
                            }
                        >
                            <div className="relative rounded-lg overflow-hidden shadow-black shadow-md hover:shadow-lg hover:shadow-black transition duration-300 group">
                                <img
                                    src={game.image}
                                    alt={game.name}
                                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                                <div className="absolute bottom-0 left-0 right-0 text-white text-center font-semibold text-lg p-2 bg-opacity-50 bg-black">
                                    {game.name}
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
