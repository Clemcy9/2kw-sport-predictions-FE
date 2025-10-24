
// src/components/LeagueTables.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { leaguesData } from "./Table-data";

export default function LeagueTables() {
    const [activeLeague, setActiveLeague] = useState("EPL");
    const leagues = ["EPL", "SPA", "ITA", "GER", "FRA"];
    const leagueData = leaguesData[activeLeague];

    return (
        <div className="flex flex-col font-serif lg:flex-row gap-6 p-4 sm:p-0 sm:justify-between max-w-7xl w-full sm:gap-14">
            {/* LEAGUE TABLE */}
            <LeagueTable
                title="League Table"
                leagues={leagues}
                activeLeague={activeLeague}
                setActiveLeague={setActiveLeague}
                data={leagueData.league}
            />

            {/* TOP SCORERS */}
            <LeagueTable
                title="Top Scorers Table"
                leagues={leagues}
                activeLeague={activeLeague}
                setActiveLeague={setActiveLeague}
                data={leagueData.scorers}
                isScorers
            />
        </div>
    );
}

function LeagueTable({ title, leagues, activeLeague, setActiveLeague, data, isScorers }) {
    return (
        <div className="border-[#E5E7EB]/80 border font-sans bg-white rounded-[0.4rem] w-full p-4 sm:p-0">

            {/*Table Header and leagues*/}
            <div className="flex flex-col pb-3 mb-3 gap-1 shadow-b-sm m-6">
                <h2 className="font-semibold text-2xl text-[#1F2128]">{title}</h2>
                <div className="flex flex-wrap gap-2 bg-[#E5E7EB]/80 w-full rounded-[0.4rem] p-1">
                    {leagues.map((lg) => (
                        <button
                            key={lg}
                            onClick={() => setActiveLeague(lg)}
                            className={`px-3 py-2 text-sm rounded-[0.4em] transition-all ${activeLeague === lg
                                ? "bg-[#D6AE3E] text-white"
                                : "text-[#1A365D] hover:bg-[#1A365D]/20"
                                }`}
                        >
                            {lg}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table informations and animation */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeLeague + title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                >
                    {data.length > 0 ? (
                        <div className="overflow-y-auto max-h-72 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">

                            <table className="w-full text-sm text-left">
                                <thead className="text-[#1A365D]/70 sticky top-0 z-50 bg-white shadow-sm">
                                    <tr>
                                        {isScorers ? (
                                            <>
                                            {/* top scorers table heading */}
                                                <th className="py-2 px-2">Player</th>
                                                <th className="py-2 px-2">Matches</th>
                                                <th className="py-2 px-2">Goals</th>
                                            </>
                                        ) : (
                                            <>
                                            {/* leagues table heading */}
                                                <th className="py-2 px-2">Ps.</th>
                                                <th className="py-2 px-2">Team</th>
                                                <th className="py-2 px-2">PTS</th>
                                                <th className="py-2 px-2">W</th>
                                                <th className="py-2 px-2">D</th>
                                                <th className="py-2 px-2">L</th>
                                                <th className="py-2 px-2">GF/GA</th>
                                                <th className="py-2 px-2">GD</th>
                                            </>
                                        )}
                                    </tr>
                                </thead>
                                <tbody className="p-2">
                                    {data.map((item, i) => (
                                        <tr key={i} className="border-[#1A365D]/20 border-b hover:bg-gray-50 transition">
                                            {isScorers ? (
                                                <>
                                                {/* top scorers table */}
                                                    <td className="flex items-center gap-2 py-2 px-2">
                                                        <img src={item.logo} className="w-5 h-5 rounded-full" alt="" />
                                                        <div>
                                                            <div className="font-medium text-[#1A365D]">{item.player}</div>
                                                            <div className="text-xs text-[#1A365D]/80">{item.team}</div>
                                                        </div>
                                                    </td>
                                                    <td className="py-2 px-2 text-[#1A365D]/80">{item.matches}</td>
                                                    <td className="py-2 px-2 font-semibold text-[#D6AE3E]">{item.goals}</td>
                                                </>
                                            ) : (
                                                <>
                                                {/* leagues table */}
                                                    <td className="py-3 px-2">{item.rank}</td>
                                                    <td className="flex items-center gap-2 py-3 px-2">
                                                        <img src={item.logo} className="w-5 h-5 rounded-full" alt="" />
                                                        {item.team}
                                                    </td>
                                                        <td className="py-3 px-2 font-semibold text-[#1A365D]">{item.pts}</td>
                                                    <td className="py-3 px-2 text-[#1A365D]/90">{item.w}</td>
                                                    <td className="py-3 px-2 text-[#1A365D]/90">{item.d}</td>
                                                    <td className="py-3 px-2 text-[#1A365D]/90">{item.l}</td>
                                                    <td className="py-3 px-2 text-[#1A365D]/90">{item.gfga}</td>
                                                    <td className="py-3 px-2 text-green-600 font-medium">{item.gd}</td>
                                                </>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        // if there is no data for the standings table this will show
                        
                        <div className="text-gray-400 text-center py-6 text-sm">
                            No data available for {activeLeague}.
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
