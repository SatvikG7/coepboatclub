/* eslint-disable @next/next/no-img-element */
export default function Rowing() {
    return (
        <div className=" bg-gradient-to-br from-emerald-100 to-emerald-300">
            <div className="relative overflow-hidden shadow-lg group">
                <img
                    src="/assets/sports/rowing/rowing_1.jpg"
                    alt="rowing"
                    className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 text-black bg-slate-100 font-semibold text-5xl p-2 bg-opacity-50 drop-shadow-xl">
                    <div className="flex flex-row justify-between">
                        <h1>Rowing</h1>
                        <a href="/gallery#rowing">
                            <button className="px-8 py-2 rounded-md bg-teal-500 text-xl text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                                Gallery
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="p-6 text-lg max-w-3xl text-justify mx-auto">
                <p>
                    On a sunny day on a river, it can feel relaxing, on a windy
                    day on the sea it can be exhilarating but also a bit scary.
                    Balancing an oar taller than you are against each other to
                    keep a relatively narrow hard plastic shell on even keel
                    while at the same time trying to turn it slowly in your hand
                    while controlling your body&apos;s weight so as to slowly
                    manoeuvre up to the catch, followed by ferociously wrenching
                    with your whole body as the oar locks into place while
                    simultaneously being completely synchronized with your crew
                    bodily and mentally. These sorts of skills are not easily
                    learned and take years of practice to perfect. Rowing at a
                    top level is a very physically demanding sport. In the Club,
                    the participation in rowing is main done from Regatta.
                    Regatta involves an event called Shell Games. Organizers
                    teach participants for regatta.
                </p>
                <br />
                <ol className="list-inside">
                    The club has:
                    <li>2 Tub scull</li>
                    <li>1 Coxswain Pair(wooden)</li>
                    <li>1 Coxswain (wooden)</li>
                    <li>Diamond Scull</li>
                    <li>Jr. Whiff</li>
                    <li>6 Double scull</li>
                    <li>8 Single scull</li>
                    <li>5 Pair</li>
                    <li>2 Four</li>
                </ol>
                <br />
                <p>
                    The participant gets promoted for each boat. After Regatta
                    the participants can practice on their own taking advise
                    from organizers. Players have great platform for exposure in
                    Rowing at COEP Tech Boat Club. Players from COEP Tech Boat
                    Club appears in MRA State Challenger Sprint, Mini Olympics
                    Rowing, Amateur Rowing Association of East (ARAE), AIU
                    Rowing Zonals Selection and based on their performance they
                    proceed their journey. The benefits apart from the general
                    benefits of doing exercise are that it uses more muscle
                    groups than almost any sport except swimming and replies
                    both on strength and technical ability.
                </p>
                <br />
                <p>Rowing Secretary: Atharva Kale</p>
            </div>
        </div>
    );
}
