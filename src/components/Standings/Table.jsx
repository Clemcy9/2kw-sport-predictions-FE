// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {FaCircleDot, FaTrophy } from "react-icons/fa6";

// // export default function LeagueTables() {
// //     const [activeLeague, setActiveLeague] = useState("EPL");
// //     const leagues = ["EPL", "SPA", "ITA", "GER", "FRA"];

// //     const leaguesData = {
// //         EPL: {
// //             league: [
// //                 { rank: 1, team: "Liverpool", pts: 15, w: 5, d: 0, l: 0, gfga: "12/2", gd: "+10", logo: "/liverpool.png" },
// //                 { rank: 2, team: "Arsenal", pts: 13, w: 4, d: 1, l: 0, gfga: "10/3", gd: "+7", logo: "/arsenal.png" },
// //                 { rank: 3, team: "Man City", pts: 12, w: 4, d: 0, l: 1, gfga: "11/4", gd: "+7", logo: "/mancity.png" },
// //                 { rank: 4, team: "Tottenham", pts: 11, w: 3, d: 2, l: 0, gfga: "9/5", gd: "+4", logo: "/tottenham.png" },
// //                 { rank: 5, team: "Chelsea", pts: 10, w: 3, d: 1, l: 1, gfga: "8/6", gd: "+2", logo: "/chelsea.png" },
// //                 { rank: 6, team: "Man United", pts: 9, w: 3, d: 0, l: 2, gfga: "7/6", gd: "+1", logo: "/manu.png" },
// //                 { rank: 7, team: "Brighton", pts: 8, w: 2, d: 2, l: 1, gfga: "6/5", gd: "+1", logo: "/brighton.png" },
// //                 { rank: 8, team: "Newcastle", pts: 8, w: 2, d: 2, l: 1, gfga: "6/5", gd: "+1", logo: "/newcastle.png" },
// //                 { rank: 9, team: "Aston Villa", pts: 7, w: 2, d: 1, l: 2, gfga: "7/7", gd: "0", logo: "/villa.png" },
// //                 { rank: 10, team: "West Ham", pts: 6, w: 2, d: 0, l: 3, gfga: "5/8", gd: "-3", logo: "/westham.png" },
// //                 { rank: 11, team: "Fulham", pts: 6, w: 2, d: 0, l: 3, gfga: "6/10", gd: "-4", logo: "/fulham.png" },
// //                 { rank: 12, team: "Brentford", pts: 5, w: 1, d: 2, l: 2, gfga: "4/6", gd: "-2", logo: "/brentford.png" },
// //                 { rank: 13, team: "Crystal Palace", pts: 4, w: 1, d: 1, l: 3, gfga: "3/8", gd: "-5", logo: "/palace.png" },
// //                 { rank: 14, team: "Everton", pts: 3, w: 1, d: 0, l: 4, gfga: "4/9", gd: "-5", logo: "/everton.png" },
// //                 { rank: 15, team: "Wolves", pts: 2, w: 0, d: 2, l: 3, gfga: "2/7", gd: "-5", logo: "/wolves.png" },
// //             ],
// //             scorers: [
// //                 { player: "E. Haaland", team: "Man City", matches: 5, goals: 8, logo: "/mancity.png" },
// //                 { player: "M. Salah", team: "Liverpool", matches: 5, goals: 6, logo: "/liverpool.png" },
// //                 { player: "H. Kane", team: "Tottenham", matches: 5, goals: 5, logo: "/tottenham.png" },
// //                 { player: "G. Jesus", team: "Arsenal", matches: 5, goals: 4, logo: "/arsenal.png" },
// //                 { player: "J. Alvarez", team: "Man City", matches: 5, goals: 4, logo: "/mancity.png" },
// //                 { player: "S. Sterling", team: "Chelsea", matches: 5, goals: 3, logo: "/chelsea.png" },
// //                 { player: "D. Nunez", team: "Liverpool", matches: 5, goals: 3, logo: "/liverpool.png" },
// //                 { player: "Son Heung-min", team: "Tottenham", matches: 5, goals: 2, logo: "/tottenham.png" },
// //                 { player: "B. Saka", team: "Arsenal", matches: 5, goals: 2, logo: "/arsenal.png" },
// //                 { player: "A. Mitrovic", team: "Fulham", matches: 5, goals: 2, logo: "/fulham.png" },
// //             ],
// //         },

       
// //         SPA: {
// //             league: [
// //                 { rank: 1, team: "Real Madrid", pts: 15, w: 5, d: 0, l: 0, gfga: "13/3", gd: "+10", logo: "/madrid.png" },
// //                 { rank: 2, team: "Barcelona", pts: 13, w: 4, d: 1, l: 0, gfga: "11/4", gd: "+7", logo: "/barca.png" },
// //                 { rank: 3, team: "Atletico Madrid", pts: 12, w: 4, d: 0, l: 1, gfga: "9/5", gd: "+4", logo: "/atletico.png" },
// //                 { rank: 4, team: "Sociedad", pts: 10, w: 3, d: 1, l: 1, gfga: "8/5", gd: "+3", logo: "/sociedad.png" },
// //                 { rank: 5, team: "Betis", pts: 9, w: 3, d: 0, l: 2, gfga: "7/6", gd: "+1", logo: "/betis.png" },
// //                 { rank: 6, team: "Sevilla", pts: 8, w: 2, d: 2, l: 1, gfga: "6/5", gd: "+1", logo: "/sevilla.png" },
// //                 { rank: 7, team: "Villarreal", pts: 8, w: 2, d: 2, l: 1, gfga: "7/6", gd: "+1", logo: "/villarreal.png" },
// //                 { rank: 8, team: "Valencia", pts: 7, w: 2, d: 1, l: 2, gfga: "6/7", gd: "-1", logo: "/valencia.png" },
// //                 { rank: 9, team: "Bilbao", pts: 7, w: 2, d: 1, l: 2, gfga: "6/7", gd: "-1", logo: "/bilbao.png" },
// //                 { rank: 10, team: "Osasuna", pts: 6, w: 2, d: 0, l: 3, gfga: "5/8", gd: "-3", logo: "/osasuna.png" },
// //                 { rank: 11, team: "Celta Vigo", pts: 5, w: 1, d: 2, l: 2, gfga: "5/6", gd: "-1", logo: "/celta.png" },
// //                 { rank: 12, team: "Mallorca", pts: 4, w: 1, d: 1, l: 3, gfga: "4/9", gd: "-5", logo: "/mallorca.png" },
// //                 { rank: 13, team: "Getafe", pts: 4, w: 1, d: 1, l: 3, gfga: "3/8", gd: "-5", logo: "/getafe.png" },
// //                 { rank: 14, team: "Granada", pts: 3, w: 1, d: 0, l: 4, gfga: "3/9", gd: "-6", logo: "/granada.png" },
// //                 { rank: 15, team: "Alaves", pts: 3, w: 1, d: 0, l: 4, gfga: "2/10", gd: "-8", logo: "/alaves.png" },
// //             ],
// //             scorers: [
// //                 { player: "Bellingham", team: "Real Madrid", matches: 5, goals: 7, logo: "/madrid.png" },
// //                 { player: "Lewandowski", team: "Barcelona", matches: 5, goals: 6, logo: "/barca.png" },
// //                 { player: "Griezmann", team: "Atletico Madrid", matches: 5, goals: 5, logo: "/atletico.png" },
// //                 { player: "Rodrygo", team: "Real Madrid", matches: 5, goals: 4, logo: "/madrid.png" },
// //                 { player: "Morata", team: "Atletico Madrid", matches: 5, goals: 4, logo: "/atletico.png" },
// //                 { player: "Pedri", team: "Barcelona", matches: 5, goals: 3, logo: "/barca.png" },
// //                 { player: "Joselu", team: "Real Madrid", matches: 5, goals: 3, logo: "/madrid.png" },
// //                 { player: "Williams", team: "Bilbao", matches: 5, goals: 2, logo: "/bilbao.png" },
// //                 { player: "Isak", team: "Sociedad", matches: 5, goals: 2, logo: "/sociedad.png" },
// //                 { player: "Ferran Torres", team: "Barcelona", matches: 5, goals: 2, logo: "/barca.png" },
// //             ],
// //         },

        
// //         ITA: {
// //             league: [
// //                 { rank: 1, team: "Inter Milan", pts: 15, w: 5, d: 0, l: 0, gfga: "13/2", gd: "+11", logo: "/inter.png" },
// //                 { rank: 2, team: "AC Milan", pts: 13, w: 4, d: 1, l: 0, gfga: "11/4", gd: "+7", logo: "/acmilan.png" },
// //                 { rank: 3, team: "Juventus", pts: 12, w: 4, d: 0, l: 1, gfga: "9/5", gd: "+4", logo: "/juve.png" },
// //                 { rank: 4, team: "Napoli", pts: 10, w: 3, d: 1, l: 1, gfga: "8/6", gd: "+2", logo: "/napoli.png" },
// //                 { rank: 5, team: "Roma", pts: 9, w: 3, d: 0, l: 2, gfga: "7/5", gd: "+2", logo: "/roma.png" },
// //                 { rank: 6, team: "Lazio", pts: 8, w: 2, d: 2, l: 1, gfga: "6/6", gd: "0", logo: "/lazio.png" },
// //                 { rank: 7, team: "Atalanta", pts: 8, w: 2, d: 2, l: 1, gfga: "7/7", gd: "0", logo: "/atalanta.png" },
// //                 { rank: 8, team: "Fiorentina", pts: 7, w: 2, d: 1, l: 2, gfga: "6/8", gd: "-2", logo: "/fiorentina.png" },
// //                 { rank: 9, team: "Bologna", pts: 6, w: 2, d: 0, l: 3, gfga: "5/9", gd: "-4", logo: "/bologna.png" },
// //                 { rank: 10, team: "Torino", pts: 6, w: 2, d: 0, l: 3, gfga: "5/8", gd: "-3", logo: "/torino.png" },
// //                 { rank: 11, team: "Monza", pts: 5, w: 1, d: 2, l: 2, gfga: "4/6", gd: "-2", logo: "/monza.png" },
// //                 { rank: 12, team: "Sassuolo", pts: 4, w: 1, d: 1, l: 3, gfga: "4/9", gd: "-5", logo: "/sassuolo.png" },
// //                 { rank: 13, team: "Udinese", pts: 4, w: 1, d: 1, l: 3, gfga: "3/8", gd: "-5", logo: "/udinese.png" },
// //                 { rank: 14, team: "Empoli", pts: 3, w: 1, d: 0, l: 4, gfga: "3/9", gd: "-6", logo: "/empoli.png" },
// //                 { rank: 15, team: "Lecce", pts: 3, w: 1, d: 0, l: 4, gfga: "2/10", gd: "-8", logo: "/lecce.png" },
// //             ],
// //             scorers: [
// //                 { player: "Lautaro Martínez", team: "Inter Milan", matches: 5, goals: 7, logo: "/inter.png" },
// //                 { player: "O. Giroud", team: "AC Milan", matches: 5, goals: 6, logo: "/acmilan.png" },
// //                 { player: "V. Osimhen", team: "Napoli", matches: 5, goals: 5, logo: "/napoli.png" },
// //                 { player: "Dybala", team: "Roma", matches: 5, goals: 4, logo: "/roma.png" },
// //                 { player: "Chiesa", team: "Juventus", matches: 5, goals: 4, logo: "/juve.png" },
// //                 { player: "Kvaratskhelia", team: "Napoli", matches: 5, goals: 3, logo: "/napoli.png" },
// //                 { player: "Thuram", team: "Inter Milan", matches: 5, goals: 3, logo: "/inter.png" },
// //                 { player: "Zaccagni", team: "Lazio", matches: 5, goals: 2, logo: "/lazio.png" },
// //                 { player: "Lookman", team: "Atalanta", matches: 5, goals: 2, logo: "/atalanta.png" },
// //                 { player: "Immobile", team: "Lazio", matches: 5, goals: 2, logo: "/lazio.png" },
// //             ],
// //         },

        
// //         GER: {
// //             league: [
// //                 { rank: 1, team: "Bayern Munich", pts: 15, w: 5, d: 0, l: 0, gfga: "18/3", gd: "+15", logo: "/bayern.png" },
// //                 { rank: 2, team: "Leverkusen", pts: 13, w: 4, d: 1, l: 0, gfga: "14/4", gd: "+10", logo: "/leverkusen.png" },
// //                 { rank: 3, team: "RB Leipzig", pts: 12, w: 4, d: 0, l: 1, gfga: "11/6", gd: "+5", logo: "/leipzig.png" },
// //                 { rank: 4, team: "Dortmund", pts: 10, w: 3, d: 1, l: 1, gfga: "9/7", gd: "+2", logo: "/dortmund.png" },
// //                 { rank: 5, team: "Stuttgart", pts: 9, w: 3, d: 0, l: 2, gfga: "10/8", gd: "+2", logo: "/stuttgart.png" },
// //                 { rank: 6, team: "Freiburg", pts: 8, w: 2, d: 2, l: 1, gfga: "7/6", gd: "+1", logo: "/freiburg.png" },
// //                 { rank: 7, team: "Hoffenheim", pts: 7, w: 2, d: 1, l: 2, gfga: "8/9", gd: "-1", logo: "/hoffenheim.png" },
// //                 { rank: 8, team: "Union Berlin", pts: 7, w: 2, d: 1, l: 2, gfga: "6/7", gd: "-1", logo: "/union.png" },
// //                 { rank: 9, team: "Mainz", pts: 6, w: 2, d: 0, l: 3, gfga: "6/10", gd: "-4", logo: "/mainz.png" },
// //                 { rank: 10, team: "Werder Bremen", pts: 6, w: 2, d: 0, l: 3, gfga: "5/9", gd: "-4", logo: "/bremen.png" },
// //             ],
// //             scorers: [
// //                 { player: "Harry Kane", team: "Bayern Munich", matches: 5, goals: 9, logo: "/bayern.png" },
// //                 { player: "Boniface", team: "Leverkusen", matches: 5, goals: 6, logo: "/leverkusen.png" },
// //                 { player: "Openda", team: "RB Leipzig", matches: 5, goals: 5, logo: "/leipzig.png" },
// //                 { player: "Sané", team: "Bayern Munich", matches: 5, goals: 4, logo: "/bayern.png" },
// //                 { player: "Müller", team: "Bayern Munich", matches: 5, goals: 3, logo: "/bayern.png" },
// //                 { player: "Wirtz", team: "Leverkusen", matches: 5, goals: 3, logo: "/leverkusen.png" },
// //                 { player: "Guirassy", team: "Stuttgart", matches: 5, goals: 3, logo: "/stuttgart.png" },
// //                 { player: "Brandt", team: "Dortmund", matches: 5, goals: 2, logo: "/dortmund.png" },
// //                 { player: "Hofmann", team: "Leverkusen", matches: 5, goals: 2, logo: "/leverkusen.png" },
// //                 { player: "Musiala", team: "Bayern Munich", matches: 5, goals: 2, logo: "/bayern.png" },
// //             ],
// //         },

