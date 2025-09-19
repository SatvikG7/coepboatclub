/* eslint-disable @next/next/no-img-element */
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Faculty = [
    {
        name: "Dr. Sunil Bhirud",
        post: "President",
        img_path: "president.png",
        mail: "vc.coeptech@coeptech.ac.in",
    },
    {
        name: "Dr. M. P. Khond",
        post: "Director, BOSD",
        img_path: "director_bosd.jpg",
        mail: "mpk.mech@coeptech.ac.in",
    },
    {
        name: "Dr. V. K. Haribhakta",
        post: "Vice-President",
        img_path: "vice_president.png",
        mail: "vkh.mech@coeptech.ac.in",
    },

    {
        name: "Dr. S. M. Nawghare",
        post: "Regatta Incharge",
        img_path: "regatta_incharge.png",
        mail: "smn.civil@coeptech.ac.in",
    },
    {
        name: "Dr. S. S. Kumbhar",
        post: "Faculty Advisor",
        img_path: "faculty_advisor_1.png",
        mail: "ssk.comp@coeptech.ac.in",
    },
    {
        name: "Dr. M. U. Khobragade",
        post: "Faculty Advisor",
        img_path: "faculty_advisor_2.png",
        mail: "muk.mech@coeptech.ac.in",
    },
    {
        name: "Dr. P. S. Shinde",
        post: "Faculty Advisor",
        img_path: "faculty_advisor_3.png",
        mail: "pss.mech@coeptech.ac.in",
    },
    {
        name: "Dr. B. U. Sonawane",
        post: "Faculty Advisor",
        img_path: "faculty_advisor_4.png",
        mail: "bus.prod@coeptech.ac.in",
    },
    {
        name: "Dr. A. N. Deshpande",
        post: "Faculty Advisor",
        img_path: "faculty_advisor_5.png",
        mail: "and.gymkhana@coeptech.ac.in",
    },
];

const BMC = [
    {
        name: "Kartik Kshirsagar",
        post: "General Secretary",
        mail: "ukhandekt22.instru@coeptech.ac.in",
        img_path: "secretary.png",
    },
    {
        name: "Darshan Bhagwat",
        post: "Auditor",
        mail: "bhagwatdm22.mech@coeptech.ac.in",
        img_path: "auditor.png",
    },
    {
        name: "Yuvraj Fulsoundar",
        post: "Regatta Secretary",
        mail: "fulsoundaryp23.elec@coeptech.ac.in",
        img_path: "regatta_secretary.jpg",
    },

    {
        name: "Parth Yewale",
        post: "kayaking and Canoeing Secretary",
        mail: "yewalepm21.comp@coeptech.ac.in",
        img_path: "kayaking_canoeing_secretary.jpg",
        linkedin: "https://www.linkedin.com/in/parth-yewale-6157ba22a",
        instagram: "https://www.instagram.com/parthhh.yx",
    },
    {
        name: "Kshitij Prashant Nazirkar",
        post: "Punt Formation Secretary",
        mail: "nazirkarkp21.mfg@coeptech.ac.in",
        img_path: "punt_formation_secretary.jpg",
        linkedin: "https://www.linkedin.com/in/kshitij-nazirkar-5537a5231",
        instagram: "https://www.instagram.com/kshitijnazirkar",
    },
    {
        name: "Anushka Mane",
        post: "B.Tech Ladies Representative",
        mail: "maneav22.civil@coeptech.ac.in",
        img_path: "btech_lr.jpg",
        linkedin: "https://www.linkedin.com/in/anushka-mane-10b7a6283",
        instagram: "https://www.instagram.com/mane_anushka_15",
    },
    {
        name: "Shreyas Patil",
        post: "T.Y kayaking Representative",
        mail: "patilss22.civil@coeptech.ac.inn",
        img_path: "ty_kr.jpg",
        instagram:
            "https://www.instagram.com/invites/contact/?igsh=o6hqytt4bwfy&utm_content=p6aq5hq",
    },
    {
        name: "kartik",
        post: "T.Y Rowing Representative",
        mail: "ukandekt22.instru@coeptech.ac.in",
        img_path: "ty_rr.jpg",
        linkedin: "https://www.linkedin.com/in/kartikinstrumentationcontrol",
        instagram: "https://www.instagram.com/k_a_r_t_i_k_0108",
    },
    {
        name: "Sahil Wagde",
        post: "Design Head",
        mail: "wagdesa22@elec@coeptech.ac.in",
        img_path: "design_head.jpg",
        linkedin: "https://www.linkedin.com/in/sahil-wagde-18569624a",
        instagram: "https://www.instagram.com/_sahil_wagde_",
    },
    {
        name: "Satvik Gaikwad",
        post: "Web Development Head",
        mail: "gaikwadss22.extc@coeptech.ac.in",
        img_path: "web_head.jpg",
        linkedin: "https://www.linkedin.com/in/satvikg7",
        instagram: "https://www.instagram.com/satvik_gaikwad_7",
        github: "https://github.com/satvikg7",
    },
    {
        name: "Anushka Tanpure",
        post: "S.Y. Ladies Representative",
        mail: "tanpureav23.rai@coeptech.ac.in",
        img_path: "sy_lr.jpg",
        linkedin: "https://www.linkedin.com/in/anushka-tanpure-ab3877291",
    },
    {
        name: "Snehal Yengandul",
        post: "S.Y. Rowing Representative",
        mail: "yengandulsv23.mech@coeptech.ac.in",
        img_path: "sy_rr.jpg",
        linkedin: "https://www.linkedin.com/in/snehal-yengandul-83ba1b283",
        instagram: "https://www.instagram.com/_snehal.04_",
    },
];

