// import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BestPredictionCard () {

    const predictions ={
        homeLogo: "",
        homeTeam: "Everton",
        awayLogo: "",
        awayTeam: "Crystal Palace",
        leagueLogo: "/NPFL.jpg",
        league: "Premier League",
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
        odds: { home: "2.5", away: "1.9", draw: "3.5" }
    }
       
    return (
        <div className="relative  border-none mt-40 min-[440px]:mt-25 min-[450px]:mt-27 max-[332px]:mt-53 max-[300px]:mt-55 max-[241px]:mt-75 lg:mt-5 lg:h-[310px] h-auto min-h-[180px] rounded-[0.6rem] lg:mb-0 p-4 bg-[#1a365d] lg:max-w-full w-full flex items-center flex-col lg:space-y-0 shadow-lg transition-all ">
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


//  NOTE1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// DO NOT DELETE COMMENTED CODES.





    // const [predictions, setPredictions] = useState(null);
    // const [waiting , setWaiting ] = useState(true);
    // const [error, setError] = useState(null);

    // // fetching the payload and data from the backend API
    // const getPredictions = async ()=> {
    //     setWaiting(true);
    //     setError(null);

    //     try {
    //         const res = await fetch("https://www.api-football.com/");
    //         if (!res.ok) throw new Error("predictions is facing village people problem fetching");
    //         const data = await res.json();

    //         // saving the predictions and date to assist daily updates 
    //         setPredictions(data);
    //         localStorage.setItem("lastPrediction", JSON.stringify(data));
    //         localStorage.setItem("lastDate", new Date().toDateString()); 

    //     }catch (err) {
    //         console.error("backend didnt see this coming error", err);
    //         setError(err.message);

    //     }finally {
    //         setWaiting(false);
    //     }  
    // };

    // //get the predictions and the date from the localstorage and load or load new data from the API
    // useEffect( ()=> {
    //     const savedPredictions = localStorage.getItem("lastPrediction");
    //     const savedDate = localStorage.getItem("lastDate");
    //     const newDay = new Date().toDateString();

    //     if (savedPredictions && savedDate === newDay) {
    //         setPredictions(JSON.parse(savedPredictions));
    //         setWaiting(false);
    //     }else{
    //         getPredictions();
    //     }

    //     // set timer to calculate time until next 24 hours (nihgt only)
    //     const timeNow = new Date();
    //     const timeNextNiht = new Date();
    //     timeNextNiht.setHours(24, 0, 0, 0);
    //     const timeTillNight = timeNextNiht - timeNow;

    //     // set when the time is up to get new data from the API at 24hours (night only)
    //     const timeInNight = setTimeout(() => {
    //         getPredictions();
        

    //     // when the first night is refreshed, set it to continue refreshing every 24 hours
    //     setInterval(getPredictions, 24 * 60 * 60 * 1000);
    // }, timeTillNight);

    // return() => clearTimeout(timeInNight);
    // }, []);

    // note for developers :
    // the abouve 

    
    // if (waiting) {
    //     return (
    //         <div className="text-[#1a365d] animate-pulse mt-10">Loading Best Prediction...</div>
    //     );
    // }

    // if (error) {
    //     return (
    //         <div className="text-red-500 mt-10 lg:h-[561px] h-[217px] rounded-[0.6rem] lg:mb-14 bg-[#1a365d] max-w-[350px] lg:max-w-[544px] w-full p-12 flex items-center flex-col">
    //             <p>😒😒 {error}</p>
    //             <p className="text-lg text-white">Please check your  connection.</p>
    //             <p className="text-3xl font-semibold text-white text-center">Unable To Load Best Prediction Of The Day</p>
    //         </div>
    //     )
    // }

    // if (predictions) {
    //     return (
    //         <div className="text-[#1a365d] mt-10">No prediction available.</div>
    //     );
    // }

//     return (
//         <div className="flex flex-col items-center justify-center min-h-[217px] bg-[#1A365D] px-4">
//                 <motion.div
//                 className="max-w-lg w-full bg-[#1A365D] text-white rounded-xl shadow-xl p-6 space-y-6 mt-10"
//                     initial={{ opacity: 0, y: 40 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.7, ease: "easeOut" }}
//                 >
//                     <h2 className="text-center text-lg lg:text-xl font-semibold text-white">
//                         Best Prediction of the Day
//                     </h2>

//                     <div className="flex justify-between items-center">
//                         <div className="flex flex-col items-center space-y-2">
//                             <img
//                                 src={predictions.homeLogo}
//                                 alt={predictions.homeTeam}
//                                 className="w-10 h-10"
//                             />
//                             <span className="text-lg font-medium">{predictions.homeTeam}</span>
//                         </div>

//                         <div className="text-center">
//                             <span className="text-white text-xs">{predictions.league}</span>
//                             <p className="text-lg mt-1">{predictions.time}</p>
//                             <p className="text-xs text-white">{predictions.date}</p>
//                         </div>

//                         <div className="flex flex-col items-center space-y-2">
//                             <img
//                                 src={predictions.awayLogo}
//                                 alt={predictions.awayTeam}
//                                 className="w-10 h-10"
//                             />
//                             <span className="text-lg font-medium text-white">{predictions.awayTeam}</span>
//                         </div>
//                     </div>

//                     {/* Odds Section */}
                    
//                        <div className="border-1 border-t-white/20">
//                          <h3 className="text-white font-semibold mb-2 text-lg">Match Odds</h3>
//                           <div className="flex justify-around text-lg">
//                             <div>
//                                 <p className="text-white">Home</p>
//                                 <p className="font-bold text-white bg-[#D6AE3E] p-4">{predictions.odds.home}</p>
//                             </div>
//                             <div>
//                                 <p className="text-gray-300">Draw</p>
//                                 <p className="font-bold text-white bg-[#D6AE3E] p-4">{predictions.odds.draw}</p>
//                             </div>
//                             <div>
//                                 <p className="text-gray-300">Away</p>
//                                 <p className="font-bold text-white bg-[#D6AE3E] p-4">{predictions.odds.away}</p>
//                             </div>
//                           </div>
//                        </div>
//                 </motion.div>
//         </div>
//     );
// }



