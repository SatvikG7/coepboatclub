/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: { target: { id: any; value: any } }) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const scriptURL =
            "https://script.google.com/macros/s/AKfycbzkMG-ZvNf5ujJFxPmIzQ3sWdHPniYf71HEdWY-Bq3OspdT9VmQbYRHpvs1AohyoFLNKg/exec";

        try {
            const response = await fetch(scriptURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
                mode: "no-cors",
            });
            console.log("Success:", response);
            alert("Message sent successfully! ✅");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred! ❌");
        }
    };

    return (
        <section>
            <div className="max-w-screen-md px-4 py-8 mx-auto">
                <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900">
                    Contact Us
                </h2>
                <p className="mb-8 font-light text-center text-gray-500 sm:text-xl">
                    Got a technical issue? Want to send feedback? Need details
                    about us? Let us know.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="name@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="subject"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Let us know how we can help you"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Your message
                        </label>
                        <textarea
                            id="message"
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Leave a comment..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
}
