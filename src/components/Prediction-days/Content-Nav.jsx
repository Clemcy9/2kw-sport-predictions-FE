// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";


// available predictions days and date
const today = new Date();

const yesterday = new Date();
yesterday.setDate(yesterday.getDate ()-1);

const tommorow = new Date();
tommorow.setDate(tommorow.getDate() +1);

const days = ["Sun", "Mon", "Tue", "Wed" ,"Thur", "Fri", "Sat"];

   

    // available predictions 
const navdays = [
    { name: "Yesterday", day: `${days[yesterday.getDay()]} ${yesterday.getDate()}`},
    { name: "Today", day: `${days[today.getDay()]} ${today.getDate()}`},
    { name: "Tommorow", day: `${days[tommorow.getDay()]} ${tommorow.getDate()}`},
]

export default function ContentNavBar() {

    const navigate = useNavigate();

    const handleDaysClick = (available) => {
        const daysPath = `/navdays/${available.toLowerCase().replace(/\s+/g, "-")}`;
        navigate(daysPath);
    };
    // console.log( navDays);


    return(

        <div className="lg:flex flex items-center justify-center flex-col w-full ">
            <div className="w-full max-w-[420px]  flex justify-center">
                <nav className="flex justify-between items-center gap-4 w-full">
                    {navdays.map((content) => (
                        <div
                            key={content.name}
                            onClick={() => handleDaysClick(content.name)}
                            className="flex-1 min-w-0"
                        >
                            <div
                                className={`rounded-[0.6rem] hover:bg-[#D6AE3E] hover:text-white active:text-white active:bg-[#1A365D] border border-[#D6AE3E] text-[#1A365D] hover:shadow-lg hover:scale-105 flex flex-col items-center justify-center text-center px-[0.6rem] py-[0.7rem] lg:px-3 lg:py-3 font-sans font-semibold transition-all duration-200`}
                            >
                                <h2 className="text-[0.75rem] lg:text-[0.9rem] leading-tight uppercase">
                                    {content.name}
                                </h2>
                                <h4 className="text-[0.7rem] lg:text-[0.85rem] leading-tight">
                                    {content.day}
                                </h4>
                            </div>
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
}