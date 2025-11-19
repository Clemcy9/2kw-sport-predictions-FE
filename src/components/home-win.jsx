import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { data, Link } from "react-router-dom";
import { FaFutbol, FaTelegramPlane } from "react-icons/fa";
import FreeTips from "./shared/FreetipsCard";
import { useState } from "react";
import { useEffect } from "react";

export default function HomeWin () {
    const [prediction, setPrediction] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://twokw-backend.onrender.com/api/v1/admin/data/odds?bet=1")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch item");
                }
                return res.json();
            })
            .then((data) => {
                setPrediction(data);
                console.log("API DATA:", data);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [data]);


    return(
        <div>
            <Navbar />
            <section
                className="font-sans relative h-[344px] mt-[22px] md:mt-16 bg-cover bg-center flex-wrap flex items-center justify-center text-center text-white"
                style={{ backgroundImage: "url('/Blog-bg.jpg')" }}
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
                                'Home Win', 2000,
                            ]}
                            wrapper="h1"
                            speed={50}
                            repeat={0}
                            cursor={false}
                            className=" sm:text-[48px] text-3xl md:text-6xl font-bold mb-4 text-shadow-lg md:pb-6"
                        />
                        <p className="text-lg md:text-xl mb-6 text-shadow-lg">
                            Your winning journey starts here
                        </p>

                        <div className="flex justify-center items-center gap-4 md:gap-10 transition-all">
                            <a
                                href=""
                                target="blank"
                                rel="noopener noreferrer"
                                className="flex justify-center md:items-center gap-1 bg-[#1A365D] font-sans text-[#D6AE3E] px-1 py-3 md:py-4 shadow-lg rounded-[0.4rem] md:text-[1.2em] md:px-0 md:w-65 hover:scale-95 hover:shadow-lg transition-all">
                                Join Telegram <FaTelegramPlane />
                            </a>
                            <Link
                                to="/live-scores"
                                className="flex md:items-center justify-center gap-1 md:w-65 text-[#1A365D] font-sans bg-[#D6AE3E] px-5 py-3 md:py-3  shadow-lg rounded-[0.4rem] md:text-[1.5rem] md:px-0 hover:scale-95 hover:shadow-lg transition-all">
                                Live Scores <FaFutbol className="animate-bounce" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
            <FreeTips />

            <div>
                {prediction.map((data) => (
                    <motion.div
                        className="lg:flex min-w-full w-full text-white space-y-0 lg:space-y-0 flex flex-col justify-center gap-2 items-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <div key={data.id} className=" hover:shadow-lg transition-all mt-1 border border-[#D6AE3E] flex justify-between items-center w-full flex-col lg:flex-row lg:p-0 rounded-[0.6rem] p-2">
                            <div className="text-[#1A365D] flex justify-between items-center flex-col lg:flex-row w-full space-y-2">
                                <div className="flex  lg:px-2 lg:mx-3">
                                    <span className="font-sans font-normal text-sm text-[#1A365D]">13:28</span>
                                </div>
                                <div className="flex justify-between lg:justify-center lg:flex-col items-start min-w-[130px] space-x-10 px-1 lg:gap-0 lg:space-x-0  space-y-2 lg:p-0 w-full">
                                    <div className="flex justify-center items-center space-y-1">
                                        <img
                                            src={data.homeLogo}
                                            // alt={item.homeTeam}
                                            className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                        />
                                        <span className="font-sans text-sm font-normal">{data.homeTeam}</span>
                                    </div>



                                    <div className="flex justify-center items-center">
                                        <img
                                            src={data.awayLogo}
                                            // alt={item.awayTeam}
                                            className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                        />
                                        <p className="text-sm font-sans font-normal">{data.awayTeam}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Odds Section */}

                            <div className="flex justify-between lg:justify-end lg:items-start items-start min-w-[130px]  space-x-10 px-1 lg:gap-4 lg:space-x-0 lg:p-4 w-full">
                                <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                    <p className="px-3 font-bold font-sans text-[#D6AE3E]">Odds</p>
                                    <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{data.odd.Odds}</p>
                                </div>
                                <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                    <p className="px-3 font-bold font-sans text-[#D6AE3E]">Tips</p>
                                    <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{data.odd.Tips}</p>
                                </div>
                                <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                    <p className="px-3 font-bold font-sans text-[#D6AE3E]">Prop%</p>
                                    <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{data.odd.Prop}</p>
                                </div>
                            </div>
                        </div>

                        {/* second row */}

                        <div className="hover:shadow-lg transition-all border border-[#D6AE3E] flex justify-between items-center w-full flex-col lg:flex-row lg:p-0 rounded-[0.6rem] p-2">
                            <div className="text-[#1A365D] flex justify-between items-center flex-col lg:flex-row w-full space-y-2">
                                <div className="flex  lg:px-2 lg:mx-3">
                                    <span className="font-sans font-normal text-sm text-[#1A365D]">13:28</span>
                                </div>
                                <div className="flex justify-between lg:justify-center lg:flex-col items-start min-w-[130px] space-x-10 px-1 lg:gap-0 lg:space-x-0  space-y-2 lg:p-0 w-full">
                                    <div className="flex justify-center items-center space-y-1">
                                        <img
                                            src={data.homeLogo}
                                            // alt={item.homeTeam}
                                            className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                        />
                                        <span className="font-sans text-sm font-normal">{data.homeTeam}</span>
                                    </div>



                                    <div className="flex justify-center items-center">
                                        <img
                                            src={data.awayLogo}
                                            // alt={item.awayTeam}
                                            className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                        />
                                        <p className="text-sm font-sans font-normal">{data.awayTeam}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Odds Section */}

                            <div className="flex justify-between lg:justify-end lg:items-start items-start min-w-[130px]  space-x-10 px-1 lg:gap-4 lg:space-x-0 lg:p-4 w-full">
                                <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                    <p className="px-3 font-bold font-sans text-[#D6AE3E]">Odds</p>
                                    <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{data.odd.Odds}</p>
                                </div>
                                <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                    <p className="px-3 font-bold font-sans text-[#D6AE3E]">Tips</p>
                                    <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{data.odd.Tips}</p>
                                </div>
                                <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                    <p className="px-3 font-bold font-sans text-[#D6AE3E]">Prop%</p>
                                    <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{data.odd.Prop}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <Footer />
        </div>
    )
}