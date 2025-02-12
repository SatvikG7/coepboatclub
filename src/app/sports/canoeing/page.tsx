/* eslint-disable @next/next/no-img-element */
export default function Canoeing() {
    return (
        <div className=" bg-gradient-to-br from-indigo-100 to-indigo-300">
            <div className="relative overflow-hidden shadow-lg group">
                <img
                    src="/assets/sports/canoeing/canoeing_1.jpg"
                    alt="rowing"
                    className="object-cover w-full h-80"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 text-5xl font-semibold text-black bg-opacity-50 bg-slate-100 drop-shadow-xl">
                    <div className="flex flex-row justify-between">
                        <h1>Canoeing</h1>
                        <a href="/gallery#canoeing">
                            <button className="px-8 py-2 text-xl font-bold text-white transition duration-200 bg-teal-500 border-2 border-transparent rounded-md hover:bg-white hover:text-black hover:border-teal-500">
                                Gallery
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-3xl p-6 mx-auto text-lg text-justify">
                <p>
                    Canoeing is an activity which involves paddling a canoe with
                    a single-bladed paddle. In sprint canoeing, the paddler is
                    in a standing position (lunge position). Hence, this sport
                    tests the stability as well as power of the athlete.
                </p>
                <br />
                <ol className="list-inside">
                    The club has:
                    <li>C1 canoe – paddled by one</li>
                    <li>C2 canoe – paddled by two</li>
                    <li>C4 canoe – paddled by four</li>
                </ol>
                <br />
                <p>
                    In various competitions, canoeing races are also of 200m,
                    500m or 1000m.
                </p>
            </div>
        </div>
    );
}
