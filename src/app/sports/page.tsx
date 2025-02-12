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
        <div className="min-h-screen p-4 bg-gray-100">
            <div className="flex flex-row flex-wrap items-center gap-2 justify-evenly">
                {games.map((game, index) => (
                    <div
                        key={index}
                        className="p-4 transition duration-300 bg-indigo-400 rounded-lg shadow-md"
                    >
                        <a
                            href={
                                "sports/" +
                                game.name.toLowerCase().replace(" ", "-")
                            }
                        >
                            <div className="relative overflow-hidden transition duration-300 rounded-lg shadow-md shadow-black hover:shadow-lg hover:shadow-black group">
                                <img
                                    src={game.image}
                                    alt={game.name}
                                    className="object-cover w-full h-64 transition-transform duration-300 transform group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-2 text-lg font-semibold text-center text-white bg-black bg-opacity-50">
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
