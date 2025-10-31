import {useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function PremierLeagueCard () {
    const [open, setOpen] = useState(true);
    const [show, setShow] = useState(true);
    const [drop, setDrop] = useState(true);
    const [flow, setFlow] = useState(true);
    const [see, setSee] = useState(true);

    const navigation = useNavigate();

    const click = () => {
        navigation("/details")
    }

    const predictions ={
        homeLogo: "/",
        homeTeam: "Everton",
        awayLogo: "/",
        awayTeam: "Crystal Palace",
        leagueLogo: "/NPFL.jpg",
        league: "Premier League",
        league1: "Champions League",
        league2: "La Liga League",
        league3: "Serie A League",
        league4: "Spanish League",
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
        odd: { Odds: "3.5", Tips: "over 15", Prop: "3.65%" }
    }
       
    return (
        <div className="w-full border-none lg:p-4 my-2 flex justify-center items-center flex-col text-white space-y-4 lg:space-y-2">
            
                <div className="bg-[#1A365D] w-full flex justify-between items-center p-2 rounded-[0.6rem] hover:shadow-lg transition-all">
                    <h2 className="font-sans font-semibold">
                        {predictions.league}
                    </h2>
                  <div onClick={()=> setOpen(!open)}>
                    {open ? (
                        <FaPlus /> 
                    ) : (
                        <FaMinus />
                    )}
                  </div>
               </div>
               {open && (
            <motion.div
                className="lg:flex min-w-full w-full text-white space-y-0 lg:space-y-0 flex flex-col justify-center gap-2 items-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
               <div onClick={click} className=" hover:shadow-lg transition-all mt-1 border border-[#D6AE3E] flex justify-between items-center w-full flex-col lg:flex-row lg:p-0 rounded-[0.6rem] p-2">
                  <div className="text-[#1A365D] flex justify-between items-center flex-col lg:flex-row w-full space-y-2">
                            <div className="flex  lg:px-2 lg:mx-3">
                                <span className="font-sans font-normal text-sm text-[#1A365D]">13:28</span>
                            </div>
                       <div className="flex justify-between lg:justify-center lg:flex-col items-start min-w-[130px] space-x-10 px-1 lg:gap-0 lg:space-x-0  space-y-2 lg:p-0 w-full">
                            <div className="flex justify-center items-center space-y-1">
                                <img
                                    src={predictions.homeLogo}
                                    // alt={predictions.homeTeam}
                                    className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                />
                                <span className="font-sans text-sm font-normal">{predictions.homeTeam}</span>
                            </div>

                            

                            <div className="flex justify-center items-center">
                                <img
                                    src={predictions.awayLogo}
                                    // alt={predictions.awayTeam}
                                    className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                />
                                <p className="text-sm font-sans font-normal">{predictions.awayTeam}</p>
                            </div>
                       </div>
                   </div>

                 {/* Odds Section */}

                    <div className="flex justify-between lg:justify-end lg:items-start items-start min-w-[130px]  space-x-10 px-1 lg:gap-4 lg:space-x-0 lg:p-4 w-full">
                        <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Odds</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Odds}</p>
                        </div>
                        <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Tips</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Tips}</p>
                        </div>
                        <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Prop%</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Prop}</p>
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
                                        src={predictions.homeLogo}
                                        // alt={predictions.homeTeam}
                                        className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                    />
                                    <span className="font-sans text-sm font-normal">{predictions.homeTeam}</span>
                                </div>



                                <div className="flex justify-center items-center">
                                    <img
                                        src={predictions.awayLogo}
                                        // alt={predictions.awayTeam}
                                        className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                    />
                                    <p className="text-sm font-sans font-normal">{predictions.awayTeam}</p>
                                </div>
                            </div>
                        </div>

                        {/* Odds Section */}

                        <div className="flex justify-between lg:justify-end lg:items-start items-start min-w-[130px]  space-x-10 px-1 lg:gap-4 lg:space-x-0 lg:p-4 w-full">
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Odds</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Odds}</p>
                            </div>
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Tips</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Tips}</p>
                            </div>
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Prop%</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Prop}</p>
                            </div>
                        </div>
                    </div>
            </motion.div>
            )}
                <div className="bg-[#1A365D] w-full flex justify-between items-center p-2 rounded-[0.6rem] hover:shadow-lg transition-all">
                    <h2 className="font-sans font-semibold">
                        {predictions.league1}
                    </h2>
                  <div onClick={()=> setShow(!show)}>
                    {show ? (
                        <FaPlus /> 
                    ) : (
                        <FaMinus />
                    )}
                  </div>
               </div>
               {show && (
            <motion.div
                className="lg:flex min-w-full w-full text-white space-y-0 lg:space-y-0 flex flex-col justify-center gap-2 items-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                    <div className="hover:shadow-lg transition-all mt-1 border border-[#D6AE3E] flex justify-between items-center w-full flex-col lg:flex-row lg:p-0 rounded-[0.6rem] p-2">
                        <div className="text-[#1A365D] flex justify-between items-center flex-col lg:flex-row w-full space-y-2">
                            <div className="flex  lg:px-2 lg:mx-3">
                                <span className="font-sans font-normal text-sm text-[#1A365D]">13:28</span>
                            </div>
                            <div className="flex justify-between lg:justify-center lg:flex-col items-start min-w-[130px] space-x-10 px-1 lg:gap-0 lg:space-x-0  space-y-2 lg:p-0 w-full">
                                <div className="flex justify-center items-center space-y-1">
                                    <img
                                        src={predictions.homeLogo}
                                        // alt={predictions.homeTeam}
                                        className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                    />
                                    <span className="font-sans text-sm font-normal">{predictions.homeTeam}</span>
                                </div>



                                <div className="flex justify-center items-center">
                                    <img
                                        src={predictions.awayLogo}
                                        // alt={predictions.awayTeam}
                                        className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                    />
                                    <p className="text-sm font-sans font-normal">{predictions.awayTeam}</p>
                                </div>
                            </div>
                        </div>

                        {/* Odds Section */}

                        <div className="flex justify-between lg:justify-end lg:items-start items-start min-w-[130px]  space-x-10 px-1 lg:gap-4 lg:space-x-0 lg:p-4 w-full">
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Odds</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Odds}</p>
                            </div>
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Tips</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Tips}</p>
                            </div>
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Prop%</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Prop}</p>
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
                                        src={predictions.homeLogo}
                                        // alt={predictions.homeTeam}
                                        className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                    />
                                    <span className="font-sans text-sm font-normal">{predictions.homeTeam}</span>
                                </div>



                                <div className="flex justify-center items-center">
                                    <img
                                        src={predictions.awayLogo}
                                        // alt={predictions.awayTeam}
                                        className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                    />
                                    <p className="text-sm font-sans font-normal">{predictions.awayTeam}</p>
                                </div>
                            </div>
                        </div>

                        {/* Odds Section */}

                        <div className="flex justify-between lg:justify-end lg:items-start items-start min-w-[130px]  space-x-10 px-1 lg:gap-4 lg:space-x-0 lg:p-4 w-full">
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Odds</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Odds}</p>
                            </div>
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Tips</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Tips}</p>
                            </div>
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Prop%</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Prop}</p>
                            </div>
                        </div>
                    </div>
            </motion.div>
            )}
                <div className="bg-[#1A365D] w-full flex justify-between items-center p-2 rounded-[0.6rem] hover:shadow-lg transition-all">
                    <h2 className="font-sans font-semibold">
                        {predictions.league2}
                    </h2>
                  <div onClick={()=> setDrop(!drop)}>
                    {drop ? (
                        <FaPlus /> 
                    ) : (
                        <FaMinus />
                    )}
                  </div>
               </div>
               {drop && (
            <motion.div
                className="lg:flex min-w-full w-full text-white space-y-0 lg:space-y-0 flex flex-col justify-center gap-2 items-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                    <div className="hover:shadow-lg transition-all mt-1 border border-[#D6AE3E] flex justify-between items-center w-full flex-col lg:flex-row lg:p-0 rounded-[0.6rem] p-2">
                        <div className="text-[#1A365D] flex justify-between items-center flex-col lg:flex-row w-full space-y-2">
                            <div className="flex  lg:px-2 lg:mx-3">
                                <span className="font-sans font-normal text-sm text-[#1A365D]">13:28</span>
                            </div>
                            <div className="flex justify-between lg:justify-center lg:flex-col items-start min-w-[130px] space-x-10 px-1 lg:gap-0 lg:space-x-0  space-y-2 lg:p-0 w-full">
                                <div className="flex justify-center items-center space-y-1">
                                    <img
                                        src={predictions.homeLogo}
                                        // alt={predictions.homeTeam}
                                        className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                    />
                                    <span className="font-sans text-sm font-normal">{predictions.homeTeam}</span>
                                </div>



                                <div className="flex justify-center items-center">
                                    <img
                                        src={predictions.awayLogo}
                                        // alt={predictions.awayTeam}
                                        className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                    />
                                    <p className="text-sm font-sans font-normal">{predictions.awayTeam}</p>
                                </div>
                            </div>
                        </div>

                        {/* Odds Section */}

                        <div className="flex justify-between lg:justify-end lg:items-start items-start min-w-[130px]  space-x-10 px-1 lg:gap-4 lg:space-x-0 lg:p-4 w-full">
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Odds</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Odds}</p>
                            </div>
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Tips</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Tips}</p>
                            </div>
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Prop%</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Prop}</p>
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
                                        src={predictions.homeLogo}
                                        // alt={predictions.homeTeam}
                                        className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                    />
                                    <span className="font-sans text-sm font-normal">{predictions.homeTeam}</span>
                                </div>



                                <div className="flex justify-center items-center">
                                    <img
                                        src={predictions.awayLogo}
                                        // alt={predictions.awayTeam}
                                        className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                    />
                                    <p className="text-sm font-sans font-normal">{predictions.awayTeam}</p>
                                </div>
                            </div>
                        </div>

                        {/* Odds Section */}

                        <div className="flex justify-between lg:justify-end lg:items-start items-start min-w-[130px]  space-x-10 px-1 lg:gap-4 lg:space-x-0 lg:p-4 w-full">
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Odds</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Odds}</p>
                            </div>
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Tips</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Tips}</p>
                            </div>
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Prop%</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Prop}</p>
                            </div>
                        </div>
                    </div>
            </motion.div>
            )}
                <div className="bg-[#1A365D] w-full flex justify-between items-center p-2 rounded-[0.6rem] hover:shadow-lg transition-all">
                    <h2 className="font-sans font-semibold">
                        {predictions.league3}
                    </h2>
                  <div onClick={()=> setFlow(!flow)}>
                    {flow ? (
                        <FaPlus /> 
                    ) : (
                        <FaMinus />
                    )}
                  </div>
               </div>
               {flow && (
            <motion.div
                className="lg:flex min-w-full w-full text-white space-y-0 lg:space-y-0 flex flex-col justify-center gap-2 items-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                    <div className="hover:shadow-lg transition-all mt-1 border border-[#D6AE3E] flex justify-between items-center w-full flex-col lg:flex-row lg:p-0 rounded-[0.6rem] p-2">
                        <div className="text-[#1A365D] flex justify-between items-center flex-col lg:flex-row w-full space-y-2">
                            <div className="flex  lg:px-2 lg:mx-3">
                                <span className="font-sans font-normal text-sm text-[#1A365D]">13:28</span>
                            </div>
                            <div className="flex justify-between lg:justify-center lg:flex-col items-start min-w-[130px] space-x-10 px-1 lg:gap-0 lg:space-x-0  space-y-2 lg:p-0 w-full">
                                <div className="flex justify-center items-center space-y-1">
                                    <img
                                        src={predictions.homeLogo}
                                        // alt={predictions.homeTeam}
                                        className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                    />
                                    <span className="font-sans text-sm font-normal">{predictions.homeTeam}</span>
                                </div>



                                <div className="flex justify-center items-center">
                                    <img
                                        src={predictions.awayLogo}
                                        // alt={predictions.awayTeam}
                                        className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                    />
                                    <p className="text-sm font-sans font-normal">{predictions.awayTeam}</p>
                                </div>
                            </div>
                        </div>

                        {/* Odds Section */}

                        <div className="flex justify-between lg:justify-end lg:items-start items-start min-w-[130px]  space-x-10 px-1 lg:gap-4 lg:space-x-0 lg:p-4 w-full">
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Odds</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Odds}</p>
                            </div>
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Tips</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Tips}</p>
                            </div>
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Prop%</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Prop}</p>
                            </div>
                        </div>
                    </div>

             {/* second row */}

                    <div className="hover:shadow-lg transition-all mt-1 border border-[#D6AE3E] flex justify-between items-center w-full flex-col lg:flex-row lg:p-0 rounded-[0.6rem] p-2">
                        <div className="text-[#1A365D] flex justify-between items-center flex-col lg:flex-row w-full space-y-2">
                            <div className="flex  lg:px-2 lg:mx-3">
                                <span className="font-sans font-normal text-sm text-[#1A365D]">13:28</span>
                            </div>
                            <div className="flex justify-between lg:justify-center lg:flex-col items-start min-w-[130px] space-x-10 px-1 lg:gap-0 lg:space-x-0  space-y-2 lg:p-0 w-full">
                                <div className="flex justify-center items-center space-y-1">
                                    <img
                                        src={predictions.homeLogo}
                                        // alt={predictions.homeTeam}
                                        className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                    />
                                    <span className="font-sans text-sm font-normal">{predictions.homeTeam}</span>
                                </div>



                                <div className="flex justify-center items-center">
                                    <img
                                        src={predictions.awayLogo}
                                        // alt={predictions.awayTeam}
                                        className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                    />
                                    <p className="text-sm font-sans font-normal">{predictions.awayTeam}</p>
                                </div>
                            </div>
                        </div>

                        {/* Odds Section */}

                        <div className="flex justify-between lg:justify-end lg:items-start items-start min-w-[130px]  space-x-10 px-1 lg:gap-4 lg:space-x-0 lg:p-4 w-full">
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Odds</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Odds}</p>
                            </div>
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Tips</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Tips}</p>
                            </div>
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Prop%</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Prop}</p>
                            </div>
                        </div>
                    </div>
            </motion.div>
            )}
                <div className="bg-[#1A365D] w-full flex justify-between items-center p-2 rounded-[0.6rem] hover:shadow-lg transition-all">
                    <h2 className="font-sans font-semibold">
                        {predictions.league4}
                    </h2>
                  <div onClick={()=> setSee(!see)}>
                    {see ? (
                        <FaPlus /> 
                    ) : (
                        <FaMinus />
                    )}
                  </div>
               </div>
               {see && (
            <motion.div
                className="lg:flex min-w-full w-full text-white space-y-0 lg:space-y-0 flex flex-col justify-center gap-2 items-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                    <div className="hover:shadow-lg transition-all mt-1 border border-[#D6AE3E] flex justify-between items-center w-full flex-col lg:flex-row lg:p-0 rounded-[0.6rem] p-2">
                        <div className="text-[#1A365D] flex justify-between items-center flex-col lg:flex-row w-full space-y-2">
                            <div className="flex  lg:px-2 lg:mx-3">
                                <span className="font-sans font-normal text-sm text-[#1A365D]">13:28</span>
                            </div>
                            <div className="flex justify-between lg:justify-center lg:flex-col items-start min-w-[130px] space-x-10 px-1 lg:gap-0 lg:space-x-0  space-y-2 lg:p-0 w-full">
                                <div className="flex justify-center items-center space-y-1">
                                    <img
                                        src={predictions.homeLogo}
                                        // alt={predictions.homeTeam}
                                        className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                    />
                                    <span className="font-sans text-sm font-normal">{predictions.homeTeam}</span>
                                </div>



                                <div className="flex justify-center items-center">
                                    <img
                                        src={predictions.awayLogo}
                                        // alt={predictions.awayTeam}
                                        className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                    />
                                    <p className="text-sm font-sans font-normal">{predictions.awayTeam}</p>
                                </div>
                            </div>
                        </div>

                        {/* Odds Section */}

                        <div className="flex justify-between lg:justify-end lg:items-start items-start min-w-[130px]  space-x-10 px-1 lg:gap-4 lg:space-x-0 lg:p-4 w-full">
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Odds</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Odds}</p>
                            </div>
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Tips</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Tips}</p>
                            </div>
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Prop%</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Prop}</p>
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
                                        src={predictions.homeLogo}
                                        // alt={predictions.homeTeam}
                                        className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                    />
                                    <span className="font-sans text-sm font-normal">{predictions.homeTeam}</span>
                                </div>



                                <div className="flex justify-center items-center">
                                    <img
                                        src={predictions.awayLogo}
                                        // alt={predictions.awayTeam}
                                        className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                                    />
                                    <p className="text-sm font-sans font-normal">{predictions.awayTeam}</p>
                                </div>
                            </div>
                        </div>

                        {/* Odds Section */}

                        <div className="flex justify-between lg:justify-end lg:items-start items-start min-w-[130px]  space-x-10 px-1 lg:gap-4 lg:space-x-0 lg:p-4 w-full">
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Odds</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Odds}</p>
                            </div>
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Tips</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Tips}</p>
                            </div>
                            <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Prop%</p>
                                <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">{predictions.odd.Prop}</p>
                            </div>
                        </div>
                    </div>
            </motion.div>
            )}
        </div>
    );
}


