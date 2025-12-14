import {useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { FaArrowTrendUp, FaCheck, FaUser, FaTrash } from "react-icons/fa6";
import { FaSpinner } from "react-icons/fa";
// import { FaMinus, FaPlus, FaPlusSquare } from "react-icons/fa";
// import { X } from "lucide-react";

export default function DashBoard() {

   const numbers = [12485, 82, 3247];
    // const [modal, setModal] = useState(false);
    // const [action, setAction] = useState(null);
    const [close, setClose] = useState(true);

    // const handle_close = (e) => {
    //     e.preventDefault();
    //     setClose(!close)

    // };

    
    const [prediction, setPrediction] = useState([]);
    const [loading, setLoading] = useState(true);
;

    const token = localStorage.getItem("authToken");



    const handle_delete = async (e, id) => {
        e.preventDefault();

        try {
            const res = await fetch(`https://twokw-backend.onrender.com/api/v1/admin/predictions/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Failed to delete prediction");
            }
            setPrediction(prev =>
                prev.filter(item => item._id !== id));

        } catch (err) {
            console.error("error while deleting a prediction", err)
        }
    }




    // const handleDelete = (id) => {
    //     setPrediction(prediction.filter((item) => item.id !== id));
    // };

    useEffect(() => {

        if (!token) return;

        fetch("https://twokw-backend.onrender.com/api/v1/admin/predictions",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                const preds = data?.data || [];
                setPrediction(preds);
                console.log("all predictions from preds", preds)
                console.log("predictions", prediction)
                setLoading(false);
            });
    }, [token]);


    const stats = {
        total: prediction.length,
        accuracy: "",
        active: "",
    }

    const x = useMotionValue(0);
    const dragLength = -150;

    const count1 = useMotionValue(0);
    const count2 = useMotionValue(0);
    const count3 = useMotionValue(0);


    const statistics1 = useTransform(count1, (value) => Math.floor(value).toLocaleString());
    const statistics2 = useTransform(count2, (value) => Math.floor(value).toLocaleString() + "%");
    const statistics3 = useTransform(count3, (value) => Math.floor(value).toLocaleString());

    useEffect(() => {
        animate(count1, stats.total, { duration: 2, ease: "easeOut" });
        animate(count2, numbers[1], { duration: 2, ease: "easeOut" });
        animate(count3, numbers[2], { duration: 2, ease: "easeOut" });
    }, []);



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

    if (loading) return <div className="text-center text-[#1A365D] py-20 flex justify-center items-center"><span><FaSpinner className="animate-spin" /> </span> Loading data...</div>;

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
                            <th className="py-3">Prob</th>
                            <th className="py-3">Action</th>
                        </tr>
                    </thead>

                    <tbody >
                        {prediction.map((item, index) => (
                            <tr key={item.id} className="relative leading-tight">
                                <div className="lg:hidden absolute right-0 top-15 h-full flex z-0">
                                    <button onClick={(e) => handle_delete(e, item._id)}
                                        className="w-20 text-red-600 hover:text-red-800 flex flex-col items-center transition"

                                    >
                                        <FaTrash size={18} />
                                        <span className="text-lg text-red-600">Delete</span>
                                    </button>
                                </div>
                                <motion.div drag="x" dragConstraints={{ left: dragLength, right: 0 }} className="z-40  relative bg-white cursor-grab active:cursor-grabbing  lg:grid lg:grid-cols-11 w-full flex flex-row lg:gap-0 lg:justify-between gap-5  lg:border-none border p-2 lg:p-0 rounded-xl my-4 active:border-[#1A365D] lg:active:hidden active:scale-105 active:shadow-xl lg:my-0 border-[#1A365D99]">
                                    <div className="lg:col-span-4 flex-col hidden lg:flex items-start gap-6 lg:flex-row w-full lg:justify-between justify-center ">
                                        <td className="py-5 hidden lg:block ">{index + 1}</td>
                                        <td className="py-5 hidden lg:block ">{item.fixture.league.name}</td>
                                        <td className="py-5 hidden lg:flex ">{new Date(item.fixture.fixture.date).toLocaleDateString([], {
                                            day: "2-digit",
                                            month: "2-digit",
                                        })} -
                                            {new Date(item.fixture.fixture.date).toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}</td>
                                    </div>
                                    <div className="col-span-3 w-full px-10 flex font-light font-sans lg:text-lg lg:font-normal text-xs text-[#737373] lg:flex-row flex-col lg:w-full lg:justify-between lg:gap-14">
                                        <td className="py-1 lg:hidden text-lg font-[Sora] font-semibold text-[#1B1B1BCC]">{item.fixture.league.name}</td>
                                        <td className="py-1  font-sans lg:text-right font-normal text-lg text-black">
                                            <img className="w-4 h-4"
                                                src={item.fixture.teams.away.logo}
                                                alt={item.fixture.teams.away.name}></img>
                                            {item.fixture.teams.away.name}
                                        </td>
                                        <td className="py-1  font-sans font-normal lg:text-right text-lg text-black">
                                            <img className="w-4 h-4"
                                                src={item.fixture.teams.home.logo}
                                                alt={item.fixture.teams.home.name} ></img>
                                            {item.fixture.teams.home.name}
                                        </td>
                                    </div>

                                    <div className="col-span-4 flex gap-1 font-light font-sans justify-end  lg:text-lg lg:font-normal text-xs text-[#737373] lg:flex-row flex-col lg:w-full lg:pl-15 lg:justify-between ">
                                        <td className="py-1 text-right w-20 lg:hidden">{new Date(item.fixture.fixture.date).toLocaleDateString([], {
                                            day: "2-digit",
                                            month: "2-digit",
                                        })}
                                            {new Date(item.fixture.fixture.date).toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </td>
                                        <td className="py-1 text-right lg:text-center w-full lg:w-fit ">{item.bets[0].values[0].odd}</td>
                                        <td className="py-1 text-right lg:text-center w-full lg:w-fit ">{item.bets[0].values[0].percentage}</td>
                                        <td className=" py-1 hidden lg:block">
                                            <button onClick={(e) => handle_delete(e, item._id)}
                                                className="text-[#FB3B3B] hover:text-red-800 transition"

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
