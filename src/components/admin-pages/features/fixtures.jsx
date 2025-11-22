import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Calendar } from "lucide-react";
import { Search } from "lucide-react";

export default function MakePredictions () {

    const handleDelete = (id) => {
            setPredictions(predictions.filter((item) => item.id !== id));
            
        };

        const [predictions, setPredictions] = useState([
            {
                id: 1,
                league: "Premier League",
                date: "05 Oct 2025",
                homeTeam: "Everton",
                awayTeam: "Burnley",
                time: "12:30",
            },
            {
                id: 2,
                league: "Premier League",
                date: "05 Oct 2025",
                homeTeam: "Everton",
                awayTeam: "Burnley",
                time: "12:30",
            },
            {
                id: 3,
                league: "Premier League",
                date: "05 Oct 2025",
                homeTeam: "Everton",
                awayTeam: "Burnley",
                time: "12:30",
            },
            {
                id: 4,
                league: "Premier League",
                date: "05 Oct 2025",
                homeTeam: "Everton",
                awayTeam: "Burnley",
                time: "12:30",
            },
            {
                id: 5,
                league: "Premier League",
                date: "05 Oct 2025",
                homeTeam: "Everton",
                awayTeam: "Burnley",
                time: "12:30",
            },
            {
                id: 6,
                league: "Premier League",
                date: "05 Oct 2025",
                homeTeam: "Everton",
                awayTeam: "Burnley",
                time: "12:30",
            },
            {
                id: 7,
                league: "Premier League",
                date: "05 Oct 2025",
                homeTeam: "Everton",
                awayTeam: "Burnley",
                time: "12:30",
            },
        ]);

        const[dropdown, setDropdown] = useState();
    return(
            <div className="p-4 lg:px-10 lg:min-h-screen flex flex-col w-full">
                <div className="flex justify-start font-semibold font-sans text-2xl w-full  lg:my-6">
                   <h2 className="lg:font-semibold font-bold font-[Inria Sans] mb-4 text-center w-full lg:text-left">Fetch Football Fixtures</h2>
                </div>

                    <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:my-4  gap-7 lg:gap-5">
                       
                        <div className="relative lg:w-60 w-full flex justify-between items-center">
                            <input type="text" placeholder="Search By Name" className="w-full appearance-none border border-[#737373] rounded-[0.9em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
                            <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                        </div>
                        <h3 className="lg:hidden font-sans font-normal text-sm">
                            Filter By:
                        </h3>
                        <div className="w-full lg:w-auto flex lg:gap-4 gap-7">
                            <div className="relative lg:w-60  flex justify-between items-center">
                            <input type="text" placeholder="Select League" className="w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
                            <button onClick={() => setDropdown()}>
                            {dropdown ? (
                             <ChevronUp size={18}  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                            ) : (
                             <ChevronDown size={18}  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                            )}
                            </button>
                            
                           </div>
                           <div className="relative lg:w-60 flex justify-between items-center">
                            <input type="text" placeholder="11/04/2025" className="w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
                            <Calendar size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                           </div>
                        </div>
                        <div className="relative w-60 hidden lg:block">
                            <button className="bg-[#1A365D] text-white px-6 py-1 w-full rounded-[0.3em]">
                                Filter
                            </button>
                        </div>
                    </div>

                  <table className="w-full border-collapse">
                        <thead  className="">
                            <tr className="font-bold text-left text-[18px] hidden lg:flex justify-center gap-32 w-full">
                                <th className="py-3">No.</th>
                                <th className="py-3">League</th>
                                <th className="py-3">Fixtures</th>
                                <th className="py-3">Date</th>
                                <th className="py-3">Time</th>
                                <th className="py-3">Action</th>
                            </tr>
                        </thead>

                        <tbody className="text-right">
                            {predictions.map((item, index) => (
                                <tr key={item.id} className="leading-tight">
                                    <div className="w-full flex flex-row lg:gap-5 lg:justify-between lg:border-none border p-3 lg:p-0 rounded-xl my-4 lg:my-0 border-[#1A365D99]">
                                        <div className="flex flex-col  items-start gap-6 lg:flex-row w-full justify-center lg:gap-24">
                                            <td className="lg:py-5 hidden lg:block">{index + 1}</td>
                                            <td className="lg:py-5">{item.league}</td>
                                            <td className="lg:py-5"> {item.awayTeam} vs {item.homeTeam}</td>
                                        </div>
                                        <div className="flex gap-2 font-light font-sans lg:text-lg lg:font-normal text-xs text-[#737373] items-end lg:flex-row flex-col lg:w-full lg:justify-center lg:gap-24">
                                            <td className="lg:py-5 ">{item.date}</td>
                                            <td className="lg:py-5 pr-9 lg:pr-0">{item.time}</td>
                                            <td className="lg:py-5 lg:ml-10 lg:pr-0 pr-12">
                                                <button
                                                    className="text-[#04BA4A] transition"
                                                    onClick={() => handleDelete(item.id)}
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