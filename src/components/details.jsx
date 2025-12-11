import { motion } from "framer-motion";
import Navbar from "./shared/Navbar";
import {TypeAnimation} from "react-type-animation"
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaFutbol, FaTelegramPlane } from "react-icons/fa";
import detailsBg from "../assets/Hero-images/details-bg.jpg"

export default function PredictionDetails() {
    const{state} = useLocation();

    return (
       <main>
            <>
                <Navbar />
                <section
                    className="font-sans relative h-[344px] mt-[22px] md:mt-16 bg-cover bg-center flex-wrap flex items-center justify-center text-center text-white"
                    style={{ backgroundImage: `url(${detailsBg})` }}
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
                                    `${state.homeTeam} ${"VS"} ${state.awayTeam}`, 2000,
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
                                    to="/live-score"
                                    className="flex md:items-center justify-center gap-1 md:w-65 text-[#1A365D] font-sans bg-[#D6AE3E] px-5 py-3 md:py-3  shadow-lg rounded-[0.4rem] md:text-[1.5rem] md:px-0 hover:scale-95 hover:shadow-lg transition-all">
                                    Live Scores <FaFutbol className="animate-bounce" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </section>
               
                
                    <section >
                      

                     <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="p-4"
                    >

                        <div
                            className=" shadow-sm space-y-6 bg-[#F9FBFF] transition-all flex justify-between items-center w-full flex-col lg:flex-row lg:p-0 p-2"
                        >
                            <div className="flex  lg:px-2 lg:mx-3">
                                <span className="font-sans font-normal text-sm text-[#1A365D]">
                                    {state.timing} {state.timing_date}
                                </span>

                            </div>
                            <div className="flex justify-between lg:justify-end lg:items-start  items-start min-w-[130px]  space-x-10 px-2 lg:gap-4 lg:space-x-0 lg:p-4 w-full border rounded-lg bg-white shadow-lg py-4 border-[#1A365D]">
                                
                                <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3 ">
                                    <p className="px-3 font-bold font-sans text-[#1A365D]">Odds</p>
                                    <p className="font-normal  rounded-sm border border-[#1A365D]  text-[#1A365D] px-1 text-[15px] py-1 min-w-[50px] transition-colors duration-300 w-16 text-center ">
                                        {state.odd.Odds}
                                    </p>
                                </div>
                                <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                    <p className="px-3 font-bold font-sans text-[#1A365D]">Tips</p>
                                    <p className="font-normal  rounded-sm border  text-[#1A365D]   border-[#1A365D] px-1 text-[15px] py-1 min-w-[50px] transition-colors duration-300 w-16 text-center">
                                        {state.odd.Tips}
                                    </p>
                                </div>
                                <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                    <p className="px-3 font-bold font-sans text-[#1A365D]">Prop%</p>
                                    <p className="font-normal  rounded-sm border  text-[#1A365D]   border-[#1A365D] px-1 text-[15px] py-1 min-w-[50px] transition-colors duration-300 w-16 text-center">
                                        {state.odd.Prop}
                                    </p>
                                </div>
                            </div>

                            <div className="text-[#1A365D] flex justify-between items-center flex-col lg:flex-row w-full py-8 space-y-2">
                               
                                <section className="flex justify-center lg:justify-center lg:flex-col items-center min-w-[130px] space-x-10 px-1 lg:gap-0 lg:space-x-0  space-y-2 lg:p-0 w-full">
                                    <div className="flex flex-col  justify-center items-center space-y-1">
                                        <img
                                            src={state.homeLogo}
                                            alt={state.homeTeam}
                                            className="w-12 h-12 m-2 rounded-full shadow-inner"
                                        />
                                        <span className="font-sans text-xs font-normal">
                                            {state.homeTeam}
                                        </span>
                                    </div>

                                    <div className="flex justify-center items-center flex-col">
                                        <span className="font-sans font-normal text-sm bg-[#1A365D] text-white p-1.5 rounded-xl">
                                            {state.timing}
                                        </span>
                                        <span className="font-sans font-normal text-sm text-[#1A365D]">
                                            {state.timing_date}
                                        </span>
                                        <p className="text-2xl">VS</p>
                                    </div>

                                    <div className="flex flex-col  justify-center items-center space-y-1">
                                        <img
                                            src={state.awayLogo}
                                            alt={state.awayTeam}
                                            className="w-12 h-12 m-2 rounded-full shadow-inner"
                                        />
                                        <span className="font-sans text-xs font-normal">
                                            {state.awayTeam}
                                        </span>
                                    </div>
                                </section>
                            </div>

                            {/* Odds Section */}

                            <section className="flex justify-center w-full items-center flex-col">
                                <h3 className="text-[#1A365D] py-4">Match Odds</h3>
                                <div className="flex justify-between lg:justify-end lg:items-start items-start min-w-[130px]  space-x-10 px-1 lg:gap-4 lg:space-x-0 lg:p-4 w-full">
                                    <div className="flex justify-center items-center border-[#1a365d1f] bg-white border w-full p-2 shadow-xs rounded-sm flex-col space-y-1 lg:space-y-3 ">
                                        <p className="px-3 font-normal font-sans text-[#1A365D]">Home</p>
                                        <p className="font-normal border-t border-[#1A365D]  text-[#1A365D] px-1 text-[15px] py-1 min-w-auto w-full text-center ">
                                            {state.odd.Odds}
                                        </p>
                                    </div>
                                    <div className="flex w-full justify-center items-center border-[#1a365d1f] bg-white border p-2 shadow-xs rounded-sm flex-col space-y-1 lg:space-y-3">
                                        <p className="px-3 font-normal font-sans text-[#1A365D]">Draw</p>
                                        <p className="font-normal border-t  text-[#1A365D]   border-[#1A365D] px-1 text-[15px] py-1 min-w-auto w-full text-center">
                                            {state.odd.Tips}
                                        </p>
                                    </div>
                                    <div className="flex w-full justify-center items-center border-[#1a365d1f] bg-white border p-2 shadow-xs rounded-sm flex-col space-y-1 lg:space-y-3">
                                        <p className="px-3 font-normal font-sans text-[#1A365D]">Away</p>
                                        <p className="font-normal border-t  text-[#1A365D]   border-[#1A365D] px-1 text-[15px] py-1 min-w-auto w-full text-center">
                                            {state.odd.Prop}
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                </motion.div>
                    </section>
            </>
       </main>
    );
}
