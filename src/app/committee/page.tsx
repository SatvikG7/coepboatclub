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
        name: "Dr. V. K. Haribhakta",
        post: "Vice-President",
        img_path: "vice_president.png",
        mail: "vkh.mech@coeptech.ac.in",
    },
    {
        name: "Dr. M. P. Khond",
        post: "Director, BOSD",
        img_path: "director_bosd.jpg",
        mail: "mpk.mech@coeptech.ac.in",
    },
    {
        name: "Dr. M. R. Shindikar",
        post: "Assistant Director, BOSD",
        img_path: "assistant_director.jpeg",
        mail: "hod.appsci@coeptech.ac.in",
    },

    {
        name: "Dr. S. S. Kumbhar",
        post: "Regatta Incharge",
        img_path: "regatta_incharge.png",
        mail: "ssk.comp@coeptech.ac.in",
    },
    {
        name: "Dr. B. U. Sonawane",
        post: "Faculty Advisor",
        img_path: "faculty_advisor_4.png",
        mail: "bus.prod@coeptech.ac.in",
    },
    {
        name: "Dr. Avinash Khandizod",
        post: "Faculty Advisor",
        img_path: "faculty_advisor_1.jpg",
        mail: "ank.appsci@coeptech.ac.in",
    },
    {
        name: "Dr. M. U. Khobragade",
        post: "Faculty Advisor",
        img_path: "faculty_advisor_2.png",
        mail: "muk.mech@coeptech.ac.in",
    },
    {
        name: "Mr. M. B. Bhore",
        post: "Faculty Advisor",
        img_path: "faculty_advisor_3.png",
        mail: "mbb.mech@coeptech.ac.in",
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
        name: "Snehal Yengandul ",
        post: "General Secretary",
        mail: "yengandulsv23.mech@coeptech.ac.in",
        img_path: "GS.jpg",
        linkedin: "https://www.linkedin.com/in/darshan-bhagwat-70a18525b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram: "https://www.instagram.com/_snehal.04_?cplk=NHd6eTk0dDZqOTRz",
    },
    {
        name: "Sanket Khedkar ",
        post: "Regatta Secretary",
        mail: "sanketkhedkar9767@gmail.com",
        img_path: "regatta_secretary.jpg",
        linkedin:"https://www.linkedin.com/in/sanket-khedkar-55b156325?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        instagram:"https://www.instagram.com/_khedkarsanket_?rpxt=MWNlZ2RlazQ0NG9tZA=="
    },

    {
        name: "Krushna Bankar",
        post: "Auditor",
        mail: "bankarkl23.comp@coeptech.ac.in",
        img_path: "auditor.jpg",
        linkedin: "https://www.linkedin.com/in/krushna-bankar-893a57281?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        
    },

    {
        name: "Prem Dupargude",
        post: "kayaking and Canoeing Secretary",
        mail: "dupargudepb23.meta@coeptech.ac.in",
        img_path: "ks.jpeg",
        linkedin: "https://www.linkedin.com/in/prem-dupargude-691223339?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        instagram: "https://www.instagram.com/prem_b_l_14?exln=a212cjV5MTJwaTdw",
    },
    {
        name: "Kaustubh Athanikar",
        post: "Punting Secretary",
        mail: "athanikarks23.rai@coeptech.ac.in",
        img_path: "punting_secretary.jpg",
        
    },
    {
        name: "Tejas Pawar ",
        post: "Rowing Secretary",
        mail: "tejasvp23.meta@coeptech.ac.in",
        img_path: "rowing_secretary.jpg",
    },
    // {
    //     name: "Sarthak Vikhe",
    //     post: "Jalmaitri Secretary ",
    //     mail: "vikhesd22.mech@coeptech.ac.in",
    //     img_path: "Jalmaitri_sec.jpeg",
    //     linkedin: "https://www.linkedin.com/in/sarthak-vikhe-5b006b26b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    //     instagram: "https://www.instagram.com/sarthak_vikhe_patil?igsh=aWJ2eDJyaGFtY3Uz",
    // },
    {
        name: "Adarsh Choudhury",
        post: "Telematches Secretary",
        mail: "adarshc24.plan@coeptech.ac.in",
        img_path: "telematches_sec.png",
        linkedin: "https://www.linkedin.com/in/adarsh-choudhury7?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        instagram: "https://www.instagram.com/adarssshhhh._?cplk=MTc3Zmd2eHpsZ3V5dA==",
    },
    {
        name: "Mrunal More ",
        post: "Mashal Dance Secretary",
        mail: "morems24.meta@coeptech.ac.in",
        img_path: "md_sec.jpg",
        instagram: "https://www.instagram.com/mrunal_more17",
    },
    {
        name: "Kedar Todewale",
        post: "T.Y kayaking Representative",
        mail: "Devdatttk24.meta@coeptech.ac.in",
        img_path: "ty_kr.jpg",
        linkedin: "https://www.linkedin.com/in/kedar-todewale-1539ba314?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        instagram: "https://www.instagram.com/kedar_todewale?dlrf=MTVjdzltbnE4bWNrdw==",
    },
    {
        name: "Neha Bhagwat",
        post: "T.Y. Rowing Representative",
        mail: "bhagwatns24.elec@coeptech.ac.in",
        img_path: "ty_rr.jpg",
        linkedin: "https://www.linkedin.com/in/neha-bhagwat-46b176375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        instagram: "https://www.instagram.com/_nehabhagwat?igsh=MWgwY3NhMnlndDNzNg%3D%3D&utm_source=qr",
    },
    {
        name: "Kartikey Dhale",
        post: "Web Development Head",
        mail: "dhaleka25.comp@coeptech.ac.in",
        img_path: "web.png",
        linkedin: "https://www.linkedin.com/in/kartikey-dhale18",
        instagram: "https://www.instagram.com/Kartikey_dhale",
        github: "https://github.com/kartikeydhale18",
    },
    {
        name: "Aastha Bhagat",
        post: "Design and media Head",
        mail: "bhagataa24.extc@coeptech.ac.in",
        img_path: "design_head.jpg",
        linkedin: "https://www.linkedin.com/in/aastha-bhagat-887240344?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        instagram: "https://www.instagram.com/ash_thetic5?psln=MXFyYTgwNnRta2JtZQ==",
    },
    {
        name: "Mitalee Surwase",
        post: "S.Y. Ladies Representative",
        mail: "surwasemd25.plan@coeptech.ac.in",
        img_path: "sy_lr.PNG",
        instagram: "https://www.instagram.com/mitalee_surwase?cplk=MTMxZ3R1bXg1Nmhucw==",
    },
    {
        name: "Harsh Kolhe",
        post: "S.Y. Rowing Representative",
        mail: "kolhehl25.plan@coeptech.ac.in",
        img_path: "sy_rr.jpg",
        instagram: "https://www.instagram.com/harshkolhef1?vrfl=MTFteXNubnpmcThudw==",
    },
    {
        name: "Mayur Pattanshetti ",
        post: "S.Y. Kayaking Representative",
        mail: "pattanshettims25.civil@coeptech.ac.in",
        img_path: "sy_kr.jpg",
        linkedin: "https://www.linkedin.com/in/mayur-pattanshetti-b81522436?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        instagram: "https://www.instagram.com/mayur_15827?dlrf=djdzdHR6bWR2NXMx",
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
