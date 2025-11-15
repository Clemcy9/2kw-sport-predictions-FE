import {useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { FaArrowTrendUp, FaCheck, FaUser, FaTrash } from "react-icons/fa6";

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
        {
            id: 6,
            league: "Premier League",
            date: "05 Oct 2025 19:00",
            homeTeam: "Everton",
            awayTeam: "Burnley",
            tip: "Free Tips",
        },
        {
            id: 7,
            league: "Premier League",
            date: "05 Oct 2025 19:00",
            homeTeam: "Everton",
            awayTeam: "Burnley",
            tip: "Free Tips",
        },
        {
            id: 8,
            league: "Premier League",
            date: "05 Oct 2025 19:00",
            homeTeam: "Everton",
            awayTeam: "Burnley",
            tip: "Free Tips",
        },
    ]);

    return (
            <div className="p-4 lg:p-0 lg:min-h-screen flex flex-col w-full">
                <div className="lg:flex lg:justify-center w-full my-5 space-y-4 lg:space-y-0 lg:my-10 grid grid-cols-1 grid-rows-2 lg:gap-24">
                        <div className="col-span-2 w-full lg:p-4 p-6 bg-[#F3F8FF] text-[#1A365D] rounded-[0.4rem] lg:w-64 ">
                            <h2 className="text-xl font-extralight font-sans mb-4 flex  justify-between lg:items-center gap-2">Total Predictions
                                <FaArrowTrendUp className="text-[#D6AE3E]" />
                            </h2>

                            <div className="text-4xl font-bold">

                                <motion.span className="text-">{statistics1}</motion.span>
                            </div>
                        </div>
                    <div className="flex gap-3 py-2 lg:py-0 lg:gap-24 justify-between lg:justify-center">
                        <div className=" lg:mr-1 lg:p-4 p-3 bg-[#F3F8FF] text-[#1A365D] rounded-[0.4rem] lg:w-64 w-full">
                            <h2 className="text-xl font-extralight font-sans mb-4 flex  justify-between items-center gap-2">Accuracy Rate
                                <span className="w-6 h-6 border-2 border-[#D6AE3E]"> <FaCheck className="text-[#D6AE3E]" /></span>
                            </h2>

                            <div className="text-4xl font-bold">

                                <motion.span className="text-">{statistics2}</motion.span>
                            </div>
                        </div>
                        <div className="lg:ml-1 lg:p-4 p-3 bg-[#F3F8FF] text-[#1A365D] rounded-[0.4rem] lg:w-64 w-full">
                            <h2 className="text-xl font-extralight font-sans mb-4 flex  justify-between items-center gap-2">Active Users
                                <FaUser className="text-[#D6AE3E]" />
                            </h2>

                            <div className="text-4xl font-bold">

                                <motion.span className="text-">{statistics3}</motion.span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start mt-4 font-semibold font-sans text-2xl w-full lg:px-10">
                    <h2 className=" lg:font-semibold font-bold font-[Inria Sans] text-left">Recent Predictions</h2>
                </div>
                   <div className="flex justify-center flex-col items-center w-full  my-1 lg:px-10">
                        <table className="hidden md:block w-full border-collapse ">
                            <thead>
                                <tr className="font-bold text-left text-[18px]">
                                    <th className="py-3">No.</th>
                                    <th className="py-3">League</th>
                                    <th className="py-3">Date/Time</th>
                                    <th className="py-3">Home</th>
                                    <th className="py-3">Away</th>
                                    <th className="py-3">Tips</th>
                                    <th className="py-3">Action</th>
                                </tr>
                            </thead>

                            <tbody className="">
                                {predictions.map((item, index) => (
                                    <tr key={item.id} className=" leading-tight">
                                        <td className="py-5">{index + 1}</td>
                                        <td className="py-5">{item.league}</td>
                                        <td className="py-5">{item.date}</td>
                                        <td className="py-5">
                                            <span className=" font-semibold">🛡️</span>
                                            {item.awayTeam}
                                        </td>
                                        <td className="py-5">
                                            <span className=" font-semibold">⚽</span>
                                            {item.homeTeam}
                                        </td>

                                        <td className="py-5">{item.tip}</td>
                                        <td className="py-5">
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
    );
}
