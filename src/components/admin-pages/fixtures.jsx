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
        ]);

        const[dropdown, setDropdown] = useState();

    const leagues = [
        { name: "Nigeria NPFL", country: "Nigeria", logo: "/NPFL.jpg" },
        { name: "England Premier League", country: "England", logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
        { name: "Spain La Liga", country: "Spain", logo: "/spain-la-liga.png" },
        { name: "Europe UEFA Champions ...", country: "Europe", logo: "/champions-league.png" },
        { name: "Europe UEFA Europa League", country: "Europe", logo: "/europa.png" },
        { name: "Italy Serie A", country: "Italy", logo: "/italy-serie-A.png" },
        { name: "Germany Bundesliga", country: "Germany", logo: "https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg" },
        { name: "France Ligue 1", country: "France", logo: "/france-league.png" },
        { name: "Portugal Liga Portugal", country: "Portugal", logo: "/portugal.png" },
        { name: "Netherlands Eredivisie", country: "Netherlands", logo: "/netherlands.png" },
        { name: "Belgium Pro League", country: "Belgium", logo: "/belguim-pro.png" },
        { name: "South Africa Premier", country: "South Africa", logo: "/south-africa.png" }
    ];

    return(
            <div className="p-4 lg:px-10 lg:min-h-screen flex flex-col w-full">
                <div className="flex justify-start font-semibold font-sans text-2xl w-full  lg:my-6">
                   <h2 className="lg:font-semibold font-bold font-[Inria Sans] mb-4 text-left">Fetch Football Fixtures</h2>
                </div>

                    <div className="w-full flex justify-between lg:my-4 gap-4">
                       
                        <div className="relative w-60  flex justify-between items-center">
                            <input type="text" placeholder="Search By Name" className="w-full appearance-none border border-[#737373] rounded-[0.9em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
                            <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                        </div>
                        <div className="relative w-60  flex justify-between items-center">
                            <input type="text" placeholder="Select League" className="w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white" />
                            <button onClick={() => setDropdown()}>
                            {dropdown ? (
                             <ChevronUp size={18}  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                            ) : (
                             <ChevronDown size={18}  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737373] pointer-events-none" />
                            )}
                            </button>
                            
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

                  <table className="hidden md:block w-full border-collapse">
                        <thead>
                            <tr className="font-bold text-left text-[18px]">
                                <th className="py-3">No.</th>
                                <th className="py-3">League</th>
                                <th className="py-3">Fixtures</th>
                                <th className="py-3">Date</th>
                                <th className="py-3">Time</th>
                                <th className="py-3">Action</th>
                            </tr>
                        </thead>

                        <tbody className="">
                            {predictions.map((item, index) => (
                                <tr key={item.id} className=" leading-tight">
                                    <td className="py-5">{index + 1}</td>
                                    <td className="py-5">{item.league}</td>
                                    <td className="py-5"> {item.awayTeam} vs {item.homeTeam}</td>
                                    <td className="py-5">{item.date}</td>
                                    <td className="py-5">{item.time}</td>
                                    <td className="py-5">
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
    )
}