import { motion } from "framer-motion";

export default function BestPredictionCard () {

    const predictions ={
        homeLogo: "/",
        homeTeam: "Everton",
        awayLogo: "/",
        awayTeam: "Crystal Palace",
        leagueLogo: "/NPFL.jpg",
        league: "Premier League",
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
        odds: { home: "2.5", away: "1.9", draw: "3.5" }
    }
       
    return (
        <div className="relative  border-none mt-40 min-[440px]:mt-25 min-[450px]:mt-27 max-[332px]:mt-53 max-[300px]:mt-55 max-[241px]:mt-75 lg:mt-5 lg:h-[310px] h-auto min-h-[180px] rounded-[0.6rem] lg:mb-0 p-4 bg-[#1a365d] lg:max-w-full w-full flex items-center flex-col hover:-translate-y-1 hover:shadow-xl lg:space-y-0 shadow-sm transition-all ">
            <h2 className="text-center text-lg lg:text-xl font-semibold text-white lg:py-2 py-0">
                Best Prediction of the Day
            </h2>
            <motion.div
                className="max-w-lg w-full bg-[#1A365D] text-white flex items-center justify-between"
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
               

                <div className="flex justify-between items-center flex-col font-sans lg:space-y-3 space-y-1 text-white/80">
                    <div className="flex flex-col items-center space-y-1">
                        <img
                            src={predictions.homeLogo}
                            alt={predictions.homeTeam}
                            className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                        />
                        <span className="text-lg font-medium">{predictions.homeTeam}</span>
                    </div>

                   <span className="text-white">vs</span>

                    <div className="flex flex-col items-center space-y-1">
                        <img
                            src={predictions.awayLogo}
                            alt={predictions.awayTeam}
                            className="lg:w-10 lg:h-10 w-6 h-6 rounded-full"
                        />
                        <span className="text-lg font-medium ">{predictions.awayTeam}</span>
                    </div>
                </div>

                <div className="text-center flex justify-between items-start flex-col lg:space-y-9 space-y-5">

                    <span className="text-white text-[1rem] flex items-center ">
                    <span>
                        <img 
                        src={predictions.leagueLogo} 
                        alt={predictions.league} 
                                className="lg:w-10 lg:h-10 w-6 h-6 rounded-full" />
                    </span>{predictions.league}</span>

                    <p className="text- mt-1"><span className="text-[1rem">🕒</span>{predictions.time}</p>
                    <p className="lg:text-[1.1rem] text-[1rem] max-[267]:flex  text-white"><span>🗓️</span>wen-{predictions.date}</p>
                </div>

                {/* Odds Section */}
            </motion.div>

                <div className="border-1 border-b-0 border-x-0 border-t-white/20 w-full flex items-center justify-center flex-col">
                    <div className="flex justify-between items-center text-lg space-y-1 text-white/80 lg:gap-1 gap-2 mt-2">
                        <div className="flex justify-center items-center  lg:px-2">
                            <p className="px-1">Home</p>
                            <p className="font-bold text-white rounded-[0.6rem] bg-[#D6AE3E] px-3 py-2">{predictions.odds.home}</p>
                        </div>
                        <div className="flex justify-center items-center lg:px-2">
                            <p className="px-1">Draw</p>
                            <p className="font-bold text-white rounded-[0.6rem] bg-[#D6AE3E] px-3 py-2">{predictions.odds.draw}</p>
                        </div>
                        <div className="flex justify-center items-center pb-2.5 lg:px-2">
                            <p className="px-1">Away</p>
                            <p className="font-bold text-white rounded-[0.6rem] bg-[#D6AE3E] px-3 py-2 ">{predictions.odds.away}</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}
