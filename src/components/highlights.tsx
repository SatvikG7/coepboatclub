/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Carousel, Card } from "@/components/cards-carousel";
import { InstagramEmbed } from "react-social-media-embed";
export function Highlights() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full">
            <h2 className="p-2 mx-auto font-serif text-3xl font-bold max-w-7xl md:text-5xl text-neutral-800">
                Highlights
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const events = {
    regatta: (
        <div className="bg-[#F5F5F7] p-4 md:p-8 rounded-3xl m-2">
            <img
                src="/assets/98_regatta/98th_22.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <p className="max-w-3xl mx-auto font-serif text-base text-neutral-600 md:text-2xl">
                The Regatta is one of the most prestigious and eagerly awaited events of COEP Technological University, showcasing a rich legacy of water sports, teamwork, and tradition. Held annually, the event features a variety of thrilling races including kayak, canoe, and the iconic dragon boat race. With enthusiastic participation from students, alumni, and spectators, Regatta celebrates the spirit of sportsmanship, dedication, and unity on the waters.
            </p>
            <img
                src="/assets/98_regatta/98th_0.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_1.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_2.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_3.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_4.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_5.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_6.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_7.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_8.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_9.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_10.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_11.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_12.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_13.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_14.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_15.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_16.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_17.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_18.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_19.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_20.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_21.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_23.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_24.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_25.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_26.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_27.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_28.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_29.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/98_regatta/98th_30.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            
            <img
                src="/assets/98_regatta/DSC_7920.JPG"
                alt="98th Regatta"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
        </div>
    ),
    mini_regatta: (
        <div className="bg-[#F5F5F7] p-4 md:p-8 rounded-3xl m-2">
            <img
                src="/assets/mini_regatta/mini1.jpg"
                alt="Regatta Inauguration"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <p className="max-w-3xl mx-auto font-serif text-base text-neutral-600 md:text-2xl">
                The Mini Regatta serves as an introductory experience for students, offering them a glimpse into the spirit, scale, and excitement of the main Regatta. Designed especially for new participants, it familiarises students with water sports, team coordination, and the regatta culture. By showcasing races and activities, the Mini Regatta builds enthusiasm and encourages students to actively participate in the upcoming Regatta season.            </p>
            <img
                src="/assets/mini_regatta/mini2.jpg"
                alt="Regatta Inauguration"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/mini_regatta/mini3.jpg"
                alt="Regatta Inauguration"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/mini_regatta/mini4.jpg"
                alt="Regatta Inauguration"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
        </div>
    ),
    regatta_inaguration: (
        <div className="bg-[#F5F5F7] p-4 md:p-8 rounded-3xl m-2">
            <img
                src="/assets/regatta_inauguration/inaug1.jpg"
                alt="Regatta Inauguration"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <p className="max-w-3xl mx-auto font-serif text-base text-neutral-600 md:text-2xl">
                The Regatta Inauguration officially marks the commencement of the Regatta season at COEP. The event brings together students, faculty, and dignitaries to celebrate the beginning of this iconic tradition. A Mini Regatta is conducted to energise the audience and set the pace for the season ahead. The highlight of the inauguration is the grand reveal of the 98th Regatta theme, igniting excitement, pride, and anticipation among participants and spectators alike.
            </p>
            <img
                src="/assets/regatta_inauguration/inaug2.jpg"
                alt="Regatta Inauguration"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/regatta_inauguration/inaug3.jpg"
                alt="Regatta Inauguration"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
            <img
                src="/assets/regatta_inauguration/inaug4.jpg"
                alt="Regatta Inauguration"
                className="object-cover mx-auto mb-2 md:w-2/3 rounded-3xl"
            />
        </div>
    ),
/*
    "/assets/deepotsav/2025.jpg",
            "/assets/deepotsav/20257.jpeg",
            "/assets/deepotsav/20258.jpeg",
            "/assets/deepotsav/20259.jpeg",
            "/assets/deepotsav/20250.jpeg",
            "/assets/deepotsav/20253.jpeg",
            "/assets/deepotsav/20254.jpeg",
            "/assets/deepotsav/20255.jpeg",
            "/assets/deepotsav/20256.jpeg",
            "/assets/deepotsav/deepotsav_1.jpg",
            "/assets/deepotsav/deepotsav_2.jpg",
            "/assets/deepotsav/deepotsav_3.jpg",
            "/assets/deepotsav/deepotsav_4.jpg",
            "/assets/deepotsav/deepotsav_5.jpg"
            */
    deepotsav: (
        <div className="bg-[#F5F5F7] p-4 md:p-8 rounded-3xl m-2">
            <img
                className="object-cover m-4 mx-auto md:w-2/3 rounded-3xl"
                src="/assets/deepotsav/20257.jpeg"
                alt="deepotsav"
                loading="lazy"
            />
            <img
                className="m-4 mx-auto md:w-2/3 rounded-3xl"
                src="/assets/deepotsav/20258.jpeg"
                alt="deepotsav"
                loading="lazy"
            /><img
                className="m-4 mx-auto md:w-2/3 rounded-3xl"
                src="/assets/deepotsav/20259.jpeg"
                alt="deepotsav"
                loading="lazy"
            />
            <p className="max-w-3xl mx-auto font-serif text-base text-neutral-600 md:text-2xl">
                On the occasion of Diwali, the Boat Club organizes a Deepotsav.
                The event is a grand success every year and is enjoyed by all
                the students of COEP. On this occasion, the Boat Club was
                decorated with Diyas to have a glimpse of the festival of
                Diwali.
            </p>
            <img
                className="m-4 mx-auto md:w-2/3 rounded-3xl"
                src="/assets/deepotsav/20250.jpeg"
                alt="deepotsav"
                loading="lazy"
            /><img
                className="m-4 mx-auto md:w-2/3 rounded-3xl"
                src="/assets/deepotsav/20253.jpeg"
                alt="deepotsav"
                loading="lazy"
            />
            <p className="max-w-3xl mx-auto font-serif text-base text-neutral-600 md:text-2xl">
                Every corner was lit with diyas and there isn&apos;t a single
                spot of darkness. Everybody enjoyed this sight with laughter and
                joy as they realise how amazing our boat club really is.
            </p><img
                className="m-4 mx-auto md:w-2/3 rounded-3xl"
                src="/assets/deepotsav/20255.jpeg"
                alt="deepotsav"
                loading="lazy"
            /><img
                className="m-4 mx-auto md:w-2/3 rounded-3xl"
                src="/assets/deepotsav/20254.jpeg"
                alt="deepotsav"
                loading="lazy"
            /><img
                className="m-4 mx-auto md:w-2/3 rounded-3xl"
                src="/assets/deepotsav/20256.jpeg"
                alt="deepotsav"
                loading="lazy"
            />
            <img
                className="m-4 mx-auto md:w-2/3 rounded-3xl"
                src="/assets/deepotsav/deepotsav_1.jpg"
                alt="deepotsav"
                loading="lazy"
            />
            <img
                className="m-4 mx-auto md:w-2/3 rounded-3xl"
                src="/assets/deepotsav/deepotsav_2.jpg"
                alt="deepotsav"
                loading="lazy"
            />
            <img
                className="m-4 mx-auto md:w-2/3 rounded-3xl"
                src="/assets/deepotsav/deepotsav_3.jpg"
                alt="deepotsav"
                loading="lazy"
            />
            <img
                className="m-4 mx-auto md:w-2/3 rounded-3xl"
                src="/assets/deepotsav/deepotsav_5.jpg"
                alt="deepotsav"
                loading="lazy"
            />
        </div>
    ),
    moonlight_punting: (
        <div className="bg-[#F5F5F7] p-4 md:p-8 rounded-3xl m-2">
            <p className="max-w-3xl mx-auto font-serif text-base text-neutral-600 md:text-2xl">
                Moonlight Punting is held on the occasion of &apos;Kojagiri
                Purnima&apos; (Full Moon). Everyone is given a chance to ride a
                punt in the dimly lit waters of the Mula river. Under the
                beautiful Full Moon and with the company of friends, this event
                is enjoyed by many students of COEP. It is concluded by
                providing everyone with the traditional Masala Doodh - enjoyed
                as a refreshment on Kojagiri.
            </p>
            <div>
                <img
                    className="object-cover m-4 mx-auto md:w-2/3 rounded-3xl"
                    src="/assets/moonlight_punting/boat1.JPG"
                    alt="regatta_invitation"
                    loading="lazy"
                />
                <img
                    className="object-cover m-4 mx-auto md:w-2/3 rounded-3xl"
                    src="/assets/moonlight_punting/moon.jpg"
                    alt="regatta_invitation"
                    loading="lazy"
                />
                <img
                    className="object-cover m-4 mx-auto md:w-2/3 rounded-3xl"
                    src="/assets/moonlight_punting/boat.JPG"
                    alt="regatta_invitation"
                    loading="lazy"
                />
                <img
                    className="object-cover m-4 mx-auto md:w-2/3 rounded-3xl"
                    src="/assets/moonlight_punting/moonlight.jpg"
                    
                    alt="regatta_invitation"
                    loading="lazy"
                />
                <img
                    className="object-cover m-4 mx-auto md:w-2/3 rounded-3xl"
                    src="/assets/moonlight_punting/child.JPG"
                    alt="regatta_invitation"
                    loading="lazy"
                />
            </div>
        </div>
    ),
    mit_sports_meet: (
        <div className="bg-[#F5F5F7] p-4 md:p-8 rounded-3xl m-2">
            <p className="max-w-3xl mx-auto font-serif text-base text-neutral-600 md:text-2xl">
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
            <p className="max-w-3xl mx-auto font-serif text-base text-neutral-600 md:text-2xl">
                Survival of the Fittest is a competition that tests the physical
                and mental strength of the participants. The event is a grand
                success every year and is enjoyed by all the students of COEP.
                The event is held to encourage students to participate in the
                Regatta and to motivate them to perform their best.
            </p>
            <div className="flex justify-center">
                <InstagramEmbed
                    url="https://www.instagram.com/p/DFx_F7Iozp9/"
                    width={328}
                />
            </div>
        </div>
    ),
    rise_of_the_fittest: (
        <div className="bg-[#F5F5F7] p-4 md:p-8 rounded-3xl m-2">
            <p className="max-w-3xl mx-auto font-serif text-base text-neutral-600 md:text-2xl">
                COEP celebrated Khande Navami Pooja with an energetic Gym Competition - Rise of the Fittest at the Boat Club, where BTech and MTech students competed in teams through challenges like rowing, push-ups, pull-ups, squats, and skipping. The event showcased incredible fitness, teamwork, and festive spirit, with exciting prizes and refreshments for the winners.
            </p>
            <div className="flex justify-center">
                <InstagramEmbed
                    url="https://www.instagram.com/p/DFx_F7Iozp9/"
                    width={328}
                />
            </div>
            <div>
                <img
                    className="object-cover m-4 mx-auto md:w-2/3 rounded-3xl"
                    src="/assets/rise_of_the_fittest/action.jpeg"
                    alt="regatta_invitation"
                    loading="lazy"
                />
                <img
                    className="object-cover m-4 mx-auto md:w-2/3 rounded-3xl"
                    src="/assets/rise_of_the_fittest/rise.jpg"
                    alt="regatta_invitation"
                    loading="lazy"
                />
                <img
                    className="object-cover m-4 mx-auto md:w-2/3 rounded-3xl"
                    src="/assets/rise_of_the_fittest/commitee.jpg"
                    alt="regatta_invitation"
                    loading="lazy"
                />
            </div>
        </div>
    ),
    jalmaitri_camp: (
        <div className="bg-[#F5F5F7] p-4 md:p-8 rounded-3xl m-2">
            <p className="max-w-3xl mx-auto font-serif text-base text-neutral-600 md:text-2xl">
                Jalmaitri Camp is a camp organized by the Boat Club for the
                freshers of COEP. The camp is a grand success every year and is
                enjoyed by all the students of COEP. The camp is held to
                encourage students to participate in the Boat Club and to
                motivate them to perform their best.
                <br />
                <div className="flex justify-center">
                    <InstagramEmbed
                        url="https://www.instagram.com/p/DF-YcBsoUsi/"
                        width={328}
                    />
                </div>
                <div className="flex justify-center mt-4 space-x-4">
                    <button className="px-8 py-2 font-sans text-xl font-bold text-white transition duration-200 bg-orange-500 border-2 border-transparent rounded-md hover:bg-white hover:text-black hover:border-orange-500">
                        <a href="/jalmaitri-camp">View memories</a>
                    </button>
                    <button className="px-8 py-2 font-sans text-xl font-bold text-white transition duration-200 bg-blue-500 border-2 border-transparent rounded-md hover:bg-white hover:text-black hover:border-blue-500">
                        <a href="/assets/jalmaitri_camp/jalmaitri.docx">
                            View report
                        </a>
                    </button>
                </div>
            </p>
            <div>
                <img
                    className="object-cover m-4 mx-auto md:w-2/3 rounded-3xl"
                    src="/assets/jalmaitri_camp/jalmaitri_26_1.jpeg"
                    alt="jalmaitri_camp"
                    loading="lazy"
                />
                <img
                    className="object-cover m-4 mx-auto md:w-2/3 rounded-3xl"
                    src="/assets/jalmaitri_camp/jalmaitri_26.jpeg"
                    alt="jalmaitri_camp"
                    loading="lazy"
                />
                <img
                    className="object-cover m-4 mx-auto md:w-2/3 rounded-3xl"
                    src="/assets/jalmaitri_camp/jalmaitri_26_2.jpeg"
                    alt="jalmaitri_camp"
                    loading="lazy"
                />
                <img
                    className="object-cover m-4 mx-auto md:w-2/3 rounded-3xl"
                    src="/assets/jalmaitri_camp/jalmaitri_26_3.jpeg"
                    alt="jalmaitri_camp"
                    loading="lazy"
                />
                <img
                    className="object-cover m-4 mx-auto md:w-2/3 rounded-3xl"
                    src="/assets/jalmaitri_camp/jalmaitri_26_4.jpeg"
                    alt="jalmaitri_camp"
                    loading="lazy"
                />
                <img
                    className="object-cover m-4 mx-auto md:w-2/3 rounded-3xl"
                    src="/assets/jalmaitri_camp/jalmaitri_26_5.jpeg"
                    alt="jalmaitri_camp"
                    loading="lazy"
                />
                <img
                    className="object-cover m-4 mx-auto md:w-2/3 rounded-3xl"
                    src="/assets/jalmaitri_camp/bornfire.jpeg"
                    alt="jalmaitri_camp"
                    loading="lazy"
                />
            </div>
        </div>
    ),

    regatta_invitation: (
        <div>
            <p>
                We are delighted to invite you to be a part of the 97th glorious
                year of the COEP Regatta—a cherished tradition that symbolizes
                passion, perseverance, and excellence on the water.
                <br />
                <br />
                &quot;With every stroke, we push beyond the horizon, chasing new
                dreams and endless possibilities.&quot;
                <br />
                <br />
                Your presence will add to the spirit of this historic
                celebration and make it even more special!
                <br />
                <br />
                Event Details: <br /> Date: 16th March 2025 <br /> Venue: COEP
                Boat Club Time: 4 PM onwards <br />
                Join Virtually:{" "}
                <a className="underline text-blue-600" href="/livestream">
                    Youtube
                </a>
                <br />
                <br />
                Join us as we mark this incredible milestone with enthusiasm,
                adventure, and the true spirit of teamwork. Let&apos;s come
                together to honor this legacy and create unforgettable memories!
                <br />
                <br />
                We look forward to celebrating with you.
                <br />
                <br />
                Warm regards,
                <br /> 97th Regatta Organizing Team <br /> COEP Boat Club
            </p>

            <div>
                <img
                    className="object-cover m-4 mx-auto md:w-2/3 rounded-3xl"
                    src="/assets/regatta_invitation/page-1.jpg"
                    alt="regatta_invitation"
                    loading="lazy"
                />
                <img
                    className="object-cover m-4 mx-auto md:w-2/3 rounded-3xl"
                    src="/assets/regatta_invitation/page-2.jpg"
                    alt="regatta_invitation"
                    loading="lazy"
                />
                <img
                    className="object-cover m-4 mx-auto md:w-2/3 rounded-3xl"
                    src="/assets/regatta_invitation/page-3.jpg"
                    alt="regatta_invitation"
                    loading="lazy"
                />
                <img
                    className="object-cover m-4 mx-auto md:w-2/3 rounded-3xl"
                    src="/assets/regatta_invitation/page-4.jpg"
                    alt="regatta_invitation"
                    loading="lazy"
                />
            </div>
        </div>
    ),
};

