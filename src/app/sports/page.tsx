/* eslint-disable @next/next/no-img-element */
/*
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

*/
/*
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

// const competitions = [
//   {
//     name: "MRA State Rowing Championships",
//     participants: 20,
//     achievements:
//       "GOLD MEDAL in QUADRUPOLE SCULL (M4X), Silver medal in Double Scull (M2X) & Bronze Medal in Single Scull",
//     image: "/assets/competitions/MRA.jpg",
//   },
//   {
//     name: "All India University (Rowing, Kayaking and Canoeing)",
//     participants: 30,
//     achievements:
//       "2 female rowers selected for Khelo India Trials and Double Scull by Shreeram and Kartik",
//     image: "/assets/competitions/AIU.jpg",
//   },
//   {
//     name: "Dragon Nationals Championship",
//     participants: 15,
//     achievements: "1 Gold, 2 Silver and 3 Bronze medals",
//     image: "/assets/competitions/Dragon.jpg",
//   },
//   {
//     name: "MIT ADT Sports Meet Indoor Rowing",
//     participants: 15,
//     achievements:"1 Silver Medal (Secured 2nd place in Women’s Pair and Men’s Four)",
//     image: "/assets/competitions/MIT_ADT.jpg",
//   },
//   {
//     name: "MRA Indoor Rowing State Trials",
//     participants: 10,
//     achievements: "1 Silver and 1 Bronze Medal",
//     image: "/assets/competitions/MRA_indoor.jpg",
//   },
//   {
//     name: "State Trials for National Level Tournaments (CME)",
//     participants: 65,
//     achievements: "Represented COEP Tech University",
//     image: "/assets/competitions/CME.jpg",
//   },
//   {
//     name: "ARAE Nationals",
//     participants: 15,
//     achievements: "Represented COEP Tech University",
//     image: "/assets/competitions/ARAE.jpg",
//   },
//   {
//     name: "National Canoe Championship, Uttarakhand",
//     participants: 6,
//     achievements: "Represented Maharashtra State",
//     image: "/assets/competitions/canoa.jpg",
//   },
//   {
//     name: "National Indoor Rowing Championship, Punjab",
//     participants: 5,
//     achievements: "Represented Maharashtra Team in Nationals",
//     image: "/assets/competitions/punjab.jpg",
//   },
// ];

const competitions = [
  {
    name: "All India University Rowing , Chandigarh Punjab",
    participants: 20,
    achievements: "2 female rowers selected for Khelo India Trials and Double Scull by Shreeram and Kartik",
    image: "/assets/competitions/AIU_rowing.jpg",
  },
  {
    name: "All India University Kayaking and Canoeing ,Chandigarh Punjab",
    participants: 20,
    achievements: "Double Scull by - Shreeram and Kartik Quadrupole Scull by - Shreeram, Kartik, Rajnandan and Prashant Single Scull by Kartik Kshirsagar",
    image: "/assets/competitions/AIU_kayaking1.jpg",
  },
  {
    name: "National Kayaking and Canoeing  Championship",
    participants: 15,
    achievements: "1 Gold, 2 Silver and 3 Bronze medals",
    image: "/assets/competitions/NKCC.jpg",
  },
  {
    name: "Dragon Boat National championship ",
    participants: 15,
    achievements: "1 Gold, 2 Silver and 3 Bronze medals",
    image: "/assets/competitions/Dragon.jpg",
  },
  {
    name: "National indoor Rowing championship at Mogha, Punjab",
    participants: 5,
    achievements: "Represented Maharashtra Team in Nationals",
    image: "/assets/competitions/punjab1.jpg",
  },
  {
    name: "ARAE , Chennai",
    participants: 65,
    achievements: "Represented COEP Tech University",
    image: "/assets/competitions/ARAE1.jpg",
  },
  {
    name: "MRA State Rowing Championships",
    participants: 20,
    achievements: "GOLD MEDAL in QUADRUPOLE SCULL (M4X), Silver medal in Double Scull (M2X) & Bronze Medal in Single Scull",
    image: "/assets/competitions/MRA_state1.jpg",
  },
  {
    name: "MRA Indoor Rowing State Championships",
    participants: 10,
    achievements: "1 Silver and 1 Bronze Medal",
    image: "/assets/competitions/MRA_indoor1.jpg",
  },
  {
    name: "State trials for national level tournaments organized by MRA at CME army rowing node",
    participants: 65,
    achievements: "Represented COEP Tech University",
    image: "/assets/competitions/CME1.jpg",
  },
  {
    name: "MIT ADT Viswanathan Sports meet -  Indoor Rowing Competitions",
    participants: 5,
    achievements: "Represented Maharashtra Team in Nationals",
    image: "/assets/competitions/MIT_ADT.jpg",
  },
];

export default function Sports() {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-gray-100 to-indigo-50">
      <h1 className="mb-6 text-4xl font-bold text-center text-indigo-700">
        🚣‍♀️ Our Sports
      </h1>

      <div className="flex flex-row flex-wrap items-center justify-center gap-6 mb-20">
        {games.map((game, index) => (
          <div
            key={index}
            className="p-3 transition duration-300 bg-indigo-400 rounded-lg shadow-md hover:shadow-2xl hover:scale-105"
          >
            <a
              href={"sports/" + game.name.toLowerCase().replace(" ", "-")}
            >
              <div className="relative overflow-hidden transition duration-300 rounded-lg shadow-lg group">
                <img
                  src={game.image}
                  alt={game.name}
                  className="object-cover w-80 h-56 transition-transform duration-300 transform group-hover:scale-110 rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-2 text-lg font-semibold text-center text-white bg-black bg-opacity-50 group-hover:bg-indigo-600 group-hover:bg-opacity-70 transition">
                  {game.name}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>


      <div className="h-1 mx-auto mb-12 rounded-full w-2/3 bg-gradient-to-r from-indigo-400 to-indigo-700"></div>

      <h2 className="mt-8 mb-6 text-3xl font-bold text-center text-indigo-700">
        🏆 Student Achievements & Competitions
      </h2>

      <div className="grid justify-center w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {competitions.map((comp, index) => (
          <div
            key={index}
            className="overflow-hidden transition duration-300 bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="relative">
              <img
                src={comp.image}
                alt={comp.name}
                className="object-cover w-full h-72 transition-transform duration-300 transform hover:scale-105 rounded-t-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 rounded-t-xl"></div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-indigo-600">
                {comp.name}
              </h3>
              <p className="mt-2 text-gray-700">
                <span className="font-medium text-indigo-700">
                  Participants:
                </span>{" "}
                {comp.participants}
              </p>
              <p className="text-gray-700">
                <span className="font-medium text-indigo-700">
                  Achievements:
                </span>{" "}
                {comp.achievements}
              </p>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-16 text-sm text-center text-gray-500">
        © 2025 Boat Club, COEP Technological University
      </footer>
    </div>
  );
}
*/
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🏅 Type Definitions
interface Competition {
  name: string;
  participants: number;
  achievements: string;
  media: string[];
}

