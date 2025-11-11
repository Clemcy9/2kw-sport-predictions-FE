import {useState } from "react";
// import AdminHeader from "./header";
import {FaTrash } from "react-icons/fa6";
import { Calendar, ChevronDown } from "lucide-react";
// import Sidebar from "./sidebar";

export default function Predictions() {

   
    const handleDelete = (id) => {
        setPredictions(predictions.filter((item) => item.id !== id));
    };

    const [predictions, setPredictions] = useState([
        {
            id: 1,
            league: "Premier League",
            date: "05 Oct 2025 19:00",
            homeTeam: "Everton",
            awayTeam: "Burnley",
            tip: "Free Tips",
            percentage: "12 (83.33%)",
        },
        {
            id: 2,
            league: "Premier League",
            date: "05 Oct 2025 19:00",
            homeTeam: "Everton",
            awayTeam: "Burnley",
            tip: "2 Odds",
            percentage: "12 (83.33%)",
        },
        {
            id: 3,
            league: "Premier League",
            date: "05 Oct 2025 19:00",
            homeTeam: "Everton",
            awayTeam: "Burnley",
            tip: "2.5 Goals",
            percentage: "12 (83.33%)",
        },
        {
            id: 4,
            league: "Premier League",
            date: "05 Oct 2025 19:00",
            homeTeam: "Everton",
            awayTeam: "Burnley",
            tip: "Double Chance",
            percentage: "12 (83.33%)",
        },
        {
            id: 5,
            league: "Premier League",
            date: "05 Oct 2025 19:00",
            homeTeam: "Everton",
            awayTeam: "Burnley",
            tip: "Free Tips",
        },
    ]);

    return (
        <div>
            <div className="flex mt-6">
                <div className="flex justify-center flex-col w-full sm:mx-5 sm:my-3">
                    <div className="flex justify-start font-semibold font-sans text-2xl w-full">
                        <h2 className=" font-semibold mb-4 text-left">Predictions Manager</h2>
                    </div>

                    <div className="flex justify-between w-full my-8">
                        <div className="relative w-50 flex justify-between items-center">
                            <input type="text" placeholder="11/04/2025" className="w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
                            <Calendar size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                        </div>
                        <div className="relative w-50  flex justify-between items-center">
                            <input type="text" placeholder="Free Tips" className="w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
                            <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                        </div>
                        <div className="relative w-50  flex justify-between items-center">
                            <input type="text" placeholder="Select League" className="w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
                            <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                        </div>
                        <div className="relative w-50">
                            <button className="bg-[#1A365D] text-white px-6 py-1.5 w-full rounded-[0.3em]">
                                Filter
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center flex-col items-center w-full sm:mx-5 sm:my-1">

                        <table className="w-full border-collapse ">
                            <thead>
                                <tr className="font-bold text-left text-[18px]">
                                    <th className="p-3">No.</th>
                                    <th className="p-3">League</th>
                                    <th className="p-3">Date/Time</th>
                                    <th className="p-3">Home</th>
                                    <th className="p-3">Away</th>
                                    <th className="p-3">Tips</th>
                                    <th className="p-3">Action</th>
                                </tr>
                            </thead>

                            <tbody className="">
                                {predictions.map((item, index) => (
                                    <tr key={item.id} className=" leading-tight">
                                        <td className="py-7">{index + 1}</td>
                                        <td className="py-7">{item.league}</td>
                                        <td className="py-7">{item.date}</td>
                                        <td className="py-7">
                                            <span className=" font-semibold">🛡️</span>
                                            {item.awayTeam}
                                        </td>
                                        <td className="py-7">
                                            <span className=" font-semibold">⚽</span>
                                            {item.homeTeam}
                                        </td>

                                        <td className="py-7">{item.tip}</td>
                                        <td className="py-7">
                                            <button
                                                className="text-[#FB3B3B] hover:text-red-800 transition"
                                                onClick={() => handleDelete(item.id)}
                                            >
                                                <FaTrash size={14} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
