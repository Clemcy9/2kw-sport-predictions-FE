import {useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { FaArrowTrendUp, FaCheck, FaUser, FaTrash } from "react-icons/fa6";
import { FaMinus, FaPlus, FaPlusSquare } from "react-icons/fa";
import { X } from "lucide-react";

export default function DashBoard() {

   const numbers = [12485, 82, 3247];
    const [modal, setModal] = useState(false);
    const [action, setAction] = useState(null);
    const [close, setClose] = useState(true);

    const handle_close = (e) => {
        e.preventDefault();
        setClose(!close)

    };

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
                                        className="w-20   text-red-600 hover:text-red-800 flex flex-col items-center transition"
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        <FaTrash size={18} />
                                        <span className="text-lg text-red-600">Delete</span>
                                    </button>
                                </div>
                                <motion.td drag="x" dragConstraints={{left: dragLength, right:0}} className="z-40  relative bg-white cursor-grab active:cursor-grabbing lg:grid lg:grid-cols-9 w-full flex flex-row lg:gap-0 lg:justify-between gap-5  lg:border-none border p-2 lg:p-0 rounded-xl my-4 lg:my-0 lg:active:hidden active:border-[#1A365D] active:scale-105 active:shadow-xl border-[#1A365D99]">
                                    <div className="lg:col-span-4  flex-col hidden lg:flex items-start gap-6 lg:flex-row w-full lg:justify-between justify-center ">
                                        <div className="py-5 hidden lg:block ">{index + 1}</div>
                                        <div className="py-5 hidden lg:block ">{item.league}</div>
                                        <div className="py-5 hidden lg:flex ">{item.date}</div>
                                    </div>
                                    <div className="col-span-3 w-full flex font-light font-sans lg:text-lg lg:font-normal text-xs text-[#737373] lg:flex-row flex-col lg:w-full lg:justify-center lg:gap-14">
                                        <div className="py-1 lg:hidden text-lg font-[Sora] font-semibold text-[#1B1B1BCC]">{item.league}</div>
                                        <div className="py-1  font-sans lg:text-right font-normal text-lg text-black">
                                            <span className="font-semibold">🛡️</span>
                                            {item.awayTeam}
                                        </div>
                                        <div className="py-1  font-sans font-normal lg:text-right text-lg text-black">
                                            <span className="font-semibold">⚽</span>
                                            {item.homeTeam}
                                        </div>
                                    </div>

                                    <div className="col-span-2  flex gap-1 font-light font-sans justify-end  lg:text-lg lg:font-normal text-xs text-[#737373] lg:flex-row flex-col lg:w-full  lg:gap-26">
                                        <div className="py-1 text-right w-20 lg:w-auto lg:hidden">{item.date}</div>
                                        <div className="py-1 text-right lg:text-center w-full lg:w-fit ">{item.tip}</div>
                                        <div className=" py-1 hidden lg:block">
                                            <button
                                                className="text-[#FB3B3B] hover:text-red-800 transition"
                                                onClick={() => handleDelete(item.id)}
                                            >
                                                <FaTrash size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button onClick={(item) => { setAction(item); setModal(true); }}
                className=" text-[#04BA4A] transition"
                >
                <FaPlusSquare size={18} />
            </button>


            {modal && action && (
                <main onClick={() => setModal(false)} className=" fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                    <div onClick={(e) => e.stopPropagation()} className="sm:w-full min-h-screen lg:w-auto lg:min-h-auto pt-4 bg-white lg:rounded-xl px-2 py-4 flex-col flex">

                        <div className="flex justify-between  w-full">
                            <p className="lg:py-5 lg:flex lg:items-start lg:justify-start font-semibold flex-col  lg:w-full justify-center items-center lg:max-w-auto lg:flex-row p-3">
                                <h2>Make Predictions For </h2>
                                <h2 className="flex px-1">Dundely Fc<span className="px-2 font-semibold">vs</span>Chizy Fc</h2>
                            </p>
                            <button onClick={() => setModal(false)} className="flex p-3 font-bold">
                                < X size={20} />
                            </button>
                        </div>

                        <div className="flex-col sm:flex-row flex lg:flex-row sm:gap-2 gap-4">
                            <form action="" className=" ">
                            <section className="bg-[#EEF0F3] min-w-1/2 w-full rounded-xl px-2 py-4">
                                <div className="w-full flex flex-col">
                                    <div className="flex justify-between w-full items-center py-3">
                                        <p className="flex justify-center items-center"><span className="flex flex-col"><img className="w-10 h-10" />Dundely FC </span></p>
                                        <span>VS</span>
                                        <p className="flex justify-center items-center"> <span className="flex flex-col"><img className="w-10 h-10" />Chizy Fc </span></p>
                                    </div>
                                        <div className="bg-[#D6AE3E] w-full min-w-full rounded-t-xl text-black flex items-center justify-between p-2">
                                            <h3>Predictions</h3>
                                            <div role="button" onClick={handle_close} className="cursor-pointer  flex items-center justify-center">
                                                {close ?
                                                    <FaPlus /> : <FaMinus />
                                                }
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            {close && (
                                                <motion.div
                                                    className="w-full flex flex-col gap-2 items-center"
                                                    initial={{ opacity: 0, y: 40 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6 }}
                                                >
                                                    <div className="p-3 grid grid-cols-2  flex-wrap rounded-b-xl bg-white gap-6 flex-shrink-0 min-w-full w-full">
                                                        <div className="flex flex-col justify-start items-start max-w-full w-full">
                                                            <label htmlFor="">Free Tips</label>
                                                            <input type="text" placeholder="Select" className="w-full border border-[#737373] p-2 rounded-sm" />
                                                        </div>
                                                        <div className="flex flex-col justify-start items-start max-w-full w-full">
                                                            <label htmlFor="">Super Single Tip</label>
                                                            <input type="text" placeholder="Select" className="w-full border border-[#737373] p-2 rounded-sm" />
                                                        </div>
                                                        <div className="flex flex-col justify-start items-start max-w-full w-full">
                                                            <label htmlFor=""> Free 2 Odds</label>
                                                            <input type="text" placeholder="Select" className="w-full border border-[#737373] p-2 rounded-sm" />
                                                        </div>
                                                        <div className="flex flex-col justify-start items-start max-w-full w-full">
                                                            <label htmlFor="">Sure Predict</label>
                                                            <input type="text" placeholder="Select" className="w-full border border-[#737373] p-2 rounded-sm" />
                                                        </div>
                                                    </div>
                                                </motion.div>

                                            )}
                                        </div>
                                </div>

                            </section>
                                        <section className="py-6 flex justify-center items-center gap-4 max-w-96">
                                            <button className="rounded-xl bg-[#1A365D] px-3 py-2 text-white w-full">
                                                Save Prediction
                                            </button>
                                            <button className="rounded-xl bg-white border border-[#1A365D] text-[#1A365D] px-3 py-2 w-full">
                                                Cancel
                                            </button>
                                        </section>
                            </form>

                            <div className=" lg:w-auto min-w-1/2">
                                <h3 className="text-[#1A365D] pb-3 px-6 font-semibold">Odds & Probabilities</h3>

                                <table className="w-full px-4 ">
                                    <thead>
                                        <tr>
                                            <th className="text-left sm:px-1 px-6">Market</th>
                                            <th className="text-left sm:px-1 px-6">Odds</th>
                                            <th className="text-left sm:px-1 px-6">Prob%</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-7 sm:px-1 py-2">1</td>

                                            <td className="px-7 sm:px-1 py-2">x 6.5</td>

                                            <td className="px-7 sm:px-1 py-2"> 30% </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            )}
        </div>
    );
}
