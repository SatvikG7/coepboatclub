/* eslint-disable @next/next/no-img-element */
export default function IndoorRowing() {
    return (
        <div className=" bg-gradient-to-br from-blue-100 to-blue-300">
            <div className="relative overflow-hidden shadow-lg group">
                <img
                    src="/assets/sports/indoor_rowing/indoor_rowing_1.jpg"
                    alt="rowing"
                    className="object-cover w-full h-80"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 text-5xl font-semibold text-black bg-opacity-50 bg-slate-100 drop-shadow-xl">
                    <div className="flex flex-row justify-between">
                        <h1>Indoor Rowing</h1>
                        <a href="/gallery#indoor-rowing">
                            <button className="px-8 py-2 text-xl font-bold text-white transition duration-200 bg-teal-500 border-2 border-transparent rounded-md hover:bg-white hover:text-black hover:border-teal-500">
                                Gallery
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-3xl p-6 mx-auto text-lg text-justify">
                <p>
                    Indoor rowing at COEP Technological University is not just a
                    sport; it&apos;s a passion that propels us to new heights.
                    From spirited games on our campus to representing the
                    institution at the national level, our indoor rowing team
                    embodies excellence and teamwork. COEP&apos;s indoor rowing
                    enthusiasts participate in thrilling competitions, both at
                    MIT and the national stage. The sound of ergometers and the
                    rhythm of synchronized strokes echo in our training
                    sessions, creating an atmosphere of dedication and
                    determination. As we navigate the challenges of MIT and
                    national competitions, our indoor rowing team showcases the
                    true spirit of COEP – resilience, skill, and a commitment to
                    pushing boundaries. Join us in celebrating the thrill of
                    indoor rowing, where every stroke brings us closer to
                    victory and strengthens the bonds that define our COEP
                    family
                </p>
            </div>
        </div>
    );
}