// //         FRA: {
// //             league: [
// //                 { rank: 1, team: "PSG", pts: 14, w: 4, d: 2, l: 0, gfga: "15/5", gd: "+10", logo: "/psg.png" },
// //                 { rank: 2, team: "Monaco", pts: 13, w: 4, d: 1, l: 1, gfga: "13/6", gd: "+7", logo: "/monaco.png" },
// //                 { rank: 3, team: "Lyon", pts: 11, w: 3, d: 2, l: 1, gfga: "9/5", gd: "+4", logo: "/lyon.png" },
// //                 { rank: 4, team: "Lille", pts: 10, w: 3, d: 1, l: 2, gfga: "8/6", gd: "+2", logo: "/lille.png" },
// //                 { rank: 5, team: "Marseille", pts: 9, w: 2, d: 3, l: 1, gfga: "7/6", gd: "+1", logo: "/marseille.png" },
// //                 { rank: 6, team: "Rennes", pts: 8, w: 2, d: 2, l: 2, gfga: "6/7", gd: "-1", logo: "/rennes.png" },
// //                 { rank: 7, team: "Nice", pts: 8, w: 2, d: 2, l: 2, gfga: "5/6", gd: "-1", logo: "/nice.png" },
// //                 { rank: 8, team: "Lens", pts: 7, w: 2, d: 1, l: 3, gfga: "6/8", gd: "-2", logo: "/lens.png" },
// //                 { rank: 9, team: "Nantes", pts: 6, w: 2, d: 0, l: 4, gfga: "5/9", gd: "-4", logo: "/nantes.png" },
// //                 { rank: 10, team: "Toulouse", pts: 5, w: 1, d: 2, l: 3, gfga: "4/8", gd: "-4", logo: "/toulouse.png" },
// //             ],
// //             scorers: [
// //                 { player: "Mbappé", team: "PSG", matches: 6, goals: 9, logo: "/psg.png" },
// //                 { player: "Ben Yedder", team: "Monaco", matches: 6, goals: 6, logo: "/monaco.png" },
// //                 { player: "Lacazette", team: "Lyon", matches: 6, goals: 5, logo: "/lyon.png" },
// //                 { player: "Gonçalo Ramos", team: "PSG", matches: 6, goals: 4, logo: "/psg.png" },
// //                 { player: "David", team: "Lille", matches: 6, goals: 4, logo: "/lille.png" },
// //                 { player: "Vitinha", team: "PSG", matches: 6, goals: 3, logo: "/psg.png" },
// //                 { player: "Minamino", team: "Monaco", matches: 6, goals: 3, logo: "/monaco.png" },
// //                 { player: "Ounahi", team: "Marseille", matches: 6, goals: 2, logo: "/marseille.png" },
// //                 { player: "Cherki", team: "Lyon", matches: 6, goals: 2, logo: "/lyon.png" },
// //                 { player: "Moffi", team: "Nice", matches: 6, goals: 2, logo: "/nice.png" },
// //             ],
// //         },
// //     };