//  NOTE1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// DO NOT DELETE COMMENTED CODES.



    // const [predictions, setPredictions] = useState(null);
    // const [waiting , setWaiting ] = useState(true);
    // const [error, setError] = useState(null);

    // // fetching the payload and data from the backend API
    // const getPredictions = async ()=> {
    //     setWaiting(true);
    //     setError(null);

    //     try {
    //         const res = await fetch("https://www.api-football.com/");
    //         if (!res.ok) throw new Error("predictions is facing village people problem fetching");
    //         const data = await res.json();

    //         // saving the predictions and date to assist daily updates 
    //         setPredictions(data);
    //         localStorage.setItem("lastPrediction", JSON.stringify(data));
    //         localStorage.setItem("lastDate", new Date().toDateString()); 

    //     }catch (err) {
    //         console.error("backend didnt see this coming error", err);
    //         setError(err.message);

    //     }finally {
    //         setWaiting(false);
    //     }  
    // };

    // //get the predictions and the date from the localstorage and load or load new data from the API
    // useEffect( ()=> {
    //     const savedPredictions = localStorage.getItem("lastPrediction");
    //     const savedDate = localStorage.getItem("lastDate");
    //     const newDay = new Date().toDateString();

    //     if (savedPredictions && savedDate === newDay) {
    //         setPredictions(JSON.parse(savedPredictions));
    //         setWaiting(false);
    //     }else{
    //         getPredictions();
    //     }

    //     // set timer to calculate time until next 24 hours (nihgt only)
    //     const timeNow = new Date();
    //     const timeNextNiht = new Date();
    //     timeNextNiht.setHours(24, 0, 0, 0);
    //     const timeTillNight = timeNextNiht - timeNow;

    //     // set when the time is up to get new data from the API at 24hours (night only)
    //     const timeInNight = setTimeout(() => {
    //         getPredictions();
        

    //     // when the first night is refreshed, set it to continue refreshing every 24 hours
    //     setInterval(getPredictions, 24 * 60 * 60 * 1000);
    // }, timeTillNight);

    // return() => clearTimeout(timeInNight);
    // }, []);

    // note for developers :
    // the abouve 

    
    // if (waiting) {
    //     return (
    //         <div className="text-[#1a365d] animate-pulse mt-10">Loading Best Prediction...</div>
    //     );
    // }

    // if (error) {
    //     return (
    //         <div className="text-red-500 mt-10 lg:h-[561px] h-[217px] rounded-[0.6rem] lg:mb-14 bg-[#1a365d] max-w-[350px] lg:max-w-[544px] w-full p-12 flex items-center flex-col">
    //             <p>😒😒 {error}</p>
    //             <p className="text-sm text-white">Please check your  connection.</p>
    //             <p className="text-3xl font-semibold text-white text-center">Unable To Load Best Prediction Of The Day</p>
    //         </div>
    //     )
    // }

    // if (predictions) {
    //     return (
    //         <div className="text-[#1a365d] mt-10">No prediction available.</div>
    //     );
    // }

