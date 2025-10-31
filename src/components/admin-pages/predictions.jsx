import {useState } from "react";
import AdminHeader from "./header";
import {FaTrash } from "react-icons/fa6";
import Sidebar from "./sidebar";

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
        <div className="">
            <AdminHeader />
            <div className=" hidden md:flex">
                <div>
               <Sidebar />
                </div>

                <div className="flex justify-center flex-col items-center w-full sm:mx-5 sm:my-3">
                    <div className="flex justify-start font-semibold font-sans text-2xl w-full">
                        <h2 className=" font-semibold mb-4 text-left">Predictions Manager</h2>

                    </div>
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
    );
}