// //     const leagueData = leaguesData[activeLeague];

// //     return (
// //         <div className="gap-5 w-full my-2 flex-col lg:flex-row flex justify-center items-center text-white">

// //             {/*  LEAGUE TABLE */}
// //             <div className="shadow-lg  border p-3 font-sans bg-white rounded-[0.4rem] max-w-full w-full lg:p-2 mb-6">
// //                 <div className="flex flex-col pb-3 mb-3 gap-1 shadow-b-lg lg:m-6">
// //                     <h2 className="font-semibold flex justify-between text-2xl font-[Poppins] text-[#1F2128]">
// //                         League Table <FaTrophy className="text-[#D6AE3E]" />
// //                     </h2>
// //                     <div className="flex lg:justify-start gap-2 bg-[#E5E7EB]/80 w-full rounded-[0.4rem] p-1">
// //                         {leagues.map((lg) => (
// //                             <button
// //                                 key={lg}
// //                                 onClick={() => setActiveLeague(lg)}
// //                                 className={`px-3 py-2 text-lg rounded-[0.4em] transition-all ${activeLeague === lg ? "bg-[#D6AE3E] text-white" : "text-[#1A365D] hover:bg-[#1A365D]/20"
// //                                     }`}
// //                             >
// //                                 {lg}
// //                             </button>
// //                         ))}
// //                     </div>
// //                 </div>

