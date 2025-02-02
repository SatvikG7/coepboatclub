/* eslint-disable @next/next/no-img-element */
export default function Kayaking() {
    return (
        <div className=" bg-gradient-to-br from-orange-100 to-orange-300">
            <div className="relative overflow-hidden shadow-lg group">
                <img
                    src="/assets/sports/kayaking/kayaking_1.jpg"
                    alt="rowing"
                    className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 text-black bg-slate-100 font-semibold text-5xl p-2 bg-opacity-50 drop-shadow-xl">
                    <div className="flex flex-row justify-between">
                        <h1>Kayaking</h1>
                        <a href="/gallery#kayaking">
                            <button className="px-8 py-2 rounded-md bg-teal-500 text-xl text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                                Gallery
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="p-6 text-lg max-w-3xl text-justify mx-auto">
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