export default function Committee() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center p-8">
                <h1 className="mb-8 text-3xl text-center underline">
                    Faculty Advisors for BMC
                </h1>
                <div className="flex flex-row flex-wrap gap-6 justify-evenly">
                    {/* image cards */}

                    {Faculty.map((F, i) => {
                        return (
                            <div
                                key={i}
                                className="flex flex-col items-center gap-2 bg-gray-300 shadow-md"
                            >
                                <img
                                    loading="lazy"
                                    className="object-cover rounded-md w-72 h-72 aspect-2"
                                    src={"/assets/committee/" + F.img_path}
                                    alt={F.name}
                                />
                                <p className="text-xl text-gray-950">
                                    {F.name}
                                </p>
                                <p className="text-lg text-gray-800">
                                    {F.post}
                                </p>
                                <p className="text-gray-600 text-md">
                                    {F.mail}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-col items-center justify-center p-8">
                <h1 className="mb-8 text-3xl text-center underline">
                    Boat Club Managing Committee (BMC) 2024-25
                </h1>
                <div className="flex flex-row flex-wrap gap-6 justify-evenly">
                    {BMC.map((F, i) => {
                        return (
                            <div
                                key={i}
                                className="flex flex-col items-center gap-2 pb-2 bg-gray-300 shadow-md"
                            >
                                <img
                                    loading="lazy"
                                    className="object-cover rounded-md w-72 h-72 aspect-2"
                                    src={"/assets/committee/" + F.img_path}
                                    alt={F.name}
                                />
                                <p className="text-xl text-gray-950">
                                    {F.name}
                                </p>
                                <p className="text-gray-800 text-md">
                                    {F.post}
                                </p>
                                <p className="flex flex-row gap-2 text-gray-600 text-md">
                                    {/* socials */}
                                    {F.linkedin && (
                                        <a href={F.linkedin}>
                                            <FaLinkedin className="text-2xl text-blue-700" />
                                        </a>
                                    )}
                                    {F.instagram && (
                                        <a href={F.instagram}>
                                            <FaInstagram className="text-2xl text-red-700" />
                                        </a>
                                    )}
                                    {F.mail && (
                                        <a href={"mailto:" + F.mail}>
                                            <IoMail className="text-2xl text-blue-700" />
                                        </a>
                                    )}
                                    {F.github && (
                                        <a href={F.github}>
                                            <FaGithub className="text-2xl text-black" />
                                        </a>
                                    )}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
