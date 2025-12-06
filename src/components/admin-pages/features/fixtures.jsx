import { useState } from "react";
import { FaMinus, FaPlus, FaPlusSquare } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Calendar } from "lucide-react";
import { Search } from "lucide-react";
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa6";

export default function MakePredictions () {
    
    const today = new Date().toISOString().split("T")[0];
    const [date, setDate] = useState(today);
    const [byName, setByName] = useState("");
    const [modal, setModal] = useState(false);
    const [close, setClose] = useState(true);
    const [dropdown, setDropdown] = useState();
    const [byDate, setByDate] = useState(date);
    const [byLeague, setByLeague] = useState("");
    const [prediction, setPrediction] = useState([]);
    const [action, setAction] = useState(null);
    const [loading, setLoading] = useState(true);

    // const dates = new Date();
    // dates.setDate(dates.getDate() + 1);
        
          useEffect(() => {
              fetch(`https://twokw-backend.onrender.com/api/v1/football/fixtures?date=${date}`)

              .then((res) => res.json())
              .then((data) => { 
        
                setPrediction(data.data.response || []);
                // console.log("Updated prediction:",prediction);
                console.log("API DATA",prediction);
        
                console.log("fetched predictions:", data);
                  setLoading(false);
              });
          }, [date]);

          const all_predictions = prediction.filter((item) => {

              const name = byName.toLowerCase();
              const league = byLeague.toLowerCase();

              const use_name = item.teams.away.name.toLowerCase().includes(name) || item.teams.home.name.toLowerCase().includes(name);

              const use_league = item.league.name.toLowerCase().includes(league);

              const use_date = byDate ? item.fixture.date.startsWith(byDate) : true;

              return use_name && use_league && use_date;

          });

            if (loading) return <div className="text-center h-52 overflow-y-hidden text-[#1A365D] py-2 flex justify-center items-center"><span><FaSpinner className="animate-spin" /> </span> Loading Fixtures...</div>;

    return(
            <div className="p-4 lg:px-5 lg:min-h-screen flex flex-col w-full">
                <div className="flex justify-start font-semibold font-sans text-2xl w-full  lg:my-6">
                   <h2 className="lg:font-semibold font-bold font-[Inria Sans] mb-4 text-center w-full lg:text-left">Fetch Football Fixtures</h2>
                </div>

                    <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:my-4  gap-7 lg:gap-5">
                       
                        <div className="relative lg:w-60 w-full flex justify-between items-center">
                    <input value={byName} onKeyDown={(e) => e.key === "Enter" && console.log("Enter pressed for name")} onChange={(e) => setByName(e.target.value)} type="text" placeholder="Search By Name" className="w-full appearance-none border border-[#737373] rounded-[0.9em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
                            <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                        </div>
                        <h3 className="lg:hidden font-sans font-normal text-sm">
                            Filter By:
                        </h3>
                        <div className="w-full lg:w-auto flex lg:gap-4 gap-7">
                            <div className="relative lg:w-60  flex justify-between items-center">
                        <input value={byLeague} onKeyDown={(e) => e.key === "Enter" && console.log("Enter pressed for league")} onChange={(e) => setByLeague(e.target.value)} type="text" placeholder="Select League" className="w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
                            <button onClick={() => setDropdown()}>
                            {dropdown ? (
                             <ChevronUp size={18}  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                            ) : (
                             <ChevronDown size={18}  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                            )}
                            </button>
                            
                           </div>
                           <div className="relative lg:w-60 flex justify-between items-center">
                        <input value={byDate} onKeyDown={(e) => e.key === "Enter key" && console.log("Enter pressed for date")} onChange={(e) => setByDate(e.target.value)} type="text" placeholder="11/04/2025" className="w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
                            <Calendar size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                           </div>
                        </div>
                        <div className="relative w-60 hidden lg:block">
                            <button className="bg-[#1A365D] text-white px-6 py-1 w-full rounded-[0.3em]">
                                Filter
                            </button>
                        </div>
                    </div>

                  <table className=" w-full border-collapse">
                        <thead  className="">
                            <tr className="font-bold text-left text-lg hidden lg:grid grid-cols-12 justify-between gap-14  w-full">
                               <th className="col-span-3 py-3">No.</th>
                               <th className="col-span-3 py-3">League</th>
                               <th className="col-span-3 py-3">Fixtures</th>
                               <th className="col-span-1 py-3">Date</th>
                               <th className="col-span-1 py-3">Time</th>
                               <th className="col-span-1 py-3">Action</th>
                            </tr>
                        </thead>

                        <tbody className="text-right">
                            {all_predictions.map((item, index) => (
                                <tr key={item.fixture.id} className="leading-tight">
                                    <td colSpan={100} className="w-full flex flex-row lg:gap-2 lg:grid lg:grid-cols-14 lg:justify-between lg:border-none border p-3 lg:p-0 rounded-xl my-4 lg:my-0 lg:active:hidden active:border-[#1A365D] active:scale-105 active:shadow-xl border-[#1A365D99]">
                                            <section className="flex flex-col lg:col-span-10 lg:grid lg:grid-cols-9 justify-between  items-start gap-6 lg:flex-row w-full lg:gap-1 ">
                                                <div className="lg:py-5 hidden lg:col-span-1 lg:block lg:mr-12">{index + 1}</div>
                                                <div className="lg:py-5  lg: flex lg:justify-start lg:col-span-4 lg:items-start w-full lg:max-w-80 "><img className="w-8 h-8" src={item.league.logo} alt={item.league.name} />{(item?.league?.name || "").slice(0, 32).trim()}</div>
                                                <div className="lg:py-5 lg:flex lg:items-start lg:justify-start lg:col-span-4 lg:w-full lg:max-w-72 lg:flex-row"><span className="flex"><img className="w-4 h-4" src={item.teams.away.logo} alt={item.teams.away.name} /> {(item?.teams?.away.name || "").slice(0, 16).trim()}</span> <span className="px-2 font-semibold">vs</span> <span className="flex"><img className="w-4 h-4" src={item.teams.home.logo} alt={item.teams.home.name} /> {(item.teams.home.name || "").slice(0, 16).trim()}</span></div>
                                            </section>
                                            <section className="flex gap-8 font-light lg:col-span-4 font-sans lg:text-lg lg:font-normal text-xs text-[#737373] items-end lg:flex-row flex-col lg:w-auto lg:justify-center lg:gap-18">
                                                <div className="lg:py-5  ">{new Date(item.fixture.date).toLocaleDateString()}</div>
                                                <div className="lg:py-5 pr-2 w-20 lg:pr-0 ">{new Date(item.fixture.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
                                                <div className="lg:py-5 lg:ml-4 lg:pr-0 pr-10">
                                                    <button onClick={() => { setAction(item); setModal(true); }}
                                                        className="text-[#04BA4A] transition"
                                                        >
                                                        <FaPlusSquare size={18} />
                                                    </button>
                                                </div>
                                            </section>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {modal && action && (
                        <main onClick={() => setModal(false)} className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                            <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl px-2 py-4 flex-col flex lg:flex-row">
                                <p  className="lg:py-5 lg:flex lg:items-start lg:justify-start font-semibold flex-col lg:col-span-4 lg:w-full justify-center items-center lg:max-w-72 lg:flex-row p-3">
                                    <h2>Make Predictions For </h2>
                                    <h2><span className="flex flex-row justify-center items-center">{(action?.teams?.away.name || "").slice(0, 20).trim()}</span> <span className="px-2 font-semibold">vs</span> <span className="flex"> {(action.teams.home.name || "").slice(0, 20).trim()}</span></h2>
                                </p>

                                <section className="bg-[#EEF0F3] rounded-xl px-2 py-4">
                                    <div className="flex justify-between items-center py-3">
                                        <p className="flex justify-center items-center"><span className="flex flex-col"><img className="w-10 h-10" src={action.teams.away.logo} alt={action.teams.away.name} /> {(action?.teams?.away.name || "").slice(0, 16).trim()}</span></p>
                                        <span>VS</span>
                                        <p className="flex justify-center items-center"> <span className="flex flex-col"><img className="w-10 h-10" src={action.teams.home.logo} alt={action.teams.home.name} /> {(action.teams.home.name || "").slice(0, 16).trim()}</span></p>
                                    </div>
                                    <div>
                                        <form action="" className=" ">
                                            <div className="bg-[#D6AE3E] rounded-t-xl text-black flex items-center justify-between p-2">
                                                <h3>Predictions</h3>
                                                <button  onClick={() => setClose(false)}>
                                                    {close ? (
                                                        <FaPlus />
                                                        ) : ( 
                                                        <FaMinus />
                                                    )}
                                                </button>
                                           </div>
                                           {close && (
                                          <div className="p-3 grid grid-cols-2  flex-wrap rounded-b-xl bg-white gap-6 flex-shrink-0 ">
                                                <div className="flex flex-col justify-start items-start">
                                                    <label htmlFor="">Free Tips</label>
                                                    <input type="text" placeholder="Select" className="border border-[#737373] p-2 rounded-sm"/>
                                                </div>
                                                <div className="flex flex-col justify-start items-start">
                                                    <label htmlFor="">Super Single Tip</label>
                                                    <input type="text" placeholder="Select" className="border border-[#737373] p-2 rounded-sm" />
                                                </div>
                                                <div  className="flex flex-col justify-start items-start">
                                                    <label htmlFor=""> Free 2 Odds</label>
                                                    <input type="text" placeholder="Select" className="border border-[#737373] p-2 rounded-sm"/>
                                                </div>
                                                <div className="flex flex-col justify-start items-start">
                                                    <label htmlFor="">Sure Predict</label>
                                                    <input type="text" placeholder="Select" className="border border-[#737373] p-2 rounded-sm"/>
                                                </div>
                                            </div> )}   
                                      </form>
                                  </div>
                                  <section className="py-4 flex justify-center items-center gap-4">
                                      <button className="rounded-xl bg-[#1A365D] px-3 py-2 text-white">
                                        Save Prediction
                                     </button>
                                     <button className="rounded-xl bg-white text-[#1A365D] px-3 py-2">
                                        Cancel
                                     </button>
                                  </section>
                                </section>

                                <div>
                                    <h3>Odds & Probabilities</h3>

                                    <table>
                                        <thead>
                                           <tr>
                                               <th>Market</th>
                                               <th>Odds</th>
                                               <th>Prob%</th>
                                           </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                        </main>
                    )}
              </div>
    )
}