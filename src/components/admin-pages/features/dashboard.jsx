import {useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { FaArrowTrendUp, FaCheck, FaUser, FaTrash } from "react-icons/fa6";

export default function DashBoard() {

   const numbers = [12485, 82, 3247];

   const count1 = useMotionValue(0);
   const count2 = useMotionValue(0);
   const count3 = useMotionValue(0);
   const x = useMotionValue(0);
   const dragLength = -150;

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


    // useEffect(() => {
    //     try {
    //         fetch("https://api.example.com/predictions") // Replace with your API
    //             .then((res) => {
    //                 if (!res.ok) throw new Error("Failed to fetch predictions");
    //                 return res.json();
    //             })
    //             .then((data) => setPredictions(data))
    //             .catch((err) => setError(err.message));
    //     } catch (err) {
    //         setError(err.message);
    //     }
    // }, []);

    return (
        <div className="p-4 lg:p-0 lg:min-h-screen sm:min-h-screen flex flex-col w-full">
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
            <div className="flex lg:px-12 justify-center flex-col items-center w-full">

                <table className=" w-full border-collapse ">
                    <thead>
                        <tr className="font-bold text-left text-lg hidden lg:flex justify-center lg:justify-between  w-full">
                            <th className="py-3">No.</th>
                            <th className="py-3">League</th>
                            <th className="py-3">Date/Time</th>
                            <th className="py-3">Home</th>
                            <th className="py-3">Away</th>
                            <th className="py-3">Tips</th>
                            <th className="py-3">Action</th>
                        </tr>
                    </thead>

                    <tbody >
                        {predictions.map((item, index) => (
                            <tr key={item.id} className="relative leading-tight">
                                <div className="lg:hidden absolute right-0 top-15 h-full flex z-0">
                                    <button
                                        className="w-20  bg-black text-red-600 hover:text-red-800 flex flex-col items-center transition"
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        <FaTrash size={18} />
                                        <span className="text-lg text-red-600">Delete</span>
                                    </button>
                                </div>
                                <motion.div drag="x" dragConstraints={{left: dragLength, right:0}} className="z-40  relative bg-white cursor-grab active:cursor-grabbing lg:grid lg:grid-cols-9 w-full flex flex-row lg:gap-0 lg:justify-between gap-5  lg:border-none border p-2 lg:p-0 rounded-xl my-4 lg:my-0 lg:active:hidden active:border-[#1A365D] active:scale-105 active:shadow-xl border-[#1A365D99]">
                                    <div className="lg:col-span-4  flex-col hidden lg:flex items-start gap-6 lg:flex-row w-full lg:justify-between justify-center ">
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

                                    <div className="col-span-2  flex gap-1 font-light font-sans justify-end  lg:text-lg lg:font-normal text-xs text-[#737373] lg:flex-row flex-col lg:w-full  lg:gap-26">
                                        <td className="py-1 text-right w-20 lg:w-auto lg:hidden">{item.date}</td>
                                        <td className="py-1 text-right lg:text-center w-full lg:w-fit ">{item.tip}</td>
                                        <td className=" py-1 hidden lg:block">
                                            <button
                                                className="text-[#FB3B3B] hover:text-red-800 transition"
                                                onClick={() => handleDelete(item.id)}
                                            >
                                                <FaTrash size={14} />
                                            </button>
                                        </td>
                                    </div>
                                </motion.div>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
