// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaChevronRight } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const leagues = [
//     { name: "Nigeria NPFL", country: "Nigeria", logo: "/NPFL.jpg" },
//     { name: "England Premier League", country: "England", logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
//     { name: "Spain La Liga", country: "Spain", logo: "/spain-la-liga.png" },
//     { name: "Europe UEFA Champions ...", country: "Europe", logo: "/champions-league.png" },
//     { name: "Europe UEFA Europa League", country: "Europe", logo: "/europa.png" },
//     { name: "Italy Serie A", country: "Italy", logo: "/italy-serie-A.png" },
//     { name: "Germany Bundesliga", country: "Germany", logo: "https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg" },
//     { name: "France Ligue 1", country: "France", logo: "/france-league.png" },
//     { name: "Portugal Liga Portugal", country: "Portugal", logo: "/portugal.png" },
//     { name: "Netherlands Eredivisie", country: "Netherlands", logo: "/netherlands.png" },
//     { name: "Belgium Pro League", country: "Belgium", logo: "/belguim-pro.png" },
//     { name: "South Africa Premier", country: "South Africa", logo: "/south-africa.png" }
// ];


// const leagueNames = leagues.map((leagues)=> leagues.name);
// localStorage.setItem("leagueNames", JSON.stringify(leagueNames));

// export default function FootballLeaguesTable() {
//     // const [open, setOpen] = useState(false);
//     const navigate = useNavigate();

//     const handleLeagueClick = (leagueName) => {

//         localStorage.setItem("selectedLeague", leagueName);


//         const path = `/leagues/${leagueName.toLowerCase().replace(/\s+/g, "-")}`;
//         navigate(path);
//     };

//     return (

        
//         <div className="hidden lg:flex lg:flex-col lg:max-w-[400px] w-full lg:border lg:border-[#D6AE3E]/70 rounded-[0.6rem] lg:shadow-lg my-5">
//             <h2 className="text-3xl font-semibold text-white font-sans bg-[#D6AE3E] text-center py-4 lg:rounded-t-[0.6rem] lg:block rounded-none">Football Leagues</h2>

//             <div className="flex items-center lg:justify-center lg:mx-0 lg:flex-col flex-nowrap scroll-smooth whitespace-nowrap overflow-x-auto lg:overflow-visible p-2 lg:p-0 w-full gap-3 lg:gap-0">
//                 {leagues.map((league, index) => (
//                     <motion.div
//                         key={index}
//                         // whileHover={{ scale: 1.02 }}
//                         onClick={() => handleLeagueClick(league.name)}
//                         className="flex  whitespace-nowrap scroll-smooth items-center justify-between bg-white text-[#1A365D] lg:p-5 py-2 cursor-pointer border border-[#d6ae3e]/70 min-w-[280px] lg:min-w-full hover:shadow-lg hover:bg-[#d6ae3e]/80 transition-all"
//                     >
//                         <div className="flex items-center justify-center">
//                             <img src={league.logo} alt={league.name} className="w-8 h-8 m-2" />
//                             <div>
//                                 <h4 className="font-semibold text-sm lg:text-[1.1rem]">{league.name}</h4>
//                                 <p className="text-xs text-gray-500">{league.country}</p>
//                             </div>
//                         </div>
//                         <FaChevronRight  className=" hidden lg:block"/>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     );
// }


import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { leagues } from "./leagues";

export default function FootballLeagues() {
    const navigate = useNavigate();

    const leagueNames = leagues.map((leagues) => leagues.name);
    localStorage.setItem("leagueNames", JSON.stringify(leagueNames));

    const handleLeagueClick = (leagueName) => {

          localStorage.setItem("selectedLeague", leagueName);


          const path = `/leagues/${leagueName.toLowerCase().replace(/\s+/g, "-")}`;
          navigate(path);
      };


    return (
        <div className="hidden lg:flex lg:flex-col lg:max-w-[340px] w-full lg:border lg:border-[#D6AE3E]/70 rounded-[0.6rem] lg:shadow-lg my-5 ">
            {/* Header */}
            <h2 className="text-3xl font-semibold text-white font-sans bg-[#D6AE3E] text-center py-4 lg:rounded-t-[0.6rem]">
                Football Leagues
            </h2>

            {/* Leagues list */}
            <div className="flex items-center lg:justify-center lg:mx-0 lg:flex-col flex-nowrap scroll-smooth whitespace-nowrap overflow-x-auto lg:overflow-visible p-2 lg:p-0 w-full gap-3 lg:gap-0">
                {leagues.map((league, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => handleLeagueClick(league.slug)}
                        className="flex items-center justify-between bg-white text-[#1A365D] lg:p-3 py-2 cursor-pointer border border-[#d6ae3e]/70 min-w-[280px] lg:min-w-full hover:shadow-lg hover:bg-[#d6ae3e]/80 transition-all"
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

                        {/* Chevron icon (only desktop) */}
                        <FaChevronRight className="hidden lg:block" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
