"use client";

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface NavigationItem {
    name: string;
    href: string;
}

const navigation: NavigationItem[] = [
    { name: "Home", href: "/" },
    { name: "Sports and Competetions", href: "/sports" },
    { name: "Events", href: "/events" },
    { name: "Jalmaitri Camp", href: "/jalmaitri-camp" },
    { name: "Regatta", href: "https://regatta.coepboatclub.com" },
    { name: "Committee", href: "/committee" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
    const [active, setActive] = useState("home");

    useEffect(() => {
        const path = window.location.pathname;
        const pathArray = path.split("/");
        const activeLink = pathArray[1] === "" ? "home" : pathArray[1];
        setActive(activeLink.replace("-", " ").toLowerCase());
    }, []);

    return (
        <Disclosure
            as="nav"
            className={cn(
                "top-0 z-50 bg-blue-950 md:bg-transparent sticky",
                active == "home" ? "md:absolute" : ""
            )}
        >
            <div
                className={cn(
                    "mx-auto px-2 sm:px-6 lg:px-8",
                    active == "home" ? "md:fixed right-0 left-0" : ""
                )}
            >
                <div className="relative flex items-center justify-center h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md group hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon
                                aria-hidden="true"
                                className="block size-6 group-data-open:hidden"
                            />
                            <XMarkIcon
                                aria-hidden="true"
                                className="hidden size-6 group-data-open:block"
                            />
                        </DisclosureButton>
                    </div>
                    <div className="flex items-center justify-center px-8 py-2 rounded-full bg-blue-950/85">
                        <div className="hidden sm:mx-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            "text-gray-200 hover:bg-blue-100 hover:text-black transition duration-200",
                                            "rounded-full px-3 py-2 text-md font-medium",
                                            active === item.name.toLowerCase()
                                                ? "bg-white text-black"
                                                : ""
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={cn(
                                "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "block rounded-md px-3 py-2 text-base font-medium"
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