//     return (
//         <div className="flex flex-col items-center justify-center min-h-[217px] bg-[#1A365D] px-4">
//                 <motion.div
//                 className="max-w-lg w-full bg-[#1A365D] text-white rounded-xl shadow-xl p-6 space-y-6 mt-10"
//                     initial={{ opacity: 0, y: 40 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.7, ease: "easeOut" }}
//                 >
//                     <h2 className="text-center text-lg sm:text-xl font-semibold text-white">
//                         Best Prediction of the Day
//                     </h2>

//                     <div className="flex justify-between items-center">
//                         <div className="flex flex-col items-center space-y-2">
//                             <img
//                                 src={predictions.homeLogo}
//                                 alt={predictions.homeTeam}
//                                 className="w-10 h-10"
//                             />
//                             <span className="text-sm font-medium">{predictions.homeTeam}</span>
//                         </div>

//                         <div className="text-center">
//                             <span className="text-white text-xs">{predictions.league}</span>
//                             <p className="text-sm mt-1">{predictions.time}</p>
//                             <p className="text-xs text-white">{predictions.date}</p>
//                         </div>

//                         <div className="flex flex-col items-center space-y-2">
//                             <img
//                                 src={predictions.awayLogo}
//                                 alt={predictions.awayTeam}
//                                 className="w-10 h-10"
//                             />
//                             <span className="text-sm font-medium text-white">{predictions.awayTeam}</span>
//                         </div>
//                     </div>

//                     {/* Odds Section */}
                    
//                        <div className="border-1 border-t-white/20">
//                          <h3 className="text-white font-semibold mb-2 text-sm">Match Odds</h3>
//                           <div className="flex justify-around text-sm">
//                             <div>
//                                 <p className="text-white">Home</p>
//                                 <p className="font-bold text-white bg-[#D6AE3E] p-4">{predictions.odds.home}</p>
//                             </div>
//                             <div>
//                                 <p className="text-gray-300">Draw</p>
//                                 <p className="font-bold text-white bg-[#D6AE3E] p-4">{predictions.odds.draw}</p>
//                             </div>
//                             <div>
//                                 <p className="text-gray-300">Away</p>
//                                 <p className="font-bold text-white bg-[#D6AE3E] p-4">{predictions.odds.away}</p>
//                             </div>
//                           </div>
//                        </div>
//                 </motion.div>
//         </div>
//     );
// }



