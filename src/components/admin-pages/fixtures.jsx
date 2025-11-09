import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
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
        ]);

    return(
        
        <div>
            <div className="p-4 min-h-screen">
                <div className="flex justify-center flex-col w-full sm:mx-5 sm:my-3">
                    <div className="flex justify-start font-semibold font-sans text-2xl w-full">
                        <h2 className=" font-semibold mb-4 text-left">Fetch Football Fixtures</h2>
                    </div>

                    <div className="w-full flex justify-between my-8">
                       
                        <div className="relative w-60  flex justify-between items-center">
                            <input type="text" placeholder="Search By Name" className="w-full appearance-none border border-[#737373] rounded-[0.9em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
                            <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                        </div>
                        <div className="relative w-60  flex justify-between items-center">
                            <input type="text" placeholder="Select League" className="w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
                            <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                        </div>
                        <div className="relative w-60 flex justify-between items-center">
                            <input type="text" placeholder="11/04/2025" className="w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
                            <Calendar size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                        </div>
                        <div className="relative w-60">
                            <button className="bg-[#1A365D] text-white px-6 py-1 w-full rounded-[0.3em]">
                                Filter
                            </button>
                        </div>
                    </div>

                  <table className="w-full border-collapse mx-4">
                        <thead>
                            <tr className="font-bold text-left text-[18px]">
                                <th className="p-2">No.</th>
                                <th className="p-2">League</th>
                                <th className="p-2">Fixtures</th>
                                <th className="p-2">Date</th>
                                <th className="p-2">Time</th>
                                <th className="p-2">Action</th>
                            </tr>
                        </thead>

                        <tbody className="">
                            {predictions.map((item, index) => (
                                <tr key={item.id} className=" leading-tight">
                                    <td className="py-7">{index + 1}</td>
                                    <td className="py-7">{item.league}</td>
                                    <td className="py-7"> {item.awayTeam} vs {item.homeTeam}</td>
                                    <td className="py-7">{item.date}</td>
                                    <td className="py-7">{item.time}</td>
                                    <td className="py-7">
                                        <button
                                            className="text-[#04BA4A] transition"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            <FaPlusSquare size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}