interface YearwiseCompetitions {
  [year: string]: Competition[];
}

interface SelectedCompetition {
  year: string | null;
  comp: string | null;
}

// ✅ Sports / Games Section Data
const games = [
  { name: "Rowing", image: "/assets/sports/rowing/rowing_1.jpg" },
  { name: "Kayaking", image: "/assets/sports/kayaking/kayaking_1.jpg" },
  { name: "Canoeing", image: "/assets/sports/canoeing/canoeing_1.jpg" },
  { name: "Indoor Rowing", image: "/assets/sports/indoor_rowing/indoor_rowing_1.jpg" },
];

// ✅ Year-wise Competitions Data
const yearwiseCompetitions: YearwiseCompetitions = {
  "2024–25": [
    {
      name: "All India University Rowing, Chandigarh Punjab",
      participants: 20,
      achievements:
        "Women's double scull and men's pair selected for Khelo India. Participated in Men's - single scull , double scull, pair and four & Women's - Double scull",
      media: [
        "/assets/competitions/AIU_rowing.jpg",
        "/assets/competitions/AIU_rowing2.jpg",
        "/assets/competitions/AIU_rowing3.jpg",
      ],
    },
    {
      name: "All India University Kayaking and Canoeing, Chandigarh Punjab",
      participants: 20,
      achievements: "Participated in k2 and k4 for 200m and 1000m events",
      media: [
        "/assets/competitions/AIU_kayaking1.jpg",
        "/assets/competitions/AIU_kayaking2.jpg",
        "/assets/competitions/AIU_kayaking3.jpg",
      ],
    },
    {
      name: "National Indoor Rowing Championship at Moga, Punjab",
      participants: 5,
      achievements:
        "6 players from COEP represented Maharashtra Team in Nationals",
      media: [],
    },
    
    {
      
      name: "Canoe Polo National Championship – Indore",
      participants: 15,
      achievements: "COEP team represented Maharashtra Team in Nationals",
      media: ["/assets/competitions/polo.jpg", "/assets/competitions/polo1.jpg"],
    },
    {
      name: "ARAE, Chennai",
      participants: 65,
      achievements: "Represented COEP Technological University",
      media: [],
    },
    {
      name: "MRA State Rowing Championships",
      participants: 20,
      achievements:
        "Gold in Quadruple Scull (M4X), Silver in Double Scull (M2X) and Bronze in Single Scull (M1X)",
      media: [
        "/assets/competitions/MRA_state1.jpg",
        "/assets/competitions/MRA_state2.jpg",
        "/assets/competitions/MRA_state.mp4",
      ],
    },
    {
      name: "MRA Indoor Rowing State Championships",
      participants: 10,
      achievements: "1 Silver and 1 Bronze Medal",
      media: ["/assets/competitions/MRA_indoor_video.mp4"],
    },
    {
      name: "MIT ADT Vishwanathan Sports Meet - Indoor Rowing Competitions",
      participants: 5,
      achievements: "6 Silver medals",
      media: [
        "/assets/competitions/MIT_ADT.jpg",
        "/assets/competitions/MIT_ADT1.jpg",
      ],
    },
  ],
  "2023–24": [
    {
      name: "National Kayaking and Canoeing Championship",
      participants: 15,
      achievements: "K2 selected to represent Maharashtra",
      media: [],
    },
    {
      name: "National Dragon Boat Championship",
      participants: 15,
      achievements: "2 Silver and 4 Bronze medals",
      media: [
        "/assets/competitions/Dragon.jpg",
        "/assets/competitions/dragon1.jpg",
        "/assets/competitions/dragonvideo.mp4",
      ],
    },
  ],
};

