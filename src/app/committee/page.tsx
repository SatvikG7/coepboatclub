/* eslint-disable @next/next/no-img-element */
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Faculty = [
    {
        name: "Dr. Sunil Bhirud",
        post: "President",
        img_path: "bhirud_sir.jpg",
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
        name: "Dr. J. Dadge",
        post: "Faculty Advisor",
        img_path: "dadge_sir.jpeg",
        mail: "jwt.physics@coeptech.ac.in",
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
        mail: "ukandekt22.instru@coeptech.ac.in",
        linkedin: "https://www.linkedin.com/in/kartiksiliconenthusiast/?originalSubdomain=in",
        img_path: "secretary.png",
    },
    {
        name: "Darshan Bhagwat",
        post: "Auditor",
        mail: "bhagwatdm22.mech@coeptech.ac.in",
        img_path: "auditor.png",
        linkedin: "https://www.linkedin.com/in/darshan-bhagwat-70a18525b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/bhagwat.darshan.11?igsh=MXYxaTFrenpmcHJocA==",
    },
    {
        name: "Yuvraj Fulsoundar",
        post: "Regatta Secretary",
        mail: "fulsoundaryp23.elec@coeptech.ac.in",
        img_path: "regatta_secretary.jpg",
    },

    {
        name: "Shreyas Patil",
        post: "kayaking and Canoeing Secretary",
        mail: "patilss22.civil@coeptech.ac.in",
        img_path: "ty_kr copy.jpg",
        linkedin: "https://www.linkedin.com/in/shreyas-patil-37a18425b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/shreyaspatil1277?igsh=YjhwZzJ1amxjdm8=",
    },
    {
        name: "Smruti Pachpute",
        post: "Punt Formation Secretary",
        mail: "pachputesj22.comp@coeptech.ac.in",
        img_path: "punt_formation_secretary.jpg",
        linkedin: "https://www.linkedin.com/in/smruti-pachpute-45006b258/?originalSubdomain=in",
    },
    {
        name: "Rajnandan Patil",
        post: "Rowing Secretary ",
        mail: "patilrs22.civil@coeptech.ac.in ",
        img_path: "rowing_sec.jpg",
        linkedin: "https://www.linkedin.com/in/rajnandan-patil-4a48a1277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/patilrajnandan_2133?igsh=MWFkdXM2ZGNvajB3ZA==",
    },
    {
        name: "Prathmesh Lasankar",
        post: "Telematches Secretary",
        mail: "prathmeshpl23.rai@coeptech.ac.in",
        img_path: "telematches_sec.png",
        linkedin: "https://www.linkedin.com/in/prathmesh-lasankar-035056376",
        instagram: "https://www.instagram.com/crankymystic11854",
    },
    {
        name: "Prem Dupargude",
        post: "T.Y kayaking Representative",
        mail: "dupargudepb23.meta@coeptech.ac.in",
        img_path: "ty_kr.jpg",
        linkedin: "https://www.linkedin.com/in/prem-dupargude-691223339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram:"https://www.instagram.com/prem_b_l_14?igsh=a212cjV5MTJwaTdw",
    },
    {
        name: "Snehal Yengandul",
        post: "T.Y Rowing Representative",
        mail: "yengandulsv23.mech@coeptech.ac.in ",
        img_path: "sy_rr.jpg",
        linkedin: "https://www.linkedin.com/in/snehal-yengandul-83ba1b283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/_snehal.04_",
    },
    {
        name: "Payal Kotkar",
        post: "Web Development Head",
        mail: "kotkarpr23.comp@coeptech.ac.in",
        img_path: "web_head.jpeg",
        linkedin: "https://www.linkedin.com/in/payalkotkar",
        instagram: "https://www.instagram.com/_payalk28_/",
        github: "https://github.com/Payalcoep",
    },
    {
        name: "Darshan Laddha",
        post: "Design and media Head",
        mail: "laddhads23.mfg@coeptech.ac.in",
        img_path: "design_head.jpeg",
        linkedin: "https://www.linkedin.com/in/darshan-laddha-071a10319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/darshanladdha745?igsh=MXV3cnEwZmh0dDE4bw==",
    },
    {
        name: "Mansi Gavande",
        post: "S.Y. Ladies Representative",
        mail: "sandipgm24.rai@coeptech.ac.in",
        img_path: "sy_lr.jpeg",
        linkedin: "https://www.linkedin.com/in/mansi-gavande-641585324",
        instagram: "https://www.instagram.com/mansi_gavande_369",
    },
    {
        name: "Neha Bhagwat",
        post: "S.Y. Rowing Representative",
        mail: "bhagwatns24.elec@coeptech.ac.in",
        img_path: "sy_rr2.jpg",
        linkedin: "https://www.linkedin.com/in/neha-bhagwat-46b176375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        instagram: "https://www.instagram.com/_nehabhagwat?igsh=MWgwY3NhMnlndDNzNg%3D%3D&utm_source=qr",
    },
    {
        name: "Abhiram Pise ",
        post: "S.Y. KB Representative",
        mail: "piseas24.plan@coeptech.ac.in",
        img_path: "sy_kb_repre.jpg",
        linkedin: "https://www.linkedin.com/in/abhiram-pise-0449b7274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/abhiram_.1705?igsh=MzFyanMyNzlkYTA=",
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
                    Boat Club Managing Committee (BMC) 2025-26
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
            <div className="flex justify-center">
                <button className="px-4 py-2 mt-2 mb-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                    <a href="/previous-committee">
                        Previous Committee (2024-25)
                    </a>
                </button>
            </div>
        </div>
    );
}
