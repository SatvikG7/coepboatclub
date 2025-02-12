/* eslint-disable @next/next/no-img-element */
export default function Kayaking() {
    return (
        <div className=" bg-gradient-to-br from-orange-100 to-orange-300">
            <div className="relative overflow-hidden shadow-lg group">
                <img
                    src="/assets/sports/kayaking/kayaking_1.jpg"
                    alt="rowing"
                    className="object-cover w-full h-64"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 text-5xl font-semibold text-black bg-opacity-50 bg-slate-100 drop-shadow-xl">
                    <div className="flex flex-row justify-between">
                        <h1>Kayaking</h1>
                        <a href="/gallery#kayaking">
                            <button className="px-8 py-2 text-xl font-bold text-white transition duration-200 bg-teal-500 border-2 border-transparent rounded-md hover:bg-white hover:text-black hover:border-teal-500">
                                Gallery
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-3xl p-6 mx-auto text-lg text-justify">
                <p>
                    COEP Kayaking is one of the sports activities on COEP Tech
                    Boat Club that spans all year. In flat water kayaking,
                    participants paddle a small, narrow boat called a kayak with
                    a double-bladed paddle.
                </p>
                <br />
                <ol className="list-inside">
                    The club has:
                    <li>
                        K1 kayak – paddled by one, with extreme stability and
                        strength
                    </li>
                    <li>
                        K2 kayak – paddled by two, with one as the powerhouse
                        and the other as the stability center
                    </li>
                    <li>K4 kayak – the fastest, powered by four paddlers</li>
                    <li>17 old kayaks</li>
                    <li>10 racer kayaks</li>
                </ol>

                <br />
                <p>
                    Kayak Ballet is one of the performances in the COEP Regatta.
                    Kayak Ballet is a breathtaking performance of sleek,
                    streamlined kayaks gliding over the water. Coordination,
                    Speed, Stamina and Stability are the pillars of Kayak
                    Ballet. Old Kayaks are used for this show. Also, BoatClub
                    has racer kayaks which are lightweight and faster than old
                    kayaks. After learning racer kayaks, students participate in
                    state and national-level competitions. COEP Tech Boat Club
                    provides Olympic-class equipment; every COEPian can use this
                    equipment. So whatever may be the motive, let it be learning
                    a new sport, making new friends, participating in
                    compilations or getting fit, kayaking fulfils it all!
                </p>
                <br />
                <p>Kayaking Secretary: Parth Yewale</p>
            </div>
        </div>
    );
}