// //                 <AnimatePresence mode="wait">
// //                     <motion.div
// //                         key={activeLeague + "league"}
// //                         initial={{ opacity: 0, y: 10 }}
// //                         animate={{ opacity: 1, y: 0 }}
// //                         exit={{ opacity: 0, y: -10 }}
// //                         transition={{ duration: 0.4 }}
// //                     >
// //                         {leagueData.league.length > 0 ? (
// //                             <div className="overflow-y-auto max-h-72 lg:max-h-96 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
// //                                 <table className="w-full text-lg text-left">
// //                                     <thead className="text-[#F3F4F6] sticky top-0 z-40 bg-[#1A365D] shadow-sm">
// //                                         <tr className="text-sm">
// //                                             <th className="py-2 px-1">Ps.</th>
// //                                             <th className="py-2 px-1">Team</th>
// //                                             <th className="py-2 px-1">PTS</th>
// //                                             <th className="py-2 px-1">W</th>
// //                                             <th className="py-2 px-1">D</th>
// //                                             <th className="py-2 px-1">L</th>
// //                                             <th className="py-2 px-1">GF/GA</th>
// //                                             <th className="py-2 px-1">GD</th>
// //                                         </tr>
// //                                     </thead>
// //                                     <tbody className="p-2 text-sm">
// //                                         {leagueData.league.map((item, i) => (
// //                                             <tr key={i} className="odd:bg-white even:bg-[#F3F4F680] border-[#1A365D]/20 border-b hover:scale-95 active:scale-95 overflow-hidden transition-transform duration-500 hover:bg-gray-50 ">
// //                                                 <td className="py-1 px-1 text-[#1A365D]">{item.rank}</td>
// //                                                 <td className="flex items-center gap-2 py-1 px-1 text-[#1A365D]/90">
// //                                                     <img src={item.logo} className="w-5 h-5 rounded-full" alt="" /> {item.team}
// //                                                 </td>
// //                                                 <td className="py-1 px-1 font-semibold text-[#1A365D]">{item.pts}</td>
// //                                                 <td className="py-1 px-1 text-[#1A365D]/90">{item.w}</td>
// //                                                 <td className="py-1 px-1 text-[#1A365D]/90">{item.d}</td>
// //                                                 <td className="py-1 px-1 text-[#1A365D]/90">{item.l}</td>
// //                                                 <td className="py-1 px-1 text-[#1A365D]/90">{item.gfga}</td>
// //                                                 <td className="py-1 px-1 text-green-600 font-medium">{item.gd}</td>
// //                                             </tr>
// //                                         ))}
// //                                     </tbody>
// //                                 </table>
// //                             </div>
// //                         ) : (
// //                             <div className="text-gray-400 text-center py-6 text-lg">No data available for {activeLeague}.</div>
// //                         )}
// //                     </motion.div>
// //                 </AnimatePresence>
// //             </div>