const data = [
    {
        date: "21/03/2026 - 22/03/2026",
        title: "98th Regatta",
        src: "/assets/98_regatta/98th_22.JPG",
        content: events["regatta"],
    },
    {
        date: "20/02/2026 - 21/02/2026",
        title: "Jalmaitri Camp",
        src: "/assets/jalmaitri_camp/jalmaitri_26.jpeg",
        content: events["jalmaitri_camp"],
    },
    {
        date: "11/02/2026",
        title: "Survival of the Fittest",
        src: "/assets/survival_of_the_fittest/survival_of_the_fittest_1.jpg",
        content: events["survival_of_the_fittest"],
    },
    {
        date: "05/12/2025",
        title: "Mini Regatta",
        src: "/assets/mini_regatta/mini2.jpg",
        content: events["mini_regatta"],
    },
    {
        date: "05/12/2025",
        title: "Regatta Inauguration",
        src: "/assets/regatta_inauguration/inaug3.jpg",
        content: events["regatta_inaguration"],
    },
    {
        date: "15/10/2025",
        title: "Deepotsav",
        src: "/assets/deepotsav/20253.jpeg",
        content: events["deepotsav"],
    },
    {
        date: "07/10/2025",
        title: "Moonlight Punting",
        src: "/assets/moonlight_punting/boat1.JPG",
        content: events["moonlight_punting"],
    },
    {
        date: "01/10/2025",
        title: "Rise Of The Fittest",
        src: "/assets/rise_of_the_fittest/action.jpeg",
        content: events["rise_of_the_fittest"],
    },
    {
        date: "26/01/2025",
        title: "Vishwanath Sports Meet",
        src: "/assets/mit_sports_meet/hero.jpg",
        content: events["mit_sports_meet"],
    }
    
];
