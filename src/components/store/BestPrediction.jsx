import { motion } from "framer-motion";

export default function BestPredictionCard () {

    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    const today = new Date();

    const predictions ={
        homeLogo: "/belguim-pro.png",
        homeTeam: "Everton",
        awayLogo: "/europa.png",
        awayTeam: "Crystal Palace",
        leagueLogo: "/champions-league.png",
        league: "Champions League",
        time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",}),
        date: `${days[today.getDay()]} ${today.getDate()}/${today.getMonth()}`,
        odds: { home: "2.5", away: "4.9", draw: "3.5" }
    }
       
    return (
        <div className="relative border-none xs:mt-10 sm:mt-10 md:mt-0 mt-33 lg:mt-5 lg:h-[240px] h-auto min-h-[180px] rounded-[0.6rem] lg:mb-0 px-2 bg-[#1a365d] lg:max-w-full w-full flex items-center flex-col hover:-translate-y-1 hover:shadow-xl lg:space-y-0 shadow-sm transition-all">
            <h2 className="text-center text-lg lg:text-xl font-semibold text-white lg:py-2 pb-2">
                Best Prediction of the Day
            </h2>
            <motion.div
                className="max-w-lg w-full bg-[#1A365D] text-white flex flex-col items-center justify-between"
                transition={{ duration: 0.7, ease: "easeOut" }}
            >

                <div className="text-center flex justify-between items-start w-full lg:space-y-9 space-y-5">

                    
                    <p className="text-white text-[1rem] flex items-center ">
                            <img
                                src={predictions.leagueLogo}
                                alt={predictions.league}
                                className="lg:w-10 lg:h-10 w-6 h-6 rounded-full" />
                              {predictions.league}
                        </p>
                       

                    
                    <p className="lg:text-[1.1rem] text-[1rem] max-[267]:flex  text-white"><span>🗓️</span>{predictions.date}</p>
                </div>
               

                <div className="flex justify-between w-full items-center font-sans lg:space-y-3 space-y-1 text-white/80">
                    <div className="flex flex-col items-center space-y-1">
                        <img
                            src={predictions.homeLogo}
                            alt={predictions.homeTeam}
                            className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                        />
                        <span className="text-lg font-medium">{predictions.homeTeam}</span>
                    </div>

                   <div className="flex flex-col text-sm justify-center items-center">
                        <span className="text-white">vs</span>
                        <p className="text- mt-1"><span className="text-[1rem">🕒</span>{predictions.time}</p>
                   </div>

                    <div className="flex flex-col items-center space-y-1">
                        <img
                            src={predictions.awayLogo}
                            alt={predictions.awayTeam}
                            className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                        />
                        <span className="text-lg font-medium ">{predictions.awayTeam}</span>
                    </div>
                </div>

               

                {/* Odds Section */}
            </motion.div>

                <div className="border-1 border-b-0 border-x-0 border-t-white/20 w-full flex items-center justify-center flex-col">
                    <div className="flex justify-between items-center text-sm space-y-0 text-white/80 lg:gap-1 gap-1 mt-1">
                        <div className="flex justify-center items-center  lg:px-2">
                            <p className="px-1">Home</p>
                            <p className="font-bold text-white rounded-sm bg-[#D6AE3E] px-3 py-0.5">{predictions.odds.home}</p>
                        </div>
                        <div className="flex justify-center items-center lg:px-2">
                            <p className="px-1">Draw</p>
                            <p className="font-bold text-white rounded-sm bg-[#D6AE3E] px-3 py-0.5">{predictions.odds.draw}</p>
                        </div>
                        <div className="flex justify-center items-center lg:px-2">
                            <p className="px-1">Away</p>
                            <p className="font-bold text-white rounded-sm bg-[#D6AE3E] px-3 py-0.5 ">{predictions.odds.away}</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}
