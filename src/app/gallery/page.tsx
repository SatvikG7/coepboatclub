/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

const galleryData = [
    {
        title: "Jalmaitri Camp 2023-24",
        images: [
            "/assets/jalmaitri_camp/jalmaitri_camp_1.jpg",
            "/assets/jalmaitri_camp/jalmaitri_camp_2.jpg",
            "/assets/jalmaitri_camp/jalmaitri_camp_3.jpg",
            "/assets/jalmaitri_camp/jalmaitri_camp_4.jpg",
            "/assets/jalmaitri_camp/jalmaitri_camp_5.jpg",
            "/assets/jalmaitri_camp/jalmaitri_camp_6.jpg",
        ],
    },
    {
        title: "Deepotsav",
        images: [
            "/assets/deepotsav/deepotsav_1.jpg",
            "/assets/deepotsav/deepotsav_2.jpg",
            "/assets/deepotsav/deepotsav_3.jpg",
            "/assets/deepotsav/deepotsav_4.jpg",
            "/assets/deepotsav/deepotsav_5.jpg",
        ],
    },
    {
        title: "Kayaking",
        images: [
            "/assets/sports/kayaking/kayaking_2.jpg",
            "/assets/sports/kayaking/kayaking_3.jpg",
            "/assets/sports/kayaking/kayaking_4.jpg",
            "/assets/sports/kayaking/kayaking_5.jpg",
            "/assets/sports/kayaking/kayaking_6.jpg",
            "/assets/sports/kayaking/kayaking_7.jpg",
            "/assets/sports/kayaking/kayaking_8.jpg",
            "/assets/sports/kayaking/kayaking_9.jpg",
        ],
    },
    {
        title: "Rowing",
        images: [
            "/assets/sports/rowing/rowing_1.jpg",
            "/assets/sports/rowing/rowing_2.jpg",
            "/assets/sports/rowing/rowing_3.jpg",
            "/assets/sports/rowing/rowing_4.jpg",
            "/assets/sports/rowing/rowing_5.jpg",
            "/assets/sports/rowing/rowing_6.jpg",
        ],
    },
    {
        title: "Moonlight Punting",
        images: [
            "/assets/moonlight_punting/moonlight_punting_1.jpg",
            "/assets/moonlight_punting/moonlight_punting_2.jpg",
        ],
    },
    {
        title: "Indoor Rowing",
        images: [
            "/assets/sports/indoor_rowing/indoor_rowing_1.jpg",
            "/assets/sports/indoor_rowing/indoor_rowing_2.jpg",
        ],
    },
    {
        title: "Canoeing",
        images: ["/assets/sports/canoeing/canoeing_1.jpg"],
    },
];

const Gallery = () => {
    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <div className="space-y-8">
                {galleryData.map((game, index) => (
                    <div
                        key={index}
                        id={game.title.toLowerCase().replace(" ", "-")}
                        className="space-y-8 min-h-96 scroll-mt-16"
                    >
                        <h2 className="mb-4 font-serif text-2xl font-semibold text-center text-gray-800 underline">
                            {game.title}
                        </h2>
                        <div className="gap-4 space-y-2 columns-1 sm:columns-2 md:columns-3 lg:columns-4">
                            {game.images.map((image, imgIndex) => (
                                <div
                                    key={imgIndex}
                                    className="overflow-hidden transition-shadow duration-300 rounded-lg shadow-md break-inside-avoid hover:shadow-2xl"
                                >
                                    <img
                                        src={image}
                                        loading="lazy"
                                        alt={`${game.title} - Image ${
                                            imgIndex + 1
                                        }`}
                                        className="object-cover w-full h-auto"
                                        onClick={() => {
                                            window.open(image, "_blank");
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
