import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function LaLigaCard () {

    const [open, setOpen]= useState(true);

    const predictions ={
        homeLogo: "",
        homeTeam: "Barcelona",
        awayLogo: "",
        awayTeam: "Servila",
        leagueLogo: "/NPFL.jpg",
        league: "La Liga",
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
        odd: { Odds: "3.15", Tips: "over 1.5", Prop: "93.65%" }
    }
       
    return (
        <div className="border-none md:p-4 w-full my-2 md:my-0 min-w-full flex justify-center items-center flex-col text-white space-y-4 md:space-y-2">

            <div className="bg-[#1A365D] w-full flex justify-between items-center p-2 rounded-[0.6rem] hover:shadow-lg transition-all">
                    <h2 className="font-sans font-semibold">
                        {predictions.league}
                    </h2>
                <div onClick={()=> setOpen(!open)}>
                    {open ? (
                        <FaPlus />
                    ) : (
                        <FaMinus />
                    )}
                </div>

            </div>
            {open && (
            <motion.div
                className="min-w-fill lg:flex md:grid w-full text-white space-y-0 flex-col md:flex-row justify-center items-center gap-5 md:space-y-0 flex"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >

                <div className="border border-[#D6AE3E] flex justify-between mt-1 items-center w-ful flex-col md:flex-row md:p-0 rounded-[0.6rem] hover:shadow-lg transition-all  ">

                <div className="text-[#1A365D] flex justify-between items-center flex-col md:flex-row w-full space-y-2 px-4 md:px-0">
                    <div className="flex py-3 md:px-2">
                        <span className="font-sans font-semibold text-[#1A365D]">18:48</span>
                    </div>
                       <div className="flex justify-center md:flex-col items-start min-w-[130px] space-x-12  p-1 gap-18 md:gap-0 md:space-x-0 space-y-2 md:p-0 w-full">
                            <div className="flex justify-center items-center space-y-1">
                                <img
                                    src={predictions.homeLogo}
                                    // alt={predictions.homeTeam}
                                    className="md:w-10 md:h-10  w-6 h-6 rounded-full"
                                />
                                <span className="font-sans text-sm font-medium">{predictions.homeTeam}</span>
                            </div>

                            <div className="flex justify-center items-center">
                                <img
                                    src={predictions.awayLogo}
                                    // alt={predictions.awayTeam}
                                    className="md:w-10 md:h-10  w-6 h-6 rounded-full"
                                />
                                <p className="text-sm font-sans font-medium">{predictions.awayTeam}</p>
                            </div>
                       </div>
                   </div>

                 {/* Odds Section */}

                    <div className="flex justify-center items-center text-sm space-y-1 text-[#1A365D] gap-10 md:gap-4 md:p-4">
                        <div className="flex justify-center items-center flex-col w-full space-y-3 md:space-y-6">
                                <p className="px-3 font-semibold font-sans text-[#D6AE3E]">Odds</p>
                                <p className="font-bold text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-3 py-2  w-16">{predictions.odd.Odds}</p>
                        </div>
                        <div className="flex justify-center items-center flex-col space-y-3 md:space-y-6">
                                <p className="px-3 font-semibold font-sans text-[#D6AE3E]">Tips</p>
                                <p className="font-bold text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[11px] py-2 min-w-[50px]  w-16 text-center">{predictions.odd.Tips}</p>
                        </div>
                        <div className="flex justify-center items-center pb-2.5 flex-col space-y-3 md:space-y-6">
                                <p className="px-3 font-semibold font-sans text-[#D6AE3E]">Prop%</p>
                                <p className="font-bold text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-3 py-2  w-16">{predictions.odd.Prop}</p>
                        </div>
                    </div>
              </div>

              {/* second row */}
                <div className="border border-[#D6AE3E] flex justify-between items-center w-ful flex-col md:flex-row px-4 md:p-0 rounded-[0.6rem] hover:shadow-lg transition-all">

                <div className="text-[#1A365D] flex justify-between items-center flex-col md:flex-row w-full space-y-5">
                    <div className="flex py-1 md:px-2">
                        <span className="font-sans font-semibold text-[#1A365D]">13:28</span>
                    </div>
                       <div className="flex justify-center md:flex-col items-start min-w-[130px] space-x-10 p-1 gap-18 md:gap-0 md:space-x-0 md:space-y-6  space-y-3 md:p-0 w-full">
                            <div className="flex justify-center items-center space-y-1">
                                <img
                                    src={predictions.homeLogo}
                                    // alt={predictions.homeTeam}
                                    className="md:w-10 md:h-10 w-6 h-6 rounded-full"
                                />
                                <span className="font-sans text-sm font-medium">{predictions.homeTeam}</span>
                            </div>

                            <div className="flex justify-center items-center">
                                <img
                                    src={predictions.awayLogo}
                                    // alt={predictions.awayTeam}
                                    className="md:w-10 md:h-10  w-6 h-6 rounded-full"
                                />
                                <p className="text-sm font-sans font-medium">{predictions.awayTeam}</p>
                            </div>
                       </div>
                   </div>

                  {/* Odds Section */}

                    <div className="flex justify-center items-center text-sm space-y-1 text-[#1A365D] gap-10 md:gap-4 md:p-4">
                        <div className="flex justify-center items-center flex-col w-full space-y-3 md:space-y-6">
                                <p className="px-3 font-semibold font-sans text-[#D6AE3E]">Odds</p>
                                <p className="font-bold text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-3 py-2  w-16">{predictions.odd.Odds}</p>
                        </div>
                        <div className="flex justify-center items-center flex-col space-y-3 md:space-y-6">
                                <p className="px-3 font-semibold font-sans text-[#D6AE3E]">Tips</p>
                                <p className="font-bold text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-1 text-[11px] py-2 min-w-[50px]  w-16 text-center">{predictions.odd.Tips}</p>
                        </div>
                        <div className="flex justify-center items-center pb-2.5 flex-col space-y-3 md:space-y-6">
                                <p className="px-3 font-semibold font-sans text-[#D6AE3E]">Prop%</p>
                                <p className="font-bold text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] px-3 py-2  w-16">{predictions.odd.Prop}</p>
                        </div>
                    </div>
              </div>
            </motion.div>
            )}
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
    //         <div className="text-red-500 mt-10 md:h-[561px] h-[217px] rounded-[0.6rem] md:mb-14 bg-[#1a365d] max-w-[350px] md:max-w-[544px] w-full p-12 flex items-center flex-col">
    //             <p>😒😒 {error}</p>
    //             <p className="text-sm text-white">Please check your  connection.</p>
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
//                 className="max-w-md w-full bg-[#1A365D] text-white rounded-xl shadow-xl p-6 space-y-6 mt-10"
//                     initial={{ opacity: 0, y: 40 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.7, ease: "easeOut" }}
//                 >
//                     <h2 className="text-center text-lg sm:text-xl font-semibold text-white">
//                         Best Prediction of the Day
//                     </h2>

//                     <div className="flex justify-between items-center">
//                         <div className="flex flex-col items-center space-y-2">
//                             <img
//                                 src={predictions.homeLogo}
//                                 alt={predictions.homeTeam}
//                                 className="w-10 h-10"
//                             />
//                             <span className="text-sm font-medium">{predictions.homeTeam}</span>
//                         </div>

//                         <div className="text-center">
//                             <span className="text-white text-xs">{predictions.league}</span>
//                             <p className="text-sm mt-1">{predictions.time}</p>
//                             <p className="text-xs text-white">{predictions.date}</p>
//                         </div>

//                         <div className="flex flex-col items-center space-y-2">
//                             <img
//                                 src={predictions.awayLogo}
//                                 alt={predictions.awayTeam}
//                                 className="w-10 h-10"
//                             />
//                             <span className="text-sm font-medium text-white">{predictions.awayTeam}</span>
//                         </div>
//                     </div>

//                     {/* Odds Section */}
                    
//                        <div className="border-1 border-t-white/20">
//                          <h3 className="text-white font-semibold mb-2 text-sm">Match Odds</h3>
//                           <div className="flex justify-around text-sm">
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



