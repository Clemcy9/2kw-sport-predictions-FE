import {useState } from "react";
// import AdminHeader from "./header";
import {FaTrash } from "react-icons/fa6";
import { Calendar, ChevronDown } from "lucide-react";
import { motion, useMotionValue} from "framer-motion";
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
// import Sidebar from "./sidebar";

export default function Predictions() {

      const [prediction, setPrediction] = useState([]);
      const [loading, setLoading] = useState(true);

       const today = new Date().toISOString().split("T")[0];
        const [date, setDate] = useState(today);
        const [byName, setByName] = useState("");
        const [byDate, setByDate] = useState(date);
        const [byLeague, setByLeague] = useState("");
    //   const [error, setError] = useState(null);

    const token = localStorage.getItem("authToken");

    // this variabkes helps the slide to action feature
      const x = useMotionValue(0);
       const dragLength = -150;

   
    // const handleDelete = (id) => {
    //     setPrediction(prediction.filter((item) => item.id !== id));
    // };


    const handle_delete  = async (e, id) =>{
        e.preventDefault();

        try{
            const res = await fetch(`https://twokw-backend.onrender.com/api/v1/admin/predictions/${id}`,
                {
                    method: "DELETE",
                    headers:{
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await res.json();

            if(!res.ok) {
                throw new Error(data.message || "Failed to delete prediction");
            }
            setPrediction(prev => 
                prev.filter(item => item._id !== id));

        }catch (err) {
            console.error("error while deleting a prediction", err)
        }
    }

    useEffect(() => {

        if(!token) return;

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
                setPrediction(data?.data || []);
                console.log("all predictions", data)
                console.log("predictions", prediction)
                setLoading(false);
            });
    }, [token]);

        // implementing search logic
      const all_predictions = prediction.filter((item) => {
        const name = byName.toLowerCase();
        const league = byLeague.toLowerCase();
    
        const use_name =
          item.fixture.teams.away.name .toLowerCase().includes(name) ||
          item.fixture.teams.home.name.toLowerCase().includes(name);
    
          const use_league = item.fixture.league.name.toLowerCase().includes(league);
    
          const use_date = byDate ? item.fixture.fixture.date.startsWith(byDate) : true;
    
        return use_name && use_league && use_date;
      });

    // const all_predictions = async (e) => {
    //     e.preventDefault();

    //     try{
    //         const res = await fetch( "")
    //     }
    // }

    if (loading) return <div className="text-center text-[#1A365D] py-20 flex justify-center items-center"><span><FaSpinner className="animate-spin" /> </span> Loading data...</div>;

          return (
              <div className="p-4 lg:px-10 lg:min-h-screen flex flex-col w-full">
                   <div className="flex justify-start font-semibold font-sans text-2xl w-full lg:my-6">
                       <h2 className="lg:font-semibold font-bold font-[Inria Sans] mb-4 text-left">Predictions Manager</h2>
                    </div>

                    <div className="flex justify-between gap-3 lg:gap-0 w-full lg:my-4 ">
                        <div className="relative lg:w-50 w-full flex justify-between items-center">
                          <input value={byDate}
                              onKeyDown={(e) =>
                                  e.key === "Enter key" && console.log("Enter pressed for date")
                              }
                              onChange={(e) => setByDate(e.target.value)} type="text" placeholder="11/04/2025" className="w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
                            <Calendar size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                        </div>
                        <div className="relative lg:w-50 w-full  flex justify-between items-center">
                          <input type="text" value={byName}
                              onKeyDown={(e) =>
                                  e.key === "Enter" && console.log("Enter pressed for name")
                              }
                              onChange={(e) => setByName(e.target.value)} placeholder="Select Name" className="w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
                            <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                        </div>
                        <div className="relative lg:w-50 w-full  flex justify-between items-center">
                          <input value={byLeague}
                              onKeyDown={(e) =>
                                  e.key === "Enter" && console.log("Enter pressed for league")
                              }
                              onChange={(e) => setByLeague(e.target.value)} type="text" placeholder="Select League" className="w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
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
                        {all_predictions.map((item, index) => (
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
                                    <div className="col-span-3 w-full flex font-light font-sans lg:text-lg lg:font-normal text-xs text-[#737373] lg:flex-row flex-col lg:w-full lg:justify-center lg:gap-14">
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

                                    <div className="col-span-4 flex gap-1 font-light font-sans justify-end  lg:text-lg lg:font-normal text-xs text-[#737373] lg:flex-row flex-col lg:w-full lg:justify-between pl-6">
                                        <td className="py-1 text-right w-20 lg:w-auto lg:hidden">{new Date(item.fixture.fixture.date).toLocaleDateString([], {
                                            day: "2-digit",
                                            month: "2-digit",
                                        })}
                                            {new Date(item.fixture.fixture.date).toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </td>
                                        <td className="py-1 text-right lg:text-center w-full lg:w-fit ">{item.bets[0].values[0].odd}</td>
                                        <td className="py-1 ">{item.bets[0].values[0].percentage}%</td>
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
