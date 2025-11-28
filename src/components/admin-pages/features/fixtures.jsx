import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Calendar } from "lucide-react";
import { Search } from "lucide-react";
import { useEffect } from "react";

export default function MakePredictions () {
    
    const[dropdown, setDropdown] = useState();
    const [date, setDate] = useState("2025-11-26");
    const [prediction, setPrediction] = useState([]);
    const [byName, setByName] = useState("");
    const [byLeague, setByLeague] = useState("");
    const [byDate, setByDate] = useState(date);
        
          useEffect(() => {
              fetch(`https://twokw-backend.onrender.com/api/v1/football/fixtures?date=${date}`)

              .then((res) => res.json())
              .then((data) => { 
        
                setPrediction(data.data.response || []);
                // console.log("Updated prediction:",prediction);
                console.log("API DATA",prediction);
        
                console.log("fetched predictions:", data);
              });
          }, [date]);

          const all_predictions = prediction.filter((item) => {

              const use_name = item.teams.away.name.toLowerCase().includes(byName.toLowerCase()) || item.teams.home.name.toLowerCase().includes(byName.toLowerCase());

              const use_league = item.league.name.toLowerCase().includes(byLeague.toLowerCase());

              const use_date = byDate ? item.fixture.date.startsWith(byDate) : true;

              return use_name && use_league && use_date;

          })

    return(
            <div className="p-4 lg:px-10 lg:min-h-screen flex flex-col w-full">
                <div className="flex justify-start font-semibold font-sans text-2xl w-full  lg:my-6">
                   <h2 className="lg:font-semibold font-bold font-[Inria Sans] mb-4 text-center w-full lg:text-left">Fetch Football Fixtures</h2>
                </div>

                    <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:my-4  gap-7 lg:gap-5">
                       
                        <div className="relative lg:w-60 w-full flex justify-between items-center">
                            <input value={byLeague} onKeyDown={(e) => e.key === "Enter key" && all_predictions} onChange={(e) => setByLeague(e.target.value)} type="text" placeholder="Search By Name" className="w-full appearance-none border border-[#737373] rounded-[0.9em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
                            <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                        </div>
                        <h3 className="lg:hidden font-sans font-normal text-sm">
                            Filter By:
                        </h3>
                        <div className="w-full lg:w-auto flex lg:gap-4 gap-7">
                            <div className="relative lg:w-60  flex justify-between items-center">
                        <input value={byName} onKeyDown={(e) => e.key === "Enter key" && all_predictions} onChange={(e) => setByName(e.target.value)} type="text" placeholder="Select League" className="w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
                            <button onClick={() => setDropdown()}>
                            {dropdown ? (
                             <ChevronUp size={18}  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                            ) : (
                             <ChevronDown size={18}  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                            )}
                            </button>
                            
                           </div>
                           <div className="relative lg:w-60 flex justify-between items-center">
                        <input value={byDate} onKeyDown={(e) => e.key === "Enter key" && all_predictions} onChange={(e) => setByDate(e.target.value)} type="text" placeholder="11/04/2025" className="w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
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
                            <tr className="font-bold text-left text-lg hidden lg:flex justify-center gap-32 w-full">
                                <th className="py-3">No.</th>
                                <th className="py-3">League</th>
                                <th className="py-3">Fixtures</th>
                                <th className="py-3">Date</th>
                                <th className="py-3">Time</th>
                                <th className="py-3">Action</th>
                            </tr>
                        </thead>

                        <tbody className="text-right">
                            {prediction.map((item, index) => (
                                <tr key={item.fixture.id} className="leading-tight">
                                    <div className="w-full flex flex-row lg:gap-5 lg:justify-between lg:border-none border p-3 lg:p-0 rounded-xl my-4 lg:my-0 lg:active:hidden active:border-[#1A365D] active:scale-105 active:shadow-xl border-[#1A365D99]">
                                        <div className="flex flex-col  items-start gap-6 lg:flex-row w-full justify-center lg:gap-24">
                                            <td className="lg:py-5 hidden lg:block">{index + 1}</td>
                                            <td className="lg:py-5"><img className="w-24 h-24" src={item.league.logo} alt={item.league.name}/> {item.league.name}</td>
                                            <td className="lg:py-5"><span><img className="w-24 h-24" src={item.teams.away.logo} alt={item.teams.away.name} /> {item.teams.away.name}</span> vs <span><img className="w-24 h-24" src={item.teams.home.logo} alt={item.teams.home.name}/> {item.teams.home.name}</span></td>
                                        </div>
                                        <div className="flex gap-2 font-light font-sans lg:text-lg lg:font-normal text-xs text-[#737373] items-end lg:flex-row flex-col lg:w-full lg:justify-center lg:gap-24">
                                            <td className="lg:py-5 ">{new Date (item.fixture.date).toLocaleDateString()}</td>
                                            {/* <td className="lg:py-5 pr-9 lg:pr-0">{new Date(item.fixture.time).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}</td> */}
                                            <td className="lg:py-5 lg:ml-10 lg:pr-0 pr-12">
                                                <button
                                                    className="text-[#04BA4A] transition"
                                                    
                                                >
                                                    <FaPlusSquare size={18} />
                                                </button>
                                            </td>
                                        </div>
                                   </div>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
    )
}