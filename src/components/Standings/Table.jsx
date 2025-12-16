
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCircleDot, FaSpinner, FaTrophy } from "react-icons/fa6";
import { FaTools} from "react-icons/fa";

export default function LeagueTables() {
    const [activeLeague, setActiveLeague] = useState("EPL");
    const [leaguesData, setLeaguesData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // getting the league IDs
    const leagueMap = {
        UCL: 2,
        EPL: 39,   
        SPA: 140,  
        ITA: 135,  
        GER: 78,   
        FRA: 61,  
    };

    const leagues = Object.keys(leagueMap);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const combinedData = {};

                await Promise.all(
                    leagues.map(async (lg) => {
                        const id = leagueMap[lg];

                        // endpoint standings
                        const standingsRes = await fetch(
                            `https://twokw-backend.onrender.com/api/v1/football/standings?league=${id}&season=2025`
                        );
                        const standingsJson = await standingsRes.json();

                        // endpoint top-scorers
                        const scorersRes = await fetch(
                            `https://twokw-backend.onrender.com/api/v1/football/topscorers?league=${id}&season=2025`
                        );
                        const scorersJson = await scorersRes.json();

                        // parse standings
                        const resp = standingsJson?.data?.response?.[0];
                        const table = resp?.league?.standings?.[0] ?? [];

                        const leagueArray = table.map((team) => ({
                            rank: team.rank,
                            team: team.team.name,
                            pts: team.points,
                            w: team.all.win ?? team.all.played_w,
                            d: team.all.draw ?? team.all.played_d,
                            l: team.all.lose ?? team.all.played_l,
                            gfga: `${team.all.goals.for}/${team.all.goals.against}`,
                            gd: team.goalsDiff >= 0 ? `+${team.goalsDiff}` : `${team.goalsDiff}`,
                            logo: team.team.logo,
                        }));

                        // parse top scorers
                        const scorers = (scorersJson?.data?.response ?? []).map((item) => {
                            const stat = item.statistics[0];
                            return {
                                player: item.player.name,
                                team: stat.team.name,
                                matches: stat.games.appearences,
                                goals: stat.goals.total,
                                logo: stat.team.logo,
                            };
                        });

                        combinedData[lg] = {
                            league: leagueArray,
                            scorers,
                        };
                    })
                );

                setLeaguesData(combinedData);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError("Unable to load table's, connect to a network");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="text-center text-[#1A365D] py-20 flex justify-center items-center"><span><FaSpinner className="animate-spin" /> </span> Loading Tables...</div>;
    if (error) return <div className="text-center flex justify-center items-center text-red-500 py-20  w-full rounded-xl"><FaTools /> {error}</div>;

    const leagueData = leaguesData[activeLeague] || { league: [], scorers: [] };

    return (
        <div className="gap-5 w-full my-2 flex-col lg:flex-row flex justify-center items-center text-white">

            {/* LEAGUE TABLE */}
            <div className="shadow-lg border p-3 font-sans bg-white rounded-[0.4rem] max-w-full w-full lg:p-2 mb-6">
                <div className="flex flex-col pb-3 mb-3 gap-1 shadow-b-lg lg:m-6">
                    <h2 className="font-semibold flex justify-between text-2xl font-[Poppins] text-[#1F2128]">
                        League Table <FaTrophy className="text-[#D6AE3E]" />
                    </h2>
                    <div className="flex lg:justify-start gap-2 bg-[#E5E7EB]/80 w-full rounded-[0.4rem] p-1">
                        {leagues.map((lg) => (
                            <button
                                key={lg}
                                onClick={() => setActiveLeague(lg)}
                                className={`px-3 py-2 text-lg rounded-[0.4em] transition-all ${activeLeague === lg
                                        ? "bg-[#D6AE3E] text-white"
                                        : "text-[#1A365D] hover:bg-[#1A365D]/20"
                                    }`}
                            >
                                {lg}
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeLeague + "league"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                    >
                        {leagueData.league.length > 0 ? (
                            <div className="overflow-y-auto max-h-72 lg:max-h-96 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                                <table className="w-full text-lg text-left">
                                    <thead className="text-[#F3F4F6] sticky top-0 z-40 bg-[#1A365D] shadow-sm">
                                        <tr className="text-sm">
                                            <th className="py-2 px-1">Ps.</th>
                                            <th className="py-2 px-1">Team</th>
                                            <th className="py-2 px-1">PTS</th>
                                            <th className="py-2 px-1">W</th>
                                            <th className="py-2 px-1">D</th>
                                            <th className="py-2 px-1">L</th>
                                            <th className="py-2 px-1">GF/GA</th>
                                            <th className="py-2 px-1">GD</th>
                                        </tr>
                                    </thead>
                                    <tbody className="p-2 text-sm">
                                        {leagueData.league.map((item, i) => (
                                            <tr
                                                key={i}
                                                className="odd:bg-white even:bg-[#F3F4F680] border-[#1A365D]/20 border-b hover:scale-95 active:scale-95 overflow-hidden transition-transform duration-500 hover:bg-gray-50"
                                            >
                                                <td className="py-1 px-1 text-[#1A365D]">{item.rank}</td>
                                                <td className="flex items-center gap-2 py-1 px-1 text-[#1A365D]/90">
                                                    <img src={item.logo} className="w-5 h-5 rounded-full" alt="" /> {item.team}
                                                </td>
                                                <td className="py-1 px-1 font-semibold text-[#1A365D]">{item.pts}</td>
                                                <td className="py-1 px-1 text-[#1A365D]/90">{item.w}</td>
                                                <td className="py-1 px-1 text-[#1A365D]/90">{item.d}</td>
                                                <td className="py-1 px-1 text-[#1A365D]/90">{item.l}</td>
                                                <td className="py-1 px-1 text-[#1A365D]/90">{item.gfga}</td>
                                                <td className="py-1 px-1 text-green-600 font-medium">{item.gd}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="text-gray-400 text-center py-6 text-lg">
                                No data available for {activeLeague}.
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* TOP SCORERS */}
            <div className="shadow-lg p-3 font-sans bg-white rounded-[0.4rem] max-w-full w-full lg:p-2 lg:mb-6">
                <div className="flex flex-col pb-3 mb-3 gap-1 shadow-b-lg lg:m-6">
                    <h2 className="font-semibold flex justify-between text-2xl font-[Poppins] text-[#1F2128]">
                        Top Scorers Table <FaCircleDot className="text-[#D6AE3E]" />
                    </h2>
                    <div className="flex lg:justify-start gap-2 bg-[#E5E7EB]/80 w-full rounded-[0.4rem] p-1">
                        {leagues.map((lg) => (
                            <button
                                key={lg}
                                onClick={() => setActiveLeague(lg)}
                                className={`px-3 py-2 text-lg rounded-[0.4em] transition-all ${activeLeague === lg
                                    ? "bg-[#D6AE3E] text-white"
                                    : "text-[#1A365D] hover:bg-[#1A365D]/20"
                                    }`}
                            >
                                {lg}
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeLeague + "scorers"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                    >
                        {leagueData.scorers.length > 0 ? (
                            <div className="overflow-y-auto max-h-72 lg:max-h-96 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                                <table className="w-full text-lg text-left">
                                    <thead className="text-[#F3F4F6] text-sm sticky z-40 top-0 bg-[#1A365D] shadow-sm">
                                        <tr>
                                            <th className="py-2 px-1">Player</th>
                                            <th className="py-2 px-1">Matches</th>
                                            <th className="py-2 px-1">Goals</th>
                                        </tr>
                                    </thead>
                                    <tbody className="p-2 text-sm">
                                        {leagueData.scorers.map((item, i) => (
                                            <tr
                                                key={i}
                                                className="odd:bg-white even:bg-[#F3F4F680] border-[#1A365D]/20 border-b hover:bg-gray-50 hover:scale-95 active:scale-95 overflow-hidden transition-transform duration-500"
                                            >
                                                <td className="flex items-center gap-2 py-1 px-1">
                                                    <img src={item.logo} className="w-5 h-5 rounded-full" alt="" />
                                                    <div>
                                                        <div className="font-medium text-[#1A365D]">{item.player}</div>
                                                        <div className="text-xs text-[#1A365D]/80">{item.team}</div>
                                                    </div>
                                                </td>
                                                <td className="py-1 px-1 text-[#1A365D]/80">{item.matches}</td>
                                                <td className="py-1 px-1 font-semibold text-[#D6AE3E]">{item.goals}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="text-gray-400 text-center py-6 text-lg">
                                No data available for {activeLeague}.
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