// //             {/*  TOP SCORERS*/}
// //             <div className="shadow-lg  p-3 font-sans bg-white rounded-[0.4rem] max-w-full w-full lg:p-2 lg:mb-6">
// //                 <div className="flex flex-col pb-3 mb-3 gap-1 shadow-b-lg lg:m-6">
// //                     <h2 className="font-semibold flex justify-between text-2xl font-[Poppins] text-[#1F2128]">
// //                         Top Scorers Table <FaCircleDot className="text-[#D6AE3E]" />
// //                     </h2>
// //                     <div className="flex lg:justify-start gap-2 bg-[#E5E7EB]/80 w-full rounded-[0.4rem] p-1">
// //                         {leagues.map((lg) => (
// //                             <button
// //                                 key={lg}
// //                                 onClick={() => setActiveLeague(lg)}
// //                                 className={`px-3 py-2 text-lg rounded-[0.4em] transition-all ${activeLeague === lg ? "bg-[#D6AE3E] text-white" : "text-[#1A365D] hover:bg-[#1A365D]/20"
// //                                     }`}
// //                             >
// //                                 {lg}
// //                             </button>
// //                         ))}
// //                     </div>
// //                 </div>

// //                 <AnimatePresence mode="wait">
// //                     <motion.div
// //                         key={activeLeague + "scorers"}
// //                         initial={{ opacity: 0, y: 10 }}
// //                         animate={{ opacity: 1, y: 0 }}
// //                         exit={{ opacity: 0, y: -10 }}
// //                         transition={{ duration: 0.4 }}
// //                     >
// //                         {leagueData.scorers.length > 0 ? (
// //                             <div className="overflow-y-auto max-h-72 lg:max-h-96 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
// //                                 <table className="w-full text-lg text-left">
// //                                     <thead className="text-[#F3F4F6] text-sm sticky z-40 top-0 bg-[#1A365D] shadow-sm">
// //                                         <tr>
// //                                             <th className="py-2 px-1">Player</th>
// //                                             <th className="py-2 px-1">Matches</th>
// //                                             <th className="py-2 px-1">Goals</th>
// //                                         </tr>
// //                                     </thead>
// //                                     <tbody className="p-2 text-sm ">
// //                                         {leagueData.scorers.map((item, i) => (
// //                                             <tr key={i} className="odd:bg-white even:bg-[#F3F4F680] border-[#1A365D]/20 border-b hover:bg-gray-50 hover:scale-95 active:scale-95 overflow-hidden transition-transform duration-500">
// //                                                 <td className="flex items-center gap-2 py-1 px-1">
// //                                                     <img src={item.logo} className="w-5 h-5 rounded-full" alt="" />
// //                                                     <div>
// //                                                         <div className="font-medium text-[#1A365D]">{item.player}</div>
// //                                                         <div className="text-xs text-[#1A365D]/80">{item.team}</div>
// //                                                     </div>
// //                                                 </td>
// //                                                 <td className="py-1 px-1 text-[#1A365D]/80">{item.matches}</td>
// //                                                 <td className="py-1 px-1 font-semibold text-[#D6AE3E]">{item.goals}</td>
// //                                             </tr>
// //                                         ))}
// //                                     </tbody>
// //                                 </table>
// //                             </div>
// //                         ) : (
// //                             <div className="text-gray-400 text-center py-6 text-lg">No data available for {activeLeague}.</div>
// //                         )}
// //                     </motion.div>
// //                 </AnimatePresence>
// //             </div>
// //         </div>
// //     );
// // }




// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaCircleDot, FaTrophy } from "react-icons/fa6";

// export default function LeagueTables() {
//     const [activeLeague, setActiveLeague] = useState("EPL");
//     const [leaguesData, setLeaguesData] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const leagues = ["EPL", "SPA", "ITA", "GER", "FRA"];

//     // Fetch leagues and standings
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const leaguesRes = await fetch(
//                     "https://twokw-backend.onrender.com/api/v1/football/leagues"
//                 );
//                 const leaguesJson = await leaguesRes.json();
//                 const leaguesList = leaguesJson.data.response; // adjust to API response

//                 const combinedData = {};

//                 // Fetch standings per league in parallel
//                 await Promise.all(
//                     leaguesList.map(async (league) => {
//                         const standingsRes = await fetch(
//                             `https://twokw-backend.onrender.com/api/v1/football/standings?league=${league.id}&season=2025`
//                         );
//                         const standingsJson = await standingsRes.json();
//                         const leagueStandings = standingsJson.data.response[0].league.standings[0];

//                         // Map standings for your table structure
//                         combinedData[league.code] = {
//                             league: leagueStandings.map((team) => ({
//                                 rank: team.rank,
//                                 team: team.team.name,
//                                 pts: team.points,
//                                 w: team.all.played_w,
//                                 d: team.all.played_d,
//                                 l: team.all.played_l,
//                                 gfga: `${team.all.goals.for}/${team.all.goals.against}`,
//                                 gd: team.goalsDiff >= 0 ? `+${team.goalsDiff}` : `${team.goalsDiff}`,
//                                 logo: team.team.logo,
//                             })),
//                             scorers: standingsJson.data.response[0].league.topScorers.map((player) => ({
//                                 player: player.player.name,
//                                 team: player.statistics[0].team.name,
//                                 matches: player.statistics[0].games.appearences,
//                                 goals: player.statistics[0].goals.total,
//                                 logo: player.statistics[0].team.logo,
//                             })),
//                         };
//                     })
//                 );

//                 setLeaguesData(combinedData);
//                 setLoading(false);
//             } catch (err) {
//                 console.error(err);
//                 setError("Failed to fetch league data");
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     if (loading) return <div className="text-center text-white py-20">Loading data...</div>;
//     if (error) return <div className="text-center text-red-500 py-20">{error}</div>;

//     const leagueData = leaguesData[activeLeague] || { league: [], scorers: [] };

//     return (
//         <div className="gap-5 w-full my-2 flex-col lg:flex-row flex justify-center items-center text-white">

//             {/* LEAGUE TABLE */}
//             <div className="shadow-lg border p-3 font-sans bg-white rounded-[0.4rem] max-w-full w-full lg:p-2 mb-6">
//                 <div className="flex flex-col pb-3 mb-3 gap-1 shadow-b-lg lg:m-6">
//                     <h2 className="font-semibold flex justify-between text-2xl font-[Poppins] text-[#1F2128]">
//                         League Table <FaTrophy className="text-[#D6AE3E]" />
//                     </h2>
//                     <div className="flex lg:justify-start gap-2 bg-[#E5E7EB]/80 w-full rounded-[0.4rem] p-1">
//                         {leagues.map((lg) => (
//                             <button
//                                 key={lg}
//                                 onClick={() => setActiveLeague(lg)}
//                                 className={`px-3 py-2 text-lg rounded-[0.4em] transition-all ${activeLeague === lg
//                                         ? "bg-[#D6AE3E] text-white"
//                                         : "text-[#1A365D] hover:bg-[#1A365D]/20"
//                                     }`}
//                             >
//                                 {lg}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 <AnimatePresence mode="wait">
//                     <motion.div
//                         key={activeLeague + "league"}
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         transition={{ duration: 0.4 }}
//                     >
//                         {leagueData.league.length > 0 ? (
//                             <div className="overflow-y-auto max-h-72 lg:max-h-96 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//                                 <table className="w-full text-lg text-left">
//                                     <thead className="text-[#F3F4F6] sticky top-0 z-40 bg-[#1A365D] shadow-sm">
//                                         <tr className="text-sm">
//                                             <th className="py-2 px-1">Ps.</th>
//                                             <th className="py-2 px-1">Team</th>
//                                             <th className="py-2 px-1">PTS</th>
//                                             <th className="py-2 px-1">W</th>
//                                             <th className="py-2 px-1">D</th>
//                                             <th className="py-2 px-1">L</th>
//                                             <th className="py-2 px-1">GF/GA</th>
//                                             <th className="py-2 px-1">GD</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody className="p-2 text-sm">
//                                         {leagueData.league.map((item, i) => (
//                                             <tr
//                                                 key={i}
//                                                 className="odd:bg-white even:bg-[#F3F4F680] border-[#1A365D]/20 border-b hover:scale-95 active:scale-95 overflow-hidden transition-transform duration-500 hover:bg-gray-50"
//                                             >
//                                                 <td className="py-1 px-1 text-[#1A365D]">{item.rank}</td>
//                                                 <td className="flex items-center gap-2 py-1 px-1 text-[#1A365D]/90">
//                                                     <img src={item.logo} className="w-5 h-5 rounded-full" alt="" /> {item.team}
//                                                 </td>
//                                                 <td className="py-1 px-1 font-semibold text-[#1A365D]">{item.pts}</td>
//                                                 <td className="py-1 px-1 text-[#1A365D]/90">{item.w}</td>
//                                                 <td className="py-1 px-1 text-[#1A365D]/90">{item.d}</td>
//                                                 <td className="py-1 px-1 text-[#1A365D]/90">{item.l}</td>
//                                                 <td className="py-1 px-1 text-[#1A365D]/90">{item.gfga}</td>
//                                                 <td className="py-1 px-1 text-green-600 font-medium">{item.gd}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         ) : (
//                             <div className="text-gray-400 text-center py-6 text-lg">
//                                 No data available for {activeLeague}.
//                             </div>
//                         )}
//                     </motion.div>
//                 </AnimatePresence>
//             </div>

//             {/* TOP SCORERS */}
//             <div className="shadow-lg p-3 font-sans bg-white rounded-[0.4rem] max-w-full w-full lg:p-2 lg:mb-6">
//                 <div className="flex flex-col pb-3 mb-3 gap-1 shadow-b-lg lg:m-6">
//                     <h2 className="font-semibold flex justify-between text-2xl font-[Poppins] text-[#1F2128]">
//                         Top Scorers Table <FaCircleDot className="text-[#D6AE3E]" />
//                     </h2>
//                 </div>

//                 <AnimatePresence mode="wait">
//                     <motion.div
//                         key={activeLeague + "scorers"}
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         transition={{ duration: 0.4 }}
//                     >
//                         {leagueData.scorers.length > 0 ? (
//                             <div className="overflow-y-auto max-h-72 lg:max-h-96 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//                                 <table className="w-full text-lg text-left">
//                                     <thead className="text-[#F3F4F6] text-sm sticky z-40 top-0 bg-[#1A365D] shadow-sm">
//                                         <tr>
//                                             <th className="py-2 px-1">Player</th>
//                                             <th className="py-2 px-1">Matches</th>
//                                             <th className="py-2 px-1">Goals</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody className="p-2 text-sm">
//                                         {leagueData.scorers.map((item, i) => (
//                                             <tr
//                                                 key={i}
//                                                 className="odd:bg-white even:bg-[#F3F4F680] border-[#1A365D]/20 border-b hover:bg-gray-50 hover:scale-95 active:scale-95 overflow-hidden transition-transform duration-500"
//                                             >
//                                                 <td className="flex items-center gap-2 py-1 px-1">
//                                                     <img src={item.logo} className="w-5 h-5 rounded-full" alt="" />
//                                                     <div>
//                                                         <div className="font-medium text-[#1A365D]">{item.player}</div>
//                                                         <div className="text-xs text-[#1A365D]/80">{item.team}</div>
//                                                     </div>
//                                                 </td>
//                                                 <td className="py-1 px-1 text-[#1A365D]/80">{item.matches}</td>
//                                                 <td className="py-1 px-1 font-semibold text-[#D6AE3E]">{item.goals}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         ) : (
//                             <div className="text-gray-400 text-center py-6 text-lg">
//                                 No data available for {activeLeague}.
//                             </div>
//                         )}
//                     </motion.div>
//                 </AnimatePresence>
//             </div>
//         </div>
//     );
// }

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCircleDot, FaTrophy } from "react-icons/fa6";

export default function LeagueTables() {
    const [activeLeague, setActiveLeague] = useState("EPL");
    const [leaguesData, setLeaguesData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Mapping your UI league codes to real league IDs used by the API
    const leagueMap = {
        EPL: 39,   // Example: Premier League
        SPA: 140,  // Example: La Liga
        ITA: 135,  // Serie A
        GER: 78,   // Bundesliga
        FRA: 61    // Ligue 1
    };

    const leagues = Object.keys(leagueMap);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const combinedData = {};

                await Promise.all(
                    leagues.map(async (lg) => {
                        const id = leagueMap[lg];

                        // fetch standings
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
                setError("Failed to fetch data");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="text-center text-white py-20">Loading data...</div>;
    if (error) return <div className="text-center text-red-500 py-20">{error}</div>;

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

