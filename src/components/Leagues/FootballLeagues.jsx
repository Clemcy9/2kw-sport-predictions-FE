import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { leagues } from "./leagues";

export default function FootballLeagues() {
    // const navigate = useNavigate();



    const leagues = [
        {
            code: "UCL",
            name: "UEFA Champions League",
            country: "England",
            logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg",
        },
        {
            code: "EPL",
            name: "English Premier League",
            country: "England",
            logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg",
            
        },
        {
            code: "SPA",
            name: "Spain La Liga",
            country: "Spain",
            logo: "/la-liga-logo.png",
            
        },
        {
            code: "ITA",
            name: "Italian Serie A",
            country: "Italy",
            logo: "/serie-a-logo.png",
           
        },
        {
            code: "GER",
            name: "German Bundesliga",
            country: "Europe",
            logo: "/champions-league.png",
            
        },
        {
            code: "FRA",
            name: "French Ligue 1",
            country: "Europe",
            logo: "/europa.png",
           
        },
    ]
    


    return (
        <div className="hidden lg:sticky top-0 lg:block w-full lg:border lg:border-[#D6AE3E]/70 rounded-[0.6rem] lg:shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-500 mt-5 ">
            {/* Header */}
            <h2 className="text-3xl font-semibold text-white font-sans bg-[#D6AE3E] text-center py-4 lg:rounded-t-[0.6rem]">
                Football Leagues
            </h2>

            {/* Leagues list */}
            <div className="flex items-center overflow-hidden flex-col w-full">
                {leagues.map((league, index) => (
                    <motion.div
                        key={index}
                        // onClick={() => handleLeagueClick(league.slug)}
                        className="flex items-center justify-between overflow-hidden bg-white text-[#1A365D] lg:p-3 py-2 cursor-pointer border border-[#d6ae3e]/70 min-w-[280px] lg:min-w-full hover:shadow-lg hover:bg-[#d6ae3e]/80 hover:scale-105  transition-transform duration-500"
                    >
                        {/* League logo and text */}
                        <div className="flex items-center justify-center">
                            <img
                                src={league.logo}
                                alt={league.name}
                                className="w-8 h-8 m-2"
                            />
                            <div>
                                <h4 className="font-semibold text-sm lg:text-[1rem]">
                                    {league.name}
                                </h4>
                                <p className="text-xs text-gray-500">{league.country}</p>
                            </div>
                        </div>

                        {/* up icon (only desktop) */}
                        <FaChevronRight className="hidden lg:block" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