// 🎯 Reusable component for showing full competition details
const CompetitionDetails: React.FC<{ comp: Competition }> = ({ comp }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="mt-6 p-6 bg-indigo-50 rounded-2xl shadow-inner w-full"
  >
    <p className="text-gray-700 mb-2">
      <span className="font-semibold text-indigo-700">Participants:</span>{" "}
      {comp.participants}
    </p>
    <p className="text-gray-700 mb-4">
      <span className="font-semibold text-indigo-700">Achievements:</span>{" "}
      {comp.achievements}
    </p>
    <div className="flex flex-wrap justify-center">
      {comp.media.length > 0 ? (
        comp.media.map((file, i) =>
          file.endsWith(".mp4") ? (
            <video
              key={i}
              src={file}
              controls
              className="m-2 rounded-xl w-[400px] h-[250px] hover:scale-105 transition-transform"
            />
          ) : (
            <img
              key={i}
              src={file}
              alt={`${comp.name}-${i}`}
              className="m-2 rounded-xl object-cover w-[400px] h-[250px] hover:scale-105 transition-transform"
            />
          )
        )
      ) : (
        <p className="text-gray-500 italic"></p>
      )}
    </div>
  </motion.div>
);

// 🏆 Main Sports Component
export default function Sports() {
  const [selected, setSelected] = useState<SelectedCompetition>({
    year: null,
    comp: null,
  });

  const toggleCompetition = (year: string, compName: string) => {
    if (selected.year === year && selected.comp === compName) {
      setSelected({ year: null, comp: null });
    } else {
      setSelected({ year, comp: compName });
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-indigo-50 pb-20">
      {/* TITLE */}
      <h1 className="p-2 mx-auto font-serif text-4xl font-bold text-center text-indigo-700 md:text-5xl mt-6">
        🚣‍♀️ COEP Boat Club Sports & Competitions
      </h1>

      {/* SPORTS SECTION */}
      <div className="flex flex-row flex-wrap items-center justify-center gap-6 mb-20 mt-8">
        {games.map((game, index) => (
          <div
            key={index}
            className="p-3 transition duration-300 bg-indigo-400 rounded-lg shadow-md hover:shadow-2xl hover:scale-105"
          >
            <a href={`sports/${game.name.toLowerCase().replace(/\s+/g, "-")}`}>
              <div className="relative overflow-hidden transition duration-300 rounded-lg shadow-lg group">
                <img
                  src={game.image}
                  alt={game.name}
                  className="object-cover w-80 h-60 transition-transform duration-300 transform group-hover:scale-110 rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-2 text-lg font-semibold text-center text-white bg-black bg-opacity-50 group-hover:bg-indigo-600 group-hover:bg-opacity-70 transition">
                  {game.name}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* DIVIDER */}
      <div className="h-1 mx-auto my-12 rounded-full w-2/3 bg-gradient-to-r from-indigo-400 to-indigo-700"></div>

      {/* 🏆 YEAR-WISE COMPETITIONS SECTION */}
      <section className="w-full px-4 md:px-8">
        <h2 className="mb-6 text-3xl font-bold text-center text-indigo-700">
          🏆 Year-wise Competitions & Achievements
        </h2>

        <div className="relative w-full max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-indigo-300 h-full rounded-full"></div>

          {Object.entries(yearwiseCompetitions).map(([year, comps], yIndex) => (
            <div key={year} className="relative mb-20">
              {/* YEAR LABEL */}
              <div
                className={`flex items-center justify-center mb-8 ${
                  yIndex % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="bg-indigo-600 text-white px-6 py-2 rounded-full text-xl font-semibold shadow-lg">
                  {year}
                </div>
              </div>

              {/* COMPETITIONS CARDS */}
              <div
                className={`flex flex-col items-${
                  yIndex % 2 === 0 ? "start" : "end"
                } gap-6`}
              >
                {comps.map((comp, i) => {
                  const isOpen =
                    selected.year === year && selected.comp === comp.name;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className={`relative bg-white border border-indigo-200 p-5 rounded-2xl shadow-md cursor-pointer hover:shadow-xl hover:scale-[1.02] transition ${
                        isOpen ? "w-full" : "w-full md:w-2/3"
                      }`}
                      onClick={() => toggleCompetition(year, comp.name)}
                    >
                      <h3 className="text-xl font-bold text-indigo-700 text-center">
                        {comp.name}
                      </h3>

                      <p className="text-gray-600 text-center mt-1">
                        {comp.achievements.slice(0, 60)}...
                      </p>

                      <AnimatePresence>
                        {isOpen && <CompetitionDetails comp={comp} />}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-16 text-sm text-center text-gray-500">
        © 2025 Boat Club, COEP Technological University
      </footer>
    </div>
  );
}
