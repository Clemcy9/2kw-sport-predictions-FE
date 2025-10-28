import {useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import AdminHeader from "./header";
import { FaArrowTrendUp, FaCheck, FaUser, FaTrash } from "react-icons/fa6";
import Sidebar from "./sidebar";

export default function DashBoard() {

   const numbers = [12485, 82, 3247];

   const count1 = useMotionValue(0);
   const count2 = useMotionValue(0);
   const count3 = useMotionValue(0);

   const statistics1 = useTransform(count1, (value) =>Math.floor(value).toLocaleString() );
   const statistics2 = useTransform(count2, (value) =>Math.floor(value).toLocaleString() + "%" );
   const statistics3 = useTransform(count3, (value) =>Math.floor(value).toLocaleString() );

   useEffect(() => {
       animate(count1, numbers[0], {duration: 2, ease: "easeOut"});
       animate(count2, numbers[1], {duration: 2, ease: "easeOut"});
       animate(count3, numbers[2], {duration: 2, ease: "easeOut"});
    }, []);

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
            <AdminHeader />
            <div className="flex">
                <div>
               <Sidebar />
                </div>
                <div className="flex justify-center flex-col items-center w-full sm:mx-5 sm:my-3 ">
                    <div className="flex justify-between gap-6 w-full sm:h-28 sm:m-10">
                        <div className="p-4 bg-[#F3F8FF] text-[#1A365D] rounded-[0.4rem] w-60 ">
                            <h2 className="text-xl font-extralight font-sans mb-4 flex justify-center items-center gap-2">Total Predictioms
                                <FaArrowTrendUp className="text-[#D6AE3E]" />
                            </h2>

                            <div className="text-4xl font-bold">

                                <motion.span className="text-">{statistics1}</motion.span>
                            </div>
                        </div>
                        <div className="p-4 bg-[#F3F8FF] text-[#1A365D] rounded-[0.4rem] w-60 ">
                            <h2 className="text-xl font-extralight font-sans mb-4 flex justify-center items-center gap-2">Accuracy Rate
                                <span className="w-6 h-6 border-2 border-[#D6AE3E]"> <FaCheck className="text-[#D6AE3E]" /></span>
                            </h2>

                            <div className="text-4xl font-bold">

                                <motion.span className="text-">{statistics2}</motion.span>
                            </div>
                        </div>
                        <div className="p-4 bg-[#F3F8FF] text-[#1A365D] rounded-[0.4rem] w-60 ">
                            <h2 className="text-xl font-extralight font-sans mb-4 flex justify-center items-center gap-2">Active Users
                                <FaUser className="text-[#D6AE3E]" />
                            </h2>

                            <div className="text-4xl font-bold">

                                <motion.span className="text-">{statistics3}</motion.span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start font-semibold font-sans text-2xl w-full">
                        <h2 className=" font-semibold mb-4 text-left">Recent Predictions</h2>

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
