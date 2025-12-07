import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { data, Link } from "react-router-dom";
import { FaFutbol, FaSpinner, FaTelegramPlane, FaToolbox } from "react-icons/fa";
import { useEffect, useState } from "react";


export default function LIve_Scores () {
    const [predictions, setPredictions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);

    useEffect(() => {
        try {
            fetch("https://twokw-backend.onrender.com/api/v1/football/livescores")
                .then((res) => res.json())
                .then((data) => {
                    setLoading(false)
                    setPredictions(data.data.response );
                    console.log("Api data for live-scores:", data);
                    console.log("API LIVE_SCORES from predictions::", predictions);
                })
        } catch(err) {
            console.error("error from live scores:",err);
            setError("Unable To Load Live-Scores, Connect To A Network");
            setLoading(false);
        }
    }, [data]);

    // if (error) return <div className="text-center h-52 overflow-y-hidden text-[#1A365D] py-2 flex justify-center items-center"><span><FaToolbox className="animate-spin" /> </span>{error}</div>;
    // if (loading) return <div className="text-center h-52 overflow-y-hidden text-[#1A365D] py-2 flex justify-center items-center"><span><FaSpinner className="animate-spin" /> </span> Loading Live-Scores...</div>;


    return (
        <main >
            <Navbar />
            <section
                className="font-sans relative h-[344px] mt-[22px] lg:mt-16 bg-cover bg-center flex-wrap flex items-center justify-center text-center text-white"
                style={{ backgroundImage: "url('/live-scores.jpg')" }}
            >
                <div className="absolute inset-0 bg-[#1A365D]/40"></div> {/* overlay */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="leading-[1.1] ">

                    <div className="relative z-10 max-w-6xl px-3">

                        <TypeAnimation
                            sequence={[
                                'LIVE-SCORES', 2000,
                            ]}
                            wrapper="h1"
                            speed={50}
                            repeat={0}
                            cursor={false}
                            className=" sm:text-[48px] text-3xl lg:text-6xl font-bold mb-4 text-shadow-lg lg:pb-6"
                        />
                        <p className="text-lg lg:text-xl mb-6 text-shadow-lg">
                            Your winning journey starts here
                        </p>

                        <div className="flex justify-center items-center gap-4 lg:gap-10 transition-all">
                            <a
                                href=""
                                target="blank"
                                rel="noopener noreferrer"
                                className="flex justify-center lg:items-center gap-1 bg-[#1A365D] font-sans text-[#D6AE3E] px-1 py-3 lg:py-4 shadow-lg rounded-[0.4rem] lg:text-[1.2em] lg:px-0 lg:w-65 hover:scale-95 hover:shadow-lg transition-all">
                                Join Telegram <FaTelegramPlane />
                            </a>
                            <Link
                                to="/live-scores"
                                className="flex lg:items-center justify-center gap-1 lg:w-65 text-[#1A365D] font-sans bg-[#D6AE3E] px-5 py-3 lg:py-3  shadow-lg rounded-[0.4rem] lg:text-[1.5rem] lg:px-0 hover:scale-95 hover:shadow-lg transition-all">
                                Live Scores <FaFutbol className="animate-bounce" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
             </section> 
            <section className=" lg:p-15 py-15">
                {loading && (
                    <div className="text-center h-52 overflow-y-hidden text-[#1A365D] py-2 flex justify-center items-center"><span><FaSpinner className="animate-spin" /> </span> Loading Live-Scores...</div>
                )}
                   
                {!loading && predictions?.map((items, index) => (
                        <div key={index}>
                            <table className="w-full">
                           <thead>
                               <tr className="w-full flex justify-between items-center text-white bg-[#1A365D] p-1.5 lg:p-3">
                                    <th className="flex justify-center items-center"><img className="w-6 h-6" src={items.league.logo} alt={items.league.name} /> {items.league.name}</th>
                                    <th></th>
                                    <th>{new Date(items.fixture.date).toLocaleDateString()}</th>
                               </tr>
                           </thead>
                                <tr className="flex justify-between px-1.5 items-center text-xs lg:text-xl lg:px-3 hover:bg-[#D6AE3E]/60">
                                    <td className="lg:py-6 py-4 flex col-span-1">
                                        <p>{new Date(items.fixture.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
                                    </td>
                                   <td className="lg:py-6 py-4 flex ">
                                        <p className="flex justify-center items-center"><img className="hidden lg:block lg:w-8 lg:h-8 w-5 h-5" src={items.teams.away.logo} alt={items.teams.away.name} /> {items.teams.away.name} </p>
                                        <span className="lg:px-6 px-3 font-semibold flex justify-center items-center">{items.goals.away} : {items.goals.home}</span>
                                        <p className="flex justify-center items-center"><img className="hidden lg:block lg:w-8 lg:h-8 w-5 h-5" src={items.teams.home.logo} alt={items.teams.home.name} /> {items.teams.home.name}</p>
                                    </td>
                                    <td className="lg:py-6 py-4 flex  ">
                                        <p>{items.fixture.status.long}</p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                ))}
            </section>
            <Footer />  
        </main>
    );
}