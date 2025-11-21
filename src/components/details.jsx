// // import { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import Navbar from "./shared/Navbar";
// import HeroSection from "./shared/HeroSection";

// export default function PredictionDetails(teams, league ,values) {
    

//     const times = fixture.date;

//     const predictions = {
//         homeLogo: teams.home.logo,
//         homeTeam: teams.home.name,
//         awayLogo: teams.away.logo,
//         awayTeam: teams.away.name,
//         leagueLogo: league.logo,
//         timing: new Date(times).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" ,day: "2-digit", month: "short", year: "2-digit" }),
//         odd: { Odds: values[0].odd, Tips: "over 15", Prop: "3.65%" },
//     };


//     return (
//         <>
//         <Navbar />
//         <HeroSection />
//             <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, ease: "easeOut" }}
//             >
//                 <section>
//                     <div className="flex justify-between">
//                         <h2>England Premier League</h2>
//                         <h3>{predictions.timing}</h3>
//                     </div>

//                     <div className="flex justify-between lg:justify-end lg:items-start items-start   space-x-10 px-1 lg:gap-4 lg:space-x-0 lg:p-4 w-full">
//                         <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
//                             <p className="px-3 font-bold font-sans text-[#D6AE3E]">Odds</p>
//                             <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">
//                                 {predictions.odd.Odds}
//                             </p>
//                         </div>
//                         <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
//                             <p className="px-3 font-bold font-sans text-[#D6AE3E]">Tips</p>
//                             <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">
//                                 {predictions.odd.Tips}
//                             </p>
//                         </div>
//                         <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
//                             <p className="px-3 font-bold font-sans text-[#D6AE3E]">Prop%</p>
//                             <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">
//                                 {predictions.odd.Prop}
//                             </p>
//                         </div>
//                     </div>

//                     <div className="flex justify-between lg:justify-center  items-start min-w-[130px] space-x-10 px-1 lg:gap-0 lg:space-x-0  space-y-2 lg:p-0 w-full">
//                         <div className="flex justify-center items-center space-y-1">
//                             <img
//                                 src={predictions.homeLogo}
//                                 // alt={predictions.homeTeam}
//                                 className="lg:w-10 lg:h-10 w-6 h-6"
//                             />
//                             <span className="font-sans text-sm font-normal">
//                                 {predictions.homeTeam}
//                             </span>
//                         </div>
//                         <h4>VS</h4>
//                         <div className="flex justify-center items-center">
//                             <div className="lg:w-10 lg:h-10 w-6 h-6 ">
//                                 <img
//                                     src={predictions.awayLogo}
//                                     // alt={predictions.awayTeam}
//                                     className="h-full w-full object-cover  rounded-full"
//                                 />
//                             </div>
//                             <p className="text-sm font-sans font-normal">
//                                 {predictions.awayTeam}
//                             </p>
//                         </div>
//                     </div>
//                 </section>
//             </motion.div>
//         </>
//     );
// }



// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./shared/Navbar";
import HeroSection from "./shared/HeroSection";

export default function PredictionDetails(teams, league ,values) {
    

    const times = fixture.date;

    const predictions = {
        homeLogo: "",
        homeTeam: "Muy YTeam",
        awayLogo: teams.away.logo,
        awayTeam: teams.away.name,
        leagueLogo: league.logo,
        timing: new Date(times).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" ,day: "2-digit", month: "short", year: "2-digit" }),
        odd: { Odds: values[0].odd, Tips: "over 15", Prop: "3.65%" },
    };


    return (
        <>
        <Navbar />
        <HeroSection />
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <section>
                    <div className="flex justify-between">
                        <h2>England Premier League</h2>
                        <h3>{predictions.timing}</h3>
                    </div>

                    <div className="flex justify-between lg:justify-end lg:items-start items-start   space-x-10 px-1 lg:gap-4 lg:space-x-0 lg:p-4 w-full">
                        <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                            <p className="px-3 font-bold font-sans text-[#D6AE3E]">Odds</p>
                            <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">
                                {predictions.odd.Odds}
                            </p>
                        </div>
                        <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                            <p className="px-3 font-bold font-sans text-[#D6AE3E]">Tips</p>
                            <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">
                                {predictions.odd.Tips}
                            </p>
                        </div>
                        <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                            <p className="px-3 font-bold font-sans text-[#D6AE3E]">Prop%</p>
                            <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px]  w-16 text-center">
                                {predictions.odd.Prop}
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between lg:justify-center  items-start min-w-[130px] space-x-10 px-1 lg:gap-0 lg:space-x-0  space-y-2 lg:p-0 w-full">
                        <div className="flex justify-center items-center space-y-1">
                            <img
                                src={predictions.homeLogo}
                                // alt={predictions.homeTeam}
                                className="lg:w-10 lg:h-10 w-6 h-6"
                            />
                            <span className="font-sans text-sm font-normal">
                                {predictions.homeTeam}
                            </span>
                        </div>
                        <h4>VS</h4>
                        <div className="flex justify-center items-center">
                            <div className="lg:w-10 lg:h-10 w-6 h-6 ">
                                <img
                                    src={predictions.awayLogo}
                                    // alt={predictions.awayTeam}
                                    className="h-full w-full object-cover  rounded-full"
                                />
                            </div>
                            <p className="text-sm font-sans font-normal">
                                {predictions.awayTeam}
                            </p>
                        </div>
                    </div>
                </section>
            </motion.div>
        </>
    );
}
