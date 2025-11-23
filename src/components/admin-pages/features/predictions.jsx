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
            percentage: "12 (83.33%)",
        },
        {
            id: 6,
            league: "Premier League",
            date: "05 Oct 2025 19:00",
            homeTeam: "Everton",
            awayTeam: "Burnley",
            tip: "Free Tips",
            percentage: "12 (83.33%)",
        },
        {
            id: 7,
            league: "Premier League",
            date: "05 Oct 2025 19:00",
            homeTeam: "Everton",
            awayTeam: "Burnley",
            tip: "Free Tips",
            percentage: "12 (83.33%)",
        },
        {
            id: 8,
            league: "Premier League",
            date: "05 Oct 2025 19:00",
            homeTeam: "Everton",
            awayTeam: "Burnley",
            tip: "Free Tips",
            percentage: "12 (83.33%)",
        },
        {
            id: 9,
            league: "Premier League",
            date: "05 Oct 2025 19:00",
            homeTeam: "Everton",
            awayTeam: "Burnley",
            tip: "Free Tips",
            percentage: "12 (83.33%)",
        },
    ]);

    return (
              <div className="p-4 lg:px-10 lg:min-h-screen flex flex-col w-full">
                   <div className="flex justify-start font-semibold font-sans text-2xl w-full lg:my-6">
                       <h2 className="lg:font-semibold font-bold font-[Inria Sans] mb-4 text-left">Predictions Manager</h2>
                    </div>

                    <div className="flex justify-between gap-3 lg:gap-0 w-full lg:my-4 ">
                        <div className="relative lg:w-50 w-full flex justify-between items-center">
                            <input type="text" placeholder="11/04/2025" className="w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
                            <Calendar size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                        </div>
                        <div className="relative lg:w-50 w-full  flex justify-between items-center">
                            <input type="text" placeholder="Free Tips" className="w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
                            <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                        </div>
                        <div className="relative lg:w-50 w-full  flex justify-between items-center">
                            <input type="text" placeholder="Select League" className="w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
                            <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                        </div>
                        <div className="hidden lg:block relative w-50">
                            <button className=" bg-[#1A365D] text-white px-6 py-1.5 w-full rounded-[0.3em]">
                                Filter
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center flex-col items-center w-full">

                        <table className=" w-full border-collapse ">
                            <thead>
                                <tr className="font-bold text-left text-lg hidden lg:flex justify-center lg:justify-between w-full">
                                    <th className="py-3">No.</th>
                                    <th className="py-3">League</th>
                                    <th className="py-3">Date/Time</th>
                                    <th className="py-3">Home</th>
                                    <th className="py-3">Away</th>
                                    <th className="py-3">Tips</th>
                                    <th className="py-3">Prop%</th>
                                    <th className="py-3">Action</th>
                                </tr>
                            </thead>

                            <tbody >
                        {predictions.map((item, index) => (
                            <tr key={item.id} className=" leading-tight">
                                <div className="lg:grid lg:grid-cols-11 w-full flex flex-row lg:gap-0 lg:justify-between gap-5  lg:border-none border p-2 lg:p-0 rounded-xl my-4 active:border-[#1A365D] lg:active:hidden active:scale-105 active:shadow-xl lg:my-0 border-[#1A365D99]">
                                    <div className="lg:col-span-4 flex-col hidden lg:flex items-start gap-6 lg:flex-row w-full lg:justify-between justify-center ">
                                        <td className="py-5 hidden lg:block ">{index + 1}</td>
                                        <td className="py-5 hidden lg:block ">{item.league}</td>
                                        <td className="py-5 hidden lg:flex ">{item.date}</td>
                                    </div>
                                    <div className="col-span-3 w-full flex font-light font-sans lg:text-lg lg:font-normal text-xs text-[#737373] lg:flex-row flex-col lg:w-full lg:justify-center lg:gap-14">
                                        <td className="py-1 lg:hidden text-lg font-[Sora] font-semibold text-[#1B1B1BCC]">{item.league}</td>
                                        <td className="py-1  font-sans lg:text-right font-normal text-lg text-black">
                                            <span className="font-semibold">🛡️</span>
                                            {item.awayTeam}
                                        </td>
                                        <td className="py-1  font-sans font-normal lg:text-right text-lg text-black">
                                            <span className="font-semibold">⚽</span>
                                            {item.homeTeam}
                                        </td>
                                    </div>

                                    <div className="col-span-4 flex gap-1 font-light font-sans justify-end  lg:text-lg lg:font-normal text-xs text-[#737373] lg:flex-row flex-col lg:w-full lg:justify-between pl-6">
                                        <td className="py-1 text-right w-20 lg:w-auto lg:hidden">{item.date}</td>
                                        <td className="py-1 text-right lg:text-center w-full lg:w-fit ">{item.tip}</td>
                                        <td className="py-1 ">{item.percentage}</td>
                                        <td className=" py-1 hidden lg:block">
                                            <button
                                                className="text-[#FB3B3B] hover:text-red-800 transition"
                                                onClick={() => handleDelete(item.id)}
                                            >
                                                <FaTrash size={14} />
                                            </button>
                                        </td>
                                    </div>
                                </div>
                            </tr>
                        ))}
                    </tbody>
                        </table>
                    </div>
                </div>
    );
}
