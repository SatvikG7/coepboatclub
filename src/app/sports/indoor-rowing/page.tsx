/* eslint-disable @next/next/no-img-element */
export default function IndoorRowing() {
    return (
        <div className=" bg-gradient-to-br from-blue-100 to-blue-300">
            <div className="relative overflow-hidden shadow-lg group">
                <img
                    src="/assets/sports/indoor_rowing/indoor_rowing_1.jpg"
                    alt="rowing"
                    className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 text-black bg-slate-100 font-semibold text-5xl p-2 bg-opacity-50 drop-shadow-xl">
                    <div className="flex flex-row justify-between">
                        <h1>Indoor Rowing</h1>
                        <a href="/gallery#indoor-rowing">
                            <button className="px-8 py-2 rounded-md bg-teal-500 text-xl text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                                Gallery
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="p-6 text-lg max-w-3xl text-justify mx-auto">
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
