"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
    quote: string;
    name: string;
    designation: string;
    src: string;
};
export const AnimatedTestimonials = ({
    testimonials,
    autoplay = false,
}: {
    testimonials: Testimonial[];
    autoplay?: boolean;
}) => {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    const isActive = (index: number) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [autoplay]);

    function seededRandom(seed: number) {
        const a = 1664525;
        const c = 1013904223;
        const m = Math.pow(2, 32);
        seed = (a * seed + c) % m;
        return seed / m;
    }

    function getSeededRandomNumber(seed: number) {
        const random = seededRandom(seed);
        return Math.floor(random * 21) - 10; // Range: -1 to 19
    }

    const randomRotateY = () => {
        return getSeededRandomNumber(1);
    };
    return (
        <div className="z-40 max-w-sm px-4 py-10 mx-auto font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
            <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-20">
                <div>
                    <div className="relative w-full h-80">
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.src}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,
                                        rotate: randomRotateY(),
                                    }}
                                    animate={{
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
                                        z: isActive(index) ? 0 : -100,
                                        rotate: isActive(index)
                                            ? 0
                                            : randomRotateY(),
                                        zIndex: isActive(index)
                                            ? 40
                                            : testimonials.length + 2 - index,
                                        y: isActive(index) ? [0, -80, 0] : 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: 100,
                                        rotate: randomRotateY(),
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 origin-bottom"
                                >
                                    <Image
                                        src={testimonial.src}
                                        alt={testimonial.name}
                                        width={500}
                                        height={500}
                                        draggable={false}
                                        loading="lazy"
                                        className="object-cover object-center w-full h-full rounded-3xl"
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="flex flex-col justify-between py-2 md:py-4">
                    <motion.div
                        key={active}
                        initial={{
                            y: 20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            y: -20,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                    >
                        <h3 className="text-2xl font-bold text-black">
                            {testimonials[active].name}
                        </h3>
                        <p className="text-gray-500 text-md ">
                            {testimonials[active].designation}
                        </p>
                        <motion.p className="mt-4 text-lg text-gray-700 md:mt-8">
                            {testimonials[active].quote
                                .split(" ")
                                .map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{
                                            filter: "blur(10px)",
                                            opacity: 0,
                                            y: 5,
                                        }}
                                        animate={{
                                            filter: "blur(0px)",
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                            ease: "easeInOut",
                                            delay: 0.02 * index,
                                        }}
                                        className="inline-block"
                                    >
                                        {word}&nbsp;
                                    </motion.span>
                                ))}
                        </motion.p>
                    </motion.div>
                    <div className="flex gap-4 pt-6 md:pt-12">
                        <button
                            onClick={handlePrev}
                            className="flex items-center justify-center bg-gray-100 rounded-full h-7 w-7 dark:bg-neutral-800 group/button"
                        >
                            <IconArrowLeft className="w-5 h-5 text-black transition-transform duration-300 dark:text-neutral-400 group-hover/button:rotate-12" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="flex items-center justify-center bg-gray-100 rounded-full h-7 w-7 dark:bg-neutral-800 group/button"
                        >
                            <IconArrowRight className="w-5 h-5 text-black transition-transform duration-300 dark:text-neutral-400 group-hover/button:-rotate-12" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
