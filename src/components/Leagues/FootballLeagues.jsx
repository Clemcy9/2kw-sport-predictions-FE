import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { leagues } from "./leagues";

export default function FootballLeagues() {
    const navigate = useNavigate();



    const leagues = [
        {
            slug: "England-premier-league",
            name: "England Premier League",
            country: "England",
            logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg",
            heroImage: "/premier-hero.jpg",
            component: "Premier-league",
        },
        {
            slug: "Spain-la-liga",
            name: "Spain La Liga",
            country: "Spain",
            logo: "/la-liga-logo.png",
            heroImage: "/laliga-hero.jpg",
            component: "LaLigaCard",
        },
        {
            slug: "Europe-UEFA-champions-league",
            name: "Europe UEFA Champions League",
            country: "Europe",
            logo: "/champions-league.png",
            heroImage: "/champions-hero.jpg",
            component: "ChampionsLeagueCard",
        },
        {
            slug: "Europe-UEFA-europa-league",
            name: "Europe UEFA Europa League",
            country: "Europe",
            logo: "/europa.png",
            heroImage: "/europa-hero.jpg",
            component: "EuropaLeagueCard",
        },
        {
            slug: "Italy-serie-A",
            name: "Italy Serie A",
            country: "Italy",
            logo: "/serie-a-logo.png",
            heroImage: "/seriea-hero.jpg",
            component: "SerieACard",
        },
    ]
    // const leagueNames = leagues.map((leagues) => leagues.name);
    // localStorage.setItem("leagueNames", JSON.stringify(leagueNames));

    // const handleLeagueClick = (leagueName) => {

    //       localStorage.setItem("selectedLeague", leagueName);


    //       const path = `/leagues/${leagueName.toLowerCase().replace(/\s+/g, "-")}`;
    //       navigate(path);
    //   };


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